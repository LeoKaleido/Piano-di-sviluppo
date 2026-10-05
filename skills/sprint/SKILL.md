---
name: sprint
description: Apre e chiude uno sprint. In apertura calcola la capacità reale e propone le issue, in chiusura registra le ore completate, controlla lo stato della milestone e produce Documento di sprint e Sprint report, entrambi interni. Usala a ogni inizio e fine sprint di un progetto o prodotto.
---

# Sprint

## A cosa serve

Gli sprint dividono il tempo, le milestone dividono il lavoro. Uno sprint non si definisce a monte: si pianifica quando inizia, pescando le issue dalla milestone in corso, nel capitolo Milestone e issue del Documento tecnico.

La skill ha due momenti:

- **Apertura**: capacità reale e scelta delle issue.
- **Chiusura**: cosa è stato completato, controllo della milestone, documenti.

Produce due documenti:

- **Documento di sprint**: interno, rapido. È uno strumento di analisi veloce, non un rapporto: deve stare in una pagina.
- **Sprint report**: poche righe interne, ricavate dal Documento di sprint. Non va al cliente: al cliente si presenta il Milestone report, con la skill `milestone-report`.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Cliente e sistema.**
2. **Momento.** Apertura o chiusura.
3. **Il Documento tecnico** (capitolo Milestone e issue), e il Documento di sprint precedente se esiste.
4. **Per l'apertura**: le ore realmente disponibili di ogni persona in questo sprint, tolte ferie, festività e altri impegni. Vanno chieste a ogni sprint: non si riusano quelle teoriche.
5. **Per la chiusura**: quali issue sono finite, quali no, le ore consumate, i ticket urgenti entrati, i materiali arrivati o in ritardo.

Non inventare ore, stati o assenze: ciò che non sai, chiedilo.

## Apertura

1. **Capacità.** Somma delle ore disponibili dichiarate. Togli il buffer di sprint, riservato ai ticket urgenti (20%). Il resto si pianifica per intero, tra le issue dei progetti e i ticket normali secondo la loro stima in ore. I ticket a tempo perso entrano solo con la capacità che avanza.
2. **Correzione sulla storia.** Dal secondo sprint in poi, confronta la capacità con le ore realmente completate negli sprint precedenti. Se il team ha completato sistematicamente meno del pianificato, pianifica su quel valore e non su quello teorico.
3. **Scelta delle issue.** Dalla milestone in corso, in quest'ordine: issue tornate dallo sprint precedente, issue di supporto e spike che sbloccano altre issue, poi le issue di story secondo le dipendenze. Non scegliere issue che dipendono da materiali del cliente non ancora arrivati.
4. **Tipo dello sprint.** Se l'obiettivo è fatto in prevalenza di issue di supporto, dichiaralo come sprint di supporto: il cliente saprà che non vedrà story nuove.
5. **Proposta.** Presenta le issue scelte con la somma delle ore, e fai confermare al responsabile e a chi sviluppa prima di scrivere il documento.

## Chiusura

1. **Esito delle issue.** Finite, non finite. Le issue non finite tornano nella milestone: lo sprint non si allunga.
2. **Ore completate.** La somma delle stime delle issue finite. È il dato che guida la pianificazione successiva.
3. **Imprevisti.** Assenze, ticket urgenti, blocchi, materiali in ritardo: cosa è successo e quante ore è costato.
4. **Controllo della milestone.** Ore rimanenti della milestone, buffer di milestone compreso, contro la capacità degli sprint rimanenti prima della data. L'esito è uno fra tre:
   - **In linea**: le ore rimanenti stanno nella capacità rimanente.
   - **A rischio**: ci stanno solo consumando il buffer di milestone.
   - **In ritardo**: non ci stanno nemmeno con il buffer di milestone.
5. **Segnalazioni.** Se l'esito è a rischio o in ritardo, oppure se per due sprint consecutivi le ore completate sono inferiori alle pianificate, segnala al responsabile che serve una riprogrammazione. La skill non la esegue: la segnala.

## Documento di sprint

Interno, Markdown, `sprint-<cliente>-<sistema>-S<N>.md`. In apertura si compilano le prime quattro voci, in chiusura le altre.

- **Sprint**: numero, periodo, milestone di riferimento, tipo.
- **Obiettivo**: cosa è concluso alla fine dello sprint, in una frase.
- **Capacità**: ore disponibili per persona, buffer di sprint, ore pianificabili.
- **Issue scelte**: codice, titolo, tipo, stima, assegnatario.
- **Issue finite e non finite.**
- **Ore pianificate e ore completate.**
- **Imprevisti.**
- **Stato della milestone**: l'esito del controllo, con i numeri.
- **Da portare al prossimo sprint.**

Niente prosa: elenchi brevi. Chi lo apre deve capire lo stato in un minuto.

## Sprint report

Interno, come testo breve. Serve al responsabile per tenere i contatti con il cliente e per preparare il Milestone report. Quattro voci, poche righe ciascuna:

- **Fatto**: le story completate, con codice e nome presi dal Manuale.
- **Prossimo**: cosa è previsto nello sprint successivo.
- **Stato della milestone**: in linea, a rischio o in ritardo, con la data prevista della demo.
- **Cosa serve dal cliente**: materiali in scadenza e risposte attese, con le date. Se manca qualcosa, il responsabile segue la regola "Il cliente non risponde" del Piano di progetto.

Regole dello sprint report:

- è interno: può contenere ore e nomi, ma non va inviato al cliente;
- se lo stato è a rischio o in ritardo, segnala che serve la skill `riprogrammazione`: è lei che prepara la comunicazione al cliente, con la proposta.

## Regole di scrittura

{{SCRITTURA}}

## Controllo finale

1. Le ore pianificate non superano la capacità al netto del buffer di sprint.
2. Nessuna issue scelta precede una sua dipendenza o attende un materiale non arrivato.
3. Il controllo della milestone riporta i numeri usati.
4. Lo sprint report è interno, breve, e non è stato inviato al cliente.
5. {{CONTROLLO}}
