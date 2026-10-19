---
name: manuale-del-prodotto
description: Scrive e aggiorna il Manuale del prodotto, cioè cosa fa il sistema, con user story complete e criteri di accettazione. Usala dopo la conferma della proposta, per le correzioni del cliente e dopo ogni variazione o ticket che cambia un comportamento.
---

# Manuale del prodotto

## A cosa serve

Il Manuale del prodotto descrive in ogni dettaglio cosa fa il sistema. È l'unica fonte per i comportamenti: il cliente lo conferma e vi riconosce ciò che riceverà, gli sviluppatori lo usano per costruire, e alla consegna decide se una story è accettata.

Il come viene realizzato non sta qui: sta nel Documento tecnico.

Il Manuale appartiene al sistema, non al singolo lavoro. Un sistema ha un solo Manuale: un progetto o un prodotto lo aggiornano, non ne creano uno nuovo. Una lavorazione minore non lo aggiorna: lascia la sua Scheda di intervento, che il progetto successivo recepisce.

Il criterio di riuscita è doppio: uno sviluppatore che non ha mai parlato con il cliente deve poter costruire senza fare domande, e il cliente deve poterlo leggere senza competenze tecniche.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Cliente e sistema.**
2. **Manuale esistente.** Chiedi se il sistema ha già un Manuale e dove si trova. Se esiste, il lavoro è un aggiornamento.
3. **Le fonti.** La Proposta di soluzione confermata, lo Stato di partenza, le Schede delle lavorazioni minori chiuse dopo l'ultima versione (le trovi nell'indice `lavorazioni-minori-chiuse.md`, ognuna nella sua ultima versione, con le voci Rilascio e Garanzia della lavorazione minore in History and decision: se ne esce una nuova prima della conferma, rileggila), la cartella `source` del lavoro per intero (richiesta, trascrizioni, sintesi, risposte e materiali del cliente) e, per un prodotto, prototipo e mockup approvati. Se la proposta non è confermata, avvisa che il Manuale rischia di essere rifatto e procedi solo se confermato.
4. **Situazione.** Prima stesura, riscontro del cliente, oppure aggiornamento dopo una variazione o per recepire le Schede delle lavorazioni minori chiuse dopo l'ultima versione.

## Informazioni mancanti

Il Manuale scende a un dettaglio che la proposta non ha: comportamenti passo per passo, casi particolari, limiti, permessi. Ciò che manca non va inventato: chiedilo in un unico elenco numerato.

- **Domande per il team**: bloccano il completamento.
- **Domande per il cliente**: vanno nel capitolo delle domande aperte, con un codice D che continua la numerazione della Proposta (M è il codice delle milestone).

## Struttura

Intestazione: titolo, cliente, sistema, data, versione, versione della proposta da cui deriva.

1. **Scopo e ambito.** Cosa fa il sistema e per chi.
2. **Glossario.** Ogni termine proprio del sistema.
3. **Tipi di utente e permessi.** Chi usa il sistema e cosa può fare ciascuno.
4. **Funzionalità.** Una sezione per funzionalità, nel formato sotto.
5. **Schermate e navigazione.** Elenco delle schermate, cosa contiene ciascuna, come si passa dall'una all'altra. Rimanda ai wireframe e, se ci sono, ai mockup e al prototipo navigabile: sono facoltativi.
6. **Dati gestiti.** Quali informazioni il sistema conserva, in parole comuni.
7. **Requisiti generali.** Dispositivi e browser supportati, lingue, accessi, privacy, comunicazioni inviate dal sistema.
8. **Fuori ambito.**
9. **Tracciabilità.** Ogni punto della proposta collegato alla story che lo realizza.
10. **Domande aperte.** Divise in ancora aperte e con risposta.
11. **Modifiche rispetto alla versione precedente.**

### Formato di una funzionalità

Codici fissi, gli stessi dell'allegato della proposta: funzionalità F1, F2; story F1.1, F1.2. Non cambiano e non si riutilizzano, perché sono il filo che lega Manuale, issue e milestone.

Per ogni funzionalità: codice, nome, descrizione, chi la usa. Per ogni story:

- **Story**: "Come [tipo di utente], voglio [azione], per [beneficio]".
- **Situazione di partenza**: cosa deve essere vero prima.
- **Comportamento passo per passo**: cosa fa l'utente e cosa risponde il sistema.
- **Casi particolari**: errori, dati mancanti o non validi, elenchi vuoti, limiti, azioni non permesse. Per ognuno, cosa vede l'utente.
- **Criterio di accettazione**: introdotto da "Accettata quando:". Deve essere verificabile sullo staging con un sì o un no. "Funziona bene" non è un criterio; "l'utente riceve una email di conferma entro un minuto" lo è.

Esempio:

- **F3 Prenotazioni**
  - **F3.1** Come cliente finale, voglio prenotare un appuntamento scegliendo giorno e ora, per non dover telefonare.
  - Accettata quando: il cliente finale sceglie una fascia libera, riceve conferma via email e la fascia non è più prenotabile da altri.

Per un prodotto, le story della prima release sono complete; quelle delle release successive restano a titolo e frase, con l'indicazione della release.

## Regole di contenuto

- **Solo il cosa.** Nessuna tecnologia, nessuna scelta tecnica.
- **Stesso lessico della proposta.** Due nomi per la stessa cosa fanno credere che siano due cose.
- **Nessun prezzo e nessuna data.**
- **Nulla oltre la proposta.** Se scrivendo emerge una funzionalità non prevista, non aggiungerla: segnalala, perché amplia il lavoro concordato.
- **Formula delle user story.** È l'unica eccezione alla forma impersonale.

## Dove si salva

Nella cartella della lavorazione: PDF della versione corrente nella radice con il numero del tipo e la versione (le precedenti escono dalla radice), sorgente, versioni precedenti e bozze in `claude`; wireframe, mockup e prototipi in `design`. Il messaggio di invio e il riepilogo della conferma si salvano in `source`. La versione vigente è quella con la versione più alta tra tutte le lavorazioni.

## Ogni versione è completa e indipendente

Una versione nuova di Manuale si legge da sola. Chi la apre non deve cercare le versioni precedenti.

- **Si parte dall'ultima versione, copiata per intero.** Si modifica ciò che cambia e il resto resta scritto, parola per parola. La versione nuova è un file nuovo.
- **Mai "invariato", mai rimandi.** Non si scrive "invariato", "come nella versione precedente", "resta quello delle versioni precedenti", "vedi la v1.3" al posto del contenuto. Una sezione che non cambia si riscrive uguale.
- **Il capitolo delle modifiche è storia, non un rimando.** Elenca che cosa è cambiato, dove e da quale lavoro. Il resto del documento non lo richiama e non dipende da esso.
- **Le versioni precedenti restano tutte in `claude`, come Markdown.** Non si cancellano e non si sovrascrivono, comprese le versioni intermedie e le bozze condivise: servono per completezza e per ricostruire la storia. `claude` contiene la catena completa, dalla prima versione disponibile alla corrente, anche per le versioni nate in altre lavorazioni: all'inizio del lavoro, se il documento esiste già, si copiano in `claude` dalle cartelle di quelle lavorazioni tutte le versioni precedenti. Prima di scrivere la versione nuova si controlla che la catena sia intera; se manca una versione si ripristina da dove si trova, e se non esiste più lo si dichiara.

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere (unica eccezione: le tabelle del Piano dei SAL). Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

## Bozza o versione completa

Il Manuale è completo se ogni capitolo è compilato, ogni story ha comportamento, casi particolari e criterio di accettazione, e nessuna domanda per il team è senza risposta.

- **Bozza**: Markdown, `manuale-del-prodotto-bozza-<N>.md`. Prima riga "BOZZA INTERNA, DA NON CONDIVIDERE CON IL CLIENTE". Ogni parte incompleta termina con un blocco "Cosa manca".
- **Versione completa**: PDF, `<NN>-manuale-del-prodotto-v<versione>.pdf`. Conserva il sorgente Markdown.

## Numerazione

- **Sistema senza Manuale (prodotto nuovo).** Le versioni prima della conferma sono v0.1, v0.2 e così via. La versione confermata dal cliente è la v1.0 (stesso contenuto dell'ultima v0.N, con il capitolo delle modifiche che dice che è stata confermata).
- **Sistema con un Manuale.** La numerazione continua da quella corrente (v1.4 diventa v1.5): le versioni prima della conferma sono già versioni numerate successive, e la versione confermata è l'ultima.
- **Dopo la conferma.** Una variazione, una lavorazione minore o un nuovo progetto producono v1.1, v1.2 e così via.

## Riscontro del cliente

Come per la proposta: raccogli il riscontro, scomponilo in voci, fai decidere al responsabile l'esito di ogni correzione o nuova richiesta, aggiorna, produci una nuova versione numerata con l'elenco delle modifiche. Prima della conferma del Manuale ogni cambiamento è una modifica: nuova versione numerata (vedi "Numerazione"), nessun limite di giri. Dopo la conferma è una variazione, e va segnalata come tale.

## Approvazione e aggiornamenti successivi

La versione confermata dal cliente è la v1.0 se il sistema non ha ancora un Manuale (un prodotto nuovo), altrimenti la versione successiva a quella corrente, e non contiene domande aperte. La conferma può arrivare a voce, in una riunione: vale dopo il riepilogo scritto che il responsabile invia al cliente.

Dopo la v1.0 il Manuale cambia in tre casi: una variazione approvata, una lavorazione minore che modifica un comportamento, un nuovo progetto sullo stesso sistema. In tutti:

- aggiorna le story toccate e incrementa la versione (v1.1, v1.2);
- le story eliminate restano con il loro codice e la dicitura "Rimossa nella v<versione>";
- le nuove ricevono il codice successivo all'ultimo usato;
- registra la modifica nel capitolo 11, con la sua origine (codice della variazione o della lavorazione minore);
- comunica l'elenco dei codici modificati, aggiunti o rimossi: serve per aggiornare il Documento tecnico (capitolo Piano delle milestone compreso).

Se l'aggiornamento tocca story già approvate dal cliente per un altro lavoro in corso, non applicarlo in silenzio: segnalalo al responsabile.

## Controllo finale

1. Ogni punto della proposta è collegato ad almeno una story.
2. Ogni story completa ha un criterio di accettazione verificabile.
3. I termini coincidono con proposta e glossario.
4. Nessuna tecnologia, prezzo o data.
5. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
