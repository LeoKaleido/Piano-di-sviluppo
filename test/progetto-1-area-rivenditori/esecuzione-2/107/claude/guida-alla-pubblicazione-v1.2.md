# Guida alla pubblicazione, Lumera Arredi, sito di vendita online

Interna. Versione 1.2, del 2027-02-26. Deriva dalla v1.1 (ticket 103). Unica Guida del sistema. Copre il sito (`lumera-sito`), le API (`lumera-api`) e, per l'ordine dei passi, il gestionale (`lumera-gestionale`). Documento a scopo di test, scritto per intero.

## 1. Ambienti

- **Staging.** Ambiente di prova di sito e API, separato dalla produzione. Rami `staging` di `lumera-sito` e `lumera-api`.
- **Produzione.** Sito e API pubblici. Rami `main` di `lumera-sito` e `lumera-api`.
- **Gestione.** Sistemista 1 e sistemista 2. Uno dei due è l'incaricato della pubblicazione.
- Il gestionale ha un proprio ambiente. Repository `lumera-gestionale`.

## 2. Ordine dei passi

La pubblicazione non avviene in CI: l'incaricato esegue i passi a mano.

1. Copia di sicurezza del database di `lumera-api`. Chi: incaricato.
2. Se il lavoro contiene una migrazione del database, eseguirla (vedi sezione 3).
3. Pubblicare `lumera-api` dal ramo `main`. Chi: incaricato.
4. Pubblicare `lumera-sito` dal ramo `main`. Chi: incaricato.
5. Riavviare il server SSR del sito (vedi sezione 3).
6. Svuotare la cache sulle rotte `/catalogo` e `/prodotto` (vedi sezione 3).
7. Pubblicare `lumera-gestionale`, dopo il sito e le API.
8. Verifiche (sezione 4).

## 3. Regole del sistema

- **Riavvio del server SSR.** Dopo ogni pubblicazione del sito va riavviato il server SSR, dal pannello del server o dal gestore dei processi. Motivo: senza riavvio il server serve ancora le pagine della versione precedente. Introdotta dalla lavorazione 96.
- **Cache su `/catalogo` e `/prodotto`.** Dopo ogni pubblicazione del sito va svuotata la cache sulle rotte `/catalogo` e `/prodotto`, dal pannello della cache, voce di svuotamento per percorso. Motivo: le due rotte sono in cache e mostrerebbero prezzi e disponibilità vecchi. Vale per i clienti che non sono rivenditori. Introdotta dalla lavorazione 96.
- **Rotte dell'area riservata senza cache.** Le rotte dell'area riservata dei rivenditori non hanno cache, perché mostrano prezzi diversi per utente. Non vanno svuotate e non vanno messe in cache. Introdotta dalla lavorazione 107.
- **Migrazioni del database.** Prima si fa la copia di sicurezza. La migrazione si esegue prima di pubblicare l'API. Esiste una migrazione di ritorno, provata sull'ambiente di prova. Motivo: la v1.1 non diceva nulla sulle migrazioni. Introdotta dalla lavorazione 107.
- **Gestionale.** Si pubblica dopo il sito e le API. Introdotta dalla lavorazione 107, dalla scheda tecnica di rilascio del 15 febbraio 2027.
- **Circuiti di carta.** I circuiti accettati stanno in un file di configurazione del sito: una modifica richiede una pubblicazione. Introdotta dalla lavorazione 96.
- **Segreti.** Le credenziali del servizio di pagamento e del servizio email sono custodite dal sistemista 1 e non stanno nei repository.

**Cosa manca.** Riavvii o cache del gestionale. Può fornirlo: sistemista 1.

## 4. Verifiche

- Dopo il passo 3: un ordine di prova di un cliente non rivenditore viene creato con il prezzo di sempre.
- Dopo i passi 4, 5 e 6: la home risponde, il catalogo mostra un prodotto di prova con il prezzo atteso, la scheda di quel prodotto mostra la stessa disponibilità del gestionale. Un cliente non rivenditore vede il prezzo di sempre; un rivenditore di prova vede il proprio.
- Dopo il passo 7: la schermata di collegamento dei rivenditori e quella dei listini si aprono.
- A fine pubblicazione: un acquisto di prova con carta di prova riesce fino alla conferma e l'email di conferma arriva.

## 5. Ritorno alla versione precedente

Si decide se il sito non è utilizzabile o i prezzi mostrati sono sbagliati; decide il responsabile del lavoro con l'incaricato (con il referente del cliente se il lavoro è un progetto). Si ripubblicano le versioni precedenti di `lumera-sito`, `lumera-api` e `lumera-gestionale` e si ripetono i passi 5 e 6. Se il lavoro conteneva una migrazione, si esegue la migrazione di ritorno. I dati scritti nel frattempo (per esempio gli ordini dei rivenditori già registrati) si salvano prima di ripristinare la copia di sicurezza.

## 6. Backup

Copia di sicurezza del database prima di ogni pubblicazione, conservata dal sistemista 1.

## 7. Contatti

Responsabile del lavoro, sistemista 1, sistemista 2.

## 8. Cronologia

- v1.0, 2026-09-14, lavorazione 96: prima stesura.
- v1.1, 2026-10-21, ticket 103: aggiunto il blocco "Cosa manca" sul gestionale, emerso alla pubblicazione del 20 ottobre.
- v1.2, 2027-02-26, progetto 107: migrazioni del database con migrazione di ritorno; rotte dell'area riservata senza cache; ordine di pubblicazione del gestionale; ritorno alla versione precedente esteso a tre repository. Rimane il blocco "Cosa manca" sui riavvii e sulla cache del gestionale.
