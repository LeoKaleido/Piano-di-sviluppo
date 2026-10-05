# Piano di prodotto

Data: 2026-10-02

Un prodotto è un sistema nuovo, costruito da zero e consegnato in più release. Si gestisce in dieci fasi, ognuna con una condizione di chiusura verificabile. Questo piano governa la prima release: le successive sono progetti.

Questo piano contiene solo ciò che è proprio dei prodotti. Le regole valide per ogni lavoro (glossario, categorie, verifica preliminare, contatti, documenti, date, variazioni, garanzia) sono nelle Regole comuni. Lo sviluppo (sprint, milestone, issue, buffer, imprevisti) è nel Ciclo di sviluppo. Ciò che il prodotto ha in comune con il progetto è nel Piano di progetto. È il riferimento per tutto il team.

## Quando si applica

Una richiesta è un prodotto quando riguarda un sistema che non esiste ancora. È il caso più raro e il più lungo, da 6 mesi in su.

Rispetto al progetto cambiano queste cose:

- **Non c'è un sistema esistente.** Non si indaga il codice: si indaga come lavora oggi il cliente. La verifica preliminare guarda solo i lavori aperti.
- **L'incertezza è più alta.** Il cliente non sa cosa vuole finché non lo vede, quindi un prototipo viene approvato prima di scrivere il dettaglio.
- **È troppo grande per un'unica consegna.** Il prodotto è diviso in release. La prima contiene il minimo utile, le successive si gestiscono come progetti.
- **Non si assegna l'urgenza.** Riguarda sempre un sistema che non esiste ancora, quindi non può essere urgente né degradare una funzione esistente.

## Il flusso del prodotto

Non si passa alla fase successiva finché la condizione di chiusura non è soddisfatta.

1. **Ingresso e classificazione.** Il cliente apre la richiesta nel sistema di ticket. Non si assegna l'urgenza: si esegue la verifica preliminare sui soli lavori aperti, poi si conferma la categoria.
   - Si chiude quando: la categoria è confermata e la verifica ha un esito.
2. **Qualifica e primo confronto.** Si capisce il bisogno, si individuano referente, scadenze e vincoli.
   - Si chiude quando: il referente è noto e ci sono le risposte senza le quali l'analisi non può partire.
3. **Analisi del contesto.** A tempo limitato si analizza come lavora oggi il cliente, chi userà il prodotto, con quali sistemi dovrà dialogare.
   - Si chiude quando: lo Stato di partenza è scritto, ogni punto della richiesta ha un giudizio di fattibilità e le incognite rimaste sono elencate.
4. **Proposta.** Si scrive la Proposta di soluzione, con la divisione in release e i wireframe delle schermate principali.
   - Si chiude quando: proposta e wireframe sono inviati al cliente.
5. **Revisione e conferma.** Il cliente corregge e risponde alle domande aperte. Ogni giro produce una nuova versione numerata, con l'elenco di ciò che è cambiato.
   - Si chiude quando: il cliente conferma per iscritto una versione, con la divisione in release e i wireframe, senza domande aperte.
6. **Prototipo e design.** Si costruisce il prototipo navigabile e si definisce la direzione grafica, con i mockup. Il cliente li prova in sessioni guidate.
   - Si chiude quando: il cliente approva per iscritto prototipo e mockup.
7. **Documentazione di progetto.** Si scrivono in ordine, ognuno a partire dal precedente: Manuale del prodotto, Documento tecnico, Piano delle milestone, Piano dei SAL.
   - Si chiude quando: il cliente approva per iscritto Manuale del prodotto e Piano dei SAL, ed è arrivata l'approvazione economica.
8. **Sviluppo.** Si lavora a sprint. La prima milestone è quella delle fondamenta. Ogni milestone si chiude con una demo e con l'accettazione del cliente.
   - Si chiude quando: tutte le milestone della prima release sono accettate.
9. **Lancio.** Collaudo finale, caricamento dei dati iniziali, formazione degli utilizzatori, messa in produzione, periodo di assistenza rafforzata.
   - Si chiude quando: il prodotto è in uso, il cliente lo conferma e il periodo di assistenza rafforzata è concluso.
10. **Passaggio a regime.** Le richieste arrivano come ticket, le release successive come progetti.
    - Si chiude quando: Manuale del prodotto e Documento tecnico sono aggiornati e il prodotto è gestito con il Piano dei ticket e il Piano di progetto.

Le date dei SAL si calcolano da una data di avvio dichiarata, come nel progetto. La garanzia decorre dalla messa in produzione.

## Release

Una release è una parte del prodotto che ha valore da sola. "Rilascio" indica solo la messa in produzione.

- **Prima release.** Contiene il minimo con cui gli utilizzatori possono lavorare davvero. Una story vi entra solo se senza di essa il prodotto non è utilizzabile.
- **Release successive.** Ognuna è un progetto a sé, gestito con il Piano di progetto a partire dall'indagine sull'esistente, sul prodotto ormai in uso.

La divisione in release si decide nella Proposta di soluzione e il cliente la conferma nella fase 5. Spostare una story da una release all'altra dopo la conferma è una variazione media.

## Documenti propri del prodotto

I documenti sono quelli del progetto, con queste differenze:

- **Stato di partenza** (fase 3). Descrive come lavora oggi il cliente, gli utilizzatori, i sistemi esterni, i vincoli e le incognite, al posto del sistema esistente.
- **Proposta di soluzione** (fasi 4 e 5). Aggiunge la divisione in release.
- **Manuale del prodotto** (fase 7). Nasce con il prodotto. Dettaglia per intero le story della prima release e descrive le release successive solo a livello di funzionalità.
- **Documento tecnico** (fase 7). Nasce con il prodotto. Comprende anche infrastruttura, ambienti, sicurezza e backup.
- **Piano di lancio** (fase 9), per il cliente. Data, dati da caricare, formazione, apertura graduale agli utilizzatori, assistenza rafforzata, ritorno alla situazione precedente, cosa serve dal cliente. Richiede l'approvazione del referente.

Ai materiali tipici del cliente si aggiungono dati da importare, domini e account dei servizi, testi legali su privacy e condizioni d'uso. Domini e account sono intestati al cliente fin dall'inizio.

## Contatti con il cliente

Ai momenti fissi del progetto si aggiungono l'analisi del contesto, le sessioni sul prototipo e il lancio; il primo confronto diventa qualifica e primo confronto. Le regole di ogni contatto sono nelle Regole comuni.

- **Qualifica e primo confronto** (fase 2, incontro o call). Domande su bisogno, scadenze e vincoli. Devono tornare le risposte e il nome del referente.
- **Analisi del contesto** (fase 3, incontri con gli utilizzatori). Domande su come lavorano oggi. Deve tornare la descrizione del lavoro attuale.
- **Sessioni sul prototipo** (fase 6, call o incontro). Come si presenterà e come si userà il prodotto. Devono tornare le correzioni, poi l'approvazione scritta.
- **Lancio** (fase 9, incontro, formazione, email). Piano di lancio, formazione degli utilizzatori, canale per le segnalazioni. Devono tornare l'approvazione del piano, i dati iniziali e la conferma dopo il lancio.

## Strumenti visivi nel prodotto

Nel prodotto servono tutti. Le definizioni sono nelle Regole comuni.

- **Wireframe**: nella fase 4, allegati alla Proposta di soluzione, per le schermate principali. Il cliente li conferma con la proposta.
- **Prototipo**: nella fase 6, provato dal cliente in sessioni guidate. Sostituisce molte pagine di lettura.
- **Mockup**: nella fase 6, con la direzione grafica. Si disegnano in Figma a partire dai wireframe confermati, e la copia in PDF su Drive è quella che fa fede.
- **Demo**: nella fase 8 a fine di ogni milestone, e prima del lancio sull'insieme.

Prototipo e mockup approvati valgono come i documenti: cambiarne la struttura dopo è una variazione.

## Fondamenta

La prima milestone contiene infrastruttura, staging e produzione, e le parti più rischiose o mai affrontate prima. Una scelta tecnica sbagliata emerge così all'inizio, quando cambiarla costa poco.

Le incognite rimaste dall'analisi del contesto diventano issue di tipo Spike in questa milestone.

La durata del prodotto chiede continuità: su 6 mesi o più il team può cambiare. Manuale del prodotto e Documento tecnico devono bastare a chi entra, e nessuna parte del sistema deve essere conosciuta da una sola persona.

## Lancio

Il lancio è il rilascio di un sistema che nessuno ha ancora usato, quindi aggiunge al rilascio del progetto ciò che serve per iniziare a usarlo.

1. **Collaudo finale.** Sullo staging, i percorsi completi che attraversano più milestone, con dati reali o una copia fedele.
2. **Dati iniziali.** Il cliente li consegna puliti. Si caricano e il cliente li controlla.
3. **Formazione.** Gli utilizzatori provano il prodotto prima della messa in produzione.
4. **Messa in produzione.** Si parte con un gruppo ristretto di utilizzatori, poi si apre a tutti.
5. **Assistenza rafforzata.** Per un periodo fissato le segnalazioni hanno un canale dedicato e tempi di risposta più brevi.

Il lancio non avviene finché mancano testi legali, domini o account.

## Imprevisti del prodotto

Ogni imprevisto ha una risposta già decisa. Qui stanno solo quelli propri del prodotto: gli altri sono nel Piano di progetto, e quelli dello sviluppo nelle Regole comuni.

**Fase 2: qualifica e primo confronto**


**Fase 3: analisi del contesto**

- **Gli utilizzatori non sono disponibili.** L'analisi si chiude allo scadere del tempo: le parti non verificate diventano domande aperte nella proposta.
- **Sistema esterno senza documentazione o non accessibile.** Issue di tipo Spike nella milestone delle fondamenta. Al cliente si chiedono accessi e documentazione.

**Fase 4: proposta**

- **Il cliente vuole tutto nella prima release.** Si applica la regola: entra solo ciò senza cui il prodotto non è utilizzabile. La divisione la conferma il referente.

**Fase 6: prototipo e design**

- **Idee non chiare davanti al prototipo.** Altri giri sul prototipo, che costano meno dei giri sul codice.
- **Il prototipo rivela una richiesta nuova.** Se resta nella proposta confermata si integra. Se la supera è una variazione grande.

**Fase 8: sviluppo**

- **Scelta tecnica sbagliata.** Emerge nella milestone delle fondamenta. Si corregge prima di costruirci sopra.
- **Milestone a rischio.** Alle leve delle Regole comuni se ne aggiunge una: spostare una story alla release successiva, decisa con il cliente come variazione media.
- **Il cliente vuole anticipare il lancio.** Si spostano story alla release successiva, come variazione media.

**Fase 9: lancio**

- **Dati iniziali o contenuti in ritardo.** La data di lancio slitta degli stessi giorni.
- **Dati da importare incompleti o disordinati.** La pulizia spetta al cliente. Se la chiede al team è una variazione.
- **Testi legali o account non pronti.** Il lancio non avviene finché mancano. Al cliente va l'elenco di ciò che manca.
- **Problemi al lancio.** Si resta sul gruppo ristretto finché non sono risolti. Se il prodotto non è utilizzabile si torna alla situazione precedente, come previsto dal Piano di lancio.
- **Gli utilizzatori non adottano il prodotto.** Le segnalazioni del periodo di assistenza diventano ticket o entrano nella release successiva.

**Fase 10: passaggio a regime**

- **Bug dopo il lancio.** Corretto come pacchetto di garanzia, non come un lavoro nuovo.
- **Nuova richiesta presentata come bug.** Se il comportamento rispetta il Manuale è un ticket di tipo feature o un nuovo progetto.

## Decisioni proprie di questo piano

Le decisioni comuni a tutti i piani sono nelle Regole comuni.

- [ ] **Durata del periodo di assistenza rafforzata** dopo il lancio. Proposta: 2 settimane.
- [ ] **Chi realizza prototipo e direzione grafica**, se il team non ha una figura dedicata.
- [ ] **Tempo dell'analisi del contesto**, e chi lo fissa.
- [ ] **Giri sul prototipo inclusi**, se si vuole fissare un limite.
