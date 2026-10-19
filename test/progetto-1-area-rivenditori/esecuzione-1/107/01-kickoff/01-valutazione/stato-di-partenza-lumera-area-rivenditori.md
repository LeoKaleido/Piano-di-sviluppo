# Stato di partenza, Lumera Arredi, area riservata per i rivenditori

Progetto 107. Data: 2026-10-08. Interno.

## Decisioni dell'analisi

- **Richiesta.** Franco: "Diego ha bisogno di un'area riservata per i rivenditori: devono entrare con le loro credenziali, vedere i loro prezzi e fare ordini grandi senza passare dal carrello normale. Sono una quarantina. Ci serve per la fiera di fine febbraio."
- **Categoria.** Progetto. Il sistema esiste. Criteri che valgono: la stima supera le 2 settimane, serve più di una persona, serve una proposta (come funzionano i listini), cambia l'aspetto (nuove schermate). Nessuna condizione è dubbia.
- **Urgenza.** Normale (assegnata da chi analizza il 5 ottobre).
- **Responsabile.** Project manager 2, designato il 6 ottobre con chi gestisce il team: il project manager 1 è saturo con il comparatore fino al 27 novembre.
- **Referente.** Franco. Diego non approva.
- **Stima a occhio.** 60 giorni lavorativi di sviluppo (6 ottobre, interna, fatta in una decina di minuti). Tempo del kickoff: 6 giorni lavorativi, dal 6 al 13 ottobre.
- **Stima precisa.** 12 settimane per la soluzione intera, circa 720 ore con buffer, con tre sviluppatori: vedi `02-stima`.
- **Verifica preliminare, lavori aperti (parte A).**
  - Nessun lavoro copre la richiesta (verificato nei documenti dei lavori aperti).
  - Pagamento, lavorazione 96, in garanzia fino al 26 ottobre: riguarda il pagamento che i rivenditori vorrebbero cambiare (bonifico). Nessun conflitto per il resto: lo sviluppo parte a dicembre.
  - Comparatore, lavorazione 100: un ramo non rilasciato modifica `disponibilita`, non i prezzi. Le persone dei due sviluppatori sono occupate fino al 27 novembre (verificato).
  - Ticket 101 (carrello, arrotondamento) e ticket 103 (sconto di importo fisso, modulo `prezzi`): il ticket 103 è in lavorazione tra il 13 e il 20 ottobre e cambia il calcolo dello sconto; il progetto dovrà partire dalla versione pubblicata. Ordine: prima il ticket, poi il progetto.
  - Esito: nessuna sovrapposizione, con dipendenze indicate.
- **Controllo del codice (parte B).** Letto da chi conosce il sistema (base).
  - Il modulo `prezzi` conosce un solo listino per tutti; è usato da scheda prodotto, carrello, pagamento e gestionale (verificato).
  - Un solo ruolo utente nel sito; ruoli multipli solo nel gestionale (verificato).
  - L'anagrafica dei rivenditori ha quaranta righe inserite a mano, non collegate agli utenti del sito, con cinque righe doppie (verificato).
  - Il carrello non ha test automatici; il modulo `prezzi` nemmeno; il pagamento sì (verificato).
  - Il pagamento accetta solo carta; il servizio esterno supporta il pagamento differito, non attivato (verificato).
  - I codici sconto si applicano dopo l'IVA: comportamento non documentato (verificato). Dal ticket 103 cambia per gli importi fissi.
  - Il Manuale v1.3 dice che il carrello si svuota dopo 30 giorni; nel codice sono 90 (verificato). Differenza da chiarire con il cliente.
  - La Guida alla pubblicazione v1.0 non dice nulla sulle migrazioni del database (verificato).
  - Esito: intervento più esteso di come appare (tocca quattro parti che usano `prezzi`).
- **Interfaccia.** Cambia: nuove schermate per i rivenditori. Servono wireframe e mockup.
- **Scadenza del cliente.** Fiera lunedì 22 febbraio 2027. Fattibile solo per una prima parte del lavoro: vedi `02-stima`.
- **Parti toccate e documenti collegati.** `lumera-api` (modulo `prezzi`, utenti, ordini), `lumera-sito` (accesso, scheda prodotto, carrello), `lumera-gestionale` (anagrafica, listini). Lavorazioni 96, 100, 101, 103; Manuale v1.3, Documento tecnico v1.2, Guida v1.0.
- **Dubbi.** Formato dei listini (prezzo per prodotto o percentuale sul listino base). Pulizia dell'anagrafica. Bonifico in questo progetto o nel successivo.
- **Non verificato.** I file dei listini non sono stati visti. Il servizio di pagamento differito non è stato provato.
- **Domande per il cliente.** Nella Proposta (D1-D8).
- **Prossimo passo.** Stima precisa e Proposta di soluzione.

## 1. Parte del sistema coinvolta

Prezzi, accesso degli utenti, catalogo, carrello, ordini, anagrafica dei rivenditori nel gestionale.

## 2. Come funziona oggi, per tipo di utente

- **Cliente finale.** Un solo listino, uguale per tutti; carrello e pagamento con carta.
- **Rivenditore.** Oggi non esiste: ordina per telefono o per email (riferito da Diego).
- **Diego e Marta (gestionale).** Anagrafica rivenditori a mano; ordini nel gestionale; codici sconto.

## 3. Cosa verrà toccato

`prezzi` (listino per rivenditore), accesso (ruolo rivenditore), catalogo e scheda prodotto (prezzo del rivenditore), carrello e pagamento (prezzo del rivenditore), gestionale (collegamento anagrafica-utente, gestione dei listini), ordini (caricamento di un elenco). Il modulo `prezzi` ha il `CLAUDE.md` di `lumera-api` che chiede un test per ogni modifica a un modulo di calcolo.

## 4. Comportamenti non documentati

I codici sconto si applicano dopo l'IVA (in corso di cambiamento con il ticket 103). Il limite del carrello è 90 giorni invece di 30.

## 5. Vincoli

- Il pagamento è solo con carta: il bonifico richiede di attivare il pagamento differito. Fuori dalla fiera.
- Nessun test su carrello e `prezzi`: l'intervento è più costoso e richiede test nuovi.

## 6. Fattibilità, per punto della richiesta

- **Accesso con credenziali proprie.** Fattibile con un compromesso: un ruolo nuovo nel sito, collegato all'anagrafica.
- **Prezzi propri.** Fattibile con un compromesso: richiede listini per rivenditore nel modulo `prezzi`; dipende dal formato dei file (incognita).
- **Ordini grandi fuori dal carrello normale.** Fattibile: caricamento di un elenco di codici e quantità.
- **Bonifico.** Fattibile, ma non entro la fiera.
- **Download dei listini in Excel.** Fattibile, richiesta di Diego non confermata da Franco.
- **Fiera del 22 febbraio.** Fattibile con poco margine per una prima parte; non per la soluzione intera.

## 7. Incognite

- **Formato dei listini.** Come si scopre: ricevere due file di esempio. Chi: Diego.
- **Doppioni nell'anagrafica.** Cinque righe doppie note; altri possibili. Chi: Diego con un campione.
- **Pagamento differito.** Se il servizio lo attiva senza contratto nuovo. Chi: Franco con il fornitore.

## 8. Lavori e documenti sullo stesso sistema

Vedi parte A. Differenze tra documenti e codice: carrello 30 contro 90 giorni (domanda al cliente); codici sconto non descritti nel Manuale (domanda al cliente).

## 9. Fonti consultate

Richiesta del 5 ottobre; incontro del 7 ottobre; Manuale v1.3, Documento tecnico v1.2, Guida v1.0; lavorazioni 96, 100, 101, 103; base dei sistemi esistenti.
