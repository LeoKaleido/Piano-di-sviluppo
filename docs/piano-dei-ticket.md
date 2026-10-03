# Piano dei ticket

Data: 2026-10-02

Un ticket è un intervento circoscritto su un sistema esistente, da poche ore a 2 settimane, gestito in sette fasi con un solo documento: la Scheda di intervento. Solo un ticket bloccante può interrompere il lavoro di un progetto.

Questo piano contiene solo ciò che è proprio dei ticket. Le regole valide per ogni lavoro (glossario, verifica preliminare, contatti, documenti, capacità, date, garanzia) sono nelle Regole comuni. È il riferimento per tutto il team.

## Quando si applica

Una richiesta è un ticket quando riguarda un sistema esistente e non soddisfa nessuna delle condizioni che ne fanno un progetto, elencate nelle Regole comuni. In pratica: la stima non supera le 2 settimane, basta una persona, non serve una proposta e l'aspetto grafico non cambia.

I ticket hanno due livelli, che usano lo stesso flusso con una profondità diversa.

**Ticket rapido**, fino a 2 giorni:

- la Scheda di intervento è di poche righe;
- il lavoro è un'unica issue;
- il cliente viene aggiornato solo alla chiusura;
- il cliente prova dopo il rilascio.

**Ticket esteso**, da 2 giorni a 2 settimane:

- la Scheda di intervento è completa, con stato di partenza e criteri di accettazione;
- il lavoro è diviso in più issue;
- il cliente riceve un aggiornamento a metà lavorazione;
- il cliente prova sull'ambiente di prova, con una demo, prima del rilascio.

## Il flusso del ticket

Tutto lo scambio con il cliente avviene dentro il ticket, così resta una traccia scritta di ogni passaggio.

1. **Ingresso.** Il cliente apre il ticket. Si assegna subito l'urgenza: un ticket bloccante passa al percorso d'urgenza. Per gli altri si esegue la verifica preliminare, poi si assegnano tipo e livello e si comunica la presa in carico.
   - Si chiude quando: urgenza, tipo e livello sono assegnati e la verifica ha un esito. Oppure il ticket è chiuso perché il lavoro non va aperto, con la risposta al cliente.
2. **Scheda.** Si chiedono i chiarimenti e si scrive la Scheda di intervento, partendo da ciò che la verifica ha visto nel codice. Se cambia una schermata si allega un wireframe.
   - Si chiude quando: la scheda è nel ticket, completa di stima e consegna.
3. **Conferma.** Il cliente conferma per iscritto la scheda e, se presente, il wireframe. La conferma vale anche come approvazione economica. Con un cliente nuovo, qui si firma anche l'accordo quadro. Si risolvono i conflitti con altri lavori segnalati dalla verifica.
   - Si chiude quando: la conferma è nel ticket e, per un cliente nuovo, l'accordo quadro è firmato.
4. **Pianificazione.** Il ticket viene assegnato a una persona e a uno sprint. Un ticket alto usa la quota urgenze dello sprint in corso. Un ticket normale entra nel primo sprint utile, come il resto del lavoro. Al cliente si comunica la data di calendario.
   - Si chiude quando: il ticket ha una persona, uno sprint e una data comunicata.
5. **Esecuzione.** Sviluppo, revisione del codice, controllo sul "finito quando". Nel ticket esteso, un aggiornamento al cliente a metà lavorazione.
   - Si chiude quando: ogni condizione del "finito quando" è soddisfatta.
6. **Prova e rilascio.** Il lavoro va sull'ambiente di prova. Nel ticket esteso il cliente lo prova con una demo, prima del rilascio. Poi si rilascia.
   - Si chiude quando: il lavoro è in produzione.
7. **Chiusura.** Si comunicano al cliente il lavoro fatto e le ore consumate. Si aggiornano Manuale del prodotto e Documento tecnico. Da qui decorre la garanzia.
   - Si chiude quando: i documenti sono aggiornati e il cliente conferma, o scade il termine.

Alcuni ticket seguono un percorso abbreviato:

- **Ticket bloccante.** Salta le fasi 2, 3 e 4 e segue il percorso d'urgenza.
- **Assistenza sotto la soglia.** Salta le fasi 2 e 3: si risponde direttamente.

## Scheda di intervento

La Scheda di intervento è l'unico documento del ticket e vive dentro il ticket, non in un file a parte. Ciò che vi è scritto è compreso, ciò che è escluso non lo è.

Ogni scheda contiene queste voci:

- **Cosa verrà fatto.** L'intervento, in parole comprensibili al cliente.
- **Cosa resta escluso.** Ciò che il cliente potrebbe dare per compreso.
- **Materiali attesi dal cliente.** Testi, immagini, dati, accessi, con la data entro cui servono. Solo se servono.
- **Stima.** Le ore previste.
- **Consegna.** I giorni lavorativi dalla conferma entro cui il lavoro sarà in produzione. La data di calendario si comunica alla pianificazione.
- **Finito quando.** Le condizioni verificabili che chiudono il lavoro.

La scheda di un ticket esteso aggiunge:

- **Stato di partenza.** Come funziona oggi la parte toccata.
- **Criteri di accettazione.** Cosa proverà il cliente sull'ambiente di prova.
- **Elenco delle issue.** Le parti in cui è diviso il lavoro.

Se le ore consumate superano la stima oltre la soglia concordata, il lavoro si ferma e il cliente conferma prima che prosegua.

Alla chiusura si aggiungono alla scheda le ore consumate e, se diverse dalla stima, il motivo.

Un wireframe confermato vale come la scheda: cambiarlo dopo richiede una nuova scheda.

## Tipi

Ogni ticket riceve all'ingresso un tipo.

- **Bug.** Il sistema fa una cosa diversa da quanto concordato. Fuori garanzia serve la conferma del cliente; in garanzia è un pacchetto di garanzia, non un ticket (Regole comuni).
- **Modifica.** Il cliente vuole che qualcosa funzioni diversamente. Serve sempre la conferma.
- **Assistenza.** Domanda, controllo o operazione che non cambia il codice. Serve la conferma solo sopra la soglia concordata.

## Urgenze

L'urgenza si assegna per prima, sui fatti descritti e non sul tono della richiesta.

- **Bloccante.** Sistema fermo in produzione, utenti che non possono lavorare, dati a rischio. Si interviene subito, senza scheda né conferma. Interrompe il lavoro in corso della persona scelta.
- **Alta.** Funzione importante degradata, ma esiste un modo per aggirare il problema. Presa in carico e scheda arrivano entro il giorno lavorativo successivo. L'intervento parte appena il cliente conferma, usando la quota urgenze.
- **Normale.** Tutto il resto. La scheda arriva entro il termine concordato e l'intervento entra nel primo sprint utile dopo la conferma. Non ha effetti sui lavori in corso.

**Percorso d'urgenza.** Vale solo per il ticket bloccante.

1. Si sceglie la persona che conosce meglio la parte coinvolta, anche se sta lavorando ad altro.
2. La persona mette in pausa la issue in corso, lasciando salvato il lavoro e una nota sullo stato.
3. Si corregge e si rilascia.
4. A problema risolto si scrive la scheda a posteriori: cosa è successo, causa, correzione, ore consumate.
5. Se la correzione è provvisoria, si apre una issue per rimuovere la causa.
6. Si esegue la verifica preliminare saltata all'inizio, per sapere quali lavori e quali documenti sono stati toccati.

Queste regole proteggono gli altri lavori dalle interruzioni:

- **L'interruzione si decide in un solo punto.** Le urgenze non si accettano direttamente dal cliente.
- **Le ore vanno sul ticket.** Non si contano come lavoro di progetto, così le stime di progetto restano leggibili.
- **Prima la quota urgenze, poi lo sprint.** Oltre la quota escono dallo sprint le issue meno prioritarie e si rifà il controllo della milestone.

## Imprevisti del ticket

Ogni imprevisto ha una risposta già decisa, applicata nella fase in cui si presenta.

**Fase 1: ingresso**

- **Il cliente dichiara bloccante ciò che non lo è.** L'urgenza si assegna sui fatti. Al cliente si comunicano livello e tempi.
- **La richiesta è in realtà un progetto.** Si riclassifica e segue il Piano di progetto. Al cliente si comunica la nuova taglia e cosa comporta.
- **Un ticket contiene più richieste.** Si divide in un ticket per richiesta. Al cliente va l'elenco dei ticket creati.
- **La verifica dice che il lavoro non va aperto.** Si risponde al cliente con il motivo e il riferimento preciso, e il ticket si chiude.

**Fase 2: scheda**

- **Richiesta vaga.** Chiarimenti nel ticket, con domande puntuali. La scheda si scrive solo dopo la risposta.
- **Dubbio tra bug e modifica.** Si applica il criterio delle Regole comuni. Al cliente si comunicano tipo assegnato e motivo.

**Fase 3: conferma**

- **Il cliente non conferma la scheda.** Un sollecito, poi il ticket viene chiuso alla scadenza del termine, con un avviso.
- **Il cliente chiede di cambiare la scheda.** Nuova scheda e nuova stima.
- **Un conflitto con un altro lavoro non si risolve.** Il ticket resta in attesa finché non è deciso quale lavoro passa prima.
- **Il cliente nuovo non firma l'accordo quadro.** Il lavoro non prosegue oltre la fase 3.

**Fase 4: pianificazione**

- **Nessuna capacità nel primo sprint utile.** I ticket confermati stanno in una coda ordinata per urgenza e data di conferma. Se la consegna promessa non si può rispettare, il cliente viene avvisato subito.
- **Persona adatta non disponibile.** Se il ticket è alto si riassegna, altrimenti slitta la data, comunicata al cliente.

**Fase 5: esecuzione**

- **Stima superata.** Oltre la soglia ci si ferma e si chiede conferma prima di proseguire. Al cliente vanno ore consumate, ore mancanti e motivo.
- **Il ticket cresce fino a diventare un progetto.** Si ferma e segue il Piano di progetto. Al cliente si comunicano motivo e passi successivi.
- **Nuove richieste aggiunte allo stesso ticket.** Diventano un ticket nuovo.
- **Il cliente ritarda un materiale.** Il ticket va in attesa e la consegna slitta degli stessi giorni.
- **Assenza della persona assegnata.** Se il ticket è alto si riassegna, altrimenti slitta la data.
- **Un ticket bloccante interrompe il lavoro.** La issue in corso va in pausa con una nota sullo stato. Al cliente si comunica solo se cambia una data.

**Fase 6: prova e rilascio**

- **Il cliente non prova.** Un sollecito. Alla scadenza del termine si rilascia, con un avviso.
- **La correzione rompe altro.** Il ticket si riapre come bloccante, con avviso immediato al cliente.

**Fase 7: chiusura**

- **Il cliente non conferma la chiusura.** Alla scadenza del termine il ticket è chiuso, con un avviso.
- **Riapertura dopo la chiusura.** Entro il termine è lo stesso ticket, oltre è un ticket nuovo.

## Decisioni proprie di questo piano

Le decisioni comuni a tutti i piani sono nelle Regole comuni.

- [ ] **Soglia di stima superata** oltre la quale il lavoro si ferma. Proposta: 25%.
- [ ] **Termine per la conferma della scheda**, dopo il quale il ticket viene chiuso.
- [ ] **Termine per la prova del cliente** e per la conferma di chiusura.
- [ ] **Termine di riapertura**, entro il quale un ticket chiuso può essere riaperto.
- [ ] **Soglia dell'assistenza senza conferma.** Proposta: un'ora.
- [ ] **Termine per la scheda** di un ticket normale, e tempi di presa in carico per ogni livello di urgenza.
