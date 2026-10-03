---
name: piano-di-lancio
description: Scrive il Piano di lancio di un prodotto per il cliente, con data, dati iniziali da caricare, formazione, apertura graduale, assistenza rafforzata e ciò che serve dal cliente. Usala solo per i prodotti, quando le milestone del primo rilascio si avvicinano alla conclusione.
---

# Piano di lancio

## A cosa serve

Un prodotto non va in produzione con un semplice rilascio: prima servono dati, contenuti, utenti formati, adempimenti legali. Il Piano di lancio mette in fila tutto ciò che deve essere pronto, chi lo deve fornire ed entro quando.

È un documento per il cliente, che lo approva: molte delle cose che servono dipendono da lui, e una che manca sposta la data.

Vale solo per i prodotti. Il rilascio di un progetto o di un ticket non richiede questo documento.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Cliente e prodotto.**
2. **Le fonti.** Manuale del prodotto, Piano delle milestone, Piano dei SAL, Documento tecnico (per infrastruttura e ritorno alla versione precedente).
3. **I parametri del lancio**:
   - la data prevista;
   - durata del periodo di assistenza rafforzata (proposta: 2 settimane);
   - durata della garanzia (proposta: 60 giorni);
   - chi sono gli utilizzatori e quanti;
   - se il lancio è graduale e con quale gruppo iniziale.

Non inventare date o numeri: ciò che manca, chiedilo.

## Struttura

Intestazione: titolo, cliente, prodotto, data, versione.

**In sintesi.** Poche righe: la data di lancio, cosa deve essere pronto, cosa serve dal cliente.

1. **Cosa viene lanciato.** Le funzionalità del primo rilascio, con codice e nome presi dal Manuale. E cosa arriverà nei rilasci successivi, perché gli utilizzatori non lo cerchino.
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
9. **Dopo il lancio.** Parte la garanzia. Le nuove richieste arrivano come ticket, i rilasci successivi come progetti.

## Promemoria interno

A parte, non nel documento per il cliente, restituisci un elenco per il team:

- i controlli tecnici prima del lancio, dal Documento tecnico: backup, monitoraggio, ritorno alla versione precedente provato;
- le issue ancora aperte che bloccano il lancio;
- i difetti non bloccanti accettati nelle demo e non ancora corretti.

## Regole di contenuto

- **Per il cliente.** Nessuna tecnologia, nessun prezzo. Le date ci sono, perché questo documento serve a fissarle.
- **Ogni giorno di ritardo su ciò che serve dal cliente sposta di un giorno la data di lancio.** Va scritto in chiaro nella sezione 3.
- **Stesso lessico del Manuale.**

## Regole di scrittura

{{SCRITTURA}}

## Bozza o versione completa

Il piano è completo se ogni voce della sezione 3 ha una data e un responsabile, e i parametri del lancio sono stati confermati.

- **Bozza**: Markdown, `piano-lancio-<cliente>-<prodotto>-bozza-<N>.md`. Prima riga "BOZZA INTERNA, DA NON CONDIVIDERE CON IL CLIENTE". Ogni parte incompleta termina con un blocco "Cosa manca".
- **Versione completa**: PDF, `piano-lancio-<cliente>-<prodotto>-v<N>.pdf`. Conserva il sorgente Markdown.

Se una data cambia dopo l'approvazione, produci una nuova versione con l'elenco delle modifiche.

## Controllo finale

1. Ogni funzionalità elencata coincide con il Manuale e con il primo rilascio.
2. Ogni cosa che serve dal cliente ha una data e un responsabile.
3. Gli adempimenti legali sono presenti.
4. Il promemoria interno è separato dal documento per il cliente.
5. {{CONTROLLO}}
