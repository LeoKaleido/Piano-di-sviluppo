---
name: manuale-del-prodotto
description: Scrive e aggiorna il Manuale del prodotto, cioè cosa fa il sistema, con user story complete e criteri di accettazione. Usala dopo la conferma della proposta, per le correzioni del cliente e dopo ogni variazione o ticket che cambia un comportamento.
---

# Manuale del prodotto

## A cosa serve

Il Manuale del prodotto descrive in ogni dettaglio cosa fa il sistema. È l'unica fonte per i comportamenti: il cliente lo approva e vi riconosce ciò che riceverà, gli sviluppatori lo usano per costruire, e alla consegna decide se una story è accettata.

Il come viene realizzato non sta qui: sta nel Documento tecnico.

Il Manuale appartiene al sistema, non al singolo lavoro. Un sistema ha un solo Manuale: un progetto o un ticket lo aggiornano, non ne creano uno nuovo.

Il criterio di riuscita è doppio: uno sviluppatore che non ha mai parlato con il cliente deve poter costruire senza fare domande, e il cliente deve poterlo leggere senza competenze tecniche.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Cliente e sistema.**
2. **Manuale esistente.** Chiedi se il sistema ha già un Manuale e dove si trova. Se esiste, il lavoro è un aggiornamento.
3. **Le fonti.** La Proposta di soluzione confermata, lo Stato di partenza, la richiesta originale. Se la proposta non è confermata, avvisa che il Manuale rischia di essere rifatto e procedi solo se confermato.
4. **Situazione.** Prima stesura, riscontro del cliente, oppure aggiornamento dopo una variazione o un ticket.

## Informazioni mancanti

Il Manuale scende a un dettaglio che la proposta non ha: comportamenti passo per passo, casi particolari, limiti, permessi. Ciò che manca non va inventato: chiedilo in un unico elenco numerato.

- **Domande per il team**: bloccano il completamento.
- **Domande per il cliente**: vanno nel capitolo delle domande aperte, con codice M1, M2.

## Struttura

Intestazione: titolo, cliente, sistema, data, versione, versione della proposta da cui deriva.

1. **Scopo e ambito.** Cosa fa il sistema e per chi.
2. **Glossario.** Ogni termine proprio del sistema.
3. **Tipi di utente e permessi.** Chi usa il sistema e cosa può fare ciascuno.
4. **Funzionalità.** Una sezione per funzionalità, nel formato sotto.
5. **Schermate e navigazione.** Elenco delle schermate, cosa contiene ciascuna, come si passa dall'una all'altra. Rimanda a wireframe e mockup approvati.
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
- **Criterio di accettazione**: introdotto da "Accettata quando:". Deve essere verificabile in una demo con un sì o un no. "Funziona bene" non è un criterio; "l'utente riceve una email di conferma entro un minuto" lo è.

Esempio:

- **F3 Prenotazioni**
  - **F3.1** Come cliente finale, voglio prenotare un appuntamento scegliendo giorno e ora, per non dover telefonare.
  - Accettata quando: il cliente finale sceglie una fascia libera, riceve conferma via email e la fascia non è più prenotabile da altri.

Per un prodotto, le story del primo rilascio sono complete; quelle dei rilasci successivi restano a titolo e frase, con l'indicazione del rilascio.

## Regole di contenuto

- **Solo il cosa.** Nessuna tecnologia, nessuna scelta tecnica.
- **Stesso lessico della proposta.** Due nomi per la stessa cosa fanno credere che siano due cose.
- **Nessun prezzo e nessuna data.**
- **Nulla oltre la proposta.** Se scrivendo emerge una funzionalità non prevista, non aggiungerla: segnalala, perché amplia il lavoro concordato.
- **Formula delle user story.** È l'unica eccezione alla forma impersonale.

## Regole di scrittura

{{SCRITTURA}}

## Bozza o versione completa

Il Manuale è completo se ogni capitolo è compilato, ogni story ha comportamento, casi particolari e criterio di accettazione, e nessuna domanda per il team è senza risposta.

- **Bozza**: Markdown, `manuale-prodotto-<cliente>-<sistema>-bozza-<N>.md`. Prima riga "BOZZA INTERNA, DA NON CONDIVIDERE CON IL CLIENTE". Ogni parte incompleta termina con un blocco "Cosa manca".
- **Versione completa**: PDF, `manuale-prodotto-<cliente>-<sistema>-v<versione>.pdf`. Conserva il sorgente Markdown.

## Riscontro del cliente

Come per la proposta: raccogli il riscontro, scomponilo in voci, fai decidere al product lead l'esito di ogni correzione o nuova richiesta, aggiorna, produci una nuova versione numerata con l'elenco delle modifiche. Una richiesta che supera la proposta confermata non è una correzione: è una variazione, e va segnalata come tale.

## Approvazione e aggiornamenti successivi

La versione approvata dal cliente è la v1.0 e non contiene domande aperte.

Dopo la v1.0 il Manuale cambia in tre casi: una variazione approvata, un ticket che modifica un comportamento, un nuovo progetto sullo stesso sistema. In tutti:

- aggiorna le story toccate e incrementa la versione (v1.1, v1.2);
- le story eliminate restano con il loro codice e la dicitura "Rimossa nella v<versione>";
- le nuove ricevono il codice successivo all'ultimo usato;
- registra la modifica nel capitolo 11, con la sua origine (codice della variazione o del ticket);
- comunica l'elenco dei codici modificati, aggiunti o rimossi: serve per aggiornare Documento tecnico e Piano delle milestone.

Se l'aggiornamento tocca story già approvate dal cliente per un altro lavoro in corso, non applicarlo in silenzio: segnalalo al product lead.

## Controllo finale

1. Ogni punto della proposta è collegato ad almeno una story.
2. Ogni story completa ha un criterio di accettazione verificabile.
3. I termini coincidono con proposta e glossario.
4. Nessuna tecnologia, prezzo o data.
5. {{CONTROLLO}}
