# Scenario: prodotto 1, applicazione per gli showroom

Codice della lavorazione: 110. Base: `../base-comune.md`. Categoria attesa: prodotto (il sistema non esiste ancora). Piano: Piano di prodotto, con Ciclo di sviluppo, Regole comuni e, per ciò che il prodotto ha in comune con il progetto, Piano di progetto.

Il test parte lunedì 12 ottobre 2026 e arriva fino al passaggio a regime e a una segnalazione in garanzia. Le milestone intermedie si recitano in parte: si esegue per intero il kickoff, il primo sprint e la prima milestone, una variazione, il collaudo, il lancio, la chiusura e la garanzia. Le milestone dalla seconda alla quinta si danno per concluse con i dati dell'ultimo capitolo "Dati reali".

## Ruoli in scena

Franco (referente), Marta (cliente, non decide), Elena e Paolo (utilizzatori), Leonardo (chi analizza), chi gestisce il team, CEO, product lead 1 (responsabile), supervisore, team lead, sviluppatori 1, 2, 3 e 4, grafica, incaricato della pubblicazione.

## Richiesta

Aperta da Franco su osTicket il 12 ottobre 2026.

"Nei tre showroom i consulenti lavorano con carta e fogli Excel: segnano gli appuntamenti, preparano le proposte per i clienti con i prodotti scelti, i prezzi e gli sconti, e poi Marta ricopia a mano l'ordine nel gestionale il giorno dopo. Vogliamo un'applicazione per tablet per i consulenti: agenda degli appuntamenti, proposta con i prodotti scelti da mandare al cliente per email, e la proposta che diventa ordine. Ci serve per l'apertura dello showroom di Verona, il 13 settembre 2027."

Scadenza del cliente: 13 settembre 2027.

## Fatti aggiuntivi sul contesto

Questi fatti si scoprono solo con gli incontri o con la verifica; prima non esistono.

- **Come si lavora oggi.** Nove consulenti: Milano 4, Torino 2, Bologna 3. Le agende sono su carta o su un calendario condiviso per showroom, non collegato a nulla. Le proposte sono fogli Excel con un listino stampato. Marta ricopia gli ordini nel gestionale: circa un'ora al giorno (riferito da Marta).
- **Sconti.** I consulenti possono concedere fino al 10% senza autorizzazione. Oltre, chiamano Franco (riferito da Elena). Franco non lo ha detto nel primo incontro.
- **Connessione.** Nello showroom di Bologna la connessione è debole nel seminterrato (riferito da Elena). Nessuna misura.
- **Clienti degli showroom.** Elena tiene un foglio Excel con circa 2.800 clienti, con doppioni (riferito). Non esiste un consenso scritto alla conservazione dei dati.
- **Torino.** I due consulenti di Torino non sono disponibili per incontri prima di novembre.
- **Sistemi esistenti.** Il catalogo e i prezzi si leggono dalle API di `lumera-api`, con il modulo `prezzi` (un solo listino, codici sconto dopo l'IVA, tranne i codici di importo fisso del ticket 103: dal 20 ottobre si tolgono prima dell'IVA). Le API degli ordini creano un ordine da un carrello e accettano solo prezzi calcolati dal modulo `prezzi`: una riga con lo sconto personalizzato di un consulente non è prevista (verificato leggendo il codice, non provato). Gli utenti con ruoli multipli esistono solo nel gestionale.
- **Email.** Il sito invia email con un servizio esterno già in uso. Un dominio mittente dedicato per l'applicazione non esiste.
- **Tablet.** I consulenti non hanno tablet. Li compra Lumera: modello e sistema operativo non sono stati scelti.
- **Identità grafica.** Esistono logo e colori del sito. Non esistono linee guida per un'applicazione.
- **Testi legali.** L'informativa sulla privacy per i dati raccolti in showroom non esiste. La scrive il cliente.
- **Lavori aperti.** Il comparatore (100) e i ticket 101, 102, 103 riguardano il sito; nessuno tocca l'idea di un'applicazione per tablet. Il ticket 103 cambia il modo in cui si calcola lo sconto di importo fisso, che l'applicazione dovrà usare.

## Cosa deve emergere, fase per fase

**Kickoff, valutazione**

- Chi analizza non assegna l'urgenza, conferma che il sistema non esiste (prodotto) e designa il product lead 1 con chi gestisce il team. Presa visione al cliente senza obbligo.
- Il product lead fa una stima a occhio della durata (una decina di minuti, interna) e ne ricava il tempo del kickoff, il 10%, in giorni lavorativi. Dice se la scadenza del 13 settembre 2027 è fattibile.
- La verifica preliminare guarda solo i lavori aperti (comparatore, ticket 101, 102, 103, garanzia del pagamento) e i sistemi che il cliente ha già (sito, API, gestionale, email). Non c'è codice da indagare per il prodotto, ma le API da cui l'applicazione dipenderà sì: chi conosce il sistema risponde sui fatti della base.
- L'incontro con Franco è trascritto e interpretato. Franco è il referente. Chiede cose in più (pagamento sul tablet, firma): non sono decisioni, sono richieste da collocare nelle release.
- L'incontro con Elena e Paolo descrive come si lavora oggi. Gli utilizzatori di Torino non sono disponibili: ciò che non si è potuto verificare diventa domanda aperta nella Proposta.
- Lo Stato di partenza è nella forma del prodotto (contesto, utilizzatori, sistemi, vincoli, fattibilità, incognite, fonti) e porta in testa le decisioni dell'analisi.
- Si creano `history-and-decision.md` vuoti.

**Stima**

- La stima precisa è per release, in giorni lavorativi, con affidabilità e fattori. Si ricava dalla richiesta, dall'analisi del contesto e dai Report di progetto 96 e 58: scostamenti di 1 e 2 settimane, integrazione con dati esistenti sporchi come fattore.

**Proposta**

- La Proposta è di 2 o 3 pagine (al massimo 5), senza tecnologie, prezzi e date, con la divisione in release, la stima di durata per release, le domande aperte con codice, i materiali del cliente senza date, i wireframe delle schermate principali.
- Nella prima release entra solo ciò senza cui il prodotto non è utilizzabile. Franco vuole tutto nella prima release: si applica la regola, il referente conferma la divisione.
- La conferma arriva a voce (telefonata) e vale dopo il riepilogo scritto. All'allineamento si trovano il ticket 103 (sconto di importo fisso) e il comparatore.

**Prototipo e design**

- Il prototipo è navigabile e senza logica. Il materiale per la grafica parte dai wireframe confermati. Il cliente prova in una sessione guidata con Elena. Franco chiede un cambio di struttura su una schermata: prima della conferma del Manuale è una modifica, non una variazione.
- L'approvazione può essere a voce, con il riepilogo scritto. I mockup in PDF fanno fede.

**Documentazione**

- Il Manuale ha le story della prima release complete, con criteri di accettazione verificabili, e le release successive a titolo e frase. Il Manuale è inviato prima della chiusura del 24 dicembre; Franco non risponde (e dal 28 al 31 dicembre è assente): sollecito scritto, si prosegue con ciò che non dipende dalla risposta.
- Il Documento tecnico ha il capitolo Piano delle milestone con la prima milestone di fondamenta, i buffer del 20%, le date calcolate sulla capacità reale con festività e ferie. Il Piano dei SAL si genera dal capitolo e non contiene nulla di interno.
- Con le issue la stima di durata cresce rispetto a quella della Proposta: il cliente è informato, con il Piano dei SAL e la spiegazione.

**Sviluppo**

- Il primo sprint si pianifica a fine documentazione, dopo l'invio del Piano dei SAL. Le ore pianificate non superano la capacità al netto del buffer di sprint.
- La Nota dello sprint 12 calcola il margine con i numeri. Una spike scopre che le API degli ordini non accettano righe con sconto del consulente: nuove ore, margine sotto zero, milestone in ritardo. La riprogrammazione presenta le leve con l'effetto di ciascuna, senza sceglierne una; si dichiara che nessuna story è spostabile.
- Alla prova della prima milestone Franco non risponde: il silenzio non vale accettazione. Elena prova. L'esito è per story.
- Una richiesta di Franco dopo la conferma del Manuale è una variazione media: si valuta l'impatto, il cliente approva per scritto, non entra nello sprint in corso.

**Rilascio**

- Collaudo finale: percorsi che attraversano più milestone, integrazione con gestionale e catalogo, dati reali o copia fedele, sul tablet. Prova finale con accettazione esplicita.
- Preparazione: Piano di lancio approvato dal referente (è il piano di rilascio per il lancio), dati iniziali, formazione, capitolo Pubblicazione del Documento tecnico, che nasce con il prodotto. L'informativa sulla privacy arriva in ritardo: il lancio slitta degli stessi giorni.
- Pubblicazione: gruppo ristretto (showroom di Milano), poi tutti. Un problema al lancio tiene il prodotto sul gruppo ristretto.
- Chiusura: documenti aggiornati, Report di progetto scritto. Il prodotto passa a regime.
- Garanzia: durata dalla durata pianificata; assistenza rafforzata; una segnalazione tra bug, richiesta piccola e richiesta fuori garanzia, con la skill del pacchetto di garanzia.

## Eventi da introdurre, nell'ordine

1. Lunedì 12 ottobre 2026: Franco apre la richiesta.
2. Martedì 13 ottobre: assegnazione al product lead 1. Stima a occhio: 150 giorni lavorativi con 3 o 4 sviluppatori. Tempo del kickoff: 15 giorni lavorativi, fino a lunedì 2 novembre.
3. Mercoledì 14 ottobre: incontro con Franco.
4. Martedì 20 ottobre: incontro con Elena e Paolo. Torino non disponibile.
5. Giovedì 22 ottobre: stima precisa. Risultato dello scenario: 24 settimane di sviluppo per la prima release (120 giorni lavorativi), con una squadra di 4 sviluppatori da febbraio.
6. Lunedì 2 novembre: invio della Proposta v0.1.
7. Lunedì 9 novembre: Franco risponde con correzioni e chiede tutto nella prima release (pagamento sul tablet, firma, report delle vendite). Nuova versione.
8. Martedì 24 novembre: Franco conferma a voce una versione per telefono. Riepilogo scritto lo stesso giorno. Allineamento.
9. Dal 25 novembre al 15 dicembre: prototipo e mockup. Sessione con Elena mercoledì 2 dicembre. Franco chiede un cambio alla schermata della proposta giovedì 3 dicembre. Approvazione a voce martedì 15 dicembre, riepilogo scritto lo stesso giorno.
10. Dal 16 al 23 dicembre: Manuale. Invio mercoledì 23 dicembre. Franco non risponde. Sollecito giovedì 7 gennaio 2027. Franco conferma per email martedì 12 gennaio con due correzioni, conferma a voce giovedì 14 gennaio.
11. Dal 14 al 29 gennaio: Documento tecnico, milestone, issue, Piano dei SAL. Stima rifatta con le issue: 26 settimane di sviluppo (più alta di 2). Invio del Piano dei SAL venerdì 29 gennaio. Pianificazione dello sprint 12.
12. Venerdì 12 febbraio: Nota di sprint 12. Dati dello sprint: ore pianificate 160, completate 128; lo sviluppatore 4 assente 2 giorni (12 ore perse, già incluse nelle 128 completate); una spike (issue I14) mostra che le API degli ordini non accettano lo sconto del consulente: la stima rivalutata delle issue della milestone sale di 24 ore. Riprogrammazione.
13. Lunedì 15 febbraio: chi gestisce il team decide la leva.
14. Venerdì 26 febbraio: prova della prima milestone. Franco non risponde. Elena prova: tutte le story accettate tranne un difetto non bloccante.
15. Mercoledì 3 marzo: Franco accetta in modo esplicito.
16. Lunedì 15 marzo: Franco chiede un promemoria degli appuntamenti con un SMS al cliente (stima 14 ore, una story nuova).
17. Dalla seconda alla quinta milestone: vedi "Dati reali".
18. Lunedì 2 agosto 2027: collaudo finale sullo staging. Prova finale del cliente venerdì 6 agosto: accettata con un difetto non bloccante.
19. Dal 23 agosto al 3 settembre: preparazione. Piano di lancio approvato da Franco mercoledì 25 agosto, con gruppo ristretto lunedì 6 settembre e apertura a tutti mercoledì 8 settembre. L'informativa sulla privacy è dovuta venerdì 27 agosto e arriva mercoledì 1 settembre. Elena consegna il foglio dei clienti martedì 31 agosto, con doppioni. Formazione il 2 e il 3 settembre.
20. Giovedì 9 settembre (tre giorni lavorativi dopo il piano, per l'informativa in ritardo): lancio sul gruppo ristretto (Milano). Venerdì 10 settembre: un problema con l'invio delle email (dominio mittente non autorizzato) tiene il prodotto sul gruppo ristretto, corretto lunedì 13 mattina. Lunedì 13 settembre: apertura a tutti.
21. Dal 14 al 17 settembre: chiusura.
22. Giovedì 23 settembre: segnalazione di Elena in assistenza rafforzata: la proposta inviata per email mostra il prezzo senza lo sconto del consulente (bug rispetto al Manuale); chiede anche di poter stampare la proposta in PDF (richiesta fuori garanzia).

## Dati reali (per le milestone e il report)

- Milestone 1: 280 ore stimate, buffer 56, sprint 12 e 13. Ore reali alla prova: 292.
- Milestone 2 (sprint 14, 15, 16): 406 ore, buffer 81,2. Ore reali 410.
- Milestone 3 (sprint 17, 18, 19): 420 ore, buffer 84. Ore reali 441.
- Milestone 4 (sprint 20, 21, 22): 406 ore, buffer 81,2. Ore reali 398.
- Milestone 5 (sprint 23, 24): 280 ore, buffer 56. Ore reali 331.
- Tutte le milestone accettate alle date del Piano dei SAL, tranne la prima (accettata 3 marzo contro prova del 26 febbraio, per il silenzio del cliente, senza effetto sulle date).
- Variazioni: una media (V1, SMS, approvata, 14 ore). Una richiesta di Franco in aprile rifiutata dopo la stima di impatto (V2, grande: aggiungere l'applicazione per telefono).
- Ticket urgenti: nessuno. Prestiti di ore ai ticket: 24 ore in totale dallo sviluppatore 3.
- Ore reali totali delle milestone: 1.872 su 1.792 di issue; buffer usato 80 ore su 358,4.

## Cosa non deve succedere

- Assegnare un'urgenza a un prodotto.
- Fare un'indagine sul codice come per un progetto, o promettere sulle API ciò che non è stato guardato.
- Prendere una richiesta di Franco a voce come variazione approvata, o una richiesta di Elena come approvazione.
- Mettere tecnologie, ore, prezzi o date nella Proposta e nel Manuale.
- Scrivere il Manuale prima dell'approvazione di prototipo e mockup.
- Accettare una prova in silenzio.
- Lanciare senza informativa sulla privacy.
- Un registro delle variazioni o una Guida alla pubblicazione a parte, un Milestone report inviato al cliente, un Piano di lancio con dentro i passi tecnici.
- Una versione di un documento con "invariato" o rimandi, o una catena di versioni incompleta in `claude`.
- Mettere nella Proposta una data di calendario invece di una durata e di una finestra di rilascio in mesi.

## Documenti attesi in `esecuzione-N/110/`

- Radice: i PDF finali dei documenti, numerati in ordine di nascita senza salti: Proposta, Manuale, Documento tecnico, Piano dei SAL, Piano di lancio.
- `claude`: i sorgenti Markdown, con tutte le versioni precedenti, ognuna completa e senza "invariato". La Proposta confermata si chiama `proposta-di-soluzione`, senza versione.
- `design`: wireframe, prototipo, mockup approvati (PDF) e il materiale per i mockup.
- `develop`: Nota di sprint 12 e Milestone report del SAL1, solo in Markdown, senza PDF.
- `source`: le trascrizioni e le sintesi degli incontri e della telefonata, le risposte del cliente, i materiali ricevuti e i messaggi inviati (sollecito, avviso, risposta di garanzia).
- `log`: `history-and-decision.md` (con Stato di partenza, decisioni, stima precisa e finestra di rilascio, passi tecnici del lancio, esiti) e `report-di-progetto.md`. Il capitolo Pubblicazione entra nel Documento tecnico alla chiusura.
