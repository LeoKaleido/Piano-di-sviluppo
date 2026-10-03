# Repo: Piano di sviluppo

Repo di supporto al progetto "piano operativo": il processo che l'azienda di Leonardo segue per i lavori dei clienti (dalla richiesta alla messa in produzione) e le skill Claude che producono ogni documento del processo. Tre taglie di lavoro: ticket, progetto, prodotto. Si lavora in italiano.

## Dove vive la fonte di verità

I documenti del piano sono **Claude Docs**, non file locali: si leggono e si modificano con gli strumenti Docs (`mcp__claude_ai_Claude_Docs__*`), mai con il fetch web.

- Regole comuni: https://claude.ai/code/artifact/ec03c479-7774-47f4-bfc8-6324ff91caca
- Piano dei ticket: https://claude.ai/code/artifact/a8ce9578-e734-4bf2-bac5-ad10453a1738
- Piano di progetto: https://claude.ai/code/artifact/912ade64-41b7-4560-a93f-9d6737dafa36
- Piano di prodotto: https://claude.ai/code/artifact/3966a348-edcb-4a50-a475-82e881cdc075
- Base per il test delle skill: https://claude.ai/code/artifact/2fc70a4b-3434-4277-8aeb-8aa777446433

## Struttura della repo

- `docs/` — copie locali in markdown dei cinque documenti sopra, per non dover interrogare Claude Docs ogni volta. Sono una fotografia: possono andare stale dopo una modifica fatta solo su Claude Docs. Non sono la fonte di verità.
- `skills/` — le 16 skill del piano operativo, consegnate a Leonardo come file `.skill` scaricabili. Ognuna ha `SKILL.md` (con segnaposto `{{SCRITTURA}}`/`{{CONTROLLO}}`) e `scripts/controlla_caratteri.py`.
- `build/` — `build.py` (sostituisce i segnaposto nelle 16 skill con i blocchi comuni e copia lo script di controllo), `controlla_caratteri.py`, `patch_verifica.py` (one-shot, non serve più).
- `HANDOVER.md` — il documento di handover originale (3 ottobre 2026) da cui è partito questo lavoro. Contiene lo stato a quella data: non aggiornarlo per riflettere il lavoro successivo, resta uno snapshot storico.
- `promemoria.txt` — note libere di Leonardo su cosa fare, non strutturate. Leggerlo quando si pianifica il prossimo passo.
- `.claude/skills/aggiornamento-claude-md/` — skill di questa repo (non del piano operativo) per rigenerare questo file.

## Regole di scrittura (vincolanti per i documenti del piano e le skill)

Italiano, forma impersonale, un solo nome per ogni cosa, niente tabelle (solo elenchi), niente conteggi nel testo, solo caratteri da tastiera italiana (no virgolette curve, trattini lunghi, puntini di sospensione come carattere unico, emoji). Dettaglio completo in `docs/regole-comuni.md` (sezione 3 dell'HANDOVER.md originale).

## Stato attuale (ultimo aggiornamento: vedi cronologia git)

Decisioni fissate rispetto all'handover originale: sprint unico aziendale (2 settimane), ticket normali pianificati come issue di progetto, quota urgenze al 20%, margine di milestone al 20%/30% (unico persona), tetto delle variazioni piccole a metà del margine, demo senza accettazione implicita, durata della garanzia come formula (max tra 15 giorni e 50% della durata pianificata della lavorazione), tempo massimo della verifica preliminare al 10% di una stima a occhio, **pacchetto di garanzia** introdotto come nuovo concetto (sostituisce "bug in garanzia" come tipo di ticket). Risolte due incongruenze tra i piani: firma dell'accordo quadro aggiunta al flusso del Piano dei ticket (fase 3); assegnazione dell'urgenza esplicitamente esclusa dalla fase 1 del Piano di prodotto.

Non ancora fatto:
- le 16 skill in `skills/` non sono allineate al lessico e alle regole aggiornate (vedi sezione 7 dell'HANDOVER.md per l'elenco preciso delle correzioni da fare);
- `docs/base-test-skill.md` non è allineato (contiene ancora valori vecchi, segnalati con blockquote `Nota:` inline nel file);
- analisi fase-per-fase dettagliata di tutte le fasi dei tre piani (iniziata solo per la fase 1 del ticket), richiesta in `promemoria.txt`;
- documento che unifichi il processo comune prima/dopo i piani di sviluppo (kickoff, verifiche finali, aggiornamento documentazione), richiesto in `promemoria.txt`, non ancora iniziato;
- glossario autonomo separato dalla sezione Glossario di Regole comuni, richiesto in `promemoria.txt`, non ancora iniziato;
- riorganizzazione dei documenti dei piani con indice delle fasi/sottofasi, richiesta in `promemoria.txt`, non ancora iniziata;
- contenuto dell'accordo quadro e gestione dei clienti attuali senza firma: deliberatamente rimandato, non è una decisione dimenticata.

`main` e il branch di lavoro sono sincronizzati (merge pulito, nessun conflitto reale nonostante quanto mostrato da alcuni strumenti grafici per differenze di fine riga).

## Mantenere questo file aggiornato

Usa la skill `.claude/skills/aggiornamento-claude-md/` quando lo stato del progetto cambia in modo sostanziale (nuove decisioni fissate, nuovi documenti allineati, nuovi passi completati o aggiunti).
