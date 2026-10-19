# Piano delle lavorazioni minori

Data: 2026-10-12

Una lavorazione minore è una lavorazione circoscritta su un sistema esistente, da circa 2 ore a 2 settimane. Il cliente non apre una lavorazione: apre un ticket su osTicket, e l'azienda decide se diventa una lavorazione minore, un progetto o un prodotto. Le due cose hanno nomi diversi per non confonderle: "ticket" indica solo la richiesta aperta su osTicket, "lavorazione minore" indica solo la categoria di lavoro. Il codice del ticket resta il codice della lavorazione, qualunque sia la categoria.

Questo piano contiene solo ciò che è proprio delle lavorazioni minori. Le regole valide per ogni lavoro (glossario, verifica preliminare, contatti, documenti, date, garanzia) sono nelle Regole comuni. Lo sviluppo (sprint, capacità, buffer) è nel Ciclo di sviluppo. È il riferimento per tutto il team.

## Cos'è una lavorazione minore

Una richiesta è una lavorazione minore quando riguarda un sistema esistente e non soddisfa nessuna delle condizioni che ne fanno un progetto, elencate nelle Regole comuni. La categoria (lavorazione minore, progetto o prodotto) la decide sempre l'azienda, mai il cliente.

Una lavorazione minore può essere:

- **Bug.** Il sistema fa una cosa diversa da quanto previsto: su un progetto chiuso mesi fa, su una parte del prodotto rotta da un'altra pubblicazione, per una svista di anni fa.
- **Feature.** Una funzione nuova o cambiata, ma contenuta.
- **Entrambi.** Un bug la cui correzione richiede anche una funzione nuova o cambiata.
- **Assistenza.** Domanda, controllo o operazione che non cambia il codice.

Una lavorazione minore dura da circa 2 ore a 2 settimane. Se richiede più di 2 settimane è perché c'è stato un problema: si ferma e si riclassifica come progetto.

## Il flusso della lavorazione minore

La lavorazione minore ha tre fasi: analisi, sviluppo e rilascio. La fase di sviluppo ha sottofasi. Per ogni fase sono indicati chi la esegue, la skill da usare, il documento che produce e quando si chiude. Le skill sono nella cartella `skills/` della repo. Chi analizza è la persona che legge la richiesta e decide come trattarla. Il responsabile è lo sviluppatore a cui è assegnata la lavorazione.

1. **Analisi**. Dal ticket su osTicket alla Scheda di intervento. Il cliente apre il ticket su osTicket. Di rado indica anche una scadenza (ferie, Black Friday, un'emergenza): se c'è, chi analizza dice subito se è fattibile. Non cambia l'urgenza, che si decide sui fatti. Il ticket si legge subito e si prende in carico appena possibile: non ci sono termini di presa in carico. Chi analizza assegna subito l'urgenza, poi esegue la verifica preliminare delle Regole comuni (confronto con i lavori aperti e controllo del codice), con un tempo massimo pari al 10% di una stima a occhio. Alla fine sono decisi: la categoria (lavorazione minore, progetto o prodotto: se non è una lavorazione minore la richiesta esce da questo piano), l'esito della verifica (da fare, non da fare, da fare in parte, da rimandare), la stima in ore, il tipo (bug, feature, entrambi o assistenza), il responsabile. Se il lavoro va fatto, queste decisioni stanno in testa alla Scheda di intervento: il documento che dice allo sviluppatore cosa fare e su cosa mettere le mani, partendo da ciò che la verifica ha visto nel codice. La legge solo lo sviluppatore. La lavorazione è creata anche in ClickUp come task nel Folder "Lavorazioni minori", in BACKLOG, con tipo, urgenza, scadenza del cliente se c'è, stima e la checklist della DoD.
   - Chi: chi analizza.
   - Skill: `kickoff-minore` per i controlli e le decisioni, `scheda-di-intervento` per la scheda.
   - Produce: la Scheda di intervento (con il PDF), nella nota interna del ticket, e il task in ClickUp. Se il lavoro non va aperto, la risposta al cliente con il motivo.
   - Si chiude quando: la scheda è completa, il task è in ClickUp e il responsabile può iniziare senza fare altre domande. Oppure la richiesta è chiusa perché il lavoro non va aperto, con la risposta al cliente.
2. **Sviluppo**. Dalla scelta per lo sprint al lavoro completato. Non c'è daily.
   1. **Pianificazione.** La lavorazione passa da BACKLOG a PLANNED quando è scelta per lo sprint: si aggiunge alla List dello sprint in ClickUp, assegnata al responsabile. Dipende dall'urgenza (vedi la sezione Capacità delle lavorazioni minori). Al cliente: appena la lavorazione è assegnata si può rispondere per presa visione nel ticket. Non si dichiara una data di consegna. La data di pubblicazione si comunica solo quando è certa, ed è facoltativo. Non ci sono documenti di sprint per le lavorazioni minori: il supervisore controlla stime e capacità in ClickUp.
      - Chi: chi analizza sceglie la lavorazione e la persona; per un prestito di ore da un progetto decide chi gestisce il team.
      - Skill: nessuna. Per una lavorazione minore urgente che sposta altro lavoro, `history-and-decision`.
      - Produce: la lavorazione in PLANNED nella List dello sprint.
      - Si chiude quando: la lavorazione ha un responsabile ed è in uno sprint, oppure, se urgente, quando il lavoro è partito.
   2. **Esecuzione.** Il responsabile porta la lavorazione a IN PROGRESS, sviluppa, e controlla il lavoro sulla DoD della scheda. A lavoro concluso e sullo staging la porta a TESTING: la revisione del codice (skill `revisione-codice`) è sempre fatta da una seconda persona, anche per una lavorazione piccola. Con la revisione approvata e la DoD completa la lavorazione passa a COMPLETED. Se scopre di aver toccato parti diverse da quelle previste, corregge la voce della scheda che le elenca (nuova versione, con il PDF). A lavoro concluso registra in History and decision cosa è stato fatto e l'effetto sui documenti del sistema.
      - Chi: il responsabile; un'altra persona per la revisione.
      - Skill: `revisione-codice`. `scheda-di-intervento` se il piano cambia, `history-and-decision` per la voce di fine lavoro.
      - Produce: il lavoro sviluppato, rivisto e sullo staging, e la voce di History and decision con ciò che è stato fatto e con l'effetto sui documenti del sistema. La Scheda cambia solo se cambia il piano.
      - Si chiude quando: ogni condizione della DoD è soddisfatta e la lavorazione è COMPLETED.
3. **Rilascio**. Dal lavoro completo alla chiusura.
   1. **Pubblicazione e chiusura**. Il lavoro va in produzione, passando dallo staging. Il rilascio e la chiusura coincidono: appena il lavoro è pubblicato e verificato la lavorazione è chiusa, e da quel momento decorre la garanzia. Il cliente non prova il lavoro prima. Il responsabile gli risponde con un messaggio breve nel ticket su osTicket (vedi la sezione Risposta al cliente): non c'è un documento a parte, e una copia del messaggio si salva in `source`. L'incaricato della pubblicazione pubblica seguendo il capitolo Pubblicazione del Documento tecnico: una lavorazione minore non ha un piano di rilascio. Si può rilasciare anche a metà sprint; secondo le Regole comuni, lo sprint finisce di venerdì e il capitolo Pubblicazione si legge il lunedì.
      - Chi: l'incaricato della pubblicazione pubblica; il responsabile risponde nel ticket dopo l'avviso dell'incaricato.
      - Skill: nessuna.
      - Produce: il lavoro in produzione e la risposta al cliente nel ticket (nessun documento; copia in `source`); la voce di tipo Rilascio in History and decision e la riga della lavorazione nell'indice `lavorazioni-minori-chiuse.md`.
      - Si chiude quando: il lavoro è in produzione e verificato. La lavorazione è chiusa.

Alcune lavorazioni minori seguono un percorso abbreviato:

- **Lavorazione minore urgente.** Segue il percorso d'urgenza.
- **Assistenza.** Non cambia il codice: la Scheda di intervento dice cosa controllare o fare, e la risposta al cliente, scritta nel ticket, contiene le istruzioni o il risultato del controllo. Non c'è rilascio: la chiusura coincide con l'invio della risposta.

Un diagramma di flusso dettagliato di tutte le fasi, con skill, documenti, attenzioni ed eventi possibili, è in `presentation/schemi/diagramma-piano-delle-lavorazioni-minori.html`.

## La cartella della lavorazione minore

La cartella della lavorazione minore contiene `claude`, `source` e `log`, più il PDF nella radice. `claude` contiene i sorgenti Markdown della Scheda di intervento, il documento unico e principale della lavorazione, con tutte le versioni (bozza, completa, correzioni). Nella radice sta il PDF della versione corrente della Scheda. `source` contiene ciò che il cliente ha inviato e ciò che gli si è scritto (ticket, email, audio, trascrizioni, risposte e avvisi): i messaggi sono preparati con le skill e non sono documenti. `log` contiene la storia. Una lavorazione minore non crea né aggiorna Manuale e Documento tecnico: lascia traccia nella Scheda, e il primo progetto o prodotto sulla stessa parte la legge e aggiorna i documenti.

## History and decision

In `log` nella cartella della lavorazione minore nella knowledge base c'è il file `history-and-decision.md`, nato vuoto con la cartella e popolato a mano con la skill `history-and-decision` quando succede qualcosa che conta o si decide qualcosa. I gruppi sono Analisi, Sviluppo, Rilascio e Garanzia. Per una lavorazione minore restano brevi. Una lavorazione minore non ha un Report di progetto.

## Capacità delle lavorazioni minori

Le lavorazioni minori hanno una capacità propria, fatta di due parti.

- **Persone sempre disponibili.** Alcune persone, designate da chi gestisce il team, sono disponibili per le lavorazioni minori in ogni sprint. Le lavorazioni normali partono da loro.
- **Persone prese in prestito dai progetti.** Se la capacità delle persone sempre disponibili non basta, o serve chi conosce una parte del codice, chi gestisce il team può prendere in prestito ore di uno sviluppatore da un progetto per lo sprint. Il prestito si decide prima della pianificazione dello sprint del progetto, che ne tiene conto: le ore prestate riducono la capacità del progetto e il margine della sua milestone. Se una data già comunicata cambia, il cliente del progetto è avvisato.

Come entrano nello sprint:

- **Urgente.** Non aspetta: parte subito, con le ore dal buffer di sprint. Può togliere persone ai progetti.
- **Normale.** Entra nel primo sprint in cui c'è capacità per le ore stimate, prima dalle persone sempre disponibili, poi con un prestito. Se non c'è posto aspetta lo sprint successivo.
- **A tempo perso.** Entra solo con la capacità che avanza. Non usa mai un prestito.

## Scheda di intervento

La Scheda di intervento è il documento unico e principale della lavorazione minore, pensato per tenere leggera la documentazione interna. Il cliente non la legge. È scritta per lo sviluppatore, e resta come lascito della lavorazione: chi più avanti lavora sulla stessa parte (di solito un progetto) la legge e aggiorna i documenti del sistema. Per questo le parti di codice vanno indicate con precisione. Ha il PDF, nella radice, e tutte le sue versioni in `claude`.

Ogni scheda contiene queste voci:

- **Cosa fare.** L'intervento, con le story del Manuale del prodotto a cui si riferisce, se esiste un Manuale.
- **Su cosa intervenire.** Le parti del sistema da toccare, ricavate dalla verifica preliminare: repository, moduli, file. Se l'analisi trova codice condiviso con altre parti, lo segnala.
- **Stima.** Le ore previste per il lavoro. Serve anche alla pianificazione dello sprint.
- **DoD.** Le condizioni verificabili che chiudono il lavoro.
- **Documenti collegati.** I lavori e i documenti toccati, ricavati dalla verifica preliminare: Manuale del prodotto e Documento tecnico del sistema, documenti di progetti, altre lavorazioni minori.

La scheda è il piano dell'intervento: non riporta ciò che accade dopo. Cosa è stato fatto, l'effetto sui documenti del sistema (con la versione dei documenti a cui si riferisce) e il seguito in garanzia sono voci di History and decision. La scheda cambia, con una versione nuova e il suo PDF, solo se cambia il piano.

La scheda riporta anche la categoria, il tipo, l'urgenza e il responsabile decisi nell'analisi, in testa, e, se il cliente l'ha indicata, la scadenza.

La scheda di una lavorazione minore rapida è di poche righe.

## Risposta al cliente

Una lavorazione minore non ha un documento per il cliente. Il responsabile risponde con un messaggio breve nel ticket su osTicket, quando il lavoro è in produzione, e ne salva una copia in `source`. È una comunicazione, non una richiesta di approvazione: il cliente non conferma e non prova.

Dice cosa è stato risolto o aggiunto, in parole comuni, nei termini di ciò che l'utente vede e può fare. Non contiene file, codice, moduli, tecnologie, ore né prezzi, e non spiega la causa di un bug.

- Per un bug: cosa non funzionava e cosa funziona ora.
- Per una feature: cosa il prodotto fa in più o in modo diverso.
- Per un'assistenza: la risposta, con le istruzioni utili.
- Se qualcosa di chiesto resta fuori: si dice, con il motivo.

## Urgenze

L'urgenza si assegna per prima, sui fatti descritti e non sul tono della richiesta.

- **Urgente.** Sistema fermo in produzione, utenti che non possono lavorare, dati a rischio. Si interviene subito. Può togliere persone ai progetti.
- **Normale.** Tutto il resto. Usa la capacità delle lavorazioni minori e, se serve, un prestito concordato.
- **A tempo perso.** Senza scadenza. Viene dopo tutto il resto e non toglie nessuno a un progetto.

**Percorso d'urgenza.** Vale solo per la lavorazione minore urgente.

1. Si sceglie la persona che conosce meglio la parte coinvolta, anche se sta lavorando a un progetto.
2. La persona mette in pausa la issue in corso: lascia salvato il lavoro, scrive lo stato in un commento e riporta la issue a PLANNED.
3. Si corregge e l'incaricato della pubblicazione pubblica. La lavorazione si chiude alla pubblicazione e da lì decorre la garanzia. La revisione del codice si fa comunque, anche dopo se serve per non ritardare la correzione.
4. A problema risolto si scrive la Scheda di intervento a posteriori: cosa è successo, causa, correzione, parti toccate.
5. Se la correzione è provvisoria, si apre una issue per rimuovere la causa.
6. Si esegue la verifica preliminare saltata all'inizio, per sapere quali lavori e quali documenti sono stati toccati.
7. Si risponde al cliente nel ticket.

Queste regole proteggono gli altri lavori dalle interruzioni:

- **L'interruzione si decide in un solo punto.** Le urgenze non si accettano direttamente dal cliente.
- **Le ore vanno sulla lavorazione minore.** Non si contano come lavoro di progetto, così le stime di progetto restano leggibili.
- **Prima il buffer di sprint, poi il resto dello sprint.** Oltre il buffer di sprint escono dallo sprint le issue meno prioritarie e si rifà il controllo della milestone.

## La lavorazione minore in ClickUp

Una lavorazione minore è un task nel Folder "Lavorazioni minori" dello Space "Lavorazioni". Il nome è il codice del ticket di osTicket con un titolo breve. Ha gli stessi stati delle issue (BACKLOG, PLANNED, IN PROGRESS, TESTING, COMPLETED, CANCELLED). I campi sono tipo (bug, feature, entrambi, assistenza), urgenza, scadenza del cliente se c'è, stima in ore e la checklist della DoD, con la DoD base. Se una lavorazione minore è lunga si divide in più issue della stessa lavorazione, come sottotask. Una lavorazione minore che passa a progetto esce dal Folder "Lavorazioni minori" e segue il Piano di progetto.

## Garanzia

La garanzia vale anche per le lavorazioni minori, con le regole delle Regole comuni. Una lavorazione minore dura al massimo 2 settimane, quindi il 50% della durata pianificata è sempre sotto il minimo: la garanzia di una lavorazione minore è sempre il minimo, 15 giorni lavorativi dal rilascio, che coincide con la chiusura.

Le segnalazioni del cliente in garanzia sono un pacchetto di garanzia, non una lavorazione nuova: bug, variazioni piccole e richieste estetiche si trattano con la skill `history-and-decision`. Il lavoro è un imprevisto di capacità e usa la capacità delle lavorazioni minori, con un prestito di ore se serve chi conosce la parte. Le ore si tracciano senza riserva. A fine periodo si annota una voce in History and decision: le ore e la causa. Se la correzione cambia il comportamento, la Scheda di intervento ha una nuova versione.

## Imprevisti della lavorazione minore

Ogni imprevisto ha una risposta già decisa, applicata nella fase in cui si presenta.

**Analisi**

- **Il cliente dichiara urgente ciò che non lo è.** L'urgenza si assegna sui fatti. Al cliente si comunicano livello e tempi.
- **La richiesta è in realtà un progetto o un prodotto.** Si riclassifica e segue il piano della nuova categoria.
- **Un ticket contiene più lavori.** Si divide in una lavorazione minore per lavoro.
- **La verifica dice che il lavoro non va aperto.** Si risponde al cliente con il motivo e il riferimento preciso, e il ticket si chiude.
- **La richiesta è vaga.** Chiarimenti con il cliente, con domande puntuali. La scheda si scrive solo dopo la risposta. Il cliente risponde quando vuole: se risponde tardi la lavorazione ha un ritardo e resta sospesa informalmente, senza termini.

**Sviluppo**

- **Nessuna capacità nel primo sprint utile.** Le lavorazioni minori stanno in una coda ordinata per urgenza e data di apertura, in BACKLOG. A tempo perso resta in fondo.
- **Persona adatta non disponibile.** Se la lavorazione è urgente si riassegna, altrimenti si valuta un prestito o slitta.
- **Il lavoro supera la stima.** Il responsabile avvisa chi ha analizzato, che aggiorna la stima. Se il lavoro supera 2 settimane si ferma e si riclassifica come progetto.
- **La lavorazione cresce fino a diventare un progetto.** Si ferma e segue il Piano di progetto.
- **Nuove richieste aggiunte alla stessa lavorazione.** Diventano una lavorazione minore nuova, con un nuovo ticket.
- **Servono dati o materiali dal cliente.** Si chiedono nel ticket, e la lavorazione resta sospesa informalmente, senza termini. Il cliente consegna quando vuole e la consegna slitta degli stessi giorni.
- **Assenza del responsabile.** Se la lavorazione è urgente si riassegna, altrimenti slitta.
- **Una lavorazione minore urgente interrompe il lavoro.** La issue in corso torna a PLANNED con un commento sullo stato.

**Rilascio**

- **La correzione rompe altro.** La lavorazione si riapre come urgente.

**Dopo la chiusura**

- **Riapertura.** Entro la garanzia, un bug è un pacchetto di garanzia. Oltre, è una lavorazione minore nuova.

## Decisioni proprie di questo piano

Le decisioni comuni a tutti i piani sono nelle Regole comuni.

- **Nome della categoria (2026-10-12).** La categoria si chiama lavorazione minore, per distinguerla dal ticket, che è la richiesta aperta dal cliente su osTicket. Prima la parola indicava entrambe le cose.
- **Documento unico (2026-10-12).** La lavorazione minore ha un solo documento, la Scheda di intervento, con il PDF nella radice e tutte le versioni in `claude`. Il resto della cartella è `source` (ciò che entra e che esce verso il cliente, messaggi compresi) e `log` (History and decision).
- **Documenti del sistema (2026-10-12).** Una lavorazione minore non aggiorna Manuale e Documento tecnico: scrive nella Scheda cosa ha fatto e quali parti dei documenti ne risultano superate. Li aggiorna il primo progetto o prodotto sulla stessa parte, leggendo le Schede delle lavorazioni minori chiuse dopo l'ultima versione.
- **Indice delle lavorazioni minori chiuse (2026-10-12).** Alla chiusura, e a ogni voce di Garanzia che cambia il comportamento, il responsabile aggiorna la riga della lavorazione in `lavorazioni-minori-chiuse.md`, che il progetto o il prodotto successivo legge per recepirla (Scheda e voci di History and decision).
- **Pubblicazione (2026-10-12).** Una lavorazione minore non ha un piano di rilascio: l'incaricato segue il capitolo Pubblicazione del Documento tecnico. Ciò che emerge alla pubblicazione va in History and decision e nella Scheda.

Nessuna decisione aperta.
