# Piano di progetto

Data: 2026-10-02

Un progetto è un lavoro strutturato su un sistema esistente, portato dalla richiesta del cliente alla messa in produzione in otto fasi, ognuna con una condizione di chiusura verificabile. Il cliente approva formalmente prima la Proposta di soluzione, poi il Manuale del prodotto con il Piano dei SAL.

Questo piano contiene solo ciò che è proprio dei progetti. Le regole valide per ogni lavoro (glossario, taglie, verifica preliminare, contatti, documenti, organizzazione del lavoro, date, variazioni, garanzia) sono nelle Regole comuni. È il riferimento per tutto il team.

## Quando si applica

Una richiesta è un progetto quando riguarda un sistema esistente e soddisfa almeno una delle condizioni elencate nelle Regole comuni: la stima supera le 2 settimane, serve più di una persona, serve una proposta, cambia l'aspetto grafico.

Con un cliente nuovo l'accordo quadro si firma prima di iniziare, come per ogni taglia.

## Il flusso del progetto

Non si passa alla fase successiva finché la condizione di chiusura non è soddisfatta.

1. **Ingresso e classificazione.** Il cliente apre la richiesta nel sistema di ticket. Si assegna l'urgenza, si esegue la verifica preliminare sui lavori aperti e sul codice, poi si assegna la taglia. Al cliente si comunicano la presa in carico e cosa comporta la taglia.
   - Si chiude quando: la taglia è assegnata e la verifica ha un esito.
2. **Primo confronto.** Si dialoga con il cliente per capire il bisogno e sapere chi decide. Con un cliente nuovo si firma l'accordo quadro.
   - Si chiude quando: il referente è noto, l'accordo quadro è firmato e ci sono le risposte alle domande senza le quali l'indagine non può partire.
3. **Indagine sull'esistente.** A tempo limitato, partendo dall'esito della verifica preliminare, si analizzano il codice, gli altri lavori aperti sullo stesso sistema e i documenti esistenti.
   - Si chiude quando: lo Stato di partenza è scritto, ogni punto della richiesta ha un giudizio di fattibilità e le incognite rimaste sono elencate.
4. **Proposta.** Si scrive la Proposta di soluzione, con i wireframe delle schermate nuove o modificate.
   - Si chiude quando: proposta e wireframe sono inviati al cliente.
5. **Revisione e conferma.** Il cliente corregge e risponde alle domande aperte. Ogni giro produce una nuova versione numerata, con l'elenco di ciò che è cambiato. Alla conferma si esegue l'allineamento dei documenti.
   - Si chiude quando: il cliente conferma per iscritto una versione e i suoi wireframe, senza domande aperte.
6. **Documentazione di progetto.** Si scrivono in ordine, ognuno a partire dal precedente: Manuale del prodotto, Documento tecnico, Piano delle milestone, Piano dei SAL. Si preparano mockup e prototipo, quando servono.
   - Si chiude quando: il cliente approva per iscritto Manuale del prodotto, Piano dei SAL e mockup se presenti, ed è arrivata l'approvazione economica.
7. **Sviluppo.** Si lavora a sprint, prendendo le issue dalla milestone in corso. Ogni milestone si chiude con una demo e con l'accettazione del cliente.
   - Si chiude quando: tutte le milestone sono accettate.
8. **Rilascio.** Collaudo finale dell'insieme e messa in produzione.
   - Si chiude quando: il sistema è in produzione, il cliente lo conferma, Manuale del prodotto e Documento tecnico sono aggiornati.

Le date dei SAL si calcolano da una data di avvio dichiarata nel Piano dei SAL. Se l'approvazione della fase 6 arriva dopo quella data, tutte le date slittano degli stessi giorni.

## Indagine sull'esistente

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

L'indagine ha un tempo fissato prima di iniziare. Allo scadere si chiude comunque, e ogni incognita rimasta diventa una issue di tipo Spike nella prima milestone.

## Documenti del progetto

Per il cliente:

- **Proposta di soluzione** (fasi 4 e 5). La richiesta come è stata compresa, la soluzione con suggerimenti, compromessi, esclusioni, domande aperte e materiali che servono dal cliente, l'allegato con titolo e frase di ogni user story e un sunto di come procederà la lavorazione. Richiede la conferma del referente.
- **Manuale del prodotto** (fase 6). Cosa fa il sistema: funzionalità, user story complete, criteri di accettazione. Richiede l'approvazione del referente. Se il sistema ha già un Manuale, il progetto lo aggiorna.
- **Piano dei SAL** (fase 6). I SAL con consegne, date e stato, la data di avvio da cui le date sono calcolate, i materiali attesi con la data entro cui servono. È ricavato dal Piano delle milestone. Richiede l'approvazione del referente.
- **Sprint report** (fase 7). Poche righe: fatto, prossimo, stato della milestone, cosa serve dal cliente. È ricavato dal Documento di sprint e non richiede approvazione.

Interni:

- **Stato di partenza** (fase 3). Come funziona oggi il sistema, cosa viene toccato, fattibilità, incognite.
- **Documento tecnico** (fase 6). Come viene realizzato: architettura, dati, integrazioni, scelte tecniche. Cita i codici delle story senza riscriverle. Se il sistema lo ha già, il progetto lo aggiorna.
- **Piano delle milestone** (fase 6). Milestone, issue, stime, dipendenze, buffer di milestone, materiali del cliente come dipendenze delle issue.
- **Documento di sprint** (fase 7). È unico per tutta l'azienda: il progetto vi compare con le sue issue e con lo stato della sua milestone.
- **Registro delle variazioni** (dalla fase 5 in poi). Ogni variazione chiesta, con categoria, impatto ed esito.

Strumenti visivi, quando il progetto tocca l'interfaccia: wireframe, mockup, prototipo, demo.

## Contatti con il cliente

Il cliente viene contattato in momenti fissi, e ognuno ha una risposta attesa. Le regole di ogni contatto e il valore del silenzio sono nelle Regole comuni.

- **Apertura della richiesta** (fase 1, sistema di ticket). Si comunicano la presa in carico e la taglia assegnata. Non serve risposta.
- **Primo confronto** (fase 2, call o messaggi). Domande per capire il bisogno. Devono tornare le risposte e il nome del referente.
- **Invio della proposta** (fase 4, email con presentazione in call). Devono tornare correzioni e risposte alle domande aperte.
- **Giri di revisione** (fase 5, email, call se serve). Nuova versione con l'elenco di ciò che è cambiato. Deve tornare la conferma scritta, o altre correzioni.
- **Invio di Manuale del prodotto e Piano dei SAL** (fase 6, email con presentazione in call). Cosa verrà consegnato, quando, e quali materiali servono. Deve tornare l'approvazione scritta di entrambi, e dei mockup se presenti.
- **Sprint report** (fase 7, email a ogni fine sprint). Devono tornare i materiali e le risposte richieste.
- **Demo di milestone** (fase 7, call sullo staging). Le story completate, provate sui criteri di accettazione. Deve tornare l'accettazione scritta entro il termine.
- **Rilascio** (fase 8, email). Prima la data e il piano di rilascio, poi l'avviso a sistema in produzione. Deve tornare la conferma che il sistema funziona.

## Strumenti visivi nel progetto

Le definizioni sono nelle Regole comuni. Nel progetto entrano così:

- **Wireframe**: nella fase 4, allegati alla Proposta di soluzione, per le schermate nuove o modificate. Il cliente li conferma con la proposta.
- **Mockup**: nella fase 6, quando cambia l'aspetto grafico. Si disegnano in Figma a partire dai wireframe confermati. Il cliente li approva con il Manuale del prodotto, e la copia in PDF su Drive è quella che fa fede.
- **Prototipo**: facoltativo, nella fase 6, quando il percorso dell'utente è complesso.
- **Demo**: nella fase 7, a fine di ogni milestone. L'esito è uno fra: accettata, difetti bloccanti, difetti non bloccanti.

## Rilascio

L'accettazione delle singole milestone non basta: prima della produzione si prova l'insieme.

Collaudo finale, sullo staging:

- i percorsi che attraversano più milestone, dall'inizio alla fine;
- le parti del sistema che esistevano già e che il progetto ha toccato, per escludere regressioni;
- le integrazioni e i dati reali, o una copia fedele.

Piano di rilascio, concordato con il cliente:

- data e ora, scelte per ridurre il disturbo a chi usa il sistema;
- ordine dei passi;
- come si torna alla versione precedente se qualcosa fallisce;
- chi va avvisato prima e dopo.

Dopo la messa in produzione:

- il cliente conferma che il sistema funziona;
- decorre la garanzia;
- si esegue l'allineamento dei documenti: Manuale del prodotto e Documento tecnico descrivono ciò che è stato realmente fatto.

## Imprevisti del progetto

Ogni imprevisto ha una risposta già decisa, applicata nella fase in cui si presenta. Gli imprevisti della fase 7 (persone, tempi, cliente) e le variazioni sono comuni a ogni lavoro e stanno nelle Regole comuni.

**Fase 1: ingresso e classificazione**

- **Un progetto entra come ticket.** Se soddisfa una delle condizioni del progetto si riclassifica. Al cliente si comunicano la nuova taglia e cosa comporta.
- **La verifica dice che il lavoro non va aperto.** Si risponde al cliente con il motivo e il riferimento preciso.
- **La richiesta riguarda un sistema nuovo.** Si riclassifica e segue il Piano di prodotto.

**Fase 2: primo confronto**

- **Si parla con chi non decide.** Si chiede il nome del referente: vale solo la sua approvazione.
- **Le risposte non arrivano.** Un sollecito scritto, poi la richiesta resta ferma. L'indagine non parte su supposizioni.
- **Il cliente non firma l'accordo quadro.** Il lavoro non prosegue oltre la fase 2.

**Fase 3: indagine sull'esistente**

- **Comportamento del sistema non rilevato.** Si aggiunge allo Stato di partenza. Se emerge dopo la conferma della proposta è una variazione, e il referente sceglie se mantenerlo.
- **L'indagine supera il tempo fissato.** Si chiude con le incognite elencate, da sciogliere con issue di tipo Spike.
- **Il codice non è accessibile.** Lo Stato di partenza lo dichiara, e la proposta presenta la fattibilità come provvisoria.
- **Un punto della richiesta non è fattibile.** Va nella proposta tra ciò che non si potrà fare, con il motivo e un'alternativa.

**Fase 4: proposta**

- **La soluzione è più grande della richiesta.** Si propone una divisione in più progetti, con il primo che ha valore da solo.

**Fase 5: revisione e conferma**

- **Il cliente non risponde.** Un sollecito scritto, poi il progetto resta fermo.
- **Revisioni che non convergono.** Call dedicata sui punti aperti, poi un'ultima versione.
- **Risposta parziale alle domande.** Le domande senza risposta restano aperte e bloccano la conferma. Al cliente va l'elenco delle domande ancora aperte.
- **L'allineamento trova un conflitto con un altro lavoro.** Si risolve prima della fase 6: si decide quale lavoro passa prima e cosa cambia nell'altro.

**Fase 6: documentazione di progetto**

- **Festività o ferie non considerate.** Si corregge il calendario e si ricalcolano le date prima dell'invio del Piano dei SAL.
- **Manuale del prodotto e Documento tecnico in contrasto.** Vale il Manuale. Il Documento tecnico si corregge.
- **Il cliente chiede modifiche al Manuale.** Se restano dentro la proposta confermata sono correzioni. Se la superano sono variazioni.
- **L'approvazione arriva dopo la data di avvio.** Le date dei SAL slittano degli stessi giorni e il Piano dei SAL viene reinviato.
- **Manca l'approvazione economica.** Lo sviluppo non parte, anche con i documenti approvati.

**Fase 8: rilascio**

- **Regressione su qualcosa che funzionava.** È un bug bloccante: si corregge prima del rilascio.
- **Rilascio fallito.** Ritorno alla versione precedente e nuova data, con avviso immediato al cliente.
- **Bug dopo il rilascio.** Corretto come pacchetto di garanzia.
- **Nuova richiesta presentata come bug.** Si applica il criterio delle Regole comuni: se il comportamento rispetta il Manuale è una variazione o un nuovo ticket.
- **Il cliente non conferma il rilascio.** Un sollecito. Alla scadenza del termine il rilascio vale come confermato, con un avviso.

## Decisioni proprie di questo piano

Le decisioni comuni a tutti i piani sono nelle Regole comuni.

- [ ] **Prezzo fisso o a consumo.** Fuori da questo piano: prezzi e preventivi sono seguiti da un'altra persona. La scelta incide però sulla gestione delle variazioni medie e grandi. *(Nota: domanda aperta, ereditata da un commento del documento Claude Docs originale: "Ho scritto il piano in modo che regga sia a prezzo fisso sia a consumo: quale dei due usate di solito?" Nessuna risposta ancora.)*
- [ ] **Giri di revisione inclusi** nella Proposta di soluzione, se si vuole fissare un limite.
- [ ] **Tempo dell'indagine sull'esistente**, e chi lo fissa per ogni progetto.
- [ ] **Termine per la risposta del cliente in revisione**, dopo il quale il progetto resta fermo e le date non valgono più.
- [ ] **Quando serve un prototipo**, oltre ai wireframe e ai mockup.
