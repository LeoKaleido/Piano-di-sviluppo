# Da risolvere

Data: 2026-10-06

Questo documento raccoglie solo ciò che è rimasto aperto. Le decisioni prese stanno nei documenti del piano e nella cronologia git. Quando una voce è risolta si cancella da qui.

## Strumenti e struttura

- **Verifica di ClickUp.** Controllare sul piano dell'azienda che ci siano: task in più List, cartella degli sprint, vista Workload, tracciamento del tempo. Controllare che il connettore permetta di creare Folder, List, task con campi e checklist. I campi personalizzati (tipo, story) e il modello di checklist con la DoD base vanno preparati una volta a mano se il connettore non li crea. Resta anche da decidere come si carica il Documento tecnico in ClickUp.
- **List "Materiali".** Proposta da confermare: un task per ogni materiale del cliente, e le issue che ne dipendono sono in attesa di quel task.
- **Repository knowledge base.** Da creare: nome e struttura (documenti del sistema, lavorazioni), migrazione di `docs/` e `skills/`.
- **Strumento di trascrizione.** Il file audio va trascritto: da decidere con quale strumento e se la trascrizione la fa la skill o un passo prima.
- **Nomi dei file di storico e decisioni.** Scelti `storico.md` e `decisioni.md`: da confermare.
- **Skill che modifica i documenti di vecchi lavori.** `allineamento-documenti` parte dalla Scheda di intervento e dai documenti collegati. Da decidere se basta o se serve una skill separata.

## Skill

- **`collaudo-e-rilascio`.** Da approfondire con il team: ritorno alla versione precedente e cosa include il collaudo sui sistemi di questa azienda.
- **`revisione-codice`.** Prima versione: da provare su una repo vera, con i file CLAUDE.md e la documentazione per Claude delle repo.
- **Build.** `build.ps1` sostituisce i segnaposto nei file sorgente stessi (difetto noto): da ristrutturare con sorgenti separati e output in `dist/`. `build.py` e `build.ps1` vanno tenuti allineati.

## Test

- **Nuovo test delle skill.** Due progetti e tre ticket in `test/`, output in `esecuzione-N` dentro ogni cartella di scenario. Scenari (cliente inventato Lumera Arredi) e skill `analisi-test` scritti il 2026-10-06: da eseguire e analizzare.
- **Registro del primo test.** In `test/archivio-primo-test/test-skill-svolgimento.md`: parte delle osservazioni è risolta dalle decisioni successive, le altre vanno riviste prima di rieseguire. Il documento si cancella quando il registro è chiuso.

## Altri documenti

- **Analisi fase per fase del Piano di prodotto.** Il piano è stato riallineato il 2026-10-06 al Piano di progetto: da rivedere con Leonardo le scelte logiche (cinque sottofasi del kickoff, prototipo e design prima del Manuale, tre conferme del cliente, Guida alla pubblicazione che nasce nel lancio).
- **Glossario autonomo.** Richiesto da Leonardo, separato dalla sezione Glossario di Regole comuni: non iniziato.
- **Indice delle fasi e sottofasi.** Riorganizzazione dei documenti dei piani, richiesta da Leonardo: non iniziata.
- **Revisione della repo.** Le voci residue di `docs/revisione-repo-2026-10-06.md` vanno chiuse e il documento cancellato.
