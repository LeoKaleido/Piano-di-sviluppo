# Analisi, prodotto 1 (110), prova 2

Data: 2026-10-12. Fonti: scenario, diario, i file di `esecuzione-2/110/`, la prova 1 del prodotto, le prove 5 e 6 del progetto, Regole comuni, Piano di prodotto, Piano di progetto, Ciclo di sviluppo e le skill `kickoff`, `proposta-di-soluzione`, `manuale-del-prodotto`, `documento-tecnico`, `piano-delle-milestone`, `piano-di-lancio`, `collaudo-e-rilascio`, `storico-lavorazione`, `report-di-progetto`.

## 1. Sintesi

La struttura nuova regge anche per il prodotto: radice con i cinque documenti veri, catena completa delle versioni, Proposta confermata senza versione, durate al cliente in giorni e mesi, Piano di lancio senza passi tecnici, capitolo Pubblicazione solo alla chiusura, tutto il resto nello storico. Tutti i controlli dello script superati dopo due correzioni allo script. Restano osservazioni piccole.

## 2. Controlli dello scenario

Emersi: nessuna urgenza al prodotto, stima a occhio interna e tempo del kickoff, verifica preliminare senza codice, Franco referente, richieste da collocare nelle release, Torino come domanda aperta, Stato di partenza con le decisioni in testa, Proposta con release, intervallo di durata e finestra di rilascio in mesi, divisione in release confermata, conferma a voce con riepilogo, modifica (non variazione) prima della conferma del Manuale, Manuale inviato senza risposta e sollecito, Piano dei SAL generato dal capitolo, stima cresciuta (più 10 giorni lavorativi, spiegata in giorni), riprogrammazione con leve senza scelta, silenzio non accettazione, variazione V1 media e V2 grande rifiutata, collaudo con accettazione esplicita, Piano di lancio con informativa in ritardo, gruppo ristretto dopo il problema delle email, chiusura con Report di progetto, garanzia con bug e richiesta fuori garanzia. Cosa non deve succedere: nulla dell'elenco è successo.

## 3. Documenti

- Radice: 01 Proposta di soluzione, 02 Manuale v1.2, 03 Documento tecnico v1.3, 04 Piano dei SAL v2, 05 Piano di lancio v2.
- `claude`: 16 sorgenti. `design`: 5. `develop`: 2. `source`: 38. `log`: storico (41 voci), decisioni (14), Report di progetto.

## 4. Osservazioni

**Media**

- **P2-1, Buco.** Dove: Regole comuni (Bozza e versione), `manuale-del-prodotto`. Non è detto come si numera il Manuale di un prodotto nuovo prima della conferma. Correzione proposta: una riga nelle Regole comuni e nella skill: prima della conferma il Manuale di un prodotto nuovo ha v0.N, la conferma lo porta a v1.0; nei progetti e nei prodotti con un sistema esistente continua la catena.

**Bassa**

- **P2-2, Peso.** Lo storico del prodotto ha 65 righe, con lo Stato di partenza di dieci sotto-voci. Nessuna correzione: è una lettura per chi riprende il lavoro.
- **P2-3, Lacuna.** `design` non è controllato dallo script e i mockup in PDF non si producono nel test. Correzione proposta: nessuna finché Claude Design non è collegato alla build.
- **P2-4, Esecuzione.** Contenuto riusato dalla prova 1.

## 5. Peso

69 file per un prodotto di circa 6 mesi di sviluppo. Il costo di scrittura è nei documenti (Proposta, Manuale, Documento tecnico, Piano dei SAL, Piano di lancio) e nei messaggi, brevi. Rispetto alla prova 1 scompaiono la cartella `sistema`, le cartelle per fase, il registro delle variazioni, la scheda di rilascio e il promemoria interno.

## 6. Confronto con la prova precedente

Risolte: catena delle versioni incompleta, Proposta con numero di versione e "invariato", Piano di lancio con i passi tecnici, Guida alla pubblicazione a parte, Milestone report con messaggio al cliente, settimane nei documenti per il cliente, registro delle variazioni a parte. Nuova: P2-1.

## 7. Decisioni per Leonardo

- **P2-1: numerazione del Manuale di un prodotto nuovo.** Raccomandazione: v0.N fino alla conferma, poi v1.0, scritto nelle Regole comuni e nella skill del Manuale.
