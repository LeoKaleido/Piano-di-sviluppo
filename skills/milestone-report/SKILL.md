---
name: milestone-report
description: Scrive il Milestone report per il cliente, il documento che accompagna la prova del cliente sullo staging a ogni milestone: story consegnate, esito della prova, stato della milestone successiva, date aggiornate e ciò che serve dal cliente. Usala a ogni milestone di un progetto o prodotto, con le istruzioni per provare.
---

# Milestone report

## A cosa serve

Il Milestone report è l'unico documento periodico che il cliente riceve durante lo sviluppo. Si invia a ogni milestone, con le istruzioni per provare sullo staging, e dice cosa è stato consegnato, cosa è stato accettato, cosa viene dopo e cosa serve dal cliente.

Non sostituisce la Nota di sprint, che è interna e resta: da lì la skill ricava lo stato.

Il cliente accetta in modo esplicito. Il silenzio non vale come accettazione di una prova.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Cliente e sistema.**
2. **La milestone.** Codice, nome e il SAL corrispondente per il cliente.
3. **Le fonti.** Il Documento tecnico (capitolo Milestone), il Piano dei SAL, le Note di sprint, il Manuale del prodotto con i criteri di accettazione, il Registro delle variazioni, il messaggio di prova preparato con la skill `prova-su-staging` e gli eventuali appunti della demo in call.
4. **Il momento.** Prima della prova (report con l'esito da compilare) oppure dopo (report con l'esito).
5. **Lo stato della milestone**: in linea, a rischio o in ritardo, con le date.

Non inventare stati o date: ciò che non sai, chiedilo.

## Contenuto

Il report ha queste voci, in quest'ordine:

1. **Cosa è stato consegnato.** Le story della milestone con codice e nome presi dal Manuale, ognuna con il criterio di accettazione riportato dal Manuale parola per parola. Il report comprende anche come provare: indirizzo dello staging, utenze e dati di prova, percorso consigliato (dal messaggio preparato con la skill `prova-su-staging`).
2. **Esito della prova.** Per ogni story: accettata, accettata con difetto non bloccante (con la data di correzione), non accettata per difetto bloccante (con la data della nuova verifica). Se la prova non è ancora stata fatta, lo spazio per l'esito.
3. **Variazioni di questa milestone.** Quelle registrate e approvate, con il loro effetto sulle date, se ce n'è uno.
4. **Prossima milestone.** Cosa si consegnerà, con la data prevista della prova. Se la milestone successiva è già in corso, il suo stato.
5. **Date aggiornate.** Se una data comunicata nel Piano dei SAL cambia: la nuova data e il motivo, in parole non tecniche.
6. **Cosa serve dal cliente.** Materiali in scadenza e risposte attese, con le date. Ogni giorno di ritardo su un materiale sposta di un giorno le consegne che ne dipendono.
7. **Cosa deve fare il cliente.** Confermare per iscritto l'accettazione della milestone. Anche se la conferma arriva a voce, vale dopo il riepilogo scritto.

## Regole di contenuto

- **Per il cliente.** Nessuna ora, stima, buffer, nome di persona del team, tecnologia o problema interno.
- **Assenze e ticket urgenti non si raccontano.** Si comunica solo l'effetto, se una data cambia.
- **Se la milestone è a rischio o in ritardo**, il report non lo comunica da solo: quella comunicazione la prepara la skill `riprogrammazione`, con la proposta. Segnalalo e lascia la voce da completare.
- **I criteri si riportano dal Manuale** senza riformularli.
- **Una richiesta nuova emersa in prova non è un difetto:** è una variazione. Non entra in questo report come accettata: si annota a parte per il responsabile.
- **Non attribuire un esito che gli appunti non sostengono.** Se per una story non risulta l'esito, chiedilo.

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere. Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

## Formato

Per il cliente, come PDF da allegare all'email di invio della prova: `milestone-report-<cliente>-<sistema>-SAL<N>.pdf`, con il sorgente Markdown conservato. Una bozza (esito o date non definitivi) porta in prima riga "BOZZA INTERNA, DA NON CONDIVIDERE CON IL CLIENTE" e ogni voce incompleta termina con un blocco "Cosa manca".

## Dove si salva

In `02-sviluppo` della lavorazione.

## Controllo finale

1. Ogni story della milestone compare, con il criterio del Manuale.
2. Ogni story ha un esito (o il suo spazio, se la prova non c'è ancora), e ogni difetto ha una data.
3. Le date coincidono con quelle del Piano dei SAL, oppure la differenza è motivata.
4. Nessuna ora, stima, tecnologia, nome di persona del team o prezzo.
5. Una milestone a rischio o in ritardo non è comunicata dal report da solo.
6. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
