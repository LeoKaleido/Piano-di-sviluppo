---
name: history-and-decision
description: Aggiunge voci a History and decision di una lavorazione (file history-and-decision.md, nato vuoto all'inizio del lavoro). Copre tutto ciò che è storia e tutto ciò che è stato deciso: fatti qualunque (conferme, imprevisti, ritardi, rilasci), decisioni (chi, perché, alternative, effetto), variazioni chieste dal cliente (categoria, impatto, documenti da aggiornare), riprogrammazioni (imprevisti sui tempi, ricalcolo, leve) e segnalazioni in garanzia (validità, classificazione, issue, capacità, rapporto di fine periodo). Usala a mano ogni volta che succede o si decide qualcosa che conta per il lavoro.
---

# History and decision della lavorazione

## A cosa serve

Ogni lavorazione ha un solo file di storia, `history-and-decision.md`, nella cartella `log`: non esiste un file delle decisioni a parte. Nasce vuoto all'inizio del lavoro e si popola con questa skill, una voce alla volta. È l'unico posto della storia di una lavorazione: variazioni, riprogrammazioni, esiti di prove e collaudi, piano di rilascio concordato, segnalazioni in garanzia, Stato di partenza e decisioni sono voci di History and decision, non documenti né registri a parte. Serve a ricostruire a fine lavoro che cosa è successo, quando e che cosa si è deciso, per scrivere il Report di progetto e per usare questi dati nelle stime future.

Le skill `kickoff`, `kickoff-minore`, `prova-su-staging` e `collaudo-e-rilascio` scrivono qui le loro voci con la forma descritta sotto.

La skill propone e prepara, non decide. Dà forma a ciò che chi la usa le racconta, calcola ciò che è calcolabile e aggiunge in fondo al file. I messaggi per il cliente che nascono da una voce si preparano qui e si salvano in `source`.

## Quale operazione

Ci sono cinque operazioni. Si sceglie dalla situazione:

- **Voce semplice.** Un fatto che conta, senza analisi: conferma, richiesta, imprevisto, ritardo del cliente, blocco, cambio di persone, esito di prova o collaudo, rilascio.
- **Decisione.** Una scelta che cambia il lavoro: una leva scelta per una milestone in ritardo, un compromesso concordato con il cliente, una scelta tecnica rilevante, un prestito di ore, una divisione di una story, un rinvio, una rinuncia, una variazione accettata o rifiutata. Si registra anche quando nasce da un'altra voce (la leva di una riprogrammazione, l'approvazione di una variazione): la voce che l'ha causata la cita.
- **Variazione.** Il cliente chiede, dopo la conferma del Manuale del prodotto, qualcosa che i documenti confermati non prevedono.
- **Riprogrammazione.** Un imprevisto tocca i tempi: milestone a rischio o in ritardo, assenza lunga, sprint non completato, lavorazione minore urgente oltre il buffer, ritardo del cliente.
- **Garanzia.** Una segnalazione del cliente su un lavoro pubblicato da poco, oppure la scadenza del periodo di garanzia.

## Avvio comune

Chiedi solo ciò che non è già stato detto.

1. **La lavorazione**: codice, cliente, nome, e dove si trova `history-and-decision.md` (in `log`). Se non c'è, crealo vuoto con la sola intestazione.
2. **Cosa è successo**, a parole di chi lo racconta.
3. **Quando.** Se non è detto, è oggi.
4. **In quale fase o sottofase.**
5. **I riferimenti**: issue, variazione, decisione (DEC1), documento, conversazione.
6. Per una decisione, anche: **chi ha deciso**, per ruolo (referente del cliente, responsabile, chi gestisce il team, CEO; una decisione del cliente conta solo se è del referente), **il motivo** e **le alternative scartate**, se ci sono.

Non inventare durate, ore o disponibilità: ciò che non sai, chiedilo o segnalo "Da valutare".

## Formato di una voce

Il file è diviso in gruppi, uno per fase, nell'ordine in cui il lavoro procede: per progetti e prodotti Kickoff, Sviluppo, Rilascio, Garanzia; per le lavorazioni minori Analisi, Sviluppo, Rilascio, Garanzia. Un gruppo è un titolo di secondo livello ("## Sviluppo"), creato quando arriva la prima voce della fase. Dentro un gruppo le voci sono in ordine di data. Ogni voce è un titolo di terzo livello, con la data e il tipo, seguito da campi etichettati:

```
### 2027-03-22, Variazione V1
- **Fase.** sviluppo
- **Cosa.** Franco approva per iscritto l'SMS di promemoria.
- **Stato.** Approvata
- **Effetto.** Manuale v1.1, Documento tecnico v1.2, Piano dei SAL v2.
- **Riferimenti.** DEC10, source/2027-03-22-approvazione-variazione.md
- **Dettagli.**
  - Solo se servono, come elenco.
```

Campi:

- **Fase.** La fase o sottofase (valutazione, stima, proposta, prototipo e design, documentazione, collaudo, preparazione, pubblicazione, chiusura; in sviluppo, la milestone o lo sprint).
- **Cosa.** Che cosa è successo, a parole semplici. Per una decisione, la decisione in una o due frasi.
- **Effetto.** In ore, giorni di slittamento, milestone, documenti e issue toccati; se non è noto, "Da valutare".
- **Riferimenti.** Issue, variazione, decisione, documento, conversazione. I messaggi in `source` si citano con il percorso.
- **Stato.** Solo per le variazioni, scritto per esteso (In valutazione, In attesa del cliente, Approvata, Rifiutata, Chiusa). Lo stato di una variazione è quello dell'ultima voce che porta il suo codice: per sapere quali sono aperte si cerca "Variazione V" e si legge l'ultima voce di ogni codice.
- **Chi ha deciso, Motivo, Alternative scartate.** Solo per le decisioni. Alternative: "Nessuna" se non ce ne sono.
- **Dettagli.** Facoltativo, un elenco: lo Stato di partenza, il ricalcolo e le leve di una riprogrammazione, i passi tecnici di un rilascio, l'esito per story di una prova. Per una lavorazione minore, la voce di Rilascio alla chiusura porta qui l'effetto sui documenti del sistema (story del Manuale e capitoli del Documento tecnico superati o incompleti, con i codici), e in Cosa la versione dei documenti a cui la lavorazione minore si riferisce (per esempio "Manuale v1.3, Documento tecnico v1.2"); la Scheda di intervento è il piano e non riporta ciò che accade dopo.

Il tipo, nel titolo, è sempre una di queste etichette, scritta allo stesso modo, così il file si filtra con una ricerca (per esempio tutte le voci "Variazione"):

- **Fase completata.** La chiusura di una fase o sottofase.
- **Conferma.** Una conferma del cliente, a voce o scritta, con il riepilogo.
- **Richiesta.** Una richiesta del cliente, anche se poi rifiutata.
- **Decisione.** Con codice fisso (DEC1, DEC2) e il titolo: "### 2026-10-13, Decisione DEC1: Responsabile e categoria".
- **Variazione.** Con codice fisso (V1, V2), categoria, impatto, stato, documenti da aggiornare.
- **Riprogrammazione.** Con ricalcolo e leve.
- **Imprevisto.** Assenza, malattia, lavorazione minore urgente, blocco tecnico.
- **Ritardo del cliente.** Con i giorni di slittamento.
- **Blocco.** Una dipendenza che ferma un'issue.
- **Persone.** Una persona che entra, esce o viene presa in prestito.
- **Prova o collaudo.** Cosa è stato provato, esito per story, difetti, conferma.
- **Stato di partenza.** La fotografia del sistema prima di un progetto o di un prodotto, con la stima precisa.
- **Rilascio.** Una pubblicazione, anche parziale, e il piano di rilascio concordato.
- **Garanzia.** Una segnalazione in garanzia, con la classificazione e le ore.
- **Altro.**

I codici (V1, DEC1) sono fissi: non cambiano e non si riutilizzano.

Regole per aggiungere:

- In fondo al file, dentro il gruppo della fase corrente (o in un gruppo nuovo, se la fase è cambiata). Le voci già scritte non si modificano: se un fatto o una decisione vanno corretti, si aggiunge una voce che cita la precedente.
- Non inventare ciò che manca: lascia "Da valutare" o chiedilo.
- Non riportare dati personali non pertinenti al lavoro.
- Si possono dare più eventi insieme: ognuno diventa una voce.

## Operazione: variazione

Dopo la conferma del Manuale, tutto ciò che il cliente chiede e che i documenti confermati non prevedono è una variazione. Prima della conferma è una modifica: nuova versione numerata, nessuna voce in History and decision, e la skill si ferma qui. Senza una procedura le variazioni entrano a voce, si accumulano e spostano le date senza che nessuno l'abbia deciso.

Fonti da chiedere: la richiesta del cliente come è arrivata; i documenti confermati (Proposta, Manuale, Documento tecnico con il Piano delle milestone, wireframe e mockup se la richiesta tocca l'interfaccia); lo stato delle issue toccate in ClickUp (BACKLOG, PLANNED, IN PROGRESS, TESTING, COMPLETED); le voci "variazione" già presenti in History and decision.

**Passo 1: è una variazione?** Confronta la richiesta con il Manuale.

- **Bug**: il sistema fa una cosa diversa dal Manuale. Non è una variazione: si corregge.
- **Ambiguità**: il Manuale non è chiaro. Si chiarisce con il cliente e si aggiorna il Manuale. Diventa variazione solo se il chiarimento comporta lavoro non previsto.
- **Modifica**: il documento non è ancora confermato. Non è una variazione.
- **Variazione**: il Manuale confermato non lo prevede, o prevede altro.

Cambiare un wireframe o un mockup già approvato è sempre una variazione.

**Passo 2: categoria.**

- **Piccola**: fino a 4 ore, una sola story, nessuna data cambia.
- **Media**: oltre 4 ore, oppure più story o lavoro già accettato, ma dentro una sola milestone. Sono medie anche il cambio di priorità tra milestone e, in un prodotto, lo spostamento di una story tra rilasci.
- **Grande**: cambia ciò che la proposta aveva stabilito, oppure il contenuto di story in più milestone.

La categoria la proponi, motivandola con il criterio; la decide il responsabile. Se la stima è vicina alle 4 ore, segnalalo.

**Passo 3: impatto.**

- **Story toccate**: codici modificati, aggiunti, rimossi.
- **Issue toccate**, divise per stato. Le issue già iniziate o completate non si cancellano: passano a CANCELLED, e il lavoro già svolto resta dovuto.
- **Ore**: nuove ore e ore di lavoro superato. Le stime vanno validate da chi sviluppa: fino ad allora sono marcate "[Stima da validare]".
- **Buffer di milestone**: quanto ne resta.
- **Date**: quali date di consegna cambiano e di quanto.
- **Altri lavori**: se la variazione tocca i documenti di altri lavori, serve l'allineamento dei documenti.

**Passo 4: come si gestisce.**

- **Piccola**: conferma scritta del cliente, assorbita dal buffer di milestone. Si aggiornano il Manuale e il capitolo Piano delle milestone del Documento tecnico.
- **Media**: stima dell'impatto e approvazione scritta del cliente prima di lavorarci. Si aggiornano Manuale, Documento tecnico e, se cambia una data, il Piano dei SAL.
- **Grande**: si torna alla proposta: proposta integrativa, conferma del cliente, nuova documentazione. Si aggiornano tutti i documenti.

Una variazione non entra mai nello sprint in corso: entra in uno sprint successivo, dopo l'approvazione, come issue di tipo variazione in BACKLOG nella List della milestone. Le variazioni piccole possono consumare al massimo metà del buffer di milestone: se è già consumato, una nuova variazione piccola non è più assorbibile e si tratta come media.

**Cosa produci.**

1. **La voce**, tipo "Variazione": codice fisso (V1, V2), data, chi l'ha chiesta; la richiesta con le parole del cliente; categoria e criterio; impatto (story, issue, ore, date); Stato; documenti da aggiornare. L'approvazione o il rifiuto del cliente è anche una voce Decisione.
2. **La comunicazione al cliente**: testo comprensibile a chi non è del settore, con cosa è stato chiesto, cosa comporta su consegne e date, cosa deve confermare. Per una variazione che tocca lavoro già fatto dichiara che quel lavoro resta dovuto. Nessun prezzo: per una variazione media o grande indica solo che l'impatto economico è da definire. Si salva in `source`.
3. **L'elenco dei documenti da aggiornare**, con la skill da usare per ciascuno.

**Chiusura.** Una variazione è chiusa solo quando tutti i documenti indicati sono aggiornati. Quando viene comunicato, si aggiunge una voce che cita il codice (V1) con Stato: Chiusa. Una variazione approvata ma con documenti non aggiornati resta aperta e va segnalata.

## Operazione: riprogrammazione

Gli imprevisti sono tanti, ma ognuno ha già una risposta decisa nei piani. Questa operazione riconosce l'imprevisto, applica la risposta prevista e, quando una data è in pericolo, presenta le leve con il loro effetto, così che chi decide abbia i numeri davanti. Prepara la decisione, non la prende. Una variazione chiesta dal cliente non passa da qui.

Fonti da chiedere: il Documento tecnico (capitolo Piano delle milestone), l'ultima Nota di sprint, la capacità residua (ore disponibili di ogni persona negli sprint rimanenti della milestone).

**Passo 1: riconoscere l'imprevisto.**

Persone:

- **Ferie programmate**: già nel calendario, nessuna riprogrammazione.
- **Ferie chieste a lavoro avviato**: si valuta l'effetto sulla milestone prima di approvarle.
- **Malattia o assenza breve**: le issue PLANNED meno prioritarie escono dallo sprint e tornano in BACKLOG; quelle IN PROGRESS della persona tornano a PLANNED con un commento.
- **Assenza lunga o uscita dal team**: passaggio di consegne su issue e documenti, nuova pianificazione della milestone.
- **Nuova persona nel team**: capacità ridotta nel suo primo sprint.
- **Una persona è chiamata per una garanzia**: prestito di ore (vedi l'operazione garanzia). Le ore pesano sul margine della milestone da cui la persona è presa.
- **Festività non considerata**: si corregge il calendario e si ricalcolano le date.

Tempi:

- **Sprint non completato**: le issue non COMPLETED passano allo sprint successivo con la priorità, lo sprint non si allunga.
- **Stime sbagliate**: a ogni chiusura chi sviluppa rivaluta le ore delle issue non COMPLETED, e la rivalutazione alimenta il margine della milestone.
- **Lavorazioni minori urgenti oltre il buffer di sprint**: le ore vanno sulla lavorazione minore, escono dallo sprint le issue meno prioritarie.
- **Blocco tecnico o di un servizio esterno**: issue di tipo spike a tempo limitato, poi nuova stima.

Cliente:

- **Materiali o risposte in ritardo**: il progetto non è mai fermo. Le issue che ne dipendono escono dallo sprint, si sposta altro lavoro non dipendente, le date della parte bloccata slittano degli stessi giorni.
- **Progetto sospeso dal cliente**: si registra lo stato raggiunto. La ripresa richiede una nuova pianificazione.

Se l'imprevisto non rientra in nessun caso, dillo: descrivi la situazione e proponi il caso più vicino, senza forzare.

**Quale buffer si usa.**

- **Buffer di sprint**: il 20% della capacità di ogni persona in ogni sprint, solo per i lavorazioni minori urgenti entrati nello sprint. Se a metà sprint non è stato usato, il responsabile può anticipare issue da BACKLOG a PLANNED.
- **Buffer di milestone**: le ore aggiunte alla milestone (20%, 30% con una sola persona). Per stime sbagliate, assenze brevi, urgenze oltre il buffer di sprint e variazioni piccole (al massimo metà del buffer).

Una lavorazione minore urgente usa prima il buffer di sprint; oltre quello escono dallo sprint le issue meno prioritarie e le ore riducono il margine.

**Passo 2: ricalcolo.** Rifai il controllo della milestone con i nuovi dati. Margine = capacità rimanente fino alla data della prova, al netto del buffer di sprint, meno le ore rimanenti (stime delle issue non COMPLETED, rivalutate). Mostra i numeri usati.

- **In linea**: il margine è almeno metà del buffer di milestone iniziale. Si aggiorna il piano, nulla al cliente.
- **A rischio**: il margine è tra zero e metà del buffer iniziale. Si segnala al responsabile. Se nessuna data già comunicata cambia, il cliente non si avvisa; se cambia, è avvisato subito.
- **In ritardo**: il margine è sotto zero. Servono le leve.

Controlla anche le milestone successive: uno slittamento può propagarsi.

**Passo 3: le leve.** Quando la milestone è in ritardo, presenta le leve con l'effetto di ciascuna, calcolato:

- **Spostare una story** a una milestone successiva (o, in un prodotto, al rilascio successivo). Indica le candidate (non iniziate, senza story che ne dipendono) e le ore che ciascuna libera.
- **Spostare la data.** Indica la nuova data e l'effetto sulle milestone successive.
- **Aggiungere ore.** Quante ne servono ed entro quando; una persona nuova rende meno nel primo sprint.

Spostare una story o una data si decide con il cliente; aggiungere ore lo decide chi gestisce il team, con il CEO se serve. Presenta le leve senza sceglierne una; puoi indicare quella con l'effetto minore sul cliente, dichiarando che è una valutazione. Quando lo slittamento nasce da un ritardo del cliente non servono leve: le date slittano degli stessi giorni.

**Passo 4: dopo la decisione.**

1. Capitolo Piano delle milestone del Documento tecnico: nuova versione, con le modifiche e la loro origine. I codici non cambiano; le issue toccate si aggiornano in ClickUp.
2. Calendario di progetto aggiornato, se l'imprevisto lo riguarda.
3. Piano dei SAL rigenerato, se una data o il contenuto di un SAL sono cambiati.
4. Comunicazione al cliente, solo se cambia una data o il contenuto di una consegna.

**Cosa produci.** La voce di tipo "Riprogrammazione": imprevisto, ricalcolo con i numeri, leve valutate (nei Dettagli). La scelta della leva è una voce Decisione a parte. La comunicazione al cliente, breve: cosa cambia (quale consegna, quale nuova data o quale story si sposta), la proposta con le alternative quando decide il cliente, cosa deve fare ed entro quando. Va inviata subito; non racconta fatti interni (malattie, nomi, ticket di altri clienti, errori di stima); se lo slittamento nasce da un ritardo del cliente lo dice con i fatti (quale materiale, quale data concordata, di quanti giorni slitta); nessun prezzo. Si salva in `source`.

## Operazione: garanzia

Dopo un rilascio il cliente può segnalare bug, piccole modifiche o richieste estetiche. Rimettere mano a qualcosa di pubblicato costa tempo: l'operazione tratta questa possibilità come un imprevisto di capacità, classifica le voci, le trasforma in issue tracciabili e dice come trovare la capacità. Le decisioni sulla capacità e sui prestiti restano a chi gestisce il team.

Fonti da chiedere: la segnalazione (testo su osTicket, oppure la sintesi di `interpretazione-conversazioni`; si salva in `source`); la lavorazione originale (codice, data del rilascio, durata pianificata); il Manuale del prodotto, che decide cosa è un bug; la cartella `source` per intero; le issue della lavorazione in ClickUp; History and decision; il Documento tecnico e il capitolo Pubblicazione.

**La garanzia è valida?** Dal rilascio in produzione, il maggiore tra 15 giorni e il 50% della durata pianificata (giorni lavorativi per una lavorazione minore, di calendario per progetti e prodotti). Se la milestone è andata in produzione prima, decorre da quel momento per le sue story. Se il periodo è scaduto non è garanzia: bug o richiesta, è un ticket nuovo.

**Dividere le voci.** Ogni voce della segnalazione è una di queste:

- **Bug.** Il sistema fa una cosa diversa dal Manuale. Copre sempre; si cita la story violata.
- **Variazione piccola.** Al massimo 4 ore e una sola story. È coperta: la richiesta del cliente vale come conferma.
- **Richiesta estetica.** Un ritocco all'aspetto, negli stessi limiti. È coperta.
- **Ambiguità.** Il Manuale non è chiaro: non si interpreta, si pone al cliente una domanda puntuale.
- **Fuori garanzia.** Più grande del limite: lavorazione minore nuova, oppure variazione media o grande se il lavoro è ancora aperto.

Leggi il Manuale per intero. Se non c'è, vale ciò che è stato concordato per iscritto nei lavori precedenti. Davanti al dubbio tra bug e richiesta nuova, presentalo a chi decide con i riferimenti.

**Le issue.** Per ogni voce coperta, una issue in ClickUp con etichetta `garanzia` e il codice della lavorazione originale nel nome: tipo bug per un bug, tipo variazione per una variazione piccola o richiesta estetica. Per un progetto, nella List "Garanzia" del suo Folder (creala se manca); per una lavorazione minore, un task nel Folder "Lavorazioni minori". Ogni issue ha descrizione, stima in ore, DoD base, urgenza. Mostra l'elenco al responsabile e crea le issue solo dopo la sua conferma.

**La capacità.**

- **Urgenza**: sui fatti. Un pacchetto urgente usa il buffer di sprint, uno non urgente la capacità delle lavorazioni minori.
- **Chi**: il responsabile del pacchetto è il responsabile della lavorazione originale, che può delegare. Se serve chi conosce la parte, proponi a chi gestisce il team un prestito di ore.
- **Effetto sul progetto da cui la persona è presa**: quante ore pesano sul margine della sua milestone, e se una data già comunicata rischia di cambiare (in quel caso il cliente di quel progetto va avvisato).

**Il cliente.** Prepara la risposta: cosa è garanzia e verrà sistemato, cosa è fuori garanzia e come si tratta, le eventuali domande. Niente tecnologie, nomi di file o ore. Si salva in `source`. Se il comportamento è cambiato: per una lavorazione minore, la voce di Garanzia dice l'effetto sui documenti del sistema e si aggiorna la riga dell'indice `lavorazioni-minori-chiuse.md` (la Scheda non cambia: è il piano); per un progetto o un prodotto, si aggiornano i documenti (skill `allineamento-documenti`; `documento-tecnico` se cambia il modo di pubblicare).

**Cosa produci.** Una voce di tipo "Garanzia" per ogni segnalazione, con classificazione, issue e ore.

**Rapporto di fine periodo.** Alla scadenza della garanzia si compila la sezione sulla garanzia del Report di progetto (per una lavorazione minore, una voce di tipo "Garanzia"). Per ogni voce: cosa era, ore spese (dal tracciamento del tempo in ClickUp) e causa:

- **Requisito frainteso.** Il Manuale o la proposta non erano chiari, o sono stati letti male.
- **Test mancante.** Un caso non provato.
- **Regressione.** Un'altra modifica ha rotto una cosa che funzionava.
- **Causa esterna.** Un sistema del cliente o un servizio esterno.
- **Altro.**

In coda: ore totali e un rapporto con le ore del lavoro, cosa si può imparare, ciò che va corretto nei documenti o nelle prossime stime. Se il periodo è passato senza segnalazioni, il rapporto lo dice in una riga. Per un progetto o un prodotto si usa la skill `report-di-progetto`. Il rapporto è interno: può contenere ore e nomi, non va al cliente.

## Regole

- **Non decidere al posto di chi decide.** Categoria, leve, prestiti e priorità si propongono.
- **Un bug lo decide il Manuale.** Non il gusto di chi legge.
- **Nulla di inventato.** Ore, date e cause vengono da ClickUp e dalle fonti.
- **Non rimettere in discussione una voce scritta.** Si aggiunge una voce nuova.

## Dove si salva

La voce in `history-and-decision.md` (in `log`). I messaggi per il cliente (comunicazione di variazione, di riprogrammazione, risposta di garanzia) in `source`, con la data nel nome, senza PDF.

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere (unica eccezione: le tabelle del Piano dei SAL). Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

## Controllo finale

1. Ogni voce ha il titolo con data e tipo (una delle etichette), nel gruppo della sua fase, e i campi Fase, Cosa, Effetto, Riferimenti; l'effetto è dichiarato o segnato "Da valutare". Nessuna voce precedente è stata modificata.
   Una decisione ha anche codice nuovo, Chi ha deciso, Motivo e Alternative scartate; una variazione ha codice e Stato.
2. Variazione: la richiesta è stata confrontata con il Manuale; la categoria è motivata da un criterio; l'impatto distingue le issue per stato e nessuna issue già iniziata è stata cancellata; la comunicazione non contiene ore interne, tecnologie o prezzi.
3. Riprogrammazione: l'imprevisto è ricondotto a un caso previsto o dichiarato fuori dai casi; il ricalcolo riporta i numeri e considera le milestone successive; ogni leva ha il suo effetto e nessuna è scelta al posto di chi decide; la comunicazione esiste solo se cambia una data o una consegna e non contiene fatti interni.
4. Garanzia: la garanzia è calcolata con date e durata; ogni voce è classificata e, se coperta, ha una issue con il codice della lavorazione originale; l'effetto su capacità, margine e date è indicato; la risposta non contiene tecnologie, nomi di file o ore; il rapporto ha per ogni voce ore e causa.
5. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
