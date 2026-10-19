# Piano di progetto

Data: 2026-10-06. Riorganizzato il 2026-10-12 intorno a pochi documenti veri e alla cartella `log`.

Un progetto è un lavoro strutturato su un sistema esistente, portato dalla richiesta del cliente alla messa in produzione. Ha tre fasi: kickoff, sviluppo e rilascio, ognuna con una condizione di chiusura verificabile. Il cliente conferma due volte: prima la Proposta di soluzione, poi il Manuale del prodotto. La conferma può arrivare anche a voce, in una riunione, purché segua un riepilogo scritto. Si lavora a consumo: il cliente paga il tempo di lavoro, quindi la durata stimata è un impegno e la stima conta.

Questo piano contiene solo ciò che è proprio dei progetti. Le regole valide per ogni lavoro (glossario, categorie, verifica preliminare, contatti, documenti, date, variazioni, garanzia) sono nelle Regole comuni. Lo sviluppo (sprint, milestone, issue, buffer, imprevisti) è nel Ciclo di sviluppo. È il riferimento per tutto il team.

## Quando si applica

Una richiesta è un progetto quando riguarda un sistema esistente e soddisfa almeno una delle condizioni elencate nelle Regole comuni: la stima supera le 2 settimane, serve più di una persona, serve una proposta, cambia l'aspetto grafico.

## Chi fa cosa

- **Chi analizza** è la persona che legge la richiesta su osTicket, vede che è un progetto e designa il responsabile. La scelta si fa con chi gestisce il team in pochi minuti.
- **Il responsabile** è il project manager disponibile in quel momento e più adatto al progetto. Guida il progetto dalla valutazione della richiesta al rilascio, scrive i documenti con le skill e tiene i contatti con il cliente.
- **Chi sviluppa** è il team, o la persona, che realizza le issue.
- **L'incaricato della pubblicazione** segue il rilascio in produzione.

## I documenti e la storia

Il progetto produce pochi documenti veri e una storia. La distinzione guida tutto il resto del piano. Ogni posto della cartella del progetto ha il suo lettore.

**I documenti veri** stanno nella radice, in PDF e in versione finale. Li leggono gli sviluppatori e, quando è il caso, il cliente:

- **Proposta di soluzione** (kickoff). La richiesta come è stata compresa, la soluzione con suggerimenti, compromessi, esclusioni, domande aperte e materiali che servono dal cliente, la stima di durata e dei tempi di rilascio (una durata in giorni fino a due mesi e in mesi oltre, e una finestra di rilascio in mesi, non una data), l'allegato con titolo e frase di ogni user story e un sunto di come procederà la lavorazione. Può contenere wireframe. Va al cliente. La versione confermata si chiama semplicemente Proposta di soluzione, senza numero di versione: non esiste una v1.0, né una v2, e un cambiamento dopo la conferma è una variazione.
- **Manuale del prodotto** (kickoff). Cosa fa il sistema: funzionalità, user story complete, criteri di accettazione, strumenti toccati, wireframe e, se ci sono, mockup e prototipo. Se il sistema ha già un Manuale, il progetto lo aggiorna. Richiede la conferma del cliente.
- **Documento tecnico** (kickoff). Come viene realizzato, a un livello che permette a chi non ha seguito il lavoro di implementare ogni funzionalità: repository, tecnologie, struttura del codice, dati, interfacce, flussi, errori, integrazioni, scelte tecniche. Contiene il capitolo **Piano delle milestone**: la divisione in milestone con ore, buffer e date e, per ogni milestone, le lavorazioni specifiche riassunte chiaramente. Le issue vivono in ClickUp. Cita i codici delle story senza riscriverle. Se il sistema lo ha già, il progetto lo aggiorna.
- **Piano dei SAL** (kickoff). Estratto dal Piano delle milestone del Documento tecnico, mai scritto a mano. È una tabella: SAL, cosa viene consegnato, data prevista della prova, cosa verifica il cliente; e una seconda tabella dei materiali attesi con la data entro cui servono. Si invia al cliente appena si ha la stima vera, anche se uguale a quella iniziale.

Ogni versione di un documento è completa e si legge da sola: non scrive "invariato" né rimanda alle versioni precedenti, che restano tutte in `claude`, con la catena completa fin dalla prima versione disponibile, anche quando alcune sono nate in altre lavorazioni. Manuale e Documento tecnico sono documenti del sistema: il progetto li aggiorna e la versione vigente è quella con la versione più alta tra tutte le lavorazioni. Il Documento tecnico contiene anche il capitolo Pubblicazione, per chi pubblica, che si aggiorna alla chiusura: ordine dei passi, regole del server, riavvii, cache, verifiche, ritorno alla versione precedente. Non c'è una guida a parte.

**Gli altri posti:**

- `claude`: i sorgenti Markdown di tutti i documenti, con bozze e tutte le versioni precedenti (non si cancellano mai). È la parte per Claude: le persone non hanno bisogno di aprirla.
- `design`: wireframe, mockup approvati (disegnati e esportati in PDF da Claude Design), prototipi e il materiale per realizzarli.
- `develop`: la cronologia dello sviluppo.
  - **Nota di sprint**, una per ogni sprint. Interna: fatto, non fatto, ore, imprevisti, margine della milestone, cosa serve dal cliente.
  - **Milestone report**, uno per ogni milestone. Interno, letto da chi gestisce il progetto: come è andato lo sviluppo, ore previste e reali, buffer e margine, story consegnate con l'esito della prova, variazioni e imprevisti, stato della milestone successiva. Solo Markdown, senza PDF. Non va al cliente: per la prova il cliente riceve un messaggio.
  
  Il piano dello sprint successivo non è un documento: è la List dello sprint in ClickUp, scelta dopo la Nota (il venerdì sera o il lunedì mattina).
- `source`: tutto ciò che entra e che esce verso il cliente, in un solo livello, con la data davanti al nome. Ciò che arriva: la richiesta, le email, i file audio, le trascrizioni, le sintesi con il riepilogo, i materiali, le immagini. Ciò che si scrive: i messaggi preparati con le skill e inviati (domande aperte, riepilogo di una conferma, comunicazione di variazione o di riprogrammazione, invito alla prova, avviso di pubblicazione, risposta di garanzia). I messaggi non sono documenti: non hanno il PDF e non si numerano.
- `log`: la storia, in file Markdown che crescono a ogni voce.
  - `history-and-decision.md`: la storia e le decisioni, in un solo file. Che cosa è successo e quando, con i numeri che servono a capirlo, e che cosa si è deciso, da chi, perché, con quali alternative. È diviso in gruppi per fase (Kickoff, Sviluppo, Rilascio, Garanzia); ogni voce ha un titolo con data e tipo e campi etichettati (Fase, Cosa, Effetto, Riferimenti; le decisioni anche Chi ha deciso, Motivo, Alternative scartate; le variazioni anche Stato). Contiene tutto ciò che altrove sarebbe un documento o un registro a parte: Stato di partenza, variazioni, riprogrammazioni, esiti delle prove e del collaudo, piano di rilascio concordato, garanzia. Le decisioni dell'analisi (categoria, stima a occhio, responsabile, scadenza, domande) sono le prime voci di tipo Decisione.
  - `report-di-progetto.md` (a fine progetto, skill `report-di-progetto`): tira le somme, com'è andato, ore e durata reali, cosa ha causato gli scostamenti. Alimenta le stime future e permette a chi arriva fra due anni di capire cosa è stato questo progetto. Solo Markdown.

Non sono documenti, e quindi non hanno un file a parte: la verifica preliminare, le particolarità tecniche di un rilascio (stanno nel piano di rilascio e, alla chiusura, nel capitolo Pubblicazione), i riepiloghi delle conferme, le comunicazioni, l'avviso al cliente, l'elenco delle domande ancora aperte. I testi per il cliente si scrivono con le skill, si inviano per email o su osTicket, si salvano in `source` e il loro contenuto utile entra in History and decision.

**Chi legge la cartella.** Lo sviluppatore che deve capire cosa fare apre la radice (Proposta, Manuale, Documento tecnico, Piano dei SAL), `design` per come appare e `develop` per sapere a che punto è il lavoro. Claude, che deve capire tutto, legge i sorgenti in `claude`, la storia in `log`, ciò che si sono detti cliente e team in `source`, `design` e `develop`. Una persona che fra due anni vuole capire cosa fosse il progetto apre la Proposta, il Manuale e il Report di progetto. La struttura precisa delle cartelle è nelle Regole comuni.

## Il flusso del progetto

Non si passa alla fase successiva finché la condizione di chiusura non è soddisfatta. Per ogni fase sono indicati chi la esegue, le skill da usare, cosa produce e quando si chiude. Le skill sono nella cartella `skills/` della repo.

1. **Kickoff**. Dalla richiesta su osTicket fino alla documentazione pronta per lo sviluppo. Si divide in quattro sottofasi. Non si passa alla sottofase successiva finché la condizione di chiusura non è soddisfatta. Il tempo del kickoff si fissa all'inizio della sottofase 1.1: il 10% di una stima a occhio della durata.
   1. **Valutazione**. Il cliente apre la richiesta su osTicket, e di rado indica una scadenza: se c'è, il responsabile dice subito se è fattibile. Chi analizza vede che è un progetto e designa il responsabile, con chi gestisce il team. Appena il progetto è assegnato si può rispondere al cliente per presa visione, senza obbligo. Il responsabile fa subito una stima a occhio della durata, in una decina di minuti, solo interna: serve a fissare il tempo del kickoff. Poi valuta la richiesta: confronta con i lavori aperti, controlla il codice in sola lettura, conferma la categoria e incontra il cliente per capire il bisogno e sapere chi decide.
      - Chi: chi analizza per l'assegnazione, poi il responsabile.
      - Skill: `kickoff`, `interpretazione-conversazioni`.
      - Produce: nessun documento. Nel `log`, lo Stato di partenza e le decisioni dell'analisi (categoria, stima a occhio, responsabile, scadenza, domande) in `history-and-decision.md`. Le conversazioni (audio, trascrizione, sintesi e riepilogo) vanno in `source`.
      - Si chiude quando: la categoria è confermata, il referente è noto, ogni punto della richiesta ha un giudizio di fattibilità e le incognite rimaste sono elencate.
   2. **Stima**. Si ricava la stima precisa della durata del progetto dalla richiesta, analizzando la codebase, insieme ai tempi dei progetti già fatti letti nei loro Report di progetto. È la stima che compare nella Proposta, come durata complessiva e come finestra di rilascio indicativa in mesi, a partire da un mese di avvio ipotizzato, perché il cliente deve poter pianificare prima che esista il Piano dei SAL. Non va confusa con la stima a occhio, che resta interna e serve solo al tempo del kickoff.
      - Chi: il responsabile.
      - Skill: `kickoff`.
      - Produce: la stima di durata e del tempo di rilascio, con affidabilità e fattori, come voce di `history-and-decision.md`; poi compare nella Proposta.
      - Si chiude quando: la stima precisa c'è.
   3. **Proposta**. Dentro il tempo del kickoff il responsabile scrive la Proposta di soluzione, accompagnata dalla stima: un documento veloce e semplice da leggere, di 2 o 3 pagine e al massimo 5. Si scambia avanti e indietro con il cliente, senza limite di giri, e ogni giro produce una nuova versione numerata con l'elenco di ciò che è cambiato. Alla conferma si esegue l'allineamento dei documenti. La prima versione sta dentro il tempo del kickoff, i giri successivi no: il tempo del kickoff limita il lavoro del team fino alla prima versione, non l'attesa del cliente.
      - Chi: il responsabile.
      - Skill: `proposta-di-soluzione`; a conferma avvenuta `allineamento-documenti`. Facoltativa: `wireframe-e-prototipo`. Per le conversazioni, `interpretazione-conversazioni`.
      - Produce: la Proposta di soluzione con versioni numerate (v0.1, v0.2, ...) e, alla conferma, la Proposta di soluzione senza numero (nella radice solo il PDF della versione corrente), ed eventuali wireframe in `design`. L'elenco delle domande ancora aperte e il riepilogo della conferma sono messaggi: si salvano in `source` e il loro contenuto utile entra in History and decision.
      - Si chiude quando: il cliente conferma una versione, anche a voce, e il responsabile invia il riepilogo scritto; non restano domande aperte; l'allineamento è fatto.
   4. **Documentazione**. A proposta confermata il responsabile scrive il Manuale del prodotto, la spiegazione completa del prodotto leggibile dal cliente, con wireframe e, se serve, mockup e prototipo. Il cliente lo conferma, anche a voce con riepilogo scritto: il Manuale è una seconda conferma, perché è su quei criteri di accettazione che le story si accettano. Poi il responsabile scrive, con chi svilupperà, il Documento tecnico e il capitolo Piano delle milestone con la divisione in milestone. Alla stesura di Manuale e Documento tecnico si recepiscono le Schede delle lavorazioni minori chiuse dopo l'ultima versione dei documenti (nell'indice `lavorazioni-minori-chiuse.md`), con l'ultima versione di ciascuna. Le issue, con le stime, si creano in ClickUp e non stanno nei documenti. Con le issue la durata si stima di nuovo e appena si ha la stima vera si invia al cliente, sempre, il Piano dei SAL.
      - Chi: il responsabile, con chi sviluppa per il Documento tecnico.
      - Skill: `manuale-del-prodotto`; `documento-tecnico` e `piano-delle-milestone` per la divisione in milestone, la creazione delle issue in ClickUp e il Piano dei SAL. Facoltative: `wireframe-e-prototipo`, `mockup`. Per le conversazioni, `interpretazione-conversazioni`.
      - Produce: il Manuale del prodotto confermato, il Documento tecnico con il Piano delle milestone, il Piano dei SAL (tutti in PDF nella radice), wireframe, mockup e prototipi in `design`, le issue in ClickUp. La conferma del cliente e la consegna alla grafica del materiale per i mockup sono voci di `history-and-decision.md`.
      - Si chiude quando: il cliente ha confermato il Manuale (anche a voce, con il riepilogo scritto), ogni story del Manuale è coperta da issue stimate, ogni milestone ha il suo buffer e la sua data, e il Piano dei SAL con la stima di durata è inviato al cliente. Le issue del Documento tecnico sono caricate in ClickUp.
2. **Sviluppo**. Si lavora a sprint, prendendo le issue dalla milestone in corso. Gli sprint sono dinamici: milestone, issue e date sono già definite, e a fine di ogni sprint si scrive la Nota di sprint e poi si pianifica il successivo in ClickUp (il primo sprint si pianifica all'ingresso nello sviluppo, prima del suo inizio). Lo stato delle issue vive in ClickUp. A ogni milestone il cliente prova il lavoro sullo staging, guidato da un messaggio con le story da provare e i loro criteri di accettazione, e accetta in modo esplicito. Poi si scrive il Milestone report, interno. Una demo in call è facoltativa. Valgono la sezione "Modifiche e variazioni" e le regole del Ciclo di sviluppo.
   - Chi: il responsabile guida, il team sviluppa.
   - Skill: `sprint` (Nota di sprint e pianificazione), `history-and-decision` (variazioni, riprogrammazioni), `prova-su-staging`. Per il Milestone report, `milestone-report`. Per le conversazioni, `interpretazione-conversazioni`.
   - Produce: in `develop`, una Nota di sprint per ogni sprint e un Milestone report interno per ogni milestone. Nel `log`, variazioni, riprogrammazioni, imprevisti, conferme e l'esito di ogni prova come voci di `history-and-decision.md`. I messaggi al cliente (invito alla prova, comunicazioni) in `source`.
   - Si chiude quando: tutte le milestone sono accettate.
3. **Rilascio**. Dal sistema completo sullo staging alla messa in produzione e alla chiusura. Il rilascio è semplice perché lo staging contiene già tutte le milestone. Si divide in quattro sottofasi. Non si passa alla sottofase successiva finché la condizione di chiusura non è soddisfatta. Valgono le regole della sezione Collaudo e rilascio.
   1. **Collaudo**. Collaudo finale sullo staging: i percorsi che attraversano più milestone, le parti esistenti toccate dal progetto per escludere regressioni, le integrazioni e i dati reali o una copia fedele. Poi la prova finale del cliente sullo staging, dal vivo con il team (UAT), con accettazione esplicita.
      - Chi: il responsabile.
      - Skill: `collaudo-e-rilascio` per la checklist del collaudo; `prova-su-staging` per la prova finale e il suo esito.
      - Produce: la checklist del collaudo (in ClickUp) e l'esito della prova finale come voce di `history-and-decision.md`. Nessun documento.
      - Si chiude quando: il cliente ha accettato in modo esplicito.
   2. **Preparazione**. Si concorda con il cliente il piano di rilascio. Il piano di rilascio comprende le particolarità tecniche di questo rilascio (per esempio migrazioni, regole del server, riavvii, cache, ritorno alla versione precedente). L'incaricato della pubblicazione legge il piano di rilascio e il capitolo Pubblicazione vigente del Documento tecnico prima di pubblicare, di norma il lunedì.
      - Chi: il responsabile; l'incaricato della pubblicazione per la lettura.
      - Skill: `collaudo-e-rilascio` per il piano di rilascio e le particolarità tecniche.
      - Produce: il piano di rilascio concordato, voce di `history-and-decision.md` con le particolarità tecniche; il testo per il cliente è un messaggio in `source`. Il Documento tecnico non cambia in questa sottofase.
      - Si chiude quando: il piano è concordato con il cliente e le particolarità tecniche sono scritte.
   3. **Pubblicazione**. L'incaricato della pubblicazione pubblica seguendo le particolarità del piano di rilascio e il capitolo Pubblicazione, e fa le verifiche dopo ogni passo e a pubblicazione finita. Se qualcosa fallisce si torna alla versione precedente, con una nuova data e un avviso immediato al cliente. A pubblicazione verificata si invia al cliente l'avviso di sistema in produzione.
      - Chi: l'incaricato della pubblicazione; il responsabile per l'avviso al cliente.
      - Skill: nessuna.
      - Produce: una voce di `history-and-decision.md` (cosa è stato fatto, cosa è emerso). L'avviso al cliente è un messaggio, salvato in `source`.
      - Si chiude quando: il sistema è in produzione, le verifiche sono superate e il cliente è avvisato. Da qui decorre la garanzia.
   4. **Chiusura**. Si aggiornano i documenti con ciò che è stato realmente fatto e con ciò che è emerso durante la pubblicazione: Manuale del prodotto, Documento tecnico (compreso il capitolo Pubblicazione, dove entrano le regole introdotte dal progetto e le particolarità del rilascio) e i documenti degli altri lavori toccati. Si scrive il Report di progetto.
      - Chi: il responsabile.
      - Skill: `allineamento-documenti`, con `manuale-del-prodotto` e `documento-tecnico`; `report-di-progetto`.
      - Produce: i documenti aggiornati (con i nuovi PDF) e il Report di progetto in `log`.
      - Si chiude quando: i documenti sono aggiornati e il Report di progetto è scritto. Il progetto è chiuso.

Un diagramma di flusso dettagliato di tutte le fasi è in `presentation/schemi/diagramma-piano-di-progetto.html`.

## Kickoff: valutazione e indagine

L'indagine è l'analisi completa che precede la proposta: nulla viene promesso al cliente su una parte del sistema che non è stata guardata. Comprende le due parti della verifica preliminare delle Regole comuni (confronto con i lavori aperti e controllo del codice) e le porta più a fondo. Il suo risultato è lo Stato di partenza, che si registra in `history-and-decision.md`.

Il codice, in sola lettura:

- dove si trova la parte coinvolta e come è fatta;
- chi altro la usa: altre schermate, altre funzioni, integrazioni, dati condivisi;
- cosa fa davvero, confrontato con ciò che il cliente crede e con ciò che dicono i documenti;
- i comportamenti non documentati, che il cliente dà per scontato restino;
- lo stato del codice: test presenti o assenti, parti fragili, debito tecnico che renderebbe l'intervento più costoso;
- gli sviluppi non ancora rilasciati che toccano la stessa parte.

Gli altri lavori:

- progetti in corso, lavorazioni minori aperte, lavorazioni minori chiuse dopo l'ultima versione dei documenti (le loro Schede dicono cosa è cambiato senza che Manuale e Documento tecnico lo sappiano), variazioni registrate e consegne in garanzia sullo stesso sistema;
- cosa prevedono di cambiare nella stessa parte, e quando;
- i progetti già fatti, per i loro tempi reali.

I documenti:

- Manuale del prodotto e Documento tecnico del sistema, se esistono;
- quanto corrispondono al codice. Le differenze vanno elencate, perché il progetto dovrà sanarle.

Ogni affermazione dello Stato di partenza porta il suo grado di certezza: verificata, riferita oppure supposta. Una proposta non si scrive su affermazioni supposte: se il codice non è stato guardato, la fattibilità è provvisoria e la proposta lo dichiara.

**Stima a occhio.** Appena il progetto è assegnato il responsabile ne fa una in una decina di minuti, solo interna. Serve a calibrare il kickoff.

**Tempo del kickoff.** Vale il 10% della stima a occhio ed è fissato all'inizio. Dentro quel tempo il team fa la valutazione, la stima precisa e la prima versione della Proposta. Allo scadere la prima versione si invia comunque, con le incognite rimaste dichiarate, e ogni incognita diventa una issue di tipo Spike nella prima milestone. Il tempo non limita l'attesa del cliente: i giri di revisione successivi della Proposta, il Manuale e il Documento tecnico non rientrano.

**Stima precisa.** Si ricava dalla richiesta, analizzando la codebase, insieme ai tempi dei progetti già fatti letti nei loro Report di progetto. Si dichiara quanto è affidabile e quali fattori l'hanno determinata. Compare nella Proposta e si registra in `history-and-decision.md`.

## Conversazioni

Le riunioni, le telefonate e le altre conversazioni con il cliente si registrano, si trascrivono e si salvano nella cartella `source` del progetto, nella knowledge base. Si registra con un computer o un telefono e alla skill si consegna un semplice file audio. Audio, trascrizione e sintesi stanno in `source`, comune a tutte le fasi. Servono come materiale in più per le skill: dicono cosa è stato chiesto, deciso e confermato.

- **Trascrizione.** Il testo della conversazione, così com'è.
- **Sintesi della conversazione.** Il risultato dell'interpretazione del testo: richieste, decisioni, informazioni sul sistema, domande aperte, conferme, variazioni, e in quale documento del progetto vanno riportate. La produce la skill `interpretazione-conversazioni`, in un solo file per conversazione insieme al riepilogo scritto.
- **Riepilogo scritto.** Nello stesso file della sintesi. Per una riunione o una telefonata in cui il cliente conferma o decide qualcosa, il responsabile invia il riepilogo scritto: ciò che è stato detto a voce vale solo dopo il riepilogo.

## Modifiche e variazioni

- **Modifica.** Un cambiamento alla Proposta di soluzione o al Manuale del prodotto prima della conferma. Si recepisce con una nuova versione numerata. Non ha limite di giri e non entra in History and decision.
- **Variazione.** Un cambiamento a ciò che il cliente ha già confermato, Manuale compreso, o a ciò che è già in sviluppo. Entra in History and decision (`log`), riceve una categoria e si gestisce con le regole delle Regole comuni. Non produce un documento: una voce in History and decision (con il codice V1, V2), un messaggio al cliente in `source` e, se cambia il lavoro, l'aggiornamento di Manuale, Documento tecnico e Piano dei SAL.

Il momento che separa le due cose è la conferma del Manuale del prodotto. Prima della conferma il cliente può cambiare idea quante volte vuole, perché ogni giro è un documento nuovo e non lavoro già fatto. Dopo la conferma ogni cambiamento ha un costo in ore e il cliente lo sa.

## Buffer e cliente che non risponde

Le regole su quale buffer si usa e in che ordine (buffer di sprint, buffer di milestone, leve per una milestone a rischio o in ritardo) e su cosa si fa quando il cliente non risponde (il progetto non è mai fermo) sono nel Ciclo di sviluppo. Una riprogrammazione non produce un documento: ricalcolo e leve sono una voce di tipo Riprogrammazione di `history-and-decision.md`, e la leva scelta è una voce Decisione.

## Contatti con il cliente

Il cliente viene contattato in momenti fissi, e ognuno ha una risposta attesa. Le regole di ogni contatto e il valore del silenzio sono nelle Regole comuni. I testi dei contatti sono messaggi: si salvano in `source`, ma non sono documenti.

- **Apertura della richiesta** (kickoff, osTicket). Si può rispondere per presa visione. Non serve risposta.
- **Incontro di kickoff** (riunione o call). Domande per capire il bisogno. Devono tornare le risposte e il nome del referente.
- **Invio della Proposta** (kickoff, email con presentazione in call). Devono tornare correzioni e risposte alle domande aperte, fino alla conferma.
- **Giri di revisione** (kickoff, Proposta e Manuale). Nuova versione con l'elenco di ciò che è cambiato.
- **Invio del Manuale del prodotto** (kickoff, email con presentazione in call). Deve tornare la conferma, anche a voce, seguita dal riepilogo scritto.
- **Invio del Piano dei SAL** (kickoff, email). La stima vera di durata, le milestone e le date delle prove. Non serve risposta.
- **Prova di milestone** (sviluppo, UAT dal vivo con il cliente sullo staging). Messaggio di invito con data, ora e modalità e le story da provare sui criteri di accettazione. Deve tornare l'accettazione esplicita.
- **Collaudo finale e piano di rilascio** (rilascio). Prova finale sullo staging e data di pubblicazione. Deve tornare l'accettazione esplicita.
- **Pubblicazione** (rilascio, email). L'avviso a sistema in produzione.

## Strumenti visivi nel progetto

Le definizioni sono nelle Regole comuni. Nel progetto entrano così:

- **Wireframe**: facoltativi nella Proposta di soluzione per le schermate nuove o modificate, e nel Manuale del prodotto.
- **Mockup**: facoltativi nel Manuale, quando cambia l'aspetto grafico. Si disegnano in Claude Design a partire dai wireframe. Il cliente li approva con il Manuale, e la copia in PDF in `design` è quella che fa fede. La consegna del materiale alla grafica non è un documento: è una voce di `history-and-decision.md`.
- **Prototipo**: facoltativo nel Manuale. Non c'è una regola su quando serve: lo decide il responsabile.
- **Prova su staging**: nello sviluppo, a ogni milestone, e nel rilascio, al collaudo finale. Si fa dal vivo con il cliente (UAT), in call o di persona. L'esito è uno fra: accettata, accettata con difetti non bloccanti, non accettata per difetti bloccanti.

## Collaudo e rilascio

L'accettazione delle singole milestone non basta: prima della produzione si prova l'insieme, sullo staging, e il cliente lo accetta.

Collaudo finale:

- i percorsi che attraversano più milestone, dall'inizio alla fine;
- le parti del sistema che esistevano già e che il progetto ha toccato, per escludere regressioni;
- le integrazioni e i dati reali, o una copia fedele.

Piano di rilascio, concordato con il cliente e registrato in `history-and-decision.md`, insieme alle particolarità tecniche per l'incaricato della pubblicazione:

- data e ora, scelte per ridurre il disturbo a chi usa il sistema;
- cosa cambia per gli utenti e le eventuali interruzioni;
- come si torna alla versione precedente se qualcosa fallisce;
- chi va avvisato prima e dopo.

**Capitolo Pubblicazione.** La parte del Documento tecnico con tutto ciò che serve a chi pubblica: l'ordine dei passi, le regole del server (per esempio Apache), i riavvii (per esempio il server SSR), le cache su certe rotte, le migrazioni, le verifiche, il ritorno alla versione precedente. Un progetto lo aggiorna alla chiusura con le regole che ha introdotto e con le particolarità del suo rilascio, che fino ad allora stanno nel piano di rilascio; chi pubblica rilegge il capitolo vigente e il piano a ogni rilascio. Non è un documento a parte. Un'issue che cambia il modo di pubblicare lo annota già durante lo sviluppo (condizione della DoD base).

Dopo la pubblicazione si aggiornano i documenti: Manuale del prodotto e Documento tecnico descrivono ciò che è stato realmente fatto e ciò che è emerso durante la pubblicazione, e così i documenti degli altri lavori toccati. Decorre la garanzia, e il progetto è chiuso quando i documenti sono aggiornati e il Report di progetto è scritto. Le segnalazioni del cliente in garanzia (bug, variazioni piccole, richieste estetiche) si trattano con la skill `history-and-decision`: sono un imprevisto di capacità, usano la capacità delle lavorazioni minori con un prestito di ore se serve chi conosce la parte, e si tracciano senza riserva. La risposta al cliente è un messaggio e la segnalazione è una voce di `history-and-decision.md`. A fine periodo si compila la sezione sulla garanzia del Report di progetto.

## Imprevisti del progetto

Ogni imprevisto ha una risposta già decisa, applicata nella fase in cui si presenta. Gli imprevisti dello sviluppo (persone, tempi, cliente) stanno nel Ciclo di sviluppo, le variazioni nelle Regole comuni.

**Kickoff**

- **Un progetto entra come lavorazione minore.** Se soddisfa una delle condizioni del progetto si riclassifica.
- **La verifica dice che il lavoro non va aperto.** Si risponde al cliente con il motivo e il riferimento preciso.
- **La richiesta riguarda un sistema nuovo.** Si riclassifica e segue il Piano di prodotto.
- **Nessun responsabile adatto è disponibile.** Si decide con chi gestisce il team e, se serve, con il CEO.
- **Si parla con chi non decide.** Si chiede il nome del referente: vale solo la sua approvazione.
- **Le risposte non arrivano.** Vale la sezione "Il cliente non risponde" del Ciclo di sviluppo.
- **Comportamento del sistema non rilevato.** Si aggiunge allo Stato di partenza in `history-and-decision.md`. Se emerge dopo la conferma del Manuale è una variazione, e il referente sceglie se mantenerlo.
- **Il kickoff supera il tempo fissato.** Si chiude con le incognite elencate, da sciogliere con issue di tipo Spike.
- **Il codice non è accessibile.** Lo Stato di partenza lo dichiara, e la Proposta presenta la fattibilità e la stima come provvisorie.
- **Un punto della richiesta non è fattibile.** Va nella Proposta tra ciò che non si potrà fare, con il motivo e un'alternativa.
- **La soluzione è più grande della richiesta.** Si propone una divisione in più progetti, con il primo che ha valore da solo.
- **Revisioni che non convergono.** Call dedicata sui punti aperti, poi un'ultima versione. Non c'è un limite ai giri.
- **Risposta parziale alle domande.** Le domande senza risposta restano aperte e bloccano la conferma. Al cliente va l'elenco delle domande ancora aperte.
- **L'allineamento trova un conflitto con un altro lavoro.** Si risolve prima di scrivere il Manuale: si decide quale lavoro passa prima e cosa cambia nell'altro.
- **Il cliente chiede modifiche al Manuale.** Prima della conferma sono modifiche: nuova versione numerata. Dopo la conferma sono variazioni.
- **Manuale del prodotto e Documento tecnico in contrasto.** Vale il Manuale. Il Documento tecnico si corregge.
- **Il cliente conferma a voce.** Vale dopo il riepilogo scritto inviato dal responsabile.
- **Festività o ferie non considerate.** Si corregge il calendario e si ricalcolano le date.
- **La stima rifatta con le issue è più alta di quella iniziale.** Il cliente viene informato come per ogni stima, con il Piano dei SAL, e si spiega cosa è cambiato rispetto alla prima stima: le cattive notizie si comunicano subito.

**Sviluppo**

- **Una lavorazione minore urgente interrompe il lavoro.** Vale la sezione sui buffer del Ciclo di sviluppo.
- **La milestone è a rischio o in ritardo.** Vale la stessa sezione.
- **Il cliente non accetta la prova.** I difetti bloccanti si correggono e la prova si ripete. Una prova non si accetta in silenzio.

**Rilascio**

- **Regressione su qualcosa che funzionava.** È un bug bloccante: si corregge prima della pubblicazione.
- **Rilascio fallito.** Ritorno alla versione precedente e nuova data, con avviso immediato al cliente.
- **Il cliente non accetta il collaudo finale.** I difetti bloccanti si correggono e la prova si ripete.
- **Bug dopo il rilascio.** Corretto come pacchetto di garanzia.
- **Nuova richiesta presentata come bug.** Si applica il criterio delle Regole comuni: se il comportamento rispetta il Manuale è una variazione o una nuova lavorazione minore.

## Decisioni proprie di questo piano

Le decisioni comuni a tutti i piani sono nelle Regole comuni.

- **Pochi documenti, molta storia (2026-10-12).** Sono documenti veri, nella radice, solo Proposta, Manuale, Documento tecnico (con il Piano delle milestone) e Piano dei SAL. In `develop` stanno le Note di sprint e i Milestone report; in `log` il Report di progetto. Tutto il resto (Stato di partenza, stima precisa, piano di rilascio, scheda tecnica, esiti di prove e collaudi, variazioni, riprogrammazioni, garanzia) è storia e va in History and decision; le comunicazioni sono messaggi e vanno in `source`. Il capitolo Pubblicazione è parte del Documento tecnico. Il registro delle variazioni non esiste più: le variazioni sono voci di History and decision. Motivo: chi entra nella cartella deve trovare subito cosa fare, cosa è il progetto e come è andato, senza scavare in file che sono eventi.

- **UAT dal vivo (2026-10-12).** La prova del cliente sullo staging, a ogni milestone e al collaudo finale, è una sessione dal vivo (user acceptance test): il team presenta, il cliente prova e accetta. Non esiste più la demo facoltativa.

Nessuna decisione aperta.
