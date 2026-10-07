# Repo: Piano di sviluppo

Repo di supporto al progetto "piano operativo": il processo che l'azienda di Leonardo segue per i lavori dei clienti (dalla richiesta alla messa in produzione) e le skill Claude che producono ogni documento del processo. Tre categorie di lavoro: ticket, progetto, prodotto. Si lavora in italiano.

## Dove vive la fonte di verità

I documenti del piano sono i file markdown in `docs/`, nella repo. Si leggono e si modificano lì, con i normali strumenti sui file. Sono la fonte di verità.

I documenti Claude Docs da cui sono partiti non si usano più e non vanno modificati.

- `docs/regole-comuni.md`: glossario e regole valide per ogni lavoro, compresa la struttura della knowledge base.
- `docs/piano-dei-ticket.md`, `docs/piano-di-progetto.md`, `docs/piano-di-prodotto.md`: un piano per categoria.
- `docs/ciclo-di-sviluppo.md`: la parte di sviluppo (sprint, milestone, issue, buffer, imprevisti), unica per le tre categorie.
- `test/archivio-primo-test/`: base e svolgimento del primo test (2026-10-06) e registro delle osservazioni, ancora in parte aperto.
- `docs/guide-della-giornata.md`: una guida per ruolo (sviluppatore, project manager, product lead, chi analizza, incaricato della pubblicazione, supervisore, chi gestisce il team) con cosa fare all'inizio, durante e a fine giornata e nel ritmo dello sprint.
- `docs/da-risolvere.md`: ciò che è stato lasciato irrisolto di proposito. Leggerlo quando si pianifica il prossimo passo.

## Struttura della repo

- `docs/`: i documenti sopra.
- `presentation/schemi/`: lo schema di ClickUp (`schema-clickup.html`) e quattro diagrammi di flusso in HTML (`diagramma-presa-in-carico.html` generale, `diagramma-piano-dei-ticket.html`, `diagramma-piano-di-progetto.html`, `diagramma-ciclo-di-sviluppo.html`). I diagrammi vanno tenuti allineati ai documenti da cui derivano. Lo stile da riusare è quello di questi.
- `presentation/`: la presentazione del piano operativo in HTML, molto essenziale (concetti chiave e fasi, il dettaglio si dice a voce). `slides/` ha una slide per file, `template.html` il motore (frecce, F schermo intero, N note del relatore), `index.html` è generato con `presentation/build.ps1` e si apre nel browser.
- `test/`: i test delle skill: `base-comune.md`, cinque scenari (due progetti, tre ticket, ognuno con `scenario.md` e le prove in `esecuzione-N/`) e `archivio-primo-test/`. Istruzioni in `test/README.md`.
- `skills/`: le skill del piano operativo, consegnate a Leonardo come file `.skill`. Ognuna ha `SKILL.md` e `scripts/controlla_caratteri.py`.
- `build/`: `build.py` (sostituisce i segnaposto delle skill con i blocchi comuni e copia lo script di controllo), `build.ps1` (stesso lavoro con PowerShell, perché Python non è installato; crea anche i `.skill` in `dist/`, ignorata da git), `controlla_caratteri.py`. La build modifica ancora i sorgenti delle skill sul posto (difetto noto).
- `.claude/skills/`: skill di questa repo (non del piano operativo): `aggiornamento-claude-md` per rigenerare questo file, `analisi-test` per analizzare le esecuzioni dei test.
- `HANDOVER.md`, `promemoria.txt` e `handover-claude-code.zip` sono cancellati dal working tree: Leonardo ha confermato che servivano solo all'inizio, la cancellazione si può committare.

## Regole di scrittura (vincolanti per i documenti del piano e le skill)

Italiano, forma impersonale, un solo nome per ogni cosa, niente tabelle (solo elenchi), niente conteggi nel testo, solo caratteri da tastiera italiana (no virgolette curve, trattini lunghi, puntini di sospensione come carattere unico, emoji). Il testo completo è nel blocco SCRITTURA di `build/build.py`.

## Stato attuale (ultimo aggiornamento: vedi cronologia git)

Decisioni fissate:

- Lessico: categoria, referente, responsabile (sempre uno sviluppatore: nei ticket il responsabile, nei progetti il project manager, nei prodotti il product lead), incaricato della pubblicazione, supervisore (controlla avanzamento, stime e capacità; all'inizio due persone), knowledge base, codice della lavorazione (il codice del ticket di osTicket), DoD, spike, release, staging, revisione del codice, buffer di sprint e di milestone, margine, Nota di sprint, Milestone report, Report di progetto, modifica e variazione.
- Capacità: sprint unico aziendale di 2 settimane che finisce di venerdì, buffer di sprint al 20% (solo ticket urgenti), buffer di milestone al 20% (30% con una sola persona), tetto delle variazioni piccole a metà del buffer di milestone.
- Regole generali: si lavora a consumo, nessun accordo quadro, nessuna approvazione economica (nemmeno per i ticket). La prova del cliente su staging non ha accettazione implicita (demo in call facoltativa). Garanzia: max tra 15 giorni e 50% della durata pianificata (per un ticket sempre 15 giorni lavorativi). Verifica preliminare al 10% di una stima a occhio. Aggiornamento dei documenti di lavori chiusi: regola confermata.
- Pubblicazione: la segue l'incaricato, non avviene in CI. I documenti di aiuto al rilascio si leggono il lunedì; si rilascia anche a metà sprint; le urgenze anche di venerdì sera fino alle 18.
- Knowledge base: sostituisce Drive. Una repository per prodotto con piano e skill, documenti del sistema e cartella delle lavorazioni; ogni lavorazione ha il codice del ticket come nome e cartelle di fase numerate (per esempio `01-analisi` per un ticket, `01-kickoff/03-proposta` per un progetto). Le conversazioni si registrano come file audio e si conservano lì.
- Ticket (rifatti il 2026-10-06): tre fasi, analisi, sviluppo, rilascio, con sottofasi. Skill `kickoff-ticket` snella. Si chiude al rilascio, urgente o no; le procedure interne (aggiornamento dei documenti) seguono dopo la chiusura. Nessun documento di sprint, solo ClickUp. Una sola fase di analisi che produce la Scheda di intervento (con le decisioni in testa). Revisione del codice sempre. Capacità dei ticket: persone sempre disponibili più prestiti di ore dai progetti decisi da chi gestisce il team. Un ticket lungo è solo lungo, al massimo si divide in issue.
- Progetto (riscritto il 2026-10-06): tre fasi. Kickoff in quattro sottofasi (valutazione, stima, proposta, documentazione): stima a occhio interna di 10 minuti e tempo del kickoff al 10% di quella, stima precisa dalla codebase e dai Report di progetto passati nella Proposta, Manuale confermato dal cliente, Documento tecnico con il capitolo Milestone, Piano dei SAL, sviluppo (sprint, ClickUp, Nota di sprint), rilascio (collaudo, pubblicazione, chiusura). Il cliente conferma due volte (Proposta e Manuale): il confine tra modifica e variazione è la conferma del Manuale. Il progetto non è mai fermo se il cliente non risponde.
- Skill: `kickoff` (progetti e prodotti: Stato di partenza con le decisioni in testa) e `kickoff-ticket` (ticket, snella) sostituiscono verifica-preliminare, valutazione-richiesta e stato-di-partenza. La stima di durata del progetto si ricava dalla richiesta analizzando codebase e Proposta, compare nella Proposta.
- Rilascio del progetto in quattro sottofasi (collaudo, preparazione, pubblicazione, chiusura). Guida alla pubblicazione: documento del sistema con regole del server, riavvii, cache, verifiche; la scheda tecnica di rilascio è una riga se non ci sono particolarità. Una condizione della DoD base annota ciò che cambia il modo di pubblicare.
- Garanzia: imprevisto di capacità, senza riserva di ore, tracciata; copre bug, variazioni piccole e richieste estetiche; skill `pacchetto-di-garanzia` e sezione sulla garanzia del Report di progetto a fine periodo.
- Ogni lavorazione ha `storico.md` e `decisioni.md`, nati vuoti e popolati a mano con le skill `storico-lavorazione` e `registro-decisioni`. A fine progetto il Report di progetto (skill `report-di-progetto`) tira le somme e alimenta le stime future.
- Prodotto (riallineato il 2026-10-06): tre fasi come il progetto. Kickoff in cinque sottofasi (valutazione con analisi del contesto, stima, proposta con le release, prototipo e design, documentazione), sviluppo con la prima milestone dedicata alle fondamenta, rilascio come lancio (collaudo, preparazione con Piano di lancio, pubblicazione graduale, chiusura), poi passaggio a regime: ticket e progetti.

Non ancora fatto:

- Struttura di ClickUp da verificare sul piano dell'azienda (task in più List, sprint, Workload, tracciamento del tempo, connettore).
- Nuovo test delle skill: 2 progetti e 3 ticket in `test/` (output in `esecuzione-N`), più una skill che li analizza; scenari e skill `analisi-test` scritti il 2026-10-06, nessuna esecuzione ancora fatta. Il primo test è in `test/archivio-primo-test/`. Il registro delle osservazioni del primo test va rivisto: parte è risolta.
- Creare la repository knowledge base e migrarvi piano e skill; le Note di sprint stanno nella cartella `02-sviluppo` di ogni lavorazione.
- `collaudo-e-rilascio`: ritorno alla versione precedente e contenuto del collaudo. Strumento di trascrizione degli audio.
- Decidere se serve una skill di ricerca documenti separata da `allineamento-documenti`.
- Glossario autonomo separato dalle Regole comuni, e riorganizzazione dei documenti con indice delle fasi e sottofasi, richiesti da Leonardo, non ancora iniziati.
- Analisi fase-per-fase del Piano di prodotto riallineato: da fare. Dopo il riallineamento del 2026-10-06 resta una decisione aperta sulla durata dell'assistenza rafforzata.

Il dettaglio delle voci aperte è in `docs/da-risolvere.md`.

## Mantenere questo file aggiornato

Usa la skill `.claude/skills/aggiornamento-claude-md/` quando lo stato del progetto cambia in modo sostanziale (nuove decisioni fissate, nuovi documenti allineati, nuovi passi completati o aggiunti).
