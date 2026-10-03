---
name: allineamento-documenti
description: Trova i documenti di altri lavori toccati da un ticket o da un progetto (Manuale del prodotto, Documento tecnico, documenti di progetti in corso, schede di altri ticket) e ne propone l'aggiornamento. Usala alla conferma di una scheda o di una proposta, e di nuovo alla chiusura del ticket o dopo il rilascio.
---

# Allineamento dei documenti

## A cosa serve

Un ticket o un progetto può cambiare un comportamento descritto nei documenti di un altro lavoro. Se nessuno se ne accorge, quei documenti diventano falsi: il Manuale del prodotto descrive qualcosa che il sistema non fa più, oppure un progetto in corso viene costruito su una base che un ticket ha appena cambiato.

La skill cerca i documenti toccati, dice cosa cambia in ciascuno e propone le modifiche. Le applica solo dopo la conferma del product lead.

Si usa in due momenti:

- **Prima di sviluppare**, alla conferma della Scheda di intervento o della Proposta di soluzione: serve a scoprire i conflitti con altri lavori quando costa ancora poco risolverli.
- **Dopo**, alla chiusura del ticket o dopo il rilascio del progetto: serve ad aggiornare i documenti con ciò che è stato realmente fatto.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Il lavoro di partenza.** Il ticket (con la sua Scheda di intervento) o il progetto (con Proposta di soluzione e Manuale), e il sistema su cui interviene.
2. **Il momento.** Prima di sviluppare, oppure dopo.
3. **Dove sono i documenti.** I documenti sono conservati su Drive. Chiedi in quale cartella si trovano quelli del cliente e del sistema: non dare per scontata la struttura. Se hai accesso a Drive, cerca tu a partire da quella cartella. Se non hai accesso, chiedi che i documenti vengano forniti e dichiara che il controllo copre solo quelli ricevuti.
4. **Per il momento "dopo"**: cosa è stato realmente fatto, se diverso da quanto previsto.

## Dove cercare

Sullo stesso sistema:

- il **Manuale del prodotto** e il **Documento tecnico** del sistema;
- i documenti dei **progetti in corso**: Stato di partenza, Proposta di soluzione, Piano delle milestone, wireframe e mockup;
- le **Schede di intervento** dei ticket aperti sulla stessa parte.

Su altri sistemi dello stesso cliente, solo se dialogano con la parte toccata: integrazioni, dati condivisi.

## Come riconoscere un documento toccato

Parti da ciò che il lavoro cambia: schermate, comportamenti, dati, integrazioni, permessi. Un documento è toccato se:

- descrive un comportamento che cambia;
- dà per scontato un comportamento che cambia, anche senza descriverlo;
- prevede di modificare la stessa parte in un altro modo;
- contiene un wireframe o un mockup di una schermata che cambia.

Leggi i documenti per intero: una ricerca per parole chiave non basta, perché la stessa cosa può essere chiamata in modi diversi in documenti vecchi. Se trovi due nomi per la stessa cosa, segnalalo.

## Rapporto di impatto

Restituisci un rapporto con un elenco, senza modificare nulla.

Per ogni documento toccato:

- **Documento**: nome, versione, lavoro a cui appartiene.
- **Punto toccato**: sezione, e codice della story se c'è.
- **Cosa cambia**: com'è scritto oggi e come dovrebbe diventare.
- **Tipo**:
  - **Aggiornamento**: il documento va allineato, nessun conflitto.
  - **Conflitto**: un altro lavoro in corso prevede qualcosa di incompatibile. Va risolto prima di sviluppare.
  - **Documento approvato dal cliente**: vedi la regola sotto.
- **Chi deve decidere.**

In coda al rapporto:

- **Documenti controllati senza impatto**, così è chiaro cosa è stato guardato.
- **Documenti non raggiunti**: quelli che non hai potuto leggere o trovare. Un controllo parziale va dichiarato come tale.

## Regola sui documenti approvati dal cliente

Un documento già approvato da un cliente non si modifica in silenzio. Se il lavoro lo tocca:

- se appartiene al sistema (Manuale del prodotto), e la modifica è la conseguenza di un lavoro confermato dallo stesso cliente, l'aggiornamento è lecito: si fa con una nuova versione numerata e l'origine della modifica dichiarata;
- se appartiene a un altro lavoro in corso (la proposta o il Manuale approvati per un progetto), la skill si ferma: segnala che per quel progetto serve una variazione o una comunicazione al cliente, e lascia la decisione al product lead.

## Applicare le modifiche

Solo dopo la conferma del product lead, e solo per le voci confermate.

- Manuale del prodotto e Documento tecnico: nuova versione, con le modifiche registrate e la loro origine (codice del ticket o del progetto). Appartengono al sistema: si aggiornano, non se ne creano di nuovi.
- Story eliminate: restano con il loro codice e la dicitura "Rimossa". Story nuove: codice successivo all'ultimo usato.
- Piano delle milestone di un altro progetto: non modificarlo. Segnala le issue toccate al product lead.

Dopo l'applicazione, elenca cosa è stato modificato e cosa resta in attesa di una decisione.

## Regole di scrittura

{{SCRITTURA}}

I documenti aggiornati mantengono il proprio lessico e le proprie regole: quelli per il cliente restano senza tecnologie, prezzi e date.

## Controllo finale

1. Ogni cosa che il lavoro cambia è stata cercata in tutti i documenti raggiunti.
2. Ogni voce del rapporto riporta il testo attuale e quello proposto.
3. Nessun documento è stato modificato prima della conferma.
4. Nessun documento approvato per un altro lavoro in corso è stato modificato.
5. I documenti non raggiunti sono dichiarati.
6. {{CONTROLLO}}
