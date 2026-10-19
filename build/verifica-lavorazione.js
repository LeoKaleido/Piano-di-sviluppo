// Controlla la cartella di una lavorazione (o di una prova di test) contro le regole della struttura:
// radice con PDF numerati, catena delle versioni, niente 'invariato' o rimandi, tabelle solo nel Piano dei SAL,
// caratteri vietati, termini interni nei documenti per il cliente, etichette e ordine dello storico, nomi in source.
// Uso: node build/verifica-lavorazione.js percorso\della\lavorazione   (richiede Node)
const fs=require('fs'),path=require('path');
const R=process.argv[2];
const out=[]; const ko=(m)=>out.push('KO  '+m); const ok=(m)=>out.push('ok  '+m);
function walk(d,o=[]){for(const f of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,f.name);f.isDirectory()?walk(p,o):o.push(p)}return o}
const files=walk(R); const rel=f=>path.relative(R,f).replace(/\\/g,'/');
const md=files.filter(f=>f.endsWith('.md'));
// 1 posti e PDF
const root=fs.readdirSync(R).filter(n=>fs.statSync(path.join(R,n)).isFile());
const pdfRoot=root.filter(n=>n.endsWith('.pdf')).sort();
const nums=pdfRoot.map(n=>+n.slice(0,2));
(pdfRoot.length&&nums.every((n,i)=>n===i+1))?ok('radice: '+pdfRoot.join(', ')+' (numeri senza buchi)'):ko('radice PDF/numerazione: '+pdfRoot.join(', '));
root.filter(n=>!n.endsWith('.pdf')).length?ko('file non PDF nella radice'):ok('radice solo PDF');
const dirs=fs.readdirSync(R).filter(n=>fs.statSync(path.join(R,n)).isDirectory()).sort();
ok('cartelle: '+dirs.join(', '));
files.filter(f=>f.endsWith('.pdf')&&rel(f).includes('/')).length?ko('PDF fuori dalla radice: '+files.filter(f=>f.endsWith('.pdf')&&rel(f).includes('/')).map(rel).join(', ')):ok('nessun PDF fuori dalla radice (develop senza PDF)');
// 2 catena versioni
const chain={};
for(const f of fs.readdirSync(R+'/claude')){ const m=f.match(/^(.+?)-v(\d+)\.(\d+)\.md$/); if(m){ (chain[m[1]]??=[]).push([+m[2],+m[3]]); } }
for(const [tipo,v] of Object.entries(chain)){
  v.sort((a,b)=>a[0]-b[0]||a[1]-b[1]);
  let gaps=[];
  if(tipo==='piano-dei-sal'){ /* v1, v2: formato diverso */ }
  if(tipo==='manuale-del-prodotto'||tipo==='documento-tecnico'){
    const exp=[]; for(let i=0;i<v.length;i++) exp.push(v[i][0]+'.'+v[i][1]);
    const ok2=v.every((x,i)=>{ if(i===0) return (x[0]===1&&x[1]===0)||(x[0]===0&&x[1]===1); const p=v[i-1]; return (x[0]===p[0]&&x[1]===p[1]+1)||(p[0]===0&&x[0]===1&&x[1]===0); });
    ok2?ok('catena '+tipo+': '+exp.join(', ')):ko('catena '+tipo+' con buchi: '+exp.join(', '));
  }
}
const prop=fs.readdirSync(R+'/claude').filter(f=>f.startsWith('proposta-di-soluzione'));
ok('proposta: '+prop.join(', '));
if(prop.length) (prop.includes('proposta-di-soluzione.md')&&!prop.some(f=>/v1\./.test(f)))?ok('Proposta confermata senza versione, nessuna v1.x'):ko('naming Proposta');
const sal=fs.readdirSync(R+'/claude').filter(f=>f.startsWith('piano-dei-sal')); ok('piano dei SAL: '+sal.join(', '));
// 3 niente invariato / rimandi
for(const f of md.filter(f=>rel(f).startsWith('claude/'))){
  const t=fs.readFileSync(f,'utf8'); const L=t.split('\n'); let inMod=false;
  L.forEach((x,i)=>{
    if(/^##+ .*Modifiche rispetto/.test(x)) inMod=true; else if(/^## /.test(x)) inMod=false;
    if(!inMod&&/\binvariat[oa]\b|come nella v|resta quello delle|vedi la v\d|rispetto alla v\d|Deriva dalla|dalla versione precedente/i.test(x)&&!/listino invariato/.test(x)) ko(`rimando/invariato in ${rel(f)}:${i+1}: ${x.slice(0,100)}`);
  });
}
ok('controllo "invariato" e rimandi eseguito su claude/');
// 4 intestazione versione
for(const f of md.filter(f=>/claude\/(manuale-del-prodotto|documento-tecnico)-v/.test(rel(f)))){
  const v=rel(f).match(/-v(\d+\.\d+)\.md$/)[1]; const t=fs.readFileSync(f,'utf8');
  new RegExp('Versione '+v.replace('.','\\.')).test(t.split('\n').slice(0,6).join('\n'))?null:ko('intestazione versione diversa dal nome: '+rel(f));
}
ok('intestazione versione = nome file per Manuale e Documento tecnico');
// 5 riferimenti DT -> Manuale
for(const f of fs.readdirSync(R+'/claude').filter(n=>/^documento-tecnico-v/.test(n))){ const h=fs.readFileSync(R+'/claude/'+f,'utf8').split('\n').slice(0,6).join(' '); const mm=h.match(/Manuale v(\d+\.?\d+)/); if(!mm) ko(f+' non cita il Manuale'); else if(!fs.existsSync(R+'/claude/manuale-del-prodotto-v'+mm[1]+'.md')) ko(f+' cita il Manuale v'+mm[1]+' che non esiste in claude'); }
ok('DT cita il Manuale giusto');
// 6 tabelle
for(const f of md){ const t=fs.readFileSync(f,'utf8'); const has=/^\|.*\|\s*$/m.test(t); if(has&&!/^claude\/piano-dei-sal/.test(rel(f))) ko('tabella fuori dal Piano dei SAL: '+rel(f)); }
ok('tabelle solo nel Piano dei SAL');
for(const f of md.filter(f=>/^claude\/piano-dei-sal/.test(rel(f)))){ const t=fs.readFileSync(f,'utf8'); (t.match(/^\|/gm)||[]).length>=6?null:ko('Piano dei SAL senza tabelle: '+rel(f)); }
// 7 caratteri e persona
const re=/[«»“”‘’–—·…→←✓•]|[\u{1F300}-\u{1FAFF}]/u;
for(const f of md){ fs.readFileSync(f,'utf8').split('\n').forEach((x,i)=>{ if(re.test(x)) ko('carattere vietato '+rel(f)+':'+(i+1)); }); }
ok('caratteri vietati controllati');
// 8 documenti per il cliente senza tecnologie/ore/prezzi
const cliente=md.filter(f=>/claude\/(proposta-di-soluzione|piano-dei-sal)/.test(rel(f))||/^source\/\d{4}-\d{2}-\d{2}-(invio|domande|riepilogo|comunicazione|invito|piano-di-rilascio|avviso|risposta-garanzia)/.test(rel(f)));
const vietate=/\b(SSR|API|database|React|migrazion\w*|repository|buffer|issue|ClickUp|sviluppator\w*|prezzo del servizio)\b|\b\d+ ore\b/i;
for(const f of cliente){ fs.readFileSync(f,'utf8').split('\n').forEach((x,i)=>{ if(vietate.test(x)) ko(`termine interno in documento per il cliente ${rel(f)}:${i+1}: ${x.slice(0,90)}`); }); }
ok('documenti per il cliente controllati ('+cliente.length+' file)');
// 9 History and decision: gruppi, titoli, campi, etichette, ordine
const lab=['Fase completata','Conferma','Richiesta','Decisione','Variazione','Riprogrammazione','Imprevisto','Ritardo del cliente','Blocco','Persone','Prova o collaudo','Stato di partenza','Rilascio','Garanzia','Altro'];
const gruppi=['Kickoff','Analisi','Sviluppo','Rilascio','Garanzia'];
const hp=R+'/log/history-and-decision.md';
if(fs.existsSync(R+'/log/storico.md')||fs.existsSync(R+'/log/decisioni.md')) ko('esistono storico.md o decisioni.md: sono un solo file, history-and-decision.md');
if(!fs.existsSync(hp)) ko('manca log/history-and-decision.md');
const hist=fs.existsSync(hp)?fs.readFileSync(hp,'utf8'):'';
const HL=hist.split('\n');
const voci=[]; let cur=null, gruppo='';
HL.forEach((l,i)=>{
  let m;
  if((m=l.match(/^## (.+)$/))){ gruppo=m[1]; if(!gruppi.includes(gruppo)) ko('gruppo non previsto: '+gruppo); cur=null; return; }
  if((m=l.match(/^### (\d{4}-\d{2}-\d{2}), (.+)$/))){ cur={data:m[1],titolo:m[2],gruppo,riga:i+1,corpo:[]}; voci.push(cur); return; }
  if(cur) cur.corpo.push(l);
});
let prev='';
for(const v of voci){
  if(v.data<prev) ko('History and decision fuori ordine: '+v.data+' '+v.titolo.slice(0,40)); prev=v.data;
  const tipo=v.titolo.replace(/ (V|DEC)\d+.*$/,'').replace(/:.*$/,'');
  if(!lab.includes(tipo)) ko('etichetta non prevista: "'+tipo+'" in '+v.data);
  if(!v.gruppo) ko('voce fuori da un gruppo: '+v.data+' '+v.titolo.slice(0,40));
  const corpo=v.corpo.join('\n');
  const campi=['Fase','Cosa','Effetto','Riferimenti'];
  if(tipo==='Decisione') campi.push('Chi ha deciso','Motivo','Alternative scartate');
  if(tipo==='Variazione') campi.push('Stato');
  for(const c of campi) if(!new RegExp('^- \\*\\*'+c+'\\.\\*\\*','m').test(corpo)) ko('campo "'+c+'" mancante: '+v.data+' '+v.titolo.slice(0,40));
  if(tipo==='Decisione'&&!/^Decisione DEC\d+: /.test(v.titolo)) ko('decisione senza codice: '+v.titolo.slice(0,50));
  if(tipo==='Variazione'&&!/^Variazione V\d+$/.test(v.titolo)) ko('variazione senza codice: '+v.titolo.slice(0,50));
}
const dec=voci.filter(v=>/^Decisione DEC/.test(v.titolo)).map(v=>v.titolo.match(/DEC(\d+)/)[1]);
if(new Set(dec).size!==dec.length) ko('codici DEC ripetuti');
ok('History and decision: '+voci.length+' voci ('+dec.length+' decisioni), gruppi, campi, ordine e etichette controllati');
// 10 source: nomi con data
for(const f of fs.readdirSync(R+'/source')) if(!/^\d{4}-\d{2}-\d{2}-/.test(f)) ko('source senza data: '+f);
ok('nomi in source con la data davanti ('+fs.readdirSync(R+'/source').length+' file)');
// 11 messaggi citati in History and decision esistono
for(const m of hist.matchAll(/`?(source\/[A-Za-z0-9._-]+)`?/g)) if(!fs.existsSync(R+'/'+m[1])) ko('messaggio citato e mancante: '+m[1]);
ok('messaggi citati in History and decision presenti');
// 12 develop senza PDF, Milestone report interno
if(fs.existsSync(R+'/develop')) (fs.readdirSync(R+'/develop').some(f=>f.endsWith('.pdf'))?ko('PDF in develop'):ok('develop senza PDF'));

// 13 indice dei lavorazioni minori chiuse e stato delle variazioni
{ const codice=path.basename(R); const idxp=path.join(R,'..','lavorazioni-minori-chiuse.md');
  const haScheda=fs.readdirSync(R+'/claude').some(f=>/^scheda-di-intervento-/.test(f));
  if(haScheda){ (fs.existsSync(idxp)&&fs.readFileSync(idxp,'utf8').includes('- '+codice+',')) ? ok('indice lavorazioni-minori-chiuse.md con la riga del ticket '+codice) : ko('manca la riga del ticket '+codice+' in lavorazioni-minori-chiuse.md');
    const hasRil=voci.some(v=>/^Rilascio/.test(v.titolo)&&/Dettagli/.test(v.corpo.join('\n')));
    hasRil?ok('ticket: voce di Rilascio con i Dettagli sull\'effetto sui documenti'):ko('ticket: manca la voce di Rilascio con i Dettagli sull\'effetto sui documenti');
    for(const f of fs.readdirSync(R+'/claude').filter(f=>/^scheda-di-intervento-/.test(f))){ const s=fs.readFileSync(R+'/claude/'+f,'utf8'); if(/Cosa è stato fatto|Effetto sui documenti del sistema/.test(s)) ko('cronaca nella Scheda ('+f+'): va in History and decision'); } }
  const last={}; voci.filter(v=>/^Variazione V/.test(v.titolo)).forEach(v=>{ last[v.titolo]=v; });
  const nv=Object.keys(last).length; if(nv) ok('variazioni: '+nv+' codici, ognuno con lo stato'); }

// 14 documenti-piano senza avanzamento: Documento tecnico e Piano dei SAL non portano stati, ore reali, consegne
{ const cd=R+'/claude'; let bad=0;
  if(fs.existsSync(cd)) for(const f of fs.readdirSync(cd)){
    if(/^documento-tecnico-/.test(f)){ const t=fs.readFileSync(cd+'/'+f,'utf8'); if(/Stato: (Da avviare|In corso|Consegnata|Accettata)|Ore reali/.test(t)){ ko('avanzamento nel Documento tecnico ('+f+'): stato delle milestone o ore reali vanno in History and decision'); bad++; } }
    if(/^piano-dei-sal-/.test(f)){ const t=fs.readFileSync(cd+'/'+f,'utf8'); if(/^\|.*\| *Stato *\|\s*$/m.test(t)){ ko('colonna Stato nel Piano dei SAL ('+f+')'); bad++; } }
  }
  if(!bad) ok('Documento tecnico e Piano dei SAL senza avanzamento'); }
console.log(out.join('\n'));
