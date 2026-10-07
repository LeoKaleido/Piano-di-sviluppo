---
name: prova-su-staging
description: Prepara la prova che il cliente fa sullo staging a fine milestone e prima della pubblicazione, e ne registra l'esito. Produce il breve messaggio per il cliente (indirizzo, utenze, dati di prova) e il verbale di accettazione. Una demo in call è facoltativa. Usala a fine milestone di un progetto o prodotto e prima del lancio. Non si usa per i ticket.
---

# Prova su staging

## A cosa serve

A fine milestone il cliente prova da solo il software vero, funzionante sullo staging, e accetta il lavoro. È un controllo del cliente, non una presentazione: una demo in call può accompagnarlo, ma è facoltativa. La skill non crea la prova: verifica che sia pronta, scrive il breve messaggio al cliente e registra l'esito.

Non c'è un documento di guida: le story da provare e i loro criteri di accettazione stanno già nel Milestone report (skill `milestone-report`), per la prova finale in un elenco breve nel messaggio.

Quando si fa:

- **Progetto**: a fine di ogni milestone, e al collaudo finale prima della pubblicazione (skill `collaudo-e-rilascio`).
- **Prodotto**: a fine di ogni milestone e prima del lancio.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Cliente e sistema.**
2. **Cosa si prova.** La milestone (SAL), oppure l'insieme del sistema per la prova finale.
3. **Momento.** Preparazione, oppure registrazione dell'esito.
4. **Le fonti.** Il Manuale del prodotto con i criteri di accettazione, lo stato delle issue in ClickUp e, per la prova finale, il collaudo.
5. **Lo staging.** Indirizzo, utenze e dati di prova da dare al cliente.

## Preparazione

1. **Verifica interna.** Chiedi conferma che ogni story della milestone sia stata verificata dal team sullo staging, con le issue COMPLETED in ClickUp. Una story che non soddisfa il suo criterio non si manda al cliente sperando che vada bene. Se una story prevista non è pronta, segnalalo al responsabile: decide lui se rinviare la prova, inviarla dichiarando che manca quella story, o riprogrammare.
2. **Messaggio per il cliente.** Poche righe, per email: dove si prova (indirizzo dello staging), con quali utenze e dati, cosa si prova (rimando al Milestone report, o per la prova finale un elenco di percorsi), cosa si chiede: provare e dare un'accettazione esplicita per ogni story. Il silenzio non vale come accettazione di una prova, e non c'è un termine che la accetta da sola. Una demo in call, se il cliente la vuole, è facoltativa.
3. **Difetti noti.** Quelli non bloccanti già conosciuti si dichiarano subito nel messaggio.
4. **Fuori da questa prova.** Le story non ancora consegnate, per evitare che il cliente le cerchi.

## Durante la prova

Si verifica ciò che è scritto nel Manuale, story per story. Una richiesta nuova non è un difetto: si annota e dopo si tratta come variazione. Una contestazione si decide sul criterio di accettazione.

## Esito e verbale di accettazione

Dalle risposte del cliente, per ogni story assegna un esito:

- **Accettata**: il criterio è soddisfatto.
- **Difetto non bloccante**: il criterio è soddisfatto nella sostanza, resta un difetto. Si elenca con una data di correzione.
- **Difetto bloccante**: il criterio non è soddisfatto. Va corretto prima dell'accettazione.

L'esito complessivo è uno fra tre: accettato, accettato con difetti non bloccanti, non accettato.

Un comportamento che rispetta il Manuale ma non piace al cliente non è un difetto: è una richiesta nuova.

Il **verbale di accettazione** è il testo da inviare al cliente per la conferma scritta. Per una milestone è la sezione "Esito" del Milestone report, per la prova finale è un breve documento a parte:

- cosa è stato provato, con le story per codice e nome;
- l'esito di ciascuna;
- i difetti non bloccanti, ciascuno con la data entro cui verrà corretto;
- i difetti bloccanti, con la data della nuova prova;
- la richiesta di conferma esplicita: il silenzio non vale come accettazione. La conferma può arrivare anche a voce, e vale dopo il riepilogo scritto.

Per uso interno, a parte, in ClickUp o nello storico:

- le **richieste nuove** emerse, ciascuna da trattare come variazione;
- le **ambiguità del Manuale** emerse, da chiarire con il cliente;
- le **issue da aprire** in ClickUp per i difetti, di tipo Bug, con la story violata.

## Regole di contenuto

- Il messaggio e il verbale sono per il cliente: nessuna tecnologia, nessuna ora, nessun nome di persona del team, nessun prezzo.
- I criteri di accettazione si riportano dal Manuale senza riformularli.
- Non attribuire un esito che le risposte non sostengono: se per una story non risulta l'esito, chiedilo.

## Dove si salva

Per una milestone, il messaggio e l'esito stanno nel Milestone report in `02-sviluppo`. Per la prova finale, il verbale in `03-rilascio/01-collaudo`.

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere. Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

## Controllo finale

1. Ogni story della milestone è nel Milestone report, oppure tra quelle fuori da questa prova.
2. Ogni criterio di accettazione coincide con quello del Manuale.
3. Ogni story ha un esito, e ogni difetto ha una data.
4. Le richieste nuove sono separate dai difetti.
5. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
