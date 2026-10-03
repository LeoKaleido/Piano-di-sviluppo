# Base per il test delle skill

Data: 2026-10-02

Questa base descrive un cliente inventato, il suo sistema e i lavori già aperti. Serve a percorrere per intero un ticket, un progetto e un prodotto, applicando le skill alla lettera per trovare dove non reggono.

## Come si usa

È un test logico: verifica che il flusso regga da una skill all'altra, non che i documenti prodotti siano buoni su un caso vero.

I ruoli:

- **Cliente.** Lo interpreta Leonardo: scrive le richieste, risponde alle domande, cambia idea quando il percorso lo prevede.
- **Product lead.** Lo interpreta Leonardo: prende le decisioni che le skill lasciano a lui.
- **Skill.** Le applica Claude, alla lettera, una alla volta, nell'ordine previsto dal piano.
- **Programmatore e team lead.** Li interpreta Claude: rispondono alle domande sul codice usando solo ciò che è scritto in questa base.

Le regole:

1. Si segue il piano fase per fase, senza saltare.
2. Vale solo ciò che è scritto in questa base o che viene detto durante il test. Se una skill chiede qualcosa che non c'è, non si inventa: si annota.
3. I documenti si producono in forma ridotta, quanto basta per passare alla skill successiva.
4. Le skill si correggono solo alla fine, dall'elenco delle osservazioni.

A ogni passo si annota una di queste cose:

- **Manca.** La skill chiede un'informazione che a quel punto del flusso nessuno ha.
- **Superfluo.** La skill produce o chiede qualcosa che non serve.
- **Contraddizione.** Due skill, o una skill e un piano, dicono cose diverse.
- **Buco.** Una situazione reale che nessuna skill copre.
- **Passaggio.** Ciò che una skill produce non basta alla skill successiva.

## Il cliente

Lumera Arredi è un'azienda inventata che vende illuminazione e complementi d'arredo, online e in tre showroom. È cliente da quattro anni.

- **Franco.** Titolare. È il decisore: vale solo la sua approvazione. Risponde in fretta ma legge poco.
- **Marta.** Responsabile dell'assistenza clienti. Usa il gestionale ogni giorno e apre la maggior parte dei ticket.
- **Diego.** Responsabile commerciale per i rivenditori. Ha richieste precise e tende a rivolgersi direttamente agli sviluppatori.

Le regole su variazioni, ritardi e accettazione sono già firmate, in un accordo valido per tutti i lavori. I valori concordati:

- accettazione di una milestone entro 5 giorni lavorativi, poi vale il silenzio;
- garanzia di 60 giorni dopo ogni rilascio;
- conferma di una Scheda di intervento entro 10 giorni lavorativi, poi il ticket viene chiuso.

> Nota: questi tre valori usano il vecchio lessico/regole (accettazione implicita di una demo, garanzia fissa a 60 giorni). Vanno allineati alle decisioni prese il 2026-10-03 (demo senza termine di accettazione implicita; garanzia = 50% della durata della lavorazione, minimo 15 giorni) prima di usare questa base nel test.

## Il sistema esistente

Il sistema è il sito di vendita online di Lumera Arredi, con il suo gestionale. È in produzione da tre anni.

Cosa fa, visto da chi lo usa:

- **Catalogo.** Elenco dei prodotti con ricerca e filtri per categoria, prezzo e marca.
- **Scheda prodotto.** Descrizione, immagini, prezzo, disponibilità.
- **Carrello e pagamento.** Rifatti di recente: il nuovo pagamento è in produzione dal 14 settembre 2026 ed è ancora in garanzia.
- **Area cliente.** Ordini, indirizzi, lista dei desideri.
- **Comparatore di prodotti.** In costruzione: è il progetto in corso.
- **Gestionale.** Prodotti, ordini, clienti, codici sconto. Lo usano Marta e altre quattro persone.

Com'è fatto il codice. Queste sono le uniche cose che programmatore e team lead possono "trovare" durante il test:

- **Struttura.** Interfaccia in React e TypeScript, un servizio di API, un database relazionale. Sito e gestionale sono due applicazioni che usano le stesse API.
- **Modulo `disponibilita`.** Calcola se un prodotto è disponibile subito, ordinabile o esaurito. È condiviso: lo usano la scheda prodotto, il carrello e il comparatore in costruzione.
- **Filtro per disponibilità nel catalogo.** Le API lo accettano già e il gestionale lo usa. Nel sito non è mai stato mostrato.
- **Modulo `prezzi`.** Dà per scontato che esista un solo listino, uguale per tutti. Lo usano scheda prodotto, carrello, pagamento e gestionale.
- **Codici sconto.** Vengono applicati dopo l'IVA. Nessun documento lo dice.
- **Esportazione degli ordini.** Esiste nel gestionale, ma è visibile solo a chi ha il permesso di amministratore. Marta non ce l'ha.
- **Test automatici.** Presenti su pagamento e API degli ordini. Assenti su carrello e modulo `prezzi`.
- **Sviluppi non rilasciati.** Un ramo del progetto comparatore sta modificando il modulo `disponibilita`.
- **Accessi.** Gli utenti del sito hanno un solo ruolo, il cliente finale. I ruoli multipli esistono solo nel gestionale.

## Documenti e lavori aperti

Sul sistema esistono due documenti e quattro lavori in corso.

**Documenti esistenti**

- **Manuale del prodotto v1.3.** Copre catalogo, scheda prodotto, carrello, pagamento e area cliente. Dice che il carrello si svuota dopo 30 giorni: nel codice il limite è 90. Non descrive il gestionale.
- **Documento tecnico v1.1.** Aggiornato al rifacimento del pagamento. Non cita il modulo `disponibilita`.

**Progetto in corso: comparatore di prodotti**

Avviato il 1 settembre 2026, Manuale e Piano dei SAL approvati da Franco. Ci lavorano lo sviluppatore 1 e lo sviluppatore 2.

- **SAL1, Selezione e confronto base.** Accettato il 25 settembre. Story F1.1, F1.2, F1.3, F2.1.
- **SAL2, Confronto avanzato.** In corso, consegna il 30 ottobre. Story F2.2 e F3.2.
- **SAL3, Filtri e condivisione.** Da avviare, consegna il 27 novembre. Story F2.3 e F3.1.

Le story del progetto:

- **F1.1** Come visitatore, voglio aggiungere un prodotto al confronto dalla sua scheda, per valutarlo insieme ad altri.
- **F1.2** Come visitatore, voglio aggiungere un prodotto al confronto dal catalogo, per non aprire ogni scheda.
- **F1.3** Come visitatore, voglio togliere un prodotto dal confronto, per restringere la scelta.
- **F2.1** Come visitatore, voglio vedere le caratteristiche affiancate, per confrontarle a colpo d'occhio.
- **F2.2** Come visitatore, voglio evidenziare solo le differenze, per capire cosa cambia tra i prodotti.
- **F2.3** Come visitatore, voglio vedere nel confronto solo i prodotti disponibili subito, per non scegliere qualcosa che non posso avere.
- **F3.1** Come visitatore, voglio condividere il confronto con un link, per chiedere un parere.
- **F3.2** Come visitatore, voglio mettere nel carrello un prodotto dal confronto, per acquistare senza tornare alla scheda.

Lo sprint in corso è il terzo, dal 28 settembre al 9 ottobre. La milestone del SAL2 è in linea, con metà del margine già consumata.

**Ticket aperti**

- **Ticket 101, bug.** Nel carrello il totale a volte differisce di un centesimo dal riepilogo del pagamento. Urgenza alta, scheda confermata, assegnato allo sviluppatore 3.
- **Ticket 102, modifica.** Aggiungere il campo "partita IVA" al modulo di contatto. Scheda inviata, in attesa di conferma da 6 giorni lavorativi.

**Registro delle modifiche del progetto comparatore**

> Nota: il nome corretto, con il lessico fissato il 2026-10-03, è "Registro delle variazioni".

- **V1, piccola, chiusa.** Cambiare l'ordine delle caratteristiche nella tabella di confronto. 3 ore.
- **V2, rifiutata da Franco.** Confronto fino a sei prodotti invece di quattro. Era una variazione media.

**Consegne in garanzia**

- **Nuovo pagamento.** Rilasciato il 14 settembre 2026. La garanzia scade il 13 novembre.

## Team e calendario

Il test parte da venerdì 2 ottobre 2026.

Le persone e le ore settimanali disponibili per Lumera Arredi:

- **Product lead.** Segue tutti i lavori del cliente.
- **Team lead.** 8 ore, per indagini, stime e revisione del codice.
- **Sviluppatore 1.** 30 ore, tutte sul comparatore.
- **Sviluppatore 2.** 30 ore: 15 sul comparatore, 15 libere.
- **Sviluppatore 3.** 30 ore: segue i ticket, il resto è libero.
- **Grafica.** Una persona dedicata, 8 ore, lavora in Figma.

I parametri già decisi (nella base originale; vedi nota sotto):

- sprint di 2 settimane;
- quota riservata ai ticket urgenti: 10% della capacità;
- margine di milestone: 20% delle ore stimate;
- una stima superata di oltre il 25% ferma il ticket.

> Nota: la quota urgenze è stata fissata al 20% (non 10%) nella sessione del 2026-10-03. Da correggere in questa base prima del test.

Il calendario:

- **Ferie.** Sviluppatore 2 assente dal 19 al 23 ottobre.
- **Festività.** Martedì 8 dicembre.
- **Chiusura aziendale.** Dal 24 dicembre al 6 gennaio.
- **Chiusura del cliente.** Franco non è disponibile dal 28 al 31 dicembre, per l'inventario.
- **Data importante per il cliente.** Venerdì 27 novembre, Black Friday.

## I tre percorsi

Ogni percorso parte da una richiesta scritta con le parole del cliente e ha alcune cose che il test deve far emergere. Se non emergono, è una skill che non ha funzionato.

### Percorso 1: ticket

Due richieste, aperte da Marta il 2 ottobre.

**Ticket 103.** "Buongiorno, nel comparatore vorrei poter vedere solo i prodotti disponibili subito, e già che ci siamo anche nel catalogo. Ci serve prima del Black Friday."

**Ticket 104.** "Mi servirebbe poter scaricare gli ordini del mese in Excel, adesso li copio a mano."

Cosa deve emergere:

- il ticket 103 contiene due richieste distinte;
- la parte sul comparatore è già la story F2.3, prevista nel SAL3 con consegna il 27 novembre, cioè il giorno stesso del Black Friday;
- volerla prima è un cambio di priorità, quindi una variazione media, e la decide Franco, non Marta;
- la parte sul catalogo non è nel progetto, e nel codice è già quasi pronta;
- quella parte tocca il modulo `disponibilita`, che un ramo non rilasciato sta modificando;
- il ticket 104 chiede una cosa che il sistema fa già: manca solo un permesso.

### Percorso 2: progetto

Richiesta aperta da Franco il 5 ottobre.

"Diego ha bisogno di un'area riservata per i rivenditori: devono entrare con le loro credenziali, vedere i loro prezzi e fare ordini grandi senza passare dal carrello normale. Sono una quarantina. Ci serve per la fiera di fine febbraio."

Cosa deve emergere dall'indagine:

- il modulo `prezzi` conosce un solo listino;
- sul sito esiste un solo ruolo utente;
- carrello e modulo `prezzi` non hanno test automatici;
- il progetto tocca il pagamento, ancora in garanzia;
- i codici sconto si applicano dopo l'IVA, e nessun documento lo dice;
- il Manuale non corrisponde al codice sulla durata del carrello.

Gli eventi da introdurre, nell'ordine, durante il percorso:

1. In revisione Franco risponde solo a metà delle domande aperte.
2. Dopo l'approvazione, Diego chiede a uno sviluppatore di aggiungere i preventivi in PDF.
3. Il cliente consegna i listini dei rivenditori con 6 giorni lavorativi di ritardo.
4. Lo sviluppatore 2 si ammala per una settimana, nel secondo sprint.
5. Un ticket bloccante sul pagamento ferma lo sviluppatore 1 per due giorni.
6. Alla demo una story ha un difetto non bloccante, e Franco chiede una cosa nuova.
7. Franco non risponde alla demo successiva.

### Percorso 3: prodotto

Richiesta aperta da Franco il 12 ottobre.

"Voglio un'applicazione per prenotare gli appuntamenti nei nostri tre showroom. Il cliente sceglie showroom, consulente e orario. I consulenti gestiscono la loro agenda. Mi servono anche le videochiamate, il collegamento con il nostro CRM e le statistiche. Tutto pronto per aprile."

Cosa deve emergere:

- è un sistema nuovo, quindi un prodotto;
- non tutto può entrare nel primo rilascio;
- il CRM è un sistema esterno, senza documentazione.

Gli eventi da introdurre, nell'ordine:

1. Franco vuole tutto nel primo rilascio.
2. Davanti al prototipo chiede una cosa nuova: la lista d'attesa.
3. Il fornitore del CRM non dà accesso per tre settimane.
4. L'elenco dei clienti da importare è un file Excel disordinato.
5. A una settimana dal lancio i testi sulla privacy non sono pronti.

## Registro delle osservazioni

Si compila durante il test. Ogni osservazione indica la skill, il tipo (manca, superfluo, contraddizione, buco, passaggio) e la correzione proposta.

**Percorso 1: ticket**

Nessuna osservazione ancora.

**Percorso 2: progetto**

Nessuna osservazione ancora.

**Percorso 3: prodotto**

Nessuna osservazione ancora.
