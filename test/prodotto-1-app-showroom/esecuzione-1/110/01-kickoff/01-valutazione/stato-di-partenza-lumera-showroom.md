# Stato di partenza, Lumera Arredi, applicazione per gli showroom

Prodotto 110. Data: 2026-10-21. Interno.

## Decisioni dell'analisi

- **Richiesta.** Franco: "Vogliamo un'applicazione per tablet per i consulenti: agenda degli appuntamenti, proposta con i prodotti scelti da mandare al cliente per email, e la proposta che diventa ordine. Ci serve per l'apertura dello showroom di Verona, il 13 settembre 2027."
- **Categoria.** Prodotto. Il sistema non esiste ancora (criterio: il sistema non esiste). Chi analizza (Leonardo) non assegna l'urgenza.
- **Responsabile.** Product lead 1, designato il 13 ottobre con chi gestisce il team, perché libero.
- **Referente.** Franco (incontro del 14 ottobre). Elena e Paolo sono utilizzatori e non decidono.
- **Verifica preliminare, lavori aperti.**
  - Comparatore (lavorazione 100): nessuna sovrapposizione di funzioni. Dipendenza: un ramo non rilasciato modifica il modulo `disponibilita`, che l'applicazione leggerà (verificato nella base). Le persone dei due sviluppatori sono occupate fino al 27 novembre.
  - Ticket 101, 102: nessuna sovrapposizione. Ticket 103: cambia il calcolo dello sconto di importo fisso, che l'applicazione userà tramite il modulo `prezzi` (verificato nello scenario del ticket); la pubblicazione è prevista il 20 ottobre.
  - Garanzia del pagamento (lavorazione 96, fino al 26 ottobre): nessuna sovrapposizione per la prima release; riguarda la seconda (pagamento sul tablet).
  - Esito: nessuna sovrapposizione, con le dipendenze indicate.
- **Verifica preliminare, sistemi del cliente.** Sito, API (`lumera-api`: catalogo, `prezzi`, `disponibilita`, ordini), gestionale (ordini, clienti, ruoli multipli), servizio esterno di invio email, calendario condiviso per showroom e foglio Excel dei clienti (verificato dalla base e da Elena).
- **Parte B, controllo del codice.** Non applicabile: il prodotto non ha ancora un codice. Le API da cui dipende sono state lette da chi conosce il sistema (base): le API degli ordini accettano solo prezzi calcolati dal modulo `prezzi` e quindi non prevedono lo sconto personalizzato di un consulente (verificato leggendo il codice, non provato).
- **Interfaccia.** Sì: applicazione per tablet. Serve la direzione grafica, quindi prototipo e mockup.
- **Scadenza del cliente.** 13 settembre 2027. Fattibile con poco margine: vedi la stima. Provvisoria finché non sono verificati Torino, Bologna e le API degli ordini.
- **Stima a occhio.** 150 giorni lavorativi con tre o quattro sviluppatori, fatta il 13 ottobre in una decina di minuti, interna. Tempo del kickoff: 15 giorni lavorativi, dal 13 ottobre al 2 novembre.
- **Stima precisa.** 24 settimane di sviluppo per la prima release, con quattro sviluppatori da febbraio 2027; affidabilità media. Vedi `02-stima`.
- **Parti toccate e documenti collegati.** `lumera-api` (catalogo, `prezzi`, `disponibilita`, ordini), `lumera-gestionale` (ordini, clienti), servizio esterno di invio email; nuovo repository dell'applicazione. Lavorazioni 100, 96, 101, 102, 103.
- **Dubbi.** Se la prima release deve contenere pagamento e firma (Franco lo preferisce). Se le API degli ordini si possono estendere senza toccare il gestionale. Il tempo di connessione di Bologna.
- **Non verificato.** Come lavorano Torino e Bologna (Torino non disponibile: i due consulenti sono in fiera fino a fine ottobre; Bologna solo riferita da Elena). Il tempo del kickoff chiude l'analisi del contesto il 2 novembre: ciò che non è verificato diventa domanda aperta nella Proposta.
- **Domande per il cliente.**
  1. Gli sconti oltre il 10% devono essere bloccati dall'applicazione, con il consulente che chiama Franco come oggi?
  2. Quale modello di tablet e quale sistema operativo verranno acquistati, e quando?
  3. Quando sono disponibili i consulenti di Torino e Bologna per un incontro?
  4. Chi scrive l'informativa sulla privacy per i dati dei clienti raccolti in showroom, ed entro quando?
  5. Chi pulisce i doppioni del foglio dei clienti prima del caricamento?
  6. Da quale indirizzo di posta devono partire le proposte (dominio dedicato di Lumera)?
- **Prossimo passo.** Proposta di soluzione, con wireframe delle schermate principali.

## 1. Contesto del cliente

- **Come lavora oggi.** Nove consulenti in tre showroom (Milano 4, Torino 2, Bologna 3). Appuntamenti su quaderno o calendario condiviso per showroom. Durante la visita annotano codici e quantità su un foglio. La proposta è un foglio Excel con il listino stampato, un'ora circa ciascuna, inviata per email dall'indirizzo personale del consulente. L'ordine lo ricopia Marta nel gestionale il giorno dopo, circa un'ora al giorno. Fonti: Franco e Marta (riferito), Elena e Paolo (riferito).
- **Volumi.** A Milano circa quaranta proposte a settimana (riferito da Elena). Torino e Bologna: non noti.
- **Sconti.** I consulenti decidono fino al 10%, oltre chiamano Franco (riferito da Elena, non confermato da Franco).

## 2. Utilizzatori

- **Consulente.** Gestisce agenda e proposte del proprio showroom. Porta il tablet in giro con il cliente.
- **Responsabile showroom** (Elena a Milano). Vede gli appuntamenti dei suoi consulenti.
- **Chi riceve gli ordini** (Marta). Non usa l'applicazione: riceve l'ordine nel gestionale.
- **Cliente finale.** Riceve la proposta per email; non usa l'applicazione.

## 3. Sistemi con cui dialogare

- **Catalogo, prezzi e disponibilità** (`lumera-api`, moduli esistenti): lettura. Il modulo `prezzi` ha un solo listino. Il modulo `disponibilita` è in modifica nel comparatore (verificato).
- **Ordini** (API degli ordini e gestionale): scrittura. Hanno test automatici. Non prevedono lo sconto di un consulente (verificato leggendo il codice, non provato).
- **Gestionale.** Anagrafica clienti con ruoli multipli. Non è chiaro se i consulenti avranno un accesso proprio (incognita).
- **Invio email.** Servizio esterno già in uso dal sito. Un dominio mittente per l'applicazione non esiste (verificato).
- **Calendario e foglio dei clienti.** Calendario condiviso per showroom e Excel di Elena: sono da sostituire, non da integrare (supposto).

## 4. Vincoli

- **Scadenza.** 13 settembre 2027 (Verona).
- **Privacy.** Il consenso dei clienti non è mai stato raccolto per iscritto (riferito da Elena): l'applicazione raccoglie dati personali, servono un'informativa e un consenso. Il testo lo scrive il cliente.
- **Connessione.** Debole a Bologna (riferito). L'applicazione deve funzionare anche senza rete.
- **Tablet.** Non scelti. Dettano le prove e le dimensioni delle schermate.
- **Identità grafica.** Logo e colori del sito. Non ci sono linee guida per un'applicazione.
- **Persone.** Gli sviluppatori 1 e 2 sono occupati fino al 27 novembre; lo sviluppatore 4 è libero da gennaio.

## 5. Fattibilità, per punto della richiesta

- **Agenda degli appuntamenti.** Fattibile.
- **Proposta con prodotti, prezzi, sconti e totale con IVA.** Fattibile. Lo sconto fino al 10% è fattibile; oltre dipende dalla risposta alla domanda 1.
- **Invio della proposta per email.** Fattibile, con un dominio mittente dedicato (domanda 6).
- **La proposta che diventa ordine.** Fattibile con un compromesso: le API degli ordini non prevedono lo sconto del consulente e vanno estese (incognita).
- **Uso senza rete.** Fattibile, con costo alto sulla sincronizzazione (supposto).
- **Pagamento dell'acconto sul tablet.** Fattibile con il servizio di pagamento già in uso (non verificato). Da collocare in una release successiva.
- **Firma sul tablet.** Fattibile (supposto). Da collocare in una release successiva.
- **Riepilogo delle vendite per showroom.** Fattibile (supposto).
- **Scadenza del 13 settembre 2027.** Fattibile con poco margine (provvisoria).

## 6. Incognite

- **API ordini e sconto del consulente.** Cosa non si sa: se si possono estendere senza toccare il gestionale. Come si scopre: spike nella prima milestone. Chi può farlo: team lead con uno sviluppatore.
- **Connessione di Bologna.** Misura sul posto. Chi: Elena con un tablet di prova.
- **Torino e Bologna.** Incontri con i consulenti. Chi: product lead, quando sono disponibili.
- **Accesso dei consulenti.** Credenziali proprie o ruoli del gestionale. Chi: team lead.
- **Qualità dei clienti in Excel.** Quanti doppioni, quanti campi vuoti. Chi: Elena, con un campione.

## 7. Fonti consultate

Richiesta di Franco del 12 ottobre; incontro del 14 ottobre con Franco; incontro del 20 ottobre con Elena e Paolo; base dei sistemi esistenti; lavorazioni 96, 100, 101, 102, 103.
