# Documento tecnico, Lumera Arredi, applicazione per gli showroom

Sistema: applicazione per tablet per i consulenti degli showroom. Data: 2027-02-15. Versione 1.1. Si riferisce al Manuale v1.0. Interno.

## 1. Panoramica

Tre parti: l'applicazione per tablet (nuovo repository `lumera-showroom`), il servizio di API esistente (`lumera-api`, da estendere) e il gestionale (`lumera-gestionale`, che riceve gli ordini). L'applicazione legge catalogo, prezzi e disponibilità dalle API e scrive gli ordini sulle API degli ordini. Gli appuntamenti, i clienti degli showroom e le proposte sono dati nuovi, conservati dalle API.

## 2. Tecnologie

- **React e TypeScript.** Stessa famiglia del sito: il team le conosce.
- **Applicazione web installabile sul tablet con archiviazione locale.** Permette di lavorare senza rete (F6.1) senza un'applicazione nativa per ogni sistema operativo. Scelta del team lead, validata il 20 gennaio. Alternativa scartata: applicazione nativa, più costosa e legata a un sistema operativo non ancora scelto (domanda D2).
- **Servizio esterno di invio email già in uso dal sito.** Per F4.4.

## 3. Struttura del codice

`lumera-showroom`: cartelle `schermate`, `dati-locali`, `sincronizzazione`, `api`. Convenzioni del `CLAUDE.md` di `lumera-api`: nomi dei file in minuscolo con i trattini, un test per ogni modulo di calcolo.

## 4. Dati

Entità, con le story che le usano.

- **Showroom.** Milano, Torino, Bologna, Verona. F1.2.
- **Consulente.** Utenza propria dell'applicazione, con ruolo consulente o responsabile showroom; appartiene a uno showroom. F1.1, F1.2, F2.4.
- **Cliente.** Nome, telefono, email facoltativa, consenso e data del consenso, showroom. Telefono unico per showroom. F3.1, F3.2, F3.3.
- **Appuntamento.** Cliente, consulente, giorno, ora, durata (30, 60 o 90 minuti), motivo, stato. Una fascia non può avere due appuntamenti dello stesso consulente. F2.1, F2.2, F2.3, F2.4.
- **Proposta.** Cliente, consulente, stato (bozza, inviata, trasformata in ordine), sconto in percentuale (da 0 a 10), totale calcolato dal modulo `prezzi`. F4.
- **Riga di proposta.** Prodotto, quantità, prezzo al momento. F4.1.
- **Ordine.** Proposta di origine, righe, sconto, totale, stato; una proposta ha al massimo un ordine. F5.1, F5.2.
- **Coda locale.** Azioni fatte senza connessione, sul tablet. F6.1.

Ogni dato porta lo showroom (F1.2). Le regole di validità stanno nel codice delle API e non si ripetono nei dati del tablet.

## 5. Realizzazione delle funzionalità

- **F1 Accesso** (`lumera-showroom`, `lumera-api`). Accesso con utenze proprie dell'applicazione, ruoli consulente e responsabile showroom, in `lumera-api`. Sessione conservata sul tablet per l'accesso senza rete, valida sette giorni. Filtro per showroom applicato dalle API a ogni richiesta (F1.2). Rami di errore: credenziali errate con messaggio unico, blocco dopo cinque tentativi per quindici minuti, accesso senza rete oltre i sette giorni (F1.1); dato di un altro showroom, risposta "non disponibile" (F1.2).
- **F2 Agenda** (`lumera-showroom`, `lumera-api`). Elenco per showroom e giorno; blocco delle fasce occupate lato API; durata 30, 60 o 90 minuti (modifica v0.2 del Manuale); vista per responsabile con filtro sui consulenti dello showroom. Rami di errore: nessun appuntamento, errore di caricamento con ultimi dati salvati, senza rete (F2.1); fascia occupata, cliente non registrato (F2.2); nuova fascia occupata, appuntamento passato (F2.3); ruolo non responsabile (F2.4).
- **F3 Clienti** (`lumera-showroom`, `lumera-api`). Ricerca per nome o telefono, registrazione con consenso e data del consenso. Rami di errore: nessun risultato (F3.1); consenso mancante, telefono già presente, campi mancanti (F3.2); nessuna proposta (F3.3).
- **F4 Proposte** (`lumera-showroom`, `lumera-api`). Righe dal catalogo, totale calcolato dal modulo `prezzi`; sconto oltre il 10% rifiutato lato API; sconto negativo rifiutato; invio dal servizio email, con coda se senza rete; duplicazione che copia righe e sconto in una nuova bozza. Rami di errore: prodotto esaurito, quantità zero, proposta vuota (F4.1); sconto oltre il 10% o negativo (F4.2); proposta vuota o aliquote diverse (F4.3); cliente senza email, senza rete, invio fallito (F4.4); prodotto non più nel catalogo (F4.5).
- **F5 Ordini** (`lumera-showroom`, `lumera-api`, `lumera-gestionale`). L'ordine si crea con le API degli ordini, estese per accettare una riga con sconto del consulente (vedi decisioni). Un solo ordine per proposta; ordine in coda se senza rete. Rami di errore: proposta già trasformata, senza rete (F5.1); ordine in coda, errore di caricamento (F5.2).
- **F6 Uso senza connessione** (`lumera-showroom`). Coda locale delle azioni e sincronizzazione; regola "vale la più recente" con avviso. Rami di errore: modifiche contrastanti dello stesso appuntamento, sincronizzazione fallita con nuovo tentativo (F6.1).

## 6. Integrazioni

- API di catalogo, `prezzi`, `disponibilita`: lettura. Il modulo `disponibilita` è in modifica nel ramo del comparatore (lavorazione 100): l'applicazione dipende dalla versione rilasciata.
- API degli ordini: scrittura, da estendere (spike I14).
- Servizio email: se non risponde, l'invio resta in coda (F4.4).
- Catalogo e prezzi (modulo `prezzi`): dal 20 ottobre 2026 i codici sconto di importo fisso si tolgono prima dell'IVA (ticket 103, Scheda di intervento v2 e voci di Rilascio e Garanzia in History and decision, riferite al Manuale v1.3 e al Documento tecnico v1.2 del sito). L'applicazione non usa codici sconto: legge i prezzi dal modulo e applica lo sconto del consulente sulle righe.

## 7. Infrastruttura e ambienti

Staging e produzione propri dell'applicazione, separati da quelli del sito. Il capitolo sulla pubblicazione nasce con il lancio e si scrive alla chiusura.

## 8. Sicurezza e dati personali

Dati personali dei clienti degli showroom: consenso e informativa (materiale del cliente). Accesso solo con credenziali. Dati salvati sul tablet cifrati. Copie di sicurezza: da definire nella Guida.

## 9. Decisioni tecniche

- 2027-01-20, applicazione web installabile al posto di un'applicazione nativa. Motivo: sistema operativo non scelto, uso senza rete possibile.
- 2027-01-20, utenze proprie dell'applicazione e non ruoli del gestionale. Motivo: il gestionale ha ruoli multipli ma non pensati per i consulenti; evita di toccare il gestionale. Alternativa scartata: usare gli utenti del gestionale.
- 2027-02-12, API degli ordini estese per accettare lo sconto del consulente, dopo la spike I14 (24 ore in più in M1). Alternativa scartata: un ordine a prezzo pieno corretto a mano nel gestionale. Motivo: il totale dell'ordine deve coincidere con quello della proposta (F5.1).

## 10. Rischi e debito tecnico

- API degli ordini e sconto del consulente (spike I14, M1).
- Sincronizzazione senza rete (M5, ma si progetta in M1).
- Tablet non scelto: le dimensioni delle schermate possono cambiare.

## 11. Milestone

### Parametri

- **Data di avvio dello sviluppo:** lunedì 1 febbraio 2027 (sprint 12).
- **Squadra e ore a settimana per il prodotto:** sviluppatore 1, 30; sviluppatore 2, 30; sviluppatore 3, 15; sviluppatore 4, 30. Totale 105 ore a settimana, 210 a sprint, 168 a sprint al netto del buffer di sprint del 20%. Le ore del product lead, del team lead e della grafica non sono contate.
- **Buffer di milestone:** 20% delle ore stimate.
- **Durata di ogni milestone:** da due a tre sprint.

### Calendario di progetto

- Lunedì 29 marzo 2027 (Pasquetta), sprint 16: meno un giorno per ogni persona (21 ore lorde, 16,8 al netto del buffer di sprint).
- Mercoledì 2 giugno 2027, sprint 20: come sopra.
- 25 aprile (domenica) e 1 maggio (sabato): nessun effetto.
- Chiusura aziendale dal 9 al 20 agosto 2027: dopo lo sviluppo.
- Ferie individuali del 2027: non note, da chiedere a ogni inizio milestone.
- Chiusure del cliente nel periodo: nessuna nota.

### Quadro delle milestone

- **M1 (SAL1), Fondamenta.** Obiettivo dimostrabile: un consulente accede dal tablet e vede l'agenda del giorno con dati veri. Story F1.1, F1.2, F2.1. Ore stimate 304 (280 più 24 delle issue I20 e I21 dopo la spike I14), buffer 56, sprint 12 e 13, capacità 336 ore. Prova venerdì 26 febbraio 2027.
- **M2 (SAL2), Agenda e clienti.** Obiettivo: gestire appuntamenti e clienti. Story F2.2, F2.3, F2.4, F3.1, F3.2, F3.3. Ore 406, buffer 81,2, sprint 14, 15, 16, capacità 487,2 ore (con Pasquetta). Prova venerdì 9 aprile 2027.
- **M3 (SAL3), Proposta.** Obiettivo: preparare e inviare una proposta. Story F4.1 a F4.5. Ore 420, buffer 84, sprint 17, 18, 19, capacità 504 ore. Prova venerdì 21 maggio 2027.
- **M4 (SAL4), Ordine.** Obiettivo: la proposta confermata diventa ordine nel gestionale. Story F5.1, F5.2. Ore 406, buffer 81,2, sprint 20, 21, 22, capacità 487,2 ore (con il 2 giugno). Prova venerdì 2 luglio 2027.
- **M5 (SAL5), Uso senza connessione.** Obiettivo: tutto funziona anche senza rete. Story F6.1, con rifiniture e preparazione del collaudo. Ore 280, buffer 56, sprint 23 e 24, capacità 336 ore. Prova venerdì 30 luglio 2027.
- **Totale.** Ore stimate 1.816 (1.792 più 24 della spike), buffer 358,4, ore con buffer iniziali 2.150,4. Capacità totale 2.150,4 ore su 13 sprint.

### Materiali del cliente

- Utenze di prova per i consulenti: per M1, entro il 22 febbraio 2027.
- Campione di 200 clienti puliti e testo del consenso: per M2, entro il 12 marzo 2027.
- Tablet, un modello: per la prova di M2, entro il 15 marzo 2027.
- Indirizzo di posta dedicato per l'invio delle proposte: per M3, entro il 9 aprile 2027.
- Informativa sulla privacy completa: per il lancio, entro il 27 agosto 2027.
- Foglio dei clienti pulito dai doppioni: per il lancio, entro il 31 agosto 2027.

### Rischi e incognite

- API degli ordini: spike I14 in M1; contenuto con l'estensione delle API dentro la milestone.
- Sincronizzazione senza rete: progettata in M1, completata in M5.
- Torino e Bologna non sentiti: assunzione della Proposta; eventuali differenze sono richieste nuove.
- Tablet non scelto: le schermate si controllano sul modello scelto in M2.

### Copertura

F1.1, F1.2, F2.1 in M1. F2.2, F2.3, F2.4, F3.1, F3.2, F3.3 in M2. F4.1 a F4.5 in M3. F5.1, F5.2 in M4. F6.1 in M5.

### Stima di durata

Sviluppo dal 1 febbraio al 30 luglio 2027: 130 giorni lavorativi lordi (128 con Pasquetta e il 2 giugno). La stima della Proposta era di 120 giorni lavorativi: la differenza è di 10 giorni lavorativi. Motivo: con le issue scritte, l'invio degli ordini e l'uso senza connessione risultano più grandi di come apparivano nella Proposta.

## 12. Modifiche rispetto alla versione precedente

- v1.1 (2027-02-15, riprogrammazione). Capitolo 9: API degli ordini estese per accettare lo sconto del consulente (spike I14). Capitolo 11: M1 sale a 304 ore (issue I20 e I21). Origine: spike I14.
- v1.0 (2027-01-29). Prima versione. Origine: Manuale v1.0.
