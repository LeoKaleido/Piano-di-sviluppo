# Regole comuni

Data: 2026-10-06

Queste regole valgono per ogni lavoro, qualunque sia la sua categoria. I piani delle lavorazioni minori, di progetto e di prodotto descrivono solo le fasi e ciò che ciascuno ha di proprio, e rimandano qui per tutto il resto.

Questo documento è il riferimento per tutto il team.

## Glossario

Ogni cosa ha un solo nome, usato allo stesso modo in tutti i piani e in tutti i documenti.

### Categorie e persone

- **Categoria.** Ciò che una richiesta diventa: lavorazione minore, progetto o prodotto. La decide sempre l'azienda, mai il cliente.
- **Lavorazione minore.** La categoria dei lavori circoscritti su un sistema esistente, da circa 2 ore a 2 settimane. Il nome è diverso da "ticket" di proposito: la lavorazione minore è il lavoro dell'azienda, il ticket è la richiesta del cliente.
- **Ticket.** La richiesta che il cliente apre su osTicket. Vale per ogni richiesta, qualunque categoria diventi. Il suo codice è il codice della lavorazione.
- **Referente.** La persona del cliente la cui approvazione vale. È una sola.
- **Responsabile.** La persona interna a cui è assegnata una lavorazione e da cui passano le richieste del cliente su quel lavoro. È sempre uno sviluppatore, con nome e responsabilità che cambiano secondo la categoria. Per una lavorazione minore è semplicemente il responsabile: lo sviluppatore che esegue il lavoro. Per un progetto è il project manager, che guida il progetto e tiene i contatti con il cliente. Per un prodotto è il product lead, con la stessa guida estesa a tutto il prodotto.
- **Incaricato della pubblicazione.** La persona designata a seguire la pubblicazione in produzione di un lavoro. Non è necessariamente il responsabile.
- **Supervisore.** La persona che controlla l'avanzamento del lavoro e che le stime in ore e la capacità degli sprint siano rispettate. È designato dall'azienda: all'inizio sono due persone.

### Cosa si costruisce

- **Story.** Una cosa che un tipo di utente può fare con il sistema, scritta nella forma "Come, voglio, per". Ha un codice fisso, per esempio F3.1.
- **Criterio di accettazione.** La condizione verificabile che dice quando una story è consegnata.
- **Milestone.** Un blocco di lavoro che consegna story intere e si può dimostrare. Verso il cliente si chiama SAL: è la stessa cosa.
- **Issue.** L'unità di lavoro dentro una milestone o una lavorazione minore.
- **DoD (Definition of Done).** Le condizioni verificabili che chiudono una issue o una lavorazione minore.
- **Spike.** Un tipo di issue: tempo limitato per sciogliere un'incognita.
- **Release.** Una porzione di prodotto consegnata e lanciata insieme. Un prodotto ha più release.

### Tempo e capacità

- **Sprint.** Un intervallo di tempo fisso, uguale per tutta l'azienda, in cui si pianifica e si chiude il lavoro.
- **Capacità.** Le ore realmente disponibili di una persona in uno sprint.
- **Scadenza del cliente.** La data entro cui il cliente chiede il lavoro, indicata su osTicket. Capita di rado: ferie, Black Friday, altre emergenze. Non cambia l'urgenza, che si decide sui fatti: serve a pianificare e a dire subito se la data è fattibile.
- **Nota di sprint.** Il documento interno a ogni fine sprint, uno per lavorazione: fatto, non fatto, ore, imprevisti, margine della milestone, cosa serve dal cliente. Non va al cliente.
- **Pianificazione dello sprint.** La scelta delle issue per lo sprint successivo, fatta in ClickUp dopo la Nota di sprint: capacità, issue scelte, rispetto delle date del Piano dei SAL. Non è un documento.
- **Buffer di sprint.** La parte di capacità di ogni persona riservata ai lavorazioni minori urgenti: il 20% della sua capacità in ogni sprint.
- **Buffer di milestone.** Le ore aggiunte a una milestone per assorbire gli imprevisti. La differenza tra capacità rimanente e ore rimanenti è il margine della milestone.
- **Prestito.** Le ore di uno sviluppatore di un progetto messe a disposizione delle lavorazioni minori per uno sprint. Lo decide chi gestisce il team prima della pianificazione dello sprint del progetto, che ne tiene conto: le ore prestate riducono la capacità del progetto e il margine della sua milestone.

### Controlli iniziali

- **Verifica preliminare.** Il controllo iniziale di una richiesta sui lavori aperti e sul codice. Il termine "verifica" non indica altro.
- **Kickoff.** La fase iniziale di una lavorazione. Per un progetto va dalla valutazione della richiesta alla documentazione pronta per lo sviluppo (indagine sull'esistente, stima, Proposta di soluzione, Manuale, Documento tecnico). Per una lavorazione minore è l'analisi iniziale. Lo eseguono le skill `kickoff` (progetti e prodotti) e `kickoff-minore` (lavorazioni minori).
- **Indagine sull'esistente.** L'analisi completa del sistema che si fa nel kickoff di un progetto.

### Consegna e accettazione

- **Milestone report.** Il documento interno a ogni milestone, letto da chi gestisce il progetto: come è andato lo sviluppo, ore previste e reali, margine, story consegnate, esito della prova. Non va al cliente: per la prova il cliente riceve un messaggio.
- **Staging.** L'ambiente separato dalla produzione dove il lavoro viene provato prima del rilascio.
- **UAT (user acceptance test).** La sigla inglese della prova su staging: la sessione dal vivo, in call o di persona, in cui il team presenta il software funzionante sullo staging e il cliente lo prova story per story e lo accetta. Si fa a ogni milestone e al collaudo finale di progetti e prodotti, mai per le lavorazioni minori. Non esiste una demo a parte: la presentazione è la prova stessa.
- **Prova.** Ciò che il cliente fa sullo staging per controllare una consegna: è la UAT: nei piani si scrive prova su staging e, dove serve distinguerla da una prova fatta in solitudine, UAT dal vivo.
- **Rilascio.** La messa in produzione. Il termine non indica altro. La pubblicazione non è automatica: non avviene in CI, la segue una persona, l'incaricato della pubblicazione.

### Documenti e archivio

- **Knowledge base.** La repository dove stanno il piano di sviluppo con le sue skill e la cartella delle lavorazioni. Ce n'è una per prodotto. Sostituisce Drive.
- **Codice della lavorazione.** Il codice del ticket su osTicket da cui nasce una lavorazione, qualunque sia la sua categoria. Dà il nome alla cartella della lavorazione nella knowledge base e serve a citare i lavori collegati.
- **Stato di partenza.** La voce di `history-and-decision.md` (non un documento a parte) che fotografa il sistema o il contesto prima di un progetto o di un prodotto: come funziona oggi, cosa viene toccato, fattibilità, incognite. In testa porta le decisioni dell'analisi: categoria, stima a occhio, responsabile, scadenza del cliente, domande.
- **Proposta di soluzione.** Il documento per il cliente di 2 o 3 pagine (al massimo 5) con la richiesta compresa, la soluzione, la stima di durata e del tempo di rilascio (un intervallo, non una data) e le user story in elenco. Il cliente la conferma. La versione confermata si chiama semplicemente Proposta di soluzione, senza numero di versione.
- **Manuale del prodotto.** Il documento che dice cosa fa il sistema, con le user story complete e i criteri di accettazione. Il cliente lo conferma. Appartiene al sistema.
- **Documento tecnico.** Il documento interno che dice come è realizzato il sistema. Contiene il capitolo Piano delle milestone: la divisione del lavoro in milestone, con ore, buffer, date e, per ognuna, le lavorazioni specifiche riassunte chiaramente (le issue stanno in ClickUp). Appartiene al sistema.
- **Piano dei SAL.** Il documento a parte per il cliente, estratto dal capitolo Piano delle milestone del Documento tecnico e mai modificato a mano: una tabella con la durata stimata (affinata rispetto alla Proposta), SAL con la data prevista di ciascuna prova, cosa viene consegnato e materiali attesi.
- **Scheda di intervento.** Il documento unico e principale di una lavorazione minore, interno, con il PDF nella radice: il piano dell'intervento: cosa fare, su cosa intervenire, stima, DoD, documenti collegati. Cambia solo se cambia il piano; ciò che accade dopo (cosa è stato fatto, effetto sui documenti del sistema, garanzia) è in History and decision. In testa porta le decisioni dell'analisi: categoria, esito, tipo, urgenza, responsabile, scadenza.
- **Piano di rilascio.** L'accordo con il cliente su quando si pubblica, cosa cambia per gli utenti e come si torna indietro. Per un progetto è una voce di `history-and-decision.md`, con le particolarità tecniche che l'incaricato della pubblicazione deve conoscere, e un messaggio al cliente: non è un documento. Per un prodotto è il Piano di lancio, con i passi tecnici in una voce di `history-and-decision.md`.
- **Capitolo Pubblicazione.** La parte del Documento tecnico (capitolo Infrastruttura, ambienti e pubblicazione) che dice a chi pubblica cosa sapere di quel sistema: ordine dei passi, regole del server, riavvii, cache, verifiche, ritorno alla versione precedente. Non è un documento a parte. Lo aggiorna ogni lavoro che cambia il modo di pubblicare, alla chiusura del lavoro (per una lavorazione minore, dopo la chiusura): fino ad allora le particolarità stanno nel piano di rilascio.
- **History and decision.** Il file `history-and-decision.md` di una lavorazione, in `log`: la storia e le decisioni in un solo posto (non esistono un registro delle decisioni, un registro delle variazioni o uno storico a parte). Nasce vuoto e si popola a mano con la skill `history-and-decision`. È diviso in gruppi per fase e ogni voce ha un titolo con data e tipo, e campi etichettati. Vedi la regola "History and decision" nella struttura della knowledge base.
- **Report di progetto.** Il documento interno di chiusura di un progetto o di un prodotto: stima contro realtà, buffer, variazioni, imprevisti, decisioni, dati per le stime future. Sta in `log`, solo Markdown. Si scrive con la skill `report-di-progetto`.
- **Messaggio.** Un testo per il cliente scritto con una skill, inviato per email o su osTicket e salvato in `source`. Non è un documento: non ha il PDF.
- **ClickUp.** Lo strumento dove vivono le issue, le milestone e gli sprint. Le issue hanno sei stati: BACKLOG, PLANNED, IN PROGRESS, TESTING, COMPLETED, CANCELLED.

### Cambiamenti

- **Variazione.** Ciò che il cliente chiede dopo la conferma del Manuale del prodotto e che i documenti confermati non prevedono. Si annota in History and decision, con un codice fisso (V1, V2).
- **Modifica.** Un cambiamento a un documento non ancora confermato dal cliente. Si recepisce con una nuova versione numerata e non è una variazione.
- **Feature.** Un tipo di lavorazione minore: una funzione nuova o cambiata, ma contenuta. Il termine non indica altro.

### Garanzia

- **Garanzia.** Il periodo dopo un rilascio in cui i bug (e le variazioni piccole e le richieste estetiche) si correggono senza conferma del cliente, raggruppati in un pacchetto di garanzia. È anche un imprevisto di capacità da tracciare.
- **Pacchetto di garanzia.** Una o più voci nate dopo un rilascio su una stessa lavorazione, trattate insieme durante la garanzia.
- **Rapporto di garanzia.** La sezione finale del Report di progetto (per una lavorazione minore, una voce in History and decision): le voci, le ore spese e la causa di ciascuna.

## Principi

- **Niente lavoro su progetti e prodotti senza conferma scritta.** La lavorazione minore non ha una conferma del cliente: lo decide l'azienda con l'analisi iniziale. L'unica eccezione per progetti e prodotti è il pacchetto di garanzia.
- **Si lavora a consumo, tranne il prodotto.** Per lavorazioni minori e progetti prezzi e preventivi sono gestiti fuori da questi piani e il lavoro non ha un'approvazione economica: il cliente paga il tempo di lavoro, quindi la durata stimata è un impegno. Il prodotto è l'unica eccezione: lavora a budget. La Proposta di soluzione contiene la stima economica di ogni release e il cliente la approva insieme alla Proposta (vedi il Piano di prodotto).
- **Si promette solo ciò che è stato guardato.** Nessuna stima e nessuna data senza aver controllato il codice e i lavori aperti.
- **Il cliente valida ciò che vede.** Wireframe, mockup e prova sullo staging contano più dei documenti lunghi.
- **Le regole si fissano prima.** Stanno in queste Regole comuni e non si discutono a problema aperto.
- **Ogni documento nasce dal precedente.** Una variazione aggiorna tutti i documenti che tocca, e solo quelli.
- **Le cattive notizie si comunicano subito.** Un ritardo detto a metà milestone è gestibile, alla scadenza è un danno.

## Categorie e classificazione

Ogni richiesta arriva da un ticket su osTicket e riceve una categoria, che decide quale piano si applica.

- **Lavorazione minore.** Intervento circoscritto su un sistema esistente. Segue il Piano delle lavorazioni minori.
- **Progetto.** Lavoro strutturato su un sistema esistente. Segue il Piano di progetto.
- **Prodotto.** Sistema che non esiste ancora. Segue il Piano di prodotto.

Una richiesta su un sistema esistente è un progetto se vale almeno una di queste condizioni:

- la stima supera le 2 settimane;
- richiede più di una persona;
- richiede una proposta, perché il cliente deve decidere come funzionerà;
- cambia l'aspetto grafico, quindi serve un mockup.

Se nessuna vale, è una lavorazione minore.

Una lavorazione minore che cresce durante la lavorazione fino a soddisfare una di queste condizioni si ferma e diventa progetto. Non si completa "già che ci siamo".

La categoria dipende dal lavoro, non dal cliente.

## Verifica preliminare

Prima di essere classificata e stimata, ogni richiesta passa da due controlli. Fanno parte del kickoff (skill `kickoff` per progetti e prodotti, `kickoff-minore` per le lavorazioni minori). Servono a capire se il lavoro va davvero aperto, e con quale categoria.

L'urgenza si assegna prima della verifica. Una lavorazione minore urgente non la aspetta: si interviene subito e la verifica si fa in parallelo o dopo.

**Confronto con i lavori aperti.** La richiesta viene cercata in ciò che è già in corso sullo stesso sistema: progetti, lavorazioni minori aperte, variazioni registrate, consegne ancora in garanzia. Gli esiti possibili:

- **Già compresa in un progetto.** Una story la copre. Non si apre lavoro: al cliente si risponde con la story e la consegna prevista.
- **Compresa, ma serve prima.** È una variazione sul progetto.
- **Compresa in parte.** Solo la parte che resta fuori può diventare un lavoro nuovo.
- **In conflitto con un progetto.** Il progetto sta per rifare quella parte, oppure la richiesta cambia qualcosa su cui il progetto si appoggia. Si decide se rinviarla, assorbirla nel progetto come variazione, o farla comunque perché urgente.
- **Doppione di una lavorazione minore aperta.** Si unisce a quello.
- **Difetto di una consegna recente.** È un pacchetto di garanzia o un difetto della milestone, non un lavoro nuovo.
- **Nessuna sovrapposizione.** La richiesta prosegue.

**Controllo del codice.** Si guarda il codice della parte coinvolta, senza modificarlo. Gli esiti possibili:

- **Il sistema lo fa già.** Non serve sviluppo: è una risposta di assistenza.
- **Basta una configurazione.** L'intervento non cambia il codice.
- **Bug confermato.** Si riproduce e la causa è individuata.
- **Bug non riprodotto, o causa fuori dal codice.** Servono altre informazioni dal cliente, oppure l'intervento è diverso da quello chiesto.
- **Intervento più esteso di come appare.** Tocca più parti o codice usato altrove, e la stima e la categoria possono cambiare.
- **Sovrapposizione con uno sviluppo in corso.** Un'altra modifica al codice, non ancora rilasciata, tocca la stessa parte.

**Esito della verifica.** Per una lavorazione minore gli esiti dei due controlli si riassumono in uno fra questi:

- **Da fare.** Nessuna sovrapposizione, e il bug è confermato oppure basta una configurazione. Se l'intervento è più esteso del previsto, si aggiorna la stima.
- **Non da fare.** Già compresa in un progetto, doppione di una lavorazione minore aperta, il sistema lo fa già, difetto di una consegna recente (pacchetto di garanzia), oppure è una variazione su un progetto. Al cliente si risponde con il motivo.
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
- **I testi sono messaggi.** I testi dei contatti si scrivono con le skill, si inviano per email o su osTicket e si salvano in `source`.

Fuori dai momenti fissi il cliente si contatta subito in questi casi: una data già comunicata che cambia, ambiguità scoperta nel Manuale del prodotto, blocco che dipende da lui.

Il silenzio del cliente ha un valore diverso secondo ciò che gli è stato chiesto.

- **Non vale come accettazione** per una prova sullo staging: non ha un termine che la accetta da sola, e richiede sempre una risposta esplicita del cliente, data alla fine della sessione dal vivo e confermata dal riepilogo scritto.
- **Non ferma il lavoro** di un progetto o di un prodotto quando il cliente deve confermare un documento (la proposta di soluzione, il Manuale del prodotto): il silenzio non vale come conferma, ma dopo un sollecito scritto si prosegue con ciò che non dipende dalla risposta, e la parte che ne dipende slitta degli stessi giorni.
- **Non riguarda le lavorazioni minori**, che non hanno conferme né prove del cliente. Se il cliente risponde tardi a una richiesta di chiarimenti o di materiali, la lavorazione minore resta sospesa informalmente, senza termini.

## Documenti

Ogni piano elenca i propri documenti. Queste regole valgono per tutti.

- **Bozza e versione.** Un documento per il cliente è una bozza interna finché è incompleto, e riceve un numero di versione da quando viene condiviso. Una bozza non si condivide.
- **Ogni versione è completa e indipendente.** Una versione nuova parte dall'ultima copiata per intero e modifica ciò che cambia: non scrive mai "invariato" o "come nella versione precedente" al posto del contenuto, e non rimanda alle versioni precedenti. Il capitolo delle modifiche è la storia, il resto del documento non lo richiama. Le versioni precedenti restano tutte in `claude`, come Markdown, comprese le intermedie e le bozze condivise: non si cancellano e non si sovrascrivono. La `claude` di una lavorazione contiene la catena completa delle versioni di ogni documento che produce o aggiorna, dalla prima disponibile alla corrente, anche se alcune sono nate in altre lavorazioni: all'inizio del lavoro si copiano in `claude` le versioni precedenti dalle cartelle di quelle lavorazioni.
- **Documenti in PDF.** I documenti veri di un progetto sono: Proposta di soluzione, Manuale del prodotto, Documento tecnico e Piano dei SAL. Hanno il PDF nella radice della lavorazione, in versione finale. Per un prodotto si aggiunge il Piano di lancio; per una lavorazione minore il solo documento vero è la Scheda di intervento, con il PDF nella radice. I mockup approvati sono esportati da Claude Design in PDF e stanno in `design`. Non sono documenti, e quindi non hanno il PDF: i messaggi (domande aperte, avviso al cliente, risposte di garanzia, comunicazioni, riepiloghi), che sono testi da incollare in un'email o in un ticket e si salvano in `source`; le voci di storia (Stato di partenza, stima precisa, piano di rilascio, esiti di prove e collaudi, variazioni, riprogrammazioni, segnalazioni in garanzia), che stanno in `history-and-decision.md` nel `log`; il Report di progetto, che sta in `log`. Restano Markdown, senza PDF, anche le Note di sprint e le bozze. Il PDF nasce dal sorgente con `build/crea-pdf.ps1` a ogni nuova versione e non si modifica a mano. Il sorgente resta il file che si aggiorna e che Claude legge. Nella radice della lavorazione resta solo la versione finale di ogni documento: quando ne nasce una nuova, il PDF della versione precedente si toglie dalla radice e la versione precedente resta solo come Markdown in `claude`. Lo script lo fa da solo.
- **Codici fissi.** Funzionalità (F1), story (F1.1), domande aperte (D1), milestone (M1, per il cliente SAL1), issue (I1), schermate (S1) e variazioni (V1) hanno un codice che non cambia e non si riutilizza. I codici sono il filo che lega i documenti tra loro.
- **Cosa e come.** Il Manuale del prodotto dice cosa fa il sistema ed è l'unica fonte per i comportamenti. Il Documento tecnico dice come è realizzato e cita i codici delle story senza riscriverle. Se sono in contrasto vale il Manuale.
- **Documenti del sistema.** Manuale del prodotto e Documento tecnico appartengono al sistema, non al singolo lavoro: progetti e prodotti li aggiornano, non ne creano di nuovi. Una lavorazione minore non li aggiorna: lascia traccia nella sua Scheda di intervento e in History and decision, e il primo progetto o prodotto che lavora sulla stessa parte le legge e aggiorna i documenti. Il Documento tecnico contiene anche il capitolo Pubblicazione, per chi pubblica.
- **Dove stanno.** I documenti sono conservati nella knowledge base, secondo la struttura della sezione Knowledge base.
- **Conversazioni.** Le riunioni, le telefonate e le altre conversazioni con il cliente si registrano, anche con un computer o un telefono: alla skill si consegna un semplice file audio. Si trascrivono e si salvano nella cartella `source` della lavorazione, insieme al resto di ciò che arriva dal cliente e di ciò che gli si scrive: sono materiale in più per le skill. Ciò che il cliente conferma a voce vale solo dopo un riepilogo scritto.

**Allineamento dei documenti.** Un lavoro può cambiare un comportamento descritto nei documenti di un altro lavoro.

- **Prima di iniziare.** Si riprende l'elenco dei lavori e dei documenti toccati prodotto dalla verifica preliminare, e si risolvono i conflitti. L'elenco cita i lavori per codice della lavorazione. Per progetti e prodotti avviene alla conferma del cliente. Per una lavorazione minore è già nell'analisi: la verifica può rimandare il lavoro.
- **A lavoro concluso.** Per un progetto e un prodotto, Manuale del prodotto e Documento tecnico del sistema (capitolo Pubblicazione compreso) vengono aggiornati con ciò che è stato realmente fatto, e così i documenti degli altri lavori che riguardano le stesse parti di codice, se il lavoro vi ha cambiato qualcosa di rilevante; il lavoro è chiuso solo dopo questo aggiornamento. Una lavorazione minore non aggiorna i documenti del sistema: a fine lavoro registra in History and decision ciò che ha realmente fatto, comprese le story del Manuale e i capitoli del Documento tecnico che ne risultano superati, con la versione dei documenti a cui si riferisce. Il primo progetto o prodotto che lavora sulla stessa parte legge le Schede e le voci di History and decision dei lavorazioni minori chiuse dopo l'ultima versione dei documenti e le recepisce.

Un documento già approvato da un cliente per un lavoro ancora aperto non si modifica in silenzio. Se un altro lavoro lo tocca, serve una variazione o una comunicazione al cliente. I documenti di lavori già chiusi si aggiornano a lavoro concluso, e la modifica indica il lavoro che l'ha causata.

## Knowledge base

La knowledge base è una repository per prodotto. Contiene il piano di sviluppo con le sue skill e la cartella delle lavorazioni.

- **Documenti del sistema.** Manuale del prodotto e Documento tecnico non hanno una cartella propria: sono documenti come gli altri e stanno nella lavorazione che li ha prodotti o aggiornati (sorgente in `claude`, PDF finale nella radice per Manuale e Documento tecnico). Il capitolo Pubblicazione è parte del Documento tecnico e ne segue la sorte. Ogni lavoro che li aggiorna salva la nuova versione nella propria cartella, quindi la versione vigente è quella con il numero di versione più alto tra tutte le lavorazioni. Chi cerca il documento vigente (una skill, uno sviluppatore) cerca per nome in tutta la cartella delle lavorazioni e prende la versione più alta.
- **Cartella delle lavorazioni.** Una cartella per ogni lavorazione, con il codice della lavorazione come nome.
- **Indice dei lavorazioni minori chiuse.** Nella cartella delle lavorazioni c'è un file `lavorazioni-minori-chiuse.md`: una riga per ogni lavorazione minore chiusa, con il codice, la data di chiusura, il sistema, le parti toccate, la versione dei documenti del sistema a cui la lavorazione minore si riferisce, la versione della Scheda e, quando un progetto o un prodotto la recepisce nei documenti, il codice di quel lavoro. Lo aggiorna il responsabile della lavorazione minore alla chiusura e a ogni voce di Garanzia che cambia il comportamento. Lo legge chi scrive Manuale e Documento tecnico di un progetto o di un prodotto, per sapere quali lavorazioni minori recepire.
- **Struttura di una lavorazione.** La struttura di una cartella di lavorazione serve a chi la legge:
  - **Lo sviluppatore** che entra per capire cosa deve fare. Guarda la radice: cosa promette il lavoro (Proposta), cosa fa il sistema (Manuale), come è realizzato e in che ordine (Documento tecnico, con il Piano delle milestone), quando arrivano le prove (Piano dei SAL); in `design` come appare, in `develop` a che punto è il lavoro.
  - **Claude**, che entra per capire tutto. Legge `claude`, `log`, `source`, `design` e `develop`: i sorgenti, la storia, ciò che è stato detto e scritto al cliente, lo stato.
  - **Una persona fra due anni**, che vuole capire cosa fosse questo progetto. Guarda la radice (perché è nato e cosa prometteva, cosa faceva) e il Report di progetto in `log`.

  Per questo i documenti sono senza cartelle per fase né per sottofase: nascono in momenti diversi, ma i loro nomi sono unici nella lavorazione. I posti sono questi e nessun altro:
  - **La radice**, per le persone: pochi documenti, solo i PDF finali. Per un progetto: Proposta, Manuale, Documento tecnico e Piano dei SAL; per una lavorazione minore: la Scheda di intervento. Sono numerati in ordine di nascita senza saltare numeri (`01-proposta-di-soluzione.pdf`, `02-manuale-del-prodotto-v1.5.pdf`, `03-documento-tecnico-v1.4.pdf` e così via; voce Numero dei PDF). Solo la versione finale di ogni documento: le precedenti stanno in `claude`. Nella radice non c'è nulla che sia solo storia: la storia sta in `log`.
  - **`claude`**, per Claude: i sorgenti Markdown di ogni documento, con bozze e tutte le versioni precedenti (non si cancellano mai: ogni versione resta come file Markdown con la sua versione nel nome). È il file che si legge e si aggiorna. Si legge `claude` per conoscere lo stato del lavoro, senza aprire i PDF.
  - **`design`**, per ciò che mostra come appare il sistema: wireframe, mockup approvati (esportati da Claude Design in PDF), prototipi e il materiale per realizzarli.
  - **`develop`**, per lo sviluppo in corso, che produce tanti documenti e si legge come una cronologia: Note di sprint e Milestone report. Sono solo Markdown, senza PDF, con il numero dello sprint o il codice del SAL nel nome (`nota-sprint-S08.md`, `milestone-report-SAL1.md`), perché sono eventi in sequenza e non versioni. Il Milestone report lo legge chi gestisce il progetto, non il cliente.
  - **`source`**, per tutto ciò che entra o esce dal lavoro verso il cliente: ciò che il cliente invia o dice e ciò che gli si scrive.
  - **`log`**, per la storia del lavoro. Variazioni, riprogrammazioni, esiti delle prove e del collaudo, conferme, ritardi, imprevisti e segnalazioni in garanzia non sono documenti: sono voci di `history-and-decision.md` (che cosa è successo e quando, con i numeri che servono a capirlo, e che cosa si è deciso, da chi e perché). A fine lavoro si aggiunge il Report di progetto. Sono file Markdown che crescono a ogni voce, si leggono e si aggiornano direttamente e non hanno il PDF.
- **History and decision.** In `log` di ogni lavorazione c'è un solo file di storia e decisioni, `history-and-decision.md`. Nasce vuoto all'inizio del lavoro, quando si crea la cartella, e si popola a mano con la skill `history-and-decision`. Il file è diviso in gruppi per fase (per progetti e prodotti Kickoff, Sviluppo, Rilascio, Garanzia; per le lavorazioni minori Analisi, Sviluppo, Rilascio, Garanzia). Ogni voce ha un titolo con la data e un'etichetta di tipo (Decisione, Variazione, Riprogrammazione, Imprevisto, Garanzia, Conferma, Rilascio, Prova o collaudo e così via), così si filtra con una ricerca, e campi etichettati: Fase, Cosa, Effetto, Riferimenti; le decisioni anche Chi ha deciso, Motivo e Alternative scartate; le variazioni anche Stato. Variazioni e decisioni portano un codice fisso (V1, DEC1). A fine lavoro il file è la fonte del Report di progetto. Per una lavorazione minore resta breve e spesso con poche voci.
- **Source: ciò che entra e ciò che esce.** Nella cartella di ogni lavorazione c'è una cartella `source`, perché ciò che il cliente ha detto o ricevuto può servire in qualunque momento del lavoro. Contiene in un solo livello, senza sottocartelle:
  - il materiale grezzo, non modificato: la richiesta, le email e i messaggi ricevuti, i file audio delle conversazioni, i documenti, le immagini e i mockup del cliente, le risposte alle domande aperte;
  - il materiale elaborato: la trascrizione di ogni audio e la sintesi con il riepilogo, prodotta da `interpretazione-conversazioni`;
  - i messaggi inviati al cliente: le skill li preparano, si inviano per email o su osTicket e si salvano qui (domande aperte, riepilogo di una conferma, comunicazione di variazione o di riprogrammazione, avviso di pubblicazione, risposta di garanzia). Non sono documenti e non hanno il PDF. Si salvano tutti i messaggi inviati, anche di semplice invio (un documento allegato, un invito, un promemoria): non si può sapere a priori cosa servirà dopo.

  Ogni file ha il nome che inizia con la data, nella forma AAAA-MM-GG, così l'elenco si legge in ordine di tempo; audio, trascrizione e sintesi della stessa conversazione condividono il resto del nome. Il materiale grezzo non si modifica mai. Le skill che cercano ciò che si sono detti cliente e team leggono sempre tutta la cartella. I documenti veri (Proposta, Manuale e gli altri) non stanno in `source`: seguono la struttura sopra, e al cliente si inviano insieme a un messaggio.
- **Nomi dei file.** Il percorso dice già cliente, sistema e lavorazione, quindi il nome del file non li ripete. Poiché tutti i file stanno insieme, ogni nome è unico nella lavorazione. Un documento unico porta solo il nome del tipo, per esempio `report-di-progetto` o `documento-tecnico`. Se ha versioni si aggiunge solo la versione (`manuale-del-prodotto-v1.4`, `proposta-di-soluzione-v0.2`). La Proposta di soluzione confermata dal cliente non ha versione e si chiama `proposta-di-soluzione`, perché esiste una sola Proposta confermata (un cambiamento dopo la conferma è una variazione). Per una bozza si aggiunge il numero (`manuale-del-prodotto-bozza-2`). Se di un tipo ne esistono più d'uno, si aggiunge solo ciò che li distingue: il numero dello sprint a due cifre (`nota-sprint-S08`, `nota-sprint-S10`), così l'ordine alfabetico è quello del tempo, il codice del SAL o della variazione, la data per i file di `source` (`2026-10-07-sintesi`). Il sorgente Markdown in `claude` ha il nome del tipo, senza numero. Il PDF nella radice ha lo stesso nome preceduto dal numero della lavorazione (voce Numero dei PDF).
- **Numero dei PDF.** Il numero davanti al nome del PDF non indica la versione: indica l'ordine in cui i documenti sono nati nel lavoro, così l'elenco dei file si legge nell'ordine in cui il lavoro procede. Ogni lavorazione ha la sua numerazione, che parte da `01` e non salta mai un numero: Ogni tipo di documento prende il numero successivo libero la prima volta che viene creato e lo tiene per sempre. La versione resta alla fine del nome: la Proposta v0.1 è `01-proposta-di-soluzione-v0.1.pdf`; alla conferma del cliente diventa `01-proposta-di-soluzione.pdf`, senza versione e con lo stesso numero, e il PDF della versione precedente esce dalla radice (restano tutte le versioni, e la confermata come `proposta-di-soluzione.md`, in `claude`). Se di un tipo esistono più esemplari hanno lo stesso numero e si distinguono per il codice. Il tipo si riconosce dal nome senza versione né codice.
- **Numerazione del Manuale.** Per un sistema senza Manuale (un prodotto nuovo) le versioni prima della conferma del cliente sono v0.1, v0.2 e così via, e la versione confermata è la v1.0. Per un sistema che ha già un Manuale la numerazione continua da quella corrente. Dopo la conferma ogni cambiamento è v1.1, v1.2 e così via (regola del 2026-10-12).
- **Documenti-piano e avanzamento.** Il Documento tecnico (capitolo Piano delle milestone) e il Piano dei SAL sono piani: dicono cosa si fa e quando, non cosa è accaduto. Stato delle milestone, ore reali, date reali, accettazioni e consegne dei materiali non vi compaiono: stanno in ClickUp, nelle Note di sprint, nei Milestone report e in History and decision. Questi documenti cambiano solo per una variazione o una riprogrammazione (regola del 2026-10-12).
- **Ricerca di altri lavori.** Si fa per codice della lavorazione. I codici dei lavori collegati si trovano nell'analisi preliminare (verifica preliminare) e si riportano nella Scheda di intervento o nello Stato di partenza (in `history-and-decision.md`).
- **Un repository per parte del sistema.** Il sistema del cliente può avere più repository di codice (sito pubblico, gestionale e altri). La Scheda di intervento e il Documento tecnico indicano sempre il repository di ogni parte toccata.

## Dove va ogni documento

- **Radice della lavorazione.** I PDF finali dei documenti: Proposta di soluzione, Manuale, Documento tecnico, Piano dei SAL (e per un prodotto il Piano di lancio); per una lavorazione minore la Scheda di intervento.
- **`claude` della lavorazione.** I sorgenti Markdown di tutti i documenti, con le versioni precedenti e le bozze (per una lavorazione minore, la Scheda di intervento).
- **`design`.** Wireframe, mockup approvati, prototipi e il loro materiale.
- **`develop`.** Note di sprint e Milestone report, solo Markdown.
- **`log`.** `history-and-decision.md`: variazioni, riprogrammazioni, esiti di prove e collaudi, garanzia e ogni altro fatto di storia; a fine lavoro il Report di progetto.
- **`source`.** Tutto ciò che entra e che esce verso il cliente: richiesta, email, audio, trascrizioni, sintesi e riepiloghi delle conversazioni, materiali ricevuti e messaggi inviati.

## Strumenti visivi

Servono solo quando il lavoro tocca l'interfaccia. Ogni piano dice in quale fase entrano.

- **Wireframe.** Lo schema di una schermata, senza grafica: mostra cosa c'è e dove. Valida struttura e contenuti.
- **Mockup.** L'aspetto grafico definitivo della schermata, ancora statico. Valida stile e identità. Si disegna in Claude Design a partire dai wireframe approvati.
- **Prototipo.** Wireframe o mockup resi navigabili, senza logica vera. Valida il percorso dell'utente.
- **Prova su staging (UAT).** Il software vero, provato dal cliente sullo staging dal vivo insieme al team, in call o di persona: il team presenta e guida, il cliente prova e decide. Porta all'accettazione. Si fa a ogni milestone e, sull'insieme, al collaudo finale; mai per le lavorazioni minori. Prima della sessione il cliente riceve un messaggio con data, ora e modalità, le story da provare e i loro criteri di accettazione. Se la sessione non si tiene o non si conclude, se ne fissa un'altra: non si accetta per assenza.

Wireframe e mockup approvati dal cliente valgono come i documenti: cambiarli dopo è una variazione. All'approvazione il mockup viene esportato in PDF in `design`, e quella copia è la versione che fa fede.

Nella prova si controlla ogni story sul suo criterio di accettazione. L'esito è uno fra questi: accettata, accettata con difetti non bloccanti, non accettata per difetti bloccanti. Un difetto bloccante si corregge prima dell'accettazione. Un difetto non bloccante si elenca nell'accettazione con una data. Una richiesta nuova emersa nella prova non è un difetto: è una variazione.

## Materiali del cliente

Ciò che il cliente deve fornire viene concordato a monte. Per progetti e prodotti ha una data. Una lavorazione minore non ha un documento per il cliente: se serve un materiale lo si chiede nel ticket, che resta in attesa finché non arriva.

1. Il primo documento per il cliente elenca i materiali, ancora senza date: la Proposta di soluzione, per progetti e prodotti.
2. Nel capitolo Piano delle milestone ogni materiale diventa una dipendenza delle issue che lo richiedono, e da lì si ricava entro quando serve.
3. Il Piano dei SAL riporta i materiali attesi con le date, e il cliente ne viene informato. Le date impegnano entrambe le parti.
4. La Nota di sprint interna e il messaggio per la prova di milestone ricordano al cliente i materiali in scadenza, prima che diventino un blocco.

I materiali tipici sono testi e immagini, dati, accessi e credenziali, documentazione dei sistemi esterni, utenze di prova.

Ogni giorno di ritardo su un materiale sposta di un giorno le consegne che ne dipendono.

## Organizzazione del lavoro

Il lavoro è organizzato su due assi separati: le milestone dividono il lavoro, gli sprint dividono il tempo. Le regole su milestone, issue, sprint, capacità, buffer, ciclo di sprint, dimensione del team e imprevisti dello sviluppo sono nel documento Ciclo di sviluppo, che vale per lavorazioni minori, progetti e prodotti.

## Date

Una data si promette solo quando si sa da dove parte.

- **Lavorazione minore.** Entra nello sprint secondo l'urgenza e la capacità, sulla base della stima in ore della Scheda di intervento. Al cliente non si dichiara una data di consegna: si risponde per presa visione appena la lavorazione è assegnata, e la data di pubblicazione si comunica solo quando è certa, senza obbligo.
- **Durate verso il cliente.** Una durata detta al cliente (nella Proposta, nel Piano dei SAL, in un messaggio) si esprime in giorni di calendario fino a due mesi (45 giorni sono 45 giorni), in mesi da due mesi in poi (60 giorni sono 2 mesi), mai in settimane. Un intervallo usa la stessa unità ai due estremi: da 40 a 50 giorni, da 2 a 3 mesi. Per i calcoli interni (capacità, margine, tempo del kickoff) si usano ore e giorni lavorativi, e il passaggio al cliente è una conversione fatta una volta, con la stessa regola in ogni documento.
- **Progetti e prodotti.** Il Piano dei SAL dichiara una data di avvio e calcola le consegne da quella. Ogni giorno di ritardo del cliente su una risposta o un materiale sposta di un giorno le consegne che ne dipendono.
- **Sprint e rilasci.** Lo sprint finisce sempre di venerdì. A fine sprint si prepara il piano di rilascio con le particolarità tecniche, che l'incaricato della pubblicazione legge il lunedì insieme al capitolo Pubblicazione per pubblicare. In condizioni normali si può rilasciare anche a metà sprint. Una lavorazione minore urgente si pubblica appena pronto, anche di venerdì sera fino alle 18.
- **Calendario.** Prima di calcolare le date si compila il calendario del lavoro: festività, chiusure aziendali, ferie già note, chiusure del cliente. Si ricontrolla all'inizio di ogni milestone.

## Variazioni

Dopo la conferma del Manuale del prodotto, tutto ciò che il cliente chiede e che i documenti confermati non prevedono è una variazione. Ogni variazione entra in History and decision e riceve una categoria.

Prima della conferma non c'è variazione: un cambiamento a un documento non ancora confermato è una modifica, si recepisce con una nuova versione numerata e non entra in History and decision. Il momento che separa le due cose è la conferma del Manuale del prodotto, che è la seconda conferma del cliente dopo quella della Proposta di soluzione.

La categoria si decide rispondendo a queste domande, in ordine. La prima risposta affermativa decide.

1. **Cambia ciò che la proposta ha stabilito, oppure cambia il contenuto di story in più milestone?** È una variazione grande.
2. **Sposta una data, sposta story tra milestone o tra release, tocca lavoro già accettato, supera le 4 ore, oppure tocca più di una story?** È una variazione media.
3. **Nessuna delle precedenti?** È una variazione piccola.

Come si gestisce ciascuna:

- **Piccola.** Basta la conferma scritta del cliente. È assorbita dal buffer di milestone. Si aggiornano il Manuale del prodotto e il capitolo Piano delle milestone del Documento tecnico, e si crea in ClickUp una issue di tipo variazione.
- **Media.** Si stima l'impatto su ore e date, e il cliente lo approva per iscritto prima che si lavori. Si aggiornano Manuale del prodotto, capitolo Piano delle milestone del Documento tecnico, altre parti del Documento tecnico se serve, Piano dei SAL se cambia una data o il contenuto di una consegna.
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
- **Richiesta nuova.** Il Manuale non lo prevede, o prevede altro. È una variazione se il lavoro è in corso, una lavorazione minore se è concluso.

Quando il sistema non ha un Manuale, vale ciò che è stato concordato per iscritto nei lavori precedenti.

**Garanzia.** Dopo un rilascio, per un periodo pari al 50% della durata pianificata della lavorazione (minimo 15 giorni; giorni lavorativi per le lavorazioni minori, di calendario per progetti e prodotti), i bug su ciò che è stato rilasciato si correggono senza conferma del cliente. La garanzia è anche un imprevisto di capacità: rimettere mano a qualcosa di pubblicato costa tempo, può togliere una persona a un progetto in corso o far rientrare la lavorazione negli sprint. Per questo il tempo si traccia e si gestisce con gli strumenti dello sviluppo, come ogni altro imprevisto.

**Pacchetto di garanzia.** Una o più voci segnalate insieme dopo un rilascio, sulla stessa lavorazione: un bug, una variazione piccola, una richiesta estetica. Non apre una nuova lavorazione: si registra sul lavoro già chiuso e prosegue nella stessa richiesta aperta nel sistema di ticketing che l'ha originata, sia essa diventata una lavorazione minore, un progetto o un prodotto.

- Decorre dal rilascio in produzione, non dall'accettazione sullo staging.
- In un progetto o in una release di prodotto decorre dal rilascio finale. Se una milestone va in produzione prima, per le sue story decorre da quel momento.
- Vale anche per le lavorazioni minori, dal rilascio, che coincide con la chiusura.
- **Cosa copre.** I bug, sempre. Le variazioni piccole e le richieste estetiche, se sono davvero piccole: al massimo 4 ore e una sola story. La richiesta del cliente vale come conferma: non serve altro. Durante la garanzia la categoria di variazione non si applica: valgono questi limiti. Una richiesta più grande non è garanzia: è una lavorazione minore nuova, perché il lavoro è concluso.
- **Come si registra.** Ogni voce è una issue in ClickUp, segnata come garanzia e con il codice della lavorazione originale: di tipo bug per un bug, di tipo variazione per una variazione piccola o una richiesta estetica. Per un progetto sta in una List "Garanzia" del suo Folder.
- **Capacità.** Un pacchetto urgente usa il buffer di sprint. Uno non urgente usa la capacità delle lavorazioni minori. Se serve la persona che conosce la parte, chi gestisce il team decide un prestito di ore, come per ogni lavorazione minore: le ore prestate pesano sul margine del progetto da cui la persona è presa.
- **Responsabile.** Il responsabile della lavorazione originale, che può delegare.
- **Tracciamento.** Le ore si registrano sulle issue con il tracciamento del tempo di ClickUp e si leggono per lavorazione. Non c'è una riserva di ore per la garanzia.
- **Alla fine del pacchetto.** Il cliente riceve una risposta breve nel ticket (con una copia in `source`), e, se il comportamento è cambiato, la Scheda di intervento ha una nuova versione (per una lavorazione minore) o si aggiornano i documenti (per un progetto o un prodotto).
- **Rapporto di garanzia.** A fine periodo si compila la sezione sulla garanzia del Report di progetto (per una lavorazione minore, una voce in History and decision): le voci, le ore spese e la causa di ciascuna (requisito frainteso, test mancante, regressione, causa esterna). Giustifica il tempo speso e serve a stimare meglio i lavori futuri.

## Quando un lavoro si ferma

Non ogni richiesta arriva alla produzione. Un lavoro può fermarsi in questi punti.

- **Dopo la verifica preliminare.** Il lavoro non va aperto: è già compreso altrove, è un doppione, oppure il sistema lo fa già. Al cliente si risponde con il motivo.
- **Dopo l'indagine o l'analisi.** La richiesta non è fattibile come posta. Al cliente si comunica il motivo e, se esiste, un'altra strada. Il lavoro prosegue solo su una richiesta riformulata.
- **In attesa di una risposta del cliente.** Il cliente non conferma un documento o non risponde a una domanda. Una lavorazione minore resta sospesa informalmente, senza termini. Un progetto o un prodotto non si ferma: si fa ciò che non dipende dalla risposta, e la parte che ne dipende slitta degli stessi giorni.
- **Per decisione del cliente.** Il cliente sospende il lavoro.

Quando un lavoro si ferma si registra lo stato raggiunto e i documenti restano nella knowledge base. Per riprenderlo servono una nuova verifica preliminare e una nuova pianificazione: nel frattempo il sistema e gli altri lavori possono essere cambiati.

## Decisioni ancora da prendere

Le decisioni ancora aperte sono raccolte in `docs/da-risolvere.md`. Le decisioni proprie di un solo piano sono in fondo a quel piano.
