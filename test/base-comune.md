# Base comune dei test

Data: 2026-10-11

Questa base descrive il cliente inventato, i suoi sistemi, il team e i lavori già aperti. È comune a tutti gli scenari della cartella `test/`. Ogni scenario aggiunge la propria richiesta, gli eventi e i controlli attesi.

Gli scenari sono tre: un ticket (`ticket-1-sconto-iva-carrello`), un progetto (`progetto-1-area-rivenditori`) e un prodotto (`prodotto-1-app-showroom`). I test precedenti sono stati cancellati perché fatti su versioni superate dei documenti; restano nella cronologia git.

## Come si usa

È un test logico: verifica che il flusso regga da una skill all'altra, non che i documenti prodotti siano buoni su un caso vero.

Chi recita. Claude interpreta ogni ruolo, uno alla volta e dichiarando chi parla: il cliente (Franco, Marta, Diego, Elena), chi analizza, chi gestisce il team, il CEO, i responsabili (sviluppatore del ticket, project manager, product lead), chi conosce il sistema, gli sviluppatori, la grafica, l'incaricato della pubblicazione. Claude applica anche le skill, alla lettera, una alla volta, nell'ordine previsto dal piano della categoria. Leonardo legge l'analisi e decide quali osservazioni correggere.

Le regole:

1. Si segue il piano della categoria fase per fase, senza saltare. Se un piano è in contrasto con un altro, si segue quello della categoria del lavoro e si annota il contrasto.
2. Vale solo ciò che è scritto in questa base, nello scenario o che viene detto durante il test. Chi risponde sul codice usa solo i fatti del capitolo "Il sistema esistente" e quelli dello scenario. Se una skill chiede qualcosa che non c'è, non si inventa: si annota.
3. I documenti di lavoro si producono in forma ridotta, quanto basta per passare alla skill successiva (per esempio una Proposta o una Nota di sprint essenziali). I documenti del sistema, cioè Manuale del prodotto e Documento tecnico, si scrivono invece per intero, perché solo così si vede come vengono e quanto costano. Il Documento tecnico deve soddisfare il criterio di sufficienza della skill: uno sviluppatore che non ha seguito il lavoro può implementare ogni funzionalità nuova leggendo solo i capitoli 3, 4, 5 e 6. I numeri si calcolano per intero: ore, capacità, buffer, margine e date.
4. Le skill e i piani non si correggono durante il test. Si correggono alla fine, dall'analisi.
5. Ogni lavorazione ha la sua cartella `esecuzione-N/<codice della lavorazione>/`, con la struttura della knowledge base: nella radice i PDF finali dei documenti veri (per un progetto Proposta, Manuale, Documento tecnico e Piano dei SAL), numerati in ordine di nascita senza saltare numeri; `claude` con i sorgenti Markdown e tutte le versioni precedenti; `design` con wireframe, mockup e prototipi; `source` con tutto ciò che entra e che esce verso il cliente (grezzo, elaborato e messaggi inviati), con i nomi che iniziano con la data; `develop` con Note di sprint e Milestone report (solo Markdown, senza PDF); `log` con `history-and-decision.md` (Stato di partenza, stima, piano di rilascio, esiti, variazioni, riprogrammazioni, garanzia), `decisioni.md` e, a fine progetto, `report-di-progetto.md`. Niente cartelle per fase. `N` è il numero della prova: la prima volta 1, poi 2 e così via. I documenti del sistema (Manuale e Documento tecnico, che contiene il capitolo Pubblicazione) non hanno una cartella propria: le versioni nuove stanno nella lavorazione che le produce, come gli altri documenti. I PDF si creano con `build/crea-pdf.ps1` partendo dai sorgenti in `claude`, in ordine cronologico, così il numero lo assegna lo script. `history-and-decision.md` nascono vuoti in `log` e si popolano con le skill `history-and-decision` e `history-and-decision`.
6. Le conversazioni con il cliente si scrivono come trascrizioni brevi (file di testo), che la skill `interpretazione-conversazioni` poi legge. Niente audio: nella cartella `source` stanno la trascrizione e la sintesi, e il file audio si dà per esistente.
7. A ogni passo chi esegue annota in `esecuzione-N/diario.md`, riga per riga: data, ruolo, skill usata, cosa ha fatto, cosa ha prodotto, e se qualcosa non ha funzionato.
8. ClickUp, osTicket e Claude Design non esistono nel test: ciò che le skill vi scriverebbero (task, List, commenti, checklist, stati, ore tracciate) si scrive nel diario, sotto una voce che dice dove andrebbe. Gli stati e le ore tracciate che le skill "leggono" da ClickUp sono quelli dello scenario.
9. Il controllo dei caratteri si fa con una ricerca dei caratteri vietati sui file prodotti (Python non è installato, quindi lo script delle skill non si esegue).

Tipi di osservazione, usati nel diario e nell'analisi:

- **Manca.** La skill chiede un'informazione che a quel punto del flusso nessuno ha.
- **Superfluo.** La skill produce o chiede qualcosa che non serve.
- **Peso.** Un passo o un documento che costa più tempo di quanto vale: la procedura è troppo lenta.
- **Contraddizione.** Due skill, o una skill e un piano, dicono cose diverse.
- **Buco.** Una situazione reale che nessuna skill copre.
- **Passaggio.** Ciò che una skill produce non basta alla skill successiva.
- **Base.** Un errore o una lacuna di questa base o dello scenario.
- **Esecuzione.** Un errore di chi ha recitato, non del piano.

## Il cliente

Lumera Arredi è un'azienda inventata che vende illuminazione e complementi d'arredo, online e in tre showroom (Milano, Torino, Bologna). È cliente da quattro anni.

- **Franco.** Titolare. È il referente: vale solo la sua approvazione. Risponde in fretta ma legge poco, e conferma volentieri a voce.
- **Marta.** Si occupa dell'assistenza clienti. Usa il gestionale ogni giorno e apre la maggior parte dei ticket su osTicket. Non decide nulla che costi ore o sposti date.
- **Diego.** Cura i rapporti commerciali con i rivenditori. Ha richieste precise e tende a rivolgersi direttamente agli sviluppatori.
- **Elena.** Responsabile dello showroom di Milano. Coordina i consulenti degli showroom e li conosce bene. Non decide nulla che costi ore o sposti date.
- **Paolo.** Consulente dello showroom di Milano.

Le regole sono quelle delle Regole comuni: si lavora a consumo, nessuna approvazione economica, la prova del cliente sullo staging si accetta solo con risposta esplicita (una demo in call è facoltativa), garanzia con la formula (maggiore tra 15 giorni e 50% della durata pianificata; per un ticket sempre 15 giorni lavorativi).

## Il sistema esistente

Il sistema è il sito di vendita online di Lumera Arredi, con il suo gestionale. È in produzione da tre anni.

Cosa fa, visto da chi lo usa:

- **Catalogo.** Elenco dei prodotti con ricerca e filtri per categoria, prezzo e marca.
- **Scheda prodotto.** Descrizione, immagini, prezzo, disponibilità.
- **Carrello e pagamento.** Rifatti di recente: il nuovo pagamento (lavorazione 96) è in produzione dal 14 settembre 2026 ed è ancora in garanzia.
- **Area cliente.** Ordini, indirizzi, lista dei desideri.
- **Modulo di contatto.** Una pagina del sito: nome, email, messaggio. I messaggi arrivano nella sezione Messaggi del gestionale e per email all'assistenza.
- **Comparatore di prodotti.** In costruzione: è il progetto in corso (lavorazione 100).
- **Gestionale.** Prodotti, ordini, clienti, codici sconto, messaggi di contatto, anagrafica dei rivenditori. Lo usano Marta e altre quattro persone.

Come sono fatti i repository e il codice. Queste sono le uniche cose che sviluppatori e chi conosce il sistema possono "trovare" durante il test, oltre ai fatti dello scenario:

- **Repository.** Tre: `lumera-sito` (interfaccia in React e TypeScript, con server SSR), `lumera-api` (servizio di API e database relazionale) e `lumera-gestionale` (interfaccia del gestionale, che usa le stesse API del sito). Ognuno ha un file `CLAUDE.md`. Quello di `lumera-api` dice: ogni modifica a un modulo di calcolo ha un test automatico; i moduli non si importano a vicenda in modo circolare; i nomi dei file sono in minuscolo con i trattini.
- **Modulo `disponibilita`** (in `lumera-api`). Calcola se un prodotto è disponibile subito, ordinabile o esaurito. È condiviso: lo usano la scheda prodotto, il carrello e il comparatore in costruzione. I dati di disponibilità li inserisce a mano Marta nel gestionale.
- **Filtro per disponibilità nel catalogo.** Le API lo accettano già e il gestionale lo usa. Nel sito non è mai stato mostrato.
- **Modulo `prezzi`** (in `lumera-api`). Dà per scontato che esista un solo listino, uguale per tutti. Lo usano scheda prodotto, carrello, pagamento e gestionale (anche per i preventivi manuali).
- **Codici sconto.** Vengono applicati dopo l'IVA. Nessun documento lo dice.
- **Esportazione degli ordini.** Esiste nel gestionale, ma è visibile solo a chi ha il permesso di amministratore. Marta non ce l'ha.
- **Modulo di contatto.** Componente `ContactForm` in `lumera-sito`, endpoint `contatti` in `lumera-api`, tabella `messaggi_contatto`. L'email all'assistenza parte dall'endpoint, tramite un servizio esterno di invio email. Nessun test automatico.
- **Pagamento.** Si appoggia a un servizio esterno. I circuiti di carta accettati sono in un file di configurazione. Ha test automatici.
- **API degli ordini.** Creano un ordine a partire da un carrello, accettano solo prezzi calcolati dal modulo `prezzi`. Hanno test automatici.
- **Anagrafica rivenditori.** Nel gestionale esistono circa quaranta rivenditori inseriti a mano, non collegati agli utenti del sito.
- **Arrotondamenti.** Il carrello arrotonda ogni riga dopo lo sconto, il pagamento arrotonda il totale dopo l'IVA: con più righe e sconti la differenza può essere di un centesimo.
- **Test automatici.** Presenti su pagamento e API degli ordini. Assenti su carrello, modulo `prezzi` e modulo di contatto.
- **Sviluppi non rilasciati.** Un ramo del progetto comparatore sta modificando il modulo `disponibilita`.
- **Accessi.** Gli utenti del sito hanno un solo ruolo, il cliente finale. I ruoli multipli esistono solo nel gestionale.
- **Pubblicazione.** Non avviene in CI: una persona segue i passi a mano. Il capitolo Pubblicazione del Documento tecnico copre solo il sito e le API: dice che dopo ogni pubblicazione del sito va riavviato il server SSR e svuotata la cache sulle rotte `/catalogo` e `/prodotto`. Il gestionale non è nel capitolo Pubblicazione.

## Documenti e lavori aperti

**Documenti esistenti del sistema**

Sono scritti per intero in `test/sistema-base/`, con tutte le versioni dalla prima: Manuale del prodotto da v1.0 (2023-10-02) a v1.3, Documento tecnico da v1.0 a v1.2 (che contiene anche il capitolo Pubblicazione). Le versioni v1.3 del Manuale e v1.2 del Documento tecnico sono la base di partenza; le precedenti sono ricostruite per la catena completa: Manuale v1.0 lancio, v1.1 lista dei desideri (2025-03-10), v1.2 carrello e pagamento rifatti (lavorazione 96, 2026-09-14); Documento tecnico v1.0 lancio, v1.1 carrello e pagamento rifatti (2026-09-14, con la Guida alla pubblicazione ancora a parte). Il ticket 103 non li aggiorna: lascia la sua Scheda di intervento. Il progetto 107 parte dopo il ticket e li porta a 1.5 e 1.4, recependo la Scheda del 103 (F3.4). Il prodotto 110 è un sistema nuovo e non ha documenti di partenza. Le descrizioni qui sotto sono il riassunto.

- **Manuale del prodotto v1.3.** Funzionalità F1 Catalogo, F2 Scheda prodotto, F3 Carrello, F4 Pagamento, F5 Area cliente, F10 Selezione nel comparatore, F11 Confronto, F12 Condivisione e acquisto dal comparatore. Le story di F3 sono F3.1 Aggiungere un prodotto al carrello, F3.2 Cambiare le quantità, F3.3 Svuotamento del carrello dopo 30 giorni. Dice che il totale del carrello coincide con quello del riepilogo del pagamento (F4.2): nel codice il limite del carrello è 90 giorni, non 30. Non descrive il gestionale né il modulo di contatto, e non dice come si applicano i codici sconto.
- **Documento tecnico v1.2.** Aggiornato al comparatore, con il suo capitolo Piano delle milestone. Non cita il modulo `disponibilita` nonostante il comparatore lo usi.
- **Capitolo Pubblicazione.** Nel Documento tecnico, capitolo 7. Vedi sopra.

**Progetto in corso: comparatore di prodotti (codice 100)**

Avviato il 1 settembre 2026, Manuale e Piano dei SAL confermati da Franco. Il project manager 1 lo guida. Ci lavorano lo sviluppatore 1 e lo sviluppatore 2. Issue e stati sono in ClickUp.

- **SAL1, Selezione e confronto base.** Accettato il 25 settembre. Story F10.1, F10.2, F10.3, F11.1.
- **SAL2, Confronto avanzato.** In corso, prova del cliente il 30 ottobre. Story F11.2 e F12.2. Ore stimate 140, buffer di milestone 28 ore (20%), metà già consumato: 14 ore rimaste. Ore stimate ancora da fare: 80. La capacità netta del comparatore (sviluppatore 1 con 30 ore e sviluppatore 2 con 15 ore, con le ferie dello sviluppatore 2) dal 12 al 30 ottobre è 96 ore, quindi il margine è 16 ore, in linea. La story F12.2 vale 12 ore, non è iniziata e nessuna story ne dipende.
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

- **Ticket 101, bug.** Aperto il 30 settembre. Nel carrello il totale a volte differisce di un centesimo dal riepilogo del pagamento. Riguarda il pagamento rilasciato il 14 settembre (lavorazione 96): è un pacchetto di garanzia. Stima 4 ore.
- **Ticket 102, feature.** Aperto il 30 settembre. Aggiungere il campo "partita IVA" al modulo di contatto. Verifica fatta, Scheda di intervento da scrivere. Stima 3 ore.
- **Ticket 103, feature.** Aperto il 5 ottobre da Marta: l'ordine di calcolo di sconto e IVA nel carrello. È l'oggetto dello scenario del ticket: la decisione di Franco arriva il 13 ottobre e la pubblicazione è il 20 ottobre.

**Variazioni del comparatore (da History and decision della lavorazione 100)**

- **V1, piccola, chiusa.** Cambiare l'ordine delle caratteristiche nella tabella di confronto. 3 ore.
- **V2, rifiutata da Franco.** Confronto fino a sei prodotti invece di quattro. Era una variazione media.

**Consegne in garanzia**

- **Nuovo pagamento (lavorazione 96).** Rilasciato il 14 settembre 2026. Durata pianificata del lavoro: 12 settimane, cioè 84 giorni. Garanzia: 42 giorni di calendario, fino al 26 ottobre.

**Report di progetto dei lavori passati** (le fonti per stimare la durata)

- **Lavorazione 96, nuovo pagamento.** Due sviluppatori. Durata pianificata 12 settimane, reale 13. Ore stimate con buffer 700, ore reali 735. Una variazione media. Il materiale del cliente (credenziali del servizio di pagamento) è arrivato con 4 giorni di ritardo. La sezione sulla garanzia è in corso.
- **Lavorazione 58, rifacimento del gestionale.** Tre sviluppatori. Durata pianificata 20 settimane, reale 22. Ore stimate con buffer 1.500, ore reali 1.610. Due variazioni medie. Causa principale dello scostamento: integrazione con i dati esistenti più sporca del previsto.

## Team e calendario

Le persone e le ore settimanali disponibili per Lumera Arredi:

- **Leonardo, chi analizza.** Legge ogni richiesta, la classifica, stima, scrive la Scheda di intervento di un ticket e designa il responsabile di un progetto o di un prodotto d'accordo con chi gestisce il team.
- **Chi gestisce il team.** Assegna le persone e decide con Leonardo. Se serve si confronta con il CEO.
- **CEO.** Interviene su ciò che chiede ore aggiuntive o scelte di priorità.
- **Supervisore.** Controlla stime e capacità alla pianificazione. All'inizio sono due persone.
- **Project manager 1.** Guida il comparatore. Saturo fino al 27 novembre.
- **Project manager 2.** Libero. È il responsabile dei progetti nuovi di Lumera.
- **Product lead 1.** Libero. È il responsabile dei prodotti nuovi di Lumera.
- **Team lead.** 8 ore, per indagini, stime e revisioni del codice.
- **Sviluppatore 1.** 30 ore, tutte sul comparatore fino al 27 novembre, poi libero.
- **Sviluppatore 2.** 30 ore: 15 sul comparatore, 15 libere fino al 27 novembre, poi 30 libere.
- **Sviluppatore 3.** 30 ore: segue i ticket, 15 ore sono libere. È una delle persone sempre disponibili per i ticket.
- **Sviluppatore 4.** 30 ore, libero da gennaio 2027.
- **Grafica.** Una persona dedicata, 8 ore, lavora in Claude Design.
- **Sistemista 1 e sistemista 2.** 4 ore ciascuno per Lumera. Uno dei due è designato incaricato della pubblicazione.

Le ore dei project manager e dei product lead non sono contate nella capacità degli sprint. Le 8 ore del team lead sono per revisioni e indagini e non sono contate nella capacità delle lavorazioni.

Parametri già decisi:

- sprint di 2 settimane, uguale per tutta l'azienda, che finisce di venerdì;
- buffer di sprint: 20% della capacità di ogni persona, solo per i ticket urgenti;
- buffer di milestone: 20% delle ore stimate, 30% con una sola persona;
- tempo del kickoff di un progetto o di un prodotto: 10% di una stima a occhio della durata, fatta all'inizio in una decina di minuti;
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
- **Sprint 15.** Dal 15 al 26 marzo.
- **Sprint 16.** Dal 29 marzo al 9 aprile.
- **Sprint 17.** Dal 12 al 23 aprile.
- **Sprint 18.** Dal 26 aprile al 7 maggio.
- **Sprint 19.** Dal 10 al 21 maggio.
- **Sprint 20.** Dal 24 maggio al 4 giugno.
- **Sprint 21.** Dal 7 al 18 giugno.
- **Sprint 22.** Dal 21 giugno al 2 luglio.
- **Sprint 23.** Dal 5 al 16 luglio.
- **Sprint 24.** Dal 19 al 30 luglio.
- **Sprint 25.** Dal 2 al 13 agosto.
- **Sprint 26.** Dal 16 al 27 agosto.
- **Sprint 27.** Dal 30 agosto al 10 settembre.
- **Sprint 28.** Dal 13 al 24 settembre.

Altre date:

- **Ferie.** Sviluppatore 2 assente dal 19 al 23 ottobre 2026.
- **Festività.** Martedì 8 dicembre 2026. 25 dicembre 2026. 1 gennaio e 6 gennaio 2027. Lunedì 29 marzo 2027, Pasquetta. Mercoledì 2 giugno 2027.
- **Chiusura aziendale.** Dal 24 dicembre 2026 al 6 gennaio 2027, e dal 9 al 20 agosto 2027.
- **Chiusura del cliente.** Franco non è disponibile dal 28 al 31 dicembre 2026, per l'inventario.
- **Data importante per il cliente.** Venerdì 27 novembre 2026, Black Friday.
- **Fiera dei rivenditori.** Lunedì 22 febbraio 2027.
- **Quarto showroom.** Lumera apre uno showroom a Verona lunedì 13 settembre 2027.
