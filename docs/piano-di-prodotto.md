# Piano di prodotto

Data: 2026-10-06

Un prodotto è un sistema nuovo, costruito da zero e consegnato in più release. Come il progetto, ha tre fasi: kickoff, sviluppo e rilascio (il lancio), ognuna con una condizione di chiusura verificabile. Questo piano governa la prima release: le successive sono progetti. Il cliente conferma tre volte: la Proposta di soluzione, il prototipo con i mockup, il Manuale del prodotto. La conferma può arrivare anche a voce, in una riunione, purché segua un riepilogo scritto. Il prodotto è l'unica categoria che lavora a budget e non a consumo: la Proposta di soluzione contiene la stima economica di ogni release, che il cliente approva insieme alla Proposta. La durata stimata resta un impegno e la stima conta.

Questo piano contiene solo ciò che è proprio dei prodotti. Le regole valide per ogni lavoro (glossario, categorie, verifica preliminare, contatti, documenti, date, variazioni, garanzia, knowledge base) sono nelle Regole comuni. Lo sviluppo (sprint, milestone, issue, buffer, imprevisti) è nel Ciclo di sviluppo. Tutto ciò che il prodotto ha in comune con il progetto (stima a occhio e tempo del kickoff, conversazioni, modifiche e variazioni, rilascio, imprevisti del kickoff) è nel Piano di progetto, e qui non si ripete. È il riferimento per tutto il team.

## Quando si applica

Una richiesta è un prodotto quando riguarda un sistema che non esiste ancora. È il caso più raro e il più lungo, da 6 mesi in su.

Rispetto al progetto cambiano queste cose:

- **Non c'è un sistema esistente.** Non si indaga il codice: si indaga come lavora oggi il cliente. La verifica preliminare guarda solo i lavori aperti e i sistemi che il cliente ha già.
- **L'incertezza è più alta.** Il cliente non sa cosa vuole finché non lo vede, quindi un prototipo viene approvato prima di scrivere il dettaglio.
- **È troppo grande per un'unica consegna.** Il prodotto è diviso in release. La prima contiene il minimo utile, le successive si gestiscono come progetti.
- **Non si assegna l'urgenza.** Riguarda sempre un sistema che non esiste ancora, quindi non può essere urgente né degradare una funzione esistente.

## Chi fa cosa

- **Chi analizza** legge la richiesta su osTicket, vede che è un prodotto e designa il responsabile, con chi gestisce il team e, se serve, con il CEO.
- **Il responsabile** è il product lead. Guida il prodotto dalla valutazione della richiesta alla chiusura del lancio, scrive i documenti con le skill e tiene i contatti con il cliente. La prima release è il suo perimetro.
- **Chi sviluppa** è il team che realizza le issue. Chi realizza prototipo e direzione grafica si decide caso per caso.
- **L'incaricato della pubblicazione** segue la messa in produzione.

Il responsabile è il product lead disponibile in quel momento e più adatto al prodotto. Se nessuno lo è, si decide con chi gestisce il team e, se serve, con il CEO.

## Il flusso del prodotto

Non si passa alla fase successiva finché la condizione di chiusura non è soddisfatta. Per ogni fase sono indicati chi la esegue, le skill da usare, i documenti che produce e quando si chiude.

1. **Kickoff**. Dalla richiesta su osTicket fino alla documentazione pronta per lo sviluppo. Si divide in cinque sottofasi. Il tempo del kickoff si fissa all'inizio della sottofase 1.1, come nel progetto: il 10% di una stima a occhio della durata, interna e fatta in una decina di minuti. Dentro quel tempo il team fa la valutazione, la stima precisa e la prima versione della Proposta. Allo scadere la prima versione si invia comunque, con le incognite rimaste dichiarate, e ogni incognita diventa una issue di tipo spike nella prima milestone. Il tempo non limita l'attesa del cliente.
   1. **Valutazione**. Il cliente apre la richiesta su osTicket, e di rado indica una scadenza: se c'è, il responsabile dice subito se è fattibile. Chi analizza non assegna l'urgenza e designa il responsabile. Appena il prodotto è assegnato si può rispondere al cliente per presa visione, senza obbligo. Il responsabile esegue la verifica preliminare sui soli lavori aperti e sui sistemi che il cliente ha già, conferma la categoria, incontra il cliente per capire il bisogno e sapere chi decide (il referente), poi analizza il contesto: come lavora oggi il cliente, chi userà il prodotto, con quali sistemi dovrà dialogare.
      - Chi: chi analizza per l'assegnazione, poi il responsabile.
      - Skill: `kickoff`, `interpretazione-conversazioni`.
      - Produce: lo Stato di partenza, che descrive il contesto al posto del sistema esistente e in testa porta le decisioni dell'analisi (categoria, stima a occhio, responsabile, scadenza, domande). Le conversazioni (audio, trascrizione, sintesi e riepilogo) vanno nella cartella `source`.
      - Si chiude quando: la categoria è confermata, il referente è noto, ogni punto della richiesta ha un giudizio di fattibilità e le incognite rimaste sono elencate.
   2. **Stima**. Si ricava la stima precisa della durata, per release, dalla richiesta e dall'analisi del contesto, insieme ai tempi dei progetti già fatti letti nei loro Report di progetto. È la stima che compare nella Proposta, con la finestra di rilascio indicativa di ogni release, in mesi e a partire da un mese di avvio ipotizzato. Dalla durata di ogni release, con le tariffe dell'azienda (gestite fuori da questi piani), si ricava la stima economica di ogni release: il budget.
      - Chi: il responsabile.
      - Skill: `kickoff`.
      - Produce: la stima di durata e la stima economica per release, con affidabilità e fattori, nello Stato di partenza e nella Proposta.
      - Si chiude quando: la stima precisa di durata e la stima economica ci sono.
   3. **Proposta**. Il responsabile scrive la Proposta di soluzione con la divisione in release, la stima di durata, la stima economica (il budget di ogni release) e i wireframe delle schermate principali. Si scambia con il cliente senza limite di giri, e ogni giro produce una nuova versione numerata con l'elenco di ciò che è cambiato. La versione confermata si chiama semplicemente Proposta di soluzione, senza numero di versione.
      - Chi: il responsabile.
      - Skill: `proposta-di-soluzione`; `wireframe-e-prototipo` per i wireframe; a conferma avvenuta `allineamento-documenti`. Per le conversazioni, `interpretazione-conversazioni`.
      - Produce: la Proposta di soluzione con versioni numerate, con la stima economica di ogni release, e i wireframe; il riepilogo scritto della conferma. Le conversazioni con il cliente vanno nella cartella `source`.
      - Si chiude quando: il cliente conferma una versione, anche a voce, con la divisione in release, il budget di ogni release e i wireframe, e il responsabile invia il riepilogo scritto; non restano domande aperte; l'allineamento è fatto.
   4. **Prototipo e design**. Si costruisce il prototipo navigabile e si definisce la direzione grafica con i mockup. Il cliente li prova in sessioni guidate.
      - Chi: il responsabile; chi realizza prototipo e mockup.
      - Skill: `wireframe-e-prototipo`, `mockup`, `interpretazione-conversazioni`.
      - Produce: il prototipo e i mockup in `design` (la copia in PDF che fa fede); il riepilogo scritto dell'approvazione è un messaggio in `source`.
      - Si chiude quando: il cliente approva prototipo e mockup, anche a voce, e il responsabile invia il riepilogo scritto dell'approvazione.
   5. **Documentazione**. A prototipo e mockup approvati si scrivono in ordine, ognuno a partire dal precedente: il Manuale del prodotto, che il cliente conferma; il Documento tecnico con il capitolo Piano delle milestone, in cui la prima milestone è quella delle fondamenta; il Piano dei SAL. Le issue, con le stime, si creano in ClickUp. Le incognite rimaste dall'analisi del contesto diventano issue di tipo spike nella prima milestone. Con le issue la durata si stima di nuovo, e appena si ha la stima vera si invia al cliente il Piano dei SAL.
      - Chi: il responsabile, con chi sviluppa per il Documento tecnico.
      - Skill: `manuale-del-prodotto`; `documento-tecnico` e `piano-delle-milestone`. Per le conversazioni, `interpretazione-conversazioni`.
      - Produce: il Manuale del prodotto confermato, il riepilogo scritto della conferma, il Documento tecnico con il Piano delle milestone, le issue in ClickUp, il Piano dei SAL (estratto dal Piano delle milestone, in tabelle).
      - Si chiude quando: il cliente ha confermato il Manuale, ogni story è coperta da issue stimate, ogni milestone ha il suo buffer e la sua data, e il Piano dei SAL è inviato. Si pianifica il primo sprint.
2. **Sviluppo**. Come nel progetto: sprint dinamici, Nota di sprint a ogni fine sprint e pianificazione del successivo in ClickUp. La prima milestone è quella delle fondamenta. A ogni milestone si fa con il cliente una sessione dal vivo di user acceptance test (UAT) sullo staging, annunciata da un messaggio con le story e i criteri: il team presenta, il cliente prova e accetta in modo esplicito. Valgono la sezione "Modifiche e variazioni" del Piano di progetto, le Regole comuni e il Ciclo di sviluppo.
   - Chi: il responsabile guida, il team sviluppa.
   - Skill: `sprint`, `history-and-decision` (variazioni, riprogrammazioni), `prova-su-staging`, `milestone-report`, `revisione-codice`. Per le conversazioni, `interpretazione-conversazioni`.
   - Produce: la Nota di sprint, History and decision, il Milestone report interno di ogni milestone; i messaggi al cliente (inviti alla prova, comunicazioni) in `source`.
   - Si chiude quando: tutte le milestone della prima release sono accettate.
3. **Rilascio**, cioè il lancio. Dal prodotto completo sullo staging alla messa in produzione e alla chiusura. Quattro sottofasi, come nel progetto, con in più ciò che serve per iniziare a usare un sistema che nessuno ha ancora usato (vedi la sezione Lancio).
   1. **Collaudo**. Collaudo finale sullo staging: i percorsi completi che attraversano più milestone, le integrazioni, i dati reali o una copia fedele. Poi la prova finale del cliente sull'insieme, dal vivo con il team (UAT), con accettazione esplicita.
      - Chi: il responsabile.
      - Skill: `collaudo-e-rilascio`, `prova-su-staging`.
      - Produce: la checklist del collaudo (in ClickUp) e l'esito della prova finale, registrato in History and decision.
      - Si chiude quando: il cliente ha accettato in modo esplicito.
   2. **Preparazione**. Si scrive il Piano di lancio, che per il lancio è il piano di rilascio concordato con il cliente, e lo approva il referente. Si caricano i dati iniziali che il cliente ha consegnato puliti, e il cliente li controlla. Gli utilizzatori provano il prodotto in formazione. Il Piano di lancio è il piano di rilascio per il cliente; i passi tecnici del lancio e le sue particolarità sono una voce di `history-and-decision.md`, che l'incaricato della pubblicazione legge. Il capitolo Pubblicazione del Documento tecnico, che per un prodotto nasce con il lancio, si scrive alla chiusura. L'incaricato legge la voce di History and decision e il Piano di lancio prima di pubblicare, di norma il lunedì.
      - Chi: il responsabile; l'incaricato della pubblicazione per la lettura.
      - Skill: `piano-di-lancio`, `collaudo-e-rilascio`.
      - Produce: il Piano di lancio (per il cliente, PDF nella radice) e, in `history-and-decision.md`, i passi tecnici del lancio e le sue particolarità.
      - Si chiude quando: il referente ha approvato il Piano di lancio, i dati iniziali sono caricati e controllati, la formazione è fatta, i passi tecnici del lancio sono scritti, e non mancano testi legali, domini o account.
   3. **Pubblicazione**. L'incaricato della pubblicazione pubblica seguendo i passi tecnici del lancio e il Piano di lancio. Si parte con un gruppo ristretto di utilizzatori, poi si apre a tutti. Se qualcosa fallisce si torna alla situazione precedente, come previsto dal Piano di lancio, con una nuova data e un avviso immediato al cliente.
      - Chi: l'incaricato della pubblicazione; il responsabile per gli avvisi al cliente.
      - Skill: nessuna.
      - Produce: l'avviso al cliente (messaggio in `source`) e una voce in History and decision.
      - Si chiude quando: il prodotto è in produzione per tutti gli utilizzatori, le verifiche sono superate e il cliente è avvisato. Da qui decorre la garanzia, e con essa l'assistenza rafforzata.
   4. **Chiusura**. Si aggiornano i documenti con ciò che è stato realmente fatto: Manuale del prodotto e Documento tecnico (che alla chiusura riceve il capitolo Pubblicazione, con le regole introdotte e le particolarità del lancio). Si scrive il Report di progetto. Il prodotto passa a regime.
      - Chi: il responsabile.
      - Skill: `allineamento-documenti`, con `manuale-del-prodotto` e `documento-tecnico`; `report-di-progetto`.
      - Produce: i documenti aggiornati e il Report di progetto in `log`.
      - Si chiude quando: i documenti sono aggiornati e il Report di progetto è scritto. La prima release è chiusa.

Le date dei SAL si calcolano da una data di avvio dichiarata, come nel progetto. La garanzia decorre dalla messa in produzione.

## Passaggio a regime

Dopo la chiusura la prima release è un sistema esistente. Le richieste arrivano come ticket su osTicket e diventano lavorazioni minori, le release successive progetti, e si gestiscono con il Piano delle lavorazioni minori e il Piano di progetto. Manuale del prodotto e Documento tecnico sono la loro base. Le segnalazioni durante la garanzia, compresa l'assistenza rafforzata, si trattano con la skill `history-and-decision`: sono un imprevisto di capacità, usano la capacità delle lavorazioni minori con un prestito di ore se serve chi conosce la parte, e si tracciano senza riserva. A fine periodo si compila la sezione sulla garanzia del Report di progetto.

## Release

Una release è una parte del prodotto che ha valore da sola. "Rilascio" indica solo la messa in produzione.

- **Prima release.** Contiene il minimo con cui gli utilizzatori possono lavorare davvero. Una story vi entra solo se senza di essa il prodotto non è utilizzabile.
- **Release successive.** Ognuna è un progetto a sé, gestito con il Piano di progetto a partire dall'indagine sull'esistente, sul prodotto ormai in uso.

La divisione in release si decide nella Proposta di soluzione e il cliente la conferma nella sottofase 1.3. Spostare una story da una release all'altra dopo la conferma del Manuale è una variazione media.

## Documenti propri del prodotto

I documenti sono quelli del progetto (elencati nel Piano di progetto), con queste differenze:

- **Stato di partenza** (sottofase 1.1). Non è un documento: è una voce di `history-and-decision.md`. Descrive come lavora oggi il cliente, gli utilizzatori, i sistemi esterni, i vincoli e le incognite, al posto del sistema esistente.
- **Proposta di soluzione** (sottofasi 1.3). Aggiunge la divisione in release e la stima per release.
- **Prototipo e mockup** (sottofase 1.4), per il cliente, in `design`. Approvati, con riepilogo scritto, prima del Manuale.
- **Manuale del prodotto** (sottofase 1.5). Nasce con il prodotto. Dettaglia per intero le story della prima release e descrive le release successive solo a livello di funzionalità.
- **Documento tecnico** (sottofase 1.5). Nasce con il prodotto. Comprende anche infrastruttura, ambienti, sicurezza e backup, e il Piano delle milestone con le lavorazioni di ogni milestone.
- **Capitolo Pubblicazione** (rilascio, chiusura). Nasce alla chiusura, dentro il Documento tecnico.
- **Piano di lancio** (rilascio, preparazione), per il cliente. Data, dati da caricare, formazione, apertura graduale agli utilizzatori, assistenza rafforzata, ritorno alla situazione precedente, cosa serve dal cliente. Richiede l'approvazione del referente.

Ai materiali tipici del cliente si aggiungono dati da importare, domini e account dei servizi, testi legali su privacy e condizioni d'uso. Domini e account sono intestati al cliente fin dall'inizio.

## Contatti con il cliente

Ai momenti fissi del progetto (elencati nel Piano di progetto) si aggiungono l'analisi del contesto, le sessioni sul prototipo e il lancio; il primo confronto diventa qualifica e primo confronto. Le regole di ogni contatto sono nelle Regole comuni.

- **Qualifica e primo confronto** (sottofase 1.1, incontro o call). Domande su bisogno, scadenze e vincoli. Devono tornare le risposte e il nome del referente.
- **Analisi del contesto** (sottofase 1.1, incontri con gli utilizzatori). Domande su come lavorano oggi. Deve tornare la descrizione del lavoro attuale.
- **Sessioni sul prototipo** (sottofase 1.4, call o incontro). Come si presenterà e come si userà il prodotto. Devono tornare le correzioni, poi l'approvazione scritta.
- **Invio del Manuale del prodotto** (sottofase 1.5). Deve tornare la conferma, anche a voce, seguita dal riepilogo scritto.
- **Lancio** (rilascio, incontro, formazione, email). Piano di lancio, formazione degli utilizzatori, canale per le segnalazioni. Devono tornare l'approvazione del piano, i dati iniziali e la conferma dopo il lancio.

## Strumenti visivi nel prodotto

Nel prodotto servono tutti. Le definizioni sono nelle Regole comuni.

- **Wireframe**: nella sottofase 1.3, allegati alla Proposta di soluzione, per le schermate principali. Il cliente li conferma con la proposta.
- **Prototipo**: nella sottofase 1.4, provato dal cliente in sessioni guidate. Sostituisce molte pagine di lettura.
- **Mockup**: nella sottofase 1.4, con la direzione grafica. Si disegnano in Claude Design a partire dai wireframe confermati, e la copia in PDF in `design` è quella che fa fede.
- **Prova su staging**: a ogni milestone e, sull'insieme, al collaudo finale. Si fa dal vivo con il cliente (UAT), in call o di persona. L'esito è uno fra: accettata, accettata con difetti non bloccanti, non accettata per difetti bloccanti.

Prototipo e mockup approvati valgono come i documenti. Come per la Proposta, il confine tra modifica e variazione è la conferma del Manuale del prodotto: prima, cambiarne la struttura è una modifica e si recepisce con una nuova versione, senza limite di giri; dopo, è una variazione.

## Fondamenta

La prima milestone contiene infrastruttura, staging e produzione, e le parti più rischiose o mai affrontate prima. Una scelta tecnica sbagliata emerge così all'inizio, quando cambiarla costa poco.

Le incognite rimaste dall'analisi del contesto diventano issue di tipo spike in questa milestone.

La durata del prodotto chiede continuità: su 6 mesi o più il team può cambiare. Manuale del prodotto e Documento tecnico devono bastare a chi entra, e nessuna parte del sistema deve essere conosciuta da una sola persona.

## Lancio

Il lancio è il rilascio di un sistema che nessuno ha ancora usato, quindi aggiunge al rilascio del progetto ciò che serve per iniziare a usarlo.

1. **Collaudo finale.** Sullo staging, i percorsi completi che attraversano più milestone, con dati reali o una copia fedele.
2. **Dati iniziali.** Il cliente li consegna puliti. Si caricano e il cliente li controlla.
3. **Formazione.** Gli utilizzatori provano il prodotto prima della messa in produzione.
4. **Messa in produzione.** Si parte con un gruppo ristretto di utilizzatori, poi si apre a tutti.
5. **Assistenza rafforzata.** Per un periodo fissato, dentro la garanzia, le segnalazioni hanno un canale dedicato e tempi di risposta più brevi.

Il lancio non avviene finché mancano testi legali, domini o account.

## Imprevisti del prodotto

Ogni imprevisto ha una risposta già decisa. Qui stanno solo quelli propri del prodotto: gli altri sono nel Piano di progetto, quelli dello sviluppo nel Ciclo di sviluppo e le variazioni nelle Regole comuni.

**Kickoff**

- **Gli utilizzatori non sono disponibili.** L'analisi del contesto si chiude allo scadere del tempo del kickoff: le parti non verificate diventano domande aperte nella Proposta.
- **Sistema esterno senza documentazione o non accessibile.** Issue di tipo spike nella milestone delle fondamenta. Al cliente si chiedono accessi e documentazione.
- **Il cliente vuole tutto nella prima release.** Si applica la regola: entra solo ciò senza cui il prodotto non è utilizzabile. La divisione la conferma il referente.
- **Idee non chiare davanti al prototipo.** Altri giri sul prototipo, senza limite finché il Manuale non è confermato: costano meno dei giri sul codice.
- **Il prototipo rivela una richiesta nuova.** Se resta nella Proposta confermata si integra. Se la supera, si torna alla Proposta con una versione nuova prima di scrivere il Manuale.

**Sviluppo**

- **Scelta tecnica sbagliata.** Emerge nella milestone delle fondamenta. Si corregge prima di costruirci sopra.
- **Milestone a rischio.** Alle leve del Ciclo di sviluppo se ne aggiunge una: spostare una story alla release successiva, decisa con il cliente come variazione media.
- **Il cliente vuole anticipare il lancio.** Si spostano story alla release successiva, come variazione media.

**Rilascio**

- **Dati iniziali o contenuti in ritardo.** La data di lancio slitta degli stessi giorni.
- **Dati da importare incompleti o disordinati.** La pulizia spetta al cliente. Se la chiede al team è una variazione.
- **Testi legali o account non pronti.** Il lancio non avviene finché mancano. Al cliente va l'elenco di ciò che manca.
- **Problemi al lancio.** Si resta sul gruppo ristretto finché non sono risolti. Se il prodotto non è utilizzabile si torna alla situazione precedente, come previsto dal Piano di lancio.
- **Gli utilizzatori non adottano il prodotto.** Le segnalazioni del periodo di assistenza che sono bug, variazioni piccole o richieste estetiche si trattano come pacchetto di garanzia. Quelle più grandi diventano lavorazioni minori o entrano nella release successiva.

**Dopo il lancio**

- **Bug dopo il lancio.** Corretto come pacchetto di garanzia, non come un lavoro nuovo.
- **Nuova richiesta presentata come bug.** Si applica il criterio delle Regole comuni: se il comportamento rispetta il Manuale non è un bug. Se è piccolo rientra nella garanzia, altrimenti è una lavorazione minore di tipo feature o un nuovo progetto.

## Decisioni proprie di questo piano

Le decisioni comuni a tutti i piani sono nelle Regole comuni.

- **Cartella e documenti (2026-10-12).** Come nel progetto: radice con i PDF dei documenti veri (più il Piano di lancio), `claude`, `design`, `develop`, `source`, `log`. Le particolarità del lancio stanno nel piano di rilascio fino alla chiusura, poi nel capitolo Pubblicazione del Documento tecnico. Ogni versione di un documento è completa e indipendente, con la catena in `claude`.
- **Budget (2026-10-12).** Il prodotto lavora a budget, non a consumo: la Proposta di soluzione ha la stima economica di ogni release e il cliente la approva insieme alla Proposta. È l'unica approvazione economica dei piani. Il Manuale, il Piano dei SAL e gli altri documenti per il cliente restano senza prezzi.
- **UAT dal vivo (2026-10-12).** Come nel progetto: la prova a ogni milestone e al collaudo finale è una sessione dal vivo con il cliente.
- [ ] **Budget del prodotto.** Da decidere: se il budget di una release è un tetto o una stima vincolante, cosa succede se la stima fatta con le issue (sottofase 1.5) o lo sviluppo lo superano (nuova approvazione del cliente, o variazione), come si tratta una variazione rispetto al budget, e quanto ne sa il cliente durante lo sviluppo.
- [ ] **Durata del periodo di assistenza rafforzata** dopo il lancio. Proposta: 2 settimane.
- [ ] **Chi realizza prototipo e direzione grafica**, se il team non ha una figura dedicata.
