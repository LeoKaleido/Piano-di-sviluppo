---
name: sprint
description: Scrive la Nota di sprint a fine sprint di una lavorazione e prepara lo sprint successivo in ClickUp. La nota controlla lo stato della milestone, la pianificazione sceglie le issue e rispetta le date del Piano dei SAL. Usala a ogni fine sprint di un progetto o prodotto, e per la pianificazione del primo sprint a fine documentazione.
---

# Sprint

## A cosa serve

Gli sprint dividono il tempo, le milestone dividono il lavoro. Le milestone e le issue sono già definite nel capitolo Milestone del Documento tecnico e in ClickUp, e le date sono già nel Piano dei SAL. Lo sprint non si definisce a monte: si definisce a fine sprint, per il successivo, e chi lo pianifica garantisce che le tempistiche del Piano dei SAL siano rispettate.

La skill ha due momenti, in quest'ordine, perché il secondo dipende dal primo:

1. **Nota di sprint**, a fine sprint: l'unico documento. Dice cosa è stato fatto, cosa no, le ore, gli imprevisti, lo stato della milestone, cosa serve dal cliente. Una pagina interna, non va al cliente.
2. **Pianificazione del prossimo sprint**, il venerdì sera se la nota è pronta, altrimenti il lunedì mattina. Non è un documento: è la List dello sprint in ClickUp, con le issue scelte.

Lo stato delle issue (BACKLOG, PLANNED, IN PROGRESS, TESTING, COMPLETED, CANCELLED) e le ore tracciate vivono in ClickUp: la skill le legge da lì e bozza la nota, senza far ricopiare nulla.

Al cliente si presenta il Milestone report, con la skill `milestone-report`.

La pianificazione del primo sprint di una lavorazione non ha una nota precedente: si fa a fine documentazione, dopo l'invio del Piano dei SAL.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Cliente e sistema.**
2. **Momento.** Nota di fine sprint, pianificazione del prossimo sprint, oppure entrambi.
3. **Il Documento tecnico** (capitolo Milestone) e il Piano dei SAL: le milestone e le date della prova.
4. **ClickUp.** Lo stato e le ore tracciate delle issue dello sprint.
5. **Per la nota**: i ticket urgenti entrati, i materiali arrivati o in ritardo, le assenze. Spesso sono già nello storico della lavorazione.
6. **Per la pianificazione**: le ore realmente disponibili di ogni persona per questa lavorazione nel prossimo sprint, tolte ferie, festività e altri impegni. Si chiedono durante lo sprint in corso, per poter pianificare il venerdì: non si riusano quelle teoriche.

Non inventare ore, stati o assenze: ciò che non sai, chiedilo.

## Nota di sprint

Si compila da ClickUp, in elenchi brevi:

- **Sprint**: numero, periodo, milestone di riferimento.
- **Fatto**: le issue COMPLETED e le story completate, con codice e nome presi dal Manuale.
- **Non fatto**: le issue non COMPLETED, con il motivo e gli eventuali blocchi. Passano allo sprint successivo con la priorità.
- **Ore**: pianificate e completate, cioè la somma delle stime delle issue diventate COMPLETED dentro le date dello sprint.
- **Imprevisti**: assenze, ticket urgenti, blocchi, materiali in ritardo, con le ore che sono costati.
- **Stato della milestone**: il margine con i numeri (capacità rimanente fino alla data della prova, al netto del buffer di sprint, meno le ore rimanenti, cioè le stime rivalutate delle issue non COMPLETED). In linea se il margine è almeno metà del buffer di milestone iniziale, a rischio se è tra zero e metà, in ritardo se è sotto zero. Con la data prevista della prova.
- **Cosa serve dal cliente**: materiali in scadenza e risposte attese, con le date.
- **Segnalazioni**: se la milestone è a rischio o in ritardo, segnala al responsabile che serve una riprogrammazione (skill `riprogrammazione`). La skill non la esegue.
- **Prossimo sprint**: una riga con l'obiettivo e il rimando alla List in ClickUp.

Se per una issue non c'è la stima rivalutata, chiedila a chi sviluppa: il margine dipende da quel dato.

## Pianificazione del prossimo sprint

1. **Capacità.** Le ore disponibili di ogni persona per questa lavorazione. Una persona che lavora a più lavorazioni divide la sua capacità tra i piani: il supervisore controlla che la somma non superi la sua capacità. Togli il buffer di sprint, il 20% della capacità di ogni persona, riservato ai ticket urgenti. Se a metà sprint non è stato usato, il responsabile può anticipare issue da BACKLOG a PLANNED con la parte avanzata.
2. **Stime rivalutate.** Usa le stime delle issue non COMPLETED già rivalutate nella nota: la capacità non si corregge sulla storia.
3. **Scelta delle issue.** Dalla milestone in corso, in quest'ordine: issue tornate dallo sprint precedente, issue di supporto e spike che sbloccano altre issue, poi le issue di story secondo le dipendenze. Le issue di una story possono stare in sprint diversi della stessa milestone. Non scegliere issue che dipendono da materiali del cliente non ancora arrivati.
4. **Rispetto delle date.** Con le issue scelte, la milestone deve restare nella data del Piano dei SAL: ricontrolla le ore rimanenti contro la capacità rimanente. Se non ci sta, segnalalo prima di confermare.
5. **Conferma.** Presenta le issue scelte con la somma delle ore, e fai confermare al responsabile e a chi sviluppa. Il supervisore controlla che le stime siano plausibili e che la capacità sia rispettata.
6. **ClickUp.** Le issue scelte passano a PLANNED e si aggiungono alla List dello sprint: è lo stesso task della milestone, non una copia.

## Formato e dove si salva

Markdown, `nota-sprint-<cliente>-<sistema>-S<N>.md`, in `02-sviluppo` della lavorazione. Interno.

## Regole

- La pianificazione dipende dalla nota: non si fa prima.
- La nota è interna: può contenere ore e nomi, ma non si invia al cliente.
- I ticket non hanno nota: si pianificano in ClickUp con la capacità propria dei ticket (persone sempre disponibili e prestiti di ore dai progetti, decisi da chi gestisce il team prima della pianificazione del progetto, che ne tiene conto).

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere. Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

## Controllo finale

1. Ogni numero della nota ha la sua fonte in ClickUp.
2. Il margine riporta i numeri usati, e una milestone a rischio o in ritardo è segnalata.
3. La pianificazione è stata fatta dopo la nota (quella del primo sprint dopo l'invio del Piano dei SAL).
4. Le ore pianificate non superano la capacità al netto del buffer di sprint, e il supervisore ha controllato.
5. Nessuna issue scelta precede una sua dipendenza o attende un materiale non arrivato.
6. La nota è interna e non è stata inviata al cliente.
7. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
