---
name: milestone-report
description: Scrive il Milestone report per il cliente, il documento che accompagna la demo sullo staging a ogni milestone: story consegnate, esito della demo, stato della milestone successiva, date aggiornate e ciò che serve dal cliente. Usala a ogni milestone di un progetto o prodotto, insieme alla demo.
---

# Milestone report

## A cosa serve

Il Milestone report è l'unico documento periodico che il cliente riceve durante lo sviluppo. Si presenta insieme alla demo sullo staging, a ogni milestone, e dice cosa è stato consegnato, cosa è stato accettato, cosa viene dopo e cosa serve dal cliente.

Non sostituisce lo sprint report, che è interno e resta: da lì la skill ricava lo stato.

Il cliente accetta in modo esplicito. Il silenzio non vale come accettazione di una demo.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Cliente e sistema.**
2. **La milestone.** Codice, nome e il SAL corrispondente per il cliente.
3. **Le fonti.** Il Documento tecnico (capitolo Milestone e issue), il Piano dei SAL, l'ultimo Documento di sprint e Sprint report, il Manuale del prodotto con i criteri di accettazione, il Registro delle variazioni, gli appunti della demo o la scaletta preparata con la skill `demo`.
4. **Il momento.** Prima della demo (report con l'esito da compilare) oppure dopo (report con l'esito).
5. **Lo stato della milestone**: in linea, a rischio o in ritardo, con le date.

Non inventare stati o date: ciò che non sai, chiedilo.

## Contenuto

Il report ha queste voci, in quest'ordine:

1. **Cosa è stato consegnato.** Le story della milestone con codice e nome presi dal Manuale, ognuna con il criterio di accettazione riportato dal Manuale parola per parola.
2. **Esito della demo.** Per ogni story: accettata, accettata con difetto non bloccante (con la data di correzione), non accettata per difetto bloccante (con la data della nuova verifica). Se la demo non si è ancora tenuta, lo spazio per l'esito.
3. **Variazioni di questa milestone.** Quelle registrate e approvate, con il loro effetto sulle date, se ce n'è uno.
4. **Prossima milestone.** Cosa si consegnerà, con la data prevista della demo. Se la milestone successiva è già in corso, il suo stato.
5. **Date aggiornate.** Se una data comunicata nel Piano dei SAL cambia: la nuova data e il motivo, in parole non tecniche.
6. **Cosa serve dal cliente.** Materiali in scadenza e risposte attese, con le date. Ogni giorno di ritardo su un materiale sposta di un giorno le consegne che ne dipendono.
7. **Cosa deve fare il cliente.** Confermare per iscritto l'accettazione della milestone. Anche se la conferma arriva a voce, vale dopo il riepilogo scritto.

## Regole di contenuto

- **Per il cliente.** Nessuna ora, stima, buffer, nome di persona del team, tecnologia o problema interno.
- **Assenze e ticket urgenti non si raccontano.** Si comunica solo l'effetto, se una data cambia.
- **Se la milestone è a rischio o in ritardo**, il report non lo comunica da solo: quella comunicazione la prepara la skill `riprogrammazione`, con la proposta. Segnalalo e lascia la voce da completare.
- **I criteri si riportano dal Manuale** senza riformularli.
- **Una richiesta nuova emersa in demo non è un difetto:** è una variazione. Non entra in questo report come accettata: si annota a parte per il responsabile.
- **Non attribuire un esito che gli appunti non sostengono.** Se per una story non risulta l'esito, chiedilo.

## Regole di scrittura

{{SCRITTURA}}

## Formato

Per il cliente, come PDF da allegare all'email di presentazione della demo: `milestone-report-<cliente>-<sistema>-SAL<N>.pdf`, con il sorgente Markdown conservato. Una bozza (esito o date non definitivi) porta in prima riga "BOZZA INTERNA, DA NON CONDIVIDERE CON IL CLIENTE" e ogni voce incompleta termina con un blocco "Cosa manca".

## Controllo finale

1. Ogni story della milestone compare, con il criterio del Manuale.
2. Ogni story ha un esito (o il suo spazio, se la demo non c'è ancora), e ogni difetto ha una data.
3. Le date coincidono con quelle del Piano dei SAL, oppure la differenza è motivata.
4. Nessuna ora, stima, tecnologia, nome di persona del team o prezzo.
5. Una milestone a rischio o in ritardo non è comunicata dal report da solo.
6. {{CONTROLLO}}
