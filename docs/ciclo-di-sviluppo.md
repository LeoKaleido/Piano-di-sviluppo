# Ciclo di sviluppo

Data: 2026-10-06

Questo documento descrive la parte di sviluppo di una lavorazione: sprint, milestone, issue, capacità, buffer, prova del cliente e imprevisti. Si rilegge durante lo sviluppo. Vale per i ticket, i progetti e i prodotti, con le differenze segnate per categoria. Le parti che valgono per una sola categoria sono segnate con il suo nome.

Le regole comuni a ogni lavoro (glossario, categorie, contatti, documenti, date, variazioni, garanzia) sono nelle Regole comuni. Le fasi prima e dopo lo sviluppo sono nei piani di ogni categoria: Piano dei ticket, Piano di progetto, Piano di prodotto.

Un diagramma di flusso dettagliato è in `presentation/schemi/diagramma-ciclo-di-sviluppo.html`.

## Il flusso in breve

1. **Ingresso nello sviluppo.** Si verifica che ciò che serve sia pronto, e si pianifica il primo sprint.
2. **Lavoro.** Si sviluppa, con revisione del codice e controllo sulla DoD. Lo stato delle issue vive in ClickUp.
3. **Chiusura dello sprint.** Si registrano le ore e si controlla la milestone: Nota di sprint.
4. **Pianificazione del prossimo sprint.** Si calcola la capacità e si scelgono le issue in ClickUp: dipende dalla nota.
5. **Fine milestone.** Prova del cliente sullo staging e accettazione. Solo progetti e prodotti.
6. **Uscita dallo sviluppo.** Il lavoro passa alla fase successiva del suo piano.

Il ciclo dei punti 2, 3 e 4 si ripete a ogni sprint, sempre nell'ordine nota e poi pianificazione. Il punto 5 si ripete a ogni milestone.

## Le parti del lavoro

**Issue.** È l'unità di lavoro. Vive solo in ClickUp: non è descritta nei documenti. Ha un codice fisso (I1, I2), un titolo, un tipo, una descrizione, le dipendenze, una stima in ore, una DoD e uno stato. Una issue stimata oltre le 16 ore si divide. Un ticket è un task in ClickUp, e un ticket lungo è semplicemente lungo: al massimo si divide in sottotask.

I tipi di issue:

- **Story.** Realizza una story del Manuale del prodotto e ne cita il codice.
- **Supporto.** Sblocca altre issue: ambienti, infrastruttura, struttura dei dati. Cita le issue che sblocca.
- **Spike.** Tempo limitato per sciogliere un'incognita prima di stimare. Cita la domanda a cui risponde.
- **Bug.** Correzione di un comportamento diverso dal Manuale. Cita la story violata.
- **Variazione.** Lavoro nato da una variazione approvata. Cita la voce del Registro delle variazioni.

Gli stati di una issue in ClickUp sono sei. Una issue ha un solo stato alla volta:

- **BACKLOG.** L'issue è nella sua milestone e non è in uno sprint.
- **PLANNED.** L'issue è in uno sprint.
- **IN PROGRESS.** Qualcuno ci sta effettivamente lavorando.
- **TESTING.** La lavorazione è conclusa e va revisionata.
- **COMPLETED.** La lavorazione è conclusa e testata.
- **CANCELLED.** La lavorazione non serve più.

I passaggi:

- **BACKLOG a PLANNED.** Quando l'issue è scelta nella pianificazione dello sprint e si aggiunge alla List dello sprint. A metà sprint il responsabile può anticipare issue con la parte avanzata del buffer di sprint non usato.
- **PLANNED a IN PROGRESS.** Chi sviluppa inizia a lavorarci. Solo se l'issue è nello sprint corrente e le issue da cui dipende sono COMPLETED. Un'issue fuori dallo sprint non si inizia, tranne un ticket urgente.
- **IN PROGRESS a TESTING.** Chi sviluppa ha concluso il lavoro, che è sullo staging. Parte la revisione del codice (skill `revisione-codice`).
- **TESTING a IN PROGRESS.** La revisione ha commenti bloccanti.
- **TESTING a COMPLETED.** La revisione è approvata e tutta la DoD è spuntata. I commenti "da correggere" che escono dalla issue diventano nuove issue in BACKLOG.
- **PLANNED a BACKLOG.** A fine sprint, se la nuova pianificazione non la sceglie di nuovo.
- **Qualsiasi stato a CANCELLED.** Solo il responsabile, dopo una variazione, con il codice della variazione in un commento. Un'issue non si cancella mai: passa a CANCELLED, perché il lavoro svolto deve restare visibile.
- **COMPLETED non si riapre.** Se la prova del cliente o la revisione trovano un difetto, si crea una nuova issue di tipo bug in BACKLOG, con la story violata.
- **Fine sprint.** Un'issue IN PROGRESS o TESTING resta nel suo stato e passa alla List dello sprint successivo, con la priorità.
- **Blocchi.** Un blocco non è uno stato: è un attributo che ClickUp assegna a un'issue in attesa di un'altra, con la dipendenza nativa. L'issue mantiene il suo stato. Chi scopre un blocco imposta la dipendenza lo stesso giorno e scrive la causa in un commento. Il responsabile viene avvisato, e il blocco si segnala anche nella daily. Quando la causa cade, la dipendenza si toglie. Un materiale del cliente da cui dipende un'issue si rappresenta come un task nella List "Materiali" del Folder della lavorazione, con la data entro cui serve: l'issue è in attesa di quel task, e il blocco cade quando il materiale arriva. Un'issue bloccata a fine sprint passa allo sprint successivo se si prevede di sbloccarla, altrimenti torna in BACKLOG con il motivo.

**DoD (Definition of Done).** Le condizioni verificabili che chiudono una issue, ognuna con un sì o un no. Ogni issue ha una DoD base uguale per tutte, a cui aggiunge le sue condizioni:

- il lavoro corrisponde alla descrizione della issue;
- la revisione del codice è fatta (skill `revisione-codice`). Con una persona sola è a campione, fatta da chi è esterno al lavoro;
- il lavoro è sullo staging;
- lo stato in ClickUp è aggiornato;
- le ore reali sono tracciate sull'issue con il tracciamento del tempo di ClickUp;
- se l'issue cambia il modo di pubblicare (regole del server, cache, riavvii, variabili), la modifica è annotata per la Guida alla pubblicazione con un commento e l'etichetta `guida`;
- per l'ultima issue di una story, il criterio di accettazione della story è verificato.

**Milestone.** Solo progetti e prodotti. Un blocco di lavoro che consegna story intere e si può dimostrare. Verso il cliente si chiama SAL. La durata di ogni milestone e la data della sua prova sono già decise nel Documento tecnico e nel Piano dei SAL. La durata minima è di uno sprint, due settimane.

- Una story appartiene a una sola milestone: il cliente accetta story, non pezzi di lavoro.
- Le parti più incerte o rischiose vanno nelle prime milestone.
- Le dipendenze decidono l'ordine: nessuna issue precede quelle da cui dipende. I materiali del cliente sono dipendenze.
- In un prodotto la prima milestone è quella delle fondamenta: infrastruttura, ambienti, parti mai affrontate.

Le milestone di un progetto o di un prodotto stanno nel capitolo Milestone del Documento tecnico (obiettivo, story, ore, buffer, data della prova) e sono caricate anche in ClickUp. Le issue stanno solo in ClickUp. Un ticket non ha milestone.

**ClickUp.** Due Space. "Lavorazioni": un Folder per lavorazione (codice di osTicket nel nome), una List per milestone (data di scadenza uguale alla data della prova), le issue come task, scritte una volta sola, e una List "Materiali" con un task per ogni materiale del cliente e la data entro cui serve, e, dopo il rilascio, una List "Garanzia" con un task per ogni voce segnalata in garanzia. "Sprint": la cartella degli sprint, una List per sprint. Le issue scelte per uno sprint si aggiungono alla List dello sprint come collegamento: stesso task, nessuna copia. Un Folder "Ticket" tiene i ticket, un task per ticket con gli stessi stati. La capacità si legge dalla vista Workload, con le ore come punti.

**Sprint.** È unico per tutta l'azienda e dura due settimane: stesse date per tutti i lavori di tutti i clienti. Una persona che lavora su più lavori ha un solo sprint, in cui la sua capacità viene divisa. Le milestone dividono il lavoro, gli sprint dividono il tempo.

**Capacità.** Le ore realmente disponibili di una persona in uno sprint, tolte ferie, festività e chiusure.

**Buffer di sprint.** La parte di capacità riservata ai ticket urgenti: il 20% della capacità di ogni persona in ogni sprint.

**Buffer di milestone.** Solo progetti e prodotti. Le ore aggiunte a ogni milestone: il 20% delle ore stimate, il 30% quando sviluppa una sola persona perché un'assenza ferma il lavoro.

## Il flusso, passo per passo

Per ogni passo sono indicati chi lo esegue, la skill da usare, i documenti che produce e quando si chiude.

### 1. Ingresso nello sviluppo

Prima di iniziare si verifica che sia pronto ciò che serve.

- **Ticket.** La Scheda di intervento è completa, con DoD e stima, e c'è un responsabile.
- **Progetto.** Il Documento tecnico è completo, ogni story del Manuale è coperta da issue stimate, ogni milestone ha il suo buffer e la sua data, e il Piano dei SAL è stato inviato al cliente.
- **Prodotto.** Come per il progetto, con la prima milestone dedicata alle fondamenta.

Chi: il responsabile.
Skill: nessuna.
Produce: la pianificazione del primo sprint (passo 4), e le issue del Documento tecnico caricate in ClickUp.
Si chiude quando: tutto ciò che serve è pronto. Se manca qualcosa, non si inizia: si torna alla fase precedente del piano.

### 2. Lavoro

Si sviluppano le issue dello sprint. Lo stato delle issue (BACKLOG, PLANNED, IN PROGRESS, TESTING, COMPLETED, CANCELLED) vive in ClickUp.

- Una daily, breve e regolare, per i progetti e i prodotti. I ticket non l'hanno. Un blocco si segnala il giorno stesso.
- Ogni issue si chiude solo quando soddisfa la sua DoD, revisione del codice compresa (skill `revisione-codice`).
- Una issue che scopre un'incognita non risolvibile in tempo breve genera una issue di tipo spike a tempo limitato, poi una nuova stima.
- Una issue che si rivela molto più grande della stima si ferma e si avvisa il responsabile: la stima si rifà, e una issue oltre le 16 ore si divide.
- Una variazione non entra mai nello sprint in corso: entra in uno sprint successivo, dopo l'approvazione.

Differenze per categoria:

- **Ticket.** Se si toccano parti diverse da quelle previste, si corregge la voce "Su cosa intervenire" della Scheda di intervento. Se il lavoro supera la stima, il responsabile avvisa chi ha analizzato, che aggiorna la stima. Se supera le 2 settimane si ferma e si riclassifica come progetto.
- **Progetto e prodotto.** Le story si realizzano nell'ordine delle dipendenze della milestone in corso. Le issue di una stessa story possono stare in sprint diversi della stessa milestone.

Chi: chi sviluppa.
Skill: nessuna per lo sviluppo. `revisione-codice` per la revisione di ogni issue. `variazione` per un cambiamento chiesto dal cliente. `riprogrammazione` per un imprevisto di tempo. `interpretazione-conversazioni` per ogni conversazione con il cliente.
Produce: issue COMPLETED, con le DoD soddisfatte, e lo stato aggiornato in ClickUp.
Si chiude quando: a fine sprint, vedi il passo 3.

### 3. Chiusura dello sprint

Si chiude lo sprint di venerdì con la Nota di sprint. La nota viene prima della pianificazione del prossimo sprint, che ne dipende.

1. **Esito delle issue.** COMPLETED e non COMPLETED, lette da ClickUp. Le issue non completate passano allo sprint successivo, con la priorità: lo sprint non si allunga.
2. **Ore completate.** La somma delle stime delle issue diventate COMPLETED dentro le date dello sprint. È il dato che guida la pianificazione successiva.
3. **Imprevisti.** Assenze, ticket urgenti, blocchi, materiali in ritardo: cosa è successo e quante ore è costato.
4. **Controllo della milestone.** Solo progetti e prodotti. Si calcola il margine (capacità rimanente fino alla data del Piano dei SAL meno ore rimanenti, vedi la sezione Capacità e buffer). La milestone è in linea se il margine è almeno metà del buffer di milestone iniziale, a rischio se è tra zero e metà, in ritardo se è sotto zero.
5. **Segnalazioni.** Se la milestone è a rischio o in ritardo serve una riprogrammazione.
6. **Cosa serve dal cliente.** Materiali in scadenza e risposte attese, con le date.

Chi: il responsabile.
Skill: `sprint`, per la nota. `riprogrammazione` se la milestone è a rischio o in ritardo.
Produce: la Nota di sprint, interna e per lavorazione: fatto, non fatto, ore, imprevisti, margine della milestone con i numeri, cosa serve dal cliente, una riga sul prossimo sprint. Non va al cliente.
Si chiude quando: ore, esiti e stato della milestone sono registrati.

### 4. Pianificazione del prossimo sprint

Gli sprint sono dinamici: si pianificano a fine sprint, per il successivo. Milestone, issue e date sono già definite nel Documento tecnico e nel Piano dei SAL. La pianificazione dipende dalla Nota di sprint: si fa il venerdì sera se la nota è pronta, altrimenti il lunedì mattina, e si comunica appena possibile. Chi pianifica garantisce che le tempistiche del Piano dei SAL siano rispettate.

1. Si parte dalle ore realmente disponibili di ogni persona per la lavorazione nel prossimo sprint. Vanno chieste durante lo sprint in corso, per poter chiudere il piano il venerdì: non si riusano quelle teoriche. Una persona che lavora a più lavorazioni divide la sua capacità tra i piani, e il supervisore controlla che la somma non la superi.
2. Si toglie il buffer di sprint, riservato ai ticket urgenti: il 20% della capacità di ogni persona. Se a metà sprint non è stato usato, il responsabile può anticipare issue da BACKLOG a PLANNED con la parte avanzata.
3. Si usano le stime delle issue non completate già rivalutate nella Nota di sprint: la capacità non si corregge sulla storia.
4. Il resto si pianifica per intero, e non sotto la capacità. Si scelgono le issue in quest'ordine: prima quelle tornate dallo sprint precedente, poi quelle che sbloccano altro lavoro (supporto e spike), poi le altre secondo le dipendenze. Non si scelgono issue che attendono un materiale del cliente non ancora arrivato.
5. I ticket non hanno documenti di sprint: si pianificano in ClickUp. Un ticket normale usa prima la capacità delle persone sempre disponibili per i ticket e, se serve, un prestito di ore da un progetto, deciso da chi gestisce il team prima di questo piano: le ore prestate riducono la capacità del progetto e il suo margine. Un ticket a tempo perso entra solo con la capacità che avanza e non usa mai un prestito.
6. Con le issue scelte la milestone deve restare nella data del Piano dei SAL. Se non ci sta, lo si segnala prima di consegnare il piano.
7. Il responsabile conferma la scelta con chi sviluppa. Il supervisore controlla che le stime siano plausibili e che la capacità sia rispettata.
8. Le issue scelte passano allo sprint in ClickUp.

Il primo sprint di una lavorazione non ha una nota precedente: si pianifica a fine documentazione, dopo l'invio del Piano dei SAL.

Differenze per categoria:

- **Ticket.** Entra nello sprint come una issue assegnata al responsabile. Un ticket urgente non aspetta la pianificazione: parte subito, con le ore dal buffer di sprint.
- **Progetto e prodotto.** Le issue si pescano dalla milestone in corso.

Chi: il responsabile, con chi sviluppa. Il supervisore controlla.
Skill: `sprint`, per la pianificazione.
Produce: la List dello sprint in ClickUp con le issue scelte e assegnate, e una riga nella Nota di sprint con l'obiettivo e il rispetto delle date. Nessun documento a parte.
Si chiude quando: ogni persona ha le sue issue, la somma delle ore non supera la capacità al netto del buffer di sprint e il supervisore ha controllato.

### 5. Fine milestone

Solo progetti e prodotti. Quando le story di una milestone sono finite:

1. Il team verifica sullo staging ogni story della milestone sul suo criterio di accettazione, con le issue COMPLETED in ClickUp. Una story che non lo soddisfa non si manda al cliente sperando che vada bene.
2. Il responsabile prepara il Milestone report e il messaggio per la prova.
3. Il cliente prova le story sullo staging, guidato dal Milestone report. Si verifica ciò che è scritto nel Manuale. Una demo in call è facoltativa. Una richiesta nuova non è un difetto e non si accetta: si annota e dopo si tratta come variazione. Una contestazione si decide sul criterio di accettazione.
4. Esito per ogni story: accettata, accettata con difetto non bloccante (con una data di correzione), non accettata per difetto bloccante. Un difetto bloccante si corregge prima dell'accettazione.
5. Il cliente accetta in modo esplicito. Il silenzio non vale come accettazione di una prova, e non c'è un termine che la accetta da sola. Se conferma a voce, vale dopo il riepilogo scritto.
6. La milestone passa ad accettata e il suo stato (da avviare, in corso, consegnata, accettata) si aggiorna nel capitolo Milestone del Documento tecnico. Per i difetti si aprono issue di tipo bug in ClickUp, con la story violata.

Chi: il responsabile.
Skill: `prova-su-staging` per il messaggio al cliente e l'esito, `milestone-report` per il documento al cliente.
Produce: il Milestone report per il cliente, con le story consegnate, come provare sullo staging, l'esito, lo stato della milestone successiva, le date aggiornate e ciò che serve dal cliente.
Si chiude quando: il cliente ha accettato la milestone.

### 6. Uscita dallo sviluppo

Il lavoro passa alla fase successiva del suo piano.

- **Ticket.** Passa al rilascio, che coincide con la chiusura, con una risposta al cliente nel ticket. L'aggiornamento dei documenti segue dopo la chiusura (Piano dei ticket, fase 3).
- **Progetto.** Quando tutte le milestone sono accettate si passa al collaudo finale e al rilascio (Piano di progetto, fase 3, rilascio).
- **Prodotto.** Quando tutte le milestone della release sono accettate si passa al collaudo finale, al piano di lancio e al rilascio (Piano di prodotto).

Chi: il responsabile.
Skill: quelle della fase successiva.
Si chiude quando: tutte le issue del lavoro sono COMPLETED o CANCELLED e, per progetti e prodotti, tutte le milestone sono accettate.

## Capacità e buffer: quando si usa quale

I buffer sono due, con scopi diversi.

- **Buffer di sprint.** Il 20% della capacità di ogni persona in ogni sprint, riservato ai ticket urgenti. Si usa solo per i ticket urgenti entrati nello sprint. Non si usa per le issue dei progetti. Se a metà sprint non è stato usato, il responsabile può anticipare issue da BACKLOG a PLANNED, ma solo con la parte avanzata: è l'unica eccezione alla regola che le issue entrano nello sprint con la pianificazione dello sprint.
- **Buffer di milestone.** Le ore aggiunte a ogni milestone: il 20% delle ore stimate, il 30% con una sola persona. Si usa per le stime sbagliate, le assenze brevi, le urgenze oltre il buffer di sprint e le variazioni piccole. Le variazioni piccole possono consumarne al massimo la metà: oltre il tetto, ogni nuova variazione è trattata come media.

Lo sprint non si pianifica sotto la capacità. Il buffer di milestone è l'unico cuscinetto oltre al buffer di sprint.

**Margine della milestone.** È la misura che dice come sta una milestone. Si calcola a ogni chiusura di sprint:

- **Ore rimanenti.** La somma delle stime delle issue della milestone che non sono COMPLETED, rivalutate da chi sviluppa.
- **Capacità rimanente.** Le ore disponibili di chi lavora alla milestone fino alla data della prova, al netto del buffer di sprint.
- **Margine.** Capacità rimanente meno ore rimanenti. All'inizio il margine è il buffer di milestone.

Stati della milestone:

- **In linea.** Il margine è almeno metà del buffer di milestone iniziale.
- **A rischio.** Il margine è tra zero e metà del buffer iniziale.
- **In ritardo.** Il margine è sotto zero.

Ordine d'uso quando arriva un imprevisto di tempo:

1. Un ticket urgente usa prima il buffer di sprint.
2. Oltre il buffer di sprint, escono dallo sprint le issue meno prioritarie e le ore pesano sul buffer di milestone, cioè riducono il margine.
3. Se la milestone è a rischio si usa la skill `riprogrammazione`. Se nessuna data già comunicata cambia, il cliente non si avvisa e decide il responsabile come gestire la situazione.
4. Se la milestone è in ritardo, le leve sono tre: spostare una story a una milestone successiva, spostare la data, aggiungere ore. Le prime due si decidono con il cliente. Aggiungere ore lo decide chi gestisce il team, con il CEO se serve.
5. Se una data già comunicata al cliente cambia, il cliente è avvisato subito, con la proposta.

Se gli urgenti superano il buffer di sprint per due sprint consecutivi, il buffer di sprint si alza oppure una persona a rotazione viene dedicata ai ticket.

## Ticket urgenti durante lo sviluppo di un progetto

Solo un ticket urgente può togliere persone a un progetto senza preavviso: un ticket normale può solo chiedere ore in prestito, concordate prima della pianificazione dello sprint del progetto. Il ticket urgente segue il percorso d'urgenza del Piano dei ticket: si sceglie la persona che conosce meglio la parte coinvolta, anche se sta lavorando al progetto. La persona mette in pausa la issue in corso: lascia salvato il lavoro, scrive in un commento lo stato in cui si trova e riporta l'issue a PLANNED, perché IN PROGRESS vuol dire che qualcuno ci lavora effettivamente. La issue riparte appena l'urgenza finisce.

- Le ore vanno sul ticket, non sul progetto, così le stime di progetto restano leggibili.
- Le ore pesano prima sul buffer di sprint e, oltre, sul buffer di milestone.
- Al cliente del progetto si comunica solo l'effetto, se una data già comunicata cambia: un ticket urgente di un altro cliente non si racconta.

## Il cliente non risponde

Il progetto e il prodotto non sono mai fermi. Quando manca una risposta o un materiale del cliente:

1. Il responsabile registra cosa manca, da chi dipende e da quando. Un materiale è un task della List "Materiali" in ClickUp, con la data entro cui serve; le issue che ne dipendono sono in attesa di quel task.
2. Invia un sollecito scritto.
3. Sposta nello sprint ciò che si può fare senza quella risposta: le issue senza dipendenze dal materiale mancante.
4. Le parti che dipendono dalla risposta slittano degli stessi giorni, e le nuove date si comunicano subito al cliente.
5. Se non c'è nulla di fattibile, la capacità liberata va ad altri lavori e il lavoro riprende appena la risposta arriva.

Non c'è un termine dopo il quale il lavoro si chiude: il cliente sa già che una risposta tardiva ritarda il lavoro. Un ticket resta sospeso informalmente, senza termini.

## Variazioni durante lo sviluppo

Le regole per riconoscere e categorizzare una variazione sono nelle Regole comuni (sezione Variazioni) e, per la differenza tra modifica e variazione, nel Piano di progetto.

Dopo la conferma del Manuale del prodotto ogni cambiamento chiesto dal cliente è una variazione. Il processo, con la skill `variazione`:

1. La richiesta arriva solo dal responsabile e per iscritto. Una richiesta a voce vale dopo il riepilogo scritto.
2. Si registra nel Registro delle variazioni e riceve una categoria con le tre domande delle Regole comuni, in ordine.
3. Piccola: conferma scritta del cliente, assorbita dal buffer di milestone entro il tetto. Media: si stima l'impatto su ore e date e il cliente lo approva per iscritto prima che si lavori. Grande: torna la Proposta, con una proposta integrativa.
4. Non entra mai nello sprint in corso: diventa una issue di tipo variazione in ClickUp, nel primo sprint utile.
5. Le issue già iniziate e superate passano a CANCELLED e il lavoro svolto resta dovuto e visibile.
6. Una variazione è chiusa solo quando i documenti sono aggiornati: Manuale, capitolo Milestone, Piano dei SAL se cambia una data.

## Dimensione del team

Con una sola persona la daily non serve, la revisione del codice è a campione e fatta da chi è esterno al lavoro, e issue e documenti devono bastare a chi dovesse subentrare. Il buffer di milestone è il 30%.

Con più persone ogni issue è rivista da una seconda persona, e nessuna parte del sistema deve essere conosciuta da una sola. Il buffer di milestone è il 20%.

## Imprevisti durante lo sviluppo

Ogni imprevisto ha una risposta già decisa. Valgono per lo sviluppo di progetti e prodotti. Per i ticket si applicano quelli del Piano dei ticket. Ogni imprevisto si ripercuote sul margine della milestone: dopo ognuno si rifà il controllo della milestone.

**Le persone**

- **Ferie programmate.** Sono già nel calendario e riducono la capacità dello sprint.
- **Ferie chieste a lavoro avviato.** Si valuta l'effetto sul margine della milestone prima di approvarle.
- **Malattia o assenza breve.** Le issue PLANNED meno prioritarie escono dallo sprint e tornano in BACKLOG. Se la persona aveva issue IN PROGRESS, tornano a PLANNED con un commento e le riprende chi può, se serve.
- **Assenza lunga o uscita dal team.** Passaggio di consegne su issue e documenti, e nuova pianificazione della milestone. Chi gestisce il team decide chi subentra.
- **Festività non considerata.** Si corregge il calendario, si ricalcola la capacità e si rifà il controllo della milestone.
- **Nuova persona nel team.** Capacità ridotta nel suo primo sprint.
- **Una persona è chiamata per una garanzia.** Un pacchetto di garanzia su un lavoro pubblicato usa la capacità dei ticket. Se serve chi conosce la parte, chi gestisce il team decide un prestito di ore e le ore pesano sul margine della milestone del progetto da cui la persona è presa (skill `pacchetto-di-garanzia`).
- **Urgenze oltre il buffer di sprint.** Vale la sezione sui buffer.

In questi casi il cliente viene avvisato solo se cambia una data già comunicata.

**I tempi**

- **Sprint non completato.** Le issue non COMPLETED passano allo sprint successivo con la priorità, lo sprint non si allunga. Il cliente lo legge nello stato della milestone del Milestone report.
- **Stime sbagliate.** A ogni chiusura di sprint chi sviluppa rivaluta le ore delle issue non COMPLETED: la rivalutazione alimenta il margine della milestone, che segnala il problema.
- **Milestone a rischio o in ritardo.** Vale la sezione sui buffer.
- **Blocco tecnico o di un servizio esterno.** Una issue di tipo spike a tempo limitato, poi una nuova stima.

**Il cliente**

- **Ritarda materiali o risposte.** Vale la sezione "Il cliente non risponde".
- **Chiede qualcosa a voce o fuori dal canale previsto.** Vale solo dopo essere stato messo per iscritto e registrato. Se non è previsto dai documenti è una variazione.
- **Contesta una story alla consegna.** Decide il criterio di accettazione del Manuale del prodotto.
- **Non accetta la prova.** I difetti bloccanti si correggono e la prova si ripete.

## Documenti e skill dello sviluppo

Documenti:

- **Documento tecnico**, capitolo Milestone (progetti e prodotti). Interno. La fonte delle milestone; le issue stanno in ClickUp.
- **Scheda di intervento** (ticket). Interna. La fonte della issue del ticket.
- **Nota di sprint.** Interna, una per lavorazione, a ogni fine sprint. Una pagina: chi la apre deve capire lo stato in un minuto. La pianificazione dello sprint successivo non è un documento: è la List in ClickUp.
- **ClickUp.** Lo strumento dove vivono le issue e il loro stato.
- **Registro delle variazioni.** Interno, uno per lavorazione, dalla conferma del Manuale.
- **Milestone report.** Per il cliente, a ogni milestone (progetti e prodotti): story, criteri, come provare, esito.
- **Piano dei SAL.** Per il cliente, inviato prima dello sviluppo e aggiornato se una data cambia.

Skill:

- `sprint`: Nota di sprint a fine sprint, poi pianificazione del successivo in ClickUp.
- `riprogrammazione`: quando una milestone è a rischio o in ritardo, o un imprevisto tocca le date.
- `variazione`: per ogni cambiamento chiesto dopo la conferma del Manuale.
- `prova-su-staging`: messaggio per la prova del cliente e verbale di accettazione.
- `revisione-codice`: la revisione di ogni issue prima di chiuderla.
- `milestone-report`: il documento per il cliente a ogni milestone.
- `piano-delle-milestone`: se milestone o issue cambiano, per aggiornare il capitolo del Documento tecnico e rigenerare il Piano dei SAL.
- `interpretazione-conversazioni`: per ogni conversazione con il cliente.

## Decisioni proprie di questo documento

Nessuna decisione aperta.
