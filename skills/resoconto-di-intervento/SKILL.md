---
name: resoconto-di-intervento
description: Scrive il Resoconto di intervento, il documento finale di un ticket per il cliente: una sintesi non tecnica di cosa il ticket ha risolto o aggiunto al prodotto e in che modo, con user story o brevi riassunti. Usala a lavoro sviluppato, prima del rilascio, per ogni ticket.
---

# Resoconto di intervento

## A cosa serve

Il Resoconto di intervento è il documento che chiude un ticket verso il cliente. Dice cosa il ticket ha risolto o aggiunto al prodotto e in che modo, in parole che il cliente capisce. Si invia al cliente al rilascio, che coincide con la chiusura del ticket.

Non contiene nulla di tecnico: niente file cambiati, codice, moduli, tecnologie. Non contiene ore né prezzi. Il cliente non conferma e non prova il lavoro prima: il resoconto è una comunicazione, non una richiesta di approvazione.

Il documento tecnico per lo sviluppatore è un altro: la Scheda di intervento (skill `scheda-di-intervento`).

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Il ticket.** Il testo della richiesta e degli scambi con il cliente, oppure dove si trova.
2. **Il cliente.** Il nome con cui indicarlo.
3. **La Scheda di intervento**, con il tipo del ticket (bug, feature, entrambi, assistenza), le story di riferimento e le condizioni di fine lavoro.
4. **Cosa è stato realmente fatto**, se diverso da quanto previsto. Lo dice lo sviluppatore. Se una parte prevista non è stata fatta, serve saperlo.
5. **Il Manuale del prodotto**, se il sistema ne ha uno: serve per i codici e i titoli delle story.

## Contenuto

Il resoconto ha queste voci, in quest'ordine:

1. **Cosa è stato risolto o aggiunto.** Una o due frasi, nei termini di ciò che l'utente vede e può fare.
2. **In che modo.** Il dettaglio, con le user story oppure con brevi riassunti:
   - per ogni story coinvolta: codice (se già nel Manuale), titolo e frase "Come, voglio, per";
   - una story nuova non ha ancora il codice: si cita per titolo e frase, e il codice arriva con l'aggiornamento del Manuale;
   - quando una story non basta a spiegare, un breve riassunto in parole comuni.
3. **Cosa non è stato fatto.** Solo se qualcosa di chiesto resta fuori, con il motivo. Se tutto è stato fatto, la voce non c'è.

Cosa scrivere secondo il tipo:

- **Bug.** Cosa non funzionava e cosa funziona ora, con la story violata. Non si spiega la causa.
- **Feature.** Cosa il prodotto fa in più o in modo diverso, con le story nuove o cambiate.
- **Entrambi.** Prima ciò che è stato corretto, poi ciò che è stato aggiunto o cambiato.
- **Assistenza.** La risposta alla domanda, o il risultato del controllo o dell'operazione, con le istruzioni utili al cliente. Niente story.

## Regole di contenuto

- **Per il cliente.** Parole comuni. Un termine tecnico inevitabile va spiegato. Le tecnologie non si nominano: il cliente deve capire cosa cambia per lui, non come è costruito.
- **Nessun riferimento tecnico.** Né file, né codice, né moduli, né nomi di funzioni o di tabelle.
- **Nessuna ora e nessun prezzo.**
- **Nessun tono commerciale.** Un resoconto dice cosa è stato fatto, non quanto è stato difficile.
- **Il lessico del Manuale.** Le cose hanno lo stesso nome che nel Manuale e nelle comunicazioni precedenti.
- **Testo da incollare.** Restituisci il resoconto come testo semplice, con le voci su righe separate e le etichette in chiaro, pronto per la risposta nel ticket. Produci un file solo se viene chiesto.

## Regole di scrittura

{{SCRITTURA}}

## Bozza o resoconto completo

Il resoconto è **completo** solo se le voci sono compilate e ciò che è stato realmente fatto è noto. Altrimenti produci una **bozza**: la prima riga è "BOZZA INTERNA, DA NON INVIARE AL CLIENTE", e ogni voce incompleta è seguita da una riga "Cosa manca", con ciò che serve e chi deve fornirlo.

## Controllo finale

1. **Tracciabilità.** Ogni cosa prevista dalla voce "Cosa fare" della Scheda di intervento compare tra le cose fatte oppure tra quelle non fatte, con il motivo.
2. **Nessun riferimento tecnico.** Nessun file, codice, modulo, tecnologia, ora o prezzo.
3. **User story.** Ogni story citata ha titolo e frase "Come, voglio, per", e il codice se già nel Manuale.
4. **Coerenza con il tipo.** Un bug dice cosa funziona ora, una feature cosa c'è in più, un'assistenza dà la risposta.
5. {{CONTROLLO}}
