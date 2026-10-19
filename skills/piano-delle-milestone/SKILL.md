---
name: piano-delle-milestone
description: Scrive e aggiorna il capitolo Piano delle milestone del Documento tecnico (milestone, calendario di progetto, buffer, materiali del cliente, copertura delle story), crea le issue in ClickUp e ne estrae il Piano dei SAL per il cliente. Usala dopo il Manuale del prodotto, nella sottofase di documentazione del kickoff, e quando milestone o date cambiano per una variazione o una riprogrammazione.
---

# Piano delle milestone, issue in ClickUp e Piano dei SAL

## A cosa serve

La skill produce tre cose che nascono insieme e non devono divergere.

- **Capitolo Piano delle milestone del Documento tecnico**: interno. Divide il lavoro in milestone e, per ognuna, riassume le lavorazioni specifiche. È un piano: si scrive all'inizio e cambia solo per variazioni e riprogrammazioni. Non contiene l'avanzamento (stato delle milestone, ore reali, date reali): quello sta in ClickUp, nelle Note di sprint, nei Milestone report e in History and decision. Il capitolo è parte del Documento tecnico (skill `documento-tecnico`).
- **Issue in ClickUp**: le issue non stanno nei documenti. Vivono solo in ClickUp, che la skill raggiunge con il suo connettore: la skill scompone ogni story in issue, le stima e le crea lì. Le milestone vengono caricate anche in ClickUp, ma restano nel capitolo.
- **Piano dei SAL**: documento a parte, per il cliente. Si estrae dal capitolo e dice, in una tabella, la durata stimata, cosa viene consegnato a ogni milestone, la data prevista di ciascuna prova e quali materiali deve fornire il cliente ed entro quando.

Il Piano dei SAL non si scrive mai a mano: si genera dal capitolo, così ciò che viene detto al cliente coincide con ciò che è pianificato. Con le issue la durata del progetto si stima di nuovo: appena la stima è vera il cliente ne viene informato con il Piano dei SAL, anche se è uguale alla stima iniziale.

**Gli sprint non si pianificano qui.** Le milestone dividono il lavoro, gli sprint dividono il tempo: ogni sprint si pianifica a fine sprint, per il successivo, con la skill `sprint`, pescando le issue dalla milestone in corso.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Cliente e sistema.**
2. **Le fonti.** Manuale del prodotto, Documento tecnico (le parti tecniche già scritte), Proposta di soluzione (per i materiali del cliente e la stima iniziale).
3. **Parametri**, che cambiano da un lavoro all'altro:
   - data di avvio;
   - chi è nel team e per quante ore alla settimana;
   - durata di ogni milestone in settimane, minimo uno sprint (due settimane);
   - buffer di milestone, in percentuale sulle ore stimate (20%, 30% se sviluppa una sola persona);
   - buffer di sprint, riservato ai lavorazioni minori urgenti (20%).
4. **Calendario di progetto.** Festività, chiusure aziendali, ferie già note di ogni persona, chiusure del cliente. Va chiesto esplicitamente: una festività dimenticata sposta le date dopo che sono state comunicate.
5. **ClickUp.** La struttura in cui creare le issue (vedi la sezione Struttura di ClickUp) e il Folder della lavorazione.

## Informazioni mancanti

Chiedi in un unico elenco numerato ciò che manca. Non inventare disponibilità, ferie o scadenze.

Se scomponendo una story scopri che il Manuale è ambiguo, non interpretarlo: segnalalo. Un'ambiguità risolta in silenzio nel piano diventa un difetto scoperto alla prova.

Le **stime** le proponi tu, ma valgono solo dopo la conferma di chi svilupperà. Fino ad allora sono marcate con "[Stima da validare]".

## Struttura del capitolo Piano delle milestone

Il capitolo va nel Documento tecnico. Contiene:

1. **Parametri.** Quelli raccolti all'avvio.
2. **Calendario di progetto.**
3. **Quadro delle milestone.** Per ognuna: codice, obiettivo dimostrabile, story consegnate, le lavorazioni specifiche, ore stimate (somma delle issue in ClickUp), buffer di milestone, durata in settimane, data prevista della prova.
4. **Materiali del cliente.** Ogni materiale con la milestone che ne dipende e la data entro cui serve.
5. **Rischi e incognite.** Con il modo in cui vengono contenuti.
6. **Copertura.** Ogni story del Manuale con la milestone in cui viene consegnata. Che ogni story abbia issue si controlla in ClickUp.
7. **Modifiche rispetto alla versione precedente.**
8. **Stima di durata.** La durata complessiva del progetto in giorni lavorativi e la sua differenza rispetto alla stima iniziale.

### Formato di una milestone

- **Codice e nome**: M1, M2. Verso il cliente la milestone si chiama SAL: SAL1, SAL2.
- **Obiettivo dimostrabile**: cosa si potrà provare funzionante sullo staging, in una frase.
- **Story consegnate**: i codici del Manuale.
- **Cosa verifica il cliente**: in una frase, ciò che il cliente controlla alla prova (per esempio "un rivenditore di prova entra con le sue credenziali"). Alimenta la colonna omonima del Piano dei SAL, che quindi si estrae dal solo capitolo.
- **Lavorazioni**: l'elenco, riassunto in modo chiaro, di ciò che si fa in quella milestone: per esempio le parti da costruire, le integrazioni, le migrazioni, gli ambienti, le spike. Una riga per lavorazione, in parole che chi sviluppa capisce al volo. Non sono le issue (che vivono solo in ClickUp, con le loro stime): sono il riassunto che permette di leggere il capitolo senza aprire ClickUp, e non cita i codici delle issue.
- **Ore stimate, buffer di milestone, durata, data prevista della prova.**

## Struttura di ClickUp

- **Space "Lavorazioni".** Un Folder per lavorazione, con il codice di osTicket nel nome (per esempio "102 - Cliente - Nome progetto"). Dentro, una List per ogni milestone: nome con codice e obiettivo (M1 - obiettivo), data di scadenza uguale alla data prevista della prova, descrizione con le story consegnate. Le ore stimate di una milestone le somma ClickUp dalle sue issue. Buffer e durata della milestone restano nel capitolo Piano delle milestone, che è la fonte. Una List "Materiali" con un task per ogni materiale del cliente (la data di scadenza è la data entro cui serve): le issue che ne dipendono sono in attesa di quel task, con la dipendenza nativa. Un Folder "Lavorazioni minori" tiene le lavorazioni minori: un task per lavorazione, con gli stessi stati, e i campi tipo, urgenza, scadenza, stima e checklist della DoD.
- **Space "Sprint".** La cartella degli sprint, con una List per sprint e le date di inizio e fine. Le issue scelte nella pianificazione dello sprint si aggiungono alla List dello sprint come collegamento: è lo stesso task della milestone, non una copia, quindi non si riscrive nulla e lo stato è unico.
- **Capacità.** La vista Workload confronta le stime delle issue con le ore disponibili di ogni persona. Come punti dello sprint si usano le ore.

## Le issue in ClickUp

Per ogni story, una o più issue, scritte una volta sola, nella List della milestone. Ogni issue ha questi campi:

- **Codice**: I1, I2. Fisso, mai riutilizzato.
- **Titolo.**
- **Tipo**: story (realizza una story e ne cita il codice), supporto (sblocca altre issue: ambienti, infrastruttura, struttura dei dati), spike (tempo limitato per sciogliere un'incognita, cita la domanda), bug (cita la story violata), variazione (cita la voce di History and decision).
- **Descrizione**: cosa va fatto, con rimando alla sezione del Documento tecnico.
- **Dipendenze**: le issue da concludere prima e i task della List "Materiali" necessari, come dipendenze native di ClickUp. Una dipendenza non soddisfatta rende l'issue bloccata, senza cambiarne lo stato.
- **Stima**: in ore.
- **DoD**: la DoD base uguale per tutte (descrizione soddisfatta, revisione del codice, lavoro sullo staging, stato aggiornato, annotazione per il capitolo Pubblicazione se l'issue cambia il modo di pubblicare, e per l'ultima issue di una story il criterio di accettazione) più le condizioni proprie della issue.
- **Stato**: BACKLOG alla creazione. Poi PLANNED, IN PROGRESS, TESTING, COMPLETED, CANCELLED, come nel Ciclo di sviluppo.

Prima di creare le issue mostra l'elenco al responsabile: le crei solo dopo la sua conferma. Una issue già creata non si cancella: se una variazione la supera passa a CANCELLED.

## Regole di pianificazione

- **Una milestone consegna story intere.** Il cliente accetta story, non pezzi di lavoro: una story appartiene a una sola milestone. Le issue di una story possono stare in sprint diversi della stessa milestone.
- **Prima le parti rischiose.** Ciò che è incerto va nelle prime milestone. In un prodotto la prima milestone è quella delle fondamenta: infrastruttura, ambienti, parti mai affrontate.
- **Le dipendenze decidono l'ordine.** Nessuna issue precede quelle da cui dipende. I materiali del cliente sono dipendenze.
- **Issue piccole.** Una issue stimata oltre le 16 ore va divisa.
- **Lavori trasversali espliciti.** Ambienti, staging accessibile al cliente, collaudo e rilascio, preparazione della prova e correzioni sono issue con stima propria.
- **Date dal calendario.** La data di una milestone si calcola dalle ore stimate più il buffer di milestone, sulla capacità reale: ore settimanali di ogni persona, meno il buffer di sprint, meno festività e ferie del calendario.

## Piano dei SAL

Si genera solo dal capitolo Piano delle milestone completo, e mai a mano. È l'unico documento del piano scritto con tabelle, perché al cliente serve vedere a colpo d'occhio cosa arriva e quando. Contiene tre parti.

**Durata stimata.** La durata complessiva del progetto, in parole non tecniche e con la regola delle durate delle Regole comuni (in giorni di calendario fino a due mesi (45 giorni sono 45 giorni), in mesi da due mesi in poi (60 giorni sono 2 mesi), mai in settimane), la stessa unità della Proposta. Se differisce dalla stima iniziale, il motivo.

**Tabella dei SAL.** Una riga per SAL, con queste colonne: codice e nome, cosa viene consegnato (l'obiettivo dimostrabile e le funzionalità con codice e nome presi dal Manuale), data prevista della prova sullo staging, cosa verifica il cliente (la riga omonima del capitolo). Non c'è la colonna dello stato: il Piano dei SAL è un piano, e ciò che è accaduto (SAL accettato, materiale arrivato, prova spostata) il cliente lo legge nei messaggi che riceve. Le colonne sono sempre le stesse. Ogni cella è breve: poche parole, non frasi lunghe.

**Tabella dei materiali attesi.** Una riga per materiale, con queste colonne: cosa serve, per quale SAL, entro quale data (niente stato di consegna). Sotto la tabella, la regola: ogni giorno di ritardo su un materiale sposta di un giorno le consegne che ne dipendono.

Il Piano dei SAL non contiene issue, stime in ore, buffer di milestone, tecnologie, rischi interni, prezzi. Usa il lessico del Manuale ed è comprensibile a chi non è del settore. Il cliente ne viene informato: non serve la sua approvazione.

## Dove si salva

Il Documento tecnico in `claude` (Markdown, con il PDF nella radice). Il Piano dei SAL, per il cliente, in PDF nella radice della cartella della lavorazione (solo la versione corrente), con il sorgente in `claude`. L'invio al cliente è un messaggio, che si salva in `source`.

## Ogni versione è completa e indipendente

Una versione nuova di capitolo Piano delle milestone, e del Piano dei SAL che se ne estrae, si legge da sola. Chi la apre non deve cercare le versioni precedenti.

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

Il capitolo è completo se ogni story è assegnata a una milestone e coperta da issue in ClickUp, tutte le stime sono validate e il calendario è compilato.

- **Bozza**: il capitolo porta in prima riga "BOZZA, CAPITOLO NON UTILIZZABILE PER LO SVILUPPO". Ogni parte incompleta termina con un blocco "Cosa manca". Da una bozza non si generano le issue né il Piano dei SAL: date non definitive non vanno comunicate al cliente.
- **Versione completa**: il capitolo resta in Markdown dentro il Documento tecnico, che porta il numero di versione.
- **Piano dei SAL**: PDF, `<NN>-piano-dei-sal-v<N>.pdf`, con il proprio numero di versione, che cresce a ogni rigenerazione (v1, v2). Conserva il sorgente Markdown.

## Aggiornamenti

Il capitolo cambia solo per una variazione approvata o per una riprogrammazione (mai per avanzamento: consegne, accettazioni, ore reali e ritardi dei materiali sono voci di History and decision). In tutti i casi:

- parti dall'ultima versione; i codici di milestone e issue non cambiano;
- le issue in ClickUp già iniziate e superate da una variazione non si cancellano: passano a CANCELLED, perché il lavoro svolto deve restare visibile;
- compila le modifiche rispetto alla versione precedente;
- rigenera il Piano dei SAL. Se una data comunicata al cliente cambia, segnalalo al responsabile prima di produrre la nuova versione.

## Controllo finale

1. **Copertura.** Ogni story ha una sola milestone e almeno una issue in ClickUp.
2. **Criteri.** Le DoD delle issue di una story coprono per intero il suo criterio di accettazione.
3. **Ordine.** Nessuna issue precede una sua dipendenza. Nessuna issue supera le 16 ore.
4. **Date.** Ogni data è coerente con calendario, capacità e buffer di milestone.
5. **Coerenza.** Milestone, story, date e materiali del Piano dei SAL coincidono con il capitolo. Ogni milestone ha le sue lavorazioni riassunte.
6. **Riservatezza.** Il Piano dei SAL non contiene nulla di interno.
7. **Stima di durata.** La durata complessiva è indicata nel capitolo e nel Piano dei SAL.
8. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
