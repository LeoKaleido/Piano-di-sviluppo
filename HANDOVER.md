# Handover: piani operativi e skill per lo sviluppo web

Data: 3 ottobre 2026. Utente: Leonardo Bisolfati, product lead di un'azienda di sviluppo web. Si lavora in italiano.

## 1. Obiettivo

Costruire il processo operativo per i lavori dei clienti, dalla richiesta alla messa in produzione, e le skill di Claude che producono ogni documento del processo.

Il processo distingue tre taglie di lavoro:

- **ticket**: intervento su un sistema esistente, da poche ore a 2 settimane;
- **progetto**: lavoro strutturato su un sistema esistente. È il caso principale;
- **prodotto**: sistema nuovo, costruito da zero. Raro.

## 2. Stato a oggi

Fatto:

- quattro documenti del piano, riscritti e coerenti tra loro (sezione 4);
- 16 skill scritte e impacchettate (cartella `skills/` di questo pacchetto);
- quattro presentazioni per il CEO;
- documento "Base per il test delle skill", con un cliente inventato.

Non allineato alla versione attuale dei piani (da fare, sezione 7):

- le 16 skill;
- le quattro presentazioni;
- la base per il test.

Non ancora iniziato: il test logico delle skill.

## 3. Regole di scrittura (vincolanti per documenti e skill)

- Lingua italiana, forma impersonale. Nessun riferimento a chi fa cosa: non "il PL parla con il cliente" ma "si comunica con il cliente". Nessun riferimento all'utente.
- Nei documenti per il cliente, il cliente è chiamato per nome, sempre lo stesso.
- Un solo nome per ogni cosa (lessico unico, sezione 5).
- Niente tabelle nei piani: elenchi. Grassetti ed elenchi puntati sono ammessi.
- Niente conteggi nel testo ("i documenti sono otto"): si rompono a ogni modifica.
- Solo caratteri digitabili da una tastiera italiana. Vietati: virgolette basse, virgolette curve, punto mediano come separatore, trattino lungo e medio come separatori, puntini di sospensione come carattere unico, frecce, simboli decorativi, emoji. Si usano virgolette dritte, virgole, due punti, parentesi, trattino normale. Le lettere accentate sono normali.
- Prezzi e preventivi sono fuori ambito: li segue un'altra persona.
- I documenti stanno su Drive (scelta provvisoria).
- I mockup si disegnano in Figma Starter (gratuito), da una persona dedicata o da un programmatore.
- L'utente vuole risposte dirette e documenti completi e autonomi.

Lo script `build/controlla_caratteri.py` trova i caratteri vietati (`--correggi` sistema virgolette e puntini).

## 4. Documenti del piano

Sono documenti Claude Docs, privati dell'utente. Si leggono e si modificano con gli strumenti Docs, non con il fetch web.

- **Regole comuni**: https://claude.ai/code/artifact/ec03c479-7774-47f4-bfc8-6324ff91caca
- **Piano dei ticket**: https://claude.ai/code/artifact/a8ce9578-e734-4bf2-bac5-ad10453a1738
- **Piano di progetto**: https://claude.ai/code/artifact/912ade64-41b7-4560-a93f-9d6737dafa36
- **Piano di prodotto**: https://claude.ai/code/artifact/3966a348-edcb-4a50-a475-82e881cdc075
- **Base per il test delle skill**: https://claude.ai/code/artifact/2fc70a4b-3434-4277-8aeb-8aa777446433

Nel Piano di progetto c'è un commento ancorato alla voce "Prezzo fisso o a consumo" delle decisioni: quel blocco non va cancellato.

### Struttura

Le **Regole comuni** contengono tutto ciò che vale per ogni taglia: glossario, principi, taglie e classificazione, verifica preliminare, contatti con il cliente, documenti, strumenti visivi, materiali del cliente, organizzazione del lavoro, date, variazioni, bug e garanzia, quando un lavoro si ferma, imprevisti durante lo sviluppo, decisioni ancora da prendere.

I tre piani contengono solo ciò che è proprio della taglia: quando si applica, il flusso a fasi con una condizione di chiusura verificabile per fase, i documenti, i contatti, gli imprevisti per fase, le decisioni proprie.

### Fasi

Ticket (7): ingresso, scheda, conferma, pianificazione, esecuzione, prova e rilascio, chiusura. Percorsi abbreviati: ticket bloccante (percorso d'urgenza), bug in garanzia, assistenza sotto soglia.

Progetto (8): ingresso e classificazione, primo confronto, indagine sull'esistente, proposta, revisione e conferma, documentazione di progetto, sviluppo, rilascio.

Prodotto (10): ingresso e classificazione, qualifica e primo confronto, analisi del contesto, proposta, revisione e conferma, prototipo e design, documentazione di progetto, sviluppo, lancio, passaggio a regime.

### Regole chiave

- **Classificazione.** È un progetto se vale almeno una condizione: stima oltre 2 settimane, più di una persona, serve una proposta, cambia l'aspetto grafico. Sistema che non esiste: prodotto. Cliente nuovo: accordo quadro prima, in ogni taglia.
- **Verifica preliminare.** Su ogni richiesta, dopo aver assegnato l'urgenza: confronto con i lavori aperti e controllo del codice. Produce l'elenco di lavori e documenti toccati, riusato dall'allineamento. Nel prodotto guarda solo i lavori aperti. Il ticket bloccante la fa a posteriori.
- **Si promette solo ciò che è stato guardato.** Grado di certezza: verificato, riferito, supposto.
- **Niente lavoro senza conferma scritta**, con tre eccezioni dichiarate: ticket bloccante, bug in garanzia, assistenza sotto soglia.
- **Milestone e sprint.** Le milestone dividono il lavoro (4-8 settimane), gli sprint dividono il tempo. Verso il cliente la milestone si chiama SAL.
- **Sprint unico aziendale.** Capacità = ore reali meno la quota urgenze. Il resto si pianifica per intero tra issue di progetto e ticket normali.
- **Margine.** Ore aggiunte alla milestone: la data si calcola su stima più margine. Con la quota urgenze è l'unico cuscinetto. La regola dell'80% è stata tolta.
- **Tipi di issue**: Story, Supporto, Approfondimento, Bug, Variazione. Oltre 16 ore si divide.
- **Date.** Ticket: giorni lavorativi dalla conferma nella scheda, data di calendario alla pianificazione. SAL: calcolate da una data di avvio dichiarata; se l'approvazione arriva dopo, slittano degli stessi giorni.
- **Variazioni**, tre domande in ordine: (1) cambia la proposta o il contenuto di story in più milestone: grande; (2) sposta una data, sposta story tra milestone o lotti, tocca lavoro accettato, supera 4 ore o tocca più di una story: media; (3) altrimenti piccola. Mai nello sprint in corso. Le piccole hanno un tetto.
- **Approvazione economica.** Ticket: la conferma della scheda. Progetto e prodotto: insieme all'approvazione di Manuale del prodotto e Piano dei SAL.
- **Garanzia.** Decorre dalla messa in produzione; per i ticket dalla chiusura.
- **Allineamento dei documenti.** Alla conferma del cliente e dopo il rilascio. Manuale del prodotto e Documento tecnico appartengono al sistema, non al singolo lavoro.

## 5. Lessico unico

Usare sempre il termine a sinistra.

- **Registro delle variazioni** (non "Registro delle modifiche").
- **Variazione** come tipo di issue (non "Modifica"). **Modifica** resta solo come tipo di ticket.
- **Approfondimento** come tipo di issue (non "Indagine"). **Indagine sull'esistente** resta il nome della fase 3 del progetto.
- **Lotto** per le parti in cui si consegna un prodotto (non "rilascio"). **Rilascio** indica solo la messa in produzione.
- **Demo** (non "dimostrazione").
- **Prova** per il controllo fatto dal cliente; fase 6 del ticket: "Prova e rilascio".
- **Accordo quadro** (non "regole firmate").
- **Quota urgenze** (non "quota riservata ai ticket").
- **Milestone** all'interno, **SAL** verso il cliente.
- Documenti: Scheda di intervento, Stato di partenza, Proposta di soluzione, Manuale del prodotto (cosa fa), Documento tecnico (come è fatto), Piano delle milestone (interno), Piano dei SAL (cliente), Documento di sprint (interno), Resoconto di sprint (cliente), Piano di lancio.
- Codici fissi: F1 funzionalità, F1.1 user story, D1 domanda aperta, M/SAL, I issue, S schermata, V variazione.

## 6. Decisioni aperte

Tre scelte sono state prese come default perché l'utente ha detto di procedere senza rispondere. Sono segnate "da confermare" nelle Regole comuni e vanno chieste:

1. sprint unico aziendale (invece di uno sprint per progetto), e sua durata;
2. ticket normali pianificati come le issue di progetto, con la quota urgenze riservata solo a bloccanti e alti;
3. un solo cuscinetto oltre la quota urgenze: il margine di milestone (niente regola dell'80%).

Valori proposti, da fissare: quota urgenze 10%, margine 20% (30% con una sola persona), tetto delle variazioni piccole pari a metà del margine, accettazione della demo 5 giorni lavorativi, garanzia 60 giorni, soglia variazione piccola 4 ore (questa è confermata), tempo massimo della verifica, contenuto dell'accordo quadro. Ogni piano ha poi le sue decisioni proprie in fondo.

## 7. Skill

Le 16 skill sono in `skills/<nome>/SKILL.md`:

valutazione-richiesta, verifica-preliminare, scheda-di-intervento, stato-di-partenza, proposta-di-soluzione, manuale-del-prodotto, documento-tecnico, piano-delle-milestone, sprint, variazione, riprogrammazione, allineamento-documenti, wireframe-e-prototipo, mockup, demo, piano-di-lancio.

Ogni skill ha `scripts/controlla_caratteri.py`. In `build/`:

- `build.py`: sostituisce i segnaposto `{{SCRITTURA}}` e `{{CONTROLLO}}` con i blocchi comuni e copia lo script in ogni skill;
- `controlla_caratteri.py`: il controllo dei caratteri vietati;
- `patch_verifica.py`: patch usata una volta, non serve più.

Nota: i percorsi dentro `build.py` puntano a `/home/claude/`: vanno adattati.

All'utente le skill si consegnano come file scaricabili (`.skill`, cioè zip della cartella), non con schede di proposta.

### Cosa non è allineato nelle skill

Le skill sono state scritte prima della riscrittura dei piani. Da correggere in tutte:

- "Registro delle modifiche" diventa "Registro delle variazioni" (anche il nome file `registro-modifiche-...`);
- tipi di issue "Indagine" e "Modifica" diventano "Approfondimento" e "Variazione";
- "rilasci" del prodotto diventano "lotti";
- "dimostrazione" diventa "demo", "regole firmate" diventa "accordo quadro";
- via la regola dell'80% e lo sprint per progetto: sprint unico aziendale, capacità meno quota urgenze (skill `sprint`, `piano-delle-milestone`, `riprogrammazione`);
- margine come ore aggiunte alla milestone, con data calcolata su stima più margine (`piano-delle-milestone`);
- scheda di intervento: consegna in giorni lavorativi dalla conferma, non data di calendario (`scheda-di-intervento`);
- categorie di variazione secondo le tre domande in ordine, tetto delle piccole, la piccola aggiorna anche il Piano delle milestone con una issue Variazione (`variazione`);
- criteri di taglia: quarta condizione "cambia l'aspetto grafico", urgenza assegnata prima della verifica (`valutazione-richiesta`, `verifica-preliminare`);
- la verifica produce l'elenco di lavori e documenti toccati, che l'allineamento riusa (`verifica-preliminare`, `allineamento-documenti`);
- Piano dei SAL con data di avvio dichiarata (`piano-delle-milestone`);
- le skill nominano ancora ruoli ("product lead", "team lead"): vanno rese impersonali come i piani;
- collaudo finale e piano di rilascio del progetto non hanno una skill: valutare se aggiungerla o estendere `demo`.

## 8. Altri materiali non allineati

Presentazioni per il CEO (artifact di tipo Slides), con il vecchio lessico e le vecchie regole:

- Piani operativi, panoramica: https://claude.ai/artifact/Eqq8DA8FfrDPSYCFLtCyTz
- Piano dei ticket: https://claude.ai/artifact/WCKWgoyeA8fp2uGnHhDjC6
- Piano di progetto: https://claude.ai/artifact/8qybn75So2GiADBFPoJDEJ
- Piano di prodotto: https://claude.ai/artifact/JieT7BKM6qi7Dqx89j1JqA

Manca una slide o un cenno sulle Regole comuni, che prima non esistevano.

Base per il test delle skill: cliente inventato Lumera Arredi (Franco decisore, Marta, Diego), e-commerce esistente, progetto aperto "comparatore di prodotti", ticket 101 e 102, variazioni V1 e V2, tre percorsi di prova (ticket 103 e 104, progetto Area rivenditori, prodotto Prenota showroom), registro delle osservazioni vuoto. Usa il vecchio lessico. Nomina i ruoli di proposito: nel test servono.

## 9. Prossimi passi, in ordine

1. Far confermare all'utente le tre decisioni della sezione 6. Ha detto di voler "affinare ogni parte del piano" prima del test: chiedere se ha altre correzioni dopo aver letto i quattro documenti.
2. Allineare le 16 skill (sezione 7), rigenerarle e riconsegnarle come file scaricabili.
3. Allineare la base per il test al nuovo lessico.
4. Eseguire il test logico: l'utente fa il cliente e il product lead, Claude applica le skill e fa il programmatore. Tre percorsi: un ticket, un progetto, un prodotto. Ogni difetto trovato va nel registro delle osservazioni della base.
5. Correggere le skill con ciò che emerge dal test.
6. Aggiornare le quattro presentazioni.
