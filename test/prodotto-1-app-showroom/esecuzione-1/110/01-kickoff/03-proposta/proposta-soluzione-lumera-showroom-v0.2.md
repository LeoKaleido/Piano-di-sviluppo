# Proposta di soluzione, applicazione per gli showroom

Cliente: Lumera Arredi. Data: 2026-11-13. Versione 0.2 (confermata il 24 novembre 2026, diventa v1.0).

## Modifiche rispetto alla versione precedente

- **D1, risposta di Franco (9 novembre):** gli sconti oltre il 10% vengono bloccati e il consulente chiama Franco. Applicata in "Compromessi" e nella story F4.2. La domanda passa tra quelle con risposta.
- **D2, risposta:** tablet di un solo modello, scelto entro marzo 2027. Applicata in "Cosa serve dal cliente". Passa tra quelle con risposta.
- **D3, risposta:** Franco chiede a Elena di riferire su Torino e Bologna. Torino e Bologna non sono stati sentiti. Applicata come assunzione (vedi sotto).
- **D4, risposta:** l'informativa la scrive il consulente legale di Lumera. Applicata in "Cosa serve dal cliente".
- **D5, risposta:** Elena pulisce i doppioni e consegna il foglio. Applicata in "Cosa serve dal cliente".
- **D6, risposta:** Lumera crea un indirizzo dedicato. Applicata in "Cosa serve dal cliente".
- **Richiesta nuova di Franco (9 novembre):** pagamento sul tablet, firma e riepilogo delle vendite nella prima versione. Non accolta: nella prima versione entra solo ciò senza cui l'applicazione non è utilizzabile. Aggiungere le tre funzioni allungherebbe lo sviluppo di circa cinque settimane e la scadenza del 13 settembre 2027 non sarebbe più rispettabile. La divisione in versioni resta quella della v0.1.
- Nuova assunzione su Torino e Bologna.
- Nessun'altra modifica.

## In sintesi

Verrà realizzata un'applicazione per tablet che permette ai consulenti degli showroom di gestire l'agenda degli appuntamenti, preparare la proposta per il cliente con i prodotti scelti, inviarla per email e trasformarla in ordine, senza ricopiare nulla a mano. La prima versione contiene ciò che serve per lavorare ogni giorno; pagamento sul tablet, firma e riepilogo delle vendite arrivano in una seconda versione. L'applicazione funzionerà anche senza connessione. Non ci sono domande aperte.

## Parte 1. La richiesta come è stata compresa

Franco ha chiesto: "un'applicazione per tablet per i consulenti: agenda degli appuntamenti, proposta con i prodotti scelti da mandare al cliente per email, e la proposta che diventa ordine", pronta per l'apertura dello showroom di Verona il 13 settembre 2027. Ha chiesto anche di poter far pagare l'acconto sul tablet, di far firmare la proposta al cliente e di avere un riepilogo delle vendite per showroom.

## Parte 2. La soluzione

### Obiettivo e utenti

Togliere la carta e il doppio lavoro dagli showroom. La usano i nove consulenti di Milano, Torino e Bologna, e i responsabili degli showroom. I clienti finali ricevono la proposta per email e non usano l'applicazione.

### Soluzione proposta

- Il consulente accede, vede gli appuntamenti del giorno del proprio showroom, ne fissa, ne sposta e ne annulla.
- Il consulente cerca un cliente o lo registra, con il consenso al trattamento dei dati.
- Il consulente compone una proposta scegliendo i prodotti del catalogo e le quantità, applica uno sconto fino al 10%, vede il totale con l'IVA e la invia al cliente per email.
- Il consulente trasforma la proposta confermata in ordine, che arriva a Marta nel gestionale senza ricopiatura, e ne vede lo stato.
- Il responsabile dello showroom vede gli appuntamenti dei suoi consulenti.
- Tutti possono lavorare anche quando la connessione manca: ciò che è fatto senza rete si sincronizza appena torna.

### Compromessi

- **Sconto.** Il consulente può concedere fino al 10%, come oggi. Oltre il 10% l'applicazione non permette di proseguire e il consulente chiama Franco, come oggi. Un'approvazione dentro l'applicazione richiederebbe circa due settimane in più: non è inclusa.

### Suggerimenti

- Nessuno.

### Cosa non si potrà fare

- L'applicazione non sostituisce il gestionale: i dati dei clienti e degli ordini continuano a vivere lì.
- Non sarà usabile dai clienti finali.
- Pagamento, firma e riepilogo delle vendite non sono nella prima versione.
- Approvazione degli sconti oltre il 10% dentro l'applicazione.

### Divisione in versioni (release)

- **Prima release.** Accesso dei consulenti, agenda, clienti, proposta, invio per email, ordine, uso senza connessione.
- **Seconda release** (un progetto a parte, dopo il lancio). Pagamento dell'acconto sul tablet, firma del cliente, riepilogo delle vendite per showroom.

### Assunzioni

- I prezzi sono quelli del sito e si leggono da lì.
- Gli appuntamenti sono visibili solo allo showroom a cui appartengono.
- I consulenti lavorano su tablet forniti da Lumera.
- Torino e Bologna lavorano come Milano. Se alle prove emergono differenze di rilievo, sono richieste nuove.

### Domande aperte

Nessuna ancora aperta.

**Domande con risposta**

- **D1.** Sconti oltre il 10%: bloccati, il consulente chiama Franco. Risposta di Franco, 9 novembre. Applicata in compromessi e nella story F4.2.
- **D2.** Un solo modello di tablet, scelto entro marzo 2027. Risposta di Franco, 9 novembre. Applicata in "Cosa serve dal cliente".
- **D3.** Elena riferirà su Torino e Bologna. Risposta di Franco, 9 novembre. Trasformata in assunzione.
- **D4.** L'informativa la scrive il consulente legale di Lumera. Risposta di Franco, 9 novembre. Applicata in "Cosa serve dal cliente".
- **D5.** Elena pulisce i doppioni. Risposta di Franco, 9 novembre. Applicata in "Cosa serve dal cliente".
- **D6.** Lumera crea un indirizzo dedicato. Risposta di Franco, 9 novembre. Applicata in "Cosa serve dal cliente".

### Cosa serve dal cliente

- Il nome del referente: Franco.
- I tablet, di un solo modello scelto da Lumera.
- L'informativa sulla privacy e il testo del consenso, scritti dal consulente legale di Lumera.
- Il foglio dei clienti, pulito dai doppioni da Elena.
- Un indirizzo di posta dedicato per l'invio delle proposte.
- Account di prova per i consulenti durante le prove.

### Stima di durata

24 settimane di sviluppo per la prima release, a squadra completa, cioè circa sei mesi. Affidabilità media. Non è una data di consegna.

### Prossimi passi

1. Conferma della Proposta.
2. Prototipo e direzione grafica, da approvare.
3. Manuale del prodotto, da confermare.
4. Piano dei SAL con le date delle prove.

## Parte 3. Allegato

### Elenco delle user story, prima release

Invariato rispetto alla versione 0.1: F1.1, F1.2, F2.1 a F2.4, F3.1 a F3.3, F4.1 a F4.5, F5.1, F5.2, F6.1. Con questa versione F4.2 diventa: Come consulente, voglio applicare uno sconto fino al 10% e non oltre, per chiudere la trattativa nei limiti consentiti.

### Seconda release, solo a titolo

F7 Pagamento dell'acconto sul tablet. F8 Firma del cliente. F9 Riepilogo delle vendite per showroom.

### Come procederà il lavoro

Dopo la conferma della Proposta si approvano prototipo e grafica, poi si scrive il Manuale del prodotto, che Franco conferma. Il lavoro si sviluppa a tappe (SAL), ognuna provata da Lumera sull'ambiente di prova prima di procedere. Alla fine c'è una prova su tutto, la formazione dei consulenti e il lancio, prima in uno showroom e poi in tutti.

### Wireframe

Allegati i wireframe delle schermate principali (agenda e proposta), invariati.
