---
name: documento-tecnico
description: Scrive e aggiorna il Documento tecnico interno, cioè come viene realizzato il sistema (repository, tecnologie, architettura, dati, integrazioni, infrastruttura, ambienti e pubblicazione, scelte tecniche, milestone, con le issue in ClickUp). Usala dopo il Manuale del prodotto, alla chiusura del progetto per il capitolo sulla pubblicazione, e dopo ogni variazione o progetto che cambia la realizzazione o il modo di pubblicare, recependo le Schede delle lavorazioni minori chiuse dopo l'ultima versione.
---

# Documento tecnico

## A cosa serve

Il Documento tecnico è interno e non viene mai condiviso con il cliente. Dice **come** il sistema viene realizzato. Il **cosa** sta nel Manuale del prodotto, che resta l'unica fonte per i comportamenti.

Questa divisione serve a evitare che due documenti descrivano la stessa cosa e finiscano per divergere. Per questo il Documento tecnico cita i codici delle story (F3.1) e non ne riscrive mai il contenuto. Se i due documenti sono in contrasto, vale il Manuale e si corregge il Documento tecnico.

Come il Manuale, appartiene al sistema e non al singolo lavoro: un progetto o un prodotto lo aggiornano, non ne creano uno nuovo. Una lavorazione minore non lo aggiorna: lascia la sua Scheda di intervento, che il progetto successivo recepisce. Lo cura il responsabile del lavoro, con chi sviluppa.

Deve bastare a uno sviluppatore che entra nel team a lavoro avviato.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Cliente e sistema.**
2. **Documento tecnico esistente.** Chiedi se il sistema ne ha già uno e dove si trova. Se esiste, il lavoro è un aggiornamento.
3. **Le fonti.** Il Manuale del prodotto, lo Stato di partenza, le Schede delle lavorazioni minori chiuse dopo l'ultima versione (nell'indice `lavorazioni-minori-chiuse.md`, ognuna nella sua ultima versione, con le voci Rilascio e Garanzia della lavorazione minore in History and decision), le annotazioni sul modo di pubblicare lasciate dalle issue in ClickUp (commento e etichetta `pubblicazione`), le particolarità del rilascio indicate da `collaudo-e-rilascio`, le scelte tecniche di chi sviluppa, il codice se accessibile, e la cartella `source` del lavoro per intero (richiesta, trascrizioni, sintesi, risposte e materiali del cliente).
4. **Situazione.** Prima stesura oppure aggiornamento, e in quel caso l'elenco dei codici di story modificati, aggiunti o rimossi nel Manuale.

## Informazioni mancanti

Le scelte tecniche le prende chi sviluppa. Puoi proporne, motivandole, ma entrano in una versione completa solo dopo essere state accettate: fino ad allora sono marcate con "[Proposta da validare]". Non scegliere in silenzio una tecnologia al posto del team.

Chiedi in un unico elenco numerato ciò che manca.

## Struttura

Intestazione: titolo, cliente, sistema, data, versione, versione del Manuale a cui si riferisce.

1. **Panoramica.** Le parti del sistema e come dialogano, con uno schema in elenco dei flussi principali e dei confini tra le parti.
2. **Tecnologie.** Per ognuna: a cosa serve nel sistema e perché è stata scelta.
3. **Struttura del codice.** Dove si trova cosa: per ogni repository l'albero delle cartelle che contano, il compito di ogni modulo, i file da toccare per aggiungere una funzionalità dello stesso tipo, le convenzioni seguite (nomi, stile, gestione degli errori, log, test).
4. **Dati.** Per ogni entità: tabella o collezione, ogni campo con tipo, obbligatorietà, valore predefinito e vincoli (chiavi, unicità, lunghezze, valori ammessi), indici, relazioni con le altre entità e regole di cancellazione. Le migrazioni da scrivere e il loro ordine. Per ogni entità, le story che la usano.
5. **Realizzazione delle funzionalità.** Per ogni funzionalità del Manuale, con il suo codice, un blocco con:
   - le parti del sistema e i file o moduli coinvolti, esistenti da modificare e nuovi da creare;
   - le interfacce: per ogni endpoint, route o comando, metodo, percorso, parametri, autenticazione, corpo della richiesta, risposta di successo e codici di errore con il loro significato;
   - il flusso tecnico passo per passo: chi chiama chi, in che ordine, quali query o scritture sui dati, dove stanno le transazioni, cosa si mette in cache e quando si invalida;
   - i rami di errore, uno per ogni caso particolare delle story, con il codice dell'errore, ciò che il sistema fa e ciò che resta nei dati;
   - la parte di interfaccia: componenti, stato, chiamate;
   - i test da scrivere (unitari e di integrazione) per i casi principali e per i rami di errore.

   Si cita il codice della story, non se ne riscrive il comportamento visto dall'utente.
6. **Integrazioni.** Per ogni sistema esterno: cosa si scambia, con quale protocollo e formato, autenticazione, un esempio di richiesta e di risposta, limiti di frequenza, tempi massimi, nuovi tentativi e cosa succede se non risponde.
7. **Infrastruttura e pubblicazione.** Dove gira il sistema e tutto ciò che serve a chi pubblica, questa parte è il capitolo Pubblicazione. Contiene:
   - **Ambienti.** Staging e produzione: indirizzi, repository e rami, chi li gestisce. Il sistema può avere più repository.
   - **Ordine dei passi.** I passi di una pubblicazione normale, uno per riga, con chi li esegue.
   - **Regole del sistema.** Tutto ciò che è particolare di questo sistema, ognuna con il motivo e il lavoro che l'ha introdotta: regole del server web (per esempio Apache) e reindirizzamenti; processi da riavviare (per esempio il server SSR) e in che ordine; cache, con le rotte coinvolte e come si svuotano; code, worker, lavori pianificati; variabili e configurazioni per ambiente, senza scrivere segreti; certificati e scadenze.
   - **Verifiche.** Dopo ogni passo e a pubblicazione finita, con cosa deve succedere.
   - **Ritorno alla versione precedente.** Quando si decide, chi lo decide, i passi, e cosa succede ai dati scritti nel frattempo.
   - **Backup.** Cosa si salva prima e dove.
   - **Contatti.** Chi avvisare se qualcosa va storto.

   Le particolarità di un singolo rilascio non hanno un documento a parte: durante la preparazione stanno nel piano di rilascio (la skill `collaudo-e-rilascio` le elenca) e alla chiusura si portano qui. Se un rilascio non ne ha, questo capitolo basta.
8. **Sicurezza e dati personali.** Accessi, permessi, dati sensibili, backup.
9. **Decisioni tecniche.** Le scelte tecniche che durano nel tempo, con data, alternative scartate e motivo. Serve a non ridiscutere ciò che è già stato deciso. Le decisioni di una singola lavorazione stanno nel suo History and decision, che rimanda qui quando sono tecniche.
10. **Rischi e debito tecnico.** Ciò che è stato fatto in modo provvisorio e andrà ripreso.
11. **Piano delle milestone.** Solo per progetti e prodotti. La divisione in milestone, il calendario, i buffer e i materiali del cliente e, per ogni milestone, le lavorazioni specifiche riassunte chiaramente. Le issue non stanno qui: vivono in ClickUp. Niente avanzamento: stati delle milestone, ore reali e date reali non compaiono (stanno in History and decision, Note di sprint e Milestone report). Lo scrive la skill `piano-delle-milestone`, che da qui estrae anche il Piano dei SAL per il cliente, in tabella.
12. **Modifiche rispetto alla versione precedente.**

I capitoli 7 e 8 sono sempre completi: per un prodotto perché l'infrastruttura nasce da zero, per un progetto perché il documento deve bastare da solo e non si limita a ciò che il lavoro cambia.

## Regole di contenuto

- **Sufficienza.** Il documento è completo quando uno sviluppatore che non ha seguito il lavoro può implementare ogni funzionalità leggendo solo i capitoli 3, 4, 5 e 6, senza fare domande: sa quali file toccare, quali campi e interfacce creare, in che ordine, cosa succede in caso di errore e come provarlo. Se per capire un punto servirebbe chiedere a chi ha scritto il documento, il punto non è scritto abbastanza. Un documento di poche decine di righe per un intero sistema non lo è quasi mai.
- **Solo il come.** Nessun comportamento visto dall'utente: per quello si rimanda al codice della story.
- **Nessun prezzo.** Le date compaiono solo nel capitolo Piano delle milestone.
- **Linguaggio tecnico**, senza semplificazioni: i lettori sono sviluppatori.
- **Nulla di inventato.** Ciò che non è stato deciso si scrive come domanda aperta per chi sviluppa.
- **Nessun segreto.** Password, chiavi e token non si scrivono: si indica dove sono custoditi.
- **Pubblicazione concreta.** "Svuotare la cache" non basta: serve il comando o il pannello e la rotta.
- **Quando si aggiorna la parte di pubblicazione.** Durante lo sviluppo, quando un'issue cambia il modo di pubblicare (condizione della DoD base); alla chiusura del progetto, con le regole introdotte e le particolarità del rilascio (che durante la preparazione stanno nel piano di rilascio); dopo la pubblicazione, con ciò che è emerso (un passo mancante, un riavvio dimenticato, una cache scoperta); e per una lavorazione minore che cambia il modo di pubblicare, come parte dell'aggiornamento dei documenti. Una regola che non vale più si toglie, con la cronologia delle modifiche che dice quando e perché; se due regole si contraddicono, si segnala.

## Dove si salva

Sorgente, bozze e tutte le versioni precedenti in `claude`, nella cartella della lavorazione; PDF finale nella radice (i PDF delle versioni precedenti escono dalla radice, i sorgenti restano). La versione vigente è quella con la versione più alta tra tutte le lavorazioni.

## Ogni versione è completa e indipendente

Una versione nuova di Documento tecnico si legge da sola. Chi la apre non deve cercare le versioni precedenti.

- **Si parte dall'ultima versione, copiata per intero.** Si modifica ciò che cambia e il resto resta scritto, parola per parola. La versione nuova è un file nuovo.
- **Mai "invariato", mai rimandi.** Non si scrive "invariato", "come nella versione precedente", "resta quello delle versioni precedenti", "vedi la v1.3" al posto del contenuto. Una sezione che non cambia si riscrive uguale.
- **Il capitolo delle modifiche è storia, non un rimando.** Elenca che cosa è cambiato, dove e da quale lavoro. Il resto del documento non lo richiama e non dipende da esso.
- **Le versioni precedenti restano tutte in `claude`, come Markdown.** Non si cancellano e non si sovrascrivono, comprese le versioni intermedie e le bozze condivise: servono per completezza e per ricostruire la storia. `claude` contiene la catena completa, dalla prima versione disponibile alla corrente, anche per le versioni nate in altre lavorazioni: all'inizio del lavoro, se il documento esiste già, si copiano in `claude` dalle cartelle di quelle lavorazioni tutte le versioni precedenti. Prima di scrivere la versione nuova si controlla che la catena sia intera; se manca una versione si ripristina da dove si trova, e se non esiste più lo si dichiara.

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere (unica eccezione: le tabelle del Piano dei SAL). Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

I nomi di tecnologie, file e parti del codice si scrivono come sono, anche se in inglese.

## Formato

Markdown, sia in bozza sia completo, perché è un documento di lavoro che gli sviluppatori aggiornano: `documento-tecnico-v<versione>.md`. Una versione con parti mancanti porta in prima riga "BOZZA" e ogni parte incompleta termina con un blocco "Cosa manca".

## Aggiornamenti

A ogni variazione, lavorazione minore o progetto che cambia la realizzazione:

- parti dall'elenco dei codici di story cambiati nel Manuale e aggiorna le sezioni che li citano;
- incrementa la versione e compila il capitolo 12 con l'origine della modifica;
- aggiungi al capitolo 9 le nuove decisioni.

## Controllo finale

1. Ogni funzionalità del Manuale compare nel capitolo 5 con il suo codice.
2. Nessun comportamento del Manuale è stato riscritto: solo citato.
3. Ogni caso particolare delle story ha un ramo di errore corrispondente.
4. Nessuna scelta tecnica non validata in una versione completa.
5. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
