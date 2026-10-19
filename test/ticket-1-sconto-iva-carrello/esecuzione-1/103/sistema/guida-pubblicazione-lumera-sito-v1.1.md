# Guida alla pubblicazione, Lumera Arredi, sito di vendita online

Interna. Versione 1.1, del 2026-10-21. Deriva dalla v1.0. Unica Guida del sistema. Copre il sito (`lumera-sito`) e le API (`lumera-api`). Non copre ancora il gestionale (`lumera-gestionale`). Documento a scopo di test, scritto per intero.

## 1. Ambienti

- **Staging.** Ambiente di prova di sito e API, separato dalla produzione. Rami `staging` di `lumera-sito` e `lumera-api`.
- **Produzione.** Sito e API pubblici. Rami `main` di `lumera-sito` e `lumera-api`.
- **Gestione.** Sistemista 1 e sistemista 2. Uno dei due è l'incaricato della pubblicazione.
- Il gestionale ha un proprio ambiente, non trattato in questa Guida.

## 2. Ordine dei passi

La pubblicazione non avviene in CI: l'incaricato esegue i passi a mano.

1. Copia di sicurezza del database di `lumera-api`. Chi: incaricato.
2. Pubblicare `lumera-api` dal ramo `main`. Chi: incaricato.
3. Pubblicare `lumera-sito` dal ramo `main`. Chi: incaricato.
4. Riavviare il server SSR del sito (vedi sezione 3).
5. Svuotare la cache sulle rotte `/catalogo` e `/prodotto` (vedi sezione 3).
6. Verifiche (sezione 4).

## 3. Regole del sistema

- **Riavvio del server SSR.** Dopo ogni pubblicazione del sito va riavviato il server SSR, dal pannello del server o dal gestore dei processi. Motivo: senza riavvio il server serve ancora le pagine della versione precedente. Introdotta dalla lavorazione 96.
- **Cache su `/catalogo` e `/prodotto`.** Dopo ogni pubblicazione del sito va svuotata la cache sulle rotte `/catalogo` e `/prodotto`, dal pannello della cache, voce di svuotamento per percorso. Motivo: le due rotte sono in cache e mostrerebbero prezzi e disponibilità vecchi. Introdotta dalla lavorazione 96.
- **Circuiti di carta.** I circuiti accettati stanno in un file di configurazione del sito: una modifica richiede una pubblicazione. Introdotta dalla lavorazione 96.
- **Segreti.** Le credenziali del servizio di pagamento e del servizio email sono custodite dal sistemista 1 e non stanno nei repository.

**Cosa manca.** La Guida non copre `lumera-gestionale`: né l'ordine con cui si pubblica rispetto alle API e al sito, né se serve un riavvio o una cache da svuotare. Il 20 ottobre il gestionale è stato pubblicato senza una regola scritta (ticket 103). Può fornirlo: chi ha pubblicato (incaricato della pubblicazione) e chi conosce il sistema (sistemista 1).

## 4. Verifiche

- Dopo il passo 2: un ordine di prova viene creato con il prezzo atteso.
- Dopo i passi 3, 4 e 5: la home risponde, il catalogo mostra un prodotto di prova con il prezzo atteso, la scheda di quel prodotto mostra la stessa disponibilità del gestionale.
- A fine pubblicazione: un acquisto di prova con carta di prova riesce fino alla conferma e l'email di conferma arriva.

## 5. Ritorno alla versione precedente

Si decide se il sito non è utilizzabile o i prezzi mostrati sono sbagliati; decide il responsabile del lavoro con l'incaricato. Si ripubblicano le versioni precedenti di `lumera-sito` e di `lumera-api` e si ripetono i passi 4 e 5. Se il database è stato modificato, i dati scritti nel frattempo vanno salvati prima di ripristinare la copia di sicurezza.

## 6. Backup

Copia di sicurezza del database prima di ogni pubblicazione, conservata dal sistemista 1.

## 7. Contatti

Responsabile del lavoro, sistemista 1, sistemista 2.

## 8. Cronologia

- v1.0, 2026-09-14, lavorazione 96: prima stesura.
- v1.1, 2026-10-21, ticket 103: aggiunto il blocco "Cosa manca" sul gestionale, emerso alla pubblicazione del 20 ottobre.
