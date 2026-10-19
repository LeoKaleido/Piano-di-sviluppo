---
name: prova-su-staging
description: Prepara lo user acceptance test (UAT), la prova che il cliente fa sullo staging dal vivo insieme al team a fine milestone e prima della pubblicazione, e ne registra l'esito. Produce il messaggio di invito alla sessione (data, ora, modalità, story da provare) e il testo di conferma dell'accettazione. Usala a fine milestone di un progetto o prodotto e prima del lancio. Non si usa per le lavorazioni minori.
---

# Prova su staging

## A cosa serve

A fine milestone il cliente prova il software vero, funzionante sullo staging, dal vivo insieme al team, e accetta il lavoro: è lo user acceptance test (UAT). La sessione si fa in call o di persona: il team presenta il lavoro e guida, il cliente prova le story e decide. Non esiste una demo a parte: la presentazione è la prova stessa. La skill non crea la prova: verifica che sia pronta, scrive il messaggio di invito alla sessione e registra l'esito.

Non c'è un documento di guida: le story da provare e i loro criteri di accettazione stanno nel messaggio di invito (per la prova finale in un elenco breve). Il Milestone report (skill `milestone-report`) è interno e non va al cliente.

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
2. **Sessione e messaggio di invito.** Si concorda con il cliente data, ora e modalità (in call o di persona), con chi partecipa e chi accetta (il referente). Poche righe, per email: quando e come ci si vede, dove si prova (indirizzo dello staging), con quali utenze e dati, cosa si prova (le story della milestone con codice, nome e criterio di accettazione preso dal Manuale senza riformularlo, o per la prova finale un elenco di percorsi), cosa si chiede: provare insieme e dare un'accettazione esplicita per ogni story. Il silenzio non vale come accettazione, e non c'è un termine che la accetta da sola. Se la sessione non si tiene o non si conclude, se ne fissa un'altra.
3. **Difetti noti.** Quelli non bloccanti già conosciuti si dichiarano subito nel messaggio.
4. **Fuori da questa prova.** Le story non ancora consegnate, per evitare che il cliente le cerchi.

## Durante la sessione

Il team presenta il lavoro sullo staging e guida, un'issue o una story per volta. Il cliente prova davanti al team e dice l'esito. Si verifica ciò che è scritto nel Manuale, story per story. Una richiesta nuova non è un difetto: si annota e dopo si tratta come variazione. Una contestazione si decide sul criterio di accettazione.

## Esito e accettazione

Dalle risposte del cliente nella sessione, per ogni story assegna un esito:

- **Accettata**: il criterio è soddisfatto.
- **Difetto non bloccante**: il criterio è soddisfatto nella sostanza, resta un difetto. Si elenca con una data di correzione.
- **Difetto bloccante**: il criterio non è soddisfatto. Va corretto prima dell'accettazione.

L'esito complessivo è uno fra tre: accettato, accettato con difetti non bloccanti, non accettato.

Un comportamento che rispetta il Manuale ma non piace al cliente non è un difetto: è una richiesta nuova.

Il **testo di conferma** è il messaggio da inviare al cliente per la conferma scritta. È un breve messaggio, che non è un documento (il suo contenuto va in History and decision, vedi sotto):

- cosa è stato provato, con le story per codice e nome;
- l'esito di ciascuna;
- i difetti non bloccanti, ciascuno con la data entro cui verrà corretto;
- i difetti bloccanti, con la data della nuova prova;
- la richiesta di conferma esplicita: il silenzio non vale come accettazione. La conferma può arrivare anche a voce, e vale dopo il riepilogo scritto.

Per uso interno, a parte, in ClickUp o in History and decision:

- le **richieste nuove** emerse, ciascuna da trattare come variazione;
- le **ambiguità del Manuale** emerse, da chiarire con il cliente;
- le **issue da aprire** in ClickUp per i difetti, di tipo Bug, con la story violata.

## Regole di contenuto

- L'invito e il testo di conferma sono per il cliente: nessuna tecnologia, nessuna ora, nessun nome di persona del team, nessun prezzo.
- I criteri di accettazione si riportano dal Manuale senza riformularli.
- Non attribuire un esito che le risposte non sostengono: se per una story non risulta l'esito, chiedilo.

## Dove si salva

I messaggi al cliente (invito alla sessione, testo di conferma) si salvano in `source`. L'esito, per una milestone come per la prova finale, è una voce di `history-and-decision.md` (in `log`) con le story provate, l'esito di ciascuna, i difetti non bloccanti con le date di correzione, la conferma del cliente e la sua data. Il Milestone report (interno) la riprende.

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere (unica eccezione: le tabelle del Piano dei SAL). Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

## Controllo finale

1. Ogni story della milestone è nel messaggio, oppure tra quelle fuori da questa prova.
2. Ogni criterio di accettazione coincide con quello del Manuale.
3. Ogni story ha un esito, e ogni difetto ha una data.
4. Le richieste nuove sono separate dai difetti.
5. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
