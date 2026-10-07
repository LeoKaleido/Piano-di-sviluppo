# Piano dei ticket

Data: 2026-10-06

Un ticket è una lavorazione circoscritta su un sistema esistente, da circa 2 ore a 2 settimane. Il cliente non apre una lavorazione: apre una richiesta su osTicket, e l'azienda decide se diventa un ticket, un progetto o un prodotto. Il nome "ticket" indica sia la richiesta aperta su osTicket sia la lavorazione piccola: è una scelta voluta, e il contesto chiarisce di quale si parla.

Questo piano contiene solo ciò che è proprio dei ticket. Le regole valide per ogni lavoro (glossario, verifica preliminare, contatti, documenti, date, garanzia) sono nelle Regole comuni. Lo sviluppo (sprint, capacità, buffer) è nel Ciclo di sviluppo. È il riferimento per tutto il team.

## Cos'è un ticket

Una richiesta è un ticket quando riguarda un sistema esistente e non soddisfa nessuna delle condizioni che ne fanno un progetto, elencate nelle Regole comuni. La categoria (ticket, progetto o prodotto) la decide sempre l'azienda, mai il cliente.

Un ticket può essere:

- **Bug.** Il sistema fa una cosa diversa da quanto previsto: su un progetto chiuso mesi fa, su una parte del prodotto rotta da un'altra pubblicazione, per una svista di anni fa.
- **Feature.** Una funzione nuova o cambiata, ma contenuta.
- **Entrambi.** Un bug la cui correzione richiede anche una funzione nuova o cambiata.
- **Assistenza.** Domanda, controllo o operazione che non cambia il codice.

Un ticket dura da circa 2 ore a 2 settimane. Se richiede più di 2 settimane è perché c'è stato un problema: si ferma e si riclassifica come progetto.

## Il flusso del ticket

Il ticket ha tre fasi: analisi, sviluppo e rilascio. Le fasi di sviluppo e rilascio hanno sottofasi, ognuna con la sua sottocartella nella knowledge base. Per ogni fase sono indicati chi la esegue, la skill da usare, il documento che produce e quando si chiude. Le skill sono nella cartella `skills/` della repo. Chi analizza è la persona che legge la richiesta e decide come trattarla. Il responsabile è lo sviluppatore a cui è assegnato il ticket.

1. **Analisi** (cartella `01-analisi`). Dalla richiesta su osTicket alla Scheda di intervento. Il cliente apre la richiesta su osTicket. Di rado indica anche una scadenza (ferie, Black Friday, un'emergenza): se c'è, chi analizza dice subito se è fattibile. Non cambia l'urgenza, che si decide sui fatti. Il ticket si legge subito e si prende in carico appena possibile: non ci sono termini di presa in carico. Chi analizza assegna subito l'urgenza, poi esegue la verifica preliminare delle Regole comuni (confronto con i lavori aperti e controllo del codice), con un tempo massimo pari al 10% di una stima a occhio. Alla fine sono decisi: la categoria (ticket, progetto o prodotto: se non è un ticket la richiesta esce da questo piano), l'esito della verifica (da fare, non da fare, da fare in parte, da rimandare), la stima in ore, il tipo (bug, feature, entrambi o assistenza), il responsabile. Se il lavoro va fatto, queste decisioni stanno in testa alla Scheda di intervento: il documento che dice allo sviluppatore cosa fare e su cosa mettere le mani, partendo da ciò che la verifica ha visto nel codice. La legge solo lo sviluppatore. Il ticket è creato anche in ClickUp come task nel Folder "Ticket", in BACKLOG, con tipo, urgenza, scadenza del cliente se c'è, stima e la checklist della DoD.
   - Chi: chi analizza.
   - Skill: `kickoff-ticket` per i controlli e le decisioni, `scheda-di-intervento` per la scheda.
   - Produce: la Scheda di intervento, nella nota interna del ticket, e il task in ClickUp. Se il lavoro non va aperto, la risposta al cliente con il motivo.
   - Si chiude quando: la scheda è completa, il task è in ClickUp e il responsabile può iniziare senza fare altre domande. Oppure la richiesta è chiusa perché il lavoro non va aperto, con la risposta al cliente.
2. **Sviluppo** (cartella `02-sviluppo`). Dalla scelta per lo sprint al lavoro completato. Non c'è daily.
   1. **Pianificazione.** Il ticket passa da BACKLOG a PLANNED quando è scelto per lo sprint: si aggiunge alla List dello sprint in ClickUp, assegnato al responsabile. Dipende dall'urgenza (vedi la sezione Capacità dei ticket). Al cliente: appena il ticket è assegnato si può rispondere per presa visione. Non si dichiara una data di consegna. La data di pubblicazione si comunica solo quando è certa, ed è facoltativo. Non ci sono documenti di sprint per i ticket: il supervisore controlla stime e capacità in ClickUp.
      - Chi: chi analizza sceglie il ticket e la persona; per un prestito di ore da un progetto decide chi gestisce il team.
      - Skill: nessuna. Per un ticket urgente che sposta altro lavoro, `riprogrammazione`.
      - Produce: il ticket in PLANNED nella List dello sprint.
      - Si chiude quando: il ticket ha un responsabile ed è in uno sprint, oppure per un ticket urgente quando il lavoro è partito.
   2. **Esecuzione.** Il responsabile porta il ticket a IN PROGRESS, sviluppa, e controlla il lavoro sulla DoD della scheda. A lavoro concluso e sullo staging lo porta a TESTING: la revisione del codice (skill `revisione-codice`) è sempre fatta da una seconda persona, anche per un ticket piccolo. Con la revisione approvata e la DoD completa il ticket passa a COMPLETED. Se scopre di aver toccato parti diverse da quelle previste, corregge la voce della scheda che le elenca.
      - Chi: il responsabile; un'altra persona per la revisione.
      - Skill: `revisione-codice`. `scheda-di-intervento` per la correzione a fine lavoro.
      - Produce: il lavoro sviluppato, rivisto e sullo staging, e la Scheda di intervento corretta.
      - Si chiude quando: ogni condizione della DoD è soddisfatta e il ticket è COMPLETED.
3. **Rilascio** (cartella `03-rilascio`). Dal lavoro completo alla chiusura e ai documenti.
   1. **Pubblicazione e chiusura** (sottocartella `01-pubblicazione`). Il lavoro va in produzione, passando dallo staging. Il rilascio e la chiusura coincidono: appena il lavoro è pubblicato e verificato il ticket è chiuso, e da quel momento decorre la garanzia. Il cliente non prova il lavoro prima. Il responsabile gli risponde con un messaggio breve nel ticket su osTicket (vedi la sezione Risposta al cliente): non c'è un documento a parte. L'incaricato della pubblicazione pubblica seguendo la Guida alla pubblicazione del sistema: un ticket non ha una scheda tecnica di rilascio. Si può rilasciare anche a metà sprint; secondo le Regole comuni, lo sprint finisce di venerdì e i documenti di aiuto al rilascio si leggono il lunedì.
      - Chi: l'incaricato della pubblicazione pubblica; il responsabile risponde nel ticket dopo l'avviso dell'incaricato.
      - Skill: nessuna.
      - Produce: il lavoro in produzione e la risposta al cliente nel ticket (nessun documento).
      - Si chiude quando: il lavoro è in produzione e verificato. Il ticket è chiuso.
   2. **Aggiornamento dei documenti** (sottocartella `02-aggiornamento-documenti`). Dopo la chiusura, il responsabile esegue le procedure interne: si aggiornano i documenti delle parti di codice toccate e quelli degli altri lavori coinvolti, come descritto nella sezione Aggiornamento dei documenti. Il cliente non aspetta questa fase: il ticket per lui è già chiuso.
      - Chi: il responsabile.
      - Skill: `allineamento-documenti`. Per riscrivere il Manuale del prodotto, il Documento tecnico e la Guida alla pubblicazione si usano `manuale-del-prodotto`, `documento-tecnico` e `guida-alla-pubblicazione`.
      - Produce: i documenti aggiornati.
      - Si chiude quando: i documenti sono aggiornati. È l${q}ultimo passo interno del lavoro.

Alcuni ticket seguono un percorso abbreviato:

- **Ticket urgente.** Segue il percorso d'urgenza.
- **Assistenza.** Non cambia il codice: la Scheda di intervento dice cosa controllare o fare, e la risposta al cliente, scritta nel ticket, contiene le istruzioni o il risultato del controllo. Non c'è rilascio: la chiusura coincide con l'invio della risposta.

Un diagramma di flusso dettagliato di tutte le fasi, con skill, documenti, attenzioni ed eventi possibili, è in `presentation/schemi/diagramma-piano-dei-ticket.html`.

## Storico e decisioni

Nella cartella del ticket nella knowledge base ci sono i file `storico.md` e `decisioni.md`, nati vuoti con la cartella e popolati a mano con le skill `storico-lavorazione` e `registro-decisioni` quando succede qualcosa che conta. Per un ticket restano brevi. Un ticket non ha un Report di progetto.

## Capacità dei ticket

I ticket hanno una capacità propria, fatta di due parti.

- **Persone sempre disponibili.** Alcune persone, designate da chi gestisce il team, sono disponibili per i ticket in ogni sprint. I ticket normali partono da loro.
- **Persone prese in prestito dai progetti.** Se la capacità delle persone sempre disponibili non basta, o serve chi conosce una parte del codice, chi gestisce il team può prendere in prestito ore di uno sviluppatore da un progetto per lo sprint. Il prestito si decide prima della pianificazione dello sprint del progetto, che ne tiene conto: le ore prestate riducono la capacità del progetto e il margine della sua milestone. Se una data già comunicata cambia, il cliente del progetto è avvisato.

Come entrano nello sprint:

- **Urgente.** Non aspetta: parte subito, con le ore dal buffer di sprint. Può togliere persone ai progetti.
- **Normale.** Entra nel primo sprint in cui c'è capacità per le ore stimate, prima dalle persone sempre disponibili, poi con un prestito. Se non c'è posto aspetta lo sprint successivo.
- **A tempo perso.** Entra solo con la capacità che avanza. Non usa mai un prestito.

## Scheda di intervento

La Scheda di intervento è il documento di lavoro interno del ticket. Il cliente non la legge. È scritta per lo sviluppatore, e il suo contenuto serve anche, a fine lavoro, come fonte per l'aggiornamento dei documenti: per questo le parti di codice vanno indicate con precisione.

Ogni scheda contiene queste voci:

- **Cosa fare.** L'intervento, con le story del Manuale del prodotto a cui si riferisce, se esiste un Manuale.
- **Su cosa intervenire.** Le parti del sistema da toccare, ricavate dalla verifica preliminare: repository, moduli, file. Se l'analisi trova codice condiviso con altre parti, lo segnala.
- **Stima.** Le ore previste per il lavoro. Serve anche alla pianificazione dello sprint.
- **DoD.** Le condizioni verificabili che chiudono il lavoro.
- **Documenti collegati.** I lavori e i documenti toccati, ricavati dalla verifica preliminare: Manuale del prodotto e Documento tecnico del sistema, documenti di progetti, altri ticket.

La scheda riporta anche la categoria, il tipo, l'urgenza e il responsabile decisi nell'analisi, in testa, e, se il cliente l'ha indicata, la scadenza.

La scheda di un ticket rapido è di poche righe.

## Risposta al cliente

Un ticket non ha un documento per il cliente. Il responsabile risponde con un messaggio breve nel ticket su osTicket, quando il lavoro è in produzione. È una comunicazione, non una richiesta di approvazione: il cliente non conferma e non prova.

Dice cosa è stato risolto o aggiunto, in parole comuni, nei termini di ciò che l${q}utente vede e può fare. Non contiene file, codice, moduli, tecnologie, ore né prezzi, e non spiega la causa di un bug.

- Per un bug: cosa non funzionava e cosa funziona ora.
- Per una feature: cosa il prodotto fa in più o in modo diverso.
- Per un${q}assistenza: la risposta, con le istruzioni utili.
- Se qualcosa di chiesto resta fuori: si dice, con il motivo.

## Aggiornamento dei documenti

Un ticket può cambiare ciò che dicono i documenti di altri lavori. Per questo, dopo il rilascio e la chiusura (sottofase 3.2), per un ticket urgente come per gli altri:

1. Si aggiornano i documenti delle parti di codice toccate, a partire dalla voce "Su cosa intervenire" della Scheda di intervento, corretta se serve: Manuale del prodotto, Documento tecnico e, se il ticket ha cambiato il modo di pubblicare, Guida alla pubblicazione del sistema.
2. Si cercano i documenti degli altri lavori, progetti e ticket, che riguardano le stesse parti di codice, a partire dalla voce "Documenti collegati", che li cita per codice della lavorazione. Si modificano quelli su cui il ticket ha cambiato qualcosa di rilevante.

## Urgenze

L'urgenza si assegna per prima, sui fatti descritti e non sul tono della richiesta.

- **Urgente.** Sistema fermo in produzione, utenti che non possono lavorare, dati a rischio. Si interviene subito. Può togliere persone ai progetti.
- **Normale.** Tutto il resto. Usa la capacità dei ticket e, se serve, un prestito concordato.
- **A tempo perso.** Senza scadenza. Viene dopo tutto il resto e non toglie nessuno a un progetto.

**Percorso d'urgenza.** Vale solo per il ticket urgente.

1. Si sceglie la persona che conosce meglio la parte coinvolta, anche se sta lavorando a un progetto.
2. La persona mette in pausa la issue in corso: lascia salvato il lavoro, scrive lo stato in un commento e riporta la issue a PLANNED.
3. Si corregge e l'incaricato della pubblicazione pubblica. Il ticket si chiude alla pubblicazione e da lì decorre la garanzia. La revisione del codice si fa comunque, anche dopo se serve per non ritardare la correzione.
4. A problema risolto si scrive la Scheda di intervento a posteriori: cosa è successo, causa, correzione, parti toccate.
5. Se la correzione è provvisoria, si apre una issue per rimuovere la causa.
6. Si esegue la verifica preliminare saltata all'inizio, per sapere quali lavori e quali documenti sono stati toccati.
7. Si risponde al cliente nel ticket e, dopo la chiusura, si aggiornano i documenti, come per ogni ticket.

Queste regole proteggono gli altri lavori dalle interruzioni:

- **L'interruzione si decide in un solo punto.** Le urgenze non si accettano direttamente dal cliente.
- **Le ore vanno sul ticket.** Non si contano come lavoro di progetto, così le stime di progetto restano leggibili.
- **Prima il buffer di sprint, poi il resto dello sprint.** Oltre il buffer di sprint escono dallo sprint le issue meno prioritarie e si rifà il controllo della milestone.

## Il ticket in ClickUp

Un ticket è un task nel Folder "Ticket" dello Space "Lavorazioni". Il nome è il codice di osTicket con un titolo breve. Ha gli stessi stati delle issue (BACKLOG, PLANNED, IN PROGRESS, TESTING, COMPLETED, CANCELLED). I campi sono tipo (bug, feature, entrambi, assistenza), urgenza, scadenza del cliente se c'è, stima in ore e la checklist della DoD, con la DoD base. Se un ticket è lungo si divide in più issue dello stesso ticket, come sottotask. Un ticket che passa a progetto esce dal Folder "Ticket" e segue il Piano di progetto.

## Garanzia

La garanzia vale anche per i ticket, con le regole delle Regole comuni. Un ticket dura al massimo 2 settimane, quindi il 50% della durata pianificata è sempre sotto il minimo: la garanzia di un ticket è sempre il minimo, 15 giorni lavorativi dal rilascio, che coincide con la chiusura.

Le segnalazioni del cliente in garanzia sono un pacchetto di garanzia, non un ticket nuovo: bug, variazioni piccole e richieste estetiche si trattano con la skill `pacchetto-di-garanzia`, nella cartella `04-garanzia` del ticket. Il lavoro è un imprevisto di capacità e usa la capacità dei ticket, con un prestito di ore se serve chi conosce la parte. Le ore si tracciano senza riserva. A fine periodo si annota una voce nello storico: le ore e la causa.

## Imprevisti del ticket

Ogni imprevisto ha una risposta già decisa, applicata nella fase in cui si presenta.

**Analisi**

- **Il cliente dichiara urgente ciò che non lo è.** L'urgenza si assegna sui fatti. Al cliente si comunicano livello e tempi.
- **La richiesta è in realtà un progetto o un prodotto.** Si riclassifica e segue il piano della nuova categoria.
- **Una richiesta contiene più lavori.** Si divide in un ticket per lavoro.
- **La verifica dice che il lavoro non va aperto.** Si risponde al cliente con il motivo e il riferimento preciso, e il ticket si chiude.
- **La richiesta è vaga.** Chiarimenti con il cliente, con domande puntuali. La scheda si scrive solo dopo la risposta. Il cliente risponde quando vuole: se risponde tardi il ticket ha un ritardo e resta sospeso informalmente, senza termini.

**Sviluppo**

- **Nessuna capacità nel primo sprint utile.** I ticket stanno in una coda ordinata per urgenza e data di apertura, in BACKLOG. A tempo perso resta in fondo.
- **Persona adatta non disponibile.** Se il ticket è urgente si riassegna, altrimenti si valuta un prestito o slitta.
- **Il lavoro supera la stima.** Il responsabile avvisa chi ha analizzato, che aggiorna la stima. Se il lavoro supera 2 settimane si ferma e si riclassifica come progetto.
- **Il ticket cresce fino a diventare un progetto.** Si ferma e segue il Piano di progetto.
- **Nuove richieste aggiunte allo stesso ticket.** Diventano un ticket nuovo.
- **Servono dati o materiali dal cliente.** Si chiedono nel ticket, che resta sospeso informalmente, senza termini. Il cliente consegna quando vuole e la consegna slitta degli stessi giorni.
- **Assenza del responsabile.** Se il ticket è urgente si riassegna, altrimenti slitta.
- **Un ticket urgente interrompe il lavoro.** La issue in corso torna a PLANNED con un commento sullo stato.

**Rilascio**

- **La correzione rompe altro.** Il ticket si riapre come urgente.

**Dopo la chiusura**

- **Riapertura.** Entro la garanzia, un bug è un pacchetto di garanzia. Oltre, è un ticket nuovo.

## Decisioni proprie di questo piano

Le decisioni comuni a tutti i piani sono nelle Regole comuni.

Nessuna decisione aperta.
