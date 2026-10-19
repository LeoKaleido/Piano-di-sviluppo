# Documento tecnico, Lumera Arredi, sito di vendita online

Cliente: Lumera Arredi. Sistema: sito di vendita online e gestionale. Versione 1.3, del 2026-10-21. Deriva dalla v1.2. Si riferisce al Manuale v1.4. Interno. Il capitolo Milestone del comparatore (lavorazione 100) è invariato. Documento a scopo di test, scritto per intero.

I numeri delle milestone SAL1 e SAL3 del comparatore sono riempitivi della base: nessuna prova li usa.

## 1. Panoramica

Il sistema ha tre parti, ciascuna in un repository.

- `lumera-sito`: interfaccia del sito, con un server per il rendering lato server (SSR).
- `lumera-api`: servizio di API e database relazionale. È usato dal sito e dal gestionale.
- `lumera-gestionale`: interfaccia interna per prodotti, ordini, clienti, codici sconto, messaggi di contatto e anagrafica dei rivenditori. Usa le stesse API del sito.

Due servizi esterni: il servizio di pagamento con carta e il servizio di invio delle email.

## 2. Tecnologie

- **React e TypeScript.** Interfaccia del sito e del gestionale. Scelte per la conoscenza del team e per la possibilità di condividere componenti.
- **Server SSR.** Rende le pagine del sito lato server, per i motori di ricerca e per la velocità della prima visualizzazione. Va riavviato dopo ogni pubblicazione del sito (vedi Guida alla pubblicazione).
- **API e database relazionale.** Un solo servizio per sito e gestionale, per tenere un'unica regola di calcolo dei prezzi e delle disponibilità.
- **Servizio esterno di pagamento.** Gestisce i dati di carta, che il sistema non conserva.
- **Servizio esterno di invio email.** Usato per le conferme d'ordine e per le email all'assistenza.

## 3. Struttura del codice

- `lumera-sito`: cartelle per pagine, componenti e stili. Un componente per ogni blocco di schermata.
- `lumera-api`: un modulo per ogni dominio. Moduli di calcolo con test automatici dove esistono. Il `CLAUDE.md` del repository fissa tre regole: ogni modifica a un modulo di calcolo ha un test automatico; i moduli non si importano a vicenda in modo circolare; i nomi dei file sono in minuscolo con i trattini.
- `lumera-gestionale`: schermate per prodotti, ordini, clienti, messaggi, anagrafica.
- Ogni repository ha un file `CLAUDE.md` con le convenzioni.

## 4. Dati

Entità principali, con le story che le usano.

- **Prodotto**: codice, nome, descrizione, immagini, prezzo, marca, categoria, disponibilità. F1, F2, F10, F11, F12.
- **Cliente**: accesso, indirizzi, lista dei desideri. F4, F5.
- **Carrello**: righe con prodotto e quantità, data dell'ultimo uso. F3.
- **Ordine**: righe, prezzi calcolati, indirizzo, stato. F4.3, F4.4, F5.1.
- **Confronto**: elenco dei prodotti scelti, conservato nel browser e in un link condiviso. F10, F11, F12.1.
- **Utente del gestionale**: ruoli multipli, solo nel gestionale.
- **Rivenditore**: anagrafica nel gestionale, circa quaranta righe inserite a mano, non collegate agli utenti del sito.

Regole di validità: le quantità sono intere positive; un ordine accetta solo prezzi calcolati dal servizio di calcolo dei prezzi; un prodotto esaurito non entra in un ordine.

## 5. Realizzazione delle funzionalità

**F1 Catalogo** (`lumera-sito`, `lumera-api`). Elenco, ricerca e filtri sono richieste alle API con parametri; la paginazione è lato API. I filtri per categoria, prezzo e marca sono accettati come parametri. Rami di errore: nessun risultato (F1.1, F1.2, F1.3), intervallo di prezzo invertito (F1.3).

**F2 Scheda prodotto** (`lumera-sito`, `lumera-api`). Una richiesta per prodotto; il prezzo viene dal modulo `prezzi`. Rami di errore: prodotto non trovato (F2.1), prodotto esaurito (F2.2).

**F3 Carrello** (`lumera-sito`, `lumera-api`). Il carrello è salvato lato API, associato alla sessione o al cliente. Il totale è calcolato dal modulo `prezzi`, che arrotonda ogni riga. Un lavoro pianificato svuota i carrelli non usati. Rami di errore: quantità non valida (F3.2), prodotto esaurito (F3.1).

**F3.4 Sconto di importo fisso prima dell'IVA** (`lumera-api`, `lumera-gestionale`). Il modulo `prezzi` di `lumera-api` calcola il totale in questo ordine: somma delle righe, sottrazione del codice sconto di importo fisso ripartito in proporzione al valore delle righe per aliquota, IVA di ogni riga, arrotondamento dell'ultima riga. I codici in percentuale restano applicati con lo stesso risultato di prima. Il pagamento riceve il totale già calcolato e non ricalcola lo sconto. La stessa funzione è usata dai preventivi manuali di `lumera-gestionale` (schermata dei preventivi): cambia insieme al carrello. Rami di errore: carrello con più aliquote IVA, ripartizione in proporzione (F3.4, comportamento); codice in percentuale, nessun cambiamento (F3.4, casi particolari).

**F4 Pagamento** (`lumera-sito`, `lumera-api`). Il riepilogo riceve il totale dalle API; il pagamento invia l'importo al servizio esterno e, a pagamento riuscito, crea l'ordine con le API degli ordini. I circuiti di carta accettati stanno in un file di configurazione. L'email di conferma parte dalle API tramite il servizio email. Rami di errore: circuito non accettato, pagamento rifiutato, connessione interrotta (F4.3), email fallita (F4.4). Per la connessione interrotta il servizio di pagamento riceve una chiave di unicità, così un secondo tentativo non addebita due volte.

**F5 Area cliente** (`lumera-sito`, `lumera-api`). Ordini, indirizzi e lista dei desideri sono letti e scritti con le API del cliente.

**F10 Selezione nel comparatore** (`lumera-sito`). Il confronto vive nel browser; nessuna scrittura lato API. Limite di quattro prodotti applicato nell'interfaccia.

**F11 Confronto** (`lumera-sito`, `lumera-api`). Le caratteristiche dei prodotti scelti si leggono con una richiesta unica alle API. La vista "Solo differenze" è calcolata nell'interfaccia. Il filtro sui prodotti disponibili subito riusa il dato di disponibilità già restituito con il prodotto.

**F12 Condivisione e acquisto** (`lumera-sito`, `lumera-api`). Il link contiene i codici dei prodotti. Dal confronto si riusa l'aggiunta al carrello di F3.1.

## 6. Integrazioni

- **Servizio di pagamento.** Scambio: importo e dati di carta (inseriti dal cliente direttamente nel servizio), esito. Se non risponde, il pagamento non si completa e il carrello resta intatto.
- **Servizio di invio email.** Scambio: destinatario, testo. Se non risponde, l'ordine resta valido e la conferma è visibile nell'area cliente.

## 7. Infrastruttura e ambienti

Staging e produzione per il sito e le API. I passi per pubblicare e per tornare alla versione precedente stanno nella Guida alla pubblicazione, a cui questo capitolo rimanda.

## 8. Sicurezza e dati personali

- Gli utenti del sito hanno un solo ruolo, il cliente finale. I ruoli multipli esistono solo nel gestionale.
- Le password sono conservate cifrate. I dati di carta non sono conservati.
- Copia di sicurezza del database prima di ogni pubblicazione.
- Dati personali dei clienti: nome, indirizzi, email. Conservati finché l'account esiste.

## 9. Decisioni tecniche

- 2023-03, un solo servizio di API per sito e gestionale. Alternativa scartata: API separate. Motivo: un'unica regola di calcolo.
- 2026-08, il confronto del comparatore vive nel browser, con link condivisibile che contiene solo i codici dei prodotti. Alternativa scartata: confronto salvato lato API. Motivo: meno dati da conservare e nessun accesso necessario.
- 2026-08, pagamento con il servizio esterno con chiave di unicità (lavorazione 96).
- 2026-10-14, ripartizione dell'importo fisso tra aliquote IVA in proporzione al valore delle righe, con l'ultima riga che assorbe il centesimo. Alternativa scartata: sconto sulla sola aliquota piena. Origine: ticket 103, DEC5.

## 10. Rischi e debito tecnico

- Il modulo `prezzi` ora ha test sul calcolo dello sconto; restano senza test il resto del modulo e il carrello. Il pagamento e le API degli ordini hanno test.
- Il modulo di contatto del sito (componente `ContactForm`, endpoint `contatti`, tabella `messaggi_contatto`) non ha test automatici.
- Il ramo del comparatore (lavorazione 100) contiene modifiche non ancora rilasciate.
- Il pagamento è ancora in periodo di garanzia (lavorazione 96).

## 11. Milestone

Solo il comparatore di prodotti (lavorazione 100) ha un capitolo Milestone vigente. Le altre lavorazioni del sistema sono chiuse.

### Parametri (lavorazione 100)

- **Data di avvio:** 1 settembre 2026.
- **Squadra:** sviluppatore 1, 30 ore a settimana; sviluppatore 2, 15 ore a settimana per il comparatore. 45 ore a settimana, 90 a sprint, 72 al netto del buffer di sprint del 20%.
- **Buffer di milestone:** 20% delle ore stimate.
- **Ferie:** sviluppatore 2 assente dal 19 al 23 ottobre 2026.

### Quadro delle milestone

- **M1 (SAL1), Selezione e confronto base.** Obiettivo: il visitatore sceglie prodotti e li vede affiancati. Story F10.1, F10.2, F10.3, F11.1. Ore stimate 110, buffer 22. Prova venerdì 25 settembre 2026. Stato: Accettata.
- **M2 (SAL2), Confronto avanzato.** Obiettivo: il visitatore evidenzia le differenze e acquista dal confronto. Story F11.2, F12.2. Ore stimate 140, buffer 28 (metà consumato, 14 ore rimaste), ore ancora da fare 80, capacità netta rimanente al 12 ottobre 96 ore, margine 16. Prova venerdì 30 ottobre 2026. Stato: In corso.
- **M3 (SAL3), Filtri e condivisione.** Obiettivo: il confronto mostra solo i prodotti disponibili subito e si condivide con un link. Story F11.3, F12.1. Ore stimate 100, buffer 20. Prova venerdì 27 novembre 2026. Stato: Da avviare.

### Materiali del cliente

Nessuno ancora atteso.

### Rischi e incognite

- Il filtro sui prodotti disponibili subito dipende dal dato di disponibilità.
- Il Black Friday (27 novembre 2026) coincide con la prova del SAL3.

### Copertura

F10.1, F10.2, F10.3, F11.1 in M1. F11.2, F12.2 in M2. F11.3, F12.1 in M3.

### Stima di durata

13 settimane di sviluppo, dal 1 settembre al 27 novembre 2026.

## 12. Modifiche rispetto alla versione precedente

- v1.3 (2026-10-21): capitoli 5, 9 e 10. Origine: ticket 103.
- v1.2 (2026-09-25): capitolo 5 per F10, F11, F12; capitolo 9 con la decisione sul confronto; capitolo 11 con le milestone del comparatore. Origine: lavorazione 100.
- v1.1: carrello e pagamento rifatti. Origine: lavorazione 96.
