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
- [x] **Accordo quadro.** Deciso il 2026-10-05: non serve la firma. Tolto da Regole comuni, Piano di progetto e Piano di prodotto. Restano da verificare le skill e `HANDOVER.md` (snapshot storico, non si modifica).

## Decisioni aperte del Piano dei ticket

- [x] **Comunicazione al cliente.** Deciso il 2026-10-05: appena il ticket è assegnato si può rispondere per presa visione. Non si dichiara una data di consegna. La data di pubblicazione si comunica solo quando è certa, ed è facoltativo.
- [x] **Tempi di presa in carico.** Deciso il 2026-10-05: non servono. Il ticket si legge subito e si prende in carico appena possibile.
- [x] **Chi esegue l'aggiornamento dei documenti.** Deciso il 2026-10-05: il responsabile, con la skill di allineamento, quando il piano sarà usato a regime.
- [x] **Termine per le risposte del cliente.** Deciso il 2026-10-05: nessun termine. Il cliente risponde quando vuole e il ticket resta sospeso informalmente, con il ritardo che ne consegue.
- [ ] **Ticket urgente: ordine di rilascio e documenti.** Oggi si rilascia subito e il resoconto e l'aggiornamento dei documenti seguono dopo il rilascio. Verificare che regga con la regola "un lavoro è chiuso solo dopo l'aggiornamento dei documenti".

## Skill

Allineate al Piano dei ticket il 2026-10-05: `scheda-di-intervento` (riscritta), `resoconto-di-intervento` (nuova), `valutazione-richiesta`, `verifica-preliminare`, `allineamento-documenti`, `demo`, `wireframe-e-prototipo`, `sprint`, `riprogrammazione`. Allineati anche i termini rinominati (variazione, spike, release, buffer, registro delle variazioni). Restano queste voci.

- [ ] **Rilancio della build.** Dopo ogni modifica alle skill, `build/build.py` va rilanciato. Non è stato fatto: serve Python. La nuova skill `resoconto-di-intervento` ha già la cartella `scripts` con lo script di controllo.
- [ ] **Ruoli nelle skill.** Molte skill nominano ancora "product lead" e "team lead". Vanno rese impersonali come i piani (chi analizza, il responsabile, chi conosce il sistema).
- [ ] **Correzioni di contenuto già note dall'handover.** Sezione 7 dell'`HANDOVER.md`: categorie di variazione secondo le tre domande in ordine, tetto delle piccole, Piano dei SAL con data di avvio dichiarata, collaudo finale e piano di rilascio del progetto senza skill.
- [ ] **`sprint`.** Verificare il resto della skill (soglie, Documento di sprint) sul nuovo buffer di sprint al 20% e sull'assenza della regola dell'80%.
- [ ] **Prova delle skill sulla base di test.** `docs/base-test-skill.md` è stata aggiornata per i ticket, ma il test non è stato eseguito.

## Piano di progetto

Il Piano di progetto è stato riscritto il 2026-10-05 e le skill sono state allineate lo stesso giorno: nuove `interpretazione-conversazioni`, `collaudo-e-rilascio` e `milestone-report`; adattate `piano-delle-milestone`, `documento-tecnico`, `stato-di-partenza`, `proposta-di-soluzione`, `manuale-del-prodotto`, `sprint`, `demo`, `variazione`, `riprogrammazione`, `valutazione-richiesta`. Restano queste voci.

- [x] **Piano dei SAL.** Deciso il 2026-10-05: esiste, come documento a parte per il cliente (non una sottosezione del Manuale), ricavato dalle milestone del Documento tecnico. Si invia appena c'è la stima vera, sempre.
- [x] **Scostamento della stima.** Deciso il 2026-10-05: il cliente è informato appena si ha la stima vera, indipendentemente dallo scostamento.
- [x] **Sprint report.** Deciso il 2026-10-05: è interno e resta. Al cliente si presenta il Milestone report.
- [ ] **Prova delle nuove skill.** Le skill nuove e quelle adattate non sono state provate sulla base di test (`docs/base-test-skill.md`): il test per progetto va eseguito per trovare dove non reggono.
- [ ] **`collaudo-e-rilascio`.** Scritta in una prima versione. Da approfondire con il team: procedure di rilascio reali, ritorno alla versione precedente, cosa include il collaudo sui sistemi di questa azienda.
- [ ] **`milestone-report`.** Contenuto proposto dal Piano di progetto (story consegnate, esito della demo, stato della milestone successiva, date, cosa serve dal cliente). Da confermare dopo la prima prova.
- [ ] **`interpretazione-conversazioni`.** Prima versione. Da definire il formato della trascrizione (strumento di registrazione) e dove si conserva su Drive.
- [ ] **Diagramma generale di presa in carico di una lavorazione**, con la parte iniziale e finale comune a tutti i piani, nello stesso formato di quelli dei ticket e del progetto.
- [ ] **Diagrammi.** `docs/diagramma-piano-dei-ticket.html`, `docs/diagramma-piano-di-progetto.html` e `docs/diagramma-ciclo-di-sviluppo.html` vanno aggiornati a ogni modifica dei rispettivi documenti.
- [ ] **Ciclo di sviluppo, parti per il prodotto.** Il documento tratta il prodotto come il progetto, con la prima milestone dedicata alle fondamenta. Va verificato quando si riallinea il Piano di prodotto (release, piano di lancio).
- [ ] **Ciclo di sviluppo, ticket lunghi.** Un ticket entra nello sviluppo come una issue e, oltre le 16 ore, si divide in più issue dello stesso ticket: è la regola generale delle issue applicata ai ticket, da confermare in uso.

## Altri documenti da allineare

- [ ] **Piano di prodotto**, per i livelli di urgenza, per i punti in comune con il Piano di progetto (che ora è cambiato: kickoff, Documento tecnico con milestone e issue, nessuna approvazione economica) e per il riferimento al Piano dei SAL.
- [ ] **`docs/base-test-skill.md`**, per i valori vecchi già segnalati con le note inline (accettazione della demo, garanzia a 60 giorni, buffer di sprint al 10%).
- [ ] **`CLAUDE.md`**, per lo stato aggiornato (si rigenera con la skill dedicata).
