---
name: aggiornamento-claude-md
description: Rigenera CLAUDE.md alla radice della repo con lo stato attuale del progetto, della repo e dei prossimi passi. Usala quando una conversazione ha cambiato in modo sostanziale lo stato del progetto (nuove decisioni fissate sui piani, documenti allineati, skill aggiornate, nuovi passi completati o aggiunti a promemoria.txt) e prima di chiudere una sessione lunga, così la prossima sessione riparte leggendo poco invece di ricostruire il contesto dalla conversazione.
---

# Aggiornamento di CLAUDE.md

Questa è una skill della repo, non una delle skill del piano operativo consegnate a Leonardo: vive in `.claude/skills/`, non in `skills/`, e non va mai spostata lì.

## A cosa serve

`CLAUDE.md`, alla radice della repo, è il file che Claude Code legge automaticamente a ogni sessione. Deve restare corto e vero: se non lo si aggiorna, la sessione successiva parte da informazioni sbagliate o deve rileggere tutto da capo, vanificando lo scopo del file.

## Quando usarla

- Dopo una sessione in cui sono state prese decisioni che cambiano le Regole comuni o uno dei piani.
- Dopo aver allineato, anche solo in parte, le skill o la base di test.
- Dopo aver completato o aggiunto un punto ai prossimi passi.
- Prima di chiudere una sessione lunga, per lasciare la repo pronta per una sessione fresca.

## Procedura

1. **Leggi lo stato reale, non quello che si crede di ricordare.**
   - `git log --oneline -20` per la cronologia recente.
   - `git status` per capire se ci sono modifiche non commesse.
   - Se la conversazione corrente ha modificato i documenti in `docs/`, usa quello che la conversazione già sa: non è necessario rileggerli se sono già stati letti in questa sessione.
2. **Confronta con il CLAUDE.md esistente** e individua cosa è cambiato: decisioni nuove, voci di "non ancora fatto" diventate fatte, voci nuove da aggiungere.
3. **Riscrivi la sezione "Stato attuale"** con il nuovo stato. Non accumulare storia: questa sezione descrive solo l'oggi, non un changelog. La cronologia sta nei commit Git, non qui.
4. **Aggiorna la lista "Non ancora fatto"** togliendo le voci completate e aggiungendo quelle nuove emerse (dalla conversazione).
5. **Non toccare**: la sezione "Dove vive la fonte di verità" e "Struttura della repo", a meno che la struttura sia davvero cambiata (nuove cartelle, file rinominati). 
6. **Rispetta le stesse regole di scrittura dei documenti del piano**: italiano, impersonale, niente conteggi nel testo, niente tabelle, solo caratteri da tastiera italiana. `CLAUDE.md` non è un documento per il cliente, ma mantiene la stessa igiene per restare leggibile e stabile nel tempo.
7. **Non fare commit automaticamente**: lascia il file modificato nel working tree, come per ogni altra modifica a questa repo. L'utente decide quando committare.
