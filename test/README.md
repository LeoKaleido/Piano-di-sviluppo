# Test delle skill

Data: 2026-10-06

Questa cartella contiene i test logici del piano operativo e delle sue skill: cinque scenari su un cliente inventato, Lumera Arredi.

- `base-comune.md`: cliente, sistema, documenti esistenti, team, calendario, regole e tipi di osservazione. Va letta prima di ogni scenario.
- `progetto-1-area-rivenditori/`, `progetto-2-sincronizzazione-magazzino/`: due progetti.
- `ticket-1-iva-checkout/`, `ticket-2-urgenza-checkout/`, `ticket-3-richiesta-vaga/`: tre ticket.
- `archivio-primo-test/`: il primo test (base e svolgimento). Non si usa più. Il suo registro delle osservazioni è in parte aperto.

Il prodotto non ha uno scenario: il Piano di prodotto riallineato il 2026-10-06 va prima rivisto da Leonardo.

## Come si esegue uno scenario

1. Si legge `base-comune.md` e lo `scenario.md` della cartella.
2. Si crea `esecuzione-N/` dentro la cartella dello scenario, con N pari al numero della prova (1, poi 2 e così via). Non si sovrascrive mai una prova precedente.
3. Si recitano i ruoli e si applicano le skill di `skills/` alla lettera, nell'ordine del piano, seguendo gli eventi dello scenario. I documenti si salvano in `esecuzione-N/<codice>/<fase>/`. Il diario è in `esecuzione-N/diario.md`.
4. Le skill e i piani non si correggono durante l'esecuzione.
5. A esecuzione finita si usa la skill `analisi-test` (in `.claude/skills/`): produce `esecuzione-N/analisi.md`.
6. Leonardo legge le analisi, decide quali osservazioni correggere, e solo allora si correggono piani e skill. Dopo le correzioni si rifà la prova come `esecuzione-N+1` e l'analisi la confronta con la precedente.

## Cosa si decide dopo l'analisi

Ogni osservazione ha una proposta di correzione. Leonardo la accetta, la scarta o la rimanda. Le osservazioni accettate si applicano ai piani e alle skill, poi si rilancia la build. Le scartate restano nell'analisi con il motivo, perché non si riaprano alla prova successiva.

Nota: `ticket-2-urgenza-checkout/esecuzione-1` e la sua analisi sono state fatte quando i ticket avevano ancora il Resoconto di intervento (eliminato il 2026-10-06). Le osservazioni sul resoconto di quella prova non valgono piu'.
