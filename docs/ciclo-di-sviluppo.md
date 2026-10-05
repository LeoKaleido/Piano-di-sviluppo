# Ciclo di sviluppo

Data: 2026-10-05

Questo documento descrive la parte di sviluppo di una lavorazione: sprint, milestone, issue, capacità, buffer, demo e imprevisti. Si rilegge durante lo sviluppo. Vale per i ticket, i progetti e i prodotti: il flusso è unico e si dirama dove le tre categorie differiscono. Le parti che valgono per una sola categoria sono segnate con il suo nome.

Le regole comuni a ogni lavoro (glossario, categorie, contatti, documenti, date, variazioni, garanzia) sono nelle Regole comuni. Le fasi prima e dopo lo sviluppo sono nei piani di ogni categoria: Piano dei ticket, Piano di progetto, Piano di prodotto.

Un diagramma di flusso dettagliato è in `docs/diagramma-ciclo-di-sviluppo.html`.

## Il flusso in breve

1. **Ingresso nello sviluppo.** Si verifica che ciò che serve sia pronto.
2. **Pianificazione dello sprint.** Si calcola la capacità e si scelgono le issue.
3. **Lavoro.** Si sviluppa, con code review e controllo sulla DoD.
4. **Chiusura dello sprint.** Si registrano le ore e si controlla la milestone.
5. **Fine milestone.** Demo sullo staging e accettazione. Solo progetti e prodotti.
6. **Uscita dallo sviluppo.** Il lavoro passa alla fase successiva del suo piano.

Il ciclo dei punti 2, 3 e 4 si ripete a ogni sprint. Il punto 5 si ripete a ogni milestone.

## Le parti del lavoro

**Issue.** È l'unità di lavoro. Ha un codice fisso (I1, I2), un titolo, un tipo, una descrizione, le dipendenze, una stima in ore, una DoD e uno stato. Una issue stimata oltre le 16 ore si divide. Un ticket entra nello sviluppo come una issue; se la sua stima supera le 16 ore si divide in più issue dello stesso ticket.

I tipi di issue:

- **Story.** Realizza una story del Manuale del prodotto e ne cita il codice.
- **Supporto.** Sblocca altre issue: ambienti, infrastruttura, struttura dei dati. Cita le issue che sblocca.
- **Spike.** Tempo limitato per sciogliere un'incognita prima di stimare. Cita la domanda a cui risponde.
- **Bug.** Correzione di un comportamento diverso dal Manuale. Cita la story violata.
- **Variazione.** Lavoro nato da una variazione approvata. Cita la voce del Registro delle variazioni.

Gli stati di una issue: da fare, in corso, finita, superata. Una issue già iniziata e superata da una variazione non si cancella: passa a superata, perché il lavoro svolto deve restare visibile.

**DoD (Definition of Done).** Le condizioni verificabili che chiudono una issue, ognuna con un sì o un no. Per le story derivano dal criterio di accettazione della story. Quando al lavoro partecipa più di una persona comprendono la code review.

**Milestone.** Solo progetti e prodotti. Un blocco di lavoro che consegna story intere e si può dimostrare. Verso il cliente si chiama SAL. Ogni milestone dura da 4 a 8 settimane.

- Una story appartiene a una sola milestone: il cliente accetta story, non pezzi di lavoro.
- Le parti più incerte o rischiose vanno nelle prime milestone.
- Le dipendenze decidono l'ordine: nessuna issue precede quelle da cui dipende. I materiali del cliente sono dipendenze.
- In un prodotto la prima milestone è quella delle fondamenta: infrastruttura, ambienti, parti mai affrontate.

Le milestone e le issue di un progetto o di un prodotto stanno nel capitolo Milestone e issue del Documento tecnico. Un ticket non ha milestone.

**Sprint.** È unico per tutta l'azienda e dura due settimane: stesse date per tutti i lavori di tutti i clienti. Una persona che lavora su più lavori ha un solo sprint, in cui la sua capacità viene divisa. Le milestone dividono il lavoro, gli sprint dividono il tempo.

**Capacità.** Le ore realmente disponibili di una persona in uno sprint, tolte ferie, festività e chiusure.

**Buffer di sprint.** La parte di capacità riservata ai ticket urgenti: il 20% della capacità dello sprint.

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
Produce: niente di nuovo.
Si chiude quando: tutto ciò che serve è pronto. Se manca qualcosa, non si inizia: si torna alla fase precedente del piano.

### 2. Pianificazione dello sprint

Si pianifica quando lo sprint inizia, non prima.

1. Si parte dalle ore realmente disponibili di ogni persona nello sprint. Vanno chieste a ogni sprint: non si riusano quelle teoriche.
2. Si toglie il buffer di sprint, riservato ai ticket urgenti. Se a metà sprint non è stato usato, si anticipa altro lavoro.
3. Dal secondo sprint si confronta la capacità con le ore realmente completate negli sprint precedenti. Se il team ha completato sistematicamente meno del pianificato, si pianifica su quel valore e non su quello teorico.
4. Il resto si pianifica per intero, e non sotto la capacità. Si scelgono le issue in quest'ordine: prima quelle tornate dallo sprint precedente, poi quelle che sbloccano altro lavoro (supporto e spike), poi le altre secondo le dipendenze. Non si scelgono issue che attendono un materiale del cliente non ancora arrivato.
5. I ticket normali occupano capacità secondo la stima in ore della loro Scheda di intervento. I ticket a tempo perso entrano solo con la capacità che avanza. Un ticket normale o a tempo perso non toglie nessuno a un progetto.
6. Se l'obiettivo dello sprint è fatto in prevalenza di issue di supporto, si dichiara uno sprint di supporto: il cliente saprà che non vedrà story nuove.
7. Il responsabile conferma la proposta di sprint con chi sviluppa.

Differenze per categoria:

- **Ticket.** Entra nello sprint come una issue assegnata al responsabile. Un ticket urgente non aspetta la pianificazione: parte subito, con le ore dal buffer di sprint.
- **Progetto e prodotto.** Le issue si pescano dalla milestone in corso.

Chi: il responsabile, con chi sviluppa.
Skill: `sprint`, in apertura.
Produce: il Documento di sprint, interno e unico per tutta l'azienda: sprint, obiettivo, capacità, issue scelte con stima e assegnatario.
Si chiude quando: ogni persona ha le sue issue e la somma delle ore non supera la capacità al netto del buffer di sprint.

### 3. Lavoro

Si sviluppano le issue dello sprint.

- Una daily, breve e regolare. Un blocco si segnala il giorno stesso.
- Ogni issue si chiude solo quando soddisfa la sua DoD, code review compresa quando la prevede.
- Una issue che scopre un'incognita non risolvibile in tempo breve genera una issue di tipo spike a tempo limitato, poi una nuova stima.
- Una issue che si rivela molto più grande della stima si ferma e si avvisa il responsabile: la stima si rifà, e una issue oltre le 16 ore si divide.
- Una variazione non entra mai nello sprint in corso: entra in uno sprint successivo, dopo l'approvazione.

Differenze per categoria:

- **Ticket.** Se si toccano parti diverse da quelle previste, si corregge la voce "Su cosa intervenire" della Scheda di intervento. Se il lavoro supera la stima, il responsabile avvisa chi ha analizzato, che aggiorna la stima. Se supera le 2 settimane si ferma e si riclassifica come progetto.
- **Progetto e prodotto.** Le story si realizzano nell'ordine delle dipendenze della milestone in corso.

Chi: chi sviluppa.
Skill: nessuna per lo sviluppo. `variazione` per un cambiamento chiesto dal cliente. `riprogrammazione` per un imprevisto di tempo. `interpretazione-conversazioni` per ogni conversazione con il cliente.
Produce: issue finite, con le DoD soddisfatte.
Si chiude quando: a fine sprint, vedi il passo 4.

### 4. Chiusura dello sprint

1. **Esito delle issue.** Finite, non finite. Le issue non finite tornano nella milestone (o in coda, per un ticket): lo sprint non si allunga.
2. **Ore completate.** La somma delle stime delle issue finite. È il dato che guida la pianificazione successiva.
3. **Imprevisti.** Assenze, ticket urgenti, blocchi, materiali in ritardo: cosa è successo e quante ore è costato.
4. **Controllo della milestone.** Solo progetti e prodotti. Si confrontano le ore rimanenti con la capacità rimanente prima della data, buffer di milestone compreso. La milestone è in linea se ci stanno, a rischio se ci stanno solo consumando il buffer di milestone, in ritardo se non ci stanno.
5. **Segnalazioni.** Se la milestone è a rischio o in ritardo, oppure se per due sprint consecutivi le ore completate sono inferiori alle pianificate, serve una riprogrammazione.
6. Si scrive lo Sprint report.

Chi: il responsabile.
Skill: `sprint`, in chiusura. `riprogrammazione` se la milestone è a rischio o in ritardo.
Produce: il Documento di sprint completato e lo Sprint report, interno: fatto, prossimo, stato della milestone, cosa serve dal cliente. Non va al cliente.
Si chiude quando: ore, esiti e stato della milestone sono registrati.

### 5. Fine milestone

Solo progetti e prodotti. Quando le story di una milestone sono finite:

1. Il team verifica sullo staging ogni story della milestone sul suo criterio di accettazione. Una story che non lo soddisfa non si porta in demo sperando che vada bene.
2. Il responsabile prepara la scaletta della demo e il Milestone report.
3. Demo con il cliente sullo staging, story per story. Si verifica ciò che è scritto nel Manuale. Una richiesta nuova non si discute e non si accetta in demo: si annota e dopo si tratta come variazione. Una contestazione si decide sul criterio di accettazione.
4. Esito per ogni story: accettata, accettata con difetto non bloccante (con una data di correzione), non accettata per difetto bloccante. Un difetto bloccante si corregge prima dell'accettazione.
5. Il cliente accetta in modo esplicito. Il silenzio non vale come accettazione di una demo. Se conferma a voce, vale dopo il riepilogo scritto.
6. La milestone passa ad accettata. Per i difetti si aprono issue di tipo bug, con la story violata.

Chi: il responsabile.
Skill: `demo` per la scaletta e l'esito, `milestone-report` per il documento al cliente.
Produce: il Milestone report per il cliente, con le story consegnate, l'esito della demo, lo stato della milestone successiva, le date aggiornate e ciò che serve dal cliente.
Si chiude quando: il cliente ha accettato la milestone.

### 6. Uscita dallo sviluppo

Il lavoro passa alla fase successiva del suo piano.

- **Ticket.** Passa al resoconto di intervento e all'aggiornamento dei documenti, poi al rilascio, che coincide con la chiusura (Piano dei ticket, fasi 5 e 6).
- **Progetto.** Quando tutte le milestone sono accettate si passa al collaudo finale e al rilascio (Piano di progetto, fase 7).
- **Prodotto.** Quando tutte le milestone della release sono accettate si passa al collaudo finale, al piano di lancio e al rilascio (Piano di prodotto).

Chi: il responsabile.
Skill: quelle della fase successiva.
Si chiude quando: tutte le issue del lavoro sono finite o superate e, per progetti e prodotti, tutte le milestone sono accettate.

## Capacità e buffer: quando si usa quale

I buffer sono due, con scopi diversi.

- **Buffer di sprint.** Si usa solo per i ticket urgenti entrati nello sprint. Non si usa per le issue dei progetti.
- **Buffer di milestone.** Si usa per le stime sbagliate, le assenze brevi, le urgenze oltre il buffer di sprint e le variazioni piccole. Le variazioni piccole possono consumarne al massimo la metà: oltre il tetto, ogni nuova variazione è trattata come media.

Lo sprint non si pianifica sotto la capacità. Il buffer di milestone è l'unico cuscinetto oltre al buffer di sprint.

Ordine d'uso quando arriva un imprevisto di tempo:

1. Un ticket urgente usa prima il buffer di sprint.
2. Oltre il buffer di sprint, escono dallo sprint le issue meno prioritarie e le ore pesano sul buffer di milestone.
3. Se il buffer di milestone si sta consumando, la milestone è a rischio: si usa la skill `riprogrammazione`. Il cliente si avvisa solo se il responsabile lo decide.
4. Se il buffer di milestone è esaurito, la milestone è in ritardo. Le leve sono tre: spostare una story a una milestone successiva, spostare la data, aggiungere ore. Le prime due si decidono con il cliente, la terza internamente. Al cliente va una comunicazione immediata con la proposta.

Se gli urgenti superano il buffer di sprint per due sprint consecutivi, il buffer di sprint si alza oppure una persona a rotazione viene dedicata ai ticket.

## Ticket urgenti durante lo sviluppo di un progetto

Solo un ticket urgente può togliere persone a un progetto. Il ticket urgente segue il percorso d'urgenza del Piano dei ticket: si sceglie la persona che conosce meglio la parte coinvolta, anche se sta lavorando al progetto, e la persona mette in pausa la issue in corso lasciando salvato il lavoro e una nota sullo stato.

- Le ore vanno sul ticket, non sul progetto, così le stime di progetto restano leggibili.
- Le ore pesano prima sul buffer di sprint e, oltre, sul buffer di milestone.
- Al cliente del progetto si comunica solo l'effetto, se una data cambia: un ticket urgente di un altro cliente non si racconta.

## Il cliente non risponde

Il progetto e il prodotto non sono mai fermi. Quando manca una risposta o un materiale del cliente:

1. Il responsabile registra cosa manca, da chi dipende e da quando, nella documentazione del lavoro.
2. Invia un sollecito scritto.
3. Sposta nello sprint ciò che si può fare senza quella risposta: le issue senza dipendenze dal materiale mancante.
4. Le parti che dipendono dalla risposta slittano degli stessi giorni, e le nuove date si comunicano al cliente nel Milestone report.
5. Se non c'è nulla di fattibile, la capacità liberata va ad altri lavori e il lavoro riprende appena la risposta arriva.

Non c'è un termine dopo il quale il lavoro si chiude: il cliente sa già che una risposta tardiva ritarda il lavoro. Un ticket resta sospeso informalmente, senza termini.

## Variazioni durante lo sviluppo

Le regole per riconoscere e categorizzare una variazione sono nelle Regole comuni (sezione Variazioni) e, per la differenza tra modifica e variazione, nel Piano di progetto. Durante lo sviluppo si ricorda:

- Dopo la conferma del Manuale, ogni cambiamento chiesto dal cliente è una variazione. Si registra nel Registro delle variazioni e si categorizza (skill `variazione`).
- Una variazione non entra mai nello sprint in corso.
- Le issue già iniziate e superate passano a superata e il lavoro svolto resta dovuto e visibile.
- Una variazione è chiusa solo quando i documenti sono aggiornati.
- Se il cliente chiede qualcosa a voce o fuori dal canale previsto, vale solo dopo essere stato messo per iscritto e registrato.

## Dimensione del team

Con una sola persona la daily non serve, la code review è a campione e fatta da chi è esterno al lavoro, e issue e documenti devono bastare a chi dovesse subentrare. Il buffer di milestone è il 30%.

Con più persone ogni issue è rivista da una seconda persona, e nessuna parte del sistema deve essere conosciuta da una sola. Il buffer di milestone è il 20%.

## Imprevisti durante lo sviluppo

Ogni imprevisto ha una risposta già decisa. Valgono per lo sviluppo di progetti e prodotti. Per i ticket si applicano quelli del Piano dei ticket.

**Le persone**

- **Ferie programmate.** Sono già nel calendario e riducono la capacità dello sprint.
- **Ferie chieste a lavoro avviato.** Si valuta l'effetto sulla milestone prima di approvarle.
- **Malattia o assenza breve.** Escono dallo sprint le issue meno prioritarie, e si rifà il controllo della milestone.
- **Assenza lunga o uscita dal team.** Passaggio di consegne su issue e documenti, e nuova pianificazione della milestone.
- **Festività non considerata.** Si corregge il calendario, si ricalcola la capacità e si rifà il controllo della milestone.
- **Nuova persona nel team.** Capacità ridotta nel suo primo sprint.
- **Urgenze oltre il buffer di sprint.** Vale la sezione sui buffer.

In questi casi il cliente viene avvisato solo se cambia una data.

**I tempi**

- **Sprint non completato.** Le issue tornano nella milestone, lo sprint non si allunga. Il cliente lo legge nello stato della milestone del Milestone report.
- **Stime sbagliate.** Dopo due sprint sotto le attese si ristimano le issue rimanenti.
- **Milestone a rischio o in ritardo.** Vale la sezione sui buffer.
- **Blocco tecnico o di un servizio esterno.** Una issue di tipo spike a tempo limitato, poi una nuova stima.

**Il cliente**

- **Ritarda materiali o risposte.** Vale la sezione "Il cliente non risponde".
- **Chiede qualcosa a voce o fuori dal canale previsto.** Vale solo dopo essere stato messo per iscritto e registrato. Se non è previsto dai documenti è una variazione.
- **Contesta una story alla consegna.** Decide il criterio di accettazione del Manuale del prodotto.
- **Non accetta la demo.** I difetti bloccanti si correggono e si ripete la demo.

## Documenti e skill dello sviluppo

Documenti:

- **Documento tecnico**, capitolo Milestone e issue (progetti e prodotti). Interno. La fonte delle issue.
- **Scheda di intervento** (ticket). Interna. La fonte della issue del ticket.
- **Documento di sprint.** Interno, unico per tutta l'azienda. Una pagina: chi lo apre deve capire lo stato in un minuto.
- **Sprint report.** Interno, a ogni fine sprint.
- **Registro delle variazioni.** Interno, dalla conferma del Manuale.
- **Milestone report.** Per il cliente, a ogni milestone, insieme alla demo (progetti e prodotti).
- **Piano dei SAL.** Per il cliente, inviato prima dello sviluppo e aggiornato se una data cambia.

Skill:

- `sprint`: apertura e chiusura di ogni sprint.
- `riprogrammazione`: quando una milestone è a rischio o in ritardo, o un imprevisto tocca le date.
- `variazione`: per ogni cambiamento chiesto dopo la conferma del Manuale.
- `demo`: scaletta della demo e verbale di accettazione.
- `milestone-report`: il documento per il cliente a ogni milestone.
- `piano-delle-milestone`: se milestone o issue cambiano, per aggiornare il capitolo del Documento tecnico e rigenerare il Piano dei SAL.
- `interpretazione-conversazioni`: per ogni conversazione con il cliente.

## Decisioni proprie di questo documento

Nessuna decisione aperta.
