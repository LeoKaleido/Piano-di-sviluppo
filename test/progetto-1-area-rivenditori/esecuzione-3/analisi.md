# Analisi, progetto 1 (107, area riservata per i rivenditori), prova 3

Data: 2026-10-12. Fonti: `base-comune.md`, `scenario.md`, `diario.md`, i file di `esecuzione-3/107/`, la prova 2 (`esecuzione-2`), Regole comuni, Piano di progetto, Ciclo di sviluppo e le skill `proposta-di-soluzione`, `documento-tecnico`, `piano-delle-milestone`, `milestone-report`, `prova-su-staging`, `storico-lavorazione`, `kickoff`, più `build/crea-pdf.ps1`.

## 1. Sintesi

La prova 3 verifica la riorganizzazione del 2026-10-12: sei posti per lavorazione, quattro documenti nella radice, capitolo Pubblicazione dentro il Documento tecnico, storico unico al posto del registro delle variazioni, quattro skill fuse in una, Milestone report interno, Piano dei SAL in tabelle estratto dal Piano delle milestone, stima dei tempi di rilascio nella Proposta. Come nella prova 2, il contenuto che la riorganizzazione non tocca è quello della prova precedente; il diario dichiara cosa è stato rifatto.

La struttura nuova regge: la radice ha 4 PDF con 4 numeri senza salti, ogni evento del progetto ha il suo posto, le versioni precedenti restano in `claude`, la storia è in un solo file e i messaggi hanno un posto con un nome. Dove regge meno: il capitolo Pubblicazione dentro il Documento tecnico impone una versione intera del documento per ogni aggiornamento (Q3-5), il Piano dei SAL ha una colonna che il capitolo da cui si estrae non contiene (Q3-2), e la stima dei tempi di rilascio nella Proposta ha bisogno di un'ipotesi sulla data di avvio che la skill vieta di scrivere (Q3-1).

Due osservazioni di gravità alta (Q3-9 e Q3-10, trovate da Leonardo e già corrette), tre medie, il resto bassa.

## 2. Controlli dello scenario

Gli eventi dello scenario sono quelli della prova 2 e non sono stati rifatti nei contenuti; qui si controlla ciò che la riorganizzazione cambia e i nuovi controlli aggiunti allo scenario.

- **Proposta con stima di durata e tempi di rilascio (intervalli, non date), con affidabilità e ipotesi.** Emerso, con la riserva di Q3-1 sull'ipotesi di avvio.
- **Messaggio per la prova con le story e i criteri; Milestone report interno.** Emerso: tre inviti alla prova in `source`; il Milestone report del SAL1 ha ore previste e reali, buffer, margine, variazioni, cosa ha funzionato, nessun testo per il cliente.
- **Piano dei SAL estratto dal Piano delle milestone, in tabelle.** Emerso in parte: la colonna "cosa verifica Lumera" non viene dal capitolo (Q3-2). Resa grafica delle tabelle nel PDF non verificata.
- **Variazioni, riprogrammazione e garanzia come voci di `storico.md`.** Emerso: V1 con tre voci (richiesta, approvazione, chiusura), V2 con due (richiesta, rinvio), riprogrammazione, garanzia.
- **Capitolo Pubblicazione nel Documento tecnico.** Emerso nelle versioni v1.4 e v1.5, con Q3-5 sul momento in cui nasce la versione.
- **Cosa non deve succedere.** Dopo la correzione del 2026-10-12 non è successo: nessuna versione con "invariato" o rimandi, nessuna versione mancante in `claude`, nessun registro delle variazioni, nessuna Guida a parte, nessun Milestone report al cliente, nessun documento in più nella radice, nessuna tabella fuori dal Piano dei SAL, nessuna variazione accettata a voce, nessuna milestone accettata con il silenzio, nessuna issue cancellata (verificato a ricerca e a lettura dello storico).

## 3. Documenti

- Radice: 4 PDF finali. 01 Proposta di soluzione (confermata, senza versione), 02 Manuale v1.6, 03 Documento tecnico v1.5, 04 Piano dei SAL v2.
- `claude`: 19 sorgenti, con la catena completa delle versioni: Proposta v0.1, v0.2, v0.3 e `proposta-di-soluzione.md` (confermata), Manuale da v1.0 a v1.6, Documento tecnico da v1.0 a v1.5, Piano dei SAL v1 e v2. Nessuna Guida. Ogni versione è completa e non rimanda alle precedenti.
- `design`: il materiale per i mockup.
- `develop`: Nota di sprint 10 e Milestone report del SAL1, solo Markdown.
- `source`: 29 file (15 dalla prova 2, 14 messaggi inviati).
- `log`: `storico.md`, `decisioni.md`, `report-di-progetto.md`.
- In più rispetto allo scenario: nessuno. Fuori posto: nessuno.
- Ricerca dei caratteri vietati, della persona e delle tabelle sui Markdown: nessun risultato (tabelle solo nel Piano dei SAL).

## 4. Osservazioni

**Alta**

- **Q3-9, Contraddizione.** Dove: `documento-tecnico` (capitoli 7 e 8) e assenza di una regola nelle altre skill dei documenti. Cosa è successo: le versioni nuove del Documento tecnico e della Proposta scrivevano "invariato" o rimandavano alle versioni precedenti; il Documento tecnico non conteneva F10-F12 né il Piano delle milestone del comparatore. Chi legge il documento finale doveva cercare le versioni precedenti. Correzione applicata il 2026-10-12 (chiesta da Leonardo): ogni versione è completa e indipendente, in tutte le skill dei documenti e nelle Regole comuni; i documenti della prova sono stati riscritti per intero.
- **Q3-10, Buco.** Dove: Regole comuni e skill dei documenti. Cosa è successo: in `claude` mancavano le versioni intermedie della Proposta (v0.2, v0.3). Nessuna regola diceva di conservarle tutte. Correzione applicata: tutte le versioni restano in `claude`, comprese le intermedie e le bozze condivise; create le versioni mancanti.

**Media**

- **Q3-1, Buco.** Dove: `proposta-di-soluzione` (voce 10) e `kickoff` (Stima). Cosa è successo: il tempo di rilascio indicativo è "settimane dall'avvio dello sviluppo", ma l'avvio dipende dalla liberazione della squadra (27 novembre) e senza dirlo l'intervallo non ha senso per il cliente. La Proposta ha dovuto scrivere "se lo sviluppo parte nella prima settimana di dicembre", che è quasi una data, mentre la skill dice "nessuna data precisa". Correzione proposta: la skill ammette un periodo di avvio ipotizzato (il mese) e una finestra di rilascio in mesi o in metà mese, dichiarata come ipotesi e non come impegno.
- **Q3-2, Passaggio.** Dove: `piano-delle-milestone` (struttura del capitolo e Piano dei SAL). Cosa è successo: il Piano dei SAL ha la colonna "cosa verifica Lumera", ma il capitolo Piano delle milestone ha solo obiettivo dimostrabile, story e lavorazioni. Chi ha estratto la tabella ha ricavato la colonna dai criteri del Manuale. Correzione proposta: aggiungere al formato di una milestone la riga "Cosa verifica il cliente", in una frase, in modo che la tabella si estragga senza altre fonti.
- **Q3-5, Contraddizione.** Dove: Piano di progetto (3.2 Preparazione) e `documento-tecnico`. Cosa è successo: la preparazione chiede il capitolo Pubblicazione aggiornato con una nuova versione del Documento tecnico e il suo PDF, che l'incaricato legge il lunedì prima di pubblicare. La stessa versione, per le altre modifiche del progetto, nasce alla chiusura. Il test ha scritto una sola versione (v1.5, il 26 febbraio): quella che l'incaricato avrebbe dovuto leggere il 15 febbraio non esiste. Correzione proposta: nella preparazione l'incaricato legge il capitolo in Markdown in `claude` (bozza di fine lavoro); la versione numerata e il PDF nascono alla chiusura.

**Bassa**

- **Q3-11, Esecuzione.** Dove: Proposta (stima di durata e tempi di rilascio). La prima scrittura dava da 45 a 55 giorni lavorativi e 11-13 settimane dall'avvio: incoerente con le 468 ore del piano e con la fiera (la parte alta superava il 22 febbraio senza dirlo). Corretto: da 40 a 50 giorni lavorativi, finestra tra metà e fine febbraio 2027, con l'avvertenza sulla fiera.
- **Q3-12, Base.** Dove: `test/sistema-base` e regola sulle versioni. La base aveva solo la versione più recente di Manuale (v1.3) e Documento tecnico (v1.2): la catena in `claude` partiva da lì. Ricostruite le versioni precedenti (Manuale v1.0-v1.2, Documento tecnico v1.0-v1.1) e copiate in `claude`; regola scritta nelle Regole comuni e nelle skill. Le versioni ricostruite sono materiale di test.
- **Q3-3, Passaggio.** Dove: `storico-lavorazione` (variazione). Lo storico non si modifica, quindi lo stato di una variazione si legge solo scorrendo le voci con lo stesso codice. Correzione proposta: dirlo nella skill (per sapere le variazioni aperte si cerca "Variazione V" e si prende l'ultima voce di ogni codice) e tenere in testa a ogni voce di variazione lo stato corrente.
- **Q3-4, Peso.** Dove: `prova-su-staging`. L'invito alla prova ripete i criteri di accettazione del Manuale per ogni story. Prima li ripeteva il Milestone report, ora una volta sola il messaggio. Il costo è basso; il valore è che il cliente prova su criteri che ha davanti. Nessuna correzione necessaria.
- **Q3-6, Peso.** Dove: Regole comuni (Source). `source` ha 29 file, di cui 14 messaggi, anche quelli di routine (invio di un documento, inviti alla prova). Correzione proposta: salvare in `source` solo i messaggi che portano una decisione, una scadenza o una conferma (domande aperte, riepiloghi di conferma, variazione, riprogrammazione, piano di rilascio, avviso, garanzia, inviti alla prova), e non quelli di semplice invio.
- **Q3-7, Peso.** Dove: Regole comuni e `build/crea-pdf.ps1`. Il Milestone report interno ha ancora il PDF. Chi lo legge lavora sul Markdown. Correzione proposta: togliere il PDF dal Milestone report (e con esso la regola di numerazione propria di `develop`).
- **Q3-8, Esecuzione.** La resa grafica delle tabelle nel PDF del Piano dei SAL non è stata aperta e verificata. Non cambia i piani.

## 5. Peso della procedura

- Radice da 6 a 4 PDF (prova 2: sei documenti veri). Una lavorazione di progetto ha 5 PDF in tutto, contro 7.
- Il documento che pesa di più resta il Documento tecnico: ora ha anche il capitolo Pubblicazione (circa 60 righe in più) e, per l'indipendenza, anche F10-F12 e il Piano delle milestone del comparatore (circa 60 righe in più) ma non c'è più una Guida a parte con la sua versione e il suo PDF.
- Le quattro skill fuse in `storico-lavorazione` riducono i nomi da ricordare: il progetto usa una skill dove ne usava quattro. La skill però è lunga (circa 250 righe) e viene letta per intero anche per una voce semplice.
- Il Milestone report interno (circa 40 righe) è più breve del precedente, ma conserva il PDF (Q3-7).

## 6. Confronto con la prova precedente

- **Q2-7 (24 PDF per una lavorazione).** Risolta: 4 PDF nella radice, più il Milestone report.
- **Q2-6 (nomi dei messaggi senza un tipo).** Risolta: i messaggi stanno in `source`, con la data davanti e un nome che dice cosa sono; non hanno il PDF e non si numerano.
- **Q2-8 (wireframe e prototipo HTML nella radice).** Risolta nella regola: stanno in `design`. Nella prova non ce ne sono.
- **Q2-9 (PDF più vecchio del sorgente).** Ancora aperta; la prova 3 ha rigenerato i PDF a mano nell'ordine corretto.
- **Q2-3, Q2-4, Q2-5 (Documento tecnico a livello di implementazione).** Non riverificate: il corpo del documento è quello della prova 2.
- **Q2-1, Q2-2.** Non riverificate (conversazioni nello stesso giorno: non ce ne sono nella prova).
- Regressioni nuove: Q3-1, Q3-2, Q3-3, Q3-5.

## 7. Decisioni di Leonardo (applicate)

- **Q3-1: sì ai mesi.** Finestra di rilascio in mesi a partire da un mese di avvio ipotizzato. Applicato in `proposta-di-soluzione`, `kickoff`, Piano di progetto, Piano di prodotto e nella prova.
- **Q3-5: il capitolo Pubblicazione si aggiunge alla chiusura.** Alla preparazione le particolarità stanno nel piano di rilascio. Applicato nel Piano di progetto, nel Piano di prodotto, in `collaudo-e-rilascio` e `documento-tecnico`.
- **Q3-7: togliere il PDF del Milestone report.** Applicato, compreso `build/crea-pdf.ps1`.
- **Q3-6: salvare tutti i messaggi in `source`.** Applicato nelle Regole comuni.
- **Q3-2: sì alla riga "cosa verifica il cliente".** Applicato in `piano-delle-milestone`.

Le opzioni e le raccomandazioni originali erano:

- **Q3-1: finestra di rilascio nella Proposta.** Opzione A: intervallo in settimane dall'avvio, con l'ipotesi di avvio dichiarata in chiaro (come ora). Opzione B: finestra in mesi ("tra metà e fine febbraio"), che è più utile al cliente. Raccomandazione: B.
- **Q3-5: quando nasce la versione del Documento tecnico con il capitolo Pubblicazione.** Opzione A: versione intermedia alla preparazione (peso: rigenerare l'intero documento). Opzione B: l'incaricato legge la bozza in Markdown, la versione nasce alla chiusura. Raccomandazione: B.
- **Q3-7: PDF del Milestone report.** Togliere o tenere. Raccomandazione: togliere, perché lo leggi tu sul Markdown.
- **Q3-6: messaggi di semplice invio in `source`.** Salvarli tutti o solo quelli che portano decisioni. Raccomandazione originale: solo quelli che portano decisioni; Leonardo ha scelto di salvarli tutti, perché non si può sapere a priori cosa servirà dopo.
- **Q3-2: riga "cosa verifica il cliente" nel Piano delle milestone.** Raccomandazione: sì.
