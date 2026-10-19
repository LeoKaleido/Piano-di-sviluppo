# Test delle skill

Data: 2026-10-11

Questa cartella contiene i test logici del piano operativo e delle sue skill, su un cliente inventato, Lumera Arredi. I test precedenti sono stati cancellati il 2026-10-11 perché fatti su versioni superate dei documenti (restano nella cronologia git).

- `base-comune.md`: cliente, sistema, repository, documenti esistenti, lavori aperti, team, calendario, regole e tipi di osservazione. Va letta prima di ogni scenario.
- `sistema-base/`: Manuale del prodotto (v1.0-v1.3) e Documento tecnico (v1.0-v1.2) del sito di Lumera Arredi, scritti per intero, con tutte le versioni dalla prima. Le versioni più recenti (Manuale v1.3, Documento tecnico v1.2) sono la base di partenza; le precedenti sono ricostruite per completezza della catena. Le prove su quel sistema le aggiornano e salvano le versioni nuove nella cartella della propria lavorazione (PDF nella radice, sorgenti in `claude`, con la catena completa delle versioni). Il prodotto è un sistema nuovo e non li usa.
- `ticket-1-sconto-iva-carrello/`: un ticket normale completo, dall'apertura alla garanzia.
- `progetto-1-area-rivenditori/`: un progetto su un sistema esistente, dal kickoff alla garanzia.
- `prodotto-1-app-showroom/`: un prodotto nuovo, dal kickoff alla garanzia.

## Come si esegue uno scenario

1. Si legge `base-comune.md` e lo `scenario.md` della cartella.
2. Si crea `esecuzione-N/` dentro la cartella dello scenario, con N pari al numero della prova (1, poi 2 e così via). Non si sovrascrive mai una prova precedente.
3. Si recitano i ruoli e si applicano le skill di `skills/` alla lettera, nell'ordine del piano, seguendo gli eventi dello scenario. I documenti si salvano in `esecuzione-N/<codice>/` con la struttura della knowledge base: PDF nella radice, sorgenti in `claude`, wireframe e mockup in `design`, tutto ciò che entra e che esce verso il cliente in `source`, storia in `log`. I documenti del sistema (Manuale e Documento tecnico, con il capitolo Pubblicazione) si scrivono per intero; gli altri documenti possono essere ridotti. Il diario è in `esecuzione-N/diario.md`.
4. Le skill e i piani non si correggono durante l'esecuzione.
5. A esecuzione finita si lancia `node build/verifica-lavorazione.js esecuzione-N/<codice>` e poi si usa la skill `analisi-test` (in `.claude/skills/`): produce `esecuzione-N/analisi.md`.
6. Leonardo legge le analisi, decide quali osservazioni correggere, e solo allora si correggono piani e skill. Dopo le correzioni si rifà la prova come `esecuzione-N+1` e l'analisi la confronta con la precedente.

## Cosa si decide dopo l'analisi

Ogni osservazione ha una proposta di correzione. Leonardo la accetta, la scarta o la rimanda. Le osservazioni accettate si applicano ai piani e alle skill, poi si rilancia la build. Le scartate restano nell'analisi con il motivo, perché non si riaprano alla prova successiva.
