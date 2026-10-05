# Repo: Piano di sviluppo

Repo di supporto al progetto "piano operativo": il processo che l'azienda di Leonardo segue per i lavori dei clienti (dalla richiesta alla messa in produzione) e le skill Claude che producono ogni documento del processo. Tre taglie di lavoro: ticket, progetto, prodotto. Si lavora in italiano.

## Dove vive la fonte di verità

I documenti del piano sono i file markdown in `docs/`, nella repo. Si leggono e si modificano lì, con i normali strumenti sui file. Sono la fonte di verità.

I documenti Claude Docs da cui sono partiti non si usano più e non vanno modificati. Il 2026-10-03 le copie locali sono state confrontate con quelle remote e risultavano allineate; l'unica differenza era un commento sul Piano di progetto (domanda su prezzo fisso o a consumo), riportato in `docs/piano-di-progetto.md`.

- `docs/regole-comuni.md`
- `docs/piano-dei-ticket.md`
- `docs/piano-di-progetto.md`
- `docs/piano-di-prodotto.md`
- `docs/base-test-skill.md`

## Struttura della repo

- `docs/` — i documenti del piano in markdown. Sono la fonte di verità. `docs/da-risolvere.md` raccoglie ciò che è stato lasciato irrisolto di proposito.
- `skills/` — le skill del piano operativo, consegnate a Leonardo come file `.skill` scaricabili. Ognuna ha `SKILL.md` (con segnaposto `{{SCRITTURA}}`/`{{CONTROLLO}}`) e `scripts/controlla_caratteri.py`.
- `build/` — `build.py` (sostituisce i segnaposto nelle skill con i blocchi comuni e copia lo script di controllo), `controlla_caratteri.py`, `patch_verifica.py` (one-shot, non serve più).
- `HANDOVER.md` — il documento di handover originale (3 ottobre 2026) da cui è partito questo lavoro. Contiene lo stato a quella data: non aggiornarlo per riflettere il lavoro successivo, resta uno snapshot storico.
- `promemoria.txt` — note libere di Leonardo su cosa fare, non strutturate. Leggerlo quando si pianifica il prossimo passo.
- `.claude/skills/aggiornamento-claude-md/` — skill di questa repo (non del piano operativo) per rigenerare questo file.

## Regole di scrittura (vincolanti per i documenti del piano e le skill)

Italiano, forma impersonale, un solo nome per ogni cosa, niente tabelle (solo elenchi), niente conteggi nel testo, solo caratteri da tastiera italiana (no virgolette curve, trattini lunghi, puntini di sospensione come carattere unico, emoji). Dettaglio completo in `docs/regole-comuni.md` (sezione 3 dell'HANDOVER.md originale).

## Stato attuale (ultimo aggiornamento: vedi cronologia git)

Decisioni fissate rispetto all'handover originale: sprint unico aziendale (2 settimane), ticket normali pianificati come issue di progetto, buffer di sprint al 20%, buffer di milestone al 20%/30% (unico persona), tetto delle variazioni piccole a metà del buffer di milestone, demo senza accettazione implicita, durata della garanzia come formula (max tra 15 giorni e 50% della durata pianificata della lavorazione), tempo massimo della verifica preliminare al 10% di una stima a occhio, **pacchetto di garanzia** introdotto come nuovo concetto (sostituisce "bug in garanzia" come tipo di ticket). Piano dei ticket e Piano di progetto riscritti il 2026-10-05 (flusso con skill e documenti per fase). Nessun accordo quadro, nessuna approvazione economica (si lavora a consumo), conferma del cliente anche a voce con riepilogo scritto, conversazioni trascritte nella documentazione di progetto.

Non ancora fatto:
- le skill in `skills/` sono allineate ai Piani dei ticket e di progetto (nuove: resoconto-di-intervento, interpretazione-conversazioni, collaudo-e-rilascio, milestone-report), ma non provate sulla base di test e con correzioni di contenuto ancora aperte (ruoli impersonali nelle altre skill, Piano di prodotto, build da rilanciare): vedi `docs/da-risolvere.md`;
- `docs/base-test-skill.md` è allineato per i ticket, ma contiene ancora valori vecchi segnalati con blockquote `Nota:` inline;
- Piano di prodotto da riallineare al nuovo Piano di progetto;
- analisi fase-per-fase dei tre piani: fatta per ticket e progetto (con diagrammi HTML in `docs/`), da fare per il prodotto, richiesta in `promemoria.txt`;
- documento che unifichi il processo comune prima/dopo i piani di sviluppo (kickoff, verifiche finali, aggiornamento documentazione), richiesto in `promemoria.txt`, non ancora iniziato;
- glossario autonomo separato dalla sezione Glossario di Regole comuni, richiesto in `promemoria.txt`, non ancora iniziato;
- riorganizzazione dei documenti dei piani con indice delle fasi/sottofasi, richiesta in `promemoria.txt`, non ancora iniziata;

`main` e il branch di lavoro sono sincronizzati (merge pulito, nessun conflitto reale nonostante quanto mostrato da alcuni strumenti grafici per differenze di fine riga).

## Mantenere questo file aggiornato

Usa la skill `.claude/skills/aggiornamento-claude-md/` quando lo stato del progetto cambia in modo sostanziale (nuove decisioni fissate, nuovi documenti allineati, nuovi passi completati o aggiunti).
