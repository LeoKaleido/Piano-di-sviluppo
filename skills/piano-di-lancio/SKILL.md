---
name: piano-di-lancio
description: Scrive il Piano di lancio di un prodotto per il cliente, con data, dati iniziali da caricare, formazione, apertura graduale, assistenza rafforzata e ciò che serve dal cliente. Usala solo per i prodotti, quando le milestone della prima release si avvicinano alla conclusione.
---

# Piano di lancio

## A cosa serve

Un prodotto non va in produzione con un semplice rilascio: prima servono dati, contenuti, utenti formati, adempimenti legali. Il Piano di lancio mette in fila tutto ciò che deve essere pronto, chi lo deve fornire ed entro quando.

È un documento per il cliente, che lo approva: molte delle cose che servono dipendono da lui, e una che manca sposta la data.

Vale solo per i prodotti. Il rilascio di un progetto o di una lavorazione minore non richiede questo documento.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Cliente e prodotto.**
2. **Le fonti.** Manuale del prodotto, Piano dei SAL, Documento tecnico (capitolo Piano delle milestone e capitolo su infrastruttura e ambienti; il capitolo Pubblicazione completo nasce alla chiusura, quindi per il ritorno alla versione precedente servono le risposte di chi conosce l'infrastruttura).
3. **I parametri del lancio**:
   - la data prevista;
   - durata del periodo di assistenza rafforzata (proposta: 2 settimane);
   - durata della garanzia: la formula delle Regole comuni, da calcolare sulla durata pianificata;
   - chi sono gli utilizzatori e quanti;
   - se il lancio è graduale e con quale gruppo iniziale.

Non inventare date o numeri: ciò che manca, chiedilo.

## Struttura

Intestazione: titolo, cliente, prodotto, data, versione.

**In sintesi.** Poche righe: la data di lancio, cosa deve essere pronto, cosa serve dal cliente.

1. **Cosa viene lanciato.** Le funzionalità della prima release, con codice e nome presi dal Manuale. E cosa arriverà nelle release successive, perché gli utilizzatori non lo cerchino.
2. **Data e condizioni.** La data prevista e le condizioni perché valga: tutte le milestone accettate, i materiali arrivati, gli adempimenti completati.
3. **Cosa serve dal cliente.** Ogni voce con la data entro cui serve:
   - **dati iniziali** da caricare: quali, in che forma, chi li fornisce. La pulizia dei dati spetta al cliente: se la chiede al team è una variazione;
   - **contenuti**: testi e immagini definitivi;
   - **adempimenti legali**: informativa sulla privacy, cookie, condizioni d'uso. Spettano al cliente e senza di essi il lancio non avviene;
   - **account e domini**, intestati al cliente;
   - **persone**: chi partecipa alla formazione, chi raccoglie le segnalazioni.
4. **Formazione.** Chi viene formato, quando, su cosa. Segue i tipi di utente del Manuale.
5. **Giorno del lancio.** Cosa succede, in ordine, e cosa cambia per gli utilizzatori.
6. **Apertura graduale.** Se prevista: il gruppo iniziale, quando si apre a tutti, e cosa deve essere vero per aprire.
7. **Assistenza rafforzata.** Per quanto tempo, come si segnala un problema, in quanto tempo si interviene.
8. **Se qualcosa va storto.** In parole comuni: il prodotto può essere riportato allo stato precedente, e chi decide di farlo.
9. **Dopo il lancio.** Parte la garanzia. Le nuove richieste arrivano come ticket su osTicket e diventano lavorazioni minori, le release successive progetti.

## Promemoria interno

A parte, non nel documento per il cliente, restituisci un elenco per il team:

- i passi tecnici del lancio e le sue particolarità (ordine, regole del server, riavvii, cache, migrazioni), che l'incaricato della pubblicazione legge: si salvano come voce di `history-and-decision.md`, tipo "Rilascio";
- i controlli tecnici prima del lancio, dal Documento tecnico: backup, monitoraggio, ritorno alla versione precedente provato;
- le issue ancora aperte che bloccano il lancio;
- i difetti non bloccanti accettati nelle prove e non ancora corretti.

## Dove si salva

Nella cartella della lavorazione: PDF nella radice, sorgente e bozze in `claude`. Il messaggio di invio al cliente si salva in `source`.

## Regole di contenuto

- **Per il cliente.** Nessuna tecnologia, nessun prezzo. Le date ci sono, perché questo documento serve a fissarle.
- **Ogni giorno di ritardo su ciò che serve dal cliente sposta di un giorno la data di lancio.** Va scritto in chiaro nella sezione 3.
- **Stesso lessico del Manuale.**

## Ogni versione è completa e indipendente

Una versione nuova di Piano di lancio si legge da sola. Chi la apre non deve cercare le versioni precedenti.

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

Il piano è completo se ogni voce della sezione 3 ha una data e un incaricato, e i parametri del lancio sono stati confermati.

- **Bozza**: Markdown, `piano-di-lancio-bozza-<N>.md`. Prima riga "BOZZA INTERNA, DA NON CONDIVIDERE CON IL CLIENTE". Ogni parte incompleta termina con un blocco "Cosa manca".
- **Versione completa**: PDF, `<NN>-piano-di-lancio-v<N>.pdf`. Conserva il sorgente Markdown.

Se una data cambia dopo l'approvazione, produci una nuova versione con l'elenco delle modifiche.

## Controllo finale

1. Ogni funzionalità elencata coincide con il Manuale e con la prima release.
2. Ogni cosa che serve dal cliente ha una data e un incaricato.
3. Gli adempimenti legali sono presenti.
4. Il promemoria interno è separato dal documento per il cliente.
5. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
