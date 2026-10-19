# Analisi, ticket 1 (103, sconto e IVA nel carrello), prova 2

PROVA SUPERATA il 2026-10-12: aveva fatto aggiornare al ticket il Manuale e il Documento tecnico del sistema. Leonardo ha chiarito che il ticket ha solo la Scheda di intervento (con il PDF), i messaggi in `source` e il log: i documenti del sistema li aggiorna il primo progetto sulla stessa parte. La prova è stata rifatta come `esecuzione-3`. Questo file resta come storia.

Data: 2026-10-12. Fonti: `base-comune.md`, `scenario.md`, `diario.md`, i file di `esecuzione-2/103/`, la prova 1, Regole comuni, Piano dei ticket, Ciclo di sviluppo e le skill `kickoff-ticket`, `scheda-di-intervento`, `interpretazione-conversazioni`, `registro-decisioni`, `storico-lavorazione`, `revisione-codice`, `allineamento-documenti`, `manuale-del-prodotto`, `documento-tecnico`.

## 1. Sintesi

La prova 2 verifica la struttura nuova su un ticket normale completo, dall'apertura alla garanzia. Regge nei punti voluti: nessun documento per la pubblicazione o l'aggiornamento, nessuna scheda tecnica né piano di rilascio, messaggi in `source`, storico con etichette e ordine corretti, radice con i soli due PDF dei documenti del sistema, catena completa delle versioni. Il ticket non aspetta i documenti per chiudersi (chiuso il 20 ottobre, documenti il 21).

Il peso è il punto debole già previsto: 30 file per 13 ore di lavoro (T2-2), dovuti alle regole volute da Leonardo (tutti i messaggi, catena completa). Il difetto più serio è di coerenza tra i test: i numeri di versione del ticket e del progetto non seguono una catena unica (T2-3).

## 2. Controlli dello scenario

- **Urgenza normale dai fatti; ticket 101 e comparatore trovati; ambiguità del Manuale individuata; domanda puntuale a Franco con esempio numerico; ticket sospeso informalmente; esito "da rimandare" poi "da fare".** Emerso.
- **Scheda con decisioni in testa, nessuna Scheda di valutazione.** Emerso, con le versioni della Scheda (T2-1).
- **Task in ClickUp, sprint, capacità, revisione da una seconda persona, test sul modulo `prezzi`, correzione del 15 ottobre.** Emerso (diario della prova 1, contenuto invariato).
- **Risposta nel ticket breve, senza file, moduli, ore né causa.** Emerso (`source/2026-10-20-risposta-ticket.md`).
- **Pubblicazione con il capitolo Pubblicazione, gestionale dichiarato non coperto.** Emerso.
- **Chiusura alla pubblicazione, garanzia di 15 giorni lavorativi (10 novembre).** Emerso.
- **Aggiornamento dei documenti dopo la chiusura, a partire dai codici della Scheda (101 e 100).** Emerso.
- **Segnalazione del 28 ottobre: ambiguità, domanda a Franco.** Emerso, con in più l'aggiornamento dei documenti dopo la correzione (nuovo rispetto alla prova 1).
- **Cosa non deve succedere.** Non successo: decisione presa da soli, Scheda di valutazione, risposta con termini tecnici, ticket in attesa dei documenti, scheda tecnica o piano di rilascio, versioni con "invariato", catena incompleta.

## 3. Documenti

- Radice: 01 Manuale v1.5, 02 Documento tecnico v1.4 (PDF).
- `claude`: Manuale v1.0-v1.5, Documento tecnico v1.0-v1.4, Scheda di intervento (bozza 1, v1, v2).
- `source`: 12 file (richiesta, telefonata, sintesi, risposte di Franco, segnalazione e 7 messaggi inviati).
- `log`: `storico.md` (14 voci), `decisioni.md` (6 voci).
- In più rispetto allo scenario: nessuno. Mancanti: nessuno.

## 4. Osservazioni

**Alta**

- **T2-3, Base.** Dove: scenari del ticket e del progetto, Regole comuni (catena delle versioni). I numeri di versione di Manuale e Documento tecnico non seguono una catena unica: il ticket porta il Manuale a v1.5 e il Documento tecnico a v1.4 il 6 novembre, il progetto scrive il suo Manuale v1.5 il 20 novembre e il Documento tecnico v1.4 il 4 dicembre, a partire da v1.4 e v1.3. Una delle due serie è sbagliata. Conseguenza: la catena copiata nel progetto 107 (prova 4) non contiene le versioni di garanzia del ticket. Correzione proposta: nel progetto 107 il Manuale diventa v1.6 e v1.7 e il Documento tecnico v1.5 e v1.6, partendo dalle versioni di garanzia del ticket, con F3.5 già presente; si aggiornano scenario, base e documenti della prova 4 (o si rifà come prova 5).

**Media**

- **T2-1, Buco.** Dove: `scheda-di-intervento`. La Scheda ha bozza, versione completa e correzione, ma la skill non definisce versioni e nomi. Correzione proposta: `scheda-di-intervento-bozza-<N>` per le bozze, `scheda-di-intervento-v<N>` per le complete (v1 alla prima completa, v2 alla correzione), tutte in `claude`.
- **T2-4, Contraddizione.** Dove: `allineamento-documenti` e `manuale-del-prodotto` per le story di un progetto aperto dentro il Manuale del sistema (già T1-14). Aperta. Correzione proposta: dire che un ticket modifica le story del sistema, non quelle del progetto aperto, e che se le tocca informa il responsabile del progetto.

**Bassa**

- **T2-2, Peso.** 30 file per 13 ore; 7 sono copie della base e 7 sono messaggi. Conseguenza delle regole decise. Correzione proposta: nessuna finché le regole restano; se pesa, valutare una sola copia della catena in un posto condiviso invece di una per lavorazione (cambia la regola "tutto in `claude`").
- **T2-5, Esecuzione.** Contenuto riusato dalla prova 1; la catena copiata dalla base, non da un'altra lavorazione.

## 5. Peso della procedura

- Per leggere come sono andate le cose basta `storico.md`, che ha 14 voci: i documenti non hanno ritardato la chiusura.
- La parte più costosa è l'aggiornamento dei documenti: due documenti nuovi a ottobre e due a novembre, ognuno completo, con i loro PDF. Per un ticket è proporzionato a ciò che i documenti restano veri.
- L'aggiornamento in garanzia (T2: F3.5) aggiunge copertura rispetto alla prova 1 ma anche due versioni nuove.

## 6. Confronto con la prova precedente

- T1-1, T1-2, T1-3, T1-4 (esiti del confronto e delle domande): non ritestati, il contenuto è lo stesso.
- T1-5 (ticket sospeso senza posto in ClickUp): ancora aperta.
- T1-6 (decisioni in testa alla Scheda con la bozza): risolta, le decisioni stanno nella bozza e nella v1.
- T1-12 (gestionale non coperto dalla Guida): risolta, il capitolo Pubblicazione dichiara il gap e il Documento tecnico v1.3 lo registra.
- T1-14 (documento del sistema con story di un progetto aperto): ancora aperta (T2-4).
- T1-15 (peso dell'aggiornamento dopo la chiusura): ridotta, tre skill in meno (Guida fusa nel Documento tecnico) ma comunque quattro versioni nuove in un mese.
- Regressioni: nessuna.

## 7. Decisioni per Leonardo

- **T2-3: catena unica delle versioni.** Opzione A: rinumerare il progetto (Manuale v1.6 e v1.7, Documento tecnico v1.5 e v1.6) e rifare la prova del progetto. Opzione B: togliere dal ticket l'aggiornamento in garanzia, tenendo la numerazione attuale ma lasciando i documenti senza F3.5. Raccomandazione: A.
- **T2-1: nomi e versioni della Scheda.** Raccomandazione: sì ai nomi proposti.
- **T2-4: ticket e story di un progetto aperto.** Raccomandazione: la regola proposta.
- **T2-2: copia della catena in ogni lavorazione.** Tenere o spostare in un posto condiviso. Raccomandazione: tenere, come deciso, e rivedere se i file diventano troppi.
