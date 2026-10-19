# Documento tecnico, Lumera Arredi, sito di vendita online

Cliente: Lumera Arredi. Sistema: sito di vendita online e gestionale. Versione 1.0, del 2023-10-02. Si riferisce al Manuale v1.0. Interno. Documento a scopo di test, ricostruito per completezza della catena delle versioni (la base di partenza ha le versioni più recenti).


## 1. Panoramica

Il sistema ha tre parti, ciascuna in un repository.

- `lumera-sito`: interfaccia del sito, con un server per il rendering lato server (SSR).
- `lumera-api`: servizio di API e database relazionale. È usato dal sito e dal gestionale.
- `lumera-gestionale`: interfaccia interna per prodotti, ordini, clienti, codici sconto, messaggi di contatto e anagrafica dei rivenditori. Usa le stesse API del sito.

Due servizi esterni: il servizio di pagamento con carta e il servizio di invio delle email.

## 2. Tecnologie

- **React e TypeScript.** Interfaccia del sito e del gestionale. Scelte per la conoscenza del team e per la possibilità di condividere componenti.
- **Server SSR.** Rende le pagine del sito lato server, per i motori di ricerca e per la velocità della prima visualizzazione. Va riavviato dopo ogni pubblicazione del sito (chi pubblica lo sa).
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

- **Prodotto**: codice, nome, descrizione, immagini, prezzo, marca, categoria, disponibilità. F1, F2.
- **Cliente**: accesso, indirizzi, lista dei desideri. F4, F5.
- **Carrello**: righe con prodotto e quantità, data dell'ultimo uso. F3.
- **Ordine**: righe, prezzi calcolati, indirizzo, stato. F4.3, F5.1.
- **Utente del gestionale**: ruoli multipli, solo nel gestionale.
- **Rivenditore**: anagrafica nel gestionale, circa quaranta righe inserite a mano, non collegate agli utenti del sito.

Regole di validità: le quantità sono intere positive; un ordine accetta solo prezzi calcolati dal servizio di calcolo dei prezzi; un prodotto esaurito non entra in un ordine.

## 5. Realizzazione delle funzionalità

**F1 Catalogo** (`lumera-sito`, `lumera-api`). Elenco, ricerca e filtri sono richieste alle API con parametri; la paginazione è lato API. I filtri per categoria, prezzo e marca sono accettati come parametri. Rami di errore: nessun risultato (F1.1, F1.2, F1.3), intervallo di prezzo invertito (F1.3).

**F2 Scheda prodotto** (`lumera-sito`, `lumera-api`). Una richiesta per prodotto; il prezzo viene dal modulo `prezzi`. Rami di errore: prodotto non trovato (F2.1), prodotto esaurito (F2.2).

**F3 Carrello** (`lumera-sito`, `lumera-api`). Il carrello è salvato lato API, associato alla sessione o al cliente. Il totale è calcolato dal modulo `prezzi`, che arrotonda ogni riga. Rami di errore: quantità non valida (F3.2), prodotto esaurito (F3.1).

**F4 Pagamento** (`lumera-sito`, `lumera-api`). Il riepilogo riceve il totale dalle API; il pagamento invia l'importo al servizio esterno e, a pagamento riuscito, crea l'ordine con le API degli ordini. I circuiti di carta accettati stanno in un file di configurazione. Rami di errore: circuito non accettato, pagamento rifiutato, connessione interrotta (F4.3).

**F5 Area cliente** (`lumera-sito`, `lumera-api`). Ordini, indirizzi e lista dei desideri sono letti e scritti con le API del cliente.

## 6. Integrazioni

- **Servizio di pagamento.** Scambio: importo e dati di carta (inseriti dal cliente direttamente nel servizio), esito. Se non risponde, il pagamento non si completa e il carrello resta intatto.
- **Servizio di invio email.** Scambio: destinatario, testo. Se non risponde, l'ordine resta valido e la conferma è visibile nell'area cliente.

## 7. Infrastruttura e ambienti

Staging e produzione per il sito e le API. Non esiste ancora una guida scritta: chi pubblica conosce i passi.

## 8. Sicurezza e dati personali

- Gli utenti del sito hanno un solo ruolo, il cliente finale. I ruoli multipli esistono solo nel gestionale.
- Le password sono conservate cifrate. I dati di carta non sono conservati.
- Copia di sicurezza del database prima di ogni pubblicazione.
- Dati personali dei clienti: nome, indirizzi, email. Conservati finché l'account esiste.

## 9. Decisioni tecniche

- 2023-03, un solo servizio di API per sito e gestionale. Alternativa scartata: API separate. Motivo: un'unica regola di calcolo.

## 10. Rischi e debito tecnico

- Il carrello e il modulo `prezzi` non hanno test automatici. Il pagamento e le API degli ordini li hanno.
- Il modulo di contatto del sito (componente `ContactForm`, endpoint `contatti`, tabella `messaggi_contatto`) non ha test automatici.

## 11. Piano delle milestone

Nessuna lavorazione con un Piano delle milestone in corso alla data di questa versione.

## 12. Modifiche rispetto alla versione precedente

- v1.0 (2023-10-02): prima versione, con il lancio del sito.
