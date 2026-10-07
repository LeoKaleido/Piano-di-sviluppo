# Base per il test delle skill

Data: 2026-10-06

Questa base descrive un cliente inventato, il suo sistema, il team e i lavori già aperti. Serve a percorrere per intero un ticket, un progetto e un prodotto, applicando le skill alla lettera per trovare dove non reggono. Lo svolgimento del test, ruolo per ruolo, è in `docs/test-skill-svolgimento.md`.

## Come si usa

È un test logico: verifica che il flusso regga da una skill all'altra, non che i documenti prodotti siano buoni su un caso vero.

Chi recita. Claude interpreta ogni ruolo, uno alla volta e dichiarando chi parla: il cliente (Franco, Marta, Diego), chi analizza, chi gestisce il team, il CEO, i responsabili di lavorazione (project manager), chi conosce il sistema, gli sviluppatori, la grafica, l'incaricato della pubblicazione. Claude applica anche le skill, alla lettera, una alla volta, nell'ordine previsto dal piano. Leonardo legge l'esito e decide quali osservazioni correggere.

Dove si salvano i documenti. Ogni documento prodotto nel test va in `docs/test/<codice della lavorazione>/<cartella della fase>/`, con i nomi di fase dei piani (per esempio `docs/test/102/02-scheda-di-intervento/`), come nella knowledge base vera. Il test riparte da una cartella `docs/test/` vuota.

Le regole:

1. Si segue il piano fase per fase, senza saltare. I piani sono quelli in `docs/`: se un piano è in contrasto con un altro, si segue quello della categoria del lavoro e si annota il contrasto.
2. Vale solo ciò che è scritto in questa base o che viene detto durante il test. Chi risponde sul codice usa solo i fatti del capitolo "Il sistema esistente". Se una skill chiede qualcosa che non c'è, non si inventa: si annota.
3. I documenti si producono in forma ridotta, quanto basta per passare alla skill successiva. I numeri invece si calcolano per intero: ore, capacità, buffer e date.
4. Le skill e i piani non si correggono durante il test. Si correggono alla fine, dall'elenco delle osservazioni. Unica eccezione decisa il 2026-10-06: chi pubblica non è il responsabile della lavorazione ma l'incaricato della pubblicazione, una persona designata, e la pubblicazione non avviene in CI.

A ogni passo si annota una di queste cose:

- **Manca.** La skill chiede un'informazione che a quel punto del flusso nessuno ha.
- **Superfluo.** La skill produce o chiede qualcosa che non serve.
- **Contraddizione.** Due skill, o una skill e un piano, dicono cose diverse.
- **Buco.** Una situazione reale che nessuna skill copre.
- **Passaggio.** Ciò che una skill produce non basta alla skill successiva.
- **Base.** Un errore o una lacuna di questa base, corretto nella base stessa.

## Il cliente

Lumera Arredi è un'azienda inventata che vende illuminazione e complementi d'arredo, online e in tre showroom. È cliente da quattro anni.

- **Franco.** Titolare. È il referente: vale solo la sua approvazione. Risponde in fretta ma legge poco, e conferma volentieri a voce.
- **Marta.** Si occupa dell'assistenza clienti. Usa il gestionale ogni giorno e apre la maggior parte dei ticket su osTicket. Non decide nulla che costi ore o sposti date.
- **Diego.** Cura i rapporti commerciali con i rivenditori. Ha richieste precise e tende a rivolgersi direttamente agli sviluppatori.

Le regole che valgono per i lavori di Lumera sono quelle delle Regole comuni: nessun accordo quadro da firmare, nessuna approvazione economica (si lavora a consumo), demo accettata solo con risposta esplicita, garanzia con la formula (massimo tra 15 giorni e 50% della durata pianificata).

## Il sistema esistente

Il sistema è il sito di vendita online di Lumera Arredi, con il suo gestionale. È in produzione da tre anni.

Cosa fa, visto da chi lo usa:

- **Catalogo.** Elenco dei prodotti con ricerca e filtri per categoria, prezzo e marca.
- **Scheda prodotto.** Descrizione, immagini, prezzo, disponibilità.
- **Carrello e pagamento.** Rifatti di recente: il nuovo pagamento è in produzione dal 14 settembre 2026 ed è ancora in garanzia.
- **Area cliente.** Ordini, indirizzi, lista dei desideri.
- **Modulo di contatto.** Una pagina del sito: nome, email, messaggio. I messaggi arrivano nella sezione Messaggi del gestionale e per email all'assistenza.
- **Comparatore di prodotti.** In costruzione: è il progetto in corso.
- **Gestionale.** Prodotti, ordini, clienti, codici sconto, messaggi di contatto, anagrafica dei rivenditori. Lo usano Marta e altre quattro persone.

Com'è fatto il codice. Queste sono le uniche cose che sviluppatori e chi conosce il sistema possono "trovare" durante il test:

- **Struttura.** Interfaccia in React e TypeScript, un servizio di API, un database relazionale. Sito e gestionale sono due applicazioni che usano le stesse API.
- **Modulo `disponibilita`.** Calcola se un prodotto è disponibile subito, ordinabile o esaurito. È condiviso: lo usano la scheda prodotto, il carrello e il comparatore in costruzione.
- **Filtro per disponibilità nel catalogo.** Le API lo accettano già e il gestionale lo usa. Nel sito non è mai stato mostrato.
- **Modulo `prezzi`.** Dà per scontato che esista un solo listino, uguale per tutti. Lo usano scheda prodotto, carrello, pagamento e gestionale.
- **Codici sconto.** Vengono applicati dopo l'IVA. Nessun documento lo dice.
- **Esportazione degli ordini.** Esiste nel gestionale, ma è visibile solo a chi ha il permesso di amministratore. Marta non ce l'ha.
- **Modulo di contatto.** Componente `ContactForm` nel sito, endpoint `contatti` nelle API, tabella `messaggi_contatto`. L'email all'assistenza parte dall'endpoint. Nessun test automatico.
- **Pagamento.** Si appoggia a un servizio esterno. I circuiti di carta accettati sono in un file di configurazione. Ha test automatici.
- **Anagrafica rivenditori.** Nel gestionale esistono circa quaranta rivenditori inseriti a mano, non collegati agli utenti del sito.
- **Arrotondamenti.** Il carrello arrotonda ogni riga dopo lo sconto, il pagamento arrotonda il totale dopo l'IVA: con più righe e sconti la differenza può essere di un centesimo.
- **Test automatici.** Presenti su pagamento e API degli ordini. Assenti su carrello, modulo `prezzi` e modulo di contatto.
- **Sviluppi non rilasciati.** Un ramo del progetto comparatore sta modificando il modulo `disponibilita`.
- **Accessi.** Gli utenti del sito hanno un solo ruolo, il cliente finale. I ruoli multipli esistono solo nel gestionale.
- **Pubblicazione.** Non avviene in CI: una persona segue i passi a mano, con una scheda di rilascio.

## Documenti e lavori aperti

**Documenti esistenti**

- **Manuale del prodotto v1.3.** Funzionalità F1 Catalogo, F2 Scheda prodotto, F3 Carrello, F4 Pagamento, F5 Area cliente, F10 Selezione nel comparatore, F11 Confronto, F12 Condivisione e acquisto dal comparatore. Dice che il carrello si svuota dopo 30 giorni (F3.3) e che il totale del carrello coincide con quello del riepilogo del pagamento (F4.2): nel codice il limite del carrello è 90 giorni. Non descrive il gestionale né il modulo di contatto.
- **Documento tecnico v1.2.** Aggiornato al comparatore, con il suo capitolo Milestone. Non cita il modulo `disponibilita` nonostante il comparatore lo usi.

**Progetto in corso: comparatore di prodotti**

Avviato il 1 settembre 2026, Manuale e Piano dei SAL confermati da Franco. project manager 1 lo guida. Ci lavorano lo sviluppatore 1 e lo sviluppatore 2.

- **SAL1, Selezione e confronto base.** Accettato il 25 settembre. Story F10.1, F10.2, F10.3, F11.1.
- **SAL2, Confronto avanzato.** In corso, demo il 30 ottobre. Story F11.2 e F12.2. Ore stimate 240, buffer di milestone 48 ore (20%), metà già consumato: 24 ore rimaste. Ore stimate ancora da fare: 120. La story F12.2 vale 12 ore, non è iniziata e nessuna story ne dipende.
- **SAL3, Filtri e condivisione.** Da avviare, demo il 27 novembre. Story F11.3 e F12.1. La story F11.3 vale 14 ore.

Le story del comparatore:

- **F10.1** Come visitatore, voglio aggiungere un prodotto al confronto dalla sua scheda, per valutarlo insieme ad altri.
- **F10.2** Come visitatore, voglio aggiungere un prodotto al confronto dal catalogo, per non aprire ogni scheda.
- **F10.3** Come visitatore, voglio togliere un prodotto dal confronto, per restringere la scelta.
- **F11.1** Come visitatore, voglio vedere le caratteristiche affiancate, per confrontarle a colpo d'occhio.
- **F11.2** Come visitatore, voglio evidenziare solo le differenze, per capire cosa cambia tra i prodotti.
- **F11.3** Come visitatore, voglio vedere nel confronto solo i prodotti disponibili subito, per non scegliere qualcosa che non posso avere.
- **F12.1** Come visitatore, voglio condividere il confronto con un link, per chiedere un parere.
- **F12.2** Come visitatore, voglio mettere nel carrello un prodotto dal confronto, per acquistare senza tornare alla scheda.

Lo sprint in corso è il terzo, dal 28 settembre al 9 ottobre.

**Ticket aperti**

- **Ticket 101, bug.** Aperto il 30 settembre. Nel carrello il totale a volte differisce di un centesimo dal riepilogo del pagamento. Assegnato allo sviluppatore 3, senza Scheda di intervento.
- **Ticket 102, feature.** Aperto il 30 settembre. Aggiungere il campo "partita IVA" al modulo di contatto. Verifica fatta, da scrivere la Scheda di intervento.

**Registro delle variazioni del progetto comparatore**

- **V1, piccola, chiusa.** Cambiare l'ordine delle caratteristiche nella tabella di confronto. 3 ore.
- **V2, rifiutata da Franco.** Confronto fino a sei prodotti invece di quattro. Era una variazione media.

**Consegne in garanzia**

- **Nuovo pagamento.** Rilasciato il 14 settembre 2026. Durata pianificata del lavoro: 12 settimane, cioè 84 giorni. Garanzia: 42 giorni di calendario, fino al 26 ottobre.

## Team e calendario

Il test parte da venerdì 2 ottobre 2026.

Le persone e le ore settimanali disponibili per Lumera Arredi:

- **Leonardo, chi analizza.** Legge ogni richiesta, la classifica, stima, scrive la Scheda di intervento di un ticket e designa il responsabile di un progetto d'accordo con chi gestisce il team.
- **Chi gestisce il team.** Assegna le persone e decide con Leonardo. Se serve si confronta con il CEO.
- **CEO.** Interviene su ciò che chiede ore aggiuntive o scelte di priorità.
- **project manager 1.** Guida il comparatore. Saturo fino al 27 novembre.
- **project manager 2.** Libero. È il responsabile dei lavori nuovi di Lumera.
- **Team lead.** 8 ore, per indagini, stime e code review.
- **Sviluppatore 1.** 30 ore, tutte sul comparatore fino al 27 novembre.
- **Sviluppatore 2.** 30 ore: 15 sul comparatore, 15 libere.
- **Sviluppatore 3.** 30 ore: segue i ticket, il resto è libero.
- **Grafica.** Una persona dedicata, 8 ore, lavora in Figma.
- **Sistemista 1 e sistemista 2.** 4 ore ciascuno per Lumera. Uno dei due viene designato come incaricato della pubblicazione.

Le ore dei project manager non sono contate nella capacità degli sprint.

I parametri già decisi:

- sprint di 2 settimane, uguale per tutta l'azienda;
- buffer di sprint: 20% della capacità, solo per i ticket urgenti;
- buffer di milestone: 20% delle ore stimate, 30% con una sola persona;
- tempo massimo del kickoff e della prima Proposta di un progetto: 10% della stima;
- tempo massimo della verifica preliminare: 10% di una stima a occhio;
- un ticket che supera 2 settimane di lavoro si ferma e diventa progetto;
- una variazione piccola vale fino a 4 ore, e le piccole possono consumare al massimo metà del buffer di milestone.

Il calendario degli sprint:

- **Sprint 3.** Dal 28 settembre al 9 ottobre.
- **Sprint 4.** Dal 12 al 23 ottobre.
- **Sprint 5.** Dal 26 ottobre al 6 novembre.
- **Sprint 6.** Dal 9 al 20 novembre.
- **Sprint 7.** Dal 23 novembre al 4 dicembre.
- **Sprint 8.** Dal 7 al 18 dicembre.
- **Sprint 9.** Dal 21 dicembre al 1 gennaio.
- **Sprint 10.** Dal 4 al 15 gennaio.
- **Sprint 11.** Dal 18 al 29 gennaio.
- **Sprint 12.** Dal 1 al 12 febbraio.
- **Sprint 13.** Dal 15 al 26 febbraio.
- **Sprint 14.** Dal 1 al 12 marzo.

Altre date:

- **Ferie.** Sviluppatore 2 assente dal 19 al 23 ottobre.
- **Festività.** Martedì 8 dicembre. Lunedì 29 marzo 2027, Pasquetta.
- **Chiusura aziendale.** Dal 24 dicembre al 6 gennaio.
- **Chiusura del cliente.** Franco non è disponibile dal 28 al 31 dicembre, per l'inventario.
- **Data importante per il cliente.** Venerdì 27 novembre, Black Friday.
- **Fiera dei rivenditori.** Lunedì 22 febbraio 2027.

## I tre percorsi

Ogni percorso parte da una richiesta scritta con le parole del cliente e ha alcune cose che il test deve far emergere. Se non emergono, è una skill o un piano che non ha funzionato. Per ogni percorso sono elencati i ruoli in scena, gli eventi da introdurre, nell'ordine, e i fattori da verificare.

### Percorso 1: ticket

Ruoli in scena: Marta (cliente), Franco (referente), Leonardo (chi analizza), chi gestisce il team, project manager 1, chi conosce il sistema, sviluppatore 3, sistemista (incaricato della pubblicazione).

Richieste, aperte da Marta su osTicket il 2 ottobre:

**Ticket 103.** "Buongiorno, nel comparatore vorrei poter vedere solo i prodotti disponibili subito, e già che ci siamo anche nel catalogo. Ci serve prima del Black Friday."

**Ticket 104.** "Mi servirebbe poter scaricare gli ordini del mese in Excel, adesso li copio a mano."

Altre richieste del percorso:

- **Ticket 105**, urgente, aperto da Marta il 14 ottobre: "Da stamattina i clienti con una carta Mastercard non riescono a pagare."
- **Ticket 106**, aperto da Marta l'8 ottobre: "Quando avete un momento, nel piè di pagina c'è ancora il vecchio indirizzo email dell'assistenza: potete aggiornarlo?"

Fattori da verificare:

- il ticket 103 contiene due richieste distinte;
- la parte sul comparatore è già la story F11.3, prevista nel SAL3 con demo il 27 novembre, cioè il giorno stesso del Black Friday;
- volerla prima è un cambio di priorità, quindi una variazione media, e la decide Franco, non Marta;
- la parte sul catalogo non è nel progetto, e nel codice è già quasi pronta;
- quella parte tocca il modulo `disponibilita`, che un ramo non rilasciato sta modificando;
- il ticket 104 chiede una cosa che il sistema fa già: manca solo un permesso;
- il ticket 101 riguarda il totale del pagamento rilasciato da meno di 42 giorni, e viola la story F4.2: è un pacchetto di garanzia, non un ticket;
- per ogni richiesta l'analisi decide categoria, esito della verifica (da fare, non da fare, da fare in parte, da rimandare), stima in ore, tipo, urgenza e responsabile;
- il ticket 102 non ha story nel Manuale: la sua Scheda di intervento e il suo Resoconto devono gestire story senza codice;
- il ticket 105 è urgente e riguarda un pagamento ancora in garanzia: contano sia il percorso d'urgenza sia il pacchetto di garanzia;
- il ticket 106 non ha scadenza: è davvero a tempo perso;
- nessun ticket ha una conferma o una prova del cliente;
- la pubblicazione la segue l'incaricato della pubblicazione.

Gli eventi da introdurre, nell'ordine:

1. L'8 ottobre Marta risponde con ritardo a una domanda di chiarimento sul 102: lo fa il 13 ottobre.
2. Il 14 ottobre arriva il ticket urgente 105 mentre lo sviluppatore 3 lavora al 102.
3. Durante l'esecuzione il 102 supera la stima.
4. Il 19 ottobre Marta chiede a voce, per telefono, anche il codice destinatario per la fatturazione elettronica nello stesso modulo.
5. Il 22 ottobre il 102 va in produzione. Il 23 ottobre il modulo di contatto smette di inviare l'email all'assistenza.
6. Il 4 novembre Marta segnala che il campo partita IVA accetta anche 12 cifre.

### Percorso 2: progetto

Ruoli in scena: Franco (referente), Diego (cliente, non referente), Leonardo (chi analizza), chi gestisce il team, CEO, project manager 1, project manager 2, chi conosce il sistema, sviluppatori 1, 2 e 3, grafica, sistemista (incaricato della pubblicazione).

Richiesta aperta da Franco il 5 ottobre.

"Diego ha bisogno di un'area riservata per i rivenditori: devono entrare con le loro credenziali, vedere i loro prezzi e fare ordini grandi senza passare dal carrello normale. Sono una quarantina. Ci serve per la fiera di fine febbraio."

Fattori da verificare:

- la categoria è progetto: la stima supera le 2 settimane e serve una proposta;
- il responsabile è un project manager: project manager 1 è saturo, il project manager disponibile e più adatto è project manager 2, designato da Leonardo con chi gestisce il team;
- il modulo `prezzi` conosce un solo listino;
- sul sito esiste un solo ruolo utente;
- carrello e modulo `prezzi` non hanno test automatici;
- il progetto tocca il pagamento, ancora in garanzia;
- i codici sconto si applicano dopo l'IVA, e nessun documento lo dice;
- il Manuale non corrisponde al codice sulla durata del carrello: 30 giorni contro 90;
- la scadenza della fiera è un vincolo del cliente che nessun documento deve perdere;
- le conferme di Franco possono arrivare a voce, e valgono dopo il riepilogo scritto;
- le richieste di Diego non sono approvazioni: vale solo Franco;
- il tempo del kickoff e della prima Proposta non supera il 10% della stima;
- la Proposta sta in 5 pagine al massimo;
- il Piano dei SAL informa Franco sulla durata vera e sulle date delle demo;
- la pubblicazione, anche parziale per la fiera, la segue l'incaricato della pubblicazione.

Gli eventi da introdurre, nell'ordine:

1. In revisione, il 26 ottobre, Franco risponde solo a metà delle domande aperte.
2. Dopo la conferma della Proposta di soluzione, il 15 dicembre Diego chiede per telefono allo sviluppatore 2 di aggiungere i preventivi in PDF.
3. Il cliente consegna i listini dei rivenditori il 21 dicembre, con 6 giorni lavorativi di ritardo sulla data del Piano dei SAL.
4. Lo sviluppatore 2 si ammala dall'11 al 15 gennaio.
5. Il 13 gennaio un ticket urgente (108) sul pagamento ferma lo sviluppatore 1 per due giorni.
6. Alla demo della prima milestone una story ha un difetto non bloccante, e Franco chiede una cosa nuova.
7. Franco non risponde alla demo successiva.

### Percorso 3: prodotto

Ruoli in scena: Franco (referente), consulenti e responsabili showroom (utilizzatori), Leonardo (chi analizza), chi gestisce il team, CEO, project manager 2, chi conosce il sistema, sviluppatori 2 e 3, grafica, sistemista (incaricato della pubblicazione), fornitore del CRM.

Richiesta aperta da Franco il 12 ottobre.

"Voglio un'applicazione per prenotare gli appuntamenti nei nostri tre showroom. Il cliente sceglie showroom, consulente e orario. I consulenti gestiscono la loro agenda. Mi servono anche le videochiamate, il collegamento con il nostro CRM e le statistiche. Tutto pronto per aprile."

Fatti sul cliente utili al prodotto:

- i tre showroom hanno in tutto nove consulenti;
- oggi gli appuntamenti si prendono per telefono e si annotano su un foglio condiviso;
- il CRM è un prodotto di un fornitore esterno, senza documentazione pubblica;
- l'elenco dei clienti da importare è un file Excel di circa 2.800 righe;
- dominio e account dei servizi devono essere intestati a Lumera.

Fattori da verificare:

- è un sistema nuovo, quindi un prodotto;
- non tutto può entrare nella prima release;
- il CRM è un sistema esterno, senza documentazione;
- "aprile" è una scadenza da confrontare con la durata vera;
- il prototipo e il design chiedono tempo della grafica, che ha 8 ore a settimana;
- la pubblicazione, anche del lancio, la segue l'incaricato della pubblicazione.

Gli eventi da introdurre, nell'ordine:

1. Franco vuole tutto nella prima release.
2. Davanti al prototipo chiede una cosa nuova: la lista d'attesa.
3. Il fornitore del CRM non dà accesso per tre settimane.
4. L'elenco dei clienti da importare è un file Excel disordinato.
5. A una settimana dal lancio i testi sulla privacy non sono pronti.

## Correzioni fatte alla base il 2026-10-06

Errori e lacune della base precedente, corretti qui (tipo Base nel registro):

- le story del comparatore usavano gli stessi codici F1 e F2 del Manuale esistente: ora il Manuale ha F1 a F5 e il comparatore F10 a F12;
- il ticket 101 era presentato come un bug normale, ma riguarda un pagamento ancora in garanzia: ora lo è davvero;
- la garanzia del pagamento era "60 giorni" e scadeva il 13 novembre: ora segue la formula e scade il 26 ottobre;
- il buffer di sprint era al 10% con una nota: ora è al 20%;
- il registro si chiamava "delle modifiche": ora "delle variazioni";
- l'accettazione di una milestone con il silenzio dopo 5 giorni e la conferma della Scheda di intervento con il silenzio dopo 10 giorni non esistono più;
- i ruoli "product lead" e "chi conosce il sistema" ora sono project manager, chi analizza, chi gestisce il team e CEO;
- il Documento tecnico non conteneva il capitolo Milestone: ora è v1.2;
- il Manuale non copriva né il comparatore confermato né il modulo di contatto: ora copre il primo, e il secondo manca di proposito;
- il ticket 102 e il ticket 101 avevano una Scheda già scritta: ora si scrive durante il test;
- il modulo di contatto, il pagamento e l'anagrafica dei rivenditori non avevano fatti sul codice: ora li hanno;
- mancavano i ticket urgenti e a tempo perso, la pubblicazione e l'incaricato della pubblicazione, le scadenze del cliente per il progetto, i fatti sul cliente per il prodotto, il calendario degli sprint: ora ci sono;
- l'evento della malattia cadeva in uno sprint con tre giorni lavorativi e quello del ticket urgente su uno sviluppatore ancora sul comparatore: ora cadono nelle date in cui hanno effetto.

## Registro delle osservazioni

Si compila durante il test. Ogni osservazione indica la skill o il documento, il tipo (manca, superfluo, contraddizione, buco, passaggio, base) e la correzione proposta. Le osservazioni non sono state corrette: si correggono tutte alla fine, su decisione di Leonardo.

Il registro completo è in `docs/test-skill-svolgimento.md`, nella sezione finale, con il riferimento al passo in cui ogni osservazione è emersa.
