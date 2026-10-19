# Analisi, ticket 1 (103), prova 3

Data: 2026-10-12. Fonti: scenario, diario, i file di `esecuzione-3/103/`, le prove 1 e 2, Regole comuni, Piano dei ticket e le skill `kickoff-ticket`, `scheda-di-intervento`, `storico-lavorazione`, `registro-decisioni`, `interpretazione-conversazioni`, `revisione-codice`.

## 1. Sintesi

La prova 3 verifica il ticket dopo la correzione di Leonardo: documento unico la Scheda di intervento, nessun aggiornamento di Manuale e Documento tecnico. Regge. La cartella ha un PDF nella radice, 5 versioni della Scheda in `claude`, 12 file in `source`, storico e decisioni in `log`: 20 file per 13 ore di lavoro, contro i 30 della prova 2. Il ticket si chiude alla pubblicazione e non aspetta nessun documento.

Il difetto del piano è a valle: il progetto deve trovare e leggere le Schede dei ticket chiusi, e non c'è un modo previsto (T3-1).

## 2. Controlli dello scenario

Tutti i punti dell'analisi, della Scheda, dello sviluppo e del rilascio sono emersi come nella prova 1. Nuovi: la Scheda con "Cosa è stato fatto" e "Effetto sui documenti del sistema" (emerso), nessun Manuale o Documento tecnico (emerso), nuova versione della Scheda dopo la garanzia (emerso). Cosa non deve succedere: nessun aggiornamento di Manuale e Documento tecnico dal ticket, nessuna scheda tecnica o piano di rilascio.

## 3. Documenti

- Radice: `01-scheda-di-intervento-v4.pdf`.
- `claude`: Scheda bozza 1, v1, v2, v3, v4.
- `source`: 12 file. `log`: storico (15 voci) e decisioni (6).

## 4. Osservazioni

**Media**

- **T3-1, Buco.** Dove: `kickoff` e `allineamento-documenti` (lettura delle Schede dei ticket chiusi). Non c'è un indice dei ticket chiusi dopo l'ultima versione dei documenti. Correzione proposta: un file di indice nella knowledge base (codice, data di chiusura, parti toccate), aggiornato alla chiusura di ogni ticket, che il kickoff e la stesura dei documenti leggono.
- **T3-2, Passaggio.** Dove: `scheda-di-intervento` (Effetto sui documenti del sistema). I codici delle story e dei capitoli devono riferirsi alla versione vigente dei documenti alla data della chiusura. Correzione proposta: la voce indica la versione dei documenti a cui si riferisce (per esempio "Manuale v1.3, Documento tecnico v1.2").

**Bassa**

- **T3-3, Peso.** Cinque versioni della Scheda per un ticket piccolo. Correzione proposta: nessuna finché la regola delle versioni resta; in alternativa, la correzione a fine lavoro e il seguito in garanzia sono sezioni di una stessa versione.
- **T3-4, Esecuzione.** Contenuto riusato.

## 5. Peso della procedura

20 file, di cui 12 messaggi e 5 versioni della Scheda. Il costo di scrittura è la Scheda (un documento) e i messaggi brevi. Rispetto alla prova 2: niente copie della catena, niente due documenti del sistema con i loro PDF.

## 6. Confronto con la prova precedente

- T2-3 (numeri di versione non coerenti tra ticket e progetto): risolta. Il ticket non produce versioni dei documenti del sistema; il progetto parte dalla base (Manuale v1.4 e v1.5, Documento tecnico v1.3 e v1.4).
- T2-1 (versioni della Scheda): i nomi `-bozza-<N>` e `-v<N>` sono ora nella skill.
- T2-2 (peso, 30 file): ridotto a 20.
- T2-4 (ticket e story di un progetto aperto): non si pone più, il ticket non tocca il Manuale.
- Regressioni: T3-1 e T3-2 nuove.

## 7. Decisioni per Leonardo

- **T3-1: indice dei ticket chiusi.** Raccomandazione: sì, un file di indice per knowledge base.
- **T3-2: versione dei documenti nella Scheda.** Raccomandazione: sì.
- **T3-3: sezioni di una stessa versione invece di versioni.** Raccomandazione: no, si tiene la regola delle versioni.
