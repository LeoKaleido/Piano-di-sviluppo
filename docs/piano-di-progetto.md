# Piano di progetto

Data: 2026-10-05

Un progetto è un lavoro strutturato su un sistema esistente, portato dalla richiesta del cliente alla messa in produzione. Segue le fasi sotto, ognuna con una condizione di chiusura verificabile. Il cliente conferma prima la Proposta di soluzione, poi il Manuale del prodotto: la conferma può arrivare anche a voce, in una riunione, purché segua un riepilogo scritto. Si lavora a consumo: il cliente paga il tempo di lavoro, quindi la durata stimata è un impegno e la stima conta.

Questo piano contiene solo ciò che è proprio dei progetti. Le regole valide per ogni lavoro (glossario, categorie, verifica preliminare, contatti, documenti, date, variazioni, garanzia) sono nelle Regole comuni. Lo sviluppo (sprint, milestone, issue, buffer, imprevisti) è nel Ciclo di sviluppo. È il riferimento per tutto il team.

## Quando si applica

Una richiesta è un progetto quando riguarda un sistema esistente e soddisfa almeno una delle condizioni elencate nelle Regole comuni: la stima supera le 2 settimane, serve più di una persona, serve una proposta, cambia l'aspetto grafico.

## Chi fa cosa

- **Chi analizza** legge la richiesta, la classifica come progetto, stima la durata e designa il responsabile. La scelta del responsabile si fa con chi gestisce il team e, se serve, con il CEO: si decide in pochi minuti.
- **Il responsabile** è il PL (project lead) disponibile in quel momento e più adatto al progetto. Guida il progetto dalla prima riunione con il cliente alla chiusura, scrive i documenti con le skill e tiene i contatti con il cliente.
- **Chi sviluppa** è il team, o la persona, che realizza le issue.

## Il flusso del progetto

Non si passa alla fase successiva finché la condizione di chiusura non è soddisfatta. Per ogni fase sono indicati chi la esegue, le skill da usare, i documenti che produce e quando si chiude. Le skill sono nella cartella `skills/` della repo.

1. **Ingresso e assegnazione.** Il cliente apre la richiesta su osTicket. Chi analizza esegue la verifica preliminare delle Regole comuni (confronto con i lavori aperti e controllo del codice), poi decide la categoria, stima la durata del progetto e designa il responsabile. Appena il progetto è assegnato si può rispondere al cliente per presa visione: non è obbligatorio.
   - Chi: chi analizza.
   - Skill: `verifica-preliminare`, poi `valutazione-richiesta`.
   - Produce: le decisioni (categoria, esito della verifica, stima di durata, responsabile), riportate nel ticket.
   - Si chiude quando: la categoria è confermata, la verifica ha un esito, la durata è stimata e il responsabile è designato.
2. **Kickoff.** Il responsabile incontra il cliente per capire il bisogno e sapere chi decide, e analizza l'esistente. Il confronto e l'indagine vanno insieme. Tempo massimo, per il kickoff e la prima versione della Proposta di soluzione insieme: il 10% della stima del progetto, fissato prima di iniziare.
   - Chi: il responsabile.
   - Skill: `stato-di-partenza`. Per le conversazioni, `interpretazione-conversazioni`.
   - Produce: lo Stato di partenza, e le trascrizioni e le sintesi delle conversazioni.
   - Si chiude quando: il referente è noto, lo Stato di partenza è scritto, ogni punto della richiesta ha un giudizio di fattibilità, le incognite rimaste sono elencate e ci sono le risposte alle domande senza le quali la proposta non può partire.
3. **Proposta di soluzione.** Il responsabile scrive la Proposta, un documento veloce e semplice da leggere, di 2 o 3 pagine e al massimo 5, e la invia al cliente. Si scambia avanti e indietro con il cliente, senza limite di giri. Ogni giro produce una nuova versione numerata, con l'elenco di ciò che è cambiato. Alla conferma si esegue l'allineamento dei documenti.
   - Chi: il responsabile.
   - Skill: `proposta-di-soluzione`. Facoltativi: `wireframe-e-prototipo`. A conferma avvenuta: `allineamento-documenti`. Per le conversazioni, `interpretazione-conversazioni`.
   - Produce: la Proposta di soluzione, con versioni numerate, ed eventuali wireframe.
   - Si chiude quando: il cliente conferma una versione, anche a voce, e il responsabile invia il riepilogo scritto; non restano domande aperte; l'allineamento è fatto.
4. **Manuale del prodotto.** La Proposta confermata e la richiesta diventano la fonte del Manuale del prodotto, la spiegazione completa del prodotto, leggibile dal cliente. Il Manuale contiene le user story approfondite con i criteri di accettazione, tutto il necessario per capire il progetto e quali strumenti tocca (gestionale, sito pubblico e simili). Contiene wireframe. Possibilmente anche mockup e prototipo navigabile, ma non sono obbligatori. Se il sistema ha già un Manuale, il progetto lo aggiorna. Le modifiche chieste dal cliente prima della conferma si recepiscono con nuove versioni numerate.
   - Chi: il responsabile.
   - Skill: `manuale-del-prodotto`. Facoltativi: `wireframe-e-prototipo`, `mockup`. Per le conversazioni, `interpretazione-conversazioni`.
   - Produce: il Manuale del prodotto, con wireframe e, se ci sono, mockup e prototipo.
   - Si chiude quando: il cliente conferma il Manuale, anche a voce, e il responsabile invia il riepilogo scritto.
5. **Documento tecnico.** Dal Manuale il responsabile scrive, con chi svilupperà, il Documento tecnico: repository coinvolte, tecnologie, come funzionano le cose, la struttura di come va realizzato il prodotto. Contiene anche la divisione in milestone e la creazione delle issue, con le stime. Con le issue la durata si stima di nuovo. Appena si ha la stima vera si informa il cliente, sempre, anche se è uguale a quella iniziale: si scrive il Piano dei SAL, il documento per il cliente con le milestone (i SAL), la data prevista di ciascuna demo e i materiali attesi con la data entro cui servono.
   - Chi: il responsabile, con chi sviluppa.
   - Skill: `documento-tecnico`, e `piano-delle-milestone` per la divisione in milestone e la creazione delle issue, che entrano nel Documento tecnico, e per il Piano dei SAL.
   - Produce: il Documento tecnico, interno, con milestone e issue, la stima di durata aggiornata e il Piano dei SAL, per il cliente.
   - Si chiude quando: il Documento tecnico è completo, ogni story del Manuale è coperta da issue stimate, ogni milestone ha il suo buffer e la sua data, e il Piano dei SAL con la stima di durata è inviato al cliente.
6. **Sviluppo.** Si lavora a sprint, prendendo le issue dalla milestone in corso. A ogni milestone si mostra il lavoro al cliente sullo staging, con una demo, si invia il Milestone report e il cliente accetta in modo esplicito. Valgono la sezione "Modifiche e variazioni" e le regole del Ciclo di sviluppo (sprint, milestone, issue, buffer, cliente che non risponde).
   - Chi: il responsabile guida, il team sviluppa.
   - Skill: `sprint` (con lo Sprint report interno), `variazione`, `riprogrammazione`, `demo`. Per il Milestone report, `milestone-report`. Per le conversazioni, `interpretazione-conversazioni`.
   - Produce: il Documento di sprint e lo Sprint report (interni, unici per tutta l'azienda), il Registro delle variazioni, il Milestone report di ogni milestone con l'esito della demo.
   - Si chiude quando: tutte le milestone sono accettate.
7. **Collaudo e rilascio.** Quando il lavoro sta per finire si mette tutto sullo staging e lo si mostra al cliente. Appena il cliente accetta si pubblica. Valgono le regole della sezione Collaudo e rilascio.
   - Chi: il responsabile.
   - Skill: `demo` per la demo finale; `collaudo-e-rilascio` per il collaudo e il piano di rilascio.
   - Produce: il verbale di accettazione della demo finale e il piano di rilascio.
   - Si chiude quando: il sistema è in produzione.
8. **Chiusura.** Dopo la pubblicazione il responsabile aggiorna i documenti: Manuale del prodotto e Documento tecnico descrivono ciò che è stato realmente fatto, e così i documenti degli altri lavori toccati. Decorre la garanzia.
   - Chi: il responsabile.
   - Skill: `allineamento-documenti`, con `manuale-del-prodotto` e `documento-tecnico` per riscrivere i due documenti del sistema.
   - Produce: i documenti aggiornati.
   - Si chiude quando: i documenti sono aggiornati. Il progetto è chiuso.

Un diagramma di flusso dettagliato di tutte le fasi è in `docs/diagramma-piano-di-progetto.html`.

## Kickoff: confronto e indagine

L'indagine è l'analisi completa che precede la proposta: nulla viene promesso al cliente su una parte del sistema che non è stata guardata. Parte dall'esito della verifica preliminare e non lo ripete.

Il codice, in sola lettura:

- dove si trova la parte coinvolta e come è fatta;
- chi altro la usa: altre schermate, altre funzioni, integrazioni, dati condivisi;
- cosa fa davvero, confrontato con ciò che il cliente crede e con ciò che dicono i documenti;
- i comportamenti non documentati, che il cliente dà per scontato restino;
- lo stato del codice: test presenti o assenti, parti fragili, debito tecnico che renderebbe l'intervento più costoso;
- gli sviluppi non ancora rilasciati che toccano la stessa parte.

Gli altri lavori:

- progetti in corso, ticket aperti, variazioni registrate e consegne in garanzia sullo stesso sistema;
- cosa prevedono di cambiare nella stessa parte, e quando.

I documenti:

- Manuale del prodotto e Documento tecnico del sistema, se esistono;
- quanto corrispondono al codice. Le differenze vanno elencate, perché il progetto dovrà sanarle.

Ogni affermazione dello Stato di partenza porta il suo grado di certezza: verificata, riferita oppure supposta. Una proposta non si scrive su affermazioni supposte: se il codice non è stato guardato, la fattibilità è provvisoria e la proposta lo dichiara.

Il tempo del kickoff è fissato prima di iniziare e vale il 10% della stima del progetto, scrittura della prima Proposta compresa. Allo scadere si chiude comunque, e ogni incognita rimasta diventa una issue di tipo Spike nella prima milestone. I giri di revisione successivi della Proposta non rientrano nel 10%.

## Conversazioni

Le riunioni, le telefonate e le altre conversazioni con il cliente si registrano, si trascrivono e si aggiungono alla documentazione del progetto, su Drive. Servono come materiale in più per le skill: dicono cosa è stato chiesto, deciso e confermato.

- **Trascrizione.** Il testo della conversazione, così com'è.
- **Sintesi della conversazione.** Il risultato dell'interpretazione del testo: richieste, decisioni, informazioni sul sistema, domande aperte, conferme, variazioni, e in quale documento del progetto vanno riportate. La produce la skill `interpretazione-conversazioni`.
- **Riepilogo scritto.** Per una riunione o una telefonata in cui il cliente conferma o decide qualcosa, il responsabile invia il riepilogo scritto: ciò che è stato detto a voce vale solo dopo il riepilogo.

## Modifiche e variazioni

- **Modifica.** Un cambiamento a un documento non ancora confermato dal cliente: la Proposta di soluzione prima della conferma, il Manuale del prodotto prima della conferma. Si recepisce con una nuova versione numerata. Non ha limite di giri e non entra nel Registro delle variazioni.
- **Variazione.** Un cambiamento a ciò che il cliente ha già confermato, o a ciò che è già in sviluppo. Entra nel Registro delle variazioni, riceve una categoria e si gestisce con le regole delle Regole comuni.

Il momento che separa le due cose è la conferma del Manuale del prodotto. Prima della conferma il cliente può cambiare idea quante volte vuole, perché ogni giro è un documento nuovo e non lavoro già fatto. Dopo la conferma ogni cambiamento ha un costo in ore e il cliente lo sa.

## Buffer e cliente che non risponde

Le regole su quale buffer si usa e in che ordine (buffer di sprint, buffer di milestone, leve per una milestone a rischio o in ritardo) e su cosa si fa quando il cliente non risponde (il progetto non è mai fermo) sono nel Ciclo di sviluppo.

## Documenti del progetto

Per il cliente:

- **Proposta di soluzione** (fasi 2 e 3). La richiesta come è stata compresa, la soluzione con suggerimenti, compromessi, esclusioni, domande aperte e materiali che servono dal cliente, l'allegato con titolo e frase di ogni user story e un sunto di come procederà la lavorazione. Può contenere wireframe.
- **Manuale del prodotto** (fase 4). Cosa fa il sistema: funzionalità, user story complete, criteri di accettazione, strumenti toccati. Se il sistema ha già un Manuale, il progetto lo aggiorna.
- **Riepilogo scritto** di ogni riunione o telefonata in cui il cliente conferma o decide qualcosa.
- **Piano dei SAL** (fase 5). La durata stimata, i SAL (le milestone) con la data prevista di ciascuna demo, i materiali attesi con la data entro cui servono. Ricavato dalle milestone del Documento tecnico. Si invia al cliente appena si ha la stima vera, anche se uguale a quella iniziale.
- **Milestone report** (fase 6). Il documento per il cliente a ogni milestone, presentato insieme alla demo sullo staging: le story consegnate con i loro criteri di accettazione, l'esito della demo, lo stato della milestone successiva, le date aggiornate e ciò che serve dal cliente.
- **Verbale di accettazione** della demo finale (fase 7).
- **Piano di rilascio** (fase 7). Concordato con il cliente.

Interni:

- **Stato di partenza** (fase 2). Come funziona oggi il sistema, cosa viene toccato, fattibilità, incognite.
- **Documento tecnico** (fase 5). Come viene realizzato: repository, tecnologie, architettura, dati, integrazioni, scelte tecniche, divisione in milestone e issue con le stime e i buffer. Cita i codici delle story senza riscriverle. Se il sistema lo ha già, il progetto lo aggiorna.
- **Documento di sprint** (fase 6). È unico per tutta l'azienda: il progetto vi compare con le sue issue e con lo stato della sua milestone.
- **Sprint report** (fase 6). Poche righe interne a ogni fine sprint: fatto, prossimo, stato della milestone, cosa serve dal cliente. È ricavato dal Documento di sprint e non va al cliente.
- **Registro delle variazioni** (dalla conferma del Manuale in poi). Ogni variazione chiesta, con categoria, impatto ed esito.
- **Trascrizioni e sintesi delle conversazioni** (per tutto il progetto).

Strumenti visivi, quando il progetto tocca l'interfaccia: wireframe, mockup, prototipo, demo.

## Contatti con il cliente

Il cliente viene contattato in momenti fissi, e ognuno ha una risposta attesa. Le regole di ogni contatto e il valore del silenzio sono nelle Regole comuni.

- **Apertura della richiesta** (fase 1, osTicket). Si può rispondere per presa visione. Non serve risposta.
- **Kickoff** (fase 2, riunione o call). Domande per capire il bisogno. Devono tornare le risposte e il nome del referente.
- **Invio della proposta** (fase 3, email con presentazione in call). Devono tornare correzioni e risposte alle domande aperte, fino alla conferma.
- **Giri di revisione** (fasi 3 e 4). Nuova versione con l'elenco di ciò che è cambiato.
- **Invio del Manuale del prodotto** (fase 4, email con presentazione in call). Deve tornare la conferma, anche a voce, seguita dal riepilogo scritto.
- **Invio del Piano dei SAL** (fase 5, email). La stima vera di durata, le milestone e le date delle demo. Non serve risposta.
- **Demo di milestone e Milestone report** (fase 6, call sullo staging). Le story completate, provate sui criteri di accettazione, e il report. Deve tornare l'accettazione esplicita.
- **Collaudo finale e piano di rilascio** (fase 7). Demo finale sullo staging e data di pubblicazione. Deve tornare l'accettazione esplicita.
- **Pubblicazione** (fase 7, email). L'avviso a sistema in produzione.

## Strumenti visivi nel progetto

Le definizioni sono nelle Regole comuni. Nel progetto entrano così:

- **Wireframe**: facoltativi nella Proposta di soluzione (fase 3) per le schermate nuove o modificate, e nel Manuale del prodotto (fase 4).
- **Mockup**: facoltativi nella fase 4, quando cambia l'aspetto grafico. Si disegnano in Figma a partire dai wireframe. Il cliente li approva con il Manuale, e la copia in PDF su Drive è quella che fa fede.
- **Prototipo**: facoltativo nella fase 4. Non c'è una regola su quando serve: lo decide il responsabile.
- **Demo**: nella fase 6, a ogni milestone, e nella fase 7, al collaudo finale. L'esito è uno fra: accettata, accettata con difetti non bloccanti, non accettata per difetti bloccanti.

## Collaudo e rilascio

L'accettazione delle singole milestone non basta: prima della produzione si prova l'insieme, sullo staging, e il cliente lo accetta.

Collaudo finale:

- i percorsi che attraversano più milestone, dall'inizio alla fine;
- le parti del sistema che esistevano già e che il progetto ha toccato, per escludere regressioni;
- le integrazioni e i dati reali, o una copia fedele.

Piano di rilascio, concordato con il cliente:

- data e ora, scelte per ridurre il disturbo a chi usa il sistema;
- ordine dei passi;
- come si torna alla versione precedente se qualcosa fallisce;
- chi va avvisato prima e dopo.

Dopo la pubblicazione decorre la garanzia, e la fase 8 chiude il progetto.

## Imprevisti del progetto

Ogni imprevisto ha una risposta già decisa, applicata nella fase in cui si presenta. Gli imprevisti dello sviluppo (persone, tempi, cliente) stanno nel Ciclo di sviluppo, le variazioni nelle Regole comuni.

**Fase 1: ingresso e assegnazione**

- **Un progetto entra come ticket.** Se soddisfa una delle condizioni del progetto si riclassifica.
- **La verifica dice che il lavoro non va aperto.** Si risponde al cliente con il motivo e il riferimento preciso.
- **La richiesta riguarda un sistema nuovo.** Si riclassifica e segue il Piano di prodotto.
- **Nessun responsabile adatto è disponibile.** Si decide con chi gestisce il team e, se serve, con il CEO.

**Fase 2: kickoff**

- **Si parla con chi non decide.** Si chiede il nome del referente: vale solo la sua approvazione.
- **Le risposte non arrivano.** Vale la sezione "Il cliente non risponde" del Ciclo di sviluppo.
- **Comportamento del sistema non rilevato.** Si aggiunge allo Stato di partenza. Se emerge dopo la conferma della proposta è una variazione, e il referente sceglie se mantenerlo.
- **Il kickoff supera il tempo fissato.** Si chiude con le incognite elencate, da sciogliere con issue di tipo Spike.
- **Il codice non è accessibile.** Lo Stato di partenza lo dichiara, e la proposta presenta la fattibilità come provvisoria.
- **Un punto della richiesta non è fattibile.** Va nella proposta tra ciò che non si potrà fare, con il motivo e un'alternativa.

**Fase 3: proposta di soluzione**

- **La soluzione è più grande della richiesta.** Si propone una divisione in più progetti, con il primo che ha valore da solo.
- **Revisioni che non convergono.** Call dedicata sui punti aperti, poi un'ultima versione. Non c'è un limite ai giri.
- **Risposta parziale alle domande.** Le domande senza risposta restano aperte e bloccano la conferma. Al cliente va l'elenco delle domande ancora aperte.
- **L'allineamento trova un conflitto con un altro lavoro.** Si risolve prima della fase 4: si decide quale lavoro passa prima e cosa cambia nell'altro.

**Fase 4: Manuale del prodotto**

- **Il cliente chiede modifiche al Manuale.** Prima della conferma sono modifiche: nuova versione numerata. Dopo la conferma sono variazioni.
- **Manuale del prodotto e Documento tecnico in contrasto.** Vale il Manuale. Il Documento tecnico si corregge.
- **Il cliente conferma a voce.** Vale dopo il riepilogo scritto inviato dal responsabile.

**Fase 5: Documento tecnico**

- **Festività o ferie non considerate.** Si corregge il calendario e si ricalcolano le date.
- **La stima rifatta con le issue è più alta di quella iniziale.** Il cliente viene informato come per ogni stima, con il Piano dei SAL, e si spiega cosa è cambiato rispetto alla prima stima: le cattive notizie si comunicano subito.

**Fase 6: sviluppo**

- **Un ticket urgente interrompe il lavoro.** Vale la sezione sui buffer del Ciclo di sviluppo.
- **La milestone è a rischio o in ritardo.** Vale la stessa sezione.
- **Il cliente non accetta la demo.** I difetti bloccanti si correggono e si ripete la demo. Una demo non si accetta in silenzio.

**Fase 7: collaudo e rilascio**

- **Regressione su qualcosa che funzionava.** È un bug bloccante: si corregge prima della pubblicazione.
- **Rilascio fallito.** Ritorno alla versione precedente e nuova data, con avviso immediato al cliente.
- **Il cliente non accetta il collaudo finale.** I difetti bloccanti si correggono e si ripete la demo.

**Fase 8: chiusura**

- **Bug dopo il rilascio.** Corretto come pacchetto di garanzia.
- **Nuova richiesta presentata come bug.** Si applica il criterio delle Regole comuni: se il comportamento rispetta il Manuale è una variazione o un nuovo ticket.

## Decisioni proprie di questo piano

Le decisioni comuni a tutti i piani sono nelle Regole comuni.

Nessuna decisione aperta.
