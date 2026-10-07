# Regole comuni

Data: 2026-10-06

Queste regole valgono per ogni lavoro, qualunque sia la sua categoria. I piani dei ticket, di progetto e di prodotto descrivono solo le fasi e ciò che ciascuno ha di proprio, e rimandano qui per tutto il resto.

Questo documento è il riferimento per tutto il team.

## Glossario

Ogni cosa ha un solo nome, usato allo stesso modo in tutti i piani e in tutti i documenti.

### Categorie e persone

- **Categoria.** Ciò che una richiesta diventa: ticket, progetto o prodotto. La decide sempre l'azienda, mai il cliente.
- **Referente.** La persona del cliente la cui approvazione vale. È una sola.
- **Responsabile.** La persona interna a cui è assegnata una lavorazione e da cui passano le richieste del cliente su quel lavoro. È sempre uno sviluppatore, con nome e responsabilità che cambiano secondo la categoria. Per un ticket è semplicemente il responsabile: lo sviluppatore che esegue il lavoro. Per un progetto è il project manager, che guida il progetto e tiene i contatti con il cliente. Per un prodotto è il product lead, con la stessa guida estesa a tutto il prodotto.
- **Incaricato della pubblicazione.** La persona designata a seguire la pubblicazione in produzione di un lavoro. Non è necessariamente il responsabile.
- **Supervisore.** La persona che controlla l'avanzamento del lavoro e che le stime in ore e la capacità degli sprint siano rispettate. È designato dall'azienda: all'inizio sono due persone.

### Cosa si costruisce

- **Story.** Una cosa che un tipo di utente può fare con il sistema, scritta nella forma "Come, voglio, per". Ha un codice fisso, per esempio F3.1.
- **Criterio di accettazione.** La condizione verificabile che dice quando una story è consegnata.
- **Milestone.** Un blocco di lavoro che consegna story intere e si può dimostrare. Verso il cliente si chiama SAL: è la stessa cosa.
- **Issue.** L'unità di lavoro dentro una milestone o un ticket.
- **DoD (Definition of Done).** Le condizioni verificabili che chiudono una issue o un ticket.
- **Spike.** Un tipo di issue: tempo limitato per sciogliere un'incognita.
- **Release.** Una porzione di prodotto consegnata e lanciata insieme. Un prodotto ha più release.

### Tempo e capacità

- **Sprint.** Un intervallo di tempo fisso, uguale per tutta l'azienda, in cui si pianifica e si chiude il lavoro.
- **Capacità.** Le ore realmente disponibili di una persona in uno sprint.
- **Scadenza del cliente.** La data entro cui il cliente chiede il lavoro, indicata su osTicket. Capita di rado: ferie, Black Friday, altre emergenze. Non cambia l'urgenza, che si decide sui fatti: serve a pianificare e a dire subito se la data è fattibile.
- **Nota di sprint.** Il documento interno a ogni fine sprint, uno per lavorazione: fatto, non fatto, ore, imprevisti, margine della milestone, cosa serve dal cliente. Non va al cliente.
- **Pianificazione dello sprint.** La scelta delle issue per lo sprint successivo, fatta in ClickUp dopo la Nota di sprint: capacità, issue scelte, rispetto delle date del Piano dei SAL. Non è un documento.
- **Buffer di sprint.** La parte di capacità di ogni persona riservata ai ticket urgenti: il 20% della sua capacità in ogni sprint.
- **Buffer di milestone.** Le ore aggiunte a una milestone per assorbire gli imprevisti. La differenza tra capacità rimanente e ore rimanenti è il margine della milestone.
- **Prestito.** Le ore di uno sviluppatore di un progetto messe a disposizione dei ticket per uno sprint. Lo decide chi gestisce il team prima della pianificazione dello sprint del progetto, che ne tiene conto: le ore prestate riducono la capacità del progetto e il margine della sua milestone.

### Controlli iniziali

- **Verifica preliminare.** Il controllo iniziale di una richiesta sui lavori aperti e sul codice. Il termine "verifica" non indica altro.
- **Kickoff.** La fase iniziale di una lavorazione. Per un progetto va dalla valutazione della richiesta alla documentazione pronta per lo sviluppo (indagine sull'esistente, stima, Proposta di soluzione, Manuale, Documento tecnico). Per un ticket è l'analisi iniziale. Lo eseguono le skill `kickoff` (progetti e prodotti) e `kickoff-ticket` (ticket).
- **Indagine sull'esistente.** L'analisi completa del sistema che si fa nel kickoff di un progetto.

### Consegna e accettazione

- **Milestone report.** Il documento per il cliente a ogni milestone: story consegnate con i criteri di accettazione, come provare sullo staging, esito della prova, stato della milestone successiva, date aggiornate, ciò che serve dal cliente.
- **Staging.** L'ambiente separato dalla produzione dove il lavoro viene provato prima del rilascio.
- **Prova.** Ciò che il cliente fa sullo staging per controllare una consegna.
- **Demo.** La presentazione facoltativa, in call, del software funzionante sullo staging. Non sostituisce la prova.
- **Rilascio.** La messa in produzione. Il termine non indica altro. La pubblicazione non è automatica: non avviene in CI, la segue una persona, l'incaricato della pubblicazione.

### Documenti e archivio

- **Knowledge base.** La repository dove stanno il piano di sviluppo con le sue skill, i documenti del sistema e la cartella dei documenti delle lavorazioni. Ce n'è una per prodotto. Sostituisce Drive.
- **Codice della lavorazione.** Il codice del ticket su osTicket da cui nasce una lavorazione, qualunque sia la sua categoria. Dà il nome alla cartella della lavorazione nella knowledge base e serve a citare i lavori collegati.
- **Stato di partenza.** Il documento interno che fotografa il sistema o il contesto prima di un progetto o di un prodotto: come funziona oggi, cosa viene toccato, fattibilità, incognite. In testa porta le decisioni dell'analisi: categoria, stima a occhio, responsabile, scadenza del cliente, domande.
- **Proposta di soluzione.** Il documento per il cliente di 2 o 3 pagine (al massimo 5) con la richiesta compresa, la soluzione, la stima di durata e le user story in elenco. Il cliente la conferma.
- **Manuale del prodotto.** Il documento che dice cosa fa il sistema, con le user story complete e i criteri di accettazione. Il cliente lo conferma. Appartiene al sistema.
- **Documento tecnico.** Il documento interno che dice come è realizzato il sistema. Contiene il capitolo Milestone: la divisione del lavoro in milestone, con ore, buffer e date. Non esiste un "Piano delle milestone" a parte. Appartiene al sistema.
- **Piano dei SAL.** Il documento a parte per il cliente, ricavato dal capitolo Milestone: durata stimata, SAL con la data prevista di ciascuna prova, materiali attesi.
- **Registro delle variazioni.** Il file `registro-variazioni.md` di una lavorazione: ogni variazione chiesta, con categoria, impatto ed esito.
- **Scheda di intervento.** Il documento interno di un ticket: cosa fare, su cosa intervenire, stima, DoD, documenti collegati. In testa porta le decisioni dell'analisi: categoria, esito, tipo, urgenza, responsabile, scadenza.
- **Piano di rilascio.** Il documento per il cliente che dice quando si pubblica, cosa cambia per gli utenti e come si torna indietro.
- **Guida alla pubblicazione.** Il documento del sistema che dice a chi pubblica cosa sapere di quel sistema: ordine dei passi, regole del server, riavvii, cache, verifiche, ritorno alla versione precedente. Lo aggiorna ogni lavoro che cambia il modo di pubblicare.
- **Scheda tecnica di rilascio.** Il documento interno di un singolo rilascio: i passi di quella pubblicazione, ricavati dalla Guida alla pubblicazione con le particolarità del lavoro.
- **Storico della lavorazione.** Il file `storico.md` di una lavorazione: i fatti che contano (conferme, richieste, imprevisti, ritardi del cliente, cambi di persone, rilasci), in ordine di data. Nasce vuoto e si popola a mano con la skill `storico-lavorazione`.
- **Registro delle decisioni.** Il file `decisioni.md` di una lavorazione: le decisioni prese, da chi, perché, con quali alternative e quale effetto. Nasce vuoto e si popola a mano con la skill `registro-decisioni`.
- **Report di progetto.** Il documento interno di chiusura di un progetto o di un prodotto: stima contro realtà, buffer, variazioni, imprevisti, decisioni, dati per le stime future. Si scrive con la skill `report-di-progetto`.
- **ClickUp.** Lo strumento dove vivono le issue, le milestone e gli sprint. Le issue hanno sei stati: BACKLOG, PLANNED, IN PROGRESS, TESTING, COMPLETED, CANCELLED.

### Cambiamenti

- **Variazione.** Ciò che il cliente chiede dopo la conferma del Manuale del prodotto e che i documenti confermati non prevedono. Si annota nel Registro delle variazioni.
- **Modifica.** Un cambiamento a un documento non ancora confermato dal cliente. Si recepisce con una nuova versione numerata e non è una variazione.
- **Feature.** Un tipo di ticket: una funzione nuova o cambiata, ma contenuta. Il termine non indica altro.

### Garanzia

- **Garanzia.** Il periodo dopo un rilascio in cui i bug (e le variazioni piccole e le richieste estetiche) si correggono senza conferma del cliente, raggruppati in un pacchetto di garanzia. È anche un imprevisto di capacità da tracciare.
- **Pacchetto di garanzia.** Una o più voci nate dopo un rilascio su una stessa lavorazione, trattate insieme durante la garanzia.
- **Rapporto di garanzia.** La sezione finale del Report di progetto (per un ticket, una voce nello storico): le voci, le ore spese e la causa di ciascuna.

## Principi

- **Niente lavoro su progetti e prodotti senza conferma scritta.** Il ticket non ha una conferma del cliente: lo decide l'azienda con l'analisi iniziale. L'unica eccezione per progetti e prodotti è il pacchetto di garanzia.
- **Si lavora a consumo.** Prezzi e preventivi sono gestiti fuori da questi piani e il lavoro non ha un'approvazione economica: il cliente paga il tempo di lavoro, quindi la durata stimata è un impegno.
- **Si promette solo ciò che è stato guardato.** Nessuna stima e nessuna data senza aver controllato il codice e i lavori aperti.
- **Il cliente valida ciò che vede.** Wireframe, mockup e prova sullo staging contano più dei documenti lunghi.
- **Le regole si fissano prima.** Stanno in queste Regole comuni e non si discutono a problema aperto.
- **Ogni documento nasce dal precedente.** Una variazione aggiorna tutti i documenti che tocca, e solo quelli.
- **Le cattive notizie si comunicano subito.** Un ritardo detto a metà milestone è gestibile, alla scadenza è un danno.

## Categorie e classificazione

Ogni richiesta arriva dal sistema di ticket e riceve una categoria, che decide quale piano si applica.

- **Ticket.** Intervento circoscritto su un sistema esistente. Segue il Piano dei ticket.
- **Progetto.** Lavoro strutturato su un sistema esistente. Segue il Piano di progetto.
- **Prodotto.** Sistema che non esiste ancora. Segue il Piano di prodotto.

Una richiesta su un sistema esistente è un progetto se vale almeno una di queste condizioni:

- la stima supera le 2 settimane;
- richiede più di una persona;
- richiede una proposta, perché il cliente deve decidere come funzionerà;
- cambia l'aspetto grafico, quindi serve un mockup.

Se nessuna vale, è un ticket.

Un ticket che cresce durante la lavorazione fino a soddisfare una di queste condizioni si ferma e diventa progetto. Non si completa "già che ci siamo".

La categoria dipende dal lavoro, non dal cliente.

## Verifica preliminare

Prima di essere classificata e stimata, ogni richiesta passa da due controlli. Fanno parte del kickoff (skill `kickoff` per progetti e prodotti, `kickoff-ticket` per i ticket). Servono a capire se il lavoro va davvero aperto, e con quale categoria.

L'urgenza si assegna prima della verifica. Un ticket urgente non la aspetta: si interviene subito e la verifica si fa in parallelo o dopo.

**Confronto con i lavori aperti.** La richiesta viene cercata in ciò che è già in corso sullo stesso sistema: progetti, ticket aperti, variazioni registrate, consegne ancora in garanzia. Gli esiti possibili:

- **Già compresa in un progetto.** Una story la copre. Non si apre lavoro: al cliente si risponde con la story e la consegna prevista.
- **Compresa, ma serve prima.** È una variazione sul progetto.
- **Compresa in parte.** Solo la parte che resta fuori può diventare un lavoro nuovo.
- **In conflitto con un progetto.** Il progetto sta per rifare quella parte, oppure la richiesta cambia qualcosa su cui il progetto si appoggia. Si decide se rinviarla, assorbirla nel progetto come variazione, o farla comunque perché urgente.
- **Doppione di un ticket aperto.** Si unisce a quello.
- **Difetto di una consegna recente.** È un pacchetto di garanzia o un difetto della milestone, non un lavoro nuovo.
- **Nessuna sovrapposizione.** La richiesta prosegue.

**Controllo del codice.** Si guarda il codice della parte coinvolta, senza modificarlo. Gli esiti possibili:

- **Il sistema lo fa già.** Non serve sviluppo: è una risposta di assistenza.
- **Basta una configurazione.** L'intervento non cambia il codice.
- **Bug confermato.** Si riproduce e la causa è individuata.
- **Bug non riprodotto, o causa fuori dal codice.** Servono altre informazioni dal cliente, oppure l'intervento è diverso da quello chiesto.
- **Intervento più esteso di come appare.** Tocca più parti o codice usato altrove, e la stima e la categoria possono cambiare.
- **Sovrapposizione con uno sviluppo in corso.** Un'altra modifica al codice, non ancora rilasciata, tocca la stessa parte.

**Esito della verifica.** Per un ticket gli esiti dei due controlli si riassumono in uno fra questi:

- **Da fare.** Nessuna sovrapposizione, e il bug è confermato oppure basta una configurazione. Se l'intervento è più esteso del previsto, si aggiorna la stima.
- **Non da fare.** Già compresa in un progetto, doppione di un ticket aperto, il sistema lo fa già, difetto di una consegna recente (pacchetto di garanzia), oppure è una variazione su un progetto. Al cliente si risponde con il motivo.
- **Da fare in parte.** Compresa in parte: solo ciò che resta fuori diventa lavoro.
- **Da rimandare.** In conflitto con un progetto, sovrapposizione con uno sviluppo in corso, oppure bug non riprodotto in attesa di altre informazioni dal cliente.

La verifica produce anche l'elenco dei lavori e dei documenti toccati, che serve più avanti per l'allineamento dei documenti: non si cerca due volte.

La verifica ha un tempo massimo pari al 10% di una stima a occhio della dimensione della richiesta, fatta prima di guardare il codice. Ciò che non si riesce a controllare in quel tempo va dichiarato: una stima fatta senza aver guardato il codice è provvisoria.

Per un prodotto, che non ha ancora un codice, la verifica si limita al confronto con i lavori aperti e con i sistemi che il cliente ha già.

## Contatti con il cliente

Ogni piano elenca i propri momenti fissi di contatto. Queste regole valgono per tutti.

- **Un solo canale per le decisioni.** Ciò che viene detto a voce vale solo dopo un riepilogo scritto.
- **Un solo responsabile.** Le richieste del cliente passano dal responsabile del lavoro, o da chi analizza la richiesta finché il lavoro non è assegnato. Mai da altri canali.
- **Vale solo l'approvazione del referente.** Se cambia, i documenti già approvati restano validi e vengono consegnati al nuovo referente.
- **Le variazioni non si accettano in call.** Si registrano, si categorizzano e si confermano per iscritto.

Fuori dai momenti fissi il cliente si contatta subito in questi casi: una data già comunicata che cambia, ambiguità scoperta nel Manuale del prodotto, blocco che dipende da lui.

Il silenzio del cliente ha un valore diverso secondo ciò che gli è stato chiesto.

- **Non vale come accettazione** per una prova sullo staging: non ha un termine che la accetta da sola, e richiede sempre una risposta esplicita del cliente.
- **Non ferma il lavoro** di un progetto o di un prodotto quando il cliente deve confermare un documento (la proposta di soluzione, il Manuale del prodotto): il silenzio non vale come conferma, ma dopo un sollecito scritto si prosegue con ciò che non dipende dalla risposta, e la parte che ne dipende slitta degli stessi giorni.
- **Non riguarda i ticket**, che non hanno conferme né prove del cliente. Se il cliente risponde tardi a una richiesta di chiarimenti o di materiali, il ticket resta sospeso informalmente, senza termini.

## Documenti

Ogni piano elenca i propri documenti. Queste regole valgono per tutti.

- **Bozza e versione.** Un documento per il cliente è una bozza interna finché è incompleto, e riceve un numero di versione da quando viene condiviso. Una bozza non si condivide.
- **Codici fissi.** Funzionalità (F1), story (F1.1), domande aperte (D1), milestone (M1, per il cliente SAL1), issue (I1), schermate (S1) e variazioni (V1) hanno un codice che non cambia e non si riutilizza. I codici sono il filo che lega i documenti tra loro.
- **Cosa e come.** Il Manuale del prodotto dice cosa fa il sistema ed è l'unica fonte per i comportamenti. Il Documento tecnico dice come è realizzato e cita i codici delle story senza riscriverle. Se sono in contrasto vale il Manuale.
- **Documenti del sistema.** Manuale del prodotto, Documento tecnico e Guida alla pubblicazione appartengono al sistema, non al singolo lavoro: ticket e progetti li aggiornano, non ne creano di nuovi.
- **Dove stanno.** I documenti sono conservati nella knowledge base, secondo la struttura della sezione Knowledge base.
- **Conversazioni.** Le riunioni, le telefonate e le altre conversazioni con il cliente si registrano, anche con un computer o un telefono: alla skill si consegna un semplice file audio. Si trascrivono e si aggiungono alla documentazione del lavoro nella knowledge base: sono materiale in più per le skill. Ciò che il cliente conferma a voce vale solo dopo un riepilogo scritto.

**Allineamento dei documenti.** Un lavoro può cambiare un comportamento descritto nei documenti di un altro lavoro.

- **Prima di iniziare.** Si riprende l'elenco dei lavori e dei documenti toccati prodotto dalla verifica preliminare, e si risolvono i conflitti. L'elenco cita i lavori per codice della lavorazione. Per progetti e prodotti avviene alla conferma del cliente. Per un ticket è già nell'analisi: la verifica può rimandare il lavoro.
- **A lavoro concluso.** Manuale del prodotto, Documento tecnico e Guida alla pubblicazione del sistema vengono aggiornati con ciò che è stato realmente fatto, e così i documenti degli altri lavori che riguardano le stesse parti di codice, se il lavoro vi ha cambiato qualcosa di rilevante. Per un progetto e un prodotto il lavoro è chiuso solo dopo questo aggiornamento. Per un ticket, urgente o no, le procedure interne (aggiornamento dei documenti compreso) si eseguono dopo la chiusura: il ticket si chiude al rilascio, così il cliente lo vede chiuso e non aspetta la scrittura dei documenti.

Un documento già approvato da un cliente per un lavoro ancora aperto non si modifica in silenzio. Se un altro lavoro lo tocca, serve una variazione o una comunicazione al cliente. I documenti di lavori già chiusi si aggiornano a lavoro concluso, e la modifica indica il lavoro che l'ha causata.

## Knowledge base

La knowledge base è una repository per prodotto. Contiene il piano di sviluppo con le sue skill, i documenti del sistema e i documenti delle lavorazioni.

- **Documenti del sistema.** Manuale del prodotto, Documento tecnico e Guida alla pubblicazione, nella versione vigente, in una cartella propria. I lavori li aggiornano.
- **Cartella delle lavorazioni.** Una cartella per ogni lavorazione, con il codice della lavorazione come nome.
- **Cartelle delle fasi.** Dentro la cartella della lavorazione, una cartella per ogni fase in cui nascono documenti, con il nome della fase come definito nel piano della categoria. Ogni documento, trascrizione e file audio si salva nella cartella della fase in cui è stato creato. Una versione condivisa o una bozza di un documento del sistema sta nella cartella della fase che l'ha prodotta. Una cartella nasce solo se la fase produce documenti.
- **Storico e decisioni.** Nella cartella di ogni lavorazione ci sono due file, `storico.md` e `decisioni.md`. Nascono vuoti all'inizio del lavoro, quando si crea la cartella, e si popolano a mano con le skill `storico-lavorazione` e `registro-decisioni`. A fine lavoro sono la fonte del Report di progetto. Per un ticket restano brevi e spesso con poche righe.
- **Nomi delle fasi.** Ogni piano dà a ogni fase un nome fisso, usato come nome della cartella: numero della fase e nome in minuscolo con i trattini, per esempio `02-sviluppo`. Il nome non cambia e non si riutilizza per un'altra fase.
- **Sottofasi.** Una fase può avere sottofasi, ognuna con una sottocartella dentro la cartella della fase e con un nome fisso numerato, per esempio `01-kickoff/03-proposta`. Il kickoff di un progetto ha quattro sottofasi: `01-valutazione`, `02-stima`, `03-proposta`, `04-documentazione`. Il kickoff di un prodotto ne ha cinque: le stesse, con `04-prototipo-e-design` prima di `05-documentazione`. Il rilascio ha quattro sottofasi dentro `03-rilascio`: `01-collaudo`, `02-preparazione`, `03-pubblicazione`, `04-chiusura`. Il ticket ha tre fasi: `01-analisi`, `02-sviluppo` e `03-rilascio` (`01-pubblicazione`, `02-aggiornamento-documenti`). Dopo il rilascio, la cartella `04-garanzia` della lavorazione raccoglie le risposte alle segnalazioni in garanzia.
- **Ricerca di altri lavori.** Si fa per codice della lavorazione. I codici dei lavori collegati si trovano nell'analisi preliminare (verifica preliminare) e si riportano nella Scheda di intervento o nello Stato di partenza.
- **Un repository per parte del sistema.** Il sistema del cliente può avere più repository di codice (sito pubblico, gestionale e altri). La Scheda di intervento e il Documento tecnico indicano sempre il repository di ogni parte toccata.

## Dove va ogni documento

- **`sistema/`.** Manuale del prodotto, Documento tecnico e Guida alla pubblicazione, nella versione vigente.
- **Radice della lavorazione.** `storico.md` e `decisioni.md`.
- **Progetto, `01-kickoff/01-valutazione`.** Stato di partenza (con le decisioni dell'analisi in testa), audio, trascrizione e file di sintesi e riepilogo dell'incontro.
- **Progetto, `01-kickoff/02-stima`.** La stima precisa.
- **Progetto, `01-kickoff/03-proposta`.** Proposta di soluzione con le sue versioni, wireframe, riepilogo scritto della conferma.
- **Progetto, `01-kickoff/04-documentazione`.** Versioni condivise del Manuale e del Documento tecnico, mockup, Piano dei SAL, riepilogo scritto della conferma del Manuale.
- **Progetto, `02-sviluppo`.** Note di sprint, `registro-variazioni.md`, Milestone report, comunicazioni di riprogrammazione.
- **Progetto, `03-rilascio`.** `01-collaudo` (verbale della prova finale), `02-preparazione` (piano di rilascio, scheda tecnica se serve), `03-pubblicazione` (avviso al cliente), `04-chiusura` (Report di progetto).
- **Prodotto.** Come il progetto, con in più `01-kickoff/04-prototipo-e-design` (prototipo, mockup, riepilogo scritto dell'approvazione) e `05-documentazione` al posto di `04-documentazione`. In `03-rilascio/02-preparazione` anche il Piano di lancio.
- **Ticket.** `01-analisi` (Scheda di intervento), `03-rilascio/01-pubblicazione`, `03-rilascio/02-aggiornamento-documenti`.
- **`04-garanzia`.** Le risposte al cliente per un pacchetto di garanzia, per progetti e ticket.

## Strumenti visivi

Servono solo quando il lavoro tocca l'interfaccia. Ogni piano dice in quale fase entrano.

- **Wireframe.** Lo schema di una schermata, senza grafica: mostra cosa c'è e dove. Valida struttura e contenuti.
- **Mockup.** L'aspetto grafico definitivo della schermata, ancora statico. Valida stile e identità. Si disegna in Figma a partire dai wireframe approvati.
- **Prototipo.** Wireframe o mockup resi navigabili, senza logica vera. Valida il percorso dell'utente.
- **Prova su staging.** Il software vero, provato dal cliente sullo staging. Porta all'accettazione. Una demo in call è facoltativa.

Wireframe e mockup approvati dal cliente valgono come i documenti: cambiarli dopo è una variazione. All'approvazione il mockup viene esportato in PDF nella knowledge base, e quella copia è la versione che fa fede.

Nella prova si controlla ogni story sul suo criterio di accettazione. L'esito è uno fra questi: accettata, accettata con difetti non bloccanti, non accettata per difetti bloccanti. Un difetto bloccante si corregge prima dell'accettazione. Un difetto non bloccante si elenca nell'accettazione con una data. Una richiesta nuova emersa nella prova non è un difetto: è una variazione.

## Materiali del cliente

Ciò che il cliente deve fornire viene concordato a monte. Per progetti e prodotti ha una data. Un ticket non ha un documento per il cliente: se serve un materiale lo si chiede nel ticket, che resta in attesa finché non arriva.

1. Il primo documento per il cliente elenca i materiali, ancora senza date: la Proposta di soluzione, per progetti e prodotti.
2. Nel capitolo Milestone ogni materiale diventa una dipendenza delle issue che lo richiedono, e da lì si ricava entro quando serve.
3. Il Piano dei SAL riporta i materiali attesi con le date, e il cliente ne viene informato. Le date impegnano entrambe le parti.
4. La Nota di sprint interna e il Milestone report al cliente ricordano i materiali in scadenza, prima che diventino un blocco.

I materiali tipici sono testi e immagini, dati, accessi e credenziali, documentazione dei sistemi esterni, utenze di prova.

Ogni giorno di ritardo su un materiale sposta di un giorno le consegne che ne dipendono.

## Organizzazione del lavoro

Il lavoro è organizzato su due assi separati: le milestone dividono il lavoro, gli sprint dividono il tempo. Le regole su milestone, issue, sprint, capacità, buffer, ciclo di sprint, dimensione del team e imprevisti dello sviluppo sono nel documento Ciclo di sviluppo, che vale per ticket, progetti e prodotti.

## Date

Una data si promette solo quando si sa da dove parte.

- **Ticket.** Entra nello sprint secondo l'urgenza e la capacità, sulla base della stima in ore della Scheda di intervento. Al cliente non si dichiara una data di consegna: si risponde per presa visione appena il ticket è assegnato, e la data di pubblicazione si comunica solo quando è certa, senza obbligo.
- **Progetti e prodotti.** Il Piano dei SAL dichiara una data di avvio e calcola le consegne da quella. Ogni giorno di ritardo del cliente su una risposta o un materiale sposta di un giorno le consegne che ne dipendono.
- **Sprint e rilasci.** Lo sprint finisce sempre di venerdì. A fine sprint si preparano i documenti di aiuto al rilascio, che l'incaricato della pubblicazione legge il lunedì per pubblicare. In condizioni normali si può rilasciare anche a metà sprint. Un ticket urgente si pubblica appena pronto, anche di venerdì sera fino alle 18.
- **Calendario.** Prima di calcolare le date si compila il calendario del lavoro: festività, chiusure aziendali, ferie già note, chiusure del cliente. Si ricontrolla all'inizio di ogni milestone.

## Variazioni

Dopo la conferma del Manuale del prodotto, tutto ciò che il cliente chiede e che i documenti confermati non prevedono è una variazione. Ogni variazione entra nel Registro delle variazioni e riceve una categoria.

Prima della conferma non c'è variazione: un cambiamento a un documento non ancora confermato è una modifica, si recepisce con una nuova versione numerata e non entra nel Registro delle variazioni. Il momento che separa le due cose è la conferma del Manuale del prodotto, che è la seconda conferma del cliente dopo quella della Proposta di soluzione.

La categoria si decide rispondendo a queste domande, in ordine. La prima risposta affermativa decide.

1. **Cambia ciò che la proposta ha stabilito, oppure cambia il contenuto di story in più milestone?** È una variazione grande.
2. **Sposta una data, sposta story tra milestone o tra release, tocca lavoro già accettato, supera le 4 ore, oppure tocca più di una story?** È una variazione media.
3. **Nessuna delle precedenti?** È una variazione piccola.

Come si gestisce ciascuna:

- **Piccola.** Basta la conferma scritta del cliente. È assorbita dal buffer di milestone. Si aggiornano il Manuale del prodotto e il capitolo Milestone del Documento tecnico, e si crea in ClickUp una issue di tipo variazione.
- **Media.** Si stima l'impatto su ore e date, e il cliente lo approva per iscritto prima che si lavori. Si aggiornano Manuale del prodotto, capitolo Milestone del Documento tecnico, altre parti del Documento tecnico se serve, Piano dei SAL se cambia una data o il contenuto di una consegna.
- **Grande.** Si torna alla fase di proposta con una proposta integrativa, poi conferma e nuova documentazione. Si aggiornano tutti i documenti.

Regole comuni alle tre:

- Una variazione non entra mai nello sprint in corso.
- Il lavoro già svolto e superato da una variazione resta dovuto e resta visibile in ClickUp.
- Una variazione è chiusa solo quando i documenti sono aggiornati.
- Le variazioni piccole hanno un tetto: insieme possono consumare solo metà del buffer di milestone. Oltre il tetto, ogni nuova variazione è trattata come media.

## Bug, ambiguità e garanzia

Per distinguere un bug da una richiesta nuova il criterio è sempre lo stesso, e lo decide il Manuale del prodotto.

- **Bug.** Il sistema fa una cosa diversa dal Manuale. Si corregge.
- **Ambiguità.** Il Manuale non è chiaro. Non si interpreta: si segnala, si pone al cliente una domanda puntuale e si aggiorna il Manuale.
- **Richiesta nuova.** Il Manuale non lo prevede, o prevede altro. È una variazione se il lavoro è in corso, un ticket se è concluso.

Quando il sistema non ha un Manuale, vale ciò che è stato concordato per iscritto nei lavori precedenti.

**Garanzia.** Dopo un rilascio, per un periodo pari al 50% della durata pianificata della lavorazione (minimo 15 giorni; giorni lavorativi per i ticket, di calendario per progetti e prodotti), i bug su ciò che è stato rilasciato si correggono senza conferma del cliente. La garanzia è anche un imprevisto di capacità: rimettere mano a qualcosa di pubblicato costa tempo, può togliere una persona a un progetto in corso o far rientrare la lavorazione negli sprint. Per questo il tempo si traccia e si gestisce con gli strumenti dello sviluppo, come ogni altro imprevisto.

**Pacchetto di garanzia.** Una o più voci segnalate insieme dopo un rilascio, sulla stessa lavorazione: un bug, una variazione piccola, una richiesta estetica. Non apre una nuova lavorazione: si registra sul lavoro già chiuso e prosegue nella stessa richiesta aperta nel sistema di ticketing che l'ha originata, sia essa diventata un ticket, un progetto o un prodotto.

- Decorre dal rilascio in produzione, non dall'accettazione sullo staging.
- In un progetto o in una release di prodotto decorre dal rilascio finale. Se una milestone va in produzione prima, per le sue story decorre da quel momento.
- Vale anche per i ticket, dal rilascio, che coincide con la chiusura.
- **Cosa copre.** I bug, sempre. Le variazioni piccole e le richieste estetiche, se sono davvero piccole: al massimo 4 ore e una sola story. La richiesta del cliente vale come conferma: non serve altro. Durante la garanzia la categoria di variazione non si applica: valgono questi limiti. Una richiesta più grande non è garanzia: è un ticket nuovo, perché il lavoro è concluso.
- **Come si registra.** Ogni voce è una issue in ClickUp, segnata come garanzia e con il codice della lavorazione originale: di tipo bug per un bug, di tipo variazione per una variazione piccola o una richiesta estetica. Per un progetto sta in una List "Garanzia" del suo Folder.
- **Capacità.** Un pacchetto urgente usa il buffer di sprint. Uno non urgente usa la capacità dei ticket. Se serve la persona che conosce la parte, chi gestisce il team decide un prestito di ore, come per ogni ticket: le ore prestate pesano sul margine del progetto da cui la persona è presa.
- **Responsabile.** Il responsabile della lavorazione originale, che può delegare.
- **Tracciamento.** Le ore si registrano sulle issue con il tracciamento del tempo di ClickUp e si leggono per lavorazione. Non c'è una riserva di ore per la garanzia.
- **Alla fine del pacchetto.** Il cliente riceve una risposta breve nel ticket, e i documenti si aggiornano se il comportamento è cambiato.
- **Rapporto di garanzia.** A fine periodo si compila la sezione sulla garanzia del Report di progetto (per un ticket, una voce nello storico): le voci, le ore spese e la causa di ciascuna (requisito frainteso, test mancante, regressione, causa esterna). Giustifica il tempo speso e serve a stimare meglio i lavori futuri.

## Quando un lavoro si ferma

Non ogni richiesta arriva alla produzione. Un lavoro può fermarsi in questi punti.

- **Dopo la verifica preliminare.** Il lavoro non va aperto: è già compreso altrove, è un doppione, oppure il sistema lo fa già. Al cliente si risponde con il motivo.
- **Dopo l'indagine o l'analisi.** La richiesta non è fattibile come posta. Al cliente si comunica il motivo e, se esiste, un'altra strada. Il lavoro prosegue solo su una richiesta riformulata.
- **In attesa di una risposta del cliente.** Il cliente non conferma un documento o non risponde a una domanda. Un ticket resta sospeso informalmente, senza termini. Un progetto o un prodotto non si ferma: si fa ciò che non dipende dalla risposta, e la parte che ne dipende slitta degli stessi giorni.
- **Per decisione del cliente.** Il cliente sospende il lavoro.

Quando un lavoro si ferma si registra lo stato raggiunto e i documenti restano nella knowledge base. Per riprenderlo servono una nuova verifica preliminare e una nuova pianificazione: nel frattempo il sistema e gli altri lavori possono essere cambiati.

## Decisioni ancora da prendere

Le decisioni ancora aperte sono raccolte in `docs/da-risolvere.md`. Le decisioni proprie di un solo piano sono in fondo a quel piano.
