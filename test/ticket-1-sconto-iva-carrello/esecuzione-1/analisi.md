# Analisi, ticket 1 (103, sconto e IVA nel carrello), prova 1

Data: 2026-10-11. Fonti: `base-comune.md`, `scenario.md`, `diario.md`, i file di `esecuzione-1/103/`, Piano dei ticket, Regole comuni, Ciclo di sviluppo e le skill `kickoff-ticket`, `scheda-di-intervento`, `interpretazione-conversazioni`, `registro-decisioni`, `storico-lavorazione`, `revisione-codice`, `allineamento-documenti`, `manuale-del-prodotto`, `documento-tecnico`, `guida-alla-pubblicazione`, `pacchetto-di-garanzia`. Nessuna prova precedente: i test vecchi sono stati cancellati.

## 1. Sintesi

Il Piano dei ticket ha retto: il ticket è rimasto piccolo (45 minuti di analisi, 12 ore di lavoro, 4 documenti di lavoro e 3 aggiornamenti dei documenti del sistema), la risposta al cliente è un messaggio nel ticket, la chiusura è avvenuta alla pubblicazione, la garanzia è stata di 15 giorni lavorativi (fino al 10 novembre) e la segnalazione in garanzia ha seguito l'ambiguità del Manuale. Nessuna delle cose "che non devono succedere" è successa.

Dove ha tenuto meno: il caso è un'ambiguità del Manuale che richiede una decisione del referente prima di lavorare. I piani coprono bene il bug e la configurazione, meno bene la feature in attesa del referente (esiti non elencati, ticket invisibile in ClickUp, silenzio sul riepilogo). Altri punti deboli: la Guida alla pubblicazione che non copre il gestionale, il Manuale del sistema che è anche un documento confermato per un progetto aperto, e il peso del Registro delle decisioni per un ticket piccolo.

Nessuna osservazione ad alta gravità. Undici di gravità media, il resto bassa.

## 2. Controlli dello scenario

**Analisi**

- Urgenza dai fatti, normale: emerso.
- Confronto con i lavori aperti (101, comparatore 100), decisione sul 101 e sul suo essere un pacchetto di garanzia a sé: emerso.
- Controllo del codice: comportamento come scritto, non un bug, ambiguità del Manuale: emerso.
- Domanda puntuale a Franco con esempio numerico, ticket in attesa senza termini: emerso.
- Decisione di Franco da cercare prima della Scheda: emerso. La risposta di Marta non è stata presa come decisione: emerso.
- Esito complessivo (da rimandare, poi da fare): emerso in parte, con un esito non previsto dal testo (T1-3).
- Stima con affidabilità, categoria ticket: emerso.
- Decisioni in testa alla Scheda, nessuna Scheda di valutazione: emerso.
- Tempo della verifica entro il 10% della stima a occhio: emerso (45 minuti su 48).

**Scheda e sviluppo**

- Scheda con cosa fare, su cosa intervenire, stima, DoD, documenti collegati: emerso.
- Task in ClickUp nel Folder "Ticket" in BACKLOG con campi e checklist: emerso, ma solo a scheda completa (T1-5).
- Ingresso nel primo sprint con capacità, dalle persone sempre disponibili, nessun documento di sprint: emerso in parte, perché la base non dice il carico completo (T1-9).
- Revisione del codice dal team lead, con ciò che non ha controllato: emerso.
- Correzione di "Su cosa intervenire" e stima aggiornata dopo la scoperta del gestionale: emerso in parte (T1-11).
- Ore tracciate sul task: emerso (11 più 2).

**Rilascio**

- Risposta nel ticket, breve, senza file, moduli, ore o causa; nessun documento: emerso. Una frase aggiunta oltre la Scheda (T1-13).
- Pubblicazione secondo la Guida, con la lacuna sul gestionale dichiarata; nessuna scheda tecnica: emerso.
- Chiusura alla pubblicazione, garanzia di 15 giorni lavorativi: emerso (fino al 10 novembre).
- Aggiornamento di Manuale, Documento tecnico e Guida dopo la chiusura, con ricerca dei lavori collegati per codice: emerso in parte (T1-14, T1-16).

**Eventi**

- 5 ottobre, Marta non sa cosa si aspettano i clienti, domanda per Franco: emerso.
- 13 ottobre, risposta di Franco per telefono dopo 5 giorni lavorativi: emerso.
- 15 ottobre, gestionale scoperto, stima rivista, resta un ticket: emerso.
- 20 ottobre, pubblicazione e chiusura: emerso.
- 28 ottobre, totale negativo in garanzia: emerso, con un comportamento preesistente non previsto dalla skill (T1-17).

**Cosa non deve succedere**

- Decidere da soli o prendere Marta come decisione: non successo.
- Scheda di valutazione o secondo documento di analisi: non successo (la bozza è la stessa Scheda).
- Risposta al cliente con file, moduli, ore o causa: non successo.
- Ticket che aspetta i documenti per chiudersi: non successo.
- Scheda tecnica di rilascio per un ticket: non successo.

## 3. Documenti

Prodotti, in `esecuzione-1/103/`:

- `storico.md`, `decisioni.md`.
- `01-analisi`: `domanda-per-franco-2026-10-05.md`, `trascrizione-2026-10-13-franco.md`, `sintesi-conversazione-lumera-103-2026-10-13.md`, `scheda-di-intervento-103.md`.
- `04-garanzia`: `risposta-cliente-2026-10-29.md`.
- `sistema/`: Manuale v1.4, Documento tecnico v1.3, Guida alla pubblicazione v1.1, scritti per intero (derivati dai documenti di `test/sistema-base/`).

Mancanti: nessuno. In più: nessuno. Fuori posto: nessuno. La domanda per Franco non è un documento previsto dal piano e non ha una sottofase: lo scenario la chiedeva, il piano non la nomina (T1-4).

Ricerca dei caratteri vietati e della prima o seconda persona sui file dell'esecuzione: nessun risultato. Il controllo è stato fatto a ricerca, non con lo script delle skill.

## 4. Osservazioni

Ordinate per gravità (tutte media o bassa), poi per codice.

**Media**

- **T1-3, Buco.** Dove: Regole comuni (esito della verifica) e `kickoff-ticket` (decisioni, punto 3). Cosa è successo: "da rimandare" è definito per conflitto, sviluppo in corso e bug non riprodotto. Un'ambiguità del Manuale in attesa della decisione del referente non è nell'elenco, e per usare l'esito serve un'interpretazione. Correzione proposta: aggiungere a "da rimandare" il caso "in attesa di una decisione del referente su un'ambiguità del Manuale", con l'evento che la riapre (la risposta) e chi la riesamina (chi analizza).
- **T1-5, Buco.** Dove: Piano dei ticket (fase 1 e imprevisti), `scheda-di-intervento` (task in ClickUp). Cosa è successo: il task si crea a scheda completa, quindi un ticket sospeso in attesa del referente non esiste in ClickUp e nessuno lo vede, nemmeno il supervisore. Correzione proposta: creare il task in BACKLOG all'analisi, con un'etichetta "in attesa del cliente" che si toglie alla risposta; la checklist e i campi si completano con la Scheda.
- **T1-7, Manca.** Dove: `interpretazione-conversazioni` e Piano dei ticket. Cosa è successo: una decisione a voce del referente vale dopo il riepilogo scritto, ma il testo non dice se serve una risposta del cliente al riepilogo. Per un ticket il lavoro parte sul silenzio. Correzione proposta: dichiarare nel Piano dei ticket che per un ticket il riepilogo scritto basta, senza risposta, e che la responsabilità resta di chi lo invia.
- **T1-12, Manca.** Dove: Guida alla pubblicazione del sistema, Piano dei ticket (rilascio), Ciclo di sviluppo (DoD base). Cosa è successo: la Guida v1.0 copre sito e API, non il gestionale. L'incaricato ha pubblicato il gestionale senza una regola. La DoD base chiede l'annotazione solo a chi cambia il modo di pubblicare, non a chi scopre un buco. Correzione proposta: la Guida dichiara all'inizio i repository che copre; l'incaricato, davanti a un repository non coperto, lo annota con l'etichetta `guida` nello stesso giorno.
- **T1-14, Contraddizione.** Dove: `allineamento-documenti` (regola sui documenti approvati dal cliente) e `manuale-del-prodotto` (il Manuale appartiene al sistema). Cosa è successo: il Manuale del sistema contiene le story del comparatore, confermate da Franco per un progetto aperto. Il testo dice sia di non modificarlo in silenzio sia di aggiornarlo. Si è scelto di cambiare solo F3 e di avvisare il project manager 1. Correzione proposta: chiarire che il vincolo vale per le story confermate per il lavoro aperto (qui F10, F11, F12); le altre story si aggiornano, con avviso al responsabile del lavoro aperto.
- **T1-15, Peso.** Dove: Piano dei ticket (fase 3.2). Cosa è successo: dopo la chiusura servono `allineamento-documenti`, `manuale-del-prodotto`, `documento-tecnico` e `guida-alla-pubblicazione` per un ticket da 12 ore, con tre versioni dei documenti del sistema. Il costo è vicino a quello della modifica del codice stesso. Correzione proposta: per un ticket, il rapporto di impatto e le versioni si limitano alle sezioni toccate (come nella prova: solo i capitoli toccati); i documenti del sistema si salvano a una sola versione per giorno. Da decidere se tenere la Guida e il Documento tecnico tra le versioni obbligatorie quando il ticket non cambia struttura.
- **T1-17, Buco.** Dove: `pacchetto-di-garanzia`. Cosa è successo: una segnalazione su un comportamento preesistente, non nato dal lavoro rilasciato, emerge in garanzia. Le categorie della skill non lo distinguono: è un'ambiguità e una piccola richiesta, ma non un difetto del lavoro. Si è trattata come variazione piccola coperta. Correzione proposta: aggiungere una domanda al passo 2 ("il comportamento c'era prima del rilascio?") e dire che una richiesta piccola su un comportamento preesistente rientra comunque nel limite di 4 ore o diventa un ticket nuovo, a scelta del responsabile.
- **T1-21, Peso.** Dove: Regole comuni (storico e decisioni), skill `registro-decisioni`. Cosa è successo: DEC1, DEC2 e DEC4 ripetono ciò che le decisioni dell'analisi dicono già in testa alla Scheda (urgenza, categoria, rapporto con il 101, nuova stima). Sono 6 voci per un ticket da 12 ore. Correzione proposta: per un ticket il Registro delle decisioni riporta solo le decisioni del cliente e quelle prese fuori dall'analisi (DEC3, DEC5, DEC6); le decisioni dell'analisi restano nella Scheda.
- **T1-2, Buco.** Dove: `kickoff-ticket`, Parte B. Cosa è successo: nessun esito descrive "il comportamento è come scritto, non è un bug, la richiesta è una feature su un comportamento non documentato". Si è usato il caso più vicino ("intervento come appare"). Correzione proposta: aggiungere l'esito "comportamento non documentato: la richiesta è una feature" e rimandarlo al criterio bug, ambiguità, richiesta nuova delle Regole comuni.
- **T1-1, Buco.** Dove: Regole comuni (confronto con i lavori aperti) e `kickoff-ticket`, Parte A. Cosa è successo: nessun esito per un ticket aperto che tocca lo stesso codice senza essere un doppione. Correzione proposta: aggiungere "stessa parte di codice di un altro ticket aperto" con le opzioni: unire, ordinare in sequenza con lo stesso responsabile, rimandare.
- **T1-11, Buco.** Dove: `scheda-di-intervento`, "Correzione a fine lavoro". Cosa è successo: la correzione a metà lavoro con stima nuova non ha regola: chi riscrive la stima, chi valida, come si avvisa il supervisore. Correzione proposta: nella skill, una voce "Correzione durante il lavoro" che dica: lo sviluppatore corregge "Su cosa intervenire", chi analizza riscrive "Stima" e la marca da validare, il supervisore la ricontrolla.

**Bassa**

- **T1-4, Contraddizione.** Dove: `kickoff-ticket` (domande per il cliente "senza soluzioni né alternative"). Cosa è successo: la domanda per Franco ha senso solo con le due alternative e un esempio. Il piano non nomina il documento "domanda per Franco", che è un messaggio nel ticket. Correzione proposta: dire che le domande che chiedono una scelta contengono le alternative e un esempio, senza proporre la soluzione.
- **T1-6, Passaggio.** Dove: `kickoff-ticket` e `scheda-di-intervento`. Cosa è successo: le decisioni dell'analisi vanno "in testa alla Scheda", ma con la Scheda in bozza non c'è un posto stabile. Correzione proposta: dichiarare che la bozza della Scheda è il posto delle decisioni.
- **T1-9, Manca.** Dove: base. Cosa è successo: il carico completo dello sviluppatore 3 nello sprint 4 non è dato; il calcolo copre solo 101, 102 e 103. Correzione proposta: aggiungere alla base il carico di ogni persona sempre disponibile.
- **T1-10, Buco.** Dove: Manuale e Scheda di intervento. Cosa è successo: una scelta di comportamento (ripartizione dell'importo tra aliquote) è presa in sviluppo. Correzione proposta: nella Scheda una voce "Scelte aperte" per quelle che il responsabile prende e che il cliente potrebbe notare, da riportare in Manuale e nel Registro delle decisioni.
- **T1-13, Superfluo.** Dove: Piano dei ticket (risposta al cliente). Cosa è successo: la risposta ha una deduzione ("ordini già pagati non modificati") che la Scheda non prevede. Correzione proposta: nessuna: va bene se il responsabile è sicuro; aggiungere solo una nota che la risposta contiene fatti della Scheda.
- **T1-16, Base.** Dove: base. Cosa è successo: manca la Scheda del ticket 101 e i documenti della lavorazione 96, quindi l'allineamento non ha potuto controllarli. Correzione proposta: dare alla base una riga per ognuno.
- **T1-18, Manca.** Dove: `pacchetto-di-garanzia` e base. Cosa è successo: l'urgenza di una segnalazione in garanzia non si verifica sui fatti (come reagisce il pagamento a un totale negativo). Correzione proposta: nel passo 4, ripetere la regola dell'urgenza sui fatti e dire che, se i fatti non bastano, si propone il livello più alto con la domanda che scioglie il dubbio.
- **T1-19, Peso.** Dove: Piano dei ticket (garanzia). Cosa è successo: la risposta di garanzia è un file in `04-garanzia` per un messaggio di tre righe. Correzione proposta: nessuna file: la risposta sta nel ticket e la voce nello storico; la cartella `04-garanzia` resta per i progetti.
- **T1-20, Passaggio.** Dove: `pacchetto-di-garanzia`, elenco delle cause. Cosa è successo: manca "requisito non definito dal Manuale". Correzione proposta: aggiungerlo, o ridefinire "requisito frainteso".
- **E1, Esecuzione.** Dove: versioni di Manuale e Documento tecnico. Cosa è successo: la prima stesura citava la segnalazione del 28 ottobre in documenti datati 21 ottobre. Corretto prima dell'analisi. Nessuna modifica ai piani.
- **Nota non di test.** Il testo del Piano dei ticket aveva tre segnaposto `${q}` al posto dell'apostrofo; sono stati corretti nel working tree durante la sessione.

## 5. Peso della procedura

- **Costo del ticket.** Analisi 45 minuti, domanda per Franco, telefonata (4 file con sintesi e riepilogo), Scheda, revisione, risposta, tre aggiornamenti dei documenti, rapporto di impatto, storico (10 voci), Registro delle decisioni (6 voci), garanzia con un file.
- **Più pesanti.** Il Registro delle decisioni per le decisioni di analisi (T1-21), l'aggiornamento dei documenti dopo la chiusura (T1-15), la sintesi di una telefonata di un minuto in tre parti.
- **Proposte.** Registro delle decisioni solo per decisioni del cliente e prese fuori dall'analisi. Per il rapporto di impatto di un ticket, un elenco di una riga per documento. Per una telefonata con una sola decisione, la sintesi può essere il solo riepilogo scritto (le parti 1 e 2 sono già nello storico e nel Registro).

## 6. Confronto con la prova precedente

Non c'è. Le prove precedenti sono state cancellate e questa è la prima sulle versioni attuali.

## 7. Decisioni per Leonardo

1. **Esito per un'ambiguità in attesa del referente (T1-3, T1-2, T1-1).** Opzioni: (a) aggiungere i casi mancanti agli esiti delle Regole comuni e di `kickoff-ticket`; (b) lasciare e dichiarare che "da rimandare" vale per ogni attesa. Raccomandato (a).
2. **Il ticket in attesa nel sistema (T1-5).** Opzioni: (a) task subito in BACKLOG con etichetta "in attesa del cliente"; (b) nessun task finché non c'è la Scheda. Raccomandato (a), perché il supervisore vede la coda.
3. **Manuale confermato per un lavoro aperto (T1-14).** Opzioni: (a) il vincolo vale solo per le story confermate per quel lavoro; (b) ogni modifica richiede il benestare del responsabile del lavoro aperto. Raccomandato (a) con avviso.
4. **Registro delle decisioni di un ticket (T1-21).** Opzioni: (a) solo decisioni del cliente e fuori analisi; (b) come ora. Raccomandato (a).
5. **Aggiornamento dei documenti di un ticket (T1-15).** Opzioni: (a) solo le sezioni toccate, una versione; (b) come ora. Raccomandato (a).
6. **Segnalazione su comportamento preesistente in garanzia (T1-17).** Opzioni: (a) domanda in più nella skill e scelta del responsabile; (b) sempre ticket nuovo. Raccomandato (a).

## 8. Aggiunta: documenti del sistema scritti per intero

Dopo la prima stesura di questa analisi, Leonardo ha chiesto i documenti del sistema per intero al posto degli estratti. I documenti di partenza stanno ora in `test/sistema-base/` (Manuale v1.3, Documento tecnico v1.2, Guida alla pubblicazione v1.0, comuni a tutti gli scenari sul sito). In `103/sistema/` stanno le versioni aggiornate dal ticket: Manuale v1.4, Documento tecnico v1.3, Guida v1.1. I passi del ticket non sono stati rifatti: i documenti sono la versione intera di ciò che il diario descriveva. I controlli sui caratteri e sulla persona, fatti a ricerca, non danno risultati.

Misure sui documenti interi: Manuale 211 righe, Documento tecnico 134, Guida 53. Il ticket tocca nel Manuale cinque punti (glossario, F3.4, tracciabilità, domande aperte, modifiche), nel Documento tecnico quattro capitoli (5, 9, 10, 12), nella Guida due punti (blocco "Cosa manca" e cronologia).

- **T1-22, Base.** Dove: base. Cosa è successo: scrivendo il Manuale v1.3 sono emersi tre difetti della base: i codici F6-F9 non erano assegnati (il comparatore parte da F10), le ore del SAL2 del comparatore (240 più 48 di buffer) non entravano nella capacità di due sviluppatori fino al 30 ottobre, e il Documento tecnico non può citare il modulo `disponibilita` (lo vuole la base). Sono stati corretti nella base (SAL2: 140 ore, buffer 28, margine 16). Correzione proposta: nessuna ai piani.
- **T1-23, Contraddizione.** Dove: `manuale-del-prodotto` (approvazione e aggiornamenti) e il ticket. Cosa è successo: la skill dice che la versione confermata non contiene domande aperte, ma il ticket scopre che F3.3 (30 giorni) non coincide con il codice (90 giorni) e non può risolverlo senza il cliente. Nel Manuale v1.4 il capitolo 10 contiene quindi una domanda ancora aperta. Correzione proposta: dire che un aggiornamento può aggiungere domande aperte per il cliente, con il codice D successivo, e che non bloccano né il rilascio né la chiusura del ticket.
- **T1-24, Buco.** Dove: `pacchetto-di-garanzia` e Piano dei ticket (garanzia). Cosa è successo: la correzione in garanzia del 29 ottobre (il totale non scende sotto zero) cambia un comportamento che il Manuale v1.4 non descrive (F3.4 non ha il caso "sconto superiore al totale"). I documenti sono stati chiusi il 21 ottobre e nessuna skill li riapre dopo una correzione di garanzia: il Manuale e il Documento tecnico restano senza quel caso. Correzione proposta: nel pacchetto di garanzia, se una correzione cambia un comportamento, aggiungere un passo che aggiorna Manuale e Documento tecnico.
- **T1-25, Peso (conferma di T1-15).** Dove: Piano dei ticket (fase 3.2). Cosa è successo: con i documenti interi si vede che il ticket tocca cinque punti del Manuale e quattro capitoli del Documento tecnico, più la cronologia e la tracciabilità. La correzione T1-15 (solo le sezioni toccate) regge, ma tracciabilità e capitolo delle modifiche vanno comunque aggiornati. Correzione proposta: come T1-15, dichiarando che questi due capitoli fanno parte delle sezioni toccate.
