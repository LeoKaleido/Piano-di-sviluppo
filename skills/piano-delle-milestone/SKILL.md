---
name: piano-delle-milestone
description: Scrive e aggiorna il Piano delle milestone interno (milestone, issue per tipo, stime, dipendenze, calendario di progetto, materiali del cliente) e ne estrae il Piano dei SAL per il cliente. Usala dopo il Manuale del prodotto e il Documento tecnico, prima di iniziare lo sviluppo.
---

# Piano delle milestone e Piano dei SAL

## A cosa serve

La skill produce due documenti che nascono insieme e non devono divergere.

- **Piano delle milestone**: interno. Divide il lavoro in milestone, e ogni milestone in issue. È stabile: si scrive all'inizio e cambia solo per variazioni e riprogrammazioni.
- **Piano dei SAL**: per il cliente. Si estrae dal Piano delle milestone e dice cosa viene consegnato e quando, e quali materiali deve fornire il cliente ed entro quando.

Il Piano dei SAL non si scrive mai a mano: si genera dal Piano delle milestone, così ciò che viene promesso al cliente coincide con ciò che è pianificato.

**Gli sprint non si pianificano qui.** Le milestone dividono il lavoro, gli sprint dividono il tempo: ogni sprint si pianifica quando inizia, con la skill dedicata, pescando le issue dalla milestone in corso.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Cliente e sistema.**
2. **Le fonti.** Manuale del prodotto approvato o in approvazione, Documento tecnico, Proposta di soluzione (per i materiali del cliente).
3. **Parametri**, che cambiano da un lavoro all'altro:
   - data di avvio;
   - chi è nel team e per quante ore alla settimana;
   - durata dello sprint;
   - durata delle milestone, da 4 a 8 settimane;
   - margine sulle ore di ogni milestone (proposta: 20%, 30% se sviluppa una sola persona);
   - quota della capacità riservata ai ticket urgenti (proposta: 10%).
4. **Calendario di progetto.** Festività, chiusure aziendali, ferie già note di ogni persona, chiusure del cliente. Va chiesto esplicitamente: una festività dimenticata sposta le date dopo che sono state comunicate.

## Informazioni mancanti

Chiedi in un unico elenco numerato ciò che manca. Non inventare disponibilità, ferie o scadenze.

Se scomponendo una story scopri che il Manuale è ambiguo, non interpretarlo: segnalalo. Un'ambiguità risolta in silenzio nel piano diventa un difetto scoperto alla demo.

Le **stime** le proponi tu, ma valgono solo dopo la conferma di team lead e team. Fino ad allora sono marcate con "[Stima da validare]".

## Struttura del Piano delle milestone

Intestazione: titolo, cliente, sistema, data, versione, versione del Manuale da cui deriva, dicitura "DOCUMENTO INTERNO".

1. **Parametri.** Quelli raccolti all'avvio.
2. **Calendario di progetto.**
3. **Quadro delle milestone.** Per ognuna: codice, obiettivo dimostrabile, story consegnate, ore stimate, margine, data di consegna, stato.
4. **Dettaglio.** Per ogni milestone, le sue issue nel formato sotto.
5. **Materiali del cliente.** Ogni materiale con le issue che ne dipendono e la data entro cui serve.
6. **Rischi e incognite.** Con il modo in cui vengono contenuti.
7. **Copertura.** Ogni story del Manuale con le issue che la realizzano e la milestone in cui viene consegnata.
8. **Modifiche rispetto alla versione precedente.**

### Formato di una milestone

- **Codice e nome**: M1, M2. Verso il cliente la milestone si chiama SAL: SAL1, SAL2.
- **Obiettivo dimostrabile**: cosa si potrà mostrare funzionante nella demo, in una frase.
- **Story consegnate**: i codici del Manuale.
- **Ore stimate, margine, data di consegna.**
- **Stato**: Da avviare, In corso, Consegnata, Accettata.

### Formato di una issue

- **Codice**: I1, I2. Fisso, mai riutilizzato.
- **Titolo.**
- **Tipo**:
  - **Story**: realizza una user story e ne cita il codice.
  - **Supporto**: lavoro che sblocca altre issue (ambienti, infrastruttura, struttura dei dati). Cita le issue che sblocca.
  - **Indagine**: tempo limitato per sciogliere un'incognita prima di stimare. Cita la domanda a cui risponde.
  - **Bug**: correzione di un comportamento diverso dal Manuale. Cita la story violata.
  - **Modifica**: variazione approvata dal cliente. Cita la voce del Registro delle modifiche.
- **Descrizione**: cosa va fatto, con rimando alla sezione del Documento tecnico.
- **Dipendenze**: issue da concludere prima, e materiali del cliente necessari.
- **Stima**: in ore.
- **Finito quando**: condizioni verificabili che derivano dal criterio di accettazione della story. Quando il team ha più di una persona comprende la revisione del codice da parte di un collega.
- **Stato**: Da fare, In corso, Finita, Superata.

## Regole di pianificazione

- **Una milestone consegna story intere.** Il cliente accetta story, non pezzi di lavoro: una story appartiene a una sola milestone.
- **Prima le parti rischiose.** Ciò che è incerto va nelle prime milestone. In un prodotto la prima milestone è quella delle fondamenta: infrastruttura, ambienti, parti mai affrontate.
- **Le dipendenze decidono l'ordine.** Nessuna issue precede quelle da cui dipende. I materiali del cliente sono dipendenze.
- **Issue piccole.** Una issue stimata oltre le 16 ore va divisa.
- **Lavori trasversali espliciti.** Ambienti, ambiente di prova accessibile al cliente, rilascio, preparazione della demo e correzioni sono issue con stima propria.
- **Date dal calendario.** La data di una milestone si calcola dalle ore stimate più il margine, sulla capacità reale: ore settimanali di ogni persona, meno la quota per i ticket, meno festività e ferie del calendario.

## Piano dei SAL

Si genera solo da un Piano delle milestone completo. Contiene due elenchi.

**Elenco dei SAL.** Per ogni SAL: codice e nome, cosa viene consegnato (funzionalità e story con codice e nome presi dal Manuale, più l'obiettivo dimostrabile), data di consegna prevista, stato.

**Elenco dei materiali attesi.** Per ogni materiale: cosa serve, per quale SAL, entro quale data. Seguito dalla regola: ogni giorno di ritardo su un materiale sposta di un giorno le consegne che ne dipendono.

Il Piano dei SAL non contiene issue, stime, margini, tecnologie, rischi interni, prezzi. Usa il lessico del Manuale ed è comprensibile a chi non è del settore. Il cliente lo approva insieme al Manuale.

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere. Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

## Bozza o versione completa

Il Piano delle milestone è completo se ogni story è coperta e assegnata a una milestone, ogni issue ha tutti i campi, tutte le stime sono validate e il calendario è compilato.

- **Bozza**: `piano-milestone-<cliente>-<sistema>-bozza-<N>.md`. Prima riga "BOZZA, PIANO NON UTILIZZABILE PER LO SVILUPPO". Ogni parte incompleta termina con un blocco "Cosa manca". Da una bozza non si genera il Piano dei SAL: date non definitive non vanno comunicate al cliente.
- **Versione completa**: resta in Markdown, perché è un documento di lavoro: `piano-milestone-<cliente>-<sistema>-v<N>.md`.
- **Piano dei SAL**: PDF, `piano-sal-<cliente>-<sistema>-v<N>.pdf`, con lo stesso numero di versione. Conserva il sorgente Markdown.

## Aggiornamenti

Il piano cambia per avanzamento (stati), per una variazione approvata o per una riprogrammazione. In tutti i casi:

- parti dall'ultima versione; i codici di milestone e issue non cambiano;
- le issue già iniziate e superate da una variazione non si cancellano: passano allo stato Superata, perché il lavoro svolto deve restare visibile;
- compila le modifiche rispetto alla versione precedente;
- rigenera il Piano dei SAL. Se una data comunicata al cliente cambia, segnalalo al product lead prima di produrre la nuova versione.

## Controllo finale

1. **Copertura.** Ogni story ha almeno una issue e una sola milestone.
2. **Criteri.** I "finito quando" delle issue di una story coprono per intero il suo criterio di accettazione.
3. **Ordine.** Nessuna issue precede una sua dipendenza. Nessuna issue supera le 16 ore.
4. **Date.** Ogni data è coerente con calendario, capacità e margine.
5. **Coerenza.** Milestone, story, date e materiali del Piano dei SAL coincidono con il Piano delle milestone.
6. **Riservatezza.** Il Piano dei SAL non contiene nulla di interno.
7. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
