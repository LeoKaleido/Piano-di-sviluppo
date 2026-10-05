---
name: piano-delle-milestone
description: Scrive e aggiorna il capitolo Milestone e issue del Documento tecnico (milestone, issue per tipo, stime, dipendenze, calendario di progetto, buffer, materiali del cliente) e ne estrae il Piano dei SAL per il cliente. Usala dopo il Manuale del prodotto e la parte tecnica del Documento tecnico, prima di iniziare lo sviluppo.
---

# Milestone e issue, e Piano dei SAL

## A cosa serve

La skill produce due cose che nascono insieme e non devono divergere.

- **Capitolo Milestone e issue del Documento tecnico**: interno. Divide il lavoro in milestone, e ogni milestone in issue. È stabile: si scrive all'inizio e cambia solo per variazioni e riprogrammazioni. Il capitolo è parte del Documento tecnico (skill `documento-tecnico`), non un documento a parte.
- **Piano dei SAL**: documento a parte, per il cliente. Si estrae dal capitolo e dice la durata stimata, cosa viene consegnato a ogni milestone, la data prevista di ciascuna demo e quali materiali deve fornire il cliente ed entro quando.

Il Piano dei SAL non si scrive mai a mano: si genera dal capitolo, così ciò che viene detto al cliente coincide con ciò che è pianificato. Con le issue la durata del progetto si stima di nuovo: appena la stima è vera il cliente ne viene informato con il Piano dei SAL, sempre, anche se uguale a quella iniziale.

**Gli sprint non si pianificano qui.** Le milestone dividono il lavoro, gli sprint dividono il tempo: ogni sprint si pianifica quando inizia, con la skill dedicata, pescando le issue dalla milestone in corso.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Cliente e sistema.**
2. **Le fonti.** Manuale del prodotto confermato, Documento tecnico (le parti tecniche già scritte), Proposta di soluzione (per i materiali del cliente).
3. **Parametri**, che cambiano da un lavoro all'altro:
   - data di avvio;
   - chi è nel team e per quante ore alla settimana;
   - durata dello sprint;
   - durata delle milestone, da 4 a 8 settimane;
   - buffer di milestone, in percentuale sulle ore stimate (20%, 30% se sviluppa una sola persona);
   - buffer di sprint, riservato ai ticket urgenti (20%).
4. **Calendario di progetto.** Festività, chiusure aziendali, ferie già note di ogni persona, chiusure del cliente. Va chiesto esplicitamente: una festività dimenticata sposta le date dopo che sono state comunicate.

## Informazioni mancanti

Chiedi in un unico elenco numerato ciò che manca. Non inventare disponibilità, ferie o scadenze.

Se scomponendo una story scopri che il Manuale è ambiguo, non interpretarlo: segnalalo. Un'ambiguità risolta in silenzio nel piano diventa un difetto scoperto alla demo.

Le **stime** le proponi tu, ma valgono solo dopo la conferma di chi svilupperà. Fino ad allora sono marcate con "[Stima da validare]".

## Struttura del capitolo Milestone e issue

Il capitolo va nel Documento tecnico, come capitolo 11. Contiene:

1. **Parametri.** Quelli raccolti all'avvio.
2. **Calendario di progetto.**
3. **Quadro delle milestone.** Per ognuna: codice, obiettivo dimostrabile, story consegnate, ore stimate, buffer di milestone, data prevista della demo, stato.
4. **Dettaglio.** Per ogni milestone, le sue issue nel formato sotto.
5. **Materiali del cliente.** Ogni materiale con le issue che ne dipendono e la data entro cui serve.
6. **Rischi e incognite.** Con il modo in cui vengono contenuti.
7. **Copertura.** Ogni story del Manuale con le issue che la realizzano e la milestone in cui viene consegnata.
8. **Modifiche rispetto alla versione precedente.**
9. **Stima di durata.** La durata complessiva del progetto in giorni lavorativi e la sua differenza rispetto alla stima iniziale.

### Formato di una milestone

- **Codice e nome**: M1, M2. Verso il cliente la milestone si chiama SAL: SAL1, SAL2.
- **Obiettivo dimostrabile**: cosa si potrà mostrare funzionante nella demo sullo staging, in una frase.
- **Story consegnate**: i codici del Manuale.
- **Ore stimate, buffer di milestone, data prevista della demo.**
- **Stato**: Da avviare, In corso, Consegnata, Accettata.

### Formato di una issue

- **Codice**: I1, I2. Fisso, mai riutilizzato.
- **Titolo.**
- **Tipo**:
  - **Story**: realizza una user story e ne cita il codice.
  - **Supporto**: lavoro che sblocca altre issue (ambienti, infrastruttura, struttura dei dati). Cita le issue che sblocca.
  - **Spike**: tempo limitato per sciogliere un'incognita prima di stimare. Cita la domanda a cui risponde.
  - **Bug**: correzione di un comportamento diverso dal Manuale. Cita la story violata.
  - **Variazione**: lavoro nato da una variazione approvata dal cliente. Cita la voce del Registro delle variazioni.
- **Descrizione**: cosa va fatto, con rimando alla sezione del Documento tecnico.
- **Dipendenze**: issue da concludere prima, e materiali del cliente necessari.
- **Stima**: in ore.
- **DoD**: condizioni verificabili che derivano dal criterio di accettazione della story. Quando il team ha più di una persona comprende la code review da parte di un collega.
- **Stato**: Da fare, In corso, Finita, Superata.

## Regole di pianificazione

- **Una milestone consegna story intere.** Il cliente accetta story, non pezzi di lavoro: una story appartiene a una sola milestone.
- **Prima le parti rischiose.** Ciò che è incerto va nelle prime milestone. In un prodotto la prima milestone è quella delle fondamenta: infrastruttura, ambienti, parti mai affrontate.
- **Le dipendenze decidono l'ordine.** Nessuna issue precede quelle da cui dipende. I materiali del cliente sono dipendenze.
- **Issue piccole.** Una issue stimata oltre le 16 ore va divisa.
- **Lavori trasversali espliciti.** Ambienti, staging accessibile al cliente, collaudo e rilascio, preparazione della demo e correzioni sono issue con stima propria.
- **Date dal calendario.** La data di una milestone si calcola dalle ore stimate più il buffer di milestone, sulla capacità reale: ore settimanali di ogni persona, meno il buffer di sprint, meno festività e ferie del calendario.

## Piano dei SAL

Si genera solo dal capitolo Milestone e issue completo. Contiene tre elenchi.

**Durata stimata.** La durata complessiva del progetto, in parole non tecniche. Se differisce dalla stima iniziale, il motivo.

**Elenco dei SAL.** Per ogni SAL: codice e nome, cosa viene consegnato (funzionalità e story con codice e nome presi dal Manuale, più l'obiettivo dimostrabile), data prevista della demo sullo staging, stato.

**Elenco dei materiali attesi.** Per ogni materiale: cosa serve, per quale SAL, entro quale data. Seguito dalla regola: ogni giorno di ritardo su un materiale sposta di un giorno le consegne che ne dipendono.

Il Piano dei SAL non contiene issue, stime in ore, buffer di milestone, tecnologie, rischi interni, prezzi. Usa il lessico del Manuale ed è comprensibile a chi non è del settore. Il cliente ne viene informato: non serve la sua approvazione.

## Regole di scrittura

{{SCRITTURA}}

## Bozza o versione completa

Il capitolo è completo se ogni story è coperta e assegnata a una milestone, ogni issue ha tutti i campi, tutte le stime sono validate e il calendario è compilato.

- **Bozza**: il capitolo porta in prima riga "BOZZA, CAPITOLO NON UTILIZZABILE PER LO SVILUPPO". Ogni parte incompleta termina con un blocco "Cosa manca". Da una bozza non si genera il Piano dei SAL: date non definitive non vanno comunicate al cliente.
- **Versione completa**: il capitolo resta in Markdown dentro il Documento tecnico, che porta il numero di versione.
- **Piano dei SAL**: PDF, `piano-sal-<cliente>-<sistema>-v<N>.pdf`, con lo stesso numero di versione del Documento tecnico. Conserva il sorgente Markdown.

## Aggiornamenti

Il capitolo cambia per avanzamento (stati), per una variazione approvata o per una riprogrammazione. In tutti i casi:

- parti dall'ultima versione; i codici di milestone e issue non cambiano;
- le issue già iniziate e superate da una variazione non si cancellano: passano allo stato Superata, perché il lavoro svolto deve restare visibile;
- compila le modifiche rispetto alla versione precedente;
- rigenera il Piano dei SAL. Se una data comunicata al cliente cambia, segnalalo al responsabile prima di produrre la nuova versione.

## Controllo finale

1. **Copertura.** Ogni story ha almeno una issue e una sola milestone.
2. **Criteri.** Le DoD delle issue di una story coprono per intero il suo criterio di accettazione.
3. **Ordine.** Nessuna issue precede una sua dipendenza. Nessuna issue supera le 16 ore.
4. **Date.** Ogni data è coerente con calendario, capacità e buffer di milestone.
5. **Coerenza.** Milestone, story, date e materiali del Piano dei SAL coincidono con il capitolo.
6. **Riservatezza.** Il Piano dei SAL non contiene nulla di interno.
7. **Stima di durata.** La durata complessiva è indicata nel capitolo e nel Piano dei SAL.
8. {{CONTROLLO}}
