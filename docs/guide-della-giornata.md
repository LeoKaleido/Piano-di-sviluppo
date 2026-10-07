# Guide della giornata

Data: 2026-10-06

Una guida per ogni ruolo: cosa si fa all'inizio della giornata, durante, a fine giornata, e nel ritmo della settimana dello sprint. Servono a chi lavora ogni giorno. Non aggiungono regole: riassumono quelle dei piani. La fonte di verità restano le Regole comuni, i tre piani e il Ciclo di sviluppo. Lo strumento è ClickUp, organizzato come nello schema di ClickUp (`presentation/schemi/schema-clickup.html`).

I ruoli sono:

- **Sviluppatore.** Realizza le issue.
- **Project manager.** Il responsabile di un progetto.
- **Product lead.** Il responsabile di un prodotto.
- **Chi analizza.** Legge le richieste su osTicket e decide come trattarle (nel linguaggio comune, il gestore dei ticket).
- **Incaricato della pubblicazione.** Pubblica in produzione.
- **Supervisore.** Controlla stime, capacità e avanzamento.
- **Chi gestisce il team.** Designa le persone e decide le ore aggiuntive.

Lo stato delle issue in ClickUp è uno solo alla volta: BACKLOG, PLANNED, IN PROGRESS, TESTING, COMPLETED, CANCELLED. Un blocco non è uno stato: è la dipendenza di ClickUp.

## Sviluppatore

**Inizio giornata**

1. Si apre ClickUp e si guardano le proprie issue nella List dello sprint corrente, in stato PLANNED.
2. Si sceglie su quale lavorare, nell'ordine delle dipendenze. Si controlla che le issue da cui dipende siano COMPLETED e che nessun materiale del cliente la blocchi.
3. Si legge l'issue: descrizione, story del Manuale con il suo criterio di accettazione, checklist della DoD. Si leggono il `CLAUDE.md` e la documentazione per Claude delle repository toccate, e la Guida alla pubblicazione se l'issue tocca il rilascio.
4. Si sposta a IN PROGRESS solo l'issue su cui si lavora effettivamente, una alla volta.
5. Per progetti e prodotti si partecipa alla daily: cosa si è fatto, cosa si farà, cosa blocca. I ticket non hanno daily.

**Durante la giornata**

- Si sviluppa solo ciò che l'issue descrive. Una cosa non prevista dal Manuale non si aggiunge: si segnala al responsabile, che la tratta come variazione.
- Se emerge un'incognita che non si scioglie in poco tempo, si ferma e si avvisa il responsabile: nasce una issue di tipo spike a tempo limitato, poi una nuova stima.
- Se l'issue si rivela molto più grande della stima, si ferma e si avvisa il responsabile. Una issue oltre le 16 ore si divide.
- Se qualcosa blocca, si imposta la dipendenza in ClickUp lo stesso giorno e si scrive la causa in un commento. Il responsabile si avvisa subito e si dice anche nella daily. Lo stato non cambia.
- Le ore si tracciano sull'issue con il tracciamento del tempo di ClickUp, mentre si lavora o a fine giornata.
- Se l'issue cambia il modo di pubblicare (regole del server, cache, riavvii, variabili), si annota per la Guida alla pubblicazione con un commento e l'etichetta `guida`.
- Se il cliente chiede qualcosa direttamente, non si accetta: si risponde che la richiesta passa dal responsabile e gliela si inoltra.
- Se si viene chiamati su un ticket urgente: si mette in pausa l'issue in corso, si lascia salvato il lavoro, si scrive in un commento lo stato in cui si trova e la si riporta a PLANNED. Le ore vanno sul ticket.

**Quando l'issue è conclusa**

1. Il lavoro è sullo staging e la checklist della DoD è spuntata, tranne la revisione.
2. Si sposta a TESTING e si chiede la revisione del codice (skill `revisione-codice`).
3. Con commenti bloccanti l'issue torna a IN PROGRESS. Con la revisione approvata e la DoD completa si sposta a COMPLETED.
4. I commenti "da correggere" che escono dall'issue diventano nuove issue in BACKLOG. Un difetto trovato in un'issue COMPLETED è una nuova issue di tipo bug: COMPLETED non si riapre.

**Fine giornata**

- Gli stati in ClickUp sono aggiornati, le ore del giorno sono tracciate e il lavoro è salvato.
- Per ogni issue ancora in corso c'è un commento breve sullo stato.
- Se la stima di un'issue si è rivelata sbagliata, lo si scrive nel commento: serve al margine della milestone.

**Se si lavora su un ticket**

- Il ticket è un task nel Folder "Ticket", con la stessa catena di stati: da PLANNED a IN PROGRESS, a TESTING quando il lavoro è sullo staging, a COMPLETED dopo la revisione di una seconda persona. Si legge la Scheda di intervento prima di iniziare e si corregge la voce "Su cosa intervenire" se si sono toccate parti diverse da quelle previste.
- Se la stima è superata si avvisa chi ha analizzato. Oltre le 2 settimane il ticket si ferma e diventa progetto.
- Il ticket non ha daily né scheda tecnica di rilascio. A ticket pubblicato si risponde al cliente nel ticket, con un messaggio breve; dopo la chiusura si aggiornano i documenti con `allineamento-documenti`.
- Chi presta ore a un ticket lo fa su decisione di chi gestisce il team, prima della pianificazione dello sprint del progetto.
- Se succede qualcosa che conta, si annota nello storico e nelle decisioni del ticket (skill `storico-lavorazione` e `registro-decisioni`).

**Nella settimana dello sprint**

- Durante lo sprint si comunica al responsabile quante ore si hanno realmente nello sprint successivo, tolte ferie e altri impegni.
- Venerdì, a fine sprint, si rivaluta la stima delle proprie issue non COMPLETED e si aggiornano gli stati.
- Il lunedì mattina si parte dalla List dello sprint in ClickUp.

## Project manager

**Nel kickoff**

1. Appena il progetto è assegnato: stima a occhio della durata, in una decina di minuti, solo interna, e tempo del kickoff pari al 10%. Si crea la cartella della lavorazione con `storico.md` e `decisioni.md` vuoti.
2. Valutazione: confronto con i lavori aperti, controllo del codice, incontro con il cliente per il bisogno e il nome del referente (skill `kickoff` e `interpretazione-conversazioni`). Si scrive lo Stato di partenza, con le decisioni in testa.
3. Stima precisa della durata, dalla richiesta e dalla codebase.
4. Proposta di soluzione con la stima (skill `proposta-di-soluzione`): la prima versione dentro il tempo del kickoff, poi i giri con il cliente fino alla conferma, con il riepilogo scritto.
5. Manuale del prodotto (skill `manuale-del-prodotto`) e conferma del cliente, con il riepilogo scritto.
6. Documento tecnico e capitolo Milestone, issue in ClickUp, Piano dei SAL inviato al cliente (skill `documento-tecnico` e `piano-delle-milestone`). Alla fine si pianifica il primo sprint.

**Inizio giornata (in sviluppo)**

1. Si apre la List della milestone in corso: le issue per stato, i commenti nuovi, le issue con una dipendenza che le blocca, il margine della milestone.
2. Si guardano i materiali del cliente in scadenza nella List "Materiali". Se uno è in ritardo si invia un sollecito scritto e si sposta il lavoro che non ne dipende.
3. Si legge ciò che il cliente ha scritto su osTicket o per email. Ogni richiesta del cliente passa da lui.
4. Si partecipa alla daily con il team.

**Durante la giornata**

- Si risponde al cliente. Ciò che il cliente conferma o decide a voce vale solo dopo un riepilogo scritto, inviato dal project manager.
- Ogni riunione o telefonata si registra: l'audio si consegna alla skill `interpretazione-conversazioni`, che produce la sintesi e il riepilogo.
- Una richiesta del cliente che i documenti confermati non prevedono è una variazione: si registra, si categorizza, si stima l'impatto (skill `variazione`). Non si accetta in call e non entra mai nello sprint in corso.
- Un blocco segnalato dal team si risolve o si porta a chi può risolverlo.
- Una issue che si rivela più grande della stima, o un'incognita, si decide con chi sviluppa: spike, divisione, nuova stima.
- Un ticket urgente che toglie una persona al progetto: si registra l'effetto sulla milestone e, se una data già comunicata cambia, il cliente è avvisato subito.

**Fine giornata**

- Gli stati in ClickUp sono coerenti con il lavoro fatto.
- Ciò che è successo oggi e che conta (una conferma, una richiesta, un imprevisto, un ritardo del cliente) è nello storico della lavorazione (skill `storico-lavorazione`), e ogni decisione presa è nel Registro delle decisioni (skill `registro-decisioni`). Si popolano a mano.
- Se una data già comunicata cambia, il cliente è già stato avvisato.

**Nella settimana dello sprint**

- **Venerdì.** Si scrive la Nota di sprint (skill `sprint`): fatto, non fatto, ore, imprevisti, margine della milestone. Se la milestone è a rischio o in ritardo si usa `riprogrammazione`.
- **Venerdì sera o lunedì mattina.** Si pianifica lo sprint successivo in ClickUp, con chi sviluppa: dipende dalla nota. Il supervisore controlla stime e capacità. Le issue scelte passano a PLANNED nella List dello sprint.
- **Fine milestone.** Si prepara il Milestone report e il messaggio per la prova (skill `milestone-report` e `prova-su-staging`), il cliente prova lo staging e accetta in modo esplicito.
- **Rilascio.** Si segue il collaudo, il piano di rilascio, la Guida alla pubblicazione e la chiusura con l'aggiornamento dei documenti.
- **Chiusura.** Si scrive il Report di progetto (skill `report-di-progetto`) a partire dallo storico e dal Registro delle decisioni. Durante la garanzia le segnalazioni del cliente si trattano con `pacchetto-di-garanzia`, e a fine periodo si compila la sezione sulla garanzia del Report di progetto.

**Cosa non si fa**

- Non si comunica un ritardo a metà milestone senza averlo calcolato col margine.
- Non si accetta una variazione a voce.
- Non si cambia lo stato delle issue al posto di chi sviluppa.

## Product lead

Il product lead segue la guida del project manager e in più:

- nel kickoff non indaga il codice: analizza il contesto del cliente (come lavora, chi userà il prodotto, con quali sistemi dialogherà), e non assegna l'urgenza;
- dopo la Proposta confermata guida la sottofase di prototipo e design: sessioni guidate sul prototipo, approvazione scritta di prototipo e mockup prima del Manuale;
- guida il prodotto per release: la divisione in release confermata nella Proposta guida la scelta delle milestone;
- la prima milestone è quella delle fondamenta (infrastruttura, ambienti, parti mai affrontate), con le incognite dell'analisi come spike;
- per il lancio scrive con la skill `piano-di-lancio` il Piano di lancio, che il referente approva, cura dati iniziali e formazione, e dopo la messa in produzione segue l'assistenza rafforzata.

## Chi analizza

**Inizio giornata**

1. Si leggono le richieste nuove su osTicket. Non ci sono termini di presa in carico: si leggono subito e si prendono in carico appena possibile.
2. Per ognuna si assegna l'urgenza sui fatti descritti, non sul tono. Se è urgente si avvia subito il percorso d'urgenza: si sceglie la persona che conosce meglio la parte coinvolta, anche se lavora a un progetto.

**Durante la giornata**

1. Per una richiesta non urgente si usa la skill `kickoff-ticket`: confronto con i lavori aperti e controllo del codice, dentro un tempo massimo del 10% di una stima a occhio.
2. Si decidono: categoria, esito (da fare, non da fare, da fare in parte, da rimandare), stima, tipo, responsabile. Se non è un ticket, la richiesta esce dal piano dei ticket e segue il suo piano: per un progetto si designa il project manager con chi gestisce il team.
3. Se il lavoro non va aperto, si risponde al cliente con il motivo e il riferimento preciso, e la richiesta si chiude.
4. Se servono chiarimenti, si pongono al cliente domande puntuali. Il cliente risponde quando vuole: la richiesta resta sospesa informalmente, senza termini.
5. Quando si crea la cartella del ticket si creano anche i file vuoti `storico.md` e `decisioni.md`. Per un ticket da lavorare si scrive la Scheda di intervento con la skill `scheda-di-intervento`, e si crea il task in ClickUp nel Folder "Ticket", in BACKLOG, con tipo, urgenza, scadenza, stima e checklist della DoD.
6. Si sceglie il ticket per lo sprint: da BACKLOG a PLANNED nella List dello sprint, assegnato a una persona con capacità. Un ticket normale parte dalle persone sempre disponibili per i ticket. Se non bastano si chiede a chi gestisce il team un prestito di ore da un progetto. Un ticket a tempo perso usa solo la capacità che avanza.
7. Appena il ticket è assegnato si può rispondere al cliente per presa visione, senza dichiarare una data di consegna.
8. Se lo sviluppatore avvisa che la stima è superata, si aggiorna la stima. Se il ticket supera le 2 settimane si riclassifica come progetto.

**Fine giornata**

- Ogni richiesta letta ha una decisione o una domanda al cliente.
- I ticket urgenti sono presi in carico.

## Incaricato della pubblicazione

**Prima della pubblicazione**

- Il lunedì, di norma, si leggono i documenti di aiuto al rilascio: piano di rilascio, scheda tecnica di rilascio, Guida alla pubblicazione.
- Si controlla che il ritorno alla versione precedente sia descritto e che i backup siano previsti.

**Durante la pubblicazione**

- Si pubblica seguendo la scheda tecnica e la Guida. Non avviene in CI: la segue una persona.
- Dopo ogni passo e alla fine si fanno le verifiche scritte nella scheda.
- Se qualcosa fallisce si torna alla versione precedente e si avvisa subito il responsabile.
- Si può rilasciare anche a metà sprint. Di venerdì sera si pubblica solo un'urgenza, entro le 18.

**Dopo la pubblicazione**

- Si avvisa il responsabile a pubblicazione fatta e verificata: solo allora il responsabile avvisa il cliente, o risponde nel ticket se è un ticket.
- Si annota tutto ciò che è emerso (un passo mancante, un riavvio, una cache): va nella Guida alla pubblicazione.

## Supervisore

- Alla pianificazione di ogni sprint controlla che le stime siano plausibili e che la somma delle ore non superi la capacità di ogni persona al netto del buffer di sprint.
- Controlla che una persona su più lavorazioni non superi la sua capacità sommando i piani.
- Guarda il margine di ogni milestone e gli stati delle issue in ClickUp: una milestone a rischio o in ritardo chiede una riprogrammazione.

## Chi gestisce il team

- Designa il responsabile di un progetto o di un prodotto, con il CEO se serve, in pochi minuti.
- Designa l'incaricato della pubblicazione, da un elenco con disponibilità e sostituto.
- Decide se aggiungere ore a una milestone in ritardo, con il CEO se serve.
- Designa le persone sempre disponibili per i ticket e decide i prestiti di ore dai progetti, prima della pianificazione dello sprint del progetto interessato.
- Decide chi subentra se una persona esce dal team o è assente a lungo.
- Risolve i conflitti tra lavori che toccano la stessa parte di codice.
