# Documento tecnico, Lumera Arredi, sito di vendita online

Cliente: Lumera Arredi. Sistema: sito di vendita online e gestionale. Versione 1.5, del 2027-02-26. Deriva dalla v1.4 (progetto 107, kickoff). Si riferisce al Manuale v1.6. Interno. Il capitolo Milestone del comparatore (lavorazione 100) è invariato. Documento a scopo di test, scritto per intero.

## 1. Panoramica

Il sistema ha tre parti, ciascuna in un repository.

- `lumera-sito`: interfaccia del sito, con un server per il rendering lato server (SSR).
- `lumera-api`: servizio di API e database relazionale. È usato dal sito e dal gestionale.
- `lumera-gestionale`: interfaccia interna per prodotti, ordini, clienti, codici sconto, messaggi di contatto, anagrafica dei rivenditori e, con il progetto 107, collegamento ai rivenditori e listini.

Due servizi esterni: il servizio di pagamento con carta e il servizio di invio delle email.

## 2. Tecnologie

- **React e TypeScript.** Interfaccia del sito e del gestionale. Scelte per la conoscenza del team e per la possibilità di condividere componenti.
- **Server SSR.** Rende le pagine del sito lato server. Va riavviato dopo ogni pubblicazione del sito (vedi Guida alla pubblicazione).
- **API e database relazionale.** Un solo servizio per sito e gestionale, per tenere un'unica regola di calcolo dei prezzi e delle disponibilità.
- **Servizio esterno di pagamento.** Gestisce i dati di carta, che il sistema non conserva.
- **Servizio esterno di invio email.** Usato per le conferme d'ordine e per le email all'assistenza.

## 3. Struttura del codice

- `lumera-sito`: cartelle per pagine, componenti e stili. Un componente per ogni blocco di schermata.
- `lumera-api`: un modulo per ogni dominio. Moduli di calcolo con test automatici dove esistono. Il `CLAUDE.md` del repository fissa tre regole: ogni modifica a un modulo di calcolo ha un test automatico; i moduli non si importano a vicenda in modo circolare; i nomi dei file sono in minuscolo con i trattini.
- `lumera-gestionale`: schermate per prodotti, ordini, clienti, messaggi, anagrafica, collegamento dei rivenditori e listini.
- Ogni repository ha un file `CLAUDE.md` con le convenzioni.

## 4. Dati

Entità principali, con le story che le usano.

- **Prodotto**: codice, nome, descrizione, immagini, prezzo, marca, categoria, disponibilità. F1, F2, F10, F11, F12.
- **Cliente**: accesso, indirizzi, lista dei desideri. F4, F5.
- **Carrello**: righe con prodotto e quantità, data dell'ultimo uso. F3.
- **Ordine**: righe, prezzi calcolati, indirizzo, stato. F4.3, F4.4, F5.1. Per un ordine grande lo stato iniziale è "da confermare" e non c'è pagamento. F8.1, F8.2.
- **Confronto**: elenco dei prodotti scelti, conservato nel browser e in un link condiviso. F10, F11, F12.1.
- **Utente del gestionale**: ruoli multipli, solo nel gestionale.
- **Rivenditore**: anagrafica nel gestionale, circa quaranta righe inserite a mano, con partita IVA ed email. Con il progetto 107 è collegata a un utente del sito tramite una tabella di collegamento. F6.1, F6.2.
- **Utente del sito con ruolo rivenditore**: nuovo ruolo accanto a quello del cliente. F6.1.
- **Listino del rivenditore**: tabella di prezzi, un prezzo per ogni prodotto e per ogni rivenditore. F7.1, F7.2, F7.3.

Regole di validità: le quantità sono intere positive; un ordine accetta solo prezzi calcolati dal servizio di calcolo dei prezzi; un prodotto esaurito non entra in un ordine; un utente con ruolo rivenditore e senza collegamento non apre l'area riservata.

## 5. Realizzazione delle funzionalità

**F1 Catalogo** (`lumera-sito`, `lumera-api`). Elenco, ricerca e filtri sono richieste alle API con parametri; la paginazione è lato API. Rami di errore: nessun risultato (F1.1, F1.2, F1.3), intervallo di prezzo invertito (F1.3).

**F2 Scheda prodotto** (`lumera-sito`, `lumera-api`). Una richiesta per prodotto; il prezzo viene dal modulo `prezzi`. Rami di errore: prodotto non trovato (F2.1), prodotto esaurito (F2.2).

**F3 Carrello** (`lumera-sito`, `lumera-api`). Il carrello è salvato lato API, associato alla sessione o al cliente. Il totale è calcolato dal modulo `prezzi`, che arrotonda ogni riga. Un lavoro pianificato svuota i carrelli non usati da 90 giorni (F3.3). Rami di errore: quantità non valida (F3.2), prodotto esaurito (F3.1).

**F3.4 Sconto di importo fisso prima dell'IVA** (`lumera-api`, `lumera-gestionale`). Il modulo `prezzi` di `lumera-api` calcola il totale in questo ordine: somma delle righe, sottrazione del codice sconto di importo fisso ripartito in proporzione al valore delle righe per aliquota, IVA di ogni riga, arrotondamento dell'ultima riga. I codici in percentuale restano applicati con lo stesso risultato di prima. Il pagamento riceve il totale già calcolato e non ricalcola lo sconto. La stessa funzione è usata dai preventivi manuali di `lumera-gestionale`: cambia insieme al carrello.

**F4 Pagamento** (`lumera-sito`, `lumera-api`). Il riepilogo riceve il totale dalle API; il pagamento invia l'importo al servizio esterno e, a pagamento riuscito, crea l'ordine con le API degli ordini. I circuiti di carta accettati stanno in un file di configurazione. L'email di conferma parte dalle API tramite il servizio email. Rami di errore: circuito non accettato, pagamento rifiutato, connessione interrotta (F4.3), email fallita (F4.4). Per la connessione interrotta il servizio di pagamento riceve una chiave di unicità, così un secondo tentativo non addebita due volte.

**F5 Area cliente** (`lumera-sito`, `lumera-api`). Ordini, indirizzi e lista dei desideri sono letti e scritti con le API del cliente.

**F6 Accesso dei rivenditori** (`lumera-api`, `lumera-sito`, `lumera-gestionale`). Nuovo ruolo `rivenditore` nel modello degli utenti. Tabella di collegamento tra utente del sito e rivenditore dell'anagrafica. Migrazione del database per il ruolo e per il collegamento. Accesso nel sito con la stessa sessione degli utenti esistenti. Nel gestionale una schermata per creare e togliere il collegamento (F6.2). Rami di errore: credenziali errate e accesso non collegato, messaggio "Accesso non attivo" (F6.1); rivenditore già collegato e accesso già collegato ad altro rivenditore (F6.2).

**F7 Prezzi per rivenditore** (`lumera-api`, `lumera-sito`, `lumera-gestionale`). Nuova tabella dei listini per rivenditore (prezzo per prodotto). Il modulo `prezzi` riceve il rivenditore e restituisce il prezzo del suo listino, con ricaduta sul prezzo di tutti se l'utente non è un rivenditore. Il modulo è usato da scheda prodotto, carrello, pagamento e gestionale: cambiano tutti insieme. Importazione dei listini dal gestionale, riga per riga, con segnalazione delle righe non valide (formato da definire sui file di esempio). Rami di errore: prodotto senza prezzo nel listino, "Prezzo su richiesta" (F7.1, F7.2); listino vuoto (F7.1); file con righe non valide o vuoto (F7.3).

**F8 Ordini grandi** (`lumera-api`, `lumera-sito`). Caricamento di un file con codici e quantità, validazione riga per riga, creazione dell'ordine senza passare dal servizio di pagamento. L'ordine arriva nel gestionale con lo stato "da confermare". Rami di errore: codice non trovato, quantità non valida, prodotto con prezzo su richiesta, file vuoto (F8.1); elenco senza ordini (F8.2).

**F8.3 Preventivo in PDF** (`lumera-api`, `lumera-sito`). Il PDF è generato dalle API a richiesta, a partire dall'ordine e dal listino del rivenditore al momento dell'ordine, e non è conservato. L'accesso è limitato agli ordini del rivenditore collegato all'utente. Rami di errore: creazione del PDF fallita, messaggio e nessun file; ordine di altro rivenditore, richiesta rifiutata (F8.3).

**F10 Selezione nel comparatore** (`lumera-sito`). Il confronto vive nel browser; nessuna scrittura lato API. Limite di quattro prodotti applicato nell'interfaccia.

**F11 Confronto** (`lumera-sito`, `lumera-api`). Le caratteristiche dei prodotti scelti si leggono con una richiesta unica alle API. La vista "Solo differenze" è calcolata nell'interfaccia. Il filtro sui prodotti disponibili subito riusa il dato di disponibilità già restituito con il prodotto.

**F12 Condivisione e acquisto** (`lumera-sito`, `lumera-api`). Il link contiene i codici dei prodotti. Dal confronto si riusa l'aggiunta al carrello di F3.1.

## 6. Integrazioni

- **Servizio di pagamento.** Scambio: importo e dati di carta (inseriti dal cliente direttamente nel servizio), esito. Se non risponde, il pagamento non si completa e il carrello resta intatto. Gli ordini grandi non lo usano.
- **Servizio di invio email.** Scambio: destinatario, testo. Se non risponde, l'ordine resta valido e la conferma è visibile nell'area cliente.

## 7. Infrastruttura e ambienti

Staging e produzione per il sito e le API. Il progetto 107 introduce una migrazione del database: la Guida alla pubblicazione la descrive come regola del sistema. I passi per pubblicare e per tornare alla versione precedente stanno nella Guida alla pubblicazione, a cui questo capitolo rimanda.

## 8. Sicurezza e dati personali

- Gli utenti del sito hanno ora due ruoli: cliente e rivenditore. I ruoli multipli del gestionale restano solo nel gestionale.
- Un rivenditore vede solo il proprio listino e i propri ordini: le richieste alle API filtrano per il rivenditore collegato all'utente.
- Le password sono conservate cifrate. I dati di carta non sono conservati.
- Copia di sicurezza del database prima di ogni pubblicazione.
- Dati personali dei clienti: nome, indirizzi, email. Dati dei rivenditori: partita IVA ed email. Conservati finché l'account esiste.

## 9. Decisioni tecniche

- 2023-03, un solo servizio di API per sito e gestionale. Alternativa scartata: API separate. Motivo: un'unica regola di calcolo.
- 2026-08, il confronto del comparatore vive nel browser, con link condivisibile che contiene solo i codici dei prodotti. Alternativa scartata: confronto salvato lato API. Motivo: meno dati da conservare e nessun accesso necessario.
- 2026-08, pagamento con il servizio esterno con chiave di unicità (lavorazione 96).
- 2026-10-14, ripartizione dell'importo fisso tra aliquote IVA in proporzione al valore delle righe, con l'ultima riga che assorbe il centesimo. Alternativa scartata: sconto sulla sola aliquota piena. Origine: ticket 103, DEC5.
- 2026-12-02, listino per rivenditore come tabella di prezzi, non come percentuale. Motivo: risposta D1 di Franco. Alternativa scartata: percentuale sul listino di tutti.
- 2026-12-02, ordine grande senza pagamento: stato "da confermare" nel gestionale. Motivo: risposta D6.
- 2027-01-20, le rotte dell'area riservata non hanno cache, perché mostrano prezzi diversi per utente; la cache su `/catalogo` e `/prodotto` resta per i clienti che non sono rivenditori. Alternativa scartata: cache per utente. Motivo: complessità non necessaria per una quarantina di rivenditori. Origine: annotazione `guida` delle issue di F7.1.
## 10. Rischi e debito tecnico

- Il modulo `prezzi` ha ora test sul calcolo dello sconto e sul listino del rivenditore (12 ore di test aggiunti in M2); restano senza test il carrello e il resto del modulo. Il pagamento e le API degli ordini hanno test.
- Il modulo di contatto del sito non ha test automatici.
- Migrazione del database: descritta dalla Guida alla pubblicazione v1.2, con la migrazione di ritorno provata sull'ambiente di prova.
- Formato dei listini: file di esempio di Diego, un file per rivenditore. Eventuali varianti future sono una richiesta nuova.
- Il gestionale non ha ancora regole di riavvio o cache nella Guida.

## 11. Milestone

### Lavorazione 100, comparatore di prodotti

Capitolo invariato rispetto alla v1.3. Lo aggiorna il project manager 1.

### Lavorazione 107, area riservata per i rivenditori (primo progetto)

#### Parametri

- **Data di avvio:** lunedì 7 dicembre 2026 (sprint 8).
- **Squadra:** sviluppatore 1, 30 ore a settimana; sviluppatore 2, 30; sviluppatore 3, 15. 75 ore a settimana, 150 a sprint, 120 al netto del buffer di sprint del 20%. Le ore del project manager, del team lead e della grafica non sono contate.
- **Buffer di milestone:** 20% delle ore stimate (più persone).
- **Durata:** da uno a due sprint.

#### Calendario di progetto

- Martedì 8 dicembre (festività), sprint 8: un giorno in meno per ogni persona: capacità lorda 135, netta 108.
- Chiusura aziendale dal 24 dicembre al 6 gennaio: sprint 9 con tre giorni (21, 22, 23 dicembre): lorda 45, netta 36. Sprint 10 con sette giorni (7, 8, 11-15 gennaio, il 6 è festività): lorda 105, netta 84.
- Sprint 11 e 12: 120 ore nette ciascuno.
- Ferie individuali: non note, da chiedere a ogni inizio milestone. Chiusure del cliente: nessuna nel periodo. Fiera: lunedì 22 febbraio 2027.

#### Quadro delle milestone

- **M1 (SAL1), Accesso dei rivenditori.** Obiettivo dimostrabile: un rivenditore collegato all'anagrafica entra nell'area riservata. Story F6.1, F6.2. Ore stimate 90, buffer 18, durata 1 sprint (sprint 8), capacità 108 ore. Prova venerdì 18 dicembre 2026. Stato: Accettata il 7 gennaio 2027. Ore reali 88.
- **M2 (SAL2), Prezzi del rivenditore.** Obiettivo: due rivenditori di prova vedono prezzi diversi nel catalogo e Diego carica i listini. Story F7.3, F7.1. Ore 100, buffer 20, durata 2 sprint (sprint 9 e 10), capacità 120 ore. Prova prevista venerdì 15 gennaio 2027, spostata a venerdì 22 gennaio 2027 per il ritardo dei listini e la malattia dello sviluppatore 2. Stato: Accettata il 28 gennaio 2027. Ore reali 104 (4 ore oltre la stima, chiuse nella prima settimana dello sprint 11).
- **M3 (SAL3), Carrello, ordini grandi e collaudo.** Obiettivo: il rivenditore ordina con un elenco e il carrello usa i suoi prezzi. Story F7.2, F8.1, F8.2, F8.3. Ore 220 (200 più le 20 della variazione V1), buffer 40, durata 2 sprint (sprint 11 e 12), capacità 240 ore. Prova venerdì 12 febbraio 2027. Stato: Accettata il 12 febbraio 2027. Ore reali 231.
- **Totale.** Ore stimate 410 (390 più 20 della variazione V1), buffer 78, ore con buffer 488, capacità 468 ore prima della variazione. Ore reali 423. Collaudo finale e pubblicazione: sprint 13, dal 15 al 18 febbraio, prima della fiera.

#### Materiali del cliente

- Elenco dei rivenditori senza doppioni: per M1, entro venerdì 11 dicembre 2026.
- Utenze di prova per i rivenditori: per M1, entro lunedì 14 dicembre 2026.
- File dei listini dei rivenditori: per M2, entro venerdì 18 dicembre 2026. Consegnati lunedì 11 gennaio 2027, con 6 giorni lavorativi di ritardo (chiusura aziendale esclusa).
- Elenco dei rivenditori e utenze di prova: consegnati nei tempi previsti.

#### Rischi e incognite

- Formato dei listini (spike nella prima issue di M2).
- Test mancanti su `prezzi` e carrello.
- Migrazione del database.
- Fiera il 22 febbraio: margine di un giorno lavorativo dopo la pubblicazione.

#### Copertura

F6.1, F6.2 in M1. F7.3, F7.1 in M2. F7.2, F8.1, F8.2 in M3.

#### Stima di durata

10 settimane di sviluppo, dal 7 dicembre 2026 al 12 febbraio 2027 (chiusura aziendale compresa). La stima della Proposta era 10 settimane per il primo progetto: nessuna differenza. Durata reale: la stessa. Pubblicazione giovedì 18 febbraio 2027.

## 12. Modifiche rispetto alla versione precedente

- v1.5 (2027-02-26): capitolo 5 con F8.3 (variazione V1); capitolo 9 con la decisione sulle rotte con e senza cache; capitolo 10 aggiornato; capitolo 11 con M1, M2 e M3 in stato Accettata, ore reali, prova di M2 al 22 gennaio e materiali consegnati. Origine: chiusura del progetto 107, Manuale v1.6.
- v1.4 (2026-12-04): capitoli 1, 3, 4, 5, 6, 7, 8, 9, 10 e 11 per il progetto 107 (F6, F7, F8, F3.3 a 90 giorni). Origine: Manuale v1.5.
- v1.3 (2026-10-21): capitoli 5, 9 e 10. Origine: ticket 103.
- v1.2 (2026-09-25): capitolo 5 per F10, F11, F12; capitolo 9 con la decisione sul confronto; capitolo 11 con le milestone del comparatore. Origine: lavorazione 100.
- v1.1: carrello e pagamento rifatti. Origine: lavorazione 96.
