# Analisi, progetto 1 (107, area riservata per i rivenditori), prova 4

Data: 2026-10-12. Fonti: `base-comune.md`, `scenario.md`, `diario.md`, i file di `esecuzione-4/107/`, la prova 3, Regole comuni, Piano di progetto, Ciclo di sviluppo e le skill `kickoff`, `proposta-di-soluzione`, `manuale-del-prodotto`, `documento-tecnico`, `piano-delle-milestone`, `milestone-report`, `prova-su-staging`, `storico-lavorazione`, `collaudo-e-rilascio`, `report-di-progetto`, più `build/crea-pdf.ps1` e lo script di verifica.

## 1. Sintesi

La prova 4 non ripete i contenuti: verifica che la struttura prodotta con piani e skill di oggi, dopo l'audit e le decisioni di Leonardo, sia quella voluta e che regga a un controllo sistematico. Regge. La radice ha i quattro PDF con numeri senza buchi, la Proposta confermata si chiama `proposta-di-soluzione`, la catena delle versioni di Manuale (v1.0-v1.6) e Documento tecnico (v1.0-v1.5) è completa in `claude`, ogni versione è completa e senza "invariato", i documenti per il cliente non contengono termini interni, lo storico ha etichette e ordine corretti, `develop` non ha PDF.

Il controllo ha trovato tre difetti piccoli, tutti corretti nella prova: un rimando nell'intestazione del Manuale v1.3 della base (Q4-1), l'ordine delle voci dello storico (Q4-2), un ruolo interno in un messaggio al cliente (Q4-3). Restano tre osservazioni sul piano, nessuna alta.

## 2. Controlli dello scenario

- **Proposta con durata, finestra di rilascio in mesi, affidabilità e ipotesi.** Emerso (prova 3, contenuto invariato).
- **Messaggio per la prova e Milestone report interno senza PDF.** Emerso.
- **Piano dei SAL estratto dal Piano delle milestone, in tabelle, con la colonna "cosa verifica il cliente".** Emerso nel contenuto; resa grafica del PDF non verificata (nessun lettore di PDF nell'ambiente).
- **Variazioni, riprogrammazione e garanzia come voci di `storico.md`.** Emerso, con le correzioni Q4-2.
- **Capitolo Pubblicazione dentro il Documento tecnico, aggiornato alla chiusura; particolarità nel piano di rilascio.** Emerso.
- **Cosa non deve succedere.** Non successo: nessun registro delle variazioni, nessuna Guida a parte, nessun Milestone report al cliente, nessun PDF fuori dalla radice, nessuna tabella fuori dal Piano dei SAL, nessun "invariato" o rimando, nessuna versione mancante (verificato con lo script), nessuna variazione accettata a voce.

## 3. Documenti

- Radice: 01 Proposta di soluzione, 02 Manuale v1.6, 03 Documento tecnico v1.5, 04 Piano dei SAL v2.
- `claude`: 19 sorgenti. Manuale v1.0-v1.6, Documento tecnico v1.0-v1.5, Proposta v0.1, v0.2, v0.3 e confermata, Piano dei SAL v1 e v2.
- `design`: il materiale per i mockup. `develop`: Nota di sprint 10 e Milestone report del SAL1, solo Markdown. `log`: storico, decisioni, Report di progetto. `source`: 29 file.
- In più rispetto allo scenario: nessuno. Mancanti: nessuno. Fuori posto: nessuno.

## 4. Osservazioni

**Media**

- **Q4-4, Passaggio.** Dove: Regole comuni (catena delle versioni) e prova del ticket. La regola "all'inizio si copiano in `claude` le versioni precedenti dalle cartelle delle altre lavorazioni" richiede che quelle versioni esistano nella struttura attuale. Il Manuale v1.4 e il Documento tecnico v1.3 del ticket 103 sono della prova 1 del ticket, con la Guida a parte e il "capitolo Milestone": sono stati ricostruiti. Correzione proposta: rifare la prova del ticket (in corso) e usare le sue versioni nel progetto.

- **Q4-8, Base.** Dove: scenari del ticket e del progetto. I numeri di versione di Manuale e Documento tecnico non seguono una catena unica tra i due test (vedi T2-3 nell'analisi del ticket, prova 2): la catena del progetto non contiene le versioni di garanzia del ticket (Manuale v1.5, Documento tecnico v1.4 del 6 novembre), e i suoi Manuale v1.5 e Documento tecnico v1.4 collidono con quelle. Correzione proposta: rinumerare il progetto (Manuale v1.6 e v1.7, Documento tecnico v1.5 e v1.6) e rifare la prova.

**Bassa**

- **Q4-5, Contraddizione.** Dove: `kickoff` (Stima) e `proposta-di-soluzione` (voce 10). Il kickoff chiede un valore, la Proposta un intervallo; nessuna skill dice chi ricava l'intervallo. Correzione proposta: nel kickoff la stima precisa è un intervallo con il valore più probabile, e la Proposta lo riporta.
- **Q4-6, Passaggio.** Dove: `piano-delle-milestone` (Piano dei SAL, durata stimata) e Proposta. Settimane nel Piano dei SAL, giorni lavorativi e mesi nella Proposta. Correzione proposta: il Piano dei SAL riporta la durata in giorni lavorativi e la finestra di rilascio in mesi, come la Proposta, e le settimane solo se servono a spiegare un calendario.
- **Q4-1, Base.** Corretta (intestazione del Manuale v1.3).
- **Q4-2, Esecuzione.** Corretta (ordine dello storico, formato di "Altro").
- **Q4-3, Esecuzione.** Corretta (ruolo interno nel messaggio).
- **Q4-7, Esecuzione.** Il contenuto viene dalla prova 3: le skill non sono rieseguite una per una. Limite dichiarato della prova.

## 5. Peso della procedura

- La cartella del progetto ha 19 sorgenti in `claude` e 29 file in `source`, ma la radice ha solo 4 PDF. Chi legge le persone apre 4 file, Claude legge il resto.
- La catena completa delle versioni pesa in numero di file, non in lettura: chi cerca la versione vigente la prende dal nome più alto.
- Il controllo sistematico (script) ha trovato tre difetti in pochi secondi: conviene tenerlo come passo standard di fine prova.

## 6. Confronto con la prova precedente

- Q3-1, Q3-2, Q3-5, Q3-6, Q3-7 (decisioni di Leonardo): applicate e verificate.
- Q3-3 (stato di una variazione dallo storico): ancora aperta, sempre bassa.
- Q3-12 (catena delle versioni incompleta): risolta e verificata con lo script; ma vedi Q4-4.
- Q3-9 e Q3-10 (rimandi e versioni mancanti): risolte e verificate con lo script.
- Regressioni: nessuna.

## 7. Decisioni per Leonardo

- **Q4-5: la stima precisa come intervallo nel kickoff.** Raccomandazione: sì, con il valore più probabile.
- **Q4-6: unità del Piano dei SAL.** Raccomandazione: giorni lavorativi e mesi, come la Proposta.
- **Script di verifica.** Tenerlo in `build/` e usarlo a fine prova. Raccomandazione: sì.
