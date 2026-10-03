---
name: demo
description: Prepara la scaletta di una demo al cliente (story da mostrare, criteri di accettazione da verificare) e ne registra l'esito nel verbale di accettazione. Usala a fine milestone di un progetto o prodotto, prima del lancio, e per la verifica di un ticket esteso sull'ambiente di prova.
---

# Demo

## A cosa serve

La demo è il software vero, funzionante sull'ambiente di prova, mostrato al cliente perché accetti il lavoro. La skill non crea la demo: prepara ciò che serve perché porti a un'accettazione chiara, e ne registra l'esito.

Senza una scaletta, una demo diventa una conversazione: il cliente guarda, commenta, chiede cose nuove, e alla fine nessuno sa cosa è stato accettato. Con la scaletta, ogni story viene mostrata e verificata sul suo criterio, e l'esito è scritto.

Quando si tiene:

- **Ticket esteso**: prima del rilascio, il cliente verifica i criteri della Scheda di intervento.
- **Progetto**: a fine di ogni milestone.
- **Prodotto**: a fine di ogni milestone e prima del lancio.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Cliente e sistema.**
2. **Cosa si dimostra.** La milestone (SAL) o il ticket.
3. **Momento.** Preparazione della demo, oppure registrazione dell'esito.
4. **Le fonti.** Per la preparazione: il Manuale del prodotto con i criteri di accettazione, il Piano delle milestone, l'ultimo Documento di sprint; per un ticket, la Scheda di intervento. Per l'esito: la scaletta e gli appunti presi durante la demo.

## Preparazione: verifica interna

Prima di scrivere la scaletta, chiedi conferma che ogni story della milestone sia stata verificata dal team sull'ambiente di prova. Una story che non soddisfa il suo criterio non si porta in demo sperando che vada bene.

Se una story prevista non è pronta, segnalalo al product lead prima della demo: decide lui se rinviare la demo, mostrarla senza quella story dichiarandolo, o riprogrammare.

## Scaletta

Documento interno, Markdown, `demo-<cliente>-<sistema>-<SAL o ticket>.md`.

1. **Cosa si dimostra.** SAL o ticket, data, ambiente, chi partecipa. Deve partecipare il decisore del cliente: vale solo la sua accettazione.
2. **Preparazione dell'ambiente.** Dati di prova, utenze, cosa va predisposto prima.
3. **Percorso.** Le story nell'ordine in cui si mostrano, seguendo il percorso naturale di un utente e non l'ordine dei codici. Per ogni story:
   - codice e nome;
   - cosa si mostra, passo per passo;
   - il criterio di accettazione, riportato dal Manuale parola per parola;
   - uno spazio per l'esito.
4. **Casi particolari da mostrare.** Almeno i principali: un errore, uno stato vuoto. Il cliente li incontrerà.
5. **Fuori da questa demo.** Le story non ancora consegnate, per evitare che il cliente le cerchi.
6. **Difetti noti.** Quelli non bloccanti già conosciuti, da dichiarare subito e non da far scoprire.
7. **Cosa si chiede al cliente.** Provare da solo sull'ambiente di prova e dare l'accettazione scritta entro il termine. Dopo il termine il silenzio vale come accettazione.

## Durante la demo

La scaletta ricorda a chi conduce tre regole:

- si verifica ciò che è scritto nel Manuale, story per story;
- una richiesta nuova non si discute e non si accetta in demo: si annota, e dopo si tratta come variazione;
- una contestazione si decide sul criterio di accettazione.

## Esito e verbale di accettazione

Dagli appunti della demo, per ogni story assegna un esito:

- **Accettata**: il criterio è soddisfatto.
- **Difetto non bloccante**: il criterio è soddisfatto nella sostanza, resta un difetto. Si elenca con una data di correzione.
- **Difetto bloccante**: il criterio non è soddisfatto. Va corretto prima dell'accettazione.

L'esito complessivo è uno fra tre: accettato, accettato con difetti non bloccanti, non accettato.

Un comportamento che rispetta il Manuale ma non piace al cliente non è un difetto: è una richiesta nuova.

Il **verbale di accettazione** è il testo da inviare al cliente per la conferma scritta:

- cosa è stato dimostrato, con le story per codice e nome;
- l'esito di ciascuna;
- i difetti non bloccanti, ciascuno con la data entro cui verrà corretto;
- i difetti bloccanti, con la data della nuova verifica;
- il termine entro cui il cliente può segnalare altro, dopo il quale il lavoro vale come accettato.

Per uso interno, a parte:

- le **richieste nuove** emerse, ciascuna da trattare come variazione;
- le **ambiguità del Manuale** emerse, da chiarire con il cliente;
- le **issue da aprire** per i difetti, di tipo Bug, con la story violata.

## Regole di contenuto

- Il verbale è per il cliente: nessuna tecnologia, nessuna ora, nessun nome di persona del team, nessun prezzo.
- I criteri di accettazione si riportano dal Manuale senza riformularli.
- Non attribuire un esito che gli appunti non sostengono: se per una story non risulta l'esito, chiedilo.

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere. Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

## Controllo finale

1. Ogni story della milestone è nella scaletta oppure tra quelle fuori da questa demo.
2. Ogni criterio di accettazione coincide con quello del Manuale.
3. Ogni story ha un esito, e ogni difetto ha una data.
4. Le richieste nuove sono separate dai difetti.
5. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
