# Piano dei ticket

Data: 2026-10-05

Un ticket è una lavorazione circoscritta su un sistema esistente, da circa 2 ore a 2 settimane. Il cliente non apre una lavorazione: apre una richiesta su osTicket, e l'azienda decide se diventa un ticket, un progetto o un prodotto. Il nome "ticket" indica sia la richiesta aperta su osTicket sia la lavorazione piccola: è una scelta voluta, e il contesto chiarisce di quale si parla.

Questo piano contiene solo ciò che è proprio dei ticket. Le regole valide per ogni lavoro (glossario, verifica preliminare, contatti, documenti, capacità, date, garanzia) sono nelle Regole comuni. È il riferimento per tutto il team.

## Cos'è un ticket

Una richiesta è un ticket quando riguarda un sistema esistente e non soddisfa nessuna delle condizioni che ne fanno un progetto, elencate nelle Regole comuni. La categoria (ticket, progetto o prodotto) la decide sempre l'azienda, mai il cliente.

Un ticket può essere:

- **Bug.** Il sistema fa una cosa diversa da quanto previsto: su un progetto chiuso mesi fa, su una parte del prodotto rotta da un'altra pubblicazione, per una svista di anni fa.
- **Feature.** Una funzione nuova o cambiata, ma contenuta.
- **Entrambi.** Un bug la cui correzione richiede anche una funzione nuova o cambiata.
- **Assistenza.** Domanda, controllo o operazione che non cambia il codice.

Un ticket dura da circa 2 ore a 2 settimane. Se richiede più di 2 settimane è perché c'è stato un problema: si ferma e si riclassifica come progetto.

## Il flusso del ticket

1. **Apertura e analisi.** Il cliente apre la richiesta su osTicket. Chi analizza assegna subito l'urgenza, poi esegue la verifica preliminare delle Regole comuni (confronto con i lavori aperti e controllo del codice), con un tempo massimo pari al 10% di una stima a occhio. Alla fine di questa fase sono decisi:
   - **la categoria**: ticket, progetto o prodotto. Se non è un ticket, la richiesta esce da questo piano;
   - **l'esito della verifica**: da fare, non da fare, da fare in parte, da rimandare;
   - **la stima**: le ore previste per il lavoro, registrate nella Scheda di intervento;
   - **il tipo**: bug, feature, entrambi o assistenza;
   - **il responsabile**: lo sviluppatore a cui è assegnato il ticket.
   - Si chiude quando: tutte queste voci sono decise. Oppure la richiesta è chiusa perché il lavoro non va aperto, con la risposta al cliente.
2. **Scheda di intervento.** Chi analizza scrive la Scheda di intervento, il documento che dice allo sviluppatore cosa fare e su cosa mettere le mani, partendo da ciò che la verifica ha visto nel codice. La legge solo lo sviluppatore.
   - Si chiude quando: la scheda è completa e il responsabile può iniziare senza fare altre domande.
3. **Pianificazione.** Lo sprint è un intervallo di 2 settimane, uguale per tutta l'azienda, in cui si decide chi fa cosa. Ogni persona ha una capacità, cioè le ore realmente disponibili nello sprint. Un ticket entra nello sprint quando, alla pianificazione, viene assegnato al responsabile e occupa la sua capacità per le ore stimate. Dipende dall'urgenza:
   - **urgente:** non aspetta la pianificazione, parte subito e le ore vengono dal buffer di sprint, la parte di capacità riservata alle urgenze;
   - **normale:** entra nel primo sprint in cui il responsabile ha capacità libera per le ore stimate. Se non c'è posto, aspetta lo sprint successivo;
   - **a tempo perso:** entra solo se, dopo tutto il resto, avanza capacità.
   - Si chiude quando: il ticket ha un responsabile e uno sprint, oppure per un ticket urgente quando il lavoro è partito.
4. **Esecuzione.** Il responsabile sviluppa, fa la code review quando le Regole comuni la prevedono e controlla il lavoro sulla DoD della scheda. Se scopre di aver toccato parti diverse da quelle previste, corregge la voce della scheda che le elenca.
   - Si chiude quando: ogni condizione della DoD è soddisfatta.
5. **Resoconto e aggiornamento dei documenti.** Il responsabile scrive, con la skill, il Resoconto di intervento. Poi si aggiornano i documenti delle parti di codice toccate e quelli degli altri lavori coinvolti, come descritto nella sezione Aggiornamento dei documenti.
   - Si chiude quando: il resoconto è pronto e i documenti sono aggiornati.
6. **Rilascio e chiusura.** Il lavoro va in produzione, passando dallo staging, e il Resoconto di intervento è inviato al cliente. Il rilascio e la chiusura coincidono: appena il lavoro è pubblicato il ticket è chiuso, e da quel momento decorre la garanzia. Il cliente non prova il lavoro prima.
   - Si chiude quando: il lavoro è in produzione e il resoconto è inviato.

Alcuni ticket seguono un percorso abbreviato:

- **Ticket urgente.** Segue il percorso d'urgenza.
- **Assistenza.** Non cambia il codice: la Scheda di intervento dice cosa controllare o fare, e il Resoconto di intervento è la risposta al cliente. Non c'è rilascio: la chiusura coincide con l'invio della risposta.

## Scheda di intervento

La Scheda di intervento è il documento di lavoro interno del ticket. Il cliente non la legge. È scritta per lo sviluppatore, e il suo contenuto serve anche, a fine lavoro, come fonte per l'aggiornamento dei documenti: per questo le parti di codice vanno indicate con precisione.
Ogni scheda contiene queste voci:

- **Cosa fare.** L'intervento, con le story del Manuale del prodotto a cui si riferisce, se esiste un Manuale.
- **Su cosa intervenire.** Le parti del sistema da toccare, ricavate dalla verifica preliminare: repository, moduli, file. Se l'analisi trova codice condiviso con altre parti, lo segnala.
- **Stima.** Le ore previste per il lavoro. Serve anche alla pianificazione dello sprint.
- **DoD.** Le condizioni verificabili che chiudono il lavoro.
- **Documenti collegati.** I lavori e i documenti toccati, ricavati dalla verifica preliminare: Manuale del prodotto e Documento tecnico del sistema, documenti di progetti, altri ticket.

La scheda riporta anche la categoria, il tipo, l'urgenza e il responsabile decisi nella fase 1.

La scheda di un ticket rapido è di poche righe.

## Resoconto di intervento

Il Resoconto di intervento è il documento finale del ticket, per il cliente. È una sintesi non tecnica della lavorazione: cosa il ticket ha risolto o aggiunto al prodotto, e in che modo. Il "in che modo" si indica con le user story oppure con brevi riassunti.

Non contiene file, codice, moduli, tecnologie, ore né prezzi.

- Per un bug: cosa non funzionava e cosa funziona ora, con la story violata.
- Per una feature: cosa il prodotto fa in più o in modo diverso.
- Per un'assistenza: la risposta.

## Aggiornamento dei documenti

Un ticket può cambiare ciò che dicono i documenti di altri lavori. Per questo, a lavoro sviluppato e prima del rilascio:

1. Si aggiornano i documenti delle parti di codice toccate, a partire dalla voce "Su cosa intervenire" della Scheda di intervento, corretta se serve: Manuale del prodotto e Documento tecnico del sistema.
2. Si cercano i documenti degli altri lavori, progetti e ticket, che riguardano le stesse parti di codice, a partire dalla voce "Documenti collegati". Si modificano quelli su cui il ticket ha cambiato qualcosa di rilevante.
## Urgenze

L'urgenza si assegna per prima, sui fatti descritti e non sul tono della richiesta.

- **Urgente.** Sistema fermo in produzione, utenti che non possono lavorare, dati a rischio. Si interviene subito. Può togliere persone ai progetti.
- **Normale.** Tutto il resto. Non toglie nessuno a un progetto.
- **A tempo perso.** Senza scadenza. Viene dopo tutto il resto e non toglie nessuno a un progetto.

**Percorso d'urgenza.** Vale solo per il ticket urgente.

1. Si sceglie la persona che conosce meglio la parte coinvolta, anche se sta lavorando a un progetto.
2. La persona mette in pausa la issue in corso, lasciando salvato il lavoro e una nota sullo stato.
3. Si corregge e si rilascia. Il ticket si chiude al rilascio e da lì decorre la garanzia.
4. A problema risolto si scrive la Scheda di intervento a posteriori: cosa è successo, causa, correzione, parti toccate.
5. Se la correzione è provvisoria, si apre una issue per rimuovere la causa.
6. Si esegue la verifica preliminare saltata all'inizio, per sapere quali lavori e quali documenti sono stati toccati.
7. Si scrivono il Resoconto di intervento e l'aggiornamento dei documenti, come per ogni ticket, ma dopo il rilascio.

Queste regole proteggono gli altri lavori dalle interruzioni:

- **L'interruzione si decide in un solo punto.** Le urgenze non si accettano direttamente dal cliente.
- **Le ore vanno sul ticket.** Non si contano come lavoro di progetto, così le stime di progetto restano leggibili.
- **Prima il buffer di sprint, poi il resto dello sprint.** Oltre il buffer di sprint escono dallo sprint le issue meno prioritarie e si rifà il controllo della milestone.

## Garanzia

La garanzia vale anche per i ticket, con le regole delle Regole comuni. Un ticket dura al massimo 2 settimane, quindi il 50% della durata pianificata è sempre sotto il minimo: la garanzia di un ticket è sempre il minimo, 15 giorni lavorativi dal rilascio, che coincide con la chiusura.

I bug segnalati in garanzia sono un pacchetto di garanzia, non un ticket nuovo.

## Imprevisti del ticket

Ogni imprevisto ha una risposta già decisa, applicata nella fase in cui si presenta.

**Fase 1: apertura e analisi**

- **Il cliente dichiara urgente ciò che non lo è.** L'urgenza si assegna sui fatti. Al cliente si comunicano livello e tempi.
- **La richiesta è in realtà un progetto o un prodotto.** Si riclassifica e segue il piano della nuova categoria.
- **Una richiesta contiene più lavori.** Si divide in un ticket per lavoro.
- **La verifica dice che il lavoro non va aperto.** Si risponde al cliente con il motivo e il riferimento preciso, e il ticket si chiude.
- **La richiesta è vaga.** Chiarimenti con il cliente, con domande puntuali. La Scheda di intervento si scrive solo dopo la risposta.

**Fase 3: pianificazione**

- **Nessuna capacità nel primo sprint utile.** I ticket stanno in una coda ordinata per urgenza e data di apertura. A tempo perso resta in fondo.
- **Persona adatta non disponibile.** Se il ticket è urgente si riassegna, altrimenti slitta.

**Fase 4: esecuzione**

- **Il lavoro supera la stima.** Il responsabile avvisa chi ha analizzato, che aggiorna la stima. Se il lavoro supera 2 settimane si ferma e si riclassifica come progetto.
- **Il ticket cresce fino a diventare un progetto.** Si ferma e segue il Piano di progetto.
- **Nuove richieste aggiunte allo stesso ticket.** Diventano un ticket nuovo.
- **Servono dati o materiali dal cliente.** Si chiedono nel ticket, che va in attesa.
- **Assenza del responsabile.** Se il ticket è urgente si riassegna, altrimenti slitta.
- **Un ticket urgente interrompe il lavoro.** La issue in corso va in pausa con una nota sullo stato.

**Fase 6: rilascio e chiusura**

- **La correzione rompe altro.** Il ticket si riapre come urgente.

**Dopo la chiusura**

- **Riapertura.** Entro la garanzia, un bug è un pacchetto di garanzia. Oltre, è un ticket nuovo.

## Decisioni proprie di questo piano

Le decisioni comuni a tutti i piani sono nelle Regole comuni.

- [ ] **Comunicazione al cliente.** Presa in carico e data prevista: cosa si comunica e quando.
- [ ] **Tempi di presa in carico** per ogni urgenza, e termine per la scheda di un ticket normale.
- [ ] **Chi esegue l'aggiornamento dei documenti.** Proposta: il responsabile, con la skill di allineamento.
- [ ] **Termine per le risposte del cliente** a una richiesta vaga, dopo il quale la richiesta si chiude.
