# Base comune dei test

Data: 2026-10-06

Questa base descrive il cliente inventato, il suo sistema, il team e i lavori già aperti. È comune a tutti gli scenari della cartella `test/`. Ogni scenario aggiunge la propria richiesta, gli eventi e i controlli attesi. Sostituisce la base del primo test, che è in `archivio-primo-test/` e non si usa più.

Gli scenari sono due progetti e tre ticket. Il prodotto non ha uno scenario: il Piano di prodotto riallineato il 2026-10-06 va prima rivisto da Leonardo.

## Come si usa

È un test logico: verifica che il flusso regga da una skill all'altra, non che i documenti prodotti siano buoni su un caso vero.

Chi recita. Claude interpreta ogni ruolo, uno alla volta e dichiarando chi parla: il cliente (Franco, Marta, Diego), chi analizza, chi gestisce il team, il CEO, i responsabili (project manager), chi conosce il sistema, gli sviluppatori, la grafica, l'incaricato della pubblicazione. Claude applica anche le skill, alla lettera, una alla volta, nell'ordine previsto dal piano. Leonardo legge l'analisi e decide quali osservazioni correggere.

Le regole:

1. Si segue il piano della categoria fase per fase, senza saltare. Se un piano è in contrasto con un altro, si segue quello della categoria del lavoro e si annota il contrasto.
2. Vale solo ciò che è scritto in questa base, nello scenario o che viene detto durante il test. Chi risponde sul codice usa solo i fatti del capitolo "Il sistema esistente" e quelli dello scenario. Se una skill chiede qualcosa che non c'è, non si inventa: si annota.
3. I documenti si producono in forma ridotta, quanto basta per passare alla skill successiva. I numeri invece si calcolano per intero: ore, capacità, buffer, margine e date.
4. Le skill e i piani non si correggono durante il test. Si correggono alla fine, dall'analisi.
5. Ogni documento prodotto si salva in `esecuzione-N/<codice della lavorazione>/<cartella della fase>/`, con i nomi di fase dei piani, come nella knowledge base vera. `N` è il numero della prova: la prima volta 1, poi 2 e così via. Anche `storico.md` e `decisioni.md` nascono vuoti nella cartella della lavorazione.
6. Le conversazioni con il cliente si scrivono come trascrizioni brevi (file di testo), che la skill `interpretazione-conversazioni` poi legge. Niente audio.
7. A ogni passo chi esegue annota in `esecuzione-N/diario.md`, riga per riga: data, ruolo, skill usata, cosa ha fatto, cosa ha prodotto, e se qualcosa non ha funzionato.

Tipi di osservazione, usati nel diario e nell'analisi:

- **Manca.** La skill chiede un'informazione che a quel punto del flusso nessuno ha.
- **Superfluo.** La skill produce o chiede qualcosa che non serve.
- **Peso.** Un passo o un documento che costa più tempo di quanto vale: la procedura è troppo lenta.
- **Contraddizione.** Due skill, o una skill e un piano, dicono cose diverse.
- **Buco.** Una situazione reale che nessuna skill copre.
- **Passaggio.** Ciò che una skill produce non basta alla skill successiva.
- **Base.** Un errore o una lacuna di questa base o dello scenario.

## Il cliente

Lumera Arredi è un'azienda inventata che vende illuminazione e complementi d'arredo, online e in tre showroom. È cliente da quattro anni.

- **Franco.** Titolare. È il referente: vale solo la sua approvazione. Risponde in fretta ma legge poco, e conferma volentieri a voce.
- **Marta.** Si occupa dell'assistenza clienti. Usa il gestionale ogni giorno e apre la maggior parte dei ticket su osTicket. Non decide nulla che costi ore o sposti date.
- **Diego.** Cura i rapporti commerciali con i rivenditori. Ha richieste precise e tende a rivolgersi direttamente agli sviluppatori.

Le regole sono quelle delle Regole comuni: si lavora a consumo, nessuna approvazione economica, la prova del cliente sullo staging si accetta solo con risposta esplicita (una demo in call è facoltativa), garanzia con la formula (maggiore tra 15 giorni e 50% della durata pianificata; per un ticket sempre 15 giorni lavorativi).

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

Com'è fatto il codice. Queste sono le uniche cose che sviluppatori e chi conosce il sistema possono "trovare" durante il test, oltre ai fatti dello scenario:

- **Struttura.** Interfaccia in React e TypeScript, un servizio di API, un database relazionale. Sito e gestionale sono due applicazioni che usano le stesse API.
- **Modulo `disponibilita`.** Calcola se un prodotto è disponibile subito, ordinabile o esaurito. È condiviso: lo usano la scheda prodotto, il carrello e il comparatore in costruzione. I dati di disponibilità li inserisce a mano Marta nel gestionale.
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
- **Pubblicazione.** Non avviene in CI: una persona segue i passi a mano. La Guida alla pubblicazione del sistema esiste ed è v1.0: dice che dopo ogni pubblicazione del sito va riavviato il server SSR e svuotata la cache sulle rotte `/catalogo` e `/prodotto`.

## Documenti e lavori aperti

**Documenti esistenti**

- **Manuale del prodotto v1.3.** Funzionalità F1 Catalogo, F2 Scheda prodotto, F3 Carrello, F4 Pagamento, F5 Area cliente, F10 Selezione nel comparatore, F11 Confronto, F12 Condivisione e acquisto dal comparatore. Dice che il carrello si svuota dopo 30 giorni (F3.3) e che il totale del carrello coincide con quello del riepilogo del pagamento (F4.2): nel codice il limite del carrello è 90 giorni. Non descrive il gestionale né il modulo di contatto, e non dice come si applicano i codici sconto.
- **Documento tecnico v1.2.** Aggiornato al comparatore, con il suo capitolo Milestone. Non cita il modulo `disponibilita` nonostante il comparatore lo usi.
- **Guida alla pubblicazione v1.0.** Vedi sopra.

**Progetto in corso: comparatore di prodotti (codice 100)**

Avviato il 1 settembre 2026, Manuale e Piano dei SAL confermati da Franco. Il project manager 1 lo guida. Ci lavorano lo sviluppatore 1 e lo sviluppatore 2. Issue e stati sono in ClickUp.

- **SAL1, Selezione e confronto base.** Accettato il 25 settembre. Story F10.1, F10.2, F10.3, F11.1.
- **SAL2, Confronto avanzato.** In corso, prova del cliente il 30 ottobre. Story F11.2 e F12.2. Ore stimate 240, buffer di milestone 48 ore (20%), metà già consumato: 24 ore rimaste. Ore stimate ancora da fare: 120. La story F12.2 vale 12 ore, non è iniziata e nessuna story ne dipende.
- **SAL3, Filtri e condivisione.** Da avviare, prova del cliente il 27 novembre. Story F11.3 e F12.1. La story F11.3 vale 14 ore.

Le story del comparatore:

- **F10.1** Come visitatore, voglio aggiungere un prodotto al confronto dalla sua scheda, per valutarlo insieme ad altri.
- **F10.2** Come visitatore, voglio aggiungere un prodotto al confronto dal catalogo, per non aprire ogni scheda.
- **F10.3** Come visitatore, voglio togliere un prodotto dal confronto, per restringere la scelta.
- **F11.1** Come visitatore, voglio vedere le caratteristiche affiancate, per confrontarle a colpo d'occhio.
- **F11.2** Come visitatore, voglio evidenziare solo le differenze, per capire cosa cambia tra i prodotti.
- **F11.3** Come visitatore, voglio vedere nel confronto solo i prodotti disponibili subito, per non scegliere qualcosa che non posso avere.
- **F12.1** Come visitatore, voglio condividere il confronto con un link, per chiedere un parere.
- **F12.2** Come visitatore, voglio mettere nel carrello un prodotto dal confronto, per acquistare senza tornare alla scheda.

**Ticket aperti**

- **Ticket 101, bug.** Aperto il 30 settembre. Nel carrello il totale a volte differisce di un centesimo dal riepilogo del pagamento. Riguarda il pagamento rilasciato il 14 settembre: è un pacchetto di garanzia.
- **Ticket 102, feature.** Aperto il 30 settembre. Aggiungere il campo "partita IVA" al modulo di contatto. Verifica fatta, Scheda di intervento da scrivere.

**Registro delle variazioni del comparatore**

- **V1, piccola, chiusa.** Cambiare l'ordine delle caratteristiche nella tabella di confronto. 3 ore.
- **V2, rifiutata da Franco.** Confronto fino a sei prodotti invece di quattro. Era una variazione media.

**Consegne in garanzia**

- **Nuovo pagamento.** Rilasciato il 14 settembre 2026. Durata pianificata del lavoro: 12 settimane, cioè 84 giorni. Garanzia: 42 giorni di calendario, fino al 26 ottobre.

## Team e calendario

Le persone e le ore settimanali disponibili per Lumera Arredi:

- **Leonardo, chi analizza.** Legge ogni richiesta, la classifica, stima, scrive la Scheda di intervento di un ticket e designa il responsabile di un progetto d'accordo con chi gestisce il team.
- **Chi gestisce il team.** Assegna le persone e decide con Leonardo. Se serve si confronta con il CEO.
- **CEO.** Interviene su ciò che chiede ore aggiuntive o scelte di priorità.
- **Supervisore.** Controlla stime e capacità alla pianificazione. All'inizio sono due persone.
- **Project manager 1.** Guida il comparatore. Saturo fino al 27 novembre.
- **Project manager 2.** Libero. È il responsabile dei lavori nuovi di Lumera.
- **Team lead.** 8 ore, per indagini, stime e revisioni del codice.
- **Sviluppatore 1.** 30 ore, tutte sul comparatore fino al 27 novembre.
- **Sviluppatore 2.** 30 ore: 15 sul comparatore, 15 libere.
- **Sviluppatore 3.** 30 ore: segue i ticket, il resto è libero. È una delle persone sempre disponibili per i ticket.
- **Grafica.** Una persona dedicata, 8 ore, lavora in Figma.
- **Sistemista 1 e sistemista 2.** 4 ore ciascuno per Lumera. Uno dei due è designato incaricato della pubblicazione.

Le ore dei project manager non sono contate nella capacità degli sprint.

Parametri già decisi:

- sprint di 2 settimane, uguale per tutta l'azienda, che finisce di venerdì;
- buffer di sprint: 20% della capacità di ogni persona, solo per i ticket urgenti;
- buffer di milestone: 20% delle ore stimate, 30% con una sola persona;
- tempo del kickoff di un progetto: 10% di una stima a occhio fatta all'inizio in una decina di minuti;
- tempo massimo della verifica preliminare di un ticket: 10% di una stima a occhio;
- un ticket che supera 2 settimane di lavoro si ferma e diventa progetto;
- una variazione piccola vale fino a 4 ore, e le piccole possono consumare al massimo metà del buffer di milestone.

Calendario degli sprint:

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
