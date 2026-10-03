# Regole comuni

Data: 2026-10-03

Queste regole valgono per ogni lavoro, qualunque sia la sua taglia. I piani dei ticket, di progetto e di prodotto descrivono solo le fasi e ciò che ciascuno ha di proprio, e rimandano qui per tutto il resto.

Questo documento è il riferimento per tutto il team.

## Glossario

Ogni cosa ha un solo nome, usato allo stesso modo in tutti i piani e in tutti i documenti.

- **Taglia.** La dimensione di una richiesta: ticket, progetto o prodotto.
- **Accordo quadro.** Le regole su variazioni, ritardi, accettazione e garanzia, firmate dal cliente una volta e valide per tutti i suoi lavori.
- **Decisore.** La persona del cliente la cui approvazione vale. È una sola.
- **Referente.** La persona interna da cui passano tutte le comunicazioni con il cliente per un lavoro.
- **Story.** Una cosa che un tipo di utente può fare con il sistema, scritta nella forma "Come, voglio, per". Ha un codice fisso, per esempio F3.1.
- **Criterio di accettazione.** La condizione verificabile che dice quando una story è consegnata.
- **Milestone.** Un blocco di lavoro che consegna story intere e si può dimostrare. Verso il cliente si chiama SAL: è la stessa cosa.
- **Issue.** L'unità di lavoro dentro una milestone o un ticket.
- **Finito quando.** Le condizioni verificabili che chiudono una issue o un ticket.
- **Sprint.** Un intervallo di tempo fisso, uguale per tutta l'azienda, in cui si pianifica e si chiude il lavoro.
- **Capacità.** Le ore realmente disponibili di una persona in uno sprint.
- **Quota urgenze.** La parte di capacità riservata ai ticket bloccanti e alti: il 20% della capacità dello sprint.
- **Margine.** Le ore aggiunte a una milestone per assorbire gli imprevisti.
- **Variazione.** Ciò che il cliente chiede dopo un'approvazione e che i documenti approvati non prevedono. Si annota nel Registro delle variazioni.
- **Modifica.** Un tipo di ticket: il cliente vuole che qualcosa funzioni diversamente. Il termine non indica altro.
- **Verifica preliminare.** Il controllo iniziale di una richiesta sui lavori aperti e sul codice. Il termine "verifica" non indica altro.
- **Indagine sull'esistente.** L'analisi completa del sistema nella fase 3 di un progetto.
- **Approfondimento.** Un tipo di issue: tempo limitato per sciogliere un'incognita.
- **Prova.** Ciò che il cliente fa sull'ambiente di prova per controllare una consegna.
- **Demo.** La presentazione al cliente del software funzionante sull'ambiente di prova.
- **Rilascio.** La messa in produzione. Il termine non indica altro.
- **Lotto.** Una porzione di prodotto consegnata e lanciata insieme. Un prodotto ha più lotti.
- **Garanzia.** Il periodo dopo un rilascio in cui i bug si correggono senza conferma del cliente, raggruppati in un pacchetto di garanzia.
- **Pacchetto di garanzia.** Una o più voci nate dopo un rilascio su una stessa lavorazione, trattate insieme durante la garanzia.

## Principi

- **Niente lavoro senza conferma scritta.** Le eccezioni sono dichiarate e sono solo queste: il ticket bloccante, il pacchetto di garanzia, l'assistenza sotto la soglia concordata.
- **Si promette solo ciò che è stato guardato.** Nessuna stima e nessuna data senza aver controllato il codice e i lavori aperti.
- **Il cliente valida ciò che vede.** Wireframe, mockup e demo contano più dei documenti lunghi.
- **Le regole si fissano prima.** Stanno nell'accordo quadro e non si discutono a problema aperto.
- **Ogni documento nasce dal precedente.** Una variazione aggiorna tutti i documenti che tocca, e solo quelli.
- **Le cattive notizie si comunicano subito.** Un ritardo detto a metà milestone è gestibile, alla scadenza è un danno.

## Taglie e classificazione

Ogni richiesta arriva dal sistema di ticket e riceve una taglia, che decide quale piano si applica.

- **Ticket.** Intervento circoscritto su un sistema esistente. Segue il Piano dei ticket.
- **Progetto.** Lavoro strutturato su un sistema esistente. Segue il Piano di progetto.
- **Prodotto.** Sistema che non esiste ancora. Segue il Piano di prodotto.

Una richiesta su un sistema esistente è un progetto se vale almeno una di queste condizioni:

- la stima supera le 2 settimane;
- richiede più di una persona;
- richiede una proposta, perché il cliente deve decidere come funzionerà;
- cambia l'aspetto grafico, quindi serve un mockup.

Se nessuna vale, è un ticket.

Un ticket che cresce durante la lavorazione fino a soddisfare una di queste condizioni si ferma e diventa progetto. Non si completa "già che ci siamo".

La taglia dipende dal lavoro, non dal cliente. Per un cliente nuovo, qualunque sia la taglia, prima di iniziare si firma l'accordo quadro.

## Verifica preliminare

Prima di essere classificata e stimata, ogni richiesta passa da due controlli. Servono a capire se il lavoro va davvero aperto, e con quale taglia.

L'urgenza si assegna prima della verifica. Un ticket bloccante non la aspetta: si interviene subito e la verifica si fa in parallelo o dopo.

**Confronto con i lavori aperti.** La richiesta viene cercata in ciò che è già in corso sullo stesso sistema: progetti, ticket aperti, variazioni registrate, consegne ancora in garanzia. Gli esiti possibili:

- **Già compresa in un progetto.** Una story la copre. Non si apre lavoro: al cliente si risponde con la story e la consegna prevista.
- **Compresa, ma serve prima.** È una variazione sul progetto.
- **Compresa in parte.** Solo la parte che resta fuori può diventare un lavoro nuovo.
- **In conflitto con un progetto.** Il progetto sta per rifare quella parte, oppure la richiesta cambia qualcosa su cui il progetto si appoggia. Si decide se rinviarla, assorbirla nel progetto come variazione, o farla comunque perché urgente.
- **Doppione di un ticket aperto.** Si unisce a quello.
- **Difetto di una consegna recente.** È un pacchetto di garanzia o un difetto della milestone, non un lavoro nuovo.
- **Nessuna sovrapposizione.** La richiesta prosegue.

**Controllo del codice.** Si guarda il codice della parte coinvolta, senza modificarlo. Gli esiti possibili:

- **Il sistema lo fa già.** Non serve sviluppo: è una risposta di assistenza.
- **Basta una configurazione.** L'intervento non cambia il codice.
- **Bug confermato.** Si riproduce e la causa è individuata.
- **Bug non riprodotto, o causa fuori dal codice.** Servono altre informazioni dal cliente, oppure l'intervento è diverso da quello chiesto.
- **Intervento più esteso di come appare.** Tocca più parti o codice usato altrove, e la taglia può cambiare.
- **Sovrapposizione con uno sviluppo in corso.** Un'altra modifica al codice, non ancora rilasciata, tocca la stessa parte.

La verifica produce anche l'elenco dei lavori e dei documenti toccati, che serve più avanti per l'allineamento dei documenti: non si cerca due volte.

La verifica ha un tempo massimo pari al 10% di una stima a occhio della dimensione della richiesta, fatta prima di guardare il codice. Ciò che non si riesce a controllare in quel tempo va dichiarato: una stima fatta senza aver guardato il codice è provvisoria.

Per un prodotto, che non ha ancora un codice, la verifica si limita al confronto con i lavori aperti e con i sistemi che il cliente ha già.

## Contatti con il cliente

Ogni piano elenca i propri momenti fissi di contatto. Queste regole valgono per tutti.

- **Un solo canale per le decisioni.** Ciò che viene detto a voce vale solo dopo un riepilogo scritto.
- **Un solo referente.** Le richieste del cliente passano dal referente del lavoro, mai da altri canali.
- **Vale solo l'approvazione del decisore.** Se cambia, i documenti già approvati restano validi e vengono consegnati al nuovo decisore.
- **Le variazioni non si accettano in call.** Si registrano, si categorizzano e si confermano per iscritto.

Fuori dai momenti fissi il cliente si contatta subito in questi casi: milestone a rischio, ambiguità scoperta nel Manuale del prodotto, blocco che dipende da lui.

Il silenzio del cliente ha un valore diverso secondo ciò che gli è stato chiesto.

- **Vale come accettazione** quando gli è stato consegnato qualcosa di funzionante: una demo, la prova di un ticket, la chiusura di un ticket. Per la prova di un ticket e per la chiusura di un ticket, alla scadenza del termine, con un avviso, il lavoro è accettato. Una demo non ha un termine che la accetta da sola: richiede sempre una risposta esplicita del cliente.
- **Ferma il lavoro** quando deve approvare un documento: la proposta, il Manuale del prodotto, il Piano dei SAL. Dopo un sollecito il lavoro resta fermo.
- **Chiude il ticket** quando non conferma la Scheda di intervento entro il termine.

## Documenti

Ogni piano elenca i propri documenti. Queste regole valgono per tutti.

- **Bozza e versione.** Un documento per il cliente è una bozza interna finché è incompleto, e riceve un numero di versione da quando viene condiviso. Una bozza non si condivide.
- **Codici fissi.** Funzionalità (F1), story (F1.1), domande aperte (D1), milestone (M1, per il cliente SAL1), issue (I1), schermate (S1) e variazioni (V1) hanno un codice che non cambia e non si riutilizza. I codici sono il filo che lega i documenti tra loro.
- **Cosa e come.** Il Manuale del prodotto dice cosa fa il sistema ed è l'unica fonte per i comportamenti. Il Documento tecnico dice come è realizzato e cita i codici delle story senza riscriverle. Se sono in contrasto vale il Manuale.
- **Documenti del sistema.** Manuale del prodotto e Documento tecnico appartengono al sistema, non al singolo lavoro: ticket e progetti li aggiornano, non ne creano di nuovi.
- **Dove stanno.** I documenti sono conservati su Drive.

**Allineamento dei documenti.** Un lavoro può cambiare un comportamento descritto nei documenti di un altro lavoro.

- **Alla conferma del cliente.** Si riprende l'elenco dei lavori e dei documenti toccati prodotto dalla verifica preliminare, e si risolvono i conflitti prima di iniziare.
- **Dopo il rilascio.** Manuale del prodotto e Documento tecnico vengono aggiornati con ciò che è stato realmente fatto. Un lavoro è chiuso solo dopo questo aggiornamento.

Un documento già approvato da un cliente non si modifica in silenzio. Se un altro lavoro lo tocca, serve una variazione o una comunicazione al cliente.

## Strumenti visivi

Servono solo quando il lavoro tocca l'interfaccia. Ogni piano dice in quale fase entrano.

- **Wireframe.** Lo schema di una schermata, senza grafica: mostra cosa c'è e dove. Valida struttura e contenuti.
- **Mockup.** L'aspetto grafico definitivo della schermata, ancora statico. Valida stile e identità. Si disegna in Figma a partire dai wireframe approvati.
- **Prototipo.** Wireframe o mockup resi navigabili, senza logica vera. Valida il percorso dell'utente.
- **Demo.** Il software vero, funzionante sull'ambiente di prova. Porta all'accettazione.

Wireframe e mockup approvati dal cliente valgono come i documenti: cambiarli dopo è una variazione. All'approvazione il mockup viene esportato in PDF su Drive, e quella copia è la versione che fa fede.

In una demo si mostra ogni story sul suo criterio di accettazione. L'esito è uno fra questi: accettata, accettata con difetti non bloccanti, non accettata per difetti bloccanti. Un difetto bloccante si corregge prima dell'accettazione. Un difetto non bloccante si elenca nell'accettazione con una data. Una richiesta nuova emersa in demo non è un difetto: è una variazione.

## Materiali del cliente

Ciò che il cliente deve fornire viene concordato a monte, con una data.

1. Il primo documento per il cliente elenca i materiali, ancora senza date: la Scheda di intervento per un ticket, la Proposta di soluzione per progetti e prodotti.
2. Nel Piano delle milestone ogni materiale diventa una dipendenza delle issue che lo richiedono, e da lì si ricava entro quando serve.
3. Il Piano dei SAL riporta i materiali attesi con le date. Il cliente lo approva, quindi le date impegnano entrambe le parti.
4. Il Resoconto di sprint ricorda i materiali in scadenza, prima che diventino un blocco.

I materiali tipici sono testi e immagini, dati, accessi e credenziali, documentazione dei sistemi esterni, utenze di prova.

Ogni giorno di ritardo su un materiale sposta di un giorno le consegne che ne dipendono.

## Organizzazione del lavoro

Il lavoro è organizzato su due assi separati: le milestone dividono il lavoro, gli sprint dividono il tempo.

**Milestone.** Si definiscono all'inizio del lavoro, nel Piano delle milestone.

- Ognuna dura da 4 a 8 settimane e consegna story intere, che si possono dimostrare.
- Le parti più incerte o rischiose vanno nelle prime.
- I materiali del cliente sono dipendenze.

**Issue.** Sono le unità di lavoro. Ognuna ha un tipo, una stima in ore, le dipendenze e un "finito quando". Un'issue stimata oltre le 16 ore viene divisa. Quando al lavoro partecipa più di una persona, il "finito quando" comprende la revisione del codice.

- **Story.** Realizza una story del Manuale del prodotto e ne cita il codice.
- **Supporto.** Lavoro che sblocca altre issue: ambienti, infrastruttura, struttura dei dati.
- **Approfondimento.** Tempo limitato per sciogliere un'incognita prima di stimare.
- **Bug.** Correzione di un comportamento diverso dal Manuale. Cita la story violata.
- **Variazione.** Lavoro nato da una variazione approvata. Cita la voce del Registro delle variazioni.

**Sprint.** È unico per tutta l'azienda, con una durata di due settimane: stesse date per tutti i lavori di tutti i clienti. Una persona che lavora su più lavori ha un solo sprint, in cui la sua capacità viene divisa.

**Capacità.** A ogni sprint si calcola così:

1. Si parte dalle ore realmente disponibili di ogni persona, tolte ferie, festività e chiusure.
2. Si toglie la quota urgenze, riservata ai ticket bloccanti e alti. Se a metà sprint non è stata usata, si anticipa altro lavoro.
3. Il resto si pianifica per intero, tra le issue dei progetti e i ticket normali. Un ticket normale occupa capacità come una issue di progetto.

**Margine.** Ogni milestone ha un margine in ore, pari al 20% delle ore stimate. La data di consegna si calcola sulle ore stimate più il margine. Il margine assorbe stime sbagliate, assenze brevi, urgenze oltre la quota e variazioni piccole. È l'unico cuscinetto oltre alla quota urgenze: lo sprint non si pianifica sotto la capacità. Quando sviluppa una sola persona il margine è il 30%, perché un'assenza ferma il lavoro.

**Ciclo di ogni sprint.**

1. **Pianificazione.** Si calcola la capacità e si scelgono le issue che ci stanno: prima quelle tornate dallo sprint precedente, poi quelle che sbloccano altro lavoro, poi le altre secondo le dipendenze. Dal secondo sprint si pianifica sulle ore realmente completate negli sprint precedenti.
2. **Lavoro.** Un allineamento breve e regolare. Un blocco si segnala il giorno stesso.
3. **Chiusura.** Le issue non finite tornano nella milestone, lo sprint non si allunga. Si registrano le ore di lavoro stimato realmente completate.
4. **Controllo della milestone.** Si confrontano le ore rimanenti con la capacità rimanente prima della data. La milestone è in linea se ci stanno, a rischio se ci stanno solo consumando il margine, in ritardo se non ci stanno.

**Dimensione del team.** Con una sola persona l'allineamento non serve, la revisione del codice è a campione e fatta da chi è esterno al lavoro, e issue e documenti devono bastare a chi dovesse subentrare. Con più persone ogni issue è rivista da una seconda persona, e nessuna parte del sistema deve essere conosciuta da una sola.

## Date

Una data si promette solo quando si sa da dove parte.

- **Ticket.** La Scheda di intervento promette la consegna in giorni lavorativi dalla conferma del cliente, stimati guardando la coda e la capacità. La data di calendario si comunica alla pianificazione, dopo la conferma.
- **Progetti e prodotti.** Il Piano dei SAL dichiara una data di avvio e calcola le consegne da quella. Le date valgono se l'approvazione del cliente arriva entro la data di avvio: ogni giorno di ritardo nell'approvazione sposta di un giorno tutte le consegne.
- **Calendario.** Prima di calcolare le date si compila il calendario del lavoro: festività, chiusure aziendali, ferie già note, chiusure del cliente. Si ricontrolla all'inizio di ogni milestone.

## Variazioni

Dopo un'approvazione, tutto ciò che il cliente chiede e che i documenti approvati non prevedono è una variazione. Ogni variazione entra nel Registro delle variazioni e riceve una categoria.

La categoria si decide rispondendo a queste domande, in ordine. La prima risposta affermativa decide.

1. **Cambia ciò che la proposta ha stabilito, oppure cambia il contenuto di story in più milestone?** È una variazione grande.
2. **Sposta una data, sposta story tra milestone o tra lotti, tocca lavoro già accettato, supera le 4 ore, oppure tocca più di una story?** È una variazione media.
3. **Nessuna delle precedenti?** È una variazione piccola.

Come si gestisce ciascuna:

- **Piccola.** Basta la conferma scritta del cliente. È assorbita dal margine della milestone. Si aggiornano il Manuale del prodotto e il Piano delle milestone, con una issue di tipo Variazione.
- **Media.** Si stima l'impatto su ore e date, e il cliente lo approva per iscritto prima che si lavori. Si aggiornano Manuale del prodotto, Piano delle milestone, Documento tecnico se serve, Piano dei SAL se cambia una data o il contenuto di una consegna.
- **Grande.** Si torna alla fase di proposta con una proposta integrativa, poi conferma e nuova documentazione. Si aggiornano tutti i documenti.

Regole comuni alle tre:

- Una variazione non entra mai nello sprint in corso.
- Il lavoro già svolto e superato da una variazione resta dovuto e resta visibile nel Piano delle milestone.
- Una variazione è chiusa solo quando i documenti sono aggiornati.
- Le variazioni piccole hanno un tetto: insieme possono consumare solo metà del margine della milestone. Oltre il tetto, ogni nuova variazione è trattata come media.

## Bug, ambiguità e garanzia

Per distinguere un bug da una richiesta nuova il criterio è sempre lo stesso, e lo decide il Manuale del prodotto.

- **Bug.** Il sistema fa una cosa diversa dal Manuale. Si corregge.
- **Ambiguità.** Il Manuale non è chiaro. Non si interpreta: si segnala, si pone al cliente una domanda puntuale e si aggiorna il Manuale.
- **Richiesta nuova.** Il Manuale non lo prevede, o prevede altro. È una variazione se il lavoro è in corso, un ticket se è concluso.

Quando il sistema non ha un Manuale, vale ciò che è stato concordato per iscritto nei lavori precedenti.

**Garanzia.** Dopo un rilascio, per un periodo pari al 50% della durata pianificata della lavorazione (minimo 15 giorni; giorni lavorativi per i ticket, di calendario per progetti e prodotti), i bug su ciò che è stato rilasciato si correggono senza conferma del cliente.

**Pacchetto di garanzia.** Una o più voci, un bug, una variazione piccola, una richiesta estetica, segnalate insieme dopo un rilascio, sulla stessa lavorazione. Non apre una nuova lavorazione: si registra sul lavoro già chiuso e prosegue nella stessa richiesta aperta nel sistema di ticketing che l'ha originata, sia essa diventata un ticket, un progetto o un prodotto. Per la capacità segue le stesse regole di urgenza di ogni issue: bloccante pesca dalla quota urgenze, non bloccante entra in coda nello sprint unico aziendale.

- Decorre dal rilascio in produzione, non dall'accettazione sull'ambiente di prova.
- In un progetto o in un lotto di prodotto decorre dal rilascio finale. Se una milestone va in produzione prima, per le sue story decorre da quel momento.
- Vale anche per i ticket, dalla chiusura.
- Copre i bug, non le richieste nuove.

## Quando un lavoro si ferma

Non ogni richiesta arriva alla produzione. Un lavoro può fermarsi in questi punti.

- **Dopo la verifica preliminare.** Il lavoro non va aperto: è già compreso altrove, è un doppione, oppure il sistema lo fa già. Al cliente si risponde con il motivo.
- **Dopo l'indagine o l'analisi.** La richiesta non è fattibile come posta. Al cliente si comunica il motivo e, se esiste, un'altra strada. Il lavoro prosegue solo su una richiesta riformulata.
- **In attesa di un'approvazione.** Il cliente non conferma la proposta o non approva i documenti. Dopo un sollecito il lavoro resta fermo e non occupa capacità.
- **Senza approvazione economica.** Prezzi e preventivi sono gestiti fuori da questi piani, ma lo sviluppo parte solo dopo che il cliente li ha approvati. Per un ticket coincide con la conferma della Scheda di intervento. Per progetti e prodotti arriva insieme all'approvazione del Manuale del prodotto e del Piano dei SAL.
- **Per decisione del cliente.** Il cliente sospende il lavoro.

Quando un lavoro si ferma si registra lo stato raggiunto e i documenti restano su Drive. Per riprenderlo servono una nuova verifica preliminare e una nuova pianificazione: nel frattempo il sistema e gli altri lavori possono essere cambiati.

## Imprevisti durante lo sviluppo

Valgono per lo sviluppo di progetti e prodotti. Gli imprevisti delle altre fasi sono nei singoli piani.

**Le persone**

- **Ferie programmate.** Sono già nel calendario e riducono la capacità dello sprint.
- **Ferie chieste a lavoro avviato.** Si valuta l'effetto sulla milestone prima di approvarle.
- **Malattia o assenza breve.** Escono dallo sprint le issue meno prioritarie, e si rifà il controllo della milestone.
- **Assenza lunga o uscita dal team.** Passaggio di consegne su issue e documenti, e nuova pianificazione della milestone.
- **Festività non considerata.** Si corregge il calendario, si ricalcola la capacità e si rifà il controllo della milestone.
- **Nuova persona nel team.** Capacità ridotta nel suo primo sprint.
- **Urgenze oltre la quota.** Escono dallo sprint le issue meno prioritarie. Se accade per due sprint consecutivi, la quota si alza oppure una persona a rotazione viene dedicata ai ticket.

In questi casi il cliente viene avvisato solo se cambia una data.

**I tempi**

- **Sprint non completato.** Le issue tornano nella milestone, lo sprint non si allunga. Il cliente lo legge nello stato della milestone del resoconto.
- **Stime sbagliate.** Dopo due sprint sotto le attese si ristimano le issue rimanenti.
- **Milestone a rischio o in ritardo.** Le leve sono queste: spostare una story a una milestone successiva, spostare la data, aggiungere ore. Le prime due si decidono con il cliente, la terza internamente. Al cliente va una comunicazione immediata con la proposta.
- **Blocco tecnico o di un servizio esterno.** Una issue di approfondimento a tempo limitato, poi una nuova stima.

**Il cliente**

- **Ritarda materiali o risposte.** Le issue che ne dipendono escono dallo sprint e le date slittano degli stessi giorni. La nuova data va nel resoconto.
- **Chiede qualcosa a voce o fuori dal canale previsto.** Vale solo dopo essere stato messo per iscritto e registrato. Se non è previsto dai documenti è una variazione.
- **Contesta una story alla consegna.** Decide il criterio di accettazione del Manuale del prodotto.

## Decisioni ancora da prendere

Questi valori valgono per tutti i piani e vanno fissati prima di applicarli. Le decisioni proprie di un solo piano sono in fondo a quel piano.

- [ ] **Contenuto dell'accordo quadro**, e clienti attuali che non l'hanno ancora firmato.
