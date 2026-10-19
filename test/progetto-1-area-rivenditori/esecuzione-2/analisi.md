# Analisi, progetto 1 (107, area riservata per i rivenditori), prova 2

Data: 2026-10-12. Fonti: `base-comune.md`, `scenario.md`, `diario.md`, i file di `esecuzione-2/107/`, la prova 1 (`esecuzione-1`), Regole comuni, Piano di progetto e le skill `documento-tecnico`, `interpretazione-conversazioni`, `kickoff` e `piano-delle-milestone`, più lo script `build/crea-pdf.ps1`.

## 1. Sintesi

La prova 2 non ripete tutti i passi della prova 1: verifica le correzioni di struttura chieste da Leonardo dopo la prova 1 (cartella `input`, cartella `claude`, PDF numerati nella radice, nomi brevi e unici, Documento tecnico a livello di implementazione). Il contenuto dei documenti di fase è quello della prova 1; il diario dichiara cosa è stato rifatto.

La struttura nuova regge: tutti i documenti stanno in cinque posti (radice, `claude`, `develop`, `input`, `log`), i nomi sono unici, lo script assegna i numeri senza buchi (6 numeri nella radice per 6 PDF finali, 1 PDF in `develop`) e tiene lo stesso numero tra le versioni dello stesso documento. Dove regge meno: il Documento tecnico a livello di implementazione non si può scrivere interamente con i soli fatti della base (nomi del codice esistente), costa quasi il doppio e fa emergere due casi che il Manuale confermato non copre. Mancano nomi fissi per alcuni tipi di documento, e nulla dice quando rigenerare il PDF dopo una correzione.

Nessuna osservazione di gravità alta. Quattro medie, il resto bassa.

## 2. Controlli dello scenario

Gli eventi e i controlli dello scenario sono quelli della prova 1 e non sono stati rifatti: gli esiti restano quelli di `esecuzione-1/analisi.md`. Qui si controlla ciò che la prova 2 cambia.

- **Quattro posti, senza cartelle per fase.** Emerso: `claude` (sorgenti), `input`, `log`, radice con i PDF.
- **Cartella `input` con grezzo ed elaborato, nomi che iniziano con la data.** Emerso: 15 file, tra trascrizioni, sintesi e file grezzi (richiesta, risposte, accettazioni, segnalazione). Le conversazioni hanno audio, trascrizione e sintesi: gli audio non esistono nel test (regola 6) e non sono creati.
- **Numerazione dei PDF per ordine di nascita, senza buchi, stessa cifra per le versioni.** Emerso: Proposta v0.1 e v1.0 con 01, Piano dei SAL v1 e v2 con 04, da 01 a 06 senza salti; le versioni precedenti (Proposta v0.1, Manuale v1.5, Documento tecnico v1.4, Piano dei SAL v1) escono dalla radice e restano in `claude`.
- **Nomi dei file senza cliente e sistema.** Emerso. Nessuna collisione nella radice né in `claude`.
- **Documento tecnico a livello di implementazione.** Emerso in parte: vedi Q2-3, Q2-4 e Q2-5.
- **PDF generati dallo script.** Emerso: 7 PDF, 6 nella radice con 6 numeri e 1 in `develop`, solo versioni finali e solo documenti veri. Resa grafica verificata sul Manuale v1.6 in una prova a parte, non su ogni file.
- **Cosa non deve succedere.** Non successo: nessun documento per il cliente con ore, buffer o tecnologie nuove (verificato a ricerca sui Markdown).

## 3. Documenti

- Radice: 6 PDF finali, 01 Proposta v1.0, 02 Manuale v1.6, 03 Documento tecnico v1.5, 04 Piano dei SAL v2, 05 Guida v1.2, 06 Report di progetto. `develop`: Markdown di Milestone report e Nota di sprint 10; PDF 01 del solo Milestone report.
- `claude`: 11 sorgenti, con le versioni precedenti e il materiale per i mockup. `log`: `storico.md` (54 righe, con Stato di partenza, stima precisa, piano di rilascio, riprogrammazione, esito della prova finale, avviso e risposta di garanzia come voci), `decisioni.md`, `registro-variazioni.md`.
- `input`: 15 file.
- In più rispetto allo scenario: nessuno. Mancano gli audio, dichiarato.
- Ricerca dei caratteri vietati, della persona e delle tabelle sui Markdown: nessun risultato.

## 4. Osservazioni

**Media**

- **Q2-3, Passaggio.** Dove: `documento-tecnico` (criterio di sufficienza) e base. Cosa è successo: il Documento tecnico dovrebbe permettere di implementare ogni funzionalità, ma la base dà solo i nomi dei moduli (`prezzi`, `disponibilita`) e dei componenti (`ContactForm`), non le rotte, le tabelle e le cartelle esistenti. Il documento ha dovuto marcare "da confermare" le rotte di accesso, la tabella degli utenti, le migrazioni e il cambio di stato degli ordini, e raccoglierli nella domanda T5. Alla chiusura T5 resta aperta in parte. Correzione proposta: la skill dice chi completa i nomi esistenti e quando (lo sviluppatore che tocca il file, nell'issue); la base elenca i nomi delle rotte, delle tabelle e delle cartelle che gli scenari usano.
- **Q2-5, Passaggio.** Dove: `manuale-del-prodotto` e `documento-tecnico`. Cosa è successo: scrivere i rami di errore in dettaglio ha fatto emergere due casi che il Manuale, già confermato dal cliente, non copre: il prodotto esaurito in un ordine da elenco (T4) e i codici sconto per i rivenditori (T2). Nessuna skill dice cosa fare di un caso scoperto dopo la conferma del Manuale: è una modifica (il Manuale si aggiorna e il cliente si informa) o una variazione. Nel test T4 è stata decisa dallo sviluppatore e T2 è rimasta aperta. Correzione proposta: dire che un caso tecnico scoperto dopo la conferma entra come domanda per il responsabile; se cambia un comportamento visto dall'utente si tratta con la skill `variazione`, altrimenti è una modifica che si recepisce nel Manuale senza costi per il cliente.
- **Q2-6, Buco.** Dove: Regole comuni (Numero dei PDF), `collaudo-e-rilascio`, `variazione`, `riprogrammazione`, `pacchetto-di-garanzia`. Cosa è successo: le skill nominano i file solo per alcuni documenti. Verbale del collaudo, avviso al cliente, risposta di garanzia, comunicazione di variazione e comunicazione di riprogrammazione non hanno un nome. La regola dice che il numero si assegna per tipo, ma il tipo si riconosce dal nome. I nomi usati (`verbale-collaudo`, `avviso-al-cliente`, `risposta-di-garanzia`, `comunicazione-variazione-V1`, `comunicazione-riprogrammazione`) sono scelti da chi esegue e lo script li accetta perché li deduce dal nome. Correzione proposta: elencare nelle skill, o nelle Regole comuni, i nomi fissi di tutti i documenti.
- **Q2-9, Manca.** Dove: Regole comuni (Documenti in PDF) e `build/crea-pdf.ps1`. Cosa è successo: lo script crea il PDF dal sorgente, ma nessun passo dice quando rigenerarlo né controlla che il PDF non sia più vecchio del sorgente. Dopo la garanzia, per esempio, un Manuale corretto in `claude` avrebbe ancora il vecchio PDF nella radice. Correzione proposta: il passo di chiusura di ogni documento include la creazione del PDF; lo script stampa un avviso se esiste un PDF più vecchio del sorgente.

**Bassa**

- **Q2-1, Buco.** Dove: `kickoff` e `kickoff-ticket`. Cosa è successo: le skill dicono di creare `input`, `claude` e i due file vuoti, ma nessuna dice di creare i PDF. Correzione proposta: nel controllo finale di ogni skill che produce un documento definitivo, "il PDF è creato con lo script". È la stessa causa di Q2-9: un solo punto da correggere.
- **Q2-2, Buco.** Dove: Regole comuni (Input del cliente). Cosa è successo: due conversazioni nello stesso giorno hanno lo stesso nome (data più `trascrizione` o `sintesi`). Non successo nella prova, ma la regola non lo prevede. Correzione proposta: un suffisso dopo la data (`-a`, `-b`, o l'ora).
- **Q2-4, Peso.** Dove: `documento-tecnico`. Cosa è successo: al kickoff il Documento tecnico passa da 162 a 326 righe (341 alla chiusura), con i capitoli 3, 4, 5 e 6 che crescono di più. Il capitolo 5 occupa quasi la metà. Per una funzionalità media il blocco ha sei parti (file, interfacce, flusso, errori, interfaccia utente, test). Correzione proposta: nessuna: è il costo previsto dal criterio di sufficienza. Va tenuto in conto nel tempo della sottofase di documentazione e, in un progetto grande, nella stima.
- **Q2-7, Peso (risolta da Leonardo).** Dove: Regole comuni (Documenti in PDF). Cosa era successo: con "tutto in PDF" un progetto produceva 24 PDF, molti per documenti interni. Ora hanno il PDF solo i documenti veri e solo la versione finale: la radice ne ha 6. Resta da verificare che le persone che cercano il Documento tecnico o la Guida in PDF non ne sentano la mancanza.
- **Q2-8, Contraddizione.** Dove: Regole comuni (Struttura di una lavorazione) e `wireframe-e-prototipo`. Cosa è successo: la regola dice che nella radice stanno i PDF, ma wireframe e prototipo sono file HTML senza sorgente Markdown. Il test non ne ha prodotti, quindi non è stato provato. Correzione proposta: dire che i file HTML dei wireframe e del prototipo stanno nella radice con il numero del tipo, e che per loro non c'è sorgente in `claude`.
- **Q2-10, Esecuzione.** Dove: diario. Cosa è successo: nel diario la prima versione dichiarava 19 PDF mentre i file sono 21 (19 numeri); corretto. Non cambia i piani.
- **Q2-11, Buco.** Dove: Regole comuni (Documenti del sistema). Cosa è successo: senza una cartella `sistema`, la versione vigente di Manuale, Documento tecnico e Guida è quella con il numero di versione più alto tra tutte le lavorazioni. Con due lavorazioni che aggiornano lo stesso documento nello stesso periodo, la numerazione può collidere (due v1.5) o una può ripartire da una base vecchia (vedi Q-21 della prova 1). Chi cerca il vigente deve cercare per nome in tutta la cartella delle lavorazioni. Correzione proposta: l'allineamento a fine lavoro parte sempre dalla versione più alta presente in quel momento, e la collisione si risolve prendendo il numero successivo.

## 5. Peso della procedura

- **Documento tecnico.** Raddoppia di lunghezza al kickoff. La parte più costosa è il capitolo 5 delle funzionalità nuove (F6, F7, F8): una pagina e mezza per ognuna. Il valore è alto per chi sviluppa, perché toglie le domande a chi ha scritto il documento. Si può contenere ammettendo "invariato" per i capitoli 7 e 8 quando non cambiano.
- **PDF.** Il costo di creazione è basso (pochi secondi per file). Con la regola nuova i file sono pochi: vedi Q2-7.
- **Cartella `input`.** Costo basso. Il valore sta nel ritrovare tutto in un posto; nella prova 1 le trascrizioni stavano in cinque cartelle diverse.

## 6. Confronto con la prova precedente

Le osservazioni della prova 1 non cambiano: la prova 2 non ha rifatto i passi, quindi Q-1 a Q-19 restano nello stato dell'analisi della prova 1. Per le correzioni di struttura, che la prova 1 non conteneva:

- **Documenti sparsi in cinque cartelle (richiesta di Leonardo).** Risolto con `input`, `claude` e la radice.
- **Nomi troppo lunghi (richiesta di Leonardo).** Risolto, con Q2-6 aperta per i tipi senza nome.
- **Documento tecnico troppo corto (richiesta di Leonardo).** Risolto per le funzionalità nuove; ancora aperto per le funzionalità esistenti della base (F1-F5, F10-F12), che restano al livello delle versioni precedenti (Q2-3).
- **Regressioni.** Nessuna sui piani. Una nuova: i file senza sorgente Markdown (Q2-8).

## 7. Decisioni per Leonardo

- **PDF anche per i documenti interni (Q2-7).** Già deciso da Leonardo: solo i documenti veri (non i messaggi), solo versioni finali.
- **Nomi fissi dei documenti (Q2-6).** Raccomandazione: scrivere l'elenco nelle Regole comuni, nella voce Nomi dei file.
- **Come trattare i casi scoperti dopo la conferma del Manuale (Q2-5).** Raccomandazione: domanda al responsabile, poi variazione solo se il comportamento visto dall'utente cambia.
- **Rifare la prova.** Se si correggono Q2-3, Q2-5, Q2-6 e Q2-9, la prova 3 può ripetere solo il kickoff e la documentazione, dove i cambiamenti pesano.

## 8. Aggiunta: Piano di progetto riorganizzato

Dopo la stesura dell'analisi, Leonardo ha riorganizzato il Piano di progetto: i documenti veri sono Proposta, Manuale, Documento tecnico, Piano dei SAL, Guida e Report di progetto, più le Note di sprint e i Milestone report in `develop`. Tutto il resto (Stato di partenza, stima precisa, piano di rilascio, scheda tecnica, esiti di prove e collaudi, variazioni, riprogrammazioni, messaggi) è storia in `log`. La prova è stata riallineata: i documenti eliminati sono stati riassunti come voci di `storico.md`.

- **Q2-12, Peso.** Dove: `log/storico.md` e skill `kickoff`. Cosa è successo: lo Stato di partenza di 82 righe e la stima precisa di 22 sono diventati una voce di 9 righe e una di 3, con sotto-punti molto densi. Il file passa da 24 a 54 righe in una sola prova. Su un progetto lungo lo storico diventa il file più grande, e la voce dello Stato di partenza è difficile da cercare. Correzione proposta: voci con un titolo ricercabile e una sezione per tipo (Stato di partenza, Stima) all'inizio del file, o un limite di righe per voce con rimando al Documento tecnico.
- **Q2-13, Passaggio.** Dove: `kickoff` e `proposta-di-soluzione`. Cosa è successo: la Proposta legge ora lo Stato di partenza da una voce dello storico. La skill `proposta-di-soluzione` chiede "lo Stato di partenza" come fonte e non dice più dove si trova. Correzione proposta: dire che la fonte è la voce con quel titolo in `storico.md`.
- **Q2-14, Buco.** Dove: Piano di progetto (Guida) e `guida-alla-pubblicazione`. Cosa è successo: la scheda tecnica non esiste più e le particolarità del rilascio vanno nella Guida; ma la Guida è un documento del sistema, vigente per tutti i lavori. Le particolarità di un singolo rilascio (data, chi carica i listini) sono storia di quel lavoro, non regole del sistema. Correzione proposta: nella Guida solo ciò che vale per i rilasci futuri; le particolarità di un rilascio restano nella voce del piano di rilascio in `storico.md`.
- **Q2-15, Buco.** Dove: Piano di prodotto e Piano dei ticket. Cosa è successo: restano nel Piano di prodotto lo Stato di partenza e il Piano di lancio come documenti, e nel Piano dei ticket la Scheda di intervento. Il Piano di progetto è cambiato: i piani non sono più coerenti tra loro. Correzione proposta: riorganizzare allo stesso modo il Piano di prodotto e valutare i ticket.
- **Q2-16, Superfluo.** Dove: `riprogrammazione`, `variazione`, `prova-su-staging`. Cosa è successo: le tre skill producevano un documento e un messaggio; ora producono una voce di storico e un messaggio. Il formato della voce non è definito: nella prova si è scelta una voce con sotto-punti per cause, ricalcolo, leve e decisione. Correzione proposta: dire nelle skill il formato minimo della voce.
