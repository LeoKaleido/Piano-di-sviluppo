---
name: revisione-codice
description: Rivede la modifica di una issue prima che sia chiusa, confrontandola con la descrizione e la DoD della issue in ClickUp, con la story del Manuale e con le regole delle repository toccate (file CLAUDE.md e documentazione per Claude presente nelle repo). Produce commenti puntuali, ordinati per gravità. Usala per ogni issue di progetto o prodotto e per ogni ticket, prima di chiuderli.
---

# Revisione del codice

## A cosa serve

Ogni issue di un progetto o di un prodotto, e ogni ticket, si chiude solo dopo la revisione del codice: è una condizione della DoD base. La skill prepara e conduce quella revisione. Non sostituisce chi rivede: gli porta i fatti, e propone commenti che il revisore conferma. Rivede sempre una seconda persona, che usa la skill. Con una persona sola la revisione è a campione, fatta da chi è esterno al lavoro.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **La issue.** Il codice della issue (o del ticket) in ClickUp, con descrizione, DoD e, se è una issue di story, la story del Manuale (codice e criterio di accettazione).
2. **La modifica.** Il ramo o la richiesta di modifica da rivedere, con il confronto rispetto al ramo di partenza.
3. **Le repository toccate.** Per ognuna: il file `CLAUDE.md`, la documentazione per Claude presente nella repo (cartelle di documentazione, file markdown di regole, convenzioni, architettura) e gli eventuali altri file di regole. Se hai accesso alla repo, leggili tu. Se non li trovi, dichiaralo: la revisione sulle regole della repo è incompleta.
4. **Il Documento tecnico**, capitolo su architettura e decisioni tecniche, se la modifica tocca la struttura.

## Cosa controllare

In quest'ordine.

1. **Corrispondenza con la issue.** La modifica fa ciò che la descrizione dice, e solo quello. Ogni condizione della DoD ha una risposta sì o no.
2. **Corrispondenza con la story.** Il comportamento rispetta il Manuale. Un comportamento diverso dal Manuale è un difetto. Una cosa non prevista dal Manuale non va aggiunta: è una richiesta nuova, da trattare come variazione.
3. **Regole della repo.** La modifica rispetta le convenzioni, la struttura e i divieti scritti nel `CLAUDE.md` e nella documentazione per Claude della repo. Ogni scostamento si cita con il punto del documento che lo prevede.
4. **Correttezza.** Casi limite, errori, dati vuoti, permessi, compatibilità con ciò che già esiste, codice usato anche altrove.
5. **Sicurezza e dati.** Input non controllati, segreti nel codice, dati personali.
6. **Test.** I test presenti passano, e il comportamento nuovo ha un test dove la repo lo richiede.
7. **Leggibilità e semplicità.** Solo se pesano sulla manutenzione.

Non rivedere ciò che non è nella modifica. Se la modifica tocca troppe cose per una issue, dillo: la issue va divisa.

## Cosa restituisci

Un elenco di commenti, ordinati per gravità, ognuno con il file e il punto, cosa non va, e il riferimento alla regola violata (issue, story o documento della repo). La gravità è una fra tre:

- **Bloccante.** La DoD non è soddisfatta, o il comportamento viola il Manuale, o c'è un difetto grave. La issue non si chiude.
- **Da correggere.** Non blocca, ma va sistemato, nella stessa issue o in una nuova.
- **Suggerimento.** Facoltativo.

In coda:

- **Esito.** Approvata, approvata con correzioni, non approvata.
- **Cosa non è stato controllato** e perché (repo non accessibile, file di regole mancanti).
- **Nuove issue da aprire** in ClickUp per ciò che esce dalla issue, con tipo e riferimento.

## Dove va il risultato

I commenti e l'esito si scrivono come commenti dell'issue in ClickUp: non c'è un file. Con la revisione approvata chi sviluppa porta l'issue a COMPLETED.

## Regole

- **Sola lettura.** La skill non modifica il codice né chiude la issue: la porta a COMPLETED chi sviluppa dopo la conferma del revisore. L'issue in revisione è in stato TESTING.
- **Riferimenti precisi.** Ogni commento indica dove e perché. "Non mi convince" non è un commento.
- **Le regole della repo valgono.** Una convenzione scritta nella repo prevale sul gusto di chi rivede.
- **Nulla di inventato.** Se un file di regole non si trova, non si deducono le regole.

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere. Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

Nei commenti i nomi di file, funzioni e tecnologie si scrivono come sono.

## Controllo finale

1. Ogni condizione della DoD ha una risposta.
2. Ogni commento ha file, punto e riferimento.
3. I commenti sono ordinati per gravità e c'è un esito.
4. È dichiarato cosa non è stato controllato.
5. Nulla è stato modificato.
6. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
