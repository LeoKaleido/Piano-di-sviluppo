---
name: variazione
description: Gestisce una variazione chiesta dal cliente a lavoro avviato. La categorizza come piccola, media o grande, stima l'impatto, aggiorna il Registro delle variazioni e indica i documenti da aggiornare. Usala ogni volta che il cliente chiede qualcosa che i documenti approvati non prevedono.
---

# Variazione

## A cosa serve

Dopo la conferma dei documenti (per un progetto, la conferma del Manuale del prodotto), tutto ciò che il cliente chiede e che quei documenti non prevedono è una variazione. Prima della conferma è una modifica: si recepisce con una nuova versione numerata, non entra nel Registro delle variazioni e non passa da qui. Senza una procedura, le variazioni entrano a voce, si accumulano e spostano le date senza che nessuno l'abbia deciso.

La skill fa quattro cose: verifica che sia davvero una variazione, la categorizza, ne stima l'impatto e prepara ciò che serve per farla approvare. Non modifica i documenti del progetto: indica quali vanno aggiornati.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Cliente e sistema.**
2. **La richiesta del cliente**, come è arrivata.
3. **I documenti confermati**: Proposta di soluzione, Manuale del prodotto, Documento tecnico (capitolo Milestone e issue), e wireframe e mockup se la richiesta tocca l'interfaccia.
4. **Lo stato del lavoro**: quali issue toccate sono da fare, in corso, finite o già accettate.
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
- **Grande**: cambia ciò che la proposta aveva stabilito, oppure tocca più milestone.

La categoria la proponi tu, motivandola con il criterio. La decide il responsabile. Se la stima è vicina alla soglia delle 4 ore, segnalalo.

## Passo 3: impatto

- **Story toccate**: codici modificati, aggiunti, rimossi.
- **Issue toccate**, divise per stato. Le issue in corso, finite o accettate non si cancellano: passano a Superata, e il lavoro già svolto resta dovuto.
- **Ore**: nuove ore necessarie e ore di lavoro superato. Le stime vanno validate da chi sviluppa: fino ad allora sono marcate con "[Stima da validare]".
- **Buffer di milestone**: quanto ne resta dopo la variazione.
- **Date**: quali date di consegna cambiano e di quanto. Se nessuna cambia, dillo.
- **Altri lavori**: se la variazione tocca documenti di altri progetti o ticket, segnala che serve l'allineamento dei documenti.

## Passo 4: come si gestisce

- **Piccola**: conferma scritta del cliente. È assorbita dal buffer di milestone. Si aggiorna il Manuale del prodotto.
- **Media**: stima dell'impatto e approvazione scritta del cliente prima di lavorarci. Può spostare una story o una data. Si aggiornano Manuale del prodotto, Documento tecnico (capitolo Milestone e issue), Piano dei SAL se cambia una data.
- **Grande**: si torna alla proposta. Serve una proposta integrativa, la conferma del cliente e una nuova documentazione di progetto. Si aggiornano tutti i documenti.

Una variazione non entra mai nello sprint in corso: entra in uno sprint successivo, dopo l'approvazione.

Le variazioni piccole possono consumare al massimo metà del buffer di milestone. Se è già stato consumato da variazioni piccole precedenti, segnalalo: una nuova variazione piccola non è più assorbibile e va trattata come media.

## Cosa produci

**1. Voce del Registro delle variazioni.** Il registro è un file Markdown per sistema, `registro-variazioni-<cliente>-<sistema>.md`. Se non esiste, crealo. Ogni voce contiene:

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

## Regole di scrittura

{{SCRITTURA}}

## Controllo finale

1. La richiesta è stata confrontata con il Manuale prima di essere trattata come variazione.
2. La categoria è motivata da un criterio.
3. L'impatto distingue le issue per stato, e nessuna issue già iniziata è stata cancellata.
4. La comunicazione al cliente non contiene ore interne, tecnologie o prezzi.
5. {{CONTROLLO}}
