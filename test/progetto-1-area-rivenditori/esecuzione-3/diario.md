# Diario, progetto 1 (107), prova 3

Data dell'esecuzione: 2026-10-12. Piani e skill nella versione del repository a questa data, con la riorganizzazione chiesta da Leonardo: sei posti per lavorazione (radice, `claude`, `design`, `develop`, `source`, `log`), quattro documenti nella radice, Guida alla pubblicazione assorbita dal Documento tecnico, quattro skill fuse in `storico-lavorazione`, Milestone report interno, Piano dei SAL in tabelle estratto dal Piano delle milestone, stima dei tempi di rilascio nella Proposta. Le osservazioni hanno il codice Q3-n e il tipo, riprese nell'analisi.

## Cosa è stato rifatto e cosa no

Come nella prova 2, i contenuti che le correzioni non toccano (richiesta, trascrizioni, sintesi, risposte del cliente, Manuale, corpo del Documento tecnico, Nota di sprint, Report di progetto) sono quelli della prova 2 con i riferimenti aggiornati. È stato rifatto ciò che la riorganizzazione cambia:

- **Struttura.** `input` diventa `source` e accoglie anche i messaggi inviati. La Guida alla pubblicazione non esiste più: il suo contenuto è il capitolo 7 del Documento tecnico. `registro-variazioni.md` non esiste più: le variazioni sono voci di `storico.md`. Il Report di progetto è in `log`, solo Markdown. Il materiale per i mockup è in `design`.
- **Proposta v0.1 e Proposta confermata.** La voce "Stima di durata e tempi di rilascio" ha ora un intervallo di giorni lavorativi, un tempo di rilascio indicativo in settimane dall'avvio, l'affidabilità e le ipotesi.
- **Documento tecnico v1.4 e v1.5.** Capitolo 7 "Infrastruttura e pubblicazione" con ambienti, ordine dei passi, migrazioni, regole del sistema, verifiche, ritorno, backup e contatti (la v1.4 con il capitolo come era al kickoff, la v1.5 con la Guida v1.2 della prova 2 assorbita). Capitolo 11 "Piano delle milestone" con, per ogni milestone, le lavorazioni riassunte.
- **Piano dei SAL v1 e v2.** Riscritto come estratto in tabelle: SAL (cosa viene consegnato, data della prova, cosa verifica Lumera, stato) e materiali attesi.
- **Messaggi in `source`.** I testi che nella prova 2 erano dentro lo storico o nel Milestone report diventano file con la data davanti al nome: invio della Proposta, domande aperte, riepiloghi di conferma, invio del Manuale e del Piano dei SAL, comunicazione di variazione e di riprogrammazione, inviti alla prova dei tre SAL, piano di rilascio, avviso di pubblicazione, risposta di garanzia.
- **Storico.** Voci con le etichette fisse di tipo; V1 e V2 sono voci "Variazione" (richiesta, approvazione, chiusura); prove e collaudi con l'etichetta "Prova o collaudo".
- **Milestone report del SAL1.** Riscritto come documento interno (ore previste e reali, buffer e margine, variazioni e imprevisti, cosa ha funzionato). Il messaggio di prova è un file in `source`.
- **PDF.** Generati con `build/crea-pdf.ps1` in ordine cronologico: nella radice 4 PDF (01 Proposta di soluzione (confermata, senza versione), 02 Manuale v1.6, 03 Documento tecnico v1.5, 04 Piano dei SAL v2), in `develop` nessun PDF. Le versioni precedenti restano in `claude`.

## Passi eseguiti

- **5-13 ottobre, `kickoff`.** Cartella 107 con le sei sottocartelle e i due file di `log` vuoti. La stima precisa in `storico.md` include il tempo di rilascio indicativo (da 11 a 13 settimane dall'avvio) da portare nella Proposta.
  - Q3-1, Buco: per scrivere "settimane dall'avvio" la Proposta deve ipotizzare quando parte lo sviluppo (inizio dicembre, perché la squadra è libera dal 27 novembre). Quell'ipotesi è quasi una data, e la skill dice "nessuna data". Senza ipotesi l'intervallo non dice nulla al cliente.
- **13 ottobre-9 novembre, `proposta-di-soluzione`.** v0.1 con la nuova voce 10; il messaggio di accompagnamento è un file. L'elenco delle domande aperte del 27 ottobre e il riepilogo della conferma del 9 novembre sono messaggi in `source`; nello storico resta una riga con il rimando.
- **10 novembre-4 dicembre, `manuale-del-prodotto`, `mockup`, `documento-tecnico`, `piano-delle-milestone`.** Manuale v1.5 (PDF 02), Documento tecnico v1.4 (PDF 03). Il capitolo Piano delle milestone ha le lavorazioni per M1, M2 e M3. Il Piano dei SAL v1 (PDF 04) è un estratto.
  - Q3-2, Passaggio: la tabella del Piano dei SAL ha una colonna "cosa verifica Lumera" che nel capitolo Piano delle milestone non esiste (il capitolo ha l'obiettivo dimostrabile e le story). Chi estrae l'ha ricavata dai criteri del Manuale. La skill dice di generare solo dal capitolo.
- **15 dicembre-7 gennaio, sviluppo.** Telefonata di Diego, richiesta scritta di Franco del 17 dicembre, V1 approvata il 22 dicembre: tre voci "Variazione V1" nello storico (richiesta con categoria e impatto, approvazione, chiusura a documenti aggiornati) e un messaggio in `source`. V2 è una voce "Variazione" rinviata.
  - Q3-3, Passaggio: lo storico non si modifica, quindi lo stato di una variazione si legge solo scorrendo le voci con lo stesso codice. Per sapere quali variazioni sono aperte bisogna cercare "Variazione V" e prendere l'ultima voce di ogni codice.
- **18 dicembre-7 gennaio, prova del SAL1.** Il messaggio di invito (17 dicembre) porta le story e i criteri; l'esito è una voce di storico. Milestone report del SAL1 scritto il 7 gennaio, dopo l'accettazione, con gli esiti dello storico (PDF in `develop`).
  - Q3-4, Peso: l'invito ripete i criteri di accettazione del Manuale per ogni SAL, e il Milestone report non li ripete più. Il testo è lo stesso dell'invito ma ora esiste una sola volta, nel messaggio.
- **11-15 gennaio, `storico-lavorazione` (riprogrammazione), `sprint`.** Nota di sprint 10 in `develop`. La riprogrammazione è una voce di storico e di `decisioni.md`; il messaggio è in `source`. Piano dei SAL v2 (PDF 04, al posto della v1).
- **15-18 febbraio, rilascio.** Piano di rilascio concordato: voce di storico "Rilascio" e messaggio. L'avviso di pubblicazione è un file.
  - Q3-5, Contraddizione: il Piano di progetto chiede, nella preparazione, il Documento tecnico con il capitolo Pubblicazione aggiornato "con nuova versione e PDF". L'incaricato lo legge il lunedì prima di pubblicare, cioè il 15 febbraio, ma la versione con le migrazioni e le rotte senza cache (v1.5) è stata scritta alla chiusura, il 26 febbraio. Nel test non è stata creata una versione intermedia: servirebbe rigenerare un Documento tecnico di centinaia di righe e il suo PDF solo per tre regole.
- **26 febbraio, chiusura.** Manuale v1.6, Documento tecnico v1.5 (con il capitolo 7 della Guida v1.2), Piano dei SAL v2 già emesso. Report di progetto in `log`.
- **1-2 marzo, garanzia.** Segnalazione di Diego in `source`; voce "Garanzia"; risposta in `source`.

## Correzione del 2026-10-12, dopo la lettura di Leonardo

Leonardo ha trovato due difetti nei documenti della prova, e sono stati corretti nella prova stessa, dichiarandolo qui.

- Q3-9, Contraddizione: il Documento tecnico v1.4 e v1.5 scrivevano "Capitolo invariato rispetto alla v1.3" per il Piano delle milestone del comparatore, "il loro paragrafo nel capitolo 5 resta quello delle versioni precedenti" per F10-F12, e la Proposta v1.0 "Elenco delle story invariato rispetto alla versione 0.1". La skill `documento-tecnico` diceva che per un progetto i capitoli 7 e 8 "descrivono solo ciò che cambia, con un rimando a ciò che resta invariato", e nessuna skill vietava il rimando. Chi legge la versione nuova doveva cercare le precedenti. Corretti: le skill e le Regole comuni dicono che ogni versione è completa e indipendente (nessun "invariato", nessun rimando); nel Documento tecnico sono stati scritti per intero F10-F12 nel capitolo 5 e il Piano delle milestone del comparatore nel capitolo 11; nella Proposta v1.0 l'allegato è completo; sono state tolte le frasi "Deriva dalla v..." dalle intestazioni.
- Q3-10, Buco: in `claude` mancavano le versioni intermedie della Proposta (v0.2 del 27 ottobre con le risposte a D1-D4, v0.3 del 9 novembre con le risposte a D5-D8). Nessuna regola diceva di conservarle tutte. Create come documenti completi; la v1.0 è la v0.3 confermata. Ora `claude` ha 10 sorgenti: Proposta v0.1, v0.2, v0.3, v1.0; Manuale v1.5 e v1.6; Documento tecnico v1.4 e v1.5; Piano dei SAL v1 e v2. Tra l'invio del Manuale (20 novembre) e la conferma (30 novembre) il Manuale non è cambiato, quindi non ci sono versioni intermedie.
- I PDF della radice sono stati rigenerati dalle versioni corrette.

## Decisioni di Leonardo sull'analisi, applicate

Dopo la lettura dell'analisi, Leonardo ha deciso e le decisioni sono state applicate a piani, skill e documenti della prova.

- Q3-1: la finestra di rilascio nella Proposta è in mesi, a partire da un mese di avvio ipotizzato ("se lo sviluppo parte a dicembre, tra metà e fine febbraio 2027"). Nella Proposta v0.1, v0.2, v0.3 e nella Proposta confermata la durata è da 40 a 50 giorni lavorativi. La prima scrittura (da 45 a 55 giorni, da 11 a 13 settimane dall'avvio) sforava la fiera nella parte alta e non lo diceva: Q3-11, Esecuzione, corretto.
- Q3-5: il capitolo Pubblicazione entra nel Documento tecnico alla chiusura del progetto. Alla preparazione le particolarità tecniche stanno nel piano di rilascio (voce di storico) che l'incaricato legge; nel test la voce del 15 febbraio le elenca.
- Q3-7: il Milestone report non ha il PDF. Rimosso dalla prova e dallo script `build/crea-pdf.ps1`.
- Q3-6: si salvano in `source` tutti i messaggi inviati, anche di semplice invio.
- Q3-2: il formato di una milestone ha la riga "Cosa verifica il cliente"; aggiunta ai tre SAL del Documento tecnico v1.4 e v1.5.

## Altre correzioni del 2026-10-12

- La Proposta di soluzione confermata dal cliente si chiama `proposta-di-soluzione`, senza versione: non esiste una v1.0, né una v1.1 o v2 (un cambiamento dopo la conferma è una variazione). In `claude` ci sono la v0.1, la v0.2, la v0.3 e `proposta-di-soluzione.md` (il contenuto della v0.3 confermata). Il PDF nella radice è `01-proposta-di-soluzione.pdf`.
- Q3-12, Base: la catena delle versioni dei documenti del sistema era incompleta. `claude` conteneva il Manuale dalla v1.3 e il Documento tecnico dalla v1.2, perché la base le descriveva solo da lì. Leonardo ha chiesto tutte le versioni, anche la v1.0 e la v1.1. Le versioni precedenti sono state ricostruite in `test/sistema-base/` (Manuale v1.0, v1.1, v1.2; Documento tecnico v1.0, v1.1) a partire dalle successive, togliendo ciò che la storia delle versioni attribuisce a lavorazioni successive, e copiate in `claude`. Il Manuale v1.4 e il Documento tecnico v1.3 vengono dal ticket 103. Ora `claude` ha 19 sorgenti. Le versioni ricostruite sono materiale del test, non fatti: dove la base non dice cosa c'era prima, la ricostruzione è plausibile e dichiarata.

## Osservazioni sulla struttura nuova

- Q3-6, Peso: il numero di file in `source` sale a 29 (15 della prova 2 più 14 messaggi). Ogni messaggio è breve, ma ogni contatto con il cliente diventa un file.
- Q3-7, Peso: il Milestone report (interno, letto da chi gestisce il progetto) ha ancora il PDF, previsto dalle Regole comuni. Chi lo legge lavora sul Markdown.
- Q3-8, Esecuzione: il PDF del Piano dei SAL con le tabelle è stato generato ma non aperto per controllarne la resa (non c'è un lettore di PDF nell'ambiente). La resa delle tabelle in `build/pdf.css` non è verificata.

## Controlli finali

- Caratteri vietati e persone verbali: ricerca eseguita sui Markdown della prova, nessun risultato. Tabelle: solo nel Piano dei SAL.
- PDF: 4 nella radice con 4 numeri senza salti, 1 in `develop`. Nella radice solo versioni finali e nessuna voce di storia.
- Nomi: tutti unici in `source` e in `claude`. In `claude` restano tutte le versioni precedenti (Proposta v0.1, Manuale v1.5, Documento tecnico v1.4, Piano dei SAL v1).
- Nessuna Guida alla pubblicazione a parte, nessun registro delle variazioni, nessun Milestone report al cliente.
