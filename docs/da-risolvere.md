# Da risolvere

Data: 2026-10-05

Questo documento raccoglie ciò che è stato lasciato irrisolto di proposito, per non appesantire i documenti del piano. Ogni voce dice cosa manca e da dove nasce. Quando una voce è risolta si spunta e si sposta il risultato nel documento giusto.

## Metodo e struttura dei documenti

- [ ] **Come trovare i documenti da aggiornare senza cercarli ogni volta tra tutti.** Indici, divisione per repository e simili. Nasce dall'aggiornamento dei documenti a fine ticket (Piano dei ticket), che oggi dice solo quali documenti aggiornare e non come trovarli.
- [ ] **Skill che ricerca e modifica i documenti di vecchi lavori.** Parte finale in comune a tutte le lavorazioni. Usa come fonte la Scheda di intervento (voci "Su cosa intervenire" e "Documenti collegati"). Da definire dopo il metodo di ricerca.

## Regole comuni da allineare al Piano dei ticket

Le Regole comuni sono state allineate al Piano dei ticket il 2026-10-05 (categoria, responsabile, urgenza, feature, silenzio del cliente, materiali, date, capacità, documenti, esiti della verifica, garanzia, approvazione economica). Restano queste voci.

- [ ] **Responsabile in progetti e prodotti.** Nel Glossario ora è la persona interna a cui è assegnata la lavorazione (per un ticket, lo sviluppatore). Verificare che il significato regga per progetti e prodotti.
- [ ] **Approvazione economica nei ticket.** Le Regole comuni dicono che i piani non la prevedono per i ticket. Confermare che per l'azienda è così, o dire dove si gestisce.
- [ ] **Aggiornamento dei documenti di lavori già chiusi.** Le Regole comuni dicono che si aggiornano a lavoro concluso, indicando il lavoro che ha causato la modifica, mentre quelli di lavori ancora aperti e approvati dal cliente non si modificano in silenzio. È una regola provvisoria, da verificare in uso.
- [ ] **Stima in ore del ticket.** Si registra nella Scheda di intervento. Da definire chi la fa e come si controlla che la capacità dello sprint sia rispettata.
- [ ] **Accordo quadro.** Le Regole comuni dicono che per un cliente nuovo si firma prima di iniziare qualunque lavoro. Il Piano dei ticket non lo nomina. Decidere dove si colloca.

## Decisioni aperte del Piano dei ticket

- [ ] **Comunicazione al cliente.** Presa in carico e data prevista: cosa si comunica e quando.
- [ ] **Tempi di presa in carico** per ogni urgenza, e termine per la scheda di un ticket normale.
- [ ] **Chi esegue l'aggiornamento dei documenti.** Proposta: il responsabile, con la skill di allineamento.
- [ ] **Termine per le risposte del cliente** a una richiesta vaga, dopo il quale la richiesta si chiude.
- [ ] **Ticket urgente: ordine di rilascio e documenti.** Oggi si rilascia subito e il resoconto e l'aggiornamento dei documenti seguono dopo il rilascio. Verificare che regga con la regola "un lavoro è chiuso solo dopo l'aggiornamento dei documenti".

## Skill da riscrivere o creare

- [ ] **`scheda-di-intervento`.** Descrive ancora le due schede (una per il cliente, una di sviluppo). Va riscritta sul nuovo flusso: un solo documento interno, con la stima in ore.
- [ ] **Resoconto di intervento.** Nuova skill per il documento finale per il cliente, senza riferimenti tecnici, con user story o brevi riassunti.
- [ ] **`valutazione-richiesta` e `verifica-preliminare`.** Devono produrre le decisioni dell'analisi iniziale: categoria, esito, stima, tipo, urgenza, responsabile.
- [ ] **`allineamento-documenti`.** Deve usare la Scheda di intervento come fonte.
- [ ] **`demo` e `wireframe-e-prototipo`.** Non servono più ai ticket: togliere i riferimenti.
- [ ] **`sprint`.** Tenere conto dei ticket a tempo perso e del buffer di sprint riservato agli urgenti.
- [ ] **Rilancio della build.** Dopo ogni modifica alle skill, `build/build.py` va rilanciato.

## Altri documenti da allineare

- [ ] **Piani di progetto e di prodotto**, per i livelli di urgenza (bloccante, alta), per "taglia" al posto di categoria, e per i punti in comune con la parte iniziale e finale dei ticket.
- [ ] **`docs/base-test-skill.md`**, per ticket, livelli e urgenze, oltre ai valori vecchi già segnalati con le note inline.
- [ ] **`CLAUDE.md`**, per lo stato aggiornato (si rigenera con la skill dedicata).
