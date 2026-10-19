# Proposta di soluzione, applicazione per gli showroom

Cliente: Lumera Arredi. Data: 2026-11-24. Proposta confermata da Franco il 24 novembre 2026, a voce, con riepilogo scritto (contenuto della versione 0.2).

## Modifiche rispetto alla versione precedente

- **v0.1 (2 novembre).** Prima versione.
- **v0.2 (13 novembre).** Risposte di Franco del 9 novembre alle domande D1-D6, applicate in "Compromessi", in "Cosa serve dal cliente" e nella story F4.2. Nuova assunzione su Torino e Bologna. La richiesta di Franco di avere pagamento, firma e riepilogo delle vendite nella prima versione non è stata accolta: allungherebbe lo sviluppo di circa 35 giorni e la scadenza del 13 settembre 2027 non sarebbe più rispettabile.
- **Conferma (24 novembre).** La v0.2 è confermata da Franco a voce, con riepilogo scritto lo stesso giorno. Il contenuto è quello della v0.2: la Proposta confermata non ha un numero di versione.

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

- **Sconto.** Il consulente può concedere fino al 10%, come oggi. Oltre il 10% l'applicazione non permette di proseguire e il consulente chiama Franco, come oggi. Un'approvazione dentro l'applicazione richiederebbe circa 14 giorni in più: non è inclusa.

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

### Stima di durata e tempi di rilascio

- **Durata.** Prima release: da 5 a 6 mesi di sviluppo, più probabile circa 5 mesi e mezzo, a squadra completa. Affidabilità media.
- **Tempi di rilascio indicativi.** Con l'avvio dello sviluppo ipotizzato a febbraio 2027, la prima release è pronta per il lancio tra agosto e settembre 2027, dopo la prova su tutto e la chiusura aziendale di agosto. Il margine rispetto al 13 settembre 2027 è piccolo. Non è una data di consegna: le date certe arrivano con il Piano dei SAL, dopo la conferma del Manuale.
- **Da cosa dipende.** Dalla conferma della Proposta e del Manuale nei tempi previsti, dai materiali del cliente (tablet, informativa sulla privacy, foglio dei clienti) e dall'estensione degli ordini, che si verifica nella prima tappa.

### Prossimi passi

1. Conferma della Proposta.
2. Prototipo e direzione grafica, da approvare.
3. Manuale del prodotto, da confermare.
4. Piano dei SAL con le date delle prove.

## Parte 3. Allegato

### Elenco delle user story, prima release

**F1 Accesso**
- **F1.1** Come consulente, voglio accedere con le mie credenziali, per usare l'applicazione.
- **F1.2** Come consulente, voglio vedere solo i dati del mio showroom, per non confondermi con quelli degli altri.

**F2 Agenda**
- **F2.1** Come consulente, voglio vedere gli appuntamenti del giorno, per sapere chi aspetto.
- **F2.2** Come consulente, voglio fissare un appuntamento, per non dimenticarlo.
- **F2.3** Come consulente, voglio spostare o annullare un appuntamento, per seguire i cambi del cliente.
- **F2.4** Come responsabile dello showroom, voglio vedere gli appuntamenti dei miei consulenti, per organizzare il lavoro.

**F3 Clienti**
- **F3.1** Come consulente, voglio cercare un cliente, per ritrovare lo storico.
- **F3.2** Come consulente, voglio registrare un cliente con il suo consenso, per poterlo contattare.
- **F3.3** Come consulente, voglio vedere le proposte di un cliente, per ricordare cosa gli ho proposto.

**F4 Proposte**
- **F4.1** Come consulente, voglio comporre una proposta scegliendo prodotti e quantità, per preparare l'offerta durante la visita.
- **F4.2** Come consulente, voglio applicare uno sconto fino al 10% e non oltre, per chiudere la trattativa nei limiti consentiti.
- **F4.3** Come consulente, voglio vedere il totale con l'IVA, per dirlo al cliente.
- **F4.4** Come consulente, voglio inviare la proposta al cliente per email, per non ricopiarla.
- **F4.5** Come consulente, voglio duplicare una proposta, per prepararne una simile.

**F5 Ordini**
- **F5.1** Come consulente, voglio trasformare una proposta confermata in ordine, per non ricopiarla nel gestionale.
- **F5.2** Come consulente, voglio vedere lo stato dell'ordine, per rispondere al cliente.

**F6 Uso senza connessione**
- **F6.1** Come consulente, voglio lavorare anche senza connessione, per non fermarmi nello showroom con poco segnale.

### Seconda release, solo a titolo

F7 Pagamento dell'acconto sul tablet. F8 Firma del cliente. F9 Riepilogo delle vendite per showroom.

### Come procederà il lavoro

Dopo la conferma della Proposta si approvano prototipo e grafica, poi si scrive il Manuale del prodotto, che Franco conferma. Il lavoro si sviluppa a tappe (SAL), ognuna provata da Lumera sull'ambiente di prova prima di procedere. Alla fine c'è una prova su tutto, la formazione dei consulenti e il lancio, prima in uno showroom e poi in tutti.

### Wireframe

Sono allegati i wireframe delle schermate principali (agenda e proposta). Mostrano struttura e contenuti, non l'aspetto grafico.
