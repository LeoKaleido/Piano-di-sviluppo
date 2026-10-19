# Scheda tecnica di rilascio, area riservata per i rivenditori

Interna. Data: 2027-02-15. Ricavata dalla Guida alla pubblicazione v1.1 e dalle annotazioni `guida` delle issue. Particolarità: migrazione del database; rotte nuove senza cache.

1. Copia di sicurezza del database di `lumera-api`. Chi: incaricato della pubblicazione.
2. Eseguire la migrazione del database (ruolo `rivenditore`, tabella dei collegamenti, tabella dei listini). Verifica: le tabelle esistono e le righe di prova non ci sono.
3. Pubblicare `lumera-api`. Verifica: un ordine di prova di un cliente non rivenditore viene creato con il prezzo di sempre.
4. Pubblicare `lumera-sito`. Riavviare il server SSR e svuotare la cache sulle rotte `/catalogo` e `/prodotto` (regola della Guida). Le rotte dell'area riservata non hanno cache. Verifica: un cliente non rivenditore vede il prezzo di sempre; un rivenditore di prova vede il proprio.
5. Pubblicare `lumera-gestionale`. Verifica: la schermata di collegamento e i listini si aprono.
6. Caricare i listini dei quaranta rivenditori dal gestionale. Chi: Diego, con l'incaricato. Verifica: numero di listini uguale ai file consegnati.
7. Ritorno alla versione precedente: se la migrazione fallisce o i prezzi dei clienti non rivenditori sono sbagliati, si ripubblicano le versioni precedenti di sito, API e gestionale e si esegue la migrazione di ritorno, provata sull'ambiente di prova. Gli ordini dei rivenditori già registrati si salvano prima. Decide il project manager 2 con Franco.
8. Contatti: project manager 2, sistemista 1, sistemista 2.
