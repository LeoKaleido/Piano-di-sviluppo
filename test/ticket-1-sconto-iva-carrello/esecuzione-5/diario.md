# Diario, ticket 1 (103), prova 5

Data dell'esecuzione: 2026-10-12. Piani e skill dopo due decisioni: la storia e le decisioni stanno in un solo file, `history-and-decision.md` (gruppi per fase, voci con titolo e campi etichettati), e la Scheda di intervento è il piano, non la cronaca. Contenuto dalla prova 4; struttura del `log` e della Scheda rifatta. Osservazioni con il codice T5-n.

## Cosa è stato rifatto

- **Scheda di intervento.** Tre versioni in `claude`: bozza 1 (5 ottobre), v1 (13 ottobre, completa), v2 (15 ottobre, piano corretto per il gestionale). Le versioni v3 (fine lavoro) e v4 (seguito in garanzia) della prova 4 non esistono più: la cronaca non è nella Scheda. PDF nella radice: `01-scheda-di-intervento-v2.pdf`.
- **History and decision.** Un solo file in `log`: 18 voci in quattro gruppi (Analisi, Sviluppo, Rilascio, Garanzia), di cui 6 decisioni (DEC1-DEC6) che prima stavano in `decisioni.md`. Ogni voce ha titolo con data e tipo e i campi Fase, Cosa, Effetto, Riferimenti (le decisioni anche Chi ha deciso, Motivo, Alternative scartate).
- **Voce di chiusura.** La voce Rilascio del 20 ottobre porta cosa è stato fatto, la versione dei documenti a cui il ticket si riferisce (Manuale v1.3, Documento tecnico v1.2) e, nei Dettagli, l'effetto sui documenti del sistema. La voce Garanzia del 5 novembre porta il nuovo effetto (totale non negativo).
- **Indice.** `ticket-chiusi.md`: "Scheda: v2. Voce di chiusura in History and decision: 2026-10-20; seguito in garanzia: 2026-11-05".

## Osservazioni

- T5-1, Peso: da 20 a 18 file, e tre versioni della Scheda al posto di cinque. Risolve T3-3 della prova 3.
- T5-2, Passaggio: chi scrive Manuale e Documento tecnico deve leggere la Scheda e le voci Rilascio e Garanzia del ticket. Le skill `manuale-del-prodotto`, `documento-tecnico`, `allineamento-documenti` e `kickoff` lo dicono; l'indice punta alle due fonti.
- T5-3, Esecuzione: contenuto riusato dalla prova 4; le voci sono state convertite dal formato precedente con uno script, poi riviste a mano nel ticket per la chiusura.

## Controlli finali

Script di verifica: tutti i controlli superati, compresi la voce di Rilascio con i Dettagli sull'effetto sui documenti e l'assenza di cronaca nella Scheda.
