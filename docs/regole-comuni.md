# Regole comuni

Data: 2026-10-05

Queste regole valgono per ogni lavoro, qualunque sia la sua categoria. I piani dei ticket, di progetto e di prodotto descrivono solo le fasi e ciò che ciascuno ha di proprio, e rimandano qui per tutto il resto.

Questo documento è il riferimento per tutto il team.

## Glossario

Ogni cosa ha un solo nome, usato allo stesso modo in tutti i piani e in tutti i documenti.

### Categorie e persone

- **Categoria.** Ciò che una richiesta diventa: ticket, progetto o prodotto. La decide sempre l'azienda, mai il cliente.
- **Referente.** La persona del cliente la cui approvazione vale. È una sola.
- **Responsabile.** La persona interna a cui è assegnata una lavorazione e da cui passano le richieste del cliente su quel lavoro. Per un ticket è lo sviluppatore che la esegue. Per un progetto è il PL (project lead), che guida il progetto e tiene i contatti con il cliente.

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
- **Sprint report.** Il documento interno a ogni fine sprint: fatto, prossimo, stato della milestone, cosa serve dal cliente. Non va al cliente.
- **Buffer di sprint.** La parte di capacità riservata ai ticket urgenti: il 20% della capacità dello sprint.
- **Buffer di milestone.** Le ore aggiunte a una milestone per assorbire gli imprevisti.

### Controlli iniziali

- **Verifica preliminare.** Il controllo iniziale di una richiesta sui lavori aperti e sul codice. Il termine "verifica" non indica altro.
- **Kickoff.** La fase iniziale di un progetto: il confronto con il cliente e l'indagine sull'esistente, insieme.
- **Indagine sull'esistente.** L'analisi completa del sistema che si fa nel kickoff di un progetto.

### Consegna e accettazione

- **Milestone report.** Il documento per il cliente a ogni milestone, presentato insieme alla demo: story consegnate, esito della demo, stato della milestone successiva, date aggiornate, ciò che serve dal cliente.
- **Staging.** L'ambiente separato dalla produzione dove il lavoro viene provato prima del rilascio.
- **Prova.** Ciò che il cliente fa sullo staging per controllare una consegna.
- **Demo.** La presentazione al cliente del software funzionante sullo staging.
- **Rilascio.** La messa in produzione. Il termine non indica altro.

### Cambiamenti

- **Variazione.** Ciò che il cliente chiede dopo la conferma dei documenti e che i documenti confermati non prevedono. Si annota nel Registro delle variazioni.
- **Modifica.** Un cambiamento a un documento non ancora confermato dal cliente. Si recepisce con una nuova versione numerata e non è una variazione.
- **Feature.** Un tipo di ticket: una funzione nuova o cambiata, ma contenuta. Il termine non indica altro.

### Garanzia

- **Garanzia.** Il periodo dopo un rilascio in cui i bug si correggono senza conferma del cliente, raggruppati in un pacchetto di garanzia.
- **Pacchetto di garanzia.** Una o più voci nate dopo un rilascio su una stessa lavorazione, trattate insieme durante la garanzia.

## Principi

- **Niente lavoro su progetti e prodotti senza conferma scritta.** Il ticket non ha una conferma del cliente: lo decide l'azienda con l'analisi iniziale. L'unica eccezione per progetti e prodotti è il pacchetto di garanzia.
- **Si lavora a consumo.** Prezzi e preventivi sono gestiti fuori da questi piani e il lavoro non ha un'approvazione economica: il cliente paga il tempo di lavoro, quindi la durata stimata è un impegno.
- **Si promette solo ciò che è stato guardato.** Nessuna stima e nessuna data senza aver controllato il codice e i lavori aperti.
- **Il cliente valida ciò che vede.** Wireframe, mockup e demo contano più dei documenti lunghi.
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

Prima di essere classificata e stimata, ogni richiesta passa da due controlli. Servono a capire se il lavoro va davvero aperto, e con quale categoria.

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

Fuori dai momenti fissi il cliente si contatta subito in questi casi: milestone a rischio, ambiguità scoperta nel Manuale del prodotto, blocco che dipende da lui.

Il silenzio del cliente ha un valore diverso secondo ciò che gli è stato chiesto.

- **Non vale come accettazione** per una demo: non ha un termine che la accetta da sola, e richiede sempre una risposta esplicita del cliente.
- **Non ferma il lavoro** di un progetto o di un prodotto quando il cliente deve confermare un documento (la proposta, il Manuale del prodotto): il silenzio non vale come conferma, ma dopo un sollecito scritto si prosegue con ciò che non dipende dalla risposta, e la parte che ne dipende slitta degli stessi giorni.
- **Non riguarda i ticket**, che non hanno conferme né prove del cliente. Se il cliente risponde tardi a una richiesta di chiarimenti o di materiali, il ticket resta sospeso informalmente, senza termini.

## Documenti

Ogni piano elenca i propri documenti. Queste regole valgono per tutti.

- **Bozza e versione.** Un documento per il cliente è una bozza interna finché è incompleto, e riceve un numero di versione da quando viene condiviso. Una bozza non si condivide.
- **Codici fissi.** Funzionalità (F1), story (F1.1), domande aperte (D1), milestone (M1, per il cliente SAL1), issue (I1), schermate (S1) e variazioni (V1) hanno un codice che non cambia e non si riutilizza. I codici sono il filo che lega i documenti tra loro.
- **Cosa e come.** Il Manuale del prodotto dice cosa fa il sistema ed è l'unica fonte per i comportamenti. Il Documento tecnico dice come è realizzato e cita i codici delle story senza riscriverle. Se sono in contrasto vale il Manuale.
- **Documenti del sistema.** Manuale del prodotto e Documento tecnico appartengono al sistema, non al singolo lavoro: ticket e progetti li aggiornano, non ne creano di nuovi.
- **Dove stanno.** I documenti sono conservati su Drive.
- **Conversazioni.** Le riunioni, le telefonate e le altre conversazioni con il cliente si trascrivono e si aggiungono alla documentazione del lavoro, su Drive: sono materiale in più per le skill. Ciò che il cliente conferma a voce vale solo dopo un riepilogo scritto.

**Allineamento dei documenti.** Un lavoro può cambiare un comportamento descritto nei documenti di un altro lavoro.

- **Prima di iniziare.** Si riprende l'elenco dei lavori e dei documenti toccati prodotto dalla verifica preliminare, e si risolvono i conflitti. Per progetti e prodotti avviene alla conferma del cliente. Per un ticket è già nell'analisi: la verifica può rimandare il lavoro.
- **A lavoro concluso.** Manuale del prodotto e Documento tecnico del sistema vengono aggiornati con ciò che è stato realmente fatto, e così i documenti degli altri lavori che riguardano le stesse parti di codice, se il lavoro vi ha cambiato qualcosa di rilevante. Un lavoro è chiuso solo dopo questo aggiornamento. Per un ticket avviene prima del rilascio, perché rilascio e chiusura coincidono. Fa eccezione il ticket urgente, che si chiude al rilascio e aggiorna i documenti dopo.

Un documento già approvato da un cliente per un lavoro ancora aperto non si modifica in silenzio. Se un altro lavoro lo tocca, serve una variazione o una comunicazione al cliente. I documenti di lavori già chiusi si aggiornano a lavoro concluso, e la modifica indica il lavoro che l'ha causata.

## Strumenti visivi

Servono solo quando il lavoro tocca l'interfaccia. Ogni piano dice in quale fase entrano.

- **Wireframe.** Lo schema di una schermata, senza grafica: mostra cosa c'è e dove. Valida struttura e contenuti.
- **Mockup.** L'aspetto grafico definitivo della schermata, ancora statico. Valida stile e identità. Si disegna in Figma a partire dai wireframe approvati.
- **Prototipo.** Wireframe o mockup resi navigabili, senza logica vera. Valida il percorso dell'utente.
- **Demo.** Il software vero, funzionante sullo staging. Porta all'accettazione.

Wireframe e mockup approvati dal cliente valgono come i documenti: cambiarli dopo è una variazione. All'approvazione il mockup viene esportato in PDF su Drive, e quella copia è la versione che fa fede.

In una demo si mostra ogni story sul suo criterio di accettazione. L'esito è uno fra questi: accettata, accettata con difetti non bloccanti, non accettata per difetti bloccanti. Un difetto bloccante si corregge prima dell'accettazione. Un difetto non bloccante si elenca nell'accettazione con una data. Una richiesta nuova emersa in demo non è un difetto: è una variazione.

## Materiali del cliente

Ciò che il cliente deve fornire viene concordato a monte. Per progetti e prodotti ha una data. Un ticket non ha un documento per il cliente: se serve un materiale lo si chiede nel ticket, che resta in attesa finché non arriva.

1. Il primo documento per il cliente elenca i materiali, ancora senza date: la Proposta di soluzione, per progetti e prodotti.
2. Nel Piano delle milestone ogni materiale diventa una dipendenza delle issue che lo richiedono, e da lì si ricava entro quando serve.
3. Il Piano dei SAL riporta i materiali attesi con le date, e il cliente ne viene informato. Le date impegnano entrambe le parti.
4. Lo sprint report interno e il milestone report al cliente ricordano i materiali in scadenza, prima che diventino un blocco.

I materiali tipici sono testi e immagini, dati, accessi e credenziali, documentazione dei sistemi esterni, utenze di prova.

Ogni giorno di ritardo su un materiale sposta di un giorno le consegne che ne dipendono.

## Organizzazione del lavoro

Il lavoro è organizzato su due assi separati: le milestone dividono il lavoro, gli sprint dividono il tempo. Le regole su milestone, issue, sprint, capacità, buffer, ciclo di sprint, dimensione del team e imprevisti dello sviluppo sono nel documento Ciclo di sviluppo, che vale per ticket, progetti e prodotti.

## Date

Una data si promette solo quando si sa da dove parte.

- **Ticket.** Entra nello sprint secondo l'urgenza e la capacità, sulla base della stima in ore della Scheda di intervento. Al cliente non si dichiara una data di consegna: si risponde per presa visione appena il ticket è assegnato, e la data di pubblicazione si comunica solo quando è certa, senza obbligo.
- **Progetti e prodotti.** Il Piano dei SAL dichiara una data di avvio e calcola le consegne da quella. Ogni giorno di ritardo del cliente su una risposta o un materiale sposta di un giorno le consegne che ne dipendono.
- **Calendario.** Prima di calcolare le date si compila il calendario del lavoro: festività, chiusure aziendali, ferie già note, chiusure del cliente. Si ricontrolla all'inizio di ogni milestone.

## Variazioni

Dopo la conferma dei documenti, tutto ciò che il cliente chiede e che i documenti confermati non prevedono è una variazione. Ogni variazione entra nel Registro delle variazioni e riceve una categoria.

Prima della conferma non c'è variazione: un cambiamento a un documento non ancora confermato è una modifica, si recepisce con una nuova versione numerata e non entra nel Registro delle variazioni. Per un progetto il momento che separa le due cose è la conferma del Manuale del prodotto.

La categoria si decide rispondendo a queste domande, in ordine. La prima risposta affermativa decide.

1. **Cambia ciò che la proposta ha stabilito, oppure cambia il contenuto di story in più milestone?** È una variazione grande.
2. **Sposta una data, sposta story tra milestone o tra release, tocca lavoro già accettato, supera le 4 ore, oppure tocca più di una story?** È una variazione media.
3. **Nessuna delle precedenti?** È una variazione piccola.

Come si gestisce ciascuna:

- **Piccola.** Basta la conferma scritta del cliente. È assorbita dal buffer di milestone. Si aggiornano il Manuale del prodotto e il Piano delle milestone, con una issue di tipo Variazione.
- **Media.** Si stima l'impatto su ore e date, e il cliente lo approva per iscritto prima che si lavori. Si aggiornano Manuale del prodotto, Piano delle milestone, Documento tecnico se serve, Piano dei SAL se cambia una data o il contenuto di una consegna.
- **Grande.** Si torna alla fase di proposta con una proposta integrativa, poi conferma e nuova documentazione. Si aggiornano tutti i documenti.

Regole comuni alle tre:

- Una variazione non entra mai nello sprint in corso.
- Il lavoro già svolto e superato da una variazione resta dovuto e resta visibile nel Piano delle milestone.
- Una variazione è chiusa solo quando i documenti sono aggiornati.
- Le variazioni piccole hanno un tetto: insieme possono consumare solo metà del buffer di milestone. Oltre il tetto, ogni nuova variazione è trattata come media.

## Bug, ambiguità e garanzia

Per distinguere un bug da una richiesta nuova il criterio è sempre lo stesso, e lo decide il Manuale del prodotto.

- **Bug.** Il sistema fa una cosa diversa dal Manuale. Si corregge.
- **Ambiguità.** Il Manuale non è chiaro. Non si interpreta: si segnala, si pone al cliente una domanda puntuale e si aggiorna il Manuale.
- **Richiesta nuova.** Il Manuale non lo prevede, o prevede altro. È una variazione se il lavoro è in corso, un ticket se è concluso.

Quando il sistema non ha un Manuale, vale ciò che è stato concordato per iscritto nei lavori precedenti.

**Garanzia.** Dopo un rilascio, per un periodo pari al 50% della durata pianificata della lavorazione (minimo 15 giorni; giorni lavorativi per i ticket, di calendario per progetti e prodotti), i bug su ciò che è stato rilasciato si correggono senza conferma del cliente.

**Pacchetto di garanzia.** Una o più voci, un bug, una variazione piccola, una richiesta estetica, segnalate insieme dopo un rilascio, sulla stessa lavorazione. Non apre una nuova lavorazione: si registra sul lavoro già chiuso e prosegue nella stessa richiesta aperta nel sistema di ticketing che l'ha originata, sia essa diventata un ticket, un progetto o un prodotto. Per la capacità segue le stesse regole di urgenza di ogni issue: urgente pesca dal buffer di sprint, non urgente entra in coda nello sprint unico aziendale.

- Decorre dal rilascio in produzione, non dall'accettazione sullo staging.
- In un progetto o in una release di prodotto decorre dal rilascio finale. Se una milestone va in produzione prima, per le sue story decorre da quel momento.
- Vale anche per i ticket, dal rilascio, che coincide con la chiusura.
- Copre i bug, non le richieste nuove.

## Quando un lavoro si ferma

Non ogni richiesta arriva alla produzione. Un lavoro può fermarsi in questi punti.

- **Dopo la verifica preliminare.** Il lavoro non va aperto: è già compreso altrove, è un doppione, oppure il sistema lo fa già. Al cliente si risponde con il motivo.
- **Dopo l'indagine o l'analisi.** La richiesta non è fattibile come posta. Al cliente si comunica il motivo e, se esiste, un'altra strada. Il lavoro prosegue solo su una richiesta riformulata.
- **In attesa di una risposta del cliente.** Il cliente non conferma un documento o non risponde a una domanda. Un ticket resta sospeso informalmente, senza termini. Un progetto o un prodotto non si ferma: si fa ciò che non dipende dalla risposta, e la parte che ne dipende slitta degli stessi giorni.
- **Per decisione del cliente.** Il cliente sospende il lavoro.

Quando un lavoro si ferma si registra lo stato raggiunto e i documenti restano su Drive. Per riprenderlo servono una nuova verifica preliminare e una nuova pianificazione: nel frattempo il sistema e gli altri lavori possono essere cambiati.

## Decisioni ancora da prendere

Questi valori valgono per tutti i piani e vanno fissati prima di applicarli. Le decisioni proprie di un solo piano sono in fondo a quel piano.

Nessuna decisione aperta.
