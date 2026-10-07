---
name: documento-tecnico
description: Scrive e aggiorna il Documento tecnico interno, cioè come viene realizzato il sistema (repository, tecnologie, architettura, dati, integrazioni, infrastruttura, scelte tecniche, milestone, con le issue in ClickUp). Usala dopo il Manuale del prodotto, e dopo ogni variazione, ticket o progetto che cambia la realizzazione.
---

# Documento tecnico

## A cosa serve

Il Documento tecnico è interno e non viene mai condiviso con il cliente. Dice **come** il sistema viene realizzato. Il **cosa** sta nel Manuale del prodotto, che resta l'unica fonte per i comportamenti.

Questa divisione serve a evitare che due documenti descrivano la stessa cosa e finiscano per divergere. Per questo il Documento tecnico cita i codici delle story (F3.1) e non ne riscrive mai il contenuto. Se i due documenti sono in contrasto, vale il Manuale e si corregge il Documento tecnico.

Come il Manuale, appartiene al sistema e non al singolo lavoro: un progetto o un ticket lo aggiornano, non ne creano uno nuovo. Lo cura il responsabile del lavoro, con chi sviluppa.

Deve bastare a uno sviluppatore che entra nel team a lavoro avviato.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Cliente e sistema.**
2. **Documento tecnico esistente.** Chiedi se il sistema ne ha già uno e dove si trova. Se esiste, il lavoro è un aggiornamento.
3. **Le fonti.** Il Manuale del prodotto, lo Stato di partenza, le scelte tecniche di chi sviluppa, il codice se accessibile, e le sintesi delle conversazioni sul lavoro.
4. **Situazione.** Prima stesura oppure aggiornamento, e in quel caso l'elenco dei codici di story modificati, aggiunti o rimossi nel Manuale.

## Informazioni mancanti

Le scelte tecniche le prende chi sviluppa. Puoi proporne, motivandole, ma entrano in una versione completa solo dopo essere state accettate: fino ad allora sono marcate con "[Proposta da validare]". Non scegliere in silenzio una tecnologia al posto del team.

Chiedi in un unico elenco numerato ciò che manca.

## Struttura

Intestazione: titolo, cliente, sistema, data, versione, versione del Manuale a cui si riferisce.

1. **Panoramica.** Le parti del sistema e come dialogano, in poche righe.
2. **Tecnologie.** Per ognuna: a cosa serve nel sistema e perché è stata scelta.
3. **Struttura del codice.** Dove si trova cosa, convenzioni seguite.
4. **Dati.** Entità, relazioni, regole di validità. Per ogni entità, le story che la usano.
5. **Realizzazione delle funzionalità.** Per ogni funzionalità del Manuale, con il suo codice: le parti del sistema coinvolte, il flusso tecnico passo per passo, i rami di errore corrispondenti ai casi particolari delle story. Si cita il codice della story, non se ne riscrive il comportamento.
6. **Integrazioni.** Sistemi esterni: cosa si scambia, come, cosa succede se non rispondono.
7. **Infrastruttura e ambienti.** Dove gira il sistema, staging e produzione. I passi per pubblicare e per tornare alla versione precedente stanno nella Guida alla pubblicazione, a cui questo capitolo rimanda.
8. **Sicurezza e dati personali.** Accessi, permessi, dati sensibili, backup.
9. **Decisioni tecniche.** Le scelte tecniche che durano nel tempo, con data, alternative scartate e motivo. Serve a non ridiscutere ciò che è già stato deciso. Le decisioni di una singola lavorazione stanno nel suo Registro delle decisioni, che rimanda qui quando sono tecniche.
10. **Rischi e debito tecnico.** Ciò che è stato fatto in modo provvisorio e andrà ripreso.
11. **Milestone.** Solo per progetti e prodotti. La divisione in milestone, il calendario, i buffer e i materiali del cliente. Le issue non stanno qui: vivono in ClickUp. Lo scrive la skill `piano-delle-milestone`, che da qui estrae anche il Piano dei SAL per il cliente.
12. **Modifiche rispetto alla versione precedente.**

Per un prodotto i capitoli 7 e 8 sono sempre completi, perché l'infrastruttura nasce da zero. Per un progetto su un sistema esistente descrivono solo ciò che cambia, con un rimando a ciò che resta invariato.

## Regole di contenuto

- **Solo il come.** Nessun comportamento visto dall'utente: per quello si rimanda al codice della story.
- **Nessun prezzo.** Le date compaiono solo nel capitolo Milestone.
- **Linguaggio tecnico**, senza semplificazioni: i lettori sono sviluppatori.
- **Nulla di inventato.** Ciò che non è stato deciso si scrive come domanda aperta per chi sviluppa.

## Dove si salva

Il documento vigente in `sistema/`. La versione condivisa o in bozza di un progetto in `01-kickoff/04-documentazione` (`05-documentazione` per un prodotto).

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere. Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

I nomi di tecnologie, file e parti del codice si scrivono come sono, anche se in inglese.

## Formato

Markdown, sia in bozza sia completo, perché è un documento di lavoro che gli sviluppatori aggiornano: `documento-tecnico-<cliente>-<sistema>-v<versione>.md`. Una versione con parti mancanti porta in prima riga "BOZZA" e ogni parte incompleta termina con un blocco "Cosa manca".

## Aggiornamenti

A ogni variazione, ticket o progetto che cambia la realizzazione:

- parti dall'elenco dei codici di story cambiati nel Manuale e aggiorna le sezioni che li citano;
- incrementa la versione e compila il capitolo 12 con l'origine della modifica;
- aggiungi al capitolo 9 le nuove decisioni.

## Controllo finale

1. Ogni funzionalità del Manuale compare nel capitolo 5 con il suo codice.
2. Nessun comportamento del Manuale è stato riscritto: solo citato.
3. Ogni caso particolare delle story ha un ramo di errore corrispondente.
4. Nessuna scelta tecnica non validata in una versione completa.
5. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
