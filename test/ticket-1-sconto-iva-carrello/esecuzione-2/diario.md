# Diario, ticket 1 (103), prova 2

PROVA SUPERATA il 2026-10-12: aveva fatto aggiornare al ticket il Manuale e il Documento tecnico del sistema. Leonardo ha chiarito che il ticket ha solo la Scheda di intervento (con il PDF), i messaggi in `source` e il log: i documenti del sistema li aggiorna il primo progetto sulla stessa parte. La prova è stata rifatta come `esecuzione-3`. Questo file resta come storia.

Data dell'esecuzione: 2026-10-12. Piani e skill nella versione del repository a questa data (struttura della lavorazione, messaggi in `source`, catena delle versioni, capitolo Pubblicazione nel Documento tecnico, Proposta e piano di rilascio che per un ticket non esistono). Le osservazioni hanno il codice T2-n e il tipo, riprese nell'analisi. Il contenuto della richiesta, della telefonata e della Scheda viene dalla prova 1: è stato rifatto ciò che la nuova struttura cambia.

## Cosa è stato rifatto e cosa no

- **Cartella del ticket.** Nessuna cartella per fase. `claude` (Scheda e sorgenti dei documenti), `source` (ciò che entra e che esce), `log` (storico e decisioni); radice con i PDF dei soli documenti del sistema aggiornati. Niente `design` né `develop`: un ticket non li ha.
- **Messaggi.** Tutti i messaggi inviati sono file in `source` con la data davanti: presa visione a Marta, domanda a Franco, riepilogo della telefonata, risposta di chiusura nel ticket, domanda di garanzia, risposta a Marta, risposta dopo la correzione. Nella prova 1 erano nello storico o in cartelle di fase.
- **Pubblicazione.** Nessuna Guida a parte e nessun piano di rilascio: l'incaricato segue il capitolo Pubblicazione del Documento tecnico v1.2. Il gestionale pubblicato per ultimo e senza regola scritta è una voce di storico e, dopo la chiusura, una riga del capitolo (Documento tecnico v1.3).
- **Catena delle versioni.** All'inizio, a ticket in aggiornamento dei documenti, copiate in `claude` le versioni dalla base (Manuale v1.0-v1.3, Documento tecnico v1.0-v1.2); il ticket produce Manuale v1.4 e Documento tecnico v1.3 il 21 ottobre.
- **Garanzia.** La decisione di Franco del 29 ottobre cambia un comportamento: dopo la correzione i documenti si aggiornano (Manuale v1.5 con F3.5, Documento tecnico v1.4). Nella prova 1 non era stato fatto.
- **PDF.** Generati con `build/crea-pdf.ps1`: nella radice solo il Manuale v1.5 (01) e il Documento tecnico v1.4 (02); la Scheda di intervento non ha PDF.

## Osservazioni

- T2-1, Buco: la Scheda di intervento ha tre stati nel tempo (bozza del 5 ottobre, completa del 13, corretta del 15) e la regola dice che le versioni precedenti restano tutte in `claude`. La skill `scheda-di-intervento` non definisce né numeri di versione né nomi. Usati `scheda-di-intervento-bozza-1`, `-v1` e `-v2`, per analogia con la Proposta.
- T2-2, Peso: un ticket da 13 ore produce 30 file: 14 in `claude`, 12 in `source`, 2 in `log`, 2 PDF. Di questi, 7 sono le versioni copiate dalla base (Manuale v1.0-v1.3, Documento tecnico v1.0-v1.2) senza nulla di nuovo, e 7 sono messaggi. La regola vuole la catena completa in ogni lavorazione che aggiorna un documento del sistema, quindi il numero cresce con ogni ticket e ogni progetto.
- T2-3, Base: i numeri di versione non sono coerenti tra i test. Il ticket porta il Manuale a v1.5 e il Documento tecnico a v1.4 il 6 novembre, ma il progetto 107 scrive il suo Manuale come v1.5 il 20 novembre e il suo Documento tecnico come v1.4 il 4 dicembre, partendo da v1.4 e v1.3. Con la catena unica del sistema, il progetto dovrebbe essere v1.6 e v1.7 per il Manuale e v1.5 e v1.6 per il Documento tecnico, e partire dal ticket di garanzia. La prova 4 del progetto non contiene le versioni del ticket di garanzia.
- T2-4, Passaggio: la correzione in garanzia (F3.5) richiede il Manuale v1.5, ma il Manuale contiene anche le story del comparatore (lavorazione 100, progetto aperto). Come nella prova 1 (T1-14), la regola dice sia di non modificare in silenzio un documento approvato per un lavoro aperto sia di aggiornare il Manuale del sistema. Risolto come allora: si cambia solo F3.5, le story di 100 restano com'erano, project manager 1 è informato.
- T2-5, Esecuzione: il contenuto delle fasi viene dalla prova 1 e non è stato rieseguito skill per skill; la prova verifica la struttura. Dove una regola non è esercitata (per esempio la catena copiata all'inizio dalla cartella di un'altra lavorazione) si è copiato dalla base.

## Controlli finali

Script di verifica sulla cartella: radice con due PDF numerati senza buchi, catena completa di Manuale (v1.0-v1.5) e Documento tecnico (v1.0-v1.4), nessun "invariato" o rimando, nessuna tabella, nessun carattere vietato, storico in ordine con etichette corrette, nomi in `source` con la data, messaggi citati presenti. Nessun documento per il cliente con termini interni (il messaggio a Franco contiene importi in euro perché sono l'oggetto della domanda).
