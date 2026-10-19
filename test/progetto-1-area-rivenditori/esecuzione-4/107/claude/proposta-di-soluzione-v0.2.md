# Proposta di soluzione, area riservata per i rivenditori

Cliente: Lumera Arredi. Data: 2026-10-27. Versione 0.2.

## Modifiche rispetto alla versione precedente

- **v0.2 (27 ottobre).** Risposte di Franco del 26 ottobre a D1 (un prezzo per ogni prodotto e per ogni rivenditore), D2 (Diego consegna i file dei listini), D3 (Diego corregge l'anagrafica), D4 (il rivenditore vede solo il proprio listino). Applicate in "Soluzione proposta", "Cosa non si potrà fare", "Assunzioni", "Domande aperte" e "Cosa serve dal cliente". Restano aperte D5, D6, D7, D8.
- **v0.1 (13 ottobre).** Prima versione.

## In sintesi

Verrà realizzata un'area riservata del sito dove ogni rivenditore entra con le proprie credenziali, vede i propri prezzi e inserisce ordini con molte righe caricando un elenco di codici e quantità. Per rispettare la fiera del 22 febbraio 2027 il lavoro è diviso in due progetti: il primo contiene accesso, prezzi e ordini grandi; il secondo il bonifico e il download dei listini. Franco deve decidere sulle quattro domande ancora aperte in fondo (D5-D8).

## Parte 1. La richiesta come è stata compresa

Franco ha chiesto: "un'area riservata per i rivenditori: devono entrare con le loro credenziali, vedere i loro prezzi e fare ordini grandi senza passare dal carrello normale. Sono una quarantina. Ci serve per la fiera di fine febbraio." Diego ha aggiunto il bonifico e la possibilità di scaricare i listini in Excel.

## Parte 2. La soluzione

### Obiettivo e utenti

Dare ai circa quaranta rivenditori un accesso proprio con prezzi propri e un modo semplice di fare ordini grandi. Lo usano i rivenditori e Diego, che gestisce i rivenditori e i loro listini.

### Soluzione proposta

- Il rivenditore accede con le proprie credenziali.
- Diego collega ogni rivenditore dell'anagrafica a un accesso e carica i listini (un prezzo per ogni prodotto e per ogni rivenditore).
- Il rivenditore vede solo il proprio listino, nel catalogo e nella scheda dei prodotti, e carrello e pagamento lo usano.
- Il rivenditore inserisce un ordine grande caricando un elenco di codici prodotto e quantità, e vede l'elenco dei propri ordini.

### Compromessi

- **Bonifico.** Il rivenditore vorrebbe pagare con bonifico; oggi il pagamento è solo con carta e il bonifico richiede di attivare il pagamento differito. Non entra nella prima parte: l'ordine grande si registra senza pagamento online e Marta lo conferma, come per gli ordini che arrivano oggi per telefono. [Proposta da validare]

### Suggerimenti

- Nessuno.

### Cosa non si potrà fare

- Pagamento con bonifico e download dei listini in Excel non sono nel primo progetto.
- Il rivenditore non vede i prezzi degli altri né il listino di tutti.

### Divisione in due progetti

La soluzione intera supera il tempo che separa dalla fiera. Primo progetto: accesso, listini, ordini grandi. Secondo progetto: bonifico e download dei listini. Il primo ha valore da solo.

### Assunzioni

- I rivenditori sono quelli dell'anagrafica del gestionale, circa quaranta, con i cinque doppioni corretti da Diego.
- Il rivenditore ordina dallo stesso sito, senza una applicazione a parte.

### Domande aperte

- **D1.** I listini sono un prezzo per ogni prodotto e per ogni rivenditore, o una percentuale sul listino di tutti? (dalla versione 0.1) Risposta di Franco, 26 ottobre: un prezzo per ogni prodotto e per ogni rivenditore.
- **D2.** Chi consegna i file dei listini e quando saranno pronti tutti? (dalla versione 0.1) Risposta di Franco, 26 ottobre: li consegna Diego.
- **D3.** Nell'anagrafica ci sono cinque rivenditori doppi: chi li corregge? (dalla versione 0.1) Risposta di Franco, 26 ottobre: li corregge Diego.
- **D4.** Un rivenditore può vedere anche i prezzi del listino di tutti? (dalla versione 0.1) Risposta di Franco, 26 ottobre: il rivenditore vede solo il proprio listino.
- **D5.** Il carrello si svuota dopo 30 giorni secondo il Manuale, dopo 90 secondo il sito: quale è quello giusto? (dalla versione 0.1)
- **D6.** Va bene che gli ordini grandi si registrino senza pagamento online e li confermi Marta? (dalla versione 0.1)
- **D7.** Va bene rimandare bonifico e download dei listini a un secondo progetto? (dalla versione 0.1)
- **D8.** Chi riceve e conferma gli ordini dei rivenditori? (dalla versione 0.1)

### Cosa serve dal cliente

- I file dei listini dei rivenditori, consegnati da Diego.
- L'elenco dei rivenditori senza doppioni, corretto da Diego.
- Il nome del referente: Franco.
- Utenze di prova per le prove di ogni tappa.

### Stima di durata e tempi di rilascio

- **Durata.** Primo progetto: da 40 a 50 giorni lavorativi di sviluppo. La soluzione intera avrebbe richiesto da 55 a 65 giorni lavorativi (circa 12 settimane), troppo per la fiera.
- **Tempo di rilascio.** Se lo sviluppo parte a dicembre 2026, quando la squadra è libera dal comparatore, la messa in produzione è prevista tra metà e fine febbraio 2027, comprese la chiusura aziendale di fine anno e le festività. La fiera è il 22 febbraio: la parte bassa della finestra ci sta, la parte alta no, quindi i file dei listini devono arrivare nei tempi.
- **Affidabilità.** Media. Dipende da tre ipotesi: lo sviluppo parte a dicembre, i file dei listini arrivano entro metà dicembre e i listini hanno tutti lo stesso formato.
- Non è una data di consegna: le date delle prove di ogni tappa arrivano con il Piano dei SAL, appena il lavoro è stimato nel dettaglio. Se la stima cambia, Lumera lo sa subito.

### Prossimi passi

1. Risposte alle domande D5-D8 e conferma della divisione.
2. Manuale del prodotto e grafica, da confermare.
3. Piano dei SAL con le date delle prove.

## Parte 3. Allegato

**F6 Accesso dei rivenditori**
- **F6.1** Come rivenditore, voglio accedere con le mie credenziali, per vedere i miei prezzi e ordinare.
- **F6.2** Come responsabile commerciale, voglio collegare un rivenditore dell'anagrafica a un accesso, per dargli l'area riservata.

**F7 Prezzi per rivenditore**
- **F7.1** Come rivenditore, voglio vedere nel catalogo e nella scheda prodotto i miei prezzi, per decidere cosa ordinare.
- **F7.2** Come rivenditore, voglio che carrello e pagamento usino i miei prezzi, per pagare quanto concordato.
- **F7.3** Come responsabile commerciale, voglio caricare e correggere i listini dei rivenditori, per tenerli aggiornati.

**F8 Ordini grandi**
- **F8.1** Come rivenditore, voglio inserire un ordine caricando un elenco di codici e quantità, per non aggiungere una riga alla volta.
- **F8.2** Come rivenditore, voglio vedere l'elenco dei miei ordini, per ritrovarli.

Secondo progetto, solo a titolo: F9 Pagamento con bonifico, F13 Download dei listini in Excel.

### Come procederà il lavoro

Dopo la conferma si scrivono il Manuale del prodotto, che Franco conferma, e la grafica. Il lavoro si sviluppa a tappe (SAL), ognuna provata da Lumera sull'ambiente di prova. Alla fine c'è una prova su tutto e la pubblicazione.
