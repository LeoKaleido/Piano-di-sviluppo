# Diario, progetto 1 (107), prova 2

Data dell'esecuzione: 2026-10-12. Piani e skill nella versione del repository a quella data, con le correzioni di struttura chieste da Leonardo dopo la prova 1: cartella `input` unica, cartella `claude` con i sorgenti Markdown, PDF numerati nella radice, nomi dei file brevi e unici, Documento tecnico a livello di implementazione. Le osservazioni hanno il codice Q2-n e il tipo, riprese nell'analisi.

## Cosa è stato rifatto e cosa no

Questa prova non ripete a mano ogni passo della prova 1. Il contenuto dei documenti di fase (Proposta, Manuale, Piano dei SAL, Nota di sprint, Milestone report, collaudo, rilascio, Report, garanzia) e lo svolgimento degli eventi sono quelli della prova 1: le skill non sono cambiate nei contenuti e rifarli darebbe gli stessi testi. È stato rifatto ciò che le correzioni cambiano:

- **Struttura della cartella.** Nessuna cartella per fase. `claude` con i sorgenti, `develop` con Note di sprint e Milestone report (sorgenti Markdown, PDF solo per il Milestone report), `input` con ciò che arriva dal cliente, `log` con storico, decisioni e registro delle variazioni, PDF nella radice.
- **Cartella `input`.** Trascrizioni e sintesi con il nome che inizia con la data. In più sono stati scritti i file grezzi che la prova 1 non aveva salvato: la richiesta del 5 ottobre, le risposte di Franco del 26 ottobre, la richiesta e l'approvazione della variazione V1, le accettazioni del SAL1, del SAL2 e della prova finale, la consegna dei listini, la segnalazione di garanzia. I file audio si danno per esistenti (regola 6 della base).
- **Nomi dei file.** Senza cliente e sistema, con la versione alla fine.
- **Documento tecnico.** Riscritto con la skill `documento-tecnico` nella versione con il criterio di sufficienza: capitoli 3, 4, 5 e 6 a livello di implementazione per F6, F7 e F8 (v1.4, del 4 dicembre) e per F8.3 (v1.5, di chiusura).
- **PDF.** Solo per i sei documenti veri (Proposta, Manuale, Documento tecnico, Piano dei SAL, Guida, Report di progetto) e per i Milestone report in `develop`, e solo la versione finale nella radice: generati con `build/crea-pdf.ps1` in ordine cronologico, così il numero lo assegna lo script e il PDF della versione precedente esce dalla radice. Stato di partenza, stima, piano di rilascio, esiti, variazioni, riprogrammazioni e messaggi sono voci di `log`.

Il Manuale, la Guida e gli altri documenti sono quelli della prova 1 con i riferimenti ai nomi dei file e delle cartelle aggiornati.

## Passi eseguiti con la nuova struttura

- **5 ottobre, Franco.** La richiesta arriva su osTicket: si salva tale e quale in `input/2026-10-05-richiesta.md`.
- **6-13 ottobre, project manager 2, `kickoff`.** Cartella 107 con `input`, `claude`, `log` e, in `log`, `storico.md` e `decisioni.md` vuoti. Lo Stato di partenza e la stima precisa non sono documenti: sono voci di `storico.md` (8 e 9 ottobre), le decisioni dell'analisi voci di `decisioni.md`.
  - Q2-1, Buco: la skill `kickoff` dice di creare la cartella con `input` e i due file, ma `kickoff-ticket` e `kickoff` non dicono chi crea i PDF né quando: il PDF si crea alla fine di ogni documento, ma nessun passo del piano lo ricorda.
- **7 ottobre, 9 novembre, 30 novembre, `interpretazione-conversazioni`.** Trascrizione e sintesi nella stessa cartella `input`, con la data davanti. Nessun problema di nome.
  - Q2-2, Buco: per due conversazioni nello stesso giorno il nome (data più `trascrizione` o `sintesi`) non basta. Serve un suffisso, che la regola non prevede.
- **13 ottobre-9 novembre, Proposta.** v0.1 inviata il 13 ottobre; con la v1.0 il PDF prende lo stesso numero (01) e quello della v0.1 esce dalla radice (resta il Markdown in `claude`). L'elenco delle domande aperte del 27 ottobre è un messaggio: il suo contenuto è una voce di `storico.md`. Le risposte di Franco (26 ottobre, 9 novembre) stanno in `input`.
- **10 novembre-4 dicembre, `manuale-del-prodotto`, `mockup`, `documento-tecnico`, `piano-delle-milestone`.** Manuale v1.5 (PDF 02) e Documento tecnico v1.4 (PDF 03). Il materiale per i mockup resta in `claude` e la consegna alla grafica è una voce di `storico.md`. Piano dei SAL v1 (PDF 04).
  - Q2-3, Passaggio: scrivere il Documento tecnico a livello di implementazione richiede nomi di file, tabelle e rotte esistenti che nella base non ci sono (la base dà solo moduli e componenti). Dove il nome non è noto, il documento lo segna "da confermare" e lo raccoglie nelle domande per il team (T5). Il criterio di sufficienza non è raggiungibile per le parti che toccano il codice esistente.
  - Q2-4, Peso: il Documento tecnico passa da 162 a 326 righe al kickoff (341 alla chiusura) (capitoli 3, 4, 5, 6 e 7 espansi), il doppio del tempo di scrittura. Il capitolo 5 occupa quasi la metà.
  - Q2-5, Passaggio: scrivere i rami di errore in dettaglio ha fatto emergere due casi che il Manuale non dice: il prodotto esaurito nell'ordine da elenco (F8.1, T4) e i codici sconto per i rivenditori (T2). Il Manuale era già confermato dal cliente il 30 novembre: i due casi possono diventare domande solo dopo, come variazione o come modifica (nessuna skill dice quale).
- **15 dicembre-7 gennaio, sviluppo.** Telefonata di Diego, richiesta scritta del 17 dicembre (in `input`), variazione V1 approvata il 22 dicembre (in `input`). La variazione non è un documento: voce in `registro-variazioni.md` e in `storico.md` (con il testo della comunicazione, un messaggio a Franco). Milestone report del SAL1 in `develop` (PDF 01). Accettazione del SAL1 il 7 gennaio in `input`.
- **11-15 gennaio, `sprint`, `riprogrammazione`.** Nota di sprint 10 in `develop` (solo Markdown). La riprogrammazione non è un documento: ricalcolo, leve e decisione sono una voce di `storico.md` e la decisione di `decisioni.md`; al cliente un solo messaggio. Piano dei SAL v2 (PDF 04, al posto della v1).
- **15-18 febbraio, rilascio.** Il piano di rilascio concordato e l'esito della prova finale sono voci di `storico.md`, senza documento. Le particolarità del rilascio stanno nella Guida v1.2 (PDF 05); non c'è la scheda tecnica. L'avviso al cliente è un messaggio, riassunto nello storico.
  - Q2-6, Buco: il tipo "avviso al cliente" e "risposta di garanzia" non hanno un nome in nessuna skill, e sono messaggi. Se si conserva una copia, il nome è scelto da chi esegue.
- **26 febbraio, chiusura.** Manuale v1.6, Documento tecnico v1.5 (con F8.3, le decisioni sulle cache e sul preventivo, T1-T5 aggiornate) e Guida v1.2 sono documenti come gli altri: sorgenti in `claude`. I PDF finali sostituiscono nella radice quelli delle versioni precedenti: Manuale v1.6 (02), Documento tecnico v1.5 (03), Guida v1.2 (05). Non esiste una cartella `sistema`. Report di progetto (PDF 07, per chi vorrà capire fra due anni com'è andato il progetto).
- **1-2 marzo, garanzia.** Segnalazione di Diego in `input`. La risposta di garanzia è un messaggio, riassunto nello storico.

## Osservazioni sulla struttura nuova

- Q2-7, Peso: con la prima regola ("tutto in PDF") una lavorazione di progetto produceva 24 file PDF. Il Piano di progetto è stato riorganizzato (2026-10-12): sei documenti veri in PDF, più Note di sprint e Milestone report in `develop`, tutto il resto in `log`. Ora la radice ha 6 PDF.
- Q2-8, Contraddizione: la regola dice che i sorgenti stanno tutti in `claude` e i PDF nella radice, ma i wireframe e il prototipo sono file HTML che non si convertono in PDF. Vanno nella radice con il loro nome, senza sorgente Markdown. Nella prova non ce ne sono.
- Q2-9, Manca: lo script crea il PDF dal sorgente, ma nessun passo controlla che il PDF sia aggiornato dopo una modifica del sorgente. Se si corregge un file in `claude` senza rigenerare, il PDF resta vecchio.

## Controlli finali

- Caratteri vietati, persone verbali e tabelle: ricerca eseguita sui file Markdown della prova, nessun risultato.
- PDF: 6 nella radice con 6 numeri senza salti, 1 in `develop`. Nella radice solo le versioni finali e nessuna voce di storia.
- Nomi: tutti unici nella radice e in `claude`.
