# Diario, ticket 1 (103), prova 3

Data dell'esecuzione: 2026-10-12. Piani e skill dopo la correzione di Leonardo: il ticket ha un solo documento, la Scheda di intervento (PDF nella radice, sorgenti con tutte le versioni in `claude`), più `source` e `log`. Un ticket non crea né aggiorna Manuale e Documento tecnico. Il contenuto della richiesta, della telefonata, dei messaggi e della Scheda viene dalle prove 1 e 2. Le osservazioni hanno il codice T3-n.

## Cosa è stato rifatto e cosa no

- **Documenti del sistema.** Nessun Manuale e nessun Documento tecnico nella cartella del ticket. La prova 2 li aveva prodotti (Manuale v1.4 e v1.5, Documento tecnico v1.3 e v1.4) ed è stata dichiarata superata.
- **Scheda di intervento.** Cinque versioni in `claude`: bozza 1 (5 ottobre), v1 (13 ottobre, completa), v2 (15 ottobre, corretta per il gestionale), v3 (20 ottobre, fine lavoro, con "Cosa è stato fatto" e "Effetto sui documenti del sistema"), v4 (5 novembre, con il seguito in garanzia). PDF nella radice solo della v4, `01-scheda-di-intervento-v4.pdf`.
- **Messaggi.** Gli stessi 12 file in `source` della prova 2.
- **Storico.** Le voci sui documenti sono sostituite da voci sulla Scheda (v3 e v4).

## Osservazioni

- T3-1, Buco: il kickoff di un progetto deve leggere le Schede dei ticket chiusi dopo l'ultima versione dei documenti, ma non esiste un modo di trovarle senza scorrere tutte le cartelle dei ticket. Nel test la Scheda 103 è stata recepita dal progetto 107 a mano. Servirebbe un elenco (per esempio in un file di indice della knowledge base) dei ticket chiusi con la data di chiusura e il sistema.
- T3-2, Passaggio: la Scheda di un ticket dice "Effetto sui documenti del sistema" con i codici delle story e dei capitoli. Chi la scrive (il responsabile del ticket, a fine lavoro) deve conoscere il Manuale e il Documento tecnico vigenti: se nel frattempo un progetto ha cambiato i documenti, i codici possono non corrispondere più. Nessuna skill lo dice.
- T3-3, Peso: la Scheda ha ora cinque versioni per un ticket da 13 ore, ognuna completa. Le versioni v2, v3 e v4 aggiungono poco alla v1. La scelta è coerente con la regola delle versioni, ma pesa per un ticket.
- T3-4, Esecuzione: contenuto riusato dalla prova 1, struttura rifatta.

## Controlli finali

Script di verifica (`build/verifica-lavorazione.js`): radice con un PDF numerato, nessun Manuale o Documento tecnico, nessun "invariato", storico in ordine con etichette corrette, messaggi citati presenti. Tutto superato.
