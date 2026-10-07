---
name: piano-delle-milestone
description: Scrive e aggiorna il capitolo Milestone del Documento tecnico (milestone, calendario di progetto, buffer, materiali del cliente, copertura delle story), crea le issue in ClickUp e ne estrae il Piano dei SAL per il cliente. Usala dopo il Manuale del prodotto, nella sottofase di documentazione del kickoff, e quando milestone o date cambiano per una variazione o una riprogrammazione.
---

# Milestone, issue in ClickUp e Piano dei SAL

## A cosa serve

La skill produce tre cose che nascono insieme e non devono divergere.

- **Capitolo Milestone del Documento tecnico**: interno. Divide il lavoro in milestone. La sua struttura è stabile: si scrive all'inizio e cambia per variazioni e riprogrammazioni. Gli stati delle milestone si aggiornano a ogni consegna e accettazione. Il capitolo è parte del Documento tecnico (skill `documento-tecnico`).
- **Issue in ClickUp**: le issue non stanno nei documenti. Vivono solo in ClickUp, che la skill raggiunge con il suo connettore: la skill scompone ogni story in issue, le stima e le crea lì. Le milestone vengono caricate anche in ClickUp, ma restano nel capitolo.
- **Piano dei SAL**: documento a parte, per il cliente. Si estrae dal capitolo e dice la durata stimata, cosa viene consegnato a ogni milestone, la data prevista di ciascuna prova e quali materiali deve fornire il cliente ed entro quando.

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
   - buffer di sprint, riservato ai ticket urgenti (20%).
4. **Calendario di progetto.** Festività, chiusure aziendali, ferie già note di ogni persona, chiusure del cliente. Va chiesto esplicitamente: una festività dimenticata sposta le date dopo che sono state comunicate.
5. **ClickUp.** La struttura in cui creare le issue (vedi la sezione Struttura di ClickUp) e il Folder della lavorazione.

## Informazioni mancanti

Chiedi in un unico elenco numerato ciò che manca. Non inventare disponibilità, ferie o scadenze.

Se scomponendo una story scopri che il Manuale è ambiguo, non interpretarlo: segnalalo. Un'ambiguità risolta in silenzio nel piano diventa un difetto scoperto alla prova.

Le **stime** le proponi tu, ma valgono solo dopo la conferma di chi svilupperà. Fino ad allora sono marcate con "[Stima da validare]".

## Struttura del capitolo Milestone

Il capitolo va nel Documento tecnico. Contiene:

1. **Parametri.** Quelli raccolti all'avvio.
2. **Calendario di progetto.**
3. **Quadro delle milestone.** Per ognuna: codice, obiettivo dimostrabile, story consegnate, ore stimate (somma delle issue in ClickUp), buffer di milestone, durata in settimane, data prevista della prova, stato.
4. **Materiali del cliente.** Ogni materiale con la milestone che ne dipende e la data entro cui serve.
5. **Rischi e incognite.** Con il modo in cui vengono contenuti.
6. **Copertura.** Ogni story del Manuale con la milestone in cui viene consegnata. Che ogni story abbia issue si controlla in ClickUp.
7. **Modifiche rispetto alla versione precedente.**
8. **Stima di durata.** La durata complessiva del progetto in giorni lavorativi e la sua differenza rispetto alla stima iniziale.

### Formato di una milestone

- **Codice e nome**: M1, M2. Verso il cliente la milestone si chiama SAL: SAL1, SAL2.
- **Obiettivo dimostrabile**: cosa si potrà provare funzionante sullo staging, in una frase.
- **Story consegnate**: i codici del Manuale.
- **Ore stimate, buffer di milestone, durata, data prevista della prova.**
- **Stato**: Da avviare, In corso, Consegnata, Accettata.

## Struttura di ClickUp

- **Space "Lavorazioni".** Un Folder per lavorazione, con il codice di osTicket nel nome (per esempio "102 - Cliente - Nome progetto"). Dentro, una List per ogni milestone: nome con codice e obiettivo (M1 - obiettivo), data di scadenza uguale alla data prevista della prova, descrizione con le story consegnate. Le ore stimate di una milestone le somma ClickUp dalle sue issue. Buffer, durata e stato della milestone restano nel capitolo Milestone, che è la fonte. Una List "Materiali" con un task per ogni materiale del cliente (la data di scadenza è la data entro cui serve): le issue che ne dipendono sono in attesa di quel task, con la dipendenza nativa. Un Folder "Ticket" tiene i ticket: un task per ticket, con gli stessi stati, e i campi tipo, urgenza, scadenza, stima e checklist della DoD.
- **Space "Sprint".** La cartella degli sprint, con una List per sprint e le date di inizio e fine. Le issue scelte nella pianificazione dello sprint si aggiungono alla List dello sprint come collegamento: è lo stesso task della milestone, non una copia, quindi non si riscrive nulla e lo stato è unico.
- **Capacità.** La vista Workload confronta le stime delle issue con le ore disponibili di ogni persona. Come punti dello sprint si usano le ore.

## Le issue in ClickUp

Per ogni story, una o più issue, scritte una volta sola, nella List della milestone. Ogni issue ha questi campi:

- **Codice**: I1, I2. Fisso, mai riutilizzato.
- **Titolo.**
- **Tipo**: story (realizza una story e ne cita il codice), supporto (sblocca altre issue: ambienti, infrastruttura, struttura dei dati), spike (tempo limitato per sciogliere un'incognita, cita la domanda), bug (cita la story violata), variazione (cita la voce del Registro delle variazioni).
- **Descrizione**: cosa va fatto, con rimando alla sezione del Documento tecnico.
- **Dipendenze**: le issue da concludere prima e i task della List "Materiali" necessari, come dipendenze native di ClickUp. Una dipendenza non soddisfatta rende l'issue bloccata, senza cambiarne lo stato.
- **Stima**: in ore.
- **DoD**: la DoD base uguale per tutte (descrizione soddisfatta, revisione del codice, lavoro sullo staging, stato aggiornato, annotazione per la Guida alla pubblicazione se l'issue cambia il modo di pubblicare, e per l'ultima issue di una story il criterio di accettazione) più le condizioni proprie della issue.
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

Si genera solo dal capitolo Milestone completo. Contiene tre elenchi.

**Durata stimata.** La durata complessiva del progetto, in parole non tecniche. Se differisce dalla stima iniziale, il motivo.

**Elenco dei SAL.** Per ogni SAL: codice e nome, cosa viene consegnato (funzionalità e story con codice e nome presi dal Manuale, più l'obiettivo dimostrabile), data prevista della prova sullo staging, stato.

**Elenco dei materiali attesi.** Per ogni materiale: cosa serve, per quale SAL, entro quale data. Seguito dalla regola: ogni giorno di ritardo su un materiale sposta di un giorno le consegne che ne dipendono.

Il Piano dei SAL non contiene issue, stime in ore, buffer di milestone, tecnologie, rischi interni, prezzi. Usa il lessico del Manuale ed è comprensibile a chi non è del settore. Il cliente ne viene informato: non serve la sua approvazione.

## Dove si salva

Il Documento tecnico vigente in `sistema/`; la versione condivisa e il Piano dei SAL in `01-kickoff/04-documentazione` (`05-documentazione` per un prodotto).

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere. Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

## Bozza o versione completa

Il capitolo è completo se ogni story è assegnata a una milestone e coperta da issue in ClickUp, tutte le stime sono validate e il calendario è compilato.

- **Bozza**: il capitolo porta in prima riga "BOZZA, CAPITOLO NON UTILIZZABILE PER LO SVILUPPO". Ogni parte incompleta termina con un blocco "Cosa manca". Da una bozza non si generano le issue né il Piano dei SAL: date non definitive non vanno comunicate al cliente.
- **Versione completa**: il capitolo resta in Markdown dentro il Documento tecnico, che porta il numero di versione.
- **Piano dei SAL**: PDF, `piano-sal-<cliente>-<sistema>-v<N>.pdf`, con lo stesso numero di versione del Documento tecnico. Conserva il sorgente Markdown.

## Aggiornamenti

Il capitolo cambia per avanzamento (stati delle milestone, aggiornati a ogni consegna e accettazione), per una variazione approvata o per una riprogrammazione. In tutti i casi:

- parti dall'ultima versione; i codici di milestone e issue non cambiano;
- le issue in ClickUp già iniziate e superate da una variazione non si cancellano: passano a CANCELLED, perché il lavoro svolto deve restare visibile;
- compila le modifiche rispetto alla versione precedente;
- rigenera il Piano dei SAL. Se una data comunicata al cliente cambia, segnalalo al responsabile prima di produrre la nuova versione.

## Controllo finale

1. **Copertura.** Ogni story ha una sola milestone e almeno una issue in ClickUp.
2. **Criteri.** Le DoD delle issue di una story coprono per intero il suo criterio di accettazione.
3. **Ordine.** Nessuna issue precede una sua dipendenza. Nessuna issue supera le 16 ore.
4. **Date.** Ogni data è coerente con calendario, capacità e buffer di milestone.
5. **Coerenza.** Milestone, story, date e materiali del Piano dei SAL coincidono con il capitolo.
6. **Riservatezza.** Il Piano dei SAL non contiene nulla di interno.
7. **Stima di durata.** La durata complessiva è indicata nel capitolo e nel Piano dei SAL.
8. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
