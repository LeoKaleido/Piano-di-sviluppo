---
name: pacchetto-di-garanzia
description: Gestisce le segnalazioni del cliente dopo un rilascio, durante il periodo di garanzia. Controlla che la garanzia sia valida, divide le voci in bug, variazioni piccole, richieste estetiche e richieste fuori garanzia, prepara le issue in ClickUp e la gestione della capacità, e a fine periodo compila la sezione sulla garanzia del Report di progetto. Usala a ogni segnalazione su un lavoro pubblicato da poco e alla scadenza della garanzia.
---

# Pacchetto di garanzia

## A cosa serve

Dopo un rilascio il cliente può segnalare bug, piccole modifiche o richieste estetiche. Rimettere mano a qualcosa di pubblicato costa tempo: può togliere una persona a un progetto in corso o far rientrare la lavorazione negli sprint. La skill tratta questa possibilità come un imprevisto di capacità: classifica le voci, le trasforma in issue tracciabili e dice come trovare la capacità. A fine periodo scrive il rapporto che giustifica il tempo speso.

La skill propone. Le decisioni sulla capacità e sui prestiti restano a chi gestisce il team.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **La segnalazione.** Il testo del cliente su osTicket, oppure dove si trova. Se è una conversazione, la sintesi di `interpretazione-conversazioni`.
2. **La lavorazione originale.** Il codice, la data del rilascio e la durata pianificata, per calcolare la garanzia.
3. **Il Manuale del prodotto** del sistema, che decide cosa è un bug.
4. **Le fonti.** Lo stato delle issue della lavorazione in ClickUp, il Registro delle variazioni, il Documento tecnico e la Guida alla pubblicazione.
5. **Il momento.** Una segnalazione nuova, oppure la scadenza del periodo di garanzia.

## Segnalazione nuova

### 1. La garanzia è valida?

Si calcola così: dal rilascio in produzione, il maggiore tra 15 giorni e il 50% della durata pianificata (giorni lavorativi per un ticket, di calendario per progetti e prodotti). Se la milestone è andata in produzione prima, decorre da quel momento per le sue story. Se il periodo è scaduto, la segnalazione non è garanzia: bug o richiesta, è un ticket nuovo.

### 2. Dividere le voci

Ogni voce della segnalazione è una di queste:

- **Bug.** Il sistema fa una cosa diversa dal Manuale. Copre sempre. Si cita la story violata.
- **Variazione piccola.** Una modifica contenuta, al massimo 4 ore e una sola story. È coperta: la richiesta del cliente vale come conferma.
- **Richiesta estetica.** Un ritocco all'aspetto, contenuto negli stessi limiti. È coperta.
- **Ambiguità.** Il Manuale non è chiaro: non si interpreta, si pone al cliente una domanda puntuale.
- **Fuori garanzia.** Una richiesta più grande del limite. Non è garanzia: è un ticket nuovo, oppure una variazione media o grande se il lavoro è ancora aperto.

Leggi il Manuale per intero. Se il Manuale non c'è, vale ciò che è stato concordato per iscritto nei lavori precedenti. Davanti al dubbio tra bug e richiesta nuova, presentalo a chi decide con i riferimenti.

### 3. Le issue

Per ogni voce coperta, prepara una issue in ClickUp, segnata come garanzia e con il codice della lavorazione originale. Di tipo bug per un bug, di tipo variazione per una variazione piccola o una richiesta estetica. Per un progetto, nella List "Garanzia" del suo Folder: se non c'è ancora, creala. Per un ticket, un task nel Folder "Ticket". In entrambi i casi l'issue ha l'etichetta `garanzia` e il codice della lavorazione originale nel nome. Ogni issue ha descrizione, stima in ore, DoD base, urgenza. Mostra l'elenco al responsabile e creale solo dopo la sua conferma.

### 4. La capacità

- **Urgenza.** Si assegna sui fatti. Un pacchetto urgente usa il buffer di sprint. Uno non urgente usa la capacità dei ticket.
- **Chi.** Il responsabile del pacchetto è il responsabile della lavorazione originale, che può delegare. Se serve la persona che conosce la parte, proponi un prestito di ore a chi gestisce il team.
- **Effetto sul progetto da cui la persona è presa.** Se la persona lavora a un progetto, indica quante ore pesano sul margine della sua milestone e se una data già comunicata rischia di cambiare: in quel caso il cliente di quel progetto va avvisato.

### 5. Il cliente

Prepara la risposta al cliente: cosa è garanzia e verrà sistemato, cosa è fuori garanzia e come si tratta, le eventuali domande. Per il cliente niente tecnologie, nomi di file o ore.

Alla fine del pacchetto il cliente riceve una risposta breve nel ticket, e se il comportamento è cambiato si aggiornano i documenti (skill `allineamento-documenti`; `guida-alla-pubblicazione` se cambia il modo di pubblicare).

## Rapporto di fine periodo

Alla scadenza del periodo si compila la sezione sulla garanzia del Report di progetto (per un ticket, una voce nello storico). Per ogni voce: cosa era, ore spese (dal tracciamento del tempo in ClickUp) e causa:

- **Requisito frainteso.** Il Manuale o la proposta non erano chiari, o sono stati letti male.
- **Test mancante.** Un caso non provato.
- **Regressione.** Un'altra modifica ha rotto una cosa che funzionava.
- **Causa esterna.** Un sistema del cliente o un servizio esterno.
- **Altro.**

Per un progetto o un prodotto si usa la skill `report-di-progetto`. In coda: ore totali e un rapporto con le ore del lavoro, cosa si può imparare, e ciò che va corretto nei documenti o nelle prossime stime. Se il periodo è passato senza segnalazioni, il rapporto lo dice in una riga.

## Dove si salva

La risposta al cliente in `04-garanzia` della lavorazione. Il rapporto di fine periodo è una sezione del Report di progetto (per un ticket, una voce nello storico).

## Regole

- **Non decidere al posto di chi gestisce il team.** Prestiti e priorità si propongono.
- **Un bug lo decide il Manuale.** Non il gusto di chi legge.
- **Nulla di inventato.** Ore, date e causa vengono da ClickUp e dalle fonti.
- **Documento interno.** Il rapporto può contenere ore e nomi, ma non va al cliente.

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere. Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

## Controllo finale

1. La garanzia è stata calcolata con le date e la durata della lavorazione.
2. Ogni voce ha una classificazione e, se è coperta, una issue con il codice della lavorazione originale.
3. L'effetto sulla capacità, sul margine e sulle date è indicato.
4. La risposta al cliente non contiene tecnologie, nomi di file o ore.
5. Il rapporto ha, per ogni voce, ore e causa.
6. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
