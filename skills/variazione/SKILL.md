---
name: variazione
description: Gestisce una variazione chiesta dal cliente a lavoro avviato. La categorizza come piccola, media o grande, stima l'impatto, aggiorna il Registro delle variazioni e indica i documenti da aggiornare. Usala ogni volta che il cliente chiede qualcosa che i documenti approvati non prevedono.
---

# Variazione

## A cosa serve

Dopo la conferma del Manuale del prodotto, tutto ciò che il cliente chiede e che quei documenti non prevedono è una variazione. Prima della conferma è una modifica: si recepisce con una nuova versione numerata, non entra nel Registro delle variazioni e non passa da qui. Senza una procedura, le variazioni entrano a voce, si accumulano e spostano le date senza che nessuno l'abbia deciso.

La skill fa quattro cose: verifica che sia davvero una variazione, la categorizza, ne stima l'impatto e prepara ciò che serve per farla approvare. Non modifica i documenti del progetto: indica quali vanno aggiornati.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Cliente e sistema.**
2. **La richiesta del cliente**, come è arrivata.
3. **I documenti confermati**: Proposta di soluzione, Manuale del prodotto, Documento tecnico (capitolo Milestone), e wireframe e mockup se la richiesta tocca l'interfaccia.
4. **Lo stato del lavoro**: quali issue toccate sono in BACKLOG, PLANNED, IN PROGRESS, TESTING o COMPLETED, lette da ClickUp.
5. **Il Registro delle variazioni**, se esiste.

## Passo 1: è una variazione?

Confronta la richiesta con il Manuale del prodotto.

- **Bug**: il sistema fa una cosa diversa dal Manuale. Non è una variazione: si corregge.
- **Ambiguità**: il Manuale non è chiaro. Si chiarisce con il cliente e si aggiorna il Manuale. Diventa una variazione solo se il chiarimento comporta lavoro non previsto.
- **Modifica**: il documento non è ancora confermato dal cliente. Non è una variazione: nuova versione numerata, fuori dal Registro. Dillo e fermati.
- **Variazione**: il Manuale confermato non lo prevede, o prevede altro.

Cambiare un wireframe o un mockup già approvato è sempre una variazione. Se la richiesta non è una variazione, dillo e fermati lì.

## Passo 2: categoria

- **Piccola**: fino a 4 ore, tocca una sola story, nessuna data cambia.
- **Media**: oltre 4 ore, oppure tocca più story o lavoro già accettato, ma resta dentro una sola milestone. Sono medie anche il cambio di priorità tra milestone e, in un prodotto, lo spostamento di una story tra rilasci.
- **Grande**: cambia ciò che la proposta aveva stabilito, oppure cambia il contenuto di story in più milestone.

La categoria la proponi tu, motivandola con il criterio. La decide il responsabile. Se la stima è vicina alla soglia delle 4 ore, segnalalo.

## Passo 3: impatto

- **Story toccate**: codici modificati, aggiunti, rimossi.
- **Issue toccate**, divise per stato. Le issue già iniziate o completate non si cancellano: passano a CANCELLED, e il lavoro già svolto resta dovuto.
- **Ore**: nuove ore necessarie e ore di lavoro superato. Le stime vanno validate da chi sviluppa: fino ad allora sono marcate con "[Stima da validare]".
- **Buffer di milestone**: quanto ne resta dopo la variazione.
- **Date**: quali date di consegna cambiano e di quanto. Se nessuna cambia, dillo.
- **Altri lavori**: se la variazione tocca documenti di altri progetti o ticket, segnala che serve l'allineamento dei documenti.

## Passo 4: come si gestisce

- **Piccola**: conferma scritta del cliente. È assorbita dal buffer di milestone. Si aggiornano il Manuale del prodotto e il capitolo Milestone del Documento tecnico.
- **Media**: stima dell'impatto e approvazione scritta del cliente prima di lavorarci. Può spostare una story o una data. Si aggiornano Manuale del prodotto, Documento tecnico (capitolo Milestone), Piano dei SAL se cambia una data.
- **Grande**: si torna alla proposta. Serve una proposta integrativa, la conferma del cliente e una nuova documentazione di progetto. Si aggiornano tutti i documenti.

Una variazione non entra mai nello sprint in corso: entra in uno sprint successivo, dopo l'approvazione. L'issue di tipo variazione si crea in ClickUp, in BACKLOG, nella List della milestone interessata.

Le variazioni piccole possono consumare al massimo metà del buffer di milestone. Se è già stato consumato da variazioni piccole precedenti, segnalalo: una nuova variazione piccola non è più assorbibile e va trattata come media.

## Cosa produci

**1. Voce del Registro delle variazioni.** Il registro è un file Markdown per lavorazione, `registro-variazioni.md`, nella cartella `02-sviluppo` della lavorazione. Se non esiste, crealo. Ogni voce contiene:

- codice fisso (V1, V2), data, chi l'ha chiesta;
- la richiesta, con le parole del cliente;
- categoria e criterio;
- impatto: story, issue, ore, date;
- stato: In valutazione, In attesa del cliente, Approvata, Rifiutata, Chiusa;
- documenti da aggiornare, con una spunta per ciascuno.

**2. Comunicazione al cliente.** Testo da inviare, comprensibile a chi non è del settore: cosa è stato chiesto, cosa comporta su consegne e date, cosa deve confermare. Per una variazione che tocca lavoro già fatto, dichiara che quel lavoro resta dovuto. Nessun prezzo: gli importi sono seguiti a parte, quindi indica solo che la variazione ha un impatto economico da definire, quando è media o grande.

**3. Elenco dei documenti da aggiornare**, con la skill da usare per ciascuno.

## Chiusura della variazione

Una variazione è chiusa solo quando tutti i documenti indicati sono aggiornati. Quando viene comunicato che gli aggiornamenti sono fatti, spunta le voci nel registro e porta lo stato a Chiusa. Una variazione approvata ma con documenti non aggiornati resta aperta, e va segnalata.

## Dove si salva

Il registro e le comunicazioni in `02-sviluppo` della lavorazione.

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere. Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

## Controllo finale

1. La richiesta è stata confrontata con il Manuale prima di essere trattata come variazione.
2. La categoria è motivata da un criterio.
3. L'impatto distingue le issue per stato, e nessuna issue già iniziata è stata cancellata.
4. La comunicazione al cliente non contiene ore interne, tecnologie o prezzi.
5. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
