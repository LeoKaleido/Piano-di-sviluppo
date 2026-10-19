# Analisi, progetto 1 (107), prova 5

Data: 2026-10-12. Fonti: scenario, diario, i file di `esecuzione-5/107/`, la prova 4 e la prova 3 del ticket, Regole comuni, Piano di progetto e le skill `kickoff`, `proposta-di-soluzione`, `manuale-del-prodotto`, `documento-tecnico`, `piano-delle-milestone`, `allineamento-documenti`.

## 1. Sintesi

La prova 5 chiude la questione dei numeri di versione (T2-3): senza versioni prodotte dal ticket, la catena di Manuale e Documento tecnico è unica e il progetto continua da v1.3 e v1.2 della base. Regge anche la regola delle durate e il recepimento della Scheda del ticket. Tutti i controlli dello script superati. Restano tre osservazioni piccole.

## 2. Controlli dello scenario

Emersi: Proposta con durata "da 2 a 3 mesi", finestra di rilascio in mesi, ipotesi dichiarate; catena Manuale v1.0-v1.5 e Documento tecnico v1.0-v1.4; Scheda 103 recepita con F3.4 e F3.5; nessuna durata in settimane nei documenti al cliente; nessun PDF fuori dalla radice; nessun "invariato".

## 3. Documenti

Radice: 01 Proposta di soluzione, 02 Manuale v1.5, 03 Documento tecnico v1.4, 04 Piano dei SAL v2. `claude`: 17 sorgenti. `source`: 29 file. `develop`: Nota di sprint e Milestone report. `log`: storico (31 voci), decisioni, Report di progetto.

## 4. Osservazioni

**Media**

- **Q5-1, Passaggio.** Dove: `kickoff`, `manuale-del-prodotto`, `documento-tecnico`. La Scheda del ticket va letta alla stesura del Manuale e del Documento tecnico, non al kickoff, perché il ticket può chiudersi e avere un seguito in garanzia dopo il kickoff. Correzione proposta: nelle skill di Manuale e Documento tecnico la fonte "Schede dei ticket chiusi dopo l'ultima versione" si legge all'inizio della stesura, con l'ultima versione di ogni Scheda; nel kickoff la lettura serve solo per le sovrapposizioni.

**Bassa**

- **Q5-2, Base.** Dati interni della base in settimane (96, 58, comparatore). Nessuna correzione: non sono detti al cliente.
- **Q5-3, Contraddizione.** Unità diverse per la stessa durata: ore e giorni lavorativi internamente, giorni di calendario e mesi al cliente. Voluto; la conversione è nelle Regole comuni (Durate verso il cliente).
- **Q5-4, Esecuzione.** Contenuto riusato.

## 5. Peso

Come la prova 4, con 17 sorgenti in `claude` (due in meno: niente versioni del ticket).

## 6. Confronto con la prova precedente

Q4-4 (versioni del ticket nella catena) e Q4-8 (collisione dei numeri): risolte. Q4-6 (unità del Piano dei SAL): risolta con la regola delle durate. Q4-5 (stima come intervallo nel kickoff): ancora aperta. Q3-3 (stato di una variazione): ancora aperta.

## 7. Decisioni per Leonardo

- **Q5-1: momento della lettura delle Schede dei ticket.** Raccomandazione: alla stesura del Manuale e del Documento tecnico, con l'ultima versione.
- **Q4-5: stima precisa come intervallo nel kickoff.** Raccomandazione: sì.
