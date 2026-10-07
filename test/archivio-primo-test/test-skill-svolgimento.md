# Svolgimento del test delle skill

Data: 2026-10-06

Questo documento è lo svolgimento della base `docs/base-test-skill.md`. I documenti prodotti dalle skill sono scritti per intero nella cartella `docs/test/`, con un indice in `docs/test/indice.md`. Claude ha recitato ogni ruolo e applicato ogni skill alla lettera, nell'ordine dei piani. Nessuna skill e nessun piano è stato corretto durante il test, tranne la regola sull'incaricato della pubblicazione. Le osservazioni sono numerate (T per i ticket, P per il progetto, R per il prodotto, G per quelle generali) e raccolte nel registro in fondo, con la correzione proposta.

Convenzioni: ogni passo indica chi parla o agisce, la skill usata, ciò che produce in forma ridotta e le osservazioni che emergono. I numeri sono calcolati per intero. Le ore dei PL non sono nella capacità, come dice la base.

## Percorso 1: ticket

### Venerdì 2 ottobre, apertura

**Marta (cliente), su osTicket, 09:10.** Apre il 103 e il 104 con le parole della base. Nel testo del 103 scrive "prima del Black Friday".

**Leonardo (chi analizza), 09:30.** Legge le due richieste. Il cliente su osTicket non sceglie la categoria: la decide l'azienda.
- Osservazione ritirata: T1. Nella prima stesura del test si era annotato che il tipo scelto dal cliente su osTicket non aveva un ruolo. Era un refuso della base: su osTicket il cliente non sceglie nessuna categoria.

**Passo 1, urgenza (sui fatti).** Leonardo assegna l'urgenza per prima.
- 103: il sistema funziona, la scadenza del cliente è a fine novembre. Normale.
- 104: Marta oggi copia gli ordini a mano. Nessuna scadenza. A tempo perso.
- Osservazione T2: Buco (corretta il 2026-10-06, vedi sotto). L'urgenza ha tre livelli e nessun posto per la scadenza del cliente. Per il 103, "prima del Black Friday" è una scadenza vera e non finisce in nessun campo della valutazione né della Scheda.

### Verifica preliminare del 103 (skill `verifica-preliminare`)

**Leonardo, avvio.** La skill chiede: la richiesta (c'è), cliente e sistema (c'è), dove sono i lavori aperti (cartella su Drive di Lumera), dove si trova il codice (repository del sito). Tutto disponibile.

**Tempo.** La stima a occhio del 103 è 2 giorni, cioè 16 ore. Il tempo massimo della verifica è il 10%: 1,6 ore. La verifica dura 1,5 ore.

**Parte A, confronto con i lavori aperti.** Leonardo legge Manuale v1.3, Documento tecnico v1.2, Registro delle variazioni, i ticket 101 e 102.
- La parte sul comparatore: la story F11.3 "solo i prodotti disponibili subito" è nel Manuale. È nel SAL3, con demo il 27 novembre. Esito: Compresa, ma serve prima. È una variazione media sul progetto.
- La parte sul catalogo: nessuna story la copre. Nessuna sovrapposizione nei documenti.

**Parte B, verifica nel codice.** Il team lead risponde dal repository (usa solo la base), riportato come "Riferito" perché Leonardo non apre il codice.
- Il filtro per disponibilità è già accettato dalle API e usato dal gestionale. Il sito non lo mostra. Verificato nel repository: la sola parte mancante è l'interfaccia del catalogo.
- L'intervento tocca il modulo `disponibilita`, condiviso con scheda prodotto, carrello e comparatore.
- Un ramo non rilasciato del comparatore sta modificando `disponibilita`. Esito: sovrapposizione con uno sviluppo in corso.
- Test automatici su `disponibilita`: la base non lo dice. Non si inventa: va tra le cose non verificate.

**Esito complessivo.** Il 103 contiene due lavori: si divide.
- **103a, parte comparatore.** Non da fare come ticket: è una variazione sul progetto comparatore. Prossimo passo: variazione sul progetto.
- **103b, parte catalogo.** Da rimandare per la sovrapposizione con il ramo di `disponibilita`.

**Osservazioni.**
- T3: Contraddizione. La parte A offre, per un conflitto con un progetto, tre opzioni: rinviare, assorbire nel progetto come variazione, fare comunque se urgente. La parte B, per una sovrapposizione con uno sviluppo in corso, offre solo l'esito "rimandare". Le Regole comuni mettono i due casi sotto lo stesso esito "Da rimandare". Lo stesso fatto (103b) ha due trattamenti.
- T4: Buco. "Da rimandare" non dice chi riprende il ticket, quando, con quale nuova verifica. Le Regole comuni dicono solo che per riprendere un lavoro fermo servono nuova verifica e nuova pianificazione.

**Decisione per chi analizza.** Leonardo chiama PL 1 (responsabile del comparatore) e chi gestisce il team: stesso modulo, stesso team. Decidono di assorbire il 103b nel comparatore insieme al 103a, come un'unica variazione. È l'opzione della parte A, usata anche per la parte B.

**Testo di risposta a Marta** (come produce la skill, per il cliente, senza tecnologie né ore):

"Buongiorno Marta, abbiamo letto la richiesta e la dividiamo in due. Vedere solo i prodotti disponibili subito nel confronto è già previsto nel progetto, per il 27 novembre. Anticiparlo è un cambiamento di priorità che deve confermare Franco: gli scriviamo oggi. La stessa funzione nel catalogo non è prevista nel progetto: la proponiamo insieme alla prima, nello stesso intervento, sempre con la conferma di Franco. Vi aggiorniamo appena possibile."

### Valutazione della richiesta (skill `valutazione-richiesta`) per 103a e 103b

**Leonardo.** La skill chiede la categoria, e solo per i ticket esito, stima, tipo, urgenza, responsabile. Qui nessuno dei due pezzi è un ticket.
- Osservazione T5: Manca. `valutazione-richiesta` non ha il "prossimo passo" per una richiesta che diventa una variazione su un progetto (l'ha solo `verifica-preliminare`). Il formato della valutazione non ha dove scrivere "variazione sul progetto, V3, decide il referente".

Leonardo la produce comunque, a mano: categoria "non ticket: variazione", stima 22 ore, tipo feature, urgenza normale, responsabile PL 1.

### Variazione V3 (skill `variazione`)

**Avvio.** La richiesta (Marta, osTicket), documenti confermati (Manuale v1.3, Documento tecnico v1.2 con il capitolo Milestone, Piano dei SAL), stato del lavoro, Registro delle variazioni (V1 chiusa, V2 rifiutata).
- Osservazione T6: Manca. L'avvio non chiede chi ha chiesto la variazione. Marta l'ha chiesta, ma vale solo l'approvazione del referente. La skill non guida a scrivere a Franco.

**Passo 1: è una variazione?** Confronto con il Manuale. F11.3 è prevista: l'anticipo è un cambio di priorità. La parte sul catalogo non è prevista. Sì, variazione. Non è un bug, non è un'ambiguità.

**Passo 2: categoria.** Prima domanda del criterio: cambia ciò che la proposta ha stabilito o cambia il contenuto di story in più milestone? No. Seconda: sposta story tra milestone, supera 4 ore? Sì. Categoria: **media**. La decide il responsabile del progetto: PL 1.

**Passo 3: impatto.**
- Story toccate: F11.3 spostata dal SAL3 al SAL2. Nuova story nel Catalogo, F1.5: "Come visitatore, voglio filtrare il catalogo per disponibilità immediata, per vedere solo ciò che posso avere subito."
- Issue toccate: le due issue di F11.3 (14 ore) escono dal SAL3 ed entrano nel SAL2. Nuova issue per F1.5, 8 ore. Nessuna issue già iniziata o accettata: nessuna passa a superata.
- Ore: più 22 ore sul SAL2.
- SAL2: ore stimate ancora da fare 120. Capacità fino al 30 ottobre, dal 5 ottobre: sviluppatore 1, 30 ore a settimana per 4 settimane, 120 ore. Sviluppatore 2, 15 ore a settimana per comparatore, 15 più 15 più 0 (ferie dal 19 al 23) più 15, 45 ore. Totale 165 ore. Tolto il buffer di sprint, il 20%: 132 ore. Dopo la variazione le ore da fare sono 142. Eccedono di 10 ore.
- Buffer di milestone del SAL2: 24 ore rimaste su 48.
- Osservazione T25: Buco. Non è detto se le 22 ore aggiunte al SAL2 portano con sé il 20% di buffer (4,4 ore) o no: la regola dice che il buffer è il 20% delle ore stimate, ma non come si muove quando una story cambia milestone.
- Date: senza interventi, 10 ore al ritmo netto di 7,2 ore al giorno sono un giorno e mezzo di lavoro: la demo del SAL2 passa dal venerdì 30 ottobre al martedì 3 novembre.
- Altri lavori: la story F1.5 tocca `disponibilita`, condiviso con il ramo in corso. Serve l'allineamento dei documenti.

**Leve per tornare in data.** Spostare dal SAL2 al SAL3 la story F12.2 (carrello dal confronto, 12 ore, non iniziata, nessuna story ne dipende). Il SAL2 passa a 130 ore da fare, dentro le 132. Il SAL3 perde 14 ore di F11.3 e ne riceve 12: la sua demo del 27 novembre resta ferma.

**Passo 4: come si gestisce.** Media: stima dell'impatto e approvazione scritta del cliente prima di lavorare. Si aggiornano Manuale (F1.5 nuova, F11.3 spostata), capitolo Milestone del Documento tecnico, Piano dei SAL (cambia il contenuto di due consegne).

**Voce del Registro delle variazioni.** V3. Data 2 ottobre. Chiesta da Marta, da confermare da Franco. Richiesta con le parole di Marta. Categoria media, criterio: sposta story tra milestone e supera 4 ore. Impatto: story F11.3, F1.5, F12.2; issue come sopra; più 22 ore; SAL2 con F12.2 fuori è in linea, demo invariata. Stato: In attesa del cliente. Documenti da aggiornare: Manuale, Documento tecnico, Piano dei SAL.

**Comunicazione a Franco** (per il cliente): "Buongiorno Franco, Marta ci ha chiesto di avere prima del Black Friday la possibilità di vedere solo i prodotti disponibili nel confronto dei prodotti, e anche nel catalogo. Il confronto era previsto per il 27 novembre, giorno stesso del Black Friday. Proponiamo di consegnarlo il 30 ottobre, insieme alla stessa funzione nel catalogo, e di spostare al 27 novembre la possibilità di mettere nel carrello un prodotto dal confronto. Le altre date restano uguali. Il lavoro già svolto non cambia. La variazione ha un impatto economico da definire. Ci serve la sua conferma scritta entro il 7 ottobre per inserirla nello sprint che inizia il 12."

- Osservazione T7: Buco. La skill dice che una variazione non entra mai nello sprint in corso, ma non dice entro quando va chiesta la conferma in relazione all'inizio dello sprint successivo: qui Franco deve rispondere entro il 7 ottobre per lo sprint 4.

**Franco (cliente), 5 ottobre, per telefono:** "Va bene, fate così. Il carrello dal confronto può aspettare."

**Chi analizza.** La conferma è a voce: vale dopo il riepilogo scritto. Leonardo lo invia: "Come da telefonata di oggi, conferma V3 con lo spostamento della story del carrello dal confronto al 27 novembre." Franco risponde "ok" per email. V3 passa ad Approvata. La variazione entra nello sprint 4.

**Chiusura della variazione.** Resta aperta finché Manuale, Documento tecnico e Piano dei SAL non sono aggiornati: ci pensa PL 1. Si chiude il 9 ottobre.

### 104 (skill `verifica-preliminare`)

**Parte A.** Nessuna sovrapposizione.
**Parte B (team lead).** L'esportazione degli ordini esiste nel gestionale ed è visibile solo con il permesso di amministratore. Marta non lo ha. Esito: il sistema lo fa già, manca un permesso.
**Esito complessivo.** Non da fare: è una risposta di assistenza.

**Testo di risposta a Marta:** "Buongiorno Marta, l'esportazione degli ordini in Excel esiste già nel gestionale: Ordini, poi Esporta. Non la vede perché serve il permesso di amministratore. Può chiederlo a Franco, che lo assegna dalla gestione utenti. Se preferisce, possiamo farlo con lui."

**Marta (cliente):** "Perfetto, grazie, lo chiedo a Franco subito."

**Chiusura.** Il ticket si chiude alla fase 1, con la risposta.
- Osservazione T8: Contraddizione. Il Piano dei ticket dice due cose per un ticket di tipo assistenza: nella fase 1 un lavoro che non va aperto si chiude con la risposta al cliente, e nel percorso abbreviato l'assistenza ha una Scheda e un Resoconto di intervento che è la risposta. Per il 104 il piano non dice quale delle due strade vale quando la risposta è già in mano all'analisi.

### 101, il bug del centesimo (skill `verifica-preliminare`, poi `valutazione-richiesta`)

**Leonardo, 5 ottobre.** Il 101 è già assegnato allo sviluppatore 3, senza Scheda.

**Parte A.** Consegne recenti: il nuovo pagamento è stato rilasciato il 14 settembre. La garanzia dura 42 giorni (il 50% di 84) e scade il 26 ottobre. Il 101 riguarda il totale del pagamento. Esito: Difetto di una consegna recente. È un pacchetto di garanzia, non un ticket.

**Parte B (team lead, dal repository).** Il carrello arrotonda ogni riga dopo lo sconto, il pagamento arrotonda il totale dopo l'IVA: con più righe e sconti la differenza è di un centesimo. Il Manuale, story F4.2, dice che il totale del carrello coincide con quello del riepilogo. Bug confermato, con il punto nel codice. Test automatici: sul pagamento sì, sul carrello no.

**Esito.** Da fare, nel pacchetto di garanzia del nuovo pagamento.

**Chi lo segue.** Qui il piano si ferma.
- Osservazione T9: Buco. Il pacchetto di garanzia non ha un flusso. Le Regole comuni dicono che non apre una nuova lavorazione e si registra sul lavoro già chiuso. Non dicono: chi è il responsabile (il PL del lavoro chiuso o lo sviluppatore assegnato), se serve una Scheda di intervento, se si scrive un Resoconto, in che sprint entra, come si pubblica. Leonardo decide per il test di trattarlo come un ticket normale, con una Scheda ridotta e un Resoconto, annotandolo.

Lo sviluppatore 3 lo prende nello sprint 4. La stima è 6 ore (il carrello non ha test).

### 102, la partita IVA (skill `valutazione-richiesta`, poi `scheda-di-intervento`)

**Leonardo, 5 ottobre.** Il 102 è aperto dal 30 settembre, verifica già fatta. La skill `scheda-di-intervento` chiede: il ticket, il cliente, le decisioni dell'analisi, l'esito della verifica, il Manuale. Mancano il formato e l'obbligatorietà del campo.

**Prime domande per Marta**, nel ticket, numerate:
1. Il campo partita IVA è obbligatorio o facoltativo?
2. Deve controllare che siano 11 cifre?
3. Deve comparire anche nel gestionale, nei messaggi?

**Marta (cliente), 13 ottobre** (otto giorni dopo): "Facoltativo. Sì, 11 cifre. Sì, anche nei messaggi."
- Il 102 resta sospeso informalmente in attesa della risposta. Non c'è un termine: il piano dice che è la scelta.
- Osservazione T10: Passaggio. La risposta arriva il 13, lo sprint 4 inizia il 12 e la Scheda non era pronta il 12: il ticket non può entrare nello sprint 4 se la Scheda manca. La pianificazione dipende da una risposta senza scadenza.

**Decisioni dell'analisi.** Categoria ticket. Esito da fare. Tipo feature. Urgenza normale. Responsabile sviluppatore 3. Stima: il team lead, 8 ore a settimana, valida: 4 ore.
- Osservazione T11: Manca. La stima di un ticket vale solo dopo la conferma di chi conosce il lavoro. Con molti ticket piccoli la conferma richiede ogni volta il team lead, che ha 8 ore. Il piano non dice che per un ticket rapido basta la stima del responsabile.

**Scheda di intervento del 102** (skill `scheda-di-intervento`, interna).

In testa: categoria ticket, tipo feature, urgenza normale, responsabile sviluppatore 3.

- **Cosa fare.** Aggiungere il campo facoltativo "partita IVA" al modulo di contatto: 11 cifre, controllo del formato. Il messaggio inoltrato per email all'assistenza e il messaggio mostrato nella sezione Messaggi del gestionale riportano la partita IVA. Story di riferimento: nessuna nel Manuale, che non descrive il modulo di contatto. Story nuova, senza codice: "Come cliente finale, voglio indicare la partita IVA nel modulo di contatto, per essere riconosciuto come cliente aziendale."
- **Su cosa intervenire.** Componente `ContactForm` nel sito. Endpoint `contatti` nelle API. Tabella `messaggi_contatto`: nuova colonna. Sezione Messaggi del gestionale. Nessun test automatico esistente sul modulo.
- **Stima.** 4 ore.
- **DoD.** Il campo compare nel modulo ed è facoltativo. Con 11 cifre il messaggio si invia. Con meno o più di 11 cifre compare un errore e il messaggio non si invia. L'email all'assistenza riporta la partita IVA. Il messaggio nel gestionale mostra la partita IVA. Code review del team lead.
- **Documenti collegati.** Manuale v1.3 (nessuna copertura del modulo di contatto: serve una funzionalità nuova), Documento tecnico v1.2 (il modulo di contatto non c'è), V3 in corso sullo stesso Manuale e sullo stesso Documento tecnico.

**Osservazioni.**
- T12: Passaggio. La skill dice che una story nuova riceve il codice quando si aggiorna il Manuale. Non dice a quale funzionalità appartiene (F6? nuova?) né chi la decide: nel Manuale i codici sono per funzionalità.
- T13: Buco. V3 e 102 aggiornano lo stesso Manuale e lo stesso Documento tecnico nelle stesse settimane. Nessuna regola dice come si numerano le versioni, chi le fonde, chi ha la precedenza.

### Sprint 4, dal 12 al 23 ottobre (skill `sprint`, apertura)

**Leonardo e il responsabile, 12 ottobre.** Avvio della skill: cliente e sistema, momento (apertura), il Documento tecnico (capitolo Milestone) e il Documento di sprint precedente, le ore disponibili.
- Osservazione T14: Manca. Per uno sprint che contiene solo ticket, il Documento tecnico (capitolo Milestone) non esiste. La skill non dice come inserire un ticket: la stima viene dalla Scheda di intervento, e l'issue non ha codice di milestone. Il passo "Scelta delle issue: dalla milestone in corso" non si applica.

**Capacità, per lo sviluppatore 3.** Ore disponibili nello sprint: 10 giorni, 30 ore a settimana, 60 ore. Il buffer di sprint, il 20%, è 12 ore. Resto: 48 ore.
- Osservazione T15: Buco. Il buffer di sprint è "il 20% della capacità dello sprint". Lo sprint è unico per tutta l'azienda: è il 20% della capacità di tutta l'azienda, di Lumera, o di ciascuna persona? Nel test si usa il 20% di ciascuna persona. Il piano non lo dice.

**Issue scelte.** 101 (garanzia), 6 ore. 102, 4 ore. Totale 10 ore. Restano 38 ore di capacità per lo sviluppatore 3. Il 106, a tempo perso, entra con la capacità che avanza: 1 ora.
- Osservazione T16: Contraddizione. La skill e il Ciclo di sviluppo dicono "il resto si pianifica per intero" e "i ticket a tempo perso entrano solo con la capacità che avanza". Se si pianifica per intero non avanza nulla. Il caso reale è che la capacità si libera durante lo sprint, per issue finite prima o per il buffer di sprint non usato.

**Documento di sprint, apertura (una pagina).** Sprint 4, dal 12 al 23 ottobre. Obiettivo: chiudere il 101, il 102 e V3. Capacità sviluppatore 3: 60 ore, buffer di sprint 12, pianificabili 48. Issue scelte: 101 garanzia, 6 ore, sviluppatore 3. 102, 4 ore, sviluppatore 3. 106, a tempo perso, 1 ora, sviluppatore 3.

**Il responsabile del 106 (sviluppatore 3).** Nessuna scadenza: tempo perso confermato.

### Mercoledì 14 ottobre, ticket urgente 105 (percorso d'urgenza)

**Marta (cliente), 14 ottobre, 09:05, su osTicket:** "Da stamattina i clienti con una carta Mastercard non riescono a pagare."

**Leonardo, 09:10.** Urgenza sui fatti: sistema in produzione che non incassa. **Urgente.** Il piano: non aspetta la verifica né la scheda.

**Chi gestisce il team (decide in pochi minuti):** "Lo prende lo sviluppatore 3, il pagamento lo conosce. E designo il sistemista 1 per la pubblicazione."
- Osservazione T17: Buco. Il piano dice che l'incaricato della pubblicazione è una persona designata, ma non dice da chi, con quale criterio, né che cosa fare se non è reperibile. Nel percorso d'urgenza ogni minuto conta.

**Sviluppatore 3.** Mette in pausa il 102 con una nota sullo stato. Trova che l'aggiornamento del servizio di pagamento ha cambiato il nome del circuito Mastercard: il file di configurazione dei circuiti non lo riconosce. Correzione: due righe nel file di configurazione. Il pagamento ha test automatici: li esegue, passano. Tempo: 2 ore.

**Pubblicazione.** Il sistemista 1 pubblica alle 11:20, con le procedure a mano. Nessuna scheda di rilascio per un ticket: il piano non ne prevede una e `collaudo-e-rilascio` vale per i progetti.
- Osservazione T18: Buco. La pubblicazione di un ticket non ha una scheda. Il sistemista segue una procedura a mano che il piano non descrive. L'incaricato della pubblicazione non sa quale scheda tecnica seguire, né quali verifiche fare dopo, né chi avvisare.

**Ticket chiuso al rilascio.** Garanzia: 15 giorni lavorativi dal 14 ottobre.

**Scheda di intervento a posteriori** (skill `scheda-di-intervento`): Cosa è successo: dalle 8 i pagamenti con carta Mastercard venivano rifiutati. Causa: l'aggiornamento del servizio di pagamento ha cambiato il nome del circuito; la configurazione non lo riconosceva. Correzione: aggiornato il nome nella configurazione, definitiva. Su cosa si è intervenuti: file di configurazione dei circuiti accettati. Documenti collegati: Documento tecnico (il file di configurazione dei circuiti non è descritto).
Verifica preliminare saltata all'inizio, ora eseguita: non ci sono lavori aperti sullo stesso file; il 101 e il 105 toccano parti diverse del pagamento.

**Resoconto di intervento** (skill `resoconto-di-intervento`), al cliente: "Cosa è stato risolto: da stamattina i pagamenti con carta Mastercard erano rifiutati; ora funzionano. In che modo: è stata aggiornata la configurazione del servizio di pagamento, in seguito a un cambiamento del fornitore. Nessuna storia nel Manuale descrive i circuiti accettati: se serve, la aggiungiamo."

**Aggiornamento dei documenti.** `allineamento-documenti` (dopo il rilascio, per l'urgente): Documento tecnico v1.3 (dopo V3) non descrive il file dei circuiti accettati: nuova sezione, v1.4. Il Manuale: nessuna story su pagamento con carte: segnalato.

**Osservazione T19: Buco.** Il 105 è insieme un ticket urgente e un difetto di una consegna recente (garanzia fino al 26 ottobre). Il piano dei ticket dice che i bug in garanzia sono un pacchetto di garanzia, non un ticket nuovo, e dice anche che un urgente segue il percorso d'urgenza. Il flusso non dice se per questo caso servono anche il pacchetto, le sue regole, il Resoconto. Nel test si è seguito il percorso d'urgenza e si è registrato il fatto nel pacchetto del nuovo pagamento.

### Esecuzione del 102, dal 15 al 21 ottobre

**Sviluppatore 3** riprende il 102 il 15 ottobre. Il campo, il controllo a 11 cifre, la colonna nella tabella, l'email, la sezione Messaggi del gestionale. Arrivato a metà, la stima di 4 ore risulta insufficiente: la sezione Messaggi del gestionale non ha un modo comodo di mostrare un campo nuovo e richiede una modifica a una lista. Nuova stima: 7 ore.

**Sviluppatore 3 a Leonardo:** "Il 102 vale 7 ore, non 4."
**Leonardo** aggiorna la stima nella Scheda (voce Stima: 7 ore). La capacità dello sprint 4 per lo sviluppatore 3 era di 48 ore. Ne usa 13 (6 del 101 e 7 del 102) più 2 del 105, prese dal buffer di sprint, che ne ha 12: c'è posto.
- Osservazione T20: Buco. Il piano dice "il responsabile avvisa chi ha analizzato, che aggiorna la stima", e basta. Non dice cosa fare se la nuova stima non sta più nello sprint, né se il cliente va avvisato. Qui bastava, ma il caso generale non è coperto.

### Lunedì 19 ottobre, telefonata di Marta

**Marta (cliente), per telefono, allo sviluppatore 3, 11:30:** "Già che c'è sul modulo, potete aggiungere anche il codice destinatario per la fatturazione elettronica? Ci serve per i clienti aziendali."
**Sviluppatore 3.** "Lo passo a Leonardo, perché non è previsto in questo ticket."

**Leonardo, skill `interpretazione-conversazioni`** sulla trascrizione di due righe.
- Richiesta: aggiungere il codice destinatario. Detta da Marta, non referente. Non è una decisione.
- È una richiesta nuova su un lavoro che non è confermato dal cliente (non c'è una conferma, è un ticket). Il Piano dei ticket dice: nuove richieste aggiunte allo stesso ticket diventano un ticket nuovo.
- Dove riportare: ticket 107, nuovo, normale, feature, sviluppatore 3.
- Riepilogo per il cliente: "Abbiamo registrato la richiesta di aggiungere il codice destinatario al modulo di contatto come ticket separato, il 107. Il 102, la partita IVA, prosegue come previsto."

### Giovedì 22 ottobre, collaudo, aggiornamento dei documenti, pubblicazione del 102

**Team lead.** Code review del 102: due osservazioni minori, risolte. Condizioni della DoD verificate una per una dallo sviluppatore 3 sullo staging: tutte soddisfatte.

**Scheda di intervento corretta** (situazione "correzione a fine lavoro"): le parti toccate sono le stesse più la lista della sezione Messaggi. Sviluppatore 3 la aggiorna.

**Resoconto di intervento del 102** (skill `resoconto-di-intervento`), per il cliente.

"**Cosa è stato aggiunto.** Il modulo di contatto ha un nuovo campo facoltativo per la partita IVA. **In che modo.** Come cliente finale, voglio indicare la partita IVA nel modulo di contatto, per essere riconosciuto come cliente aziendale. Il campo accetta 11 cifre. La partita IVA compare nell'email che riceve l'assistenza e nella sezione Messaggi del gestionale. **Cosa non è stato fatto.** Il codice destinatario per la fatturazione elettronica, chiesto per telefono il 19 ottobre, è il ticket 107."

**Aggiornamento dei documenti** (skill `allineamento-documenti`, prima del rilascio).
Rapporto di impatto: il Manuale v1.3 non copre il modulo di contatto. Tipo: aggiornamento. Proposta: nuova funzionalità F6 Contatti, story F6.1 "invio di un messaggio" (già esistente, non documentata) e F6.2 partita IVA. Il Documento tecnico v1.2 non descrive il modulo: nuova sezione. Altro lavoro che tocca gli stessi documenti: V3 sul comparatore, che sta aggiornando lo stesso Manuale e lo stesso Documento tecnico.
- Osservazione T21: Contraddizione. La skill dice che un documento approvato da un cliente per un lavoro ancora aperto non si modifica in silenzio. Il Manuale è insieme il documento del comparatore (aperto) e il documento del sistema, che i ticket aggiornano. Per aggiungere F6 si tocca il Manuale del comparatore. La skill ferma o procede?
Leonardo decide: l'aggiornamento di F6 non tocca story del comparatore, procede. Il Manuale diventa v1.5 (V3 aveva prodotto la v1.4).

**Pubblicazione.** Il sistemista 2 (designato) pubblica alle 17:00 del 22 ottobre. Chi invia il Resoconto: lo sviluppatore 3, dopo la conferma del sistemista. Il ticket è chiuso. Garanzia: 15 giorni lavorativi dal 23 ottobre: scade il 12 novembre.
- Osservazione T22: Buco. Il piano dice che il resoconto è inviato al cliente alla pubblicazione e che il ticket è chiuso alla pubblicazione. Non dice chi dà il via all'invio quando chi pubblica non è chi scrive: serve un segnale dall'incaricato al responsabile.

### Venerdì 23 ottobre, la correzione rompe altro

**Marta (cliente), 23 ottobre, 09:40:** "Da ieri non ci arrivano più le email del modulo di contatto."

**Leonardo.** L'email all'assistenza non parte dal 22 ottobre. Il Piano dei ticket (fase 6): "La correzione rompe altro: il ticket si riapre come urgente". Ma il 102 è in garanzia fino al 12 novembre: un bug su ciò che è stato rilasciato è un pacchetto di garanzia.
- Osservazione T23: Contraddizione. Due regole per lo stesso fatto: si riapre come urgente (Piano dei ticket, imprevisti fase 6) e si registra nel pacchetto di garanzia (Piano dei ticket, sezione Garanzia, Regole comuni). Il piano non dice quale prevale. Nel test: urgente per la priorità, pacchetto come contenitore.

**Sviluppatore 3.** Il codice che invia l'email usava il vecchio formato del messaggio: aggiungendo il campo, la funzione lancia un errore silenzioso. Correzione di 1 ora. Il modulo non ha test automatici: nessun test avrebbe intercettato il problema.

**Sistemista 1** pubblica alle 12:30. L'incaricato è un'altra persona: il piano non dice se debba essere la stessa. Garanzia del 102 non cambia.

### Mercoledì 4 novembre, il campo accetta 12 cifre

**Marta (cliente):** "Abbiamo notato che il campo partita IVA accetta anche 12 cifre."
**Leonardo.** La DoD diceva: con più di 11 cifre errore. Il campo accetta 12 cifre: bug. Il 102 è in garanzia fino al 12 novembre. Pacchetto di garanzia: corretto senza conferma del cliente. Stima 1 ora. Come per T9, nessun flusso definito: si è seguita la Scheda ridotta.

### Il 106, a tempo perso

**Sviluppatore 3,** 20 ottobre: cambia l'indirizzo email dell'assistenza nel piè di pagina, 1 ora. Nel flusso dei ticket a tempo perso non c'è una scadenza: se lo sprint 4 fosse stato pieno il 106 sarebbe rimasto in coda indefinitamente.
- Osservazione T24: Buco. Un ticket a tempo perso che non trova capacità non ha nessuna regola che lo faccia chiudere, scadere o decidere di non farlo. Dopo quanto tempo si chiede al cliente se lo vuole ancora?

### Verifica dei fattori del percorso 1

- Il 103 contiene due richieste: emerso alla verifica preliminare, con la regola "una richiesta contiene più lavori: si divide".
- La parte sul comparatore è F11.3, nel SAL3 con demo il 27 novembre: emerso alla parte A.
- Anticiparla è una variazione media e la decide Franco, non Marta: emerso alla skill `variazione`, ma solo per forza di lettura, non perché la skill lo chieda (T6).
- La parte sul catalogo non è nel progetto e nel codice è già quasi pronta: emerso alla parte B.
- Tocca `disponibilita`, su cui lavora un ramo non rilasciato: emerso alla parte B. Il trattamento è ambiguo (T3, T4).
- Il 104 si risolve con un permesso: emerso. Le due strade previste dal piano (T8) non coincidono.
- Il 101 è un pacchetto di garanzia: emerso alla parte A. Il flusso del pacchetto manca (T9).
- Ogni richiesta ha categoria, esito, stima, tipo, urgenza, responsabile: emerso, ma la skill di valutazione non li produce per una variazione (T5).
- Il 102 ha story senza codice: emerso. Funzionalità e codice da decidere (T12).
- Il 105 urgente e in garanzia: emerso. I due percorsi si sovrappongono (T19).
- Il 106 a tempo perso: emerso. Entra con la capacità che avanza, ma la regola "si pianifica per intero" la contraddice (T16), e manca la regola della coda lunga (T24).
- Nessun ticket ha una conferma o una prova del cliente: rispettato. Il cliente risponde a domande di chiarimento e il ticket resta sospeso informalmente.
- La pubblicazione la segue l'incaricato: emerso nei tre ticket pubblicati. Designazione e scheda di rilascio mancano (T17, T18, T22).

## Percorso 2: progetto

### Lunedì 5 ottobre, apertura

**Franco (cliente), su osTicket, 08:50:** apre il ticket con la richiesta della base.

**Leonardo (chi analizza), 09:20.** Lo legge.

**Verifica preliminare** (skill `verifica-preliminare`). La stima a occhio è circa 400 ore: il tempo massimo della verifica è il 10%, cioè 40 ore. Ne servono 5 (Leonardo 2 e team lead 3).

**Parte A, confronto con i lavori aperti.**
- Comparatore: usa il modulo `prezzi` per mostrare il prezzo nel confronto. Se `prezzi` conoscerà più listini, il confronto dovrà mostrare il prezzo giusto per chi guarda. Non è un conflitto bloccante, è un punto di contatto con la story F11.1, già accettata.
- Nuovo pagamento: ancora in garanzia fino al 26 ottobre. Gli ordini grandi senza carrello normale potrebbero toccarlo.
- Ticket 101, 102 e V3: nessuna sovrapposizione.
- Esito: nessuna sovrapposizione bloccante, due punti di attenzione.

**Parte B, verifica nel codice (team lead, dal repository).**
- Il modulo `prezzi` dà per scontato un listino unico. Lo usano scheda prodotto, carrello, pagamento e gestionale. Verificato.
- Sul sito esiste un solo ruolo utente, il cliente finale. I ruoli multipli esistono solo nel gestionale. Verificato.
- Nel gestionale esiste un'anagrafica di circa quaranta rivenditori, inseriti a mano e non collegati agli utenti del sito. Verificato.
- Carrello e modulo `prezzi` non hanno test automatici. Verificato.
- I codici sconto si applicano dopo l'IVA. Nessun documento lo dice. Verificato.
- Il Manuale (F3.3) dice che il carrello si svuota dopo 30 giorni, il codice dopo 90. Verificato.
- Intervento più esteso di come appare: tocca prezzi, accessi, carrello, gestionale.
- Esito complessivo: da fare.

### Valutazione della richiesta (skill `valutazione-richiesta`)

- **Richiesta in una frase.** Franco vuole un'area riservata per circa quaranta rivenditori: accesso con credenziali, prezzi propri, ordini grandi, per la fiera di fine febbraio.
- **Verifica preliminare.** Da fare, con i due punti di attenzione sopra.
- **Categoria proposta.** Progetto. Il sistema esiste. Vale la stima oltre le 2 settimane, serve più di una persona, serve una proposta. Cambiano anche le schermate.
- **Esito.** Da fare.
- **Stima.** Circa 420 ore di lavoro. Con due persone a ritmo parziale, circa 12 settimane. Affidabilità bassa: il codice è stato letto ma non misurato.
- **Interfaccia.** Toccata: schermate nuove, aspetto grafico esistente.
- **Responsabile.** Un PL. PL 1 è saturo fino al 27 novembre. PL 2 è libero. Criterio: disponibile e più adatto al gestionale, che toccherà.
- **Documenti e lavori toccati.** Manuale v1.3 e Documento tecnico v1.2; il comparatore (modulo `prezzi`); il nuovo pagamento in garanzia.
- **Dubbi.** La scadenza di fine febbraio dipende dalla squadra e dai tempi della documentazione: il test lo verifica più avanti.
- **Domande per Franco.** 1. Quali sono le fasce di sconto? 2. Un rivenditore ha uno o più utenti? 3. Come pagano gli ordini grandi? 4. Il preventivo in PDF serve subito? 5. Qual è la data esatta della fiera?
- **Prossimo passo.** Kickoff e Stato di partenza.

**Osservazioni.**
- P1: Manca. La valutazione non ha un campo per le scadenze del cliente. "Fine febbraio" compare solo nel testo della richiesta. Né lo Stato di partenza del progetto (le scadenze compaiono solo nella forma per il prodotto) né la Proposta (non ammette date) le raccolgono: la scadenza viene verificata solo dal Piano dei SAL, alla fine della fase 5.
- P2: Manca. La skill dice "durata complessiva, in giorni lavorativi". Si lavora a consumo: il cliente paga ore. La durata dipende dalla squadra. Servono la stima in ore e la squadra ipotizzata.
- P3: Buco. La stima iniziale (420 ore) non dice se comprende il buffer di milestone. Nel Documento tecnico diventerà 440 ore più 88 di buffer.
- P4: Buco. Il tempo del kickoff è il 10% della stima: di quale stima, in ore o in durata, e di tutte le persone o del solo PL? Il test lo calcola in ore, su tutte le persone: 42 ore.

**Designazione del PL.** Leonardo a chi gestisce il team e al CEO, in cinque minuti.
**Leonardo:** "PL 1 è saturo fino al 27 novembre, PL 2 è libero e conosce il gestionale. Lo assegniamo a PL 2."
**Chi gestisce il team:** "D'accordo."
**CEO:** "Va bene. Tenete d'occhio la fiera."
- Osservazione P5: Buco. Le ore dei PL non sono nella capacità degli sprint né nella stima. Il piano non dice se sono lavoro fatturato al cliente, né come si contano. Il PL 2 dedicherà almeno 40 ore al kickoff e alla Proposta.

Risposta per presa visione a Franco, inviata da PL 2: "Buongiorno Franco, abbiamo preso in carico la richiesta e la seguirà PL 2. Proponiamo una riunione martedì 13 ottobre." Nessuna skill la produce: non serve.

### Martedì 13 ottobre, kickoff

**Partecipanti.** PL 2 (conduce), team lead, Franco, Diego. Riunione di 90 minuti, registrata e trascritta.

**Estratto della trascrizione.**

PL 2: "Diego, ci racconta come ordinano oggi i rivenditori?"
Diego: "Per telefono o per email a me. Poi Marta inserisce l'ordine a mano nel gestionale. Hanno tutti un listino con il loro sconto."
PL 2: "Quanti sconti diversi?"
Diego: "Tre fasce, ma qualcuno ha condizioni speciali."
Franco: "Voglio che vedano i loro prezzi e basta. Il listino pubblico non lo devono vedere."
PL 2: "Gli ordini grandi quanto sono grandi?"
Diego: "Anche cento pezzi. Non vogliono mettere cento volte nel carrello."
Franco: "Per la fiera di fine febbraio deve funzionare. Se serve cambiamo tutto il resto."
Diego: "A me serve anche che possano scaricare il preventivo in PDF."
PL 2: "Lo annotiamo, vediamo se rientra."
Franco: "Sì sì, ok, quello che dite voi."

**Skill `interpretazione-conversazioni`** (avvio: trascrizione, lavoro, partecipanti compreso il referente, documenti correnti, domande aperte).

Sintesi della conversazione:
- **Richieste.** Franco: i rivenditori vedono solo i propri prezzi, non il listino pubblico. Ordini grandi senza carrello normale. Diego: preventivo in PDF. Nessuna è prevista in documenti: il Manuale non c'è per questo lavoro. Il lavoro non ha ancora documenti confermati: sono richieste, non variazioni.
- **Decisioni.** Nessuna. "Quello che dite voi" detto da Franco non è la conferma di nessun documento: non esiste ancora un documento.
- **Informazioni sul cliente.** Oggi gli ordini arrivano a Diego per telefono o email. Marta li inserisce a mano. Tre fasce di sconto, alcune condizioni speciali. Ordini fino a cento pezzi. Riferito da Diego.
- **Priorità.** La fiera di fine febbraio viene prima di tutto il resto: Franco.
- **Domande aperte** (codici per la Proposta): D1 fasce di sconto e condizioni speciali. D2 uno o più utenti per rivenditore. D3 come si pagano gli ordini grandi. D4 il preventivo in PDF serve subito? D5 data esatta della fiera.
- **Contraddizioni con i documenti.** Nessuna: il Manuale non descrive ordini dei rivenditori.
- **Cose non pertinenti.** Nessuna.

Dove riportare: Stato di partenza (come ordinano oggi, fasce di sconto), Proposta (richieste e domande D1 a D5).

Riepilogo scritto per Franco: "Grazie per la riunione di oggi. Riepiloghiamo: l'area riservata permetterà ai rivenditori di entrare con le proprie credenziali, vedere solo i propri prezzi e fare ordini grandi senza passare dal carrello normale. Il preventivo in PDF, chiesto da Diego, lo valutiamo nella proposta. La fiera di fine febbraio è la scadenza. Ci servono: le fasce di sconto e le condizioni speciali, il numero di utenti per rivenditore, come si pagano gli ordini grandi, la data esatta della fiera. Risponda solo se qualcosa non corrisponde."

**Franco (cliente):** "Corrisponde. La fiera è lunedì 22 febbraio."

**Osservazioni.**
- P6: Buco. La skill parte da una trascrizione già pronta. Il piano non dice chi registra, con quale strumento, chi trascrive e dove la salva su Drive. Per una telefonata fra un cliente e un solo sviluppatore (evento 2, più avanti) non c'è nessuna registrazione.
- P7: Buco. Diego, che non è il referente, dà informazioni preziose e chiede il PDF: la skill li separa bene (richiesta, non decisione), ma non esiste una regola su come trattare le richieste di chi non è il referente quando sono in conflitto con quelle del referente.

**Tempo del kickoff.** Il budget è il 10% di 420 ore: 42 ore. Spese fino a qui: riunione 3 ore (PL 2 e team lead, 1,5 ciascuno), indagine nel codice 14 (team lead 8, sviluppatore 3 sei), Stato di partenza 4, prima Proposta 12 (PL 2). Totale 33 ore.

### Stato di partenza, 16 ottobre (skill `stato-di-partenza`, forma progetto)

1. **Parte del sistema coinvolta.** Accessi, prezzi, ordini, anagrafica rivenditori del gestionale.
2. **Come funziona oggi.** Un solo listino per tutti i visitatori. Gli ordini dei rivenditori arrivano per telefono o email e vengono inseriti a mano. Riferito (Diego).
3. **Cosa verrà toccato.** Modulo `prezzi`, usato da scheda prodotto, carrello, pagamento e gestionale: verificato. Autenticazione del sito, che ha un solo ruolo: verificato. Anagrafica dei rivenditori (circa quaranta, non collegata agli utenti): verificato. Ordini: tabella con campo canale? Non risulta dalle fonti: tra le incognite. Gestionale: nuova scheda rivenditori e ordini.
4. **Comportamenti non documentati.** I codici sconto si applicano dopo l'IVA. Il carrello si svuota dopo 90 giorni, non 30 come dice il Manuale. Verificato.
5. **Vincoli.** Nessun test automatico su `prezzi` e carrello: ogni modifica costa di più. Il pagamento è in garanzia fino al 26 ottobre. Il comparatore usa `prezzi`.
6. **Fattibilità.** Accesso dei rivenditori: fattibile. Prezzi propri: fattibile con un compromesso, perché `prezzi` va esteso a più listini e riguarda cinque parti. Ordini grandi senza carrello normale: fattibile, ma il pagamento è da definire (supposto). Scadenza di fine febbraio: provvisoria, dipende dalla stima.
7. **Incognite.** Formato dei listini e chi li fornisce. Pagamento degli ordini grandi. Utenti per rivenditore. Condizioni speciali.
8. **Lavori e documenti.** Comparatore e modulo `prezzi`. Nuovo pagamento in garanzia. Manuale e Documento tecnico.
9. **Fonti.** Kickoff del 13 ottobre, repository, documenti.

**Osservazioni.**
- P8: Buco. Le differenze fra Manuale e codice (carrello a 30 contro 90 giorni) vanno "sanate" dal progetto, ma nessuna skill dice chi decide quale dei due vale. Se vale il Manuale, il codice è un bug da correggere in garanzia; se vale il codice, il Manuale va corretto. La decisione spetta al cliente: va fra le domande della Proposta.
- P9: Manca. Lo Stato di partenza del progetto non ha la voce "scadenze del cliente", presente solo nella forma per il prodotto (P1).

### Proposta di soluzione, v0.1, 21 ottobre (skill `proposta-di-soluzione`)

Tre pagine.

**In sintesi.** Ai rivenditori di Lumera si apre un'area riservata dove entrano con le loro credenziali, vedono i loro prezzi e fanno ordini grandi. Il pagamento degli ordini grandi non passa dalla carta. Restano da definire alcune condizioni speciali. La scadenza di fine febbraio è registrata come scadenza del cliente: non è garantita da questo documento.

**La richiesta come è stata compresa.** Con le parole di Franco.

**La soluzione.**
1. Obiettivo e utenti: rivenditori, addetto commerciale (Diego), assistenza (Marta).
2. Soluzione: accesso con credenziali, prezzi propri, ordine grande da elenco di codici e quantità, storico, gestione degli accessi.
3. Compromessi: l'ordine grande non si paga con carta, ma si fattura (da confermare, D3).
4. Suggerimenti: preventivo in PDF (D4), opzionale.
5. Cosa non si potrà fare: aggiornare i listini dal sito; vedere prezzi del rivenditore nel comparatore, in questa fase.
6. Assunzioni: un utente per rivenditore (da confermare, D2).
7. Domande aperte: D1 fasce e condizioni speciali. D2 utenti per rivenditore. D3 pagamento. D4 preventivo PDF. D5 data della fiera. D6 carrello: 30 o 90 giorni? 
8. Cosa serve dal cliente: listini dei rivenditori, anagrafica aggiornata, il nome del referente (Franco).
9. Prossimi passi.

**Allegato.** Funzionalità F13, Area rivenditori. F13.1 Come rivenditore, voglio accedere con le mie credenziali, per entrare nella mia area. F13.2 Come rivenditore, voglio vedere i miei prezzi, per conoscere le mie condizioni. F13.3 Come rivenditore, voglio fare un ordine grande indicando codici e quantità, per non inserire cento volte lo stesso prodotto. F13.4 Come rivenditore, voglio rivedere i miei ordini passati, per ripeterli. F13.5 Come addetto commerciale, voglio creare e disattivare gli accessi dei rivenditori, per controllare chi entra. F13.6 Come assistenza, voglio vedere gli ordini dei rivenditori nel gestionale con il canale di ingresso, per gestirli come gli altri. Sunto della lavorazione: documentazione, sviluppo a milestone con demo su staging, rilascio.

**Osservazioni.**
- P10: Contraddizione. La Proposta non ammette date e la scadenza di Franco è la ragione dell'intero progetto. La skill dice "nessuna data" e non offre un modo per dire "la scadenza è fattibile o no" prima che il cliente confermi. Il cliente scopre la fattibilità dal Piano dei SAL, dopo il Manuale e il Documento tecnico, cioè dopo alcune settimane di lavoro. Il principio "le cattive notizie si comunicano subito" non è applicato.
- P11: Buco. La Proposta di 5 pagine al massimo regge qui (tre). Con più story la sua lunghezza richiederebbe tagli all'allegato: vedi il prodotto (R9).

**Allineamento dei documenti** alla conferma (skill `allineamento-documenti`), anticipato per il test sulla v0.1.
- Documento toccato: Manuale v1.5, story F11.1 del comparatore (confronto affiancato). Il confronto dovrà mostrare il prezzo giusto per chi guarda. Tipo: documento approvato dal cliente per un lavoro ancora aperto. La skill si ferma: serve una variazione o una comunicazione.
- Decisione di PL 1 e PL 2: i rivenditori non vedono il comparatore in questa fase. È un'esclusione nella Proposta (voce "Cosa non si potrà fare"). Nessuna variazione.

### Revisione, ottobre e novembre

**26 ottobre, evento 1.** Franco risponde solo a metà delle domande aperte.

**Skill `proposta-di-soluzione`, riscontro del cliente.** Registro del riscontro: D1: risposta (tre fasce, due rivenditori con condizioni speciali). D2: risposta (più utenti per alcuni rivenditori). D5: risposta (lunedì 22 febbraio). D3: "decidete voi": non è una risposta, la decisione spetta a lui; la domanda resta aperta, riformulata. D4: senza risposta. D6: senza risposta.

**PL 2 decide gli esiti.** D2: l'assunzione cambia (più utenti per rivenditore: la story F13.5 si amplia). Nuova versione v0.2, 28 ottobre, con D3, D4, D6 aperte, sono "bloccanti la conferma".

**30 ottobre.** Franco risponde: D3: fattura a 30 giorni, nessuna carta. D4: il preventivo PDF "sì, ma dopo". D6: vale il Manuale, 30 giorni: il codice sarà corretto.
- La risposta a D6 trasforma il bug del carrello in lavoro: il codice (90 giorni) è difforme dal Manuale. Per il progetto è una voce in più, di 2 ore; la proposta v0.3 la registra come ciò che si sana. Nessuna skill dice dove finisce quel lavoro.
- Osservazione P12: Buco. La correzione delle difformità fra Manuale e codice, decisa dal cliente, non ha un posto nel flusso: non è nella richiesta, non è una variazione, non è un ticket.

**4 novembre, conferma a voce.** Call con Franco e Diego. Diego entra per primo e dice: "Per me va bene, confermiamo." Franco entra dopo dieci minuti, legge la v0.3 e dice: "Sì, confermo."
- **Skill `interpretazione-conversazioni`.** La conferma di Diego non vale: non è il referente. La conferma di Franco, dopo, vale dopo il riepilogo scritto. PL 2 invia il riepilogo: "Confermata la versione 0.3 della Proposta, che diventa 1.0". Franco risponde "ok".
- Osservazione P13: Passaggio. La Proposta confermata diventa "v1.0" e il Manuale esistente "v1.6": nello stesso lavoro due documenti hanno versioni numeriche vicine. I riepiloghi scritti devono nominare sempre il documento oltre alla versione.

### Manuale del prodotto, dal 5 al 24 novembre (skill `manuale-del-prodotto`)

**Avvio.** Il sistema ha già un Manuale (v1.5): aggiornamento. Fonti: Proposta v1.0, Stato di partenza.
**Struttura.** Nuova funzionalità F13 Area rivenditori, con le sei story complete. Esempio di due.

- **F13.2** Come rivenditore, voglio vedere i miei prezzi, per conoscere le mie condizioni.
  - Situazione di partenza: il rivenditore è entrato con le sue credenziali e ha un listino associato.
  - Comportamento: nel catalogo e nella scheda prodotto il rivenditore vede il prezzo del suo listino, con e senza IVA. Il listino pubblico non compare. Un prodotto senza prezzo nel suo listino mostra "prezzo su richiesta".
  - Casi particolari: rivenditore senza listino, il catalogo mostra "prezzi su richiesta". Prodotto non presente nel listino: "prezzo su richiesta".
  - Accettata quando: un rivenditore con listino entra, apre una scheda prodotto e vede il prezzo del suo listino; un visitatore non registrato vede il listino pubblico; il rivenditore non vede mai il listino pubblico.
- **F13.3** Come rivenditore, voglio fare un ordine grande indicando codici e quantità, per non inserire cento volte lo stesso prodotto.
  - Situazione di partenza: il rivenditore è entrato.
  - Comportamento: il rivenditore incolla o scrive un elenco di codici e quantità. Il sistema riconosce i prodotti, mostra il totale con i prezzi del suo listino e le eventuali righe non riconosciute. Il rivenditore conferma. Nessun pagamento con carta: l'ordine arriva all'assistenza, che emette fattura a 30 giorni.
  - Casi particolari: codice non riconosciuto, quantità non valida, prodotto esaurito, elenco vuoto, più di 500 righe.
  - Accettata quando: un elenco di 100 righe valide produce un ordine con il totale giusto e arriva nel gestionale con il canale "rivenditori".

**Domande aperte M1.** La soglia di 500 righe è decisa dal cliente? Risposta: Franco "1000 vanno bene".

**Wireframe.** Quattro schermate (login, listino, ordine grande, storico). Facoltativi: generati con `wireframe-e-prototipo`. Nessun mockup: aspetto grafico esistente.

**Conferma a voce.** 24 novembre. Franco e Diego. Franco: "Per me va bene così, andate." PL 2 invia il riepilogo scritto il 24; Franco risponde "ok" il 25. Il Manuale v1.6 è confermato.

**Osservazioni.**
- P14: Contraddizione. La skill dice "la versione confermata dal cliente è la v1.0". Per un sistema che ha già un Manuale (qui v1.5) la versione confermata è la v1.6. Il testo va corretto.
- P15: Buco. Chi trasforma la risposta a D6 (30 giorni) in correzione del codice è lo stesso PL, ma il piano non dice dove registrarla (vedi P12).

### Documento tecnico, Milestone e issue, e Piano dei SAL, dal 25 novembre al 2 dicembre

**Skill `documento-tecnico`** (v1.6). Nuove sezioni: autenticazione dei rivenditori, modulo `prezzi` a più listini, ordine grande, gestionale. Infrastruttura invariata. Rischio: nessun test su `prezzi` e carrello. Decisione tecnica: il team scrive i test prima di toccare `prezzi`. Marcata "Proposta da validare" finché il team lead non la accetta. La accetta.

**Skill `piano-delle-milestone`**, capitolo 11 del Documento tecnico.

Parametri: data di avvio 7 dicembre (inizio dello sprint 8). Team: sviluppatore 1 (30 ore a settimana, 6 al giorno), sviluppatore 2 (15 a settimana, 3 al giorno). Dal 11 gennaio anche lo sviluppatore 3, 4 ore al giorno per il progetto. Decisione di chi gestisce il team e del CEO il 2 dicembre, come leva per la fiera. Buffer di milestone: 20%. Buffer di sprint: 20%. Calendario: martedì 8 dicembre, chiusura dal 24 dicembre al 6 gennaio.

Capacità netta al giorno, tolto il buffer di sprint: fino al 8 gennaio, 7,2 ore (9 per 0,8). Dal 11 gennaio, 10,4 (13 per 0,8).

- **M1, SAL1 "Accesso e prezzi".** Story F13.1, F13.2, F13.5. 140 ore stimate, buffer 28, totale 168. Issue:
  - I1, supporto, test automatici su `prezzi`, 16.
  - I2, supporto, modello dei listini per rivenditore, 20.
  - I3, story F13.1, accesso con ruolo rivenditore, 24.
  - I4, story F13.5, gestionale: creazione e disattivazione degli accessi, 16.
  - I5, supporto, importazione dei listini, 24. Dipende dai listini del cliente, attesi entro l'11 dicembre.
  - I6, story F13.2, prezzi del rivenditore su catalogo e scheda, 30. Dipende da I2 e I5.
  - I7, supporto, staging con dati di prova dei rivenditori, 6.
  - I8, preparazione della demo e correzioni, 4.
  - Data prevista della demo: martedì 19 gennaio.
- **M2, SAL2 "Ordini grandi".** Story F13.3 e F13.6. 160 ore stimate, buffer 32, totale 192. Issue: I9 pagina ordine grande 36, I10 caricamento righe da codici e quantità 36, I11 regole di prezzo e sconto sul totale 32 (anche i codici sconto, che si applicano dopo l'IVA), I12 ordine senza pagamento online, a fattura 20, I13 gestionale: ordini dei rivenditori e canale 20, I14 test e rifiniture 12, I15 preparazione demo 4. Data prevista della demo: lunedì 15 febbraio.
- **M3, SAL3 "Storico e rifiniture".** Story F13.4. 140 ore stimate, buffer 28, totale 168. Data prevista della demo: mercoledì 10 marzo.
- Totale 440 ore stimate, 88 di buffer.

**Copertura.** Ogni story F13.1 a F13.6 ha le sue issue. La correzione del carrello da 90 a 30 giorni (2 ore) entra come issue I16 di tipo bug in M3.

**Stima di durata.** Dal 7 dicembre al 10 marzo, circa 14 settimane di calendario con le chiusure. Rispetto alla stima iniziale (420 ore), la stima vera è 440 ore più 88 di buffer: 528.

**Osservazioni.**
- P16: Contraddizione. La skill `sprint` dice di dichiarare uno sprint di supporto "perché il cliente saprà che non vedrà story nuove", ma lo Sprint report è interno e il Milestone report arriva solo a fine milestone. Lo sprint 8 è di supporto in prevalenza (I1 e I2): nessun documento lo dice al cliente.
- P17: Buco. Il progetto inizia a metà sprint 7 (documentazione finita il 2 dicembre) e lo sprint 7 termina il 4. La skill `sprint` dice di pianificare a inizio sprint. I giorni dal 2 al 4 dicembre non entrano in nessuno sprint: tre giorni persi per il progetto.
- P18: Buco. Una milestone dura da 4 a 8 settimane. La M1 dura 168 ore con una squadra che ne fa 7,2 al giorno: 23 giorni lavorativi, 4,7 settimane, rientra. Ma in calendario, con le chiusure, la M1 va dal 7 dicembre al 19 gennaio: 6 settimane e mezzo. Se una milestone contiene la chiusura aziendale, "da 4 a 8 settimane" si legge in settimane di calendario o di lavoro? Il test usa il calendario.
- P19: Contraddizione. La skill `piano-delle-milestone` dice "data prevista della demo": ma lo sprint dura due settimane e la data cade a metà sprint (19 gennaio, sprint 11). Il controllo della milestone si fa alla chiusura dello sprint: il 15 gennaio. La skill non dice se la demo si fissa alla fine di uno sprint.

**Piano dei SAL, 2 dicembre** (per Franco, testo): "Il progetto dell'area riservata ha una durata stimata di 14 settimane, dal 7 dicembre al 10 marzo, comprese le chiusure di fine anno. Prevede tre consegne. SAL1, Accesso e prezzi: i rivenditori entrano e vedono i loro prezzi. Demo martedì 19 gennaio. SAL2, Ordini grandi: i rivenditori fanno ordini grandi. Demo lunedì 15 febbraio, una settimana prima della fiera. SAL3, Storico e rifiniture: lo storico degli ordini. Demo mercoledì 10 marzo. Ci servono entro l'11 dicembre i listini dei rivenditori e l'anagrafica aggiornata. Ogni giorno di ritardo su un materiale sposta di un giorno le consegne che ne dipendono."

**Franco (cliente), 2 dicembre:** "Ricevuto. Il SAL2 prima della fiera va benissimo."

**Chi gestisce il team e il CEO**, sul piano: Dev 3 dal 11 gennaio, tolto dai ticket, che si riducono a 4 ore al giorno.
- Osservazione P20: Buco. Il piano dice che il progetto prende le persone libere, ma un ticket normale "non toglie nessuno a un progetto". Qui il progetto toglie capacità ai ticket: l'accordo non è scritto. Quanta capacità hanno i ticket di Lumera?

### Sviluppo, dal 7 dicembre

**Sprint 8, dal 7 al 18 dicembre (skill `sprint`, apertura).**
- Avvio: cliente e sistema, apertura, il capitolo Milestone, ore disponibili. Dal 7 al 11 dicembre sono quattro giorni (martedì 8 festivo): 36 ore lorde (9 al giorno). Dal 14 al 18: 45. Totale 81. Buffer di sprint 16,2. Pianificabili 64,8.
- Issue scelte, in ordine: I1 (16), I2 (20), I3 (24) = 60. L'I5 dipende da materiali non ancora arrivati: non si sceglie. L'I4 (16) non entra: 76 supererebbe 64,8.
- Tipo dello sprint: sprint di supporto in prevalenza (I1, I2 supporto). Il cliente sa che non vedrà story nuove.
- Il responsabile (PL 2) e chi sviluppa confermano.

**Evento 3, 11 dicembre: i listini non arrivano.** Franco risponde che sono in preparazione.

**Skill `riprogrammazione`.** Imprevisto: materiali in ritardo. Caso: "Materiali o risposte in ritardo". Il progetto non è mai fermo: le issue che ne dipendono (I5, I6, 54 ore) escono dallo sprint. Altro lavoro non dipendente disponibile: I4 (16), I7 (6), I8 (4) e I1 a I3 in corso: più di 43 ore. La capacità non si perde.
- Solleciti: il responsabile registra cosa manca (listini, dall'11), da chi dipende (Diego), da quando. Sollecito scritto il 14 dicembre.
- **Cliente non risponde.** Non serve una leva: le date della parte dipendente slittano degli stessi giorni.

**Evento 2, 15 dicembre: Diego chiama lo sviluppatore 2.**
Diego (cliente): "Mi servono i preventivi in PDF, ci servono per la fiera. Puoi aggiungerli?"
Sviluppatore 2: "Non è nel Manuale. Lo riporto al nostro PL, che ti risponde."
- Osservazione P21: Buco. Lo sviluppatore ha fatto la cosa giusta, ma nessun documento gli dice cosa rispondere né dove segnalare. La regola "un solo responsabile" è nelle Regole comuni: il Ciclo di sviluppo non ha il passo per lo sviluppatore.

PL 2 riceve il messaggio dello sviluppatore. La conversazione non è registrata, solo riportata (P6).

**Skill `variazione`.**
- Chi l'ha chiesta: Diego, non il referente. Il Manuale v1.6 è confermato: è una variazione. Era già in D4: "sì, ma dopo".
- Categoria: nuova story F13.7 "Come rivenditore, voglio scaricare un preventivo in PDF dell'ordine, per conservarlo", 24 ore. Supera le 4 ore: media.
- Impatto: più 24 ore in M3. Buffer di M3: 4,8 in più se il buffer segue le ore (dubbio, vedi T25). Data della demo di M3: da 10 a 12 marzo.
- Gestione: approvazione scritta del cliente prima di lavorarci. Comunicazione a Franco.

**Franco (cliente), 17 dicembre, per telefono:** "Va bene, ok per il PDF, ma dopo il SAL2." PL 2 invia il riepilogo scritto: "Confermata la variazione V4: preventivo in PDF, nel SAL3, con demo il 12 marzo." Franco risponde ok. V4 è Approvata e inserita in M3. Il Piano dei SAL è aggiornato: M3, 12 marzo.

**Sprint 9, dal 21 dicembre al 1 gennaio.**
- Solo tre giorni lavorativi (21, 22, 23). Dal 24 la chiusura. Capacità: 27 lorde, buffer 5,4, pianificabili 21,6.
- I listini arrivano il 21 dicembre (sei giorni lavorativi dopo l'11). Issue scelte: I4 (16): 16 entro 21,6. L'I5 (24) non entra. Restano 5,6 ore: si sceglie I7 (6)? 6 > 5,6: no. Restano libere.
- Osservazione P22: Buco. Con 5,6 ore libere e nessuna issue piccola disponibile, la capacità si perde. La skill dice di pianificare per intero ma non come comportarsi con i residui.

**Sprint 10, dal 4 al 15 gennaio.** Lavorativi: 7, 8, 11, 12, 13, 14, 15 gennaio. Dal 11 entra lo sviluppatore 3: lorde 9 al giorno il 7 e 8 gennaio (18), 13 al giorno dall'11 al 15 (65), totale 83. Buffer 16,6. Pianificabili 66,4.
- Issue scelte il 7 gennaio: I5 (24), I6 (30), I7 (6), I8 (4) = 64, entro 66,4.

**Eventi 4 e 5, 11 e 13 gennaio.**
- Evento 4, lo sviluppatore 2 si ammala dall'11 al 15 gennaio. Perdita: 3 ore al giorno per 5 giorni, 15 lorde, 12 nette. Pianificabili: 54,4. Escono dallo sprint le issue meno prioritarie, I7 (6) e I8 (4): restano I5 e I6, 54 ore.
- Evento 5, 13 gennaio, ticket urgente 108 sul pagamento (PayPal in attesa). Lo sviluppatore 1 lo prende per due giorni: 12 ore lorde, dal buffer di sprint (16,6): lo assorbe per intero, nessun effetto sul progetto. Percorso d'urgenza, incaricato della pubblicazione il sistemista 2.
- Le ore del 108 vanno sul ticket e non sul progetto.

**Chiusura dello sprint 10, 15 gennaio** (skill `sprint`, chiusura).
- Esiti: I5 finita. I6 non finita: su 30 ore stimate se ne sono spese 30,4 e il team rivaluta in 45 il totale, ne restano 14,6. I7 e I8 non fatte, uscite dallo sprint.
- Ore completate (stime delle issue finite): I1 16, I2 20, I3 24 (consumate 30), I4 16, I5 24. Totale 100 ore stimate su 140.
- Ore rimanenti. Secondo le stime originali delle issue non finite: 40 (I6 30, I7 6, I8 4). Secondo il team, rivalutate: 24,6 (I6 14,6, I7 6, I8 4).
- Buffer di milestone: consumate 6 ore su I3 e 15 su I6 (45 contro 30). Rimaste 7 su 28.
- Capacità rimanente prima della data (19 gennaio): il 18 e il 19 gennaio, 10,4 al giorno, 20,8 ore.
- **Controllo della milestone.** La skill dice: "ore rimanenti della milestone, buffer compreso, contro la capacità". Si può leggere in tre modi.
  - Lettura 1: le ore rimanenti sono quelle rivalutate dal team (24,6) e il buffer non è capacità in più, perché la data lo contiene già. 24,6 supera 20,8: **in ritardo**.
  - Lettura 2: il buffer è capacità in più. 24,6 sta in 20,8 più 7, cioè 27,8: **a rischio**.
  - Lettura 3: le ore rimanenti sono le stime originali delle issue non finite (40). 40 supera anche 27,8: **in ritardo**, pur con il team convinto di finire in tempo.
  - Il test adotta la lettura 2, quella che la skill descrive per "a rischio": esito **a rischio**.
- Osservazione G1: Contraddizione. Gli esiti di `sprint` e di `riprogrammazione` dipendono da tre cose non definite: se il buffer si somma alla capacità o è già dentro la data, se le ore rimanenti sono le stime originali o quelle rivalutate, e che significa "buffer compreso". Con gli stessi numeri si ottengono due esiti diversi.
- Segnalazione: a rischio, serve la riprogrammazione.

**Skill `riprogrammazione`.** Imprevisto: assenza breve di una persona e issue sottostimata. Ricalcolo: servono 24,6 ore, la capacità è 20,8: mancano 3,8 ore, mezza giornata. La M1 finisce il 20 gennaio e la demo, provata sullo staging, si fa il 21. La data comunicata era il 19. Leve: nessuna, si tratta di due giorni. Cambia una data comunicata: va avvisato Franco.
- Osservazione G2: Contraddizione. La skill dice che per una milestone a rischio il cliente si avvisa solo se lo decide il responsabile. Qui il ricalcolo sposta una data già comunicata (19 contro 21 gennaio) e la regola dice che si avvisa. Lo stesso caso ha due regole.
- Osservazione G3: Contraddizione. `riprogrammazione` dice "aggiungere ore si decide con la direzione", il Ciclo di sviluppo dice "internamente". Non è lo stesso soggetto: chi decide?

**Comunicazione a Franco** (skill `riprogrammazione`): "La demo del SAL1 passa dal 19 al 21 gennaio. Il motivo: un'attività sui prezzi è risultata più grande del previsto e una persona del team è stata assente una settimana. Le altre consegne cambiano di due giorni: SAL2 il 17 febbraio, SAL3 il 16 marzo. Non serve fare nulla."
**Franco (cliente):** "Ok, la fiera è sempre il 22."
- Il SAL2 è quindi il 17 febbraio: ancora prima della fiera.

**Demo del SAL1, 21 gennaio.** Skill `demo`: scaletta con le story F13.1, F13.5, F13.2. Verifica sullo staging dal team. Fuori demo: F13.3, F13.4, F13.6.
- F13.1 accettata. F13.5 accettata. F13.2: difetto non bloccante (un'etichetta mostra il prezzo senza IVA con la dicitura "IVA inclusa"), correzione entro il 26 gennaio.
- **Evento 6.** Franco: "Mi piacerebbe che vedessero anche il prezzo pubblico barrato, accanto al loro." Richiesta nuova: non si accetta in demo, si annota. Contraddice la regola che i rivenditori non vedono il listino pubblico: lo chiede il referente.

**Skill `variazione`** per V5. Il Manuale è confermato: variazione. Tocca F13.2, 3 ore, nessuna data cambia. Prima domanda del criterio: cambia ciò che la proposta ha stabilito? Sì: la proposta escludeva il listino pubblico. La skill propone grande. Il responsabile decide media: tre ore, una story, nessuna data. Buffer di M1: consumato quasi tutto, rimaste 7 ore prima della demo e poi consumate dalla correzione della dicitura: non assorbibile.
- Osservazione P23: Manca. La skill non dice quale buffer paga una variazione piccola che entra quando il buffer della sua milestone è consumato o la milestone è già consegnata. Il test usa il buffer di M2, dove la story si ripercuote, ma la regola dice "il buffer della milestone" senza specificare.
- Osservazione P30: Contraddizione. Il primo criterio ("cambia ciò che la proposta ha stabilito") rende grande qualsiasi richiesta che contraddice una riga della proposta, anche di tre ore. La grande richiede proposta integrativa e nuova documentazione: sproporzionata. V5 è decisa media dal responsabile, approvazione scritta, Franco approva il 22 gennaio. Entra in M2.

**Milestone report del SAL1** (skill `milestone-report`), per il cliente, allegato alla email di presentazione.
- Cosa è stato consegnato: F13.1 e F13.5 con il criterio dal Manuale, F13.2 con il criterio.
- Esito della demo: accettate F13.1 e F13.5; F13.2 accettata con un difetto non bloccante, corretto entro il 26 gennaio.
- Variazioni di questa milestone: V5, prezzo pubblico barrato, 3 ore, entra nel SAL2.
- Prossima milestone: SAL2, Ordini grandi, demo il 17 febbraio.
- Date aggiornate: la demo del SAL1 è passata dal 19 al 21 gennaio. Le altre date: SAL2 17 febbraio, SAL3 16 marzo.
- Cosa serve dal cliente: nessun materiale in scadenza.
- Cosa deve fare il cliente: confermare per iscritto l'accettazione.
**Franco (cliente), 22 gennaio:** "Confermo, tutto bene."

**Osservazioni.**
- P24: Passaggio. `demo` e `milestone-report` producono entrambi l'esito della demo: la skill `demo` dice che il verbale per una milestone è parte del Milestone report, ma produce comunque una sezione "Esito e verbale". Non è chiaro chi scrive cosa e quale dei due testi si invia.
- P25: Passaggio. Lo Sprint report (interno) e il Milestone report (cliente) ripetono molte voci. Il responsabile potrebbe scrivere due volte lo stesso testo.

### Demo del SAL2, 17 febbraio

**Skill `demo`** e `milestone-report`. Le story F13.3 e F13.6 sono mostrate sullo staging. Tutte accettabili nella sostanza.

**Evento 7.** Franco non risponde.

**Skill `milestone-report`** non ha un esito: spazio per l'esito lasciato. Il silenzio non vale come accettazione.

**Piano di progetto, "Il cliente non risponde":** PL 2 registra cosa manca (accettazione del SAL2), invia un sollecito scritto il 18 febbraio, sposta il lavoro non dipendente (il SAL3 prosegue). Nessuna issue dipende dall'accettazione.
- Ma il SAL2 serve per la fiera di lunedì 22 febbraio: senza accettazione non si pubblica.
- **CEO** chiama Franco il 18 febbraio: "Franco, ci serve la sua conferma del SAL2 entro domani, per pubblicare prima della fiera." **Franco:** "Scusate, ero in viaggio. Confermo."
- Riepilogo scritto di PL 2 il 18 febbraio. Franco risponde "ok" il 19 febbraio alle 9.

**Osservazioni.**
- P26: Buco. Un cliente che non risponde alla demo lascia la milestone "consegnata ma non accettata" senza limite. Nel caso con una scadenza esterna (la fiera) il piano non prevede nessuna escalation: né il CEO, né un telefono, né una scadenza interna. Il test l'ha inventata.
- P27: Buco. L'accettazione dell'ultima demo non ha effetto sulla pubblicazione parziale: il Piano di progetto dice che si pubblica alla fine, il test pubblica alla seconda milestone.

### Pubblicazione parziale per la fiera, 19 febbraio

**Skill `collaudo-e-rilascio`.** Il caso è un rilascio parziale: M1 e M2. La skill dice "Vale per i progetti" e prevede un collaudo finale e un piano di rilascio. Non prevede il rilascio per milestone.
- Scaletta del collaudo (ridotta): percorsi completi dall'accesso all'ordine grande alla conferma; regressioni su catalogo, carrello e scheda prodotto (toccate dal modulo `prezzi`); pagamento (non toccato: nessun test richiesto, ma fatto); integrazioni (email degli ordini); dati reali: i listini dei quaranta rivenditori. Difetti noti: nessuno bloccante.
- Piano di rilascio per Franco: "Venerdì 19 febbraio alle 18:00 pubblichiamo l'area riservata con accesso, prezzi e ordini grandi. Il sito resta disponibile. Per circa venti minuti il sito può essere più lento. Se qualcosa non funziona torniamo alla versione precedente e vi avvisiamo. Dopo la pubblicazione avvisiamo Franco e Diego. Per segnalare problemi: scrivere al PL 2."
- Scheda tecnica di rilascio, interna: backup del database; migrazione delle tabelle dei listini; pubblicazione delle API; pubblicazione del sito; verifica del login di un rivenditore di prova; verifica di un ordine di prova; decisione di tornare indietro entro 30 minuti, presa da PL 2 e dal sistemista.
- **Incaricato della pubblicazione.** Chi gestisce il team designa il sistemista 1. Pubblica alle 18:05, con la scheda a mano, non in CI. Verifica. Chiama PL 2: "Pubblicato, verificato." PL 2 invia l'avviso di sistema in produzione a Franco.

**Osservazioni.**
- P28: Buco. Il Piano di progetto prevede un solo rilascio, al termine di tutto. Per la fiera ne serve uno parziale. Né `collaudo-e-rilascio` né il Piano di progetto lo trattano; le Regole comuni (garanzia) accennano a una milestone che va in produzione prima.
- Per la designazione dell'incaricato vale T17: qui la fa chi gestisce il team in pochi minuti, e va scritto.

### Chiusura, marzo

**SAL3, V4 e V5.** Demo il 16 marzo (V4 inclusa). Collaudo finale il 17 e 18. Pubblicazione finale il 19 marzo, sistemista 2.

**Fase 8, chiusura** (skill `allineamento-documenti`, dopo la pubblicazione). Manuale v1.7 (con V4) diventa v1.8, con quanto realizzato (F13.7, F13.2 con V5, la correzione di F3.3). Documento tecnico v1.7 diventa v1.8. Documenti di altri lavori: il comparatore (SAL3 accettato il 27 novembre), il Documento tecnico del comparatore: la sezione `prezzi` cambia, aggiornata. Un lavoro aperto: nessuno. Il Registro delle variazioni si chiude.

**Garanzia.**
- Rilascio finale il 19 marzo. Durata pianificata: dal 7 dicembre al 12 marzo (V4 inclusa), 96 giorni. Il 50% è 48. Minimo 15. Garanzia: 48 giorni di calendario dal 19 marzo, fino al 6 maggio.
- Per le story di M1 e M2, in produzione dal 19 febbraio, "per le sue story decorre da quel momento": 50% di quale durata? Dal 7 dicembre al 15 febbraio, 70 giorni, quindi 35 giorni: fino al 26 marzo. Oppure 48 dal 19 febbraio: fino al 8 aprile.
- Osservazione P29: Buco. La formula della garanzia non dice quale durata pianificata si usa quando una parte del lavoro va in produzione prima. Le due letture danno scadenze diverse.

### Verifica dei fattori del percorso 2

- Categoria progetto: emersa. Responsabile PL 2 e non PL 1: emerso.
- `prezzi` a un solo listino, un solo ruolo utente, nessun test su carrello e `prezzi`: emersi alla parte B.
- Il progetto tocca il pagamento in garanzia: emerso alla parte A, ma non ha prodotto effetti (gli ordini grandi a fattura non lo toccano).
- Codici sconto dopo l'IVA: emerso alla parte B. Entra nella issue I11. Nessun documento lo dice: va nel Documento tecnico.
- Manuale contro codice sul carrello: emerso, ma senza una decisione di chi vale (P8).
- La scadenza della fiera: emersa solo come testo libero; verificata solo dal Piano dei SAL (P1, P10).
- Conferme a voce di Franco: emerse e gestite con il riepilogo scritto. Le conferme di Diego: scartate.
- Kickoff e Proposta nel 10%: 33 ore su 42, rispettato. La Proposta in 3 pagine: rispettato.
- Il Piano dei SAL informa: emerso, con il problema di P3 (buffer incluso nella durata).
- La pubblicazione, anche parziale: l'ha seguita l'incaricato (P28).

## Percorso 3: prodotto

Il Piano di prodotto non è stato riallineato ai piani nuovi (è previsto per il 2026-10-07). Il test lo applica alla lettera: dove contraddice le Regole comuni, il Ciclo di sviluppo o il Piano di progetto, la contraddizione è annotata.

### Lettura preliminare del Piano di prodotto

Prima di cominciare, leggendo il piano si notano questi punti, che il test conferma strada facendo.

- **Osservazione R16: Contraddizione.** Il Piano di prodotto richiama documenti e regole che ora sono altrove: il "Piano delle milestone" (fase 7) è un capitolo del Documento tecnico; gli imprevisti dello sviluppo stanno nel Ciclo di sviluppo e non nelle Regole comuni; le release successive partono dall'"indagine sull'esistente", che ora è il kickoff; il prototipo e i mockup sono approvati per iscritto e obbligatori, mentre nel progetto sono facoltativi.

### Lunedì 12 ottobre, apertura

**Franco (cliente), su osTicket:** apre la richiesta con le parole della base.

**Leonardo.** Il Piano di prodotto dice: non si assegna l'urgenza (può solo essere nuovo). Verifica preliminare sui soli lavori aperti.

**Skill `verifica-preliminare`.** L'avvio chiede dove sono i lavori aperti e dove si trova il codice. Il codice di un sistema che non esiste non c'è.
- Osservazione R1: Manca. La skill non dice che per un prodotto la parte B (codice) si salta: lo dicono le Regole comuni ("per un prodotto la verifica si limita al confronto con i lavori aperti e con i sistemi che il cliente ha già"). Leonardo la salta per buon senso.

**Parte A.** Lavori aperti di Lumera: comparatore (SAL2 in corso), area riservata (progetto aperto il 5 ottobre, kickoff il 13), ticket 101, 102, 103 e correlati. Nessuna sovrapposizione funzionale con le prenotazioni. Punto di contatto: il sistema nuovo ha utenti e anagrafiche proprie, e un CRM del cliente.
**Esito:** da fare.

**Skill `valutazione-richiesta`.**
- **Categoria proposta.** Prodotto: il sistema non esiste ancora.
- **Stima.** Durata complessiva: da 6 a 7 mesi. Affidabilità bassa.
- **Responsabile.** Un PL.
- **Interfaccia.** Toccata: sistema nuovo.
- **Dubbi.** "Tutto pronto per aprile" non è compatibile con tutto ciò che Franco elenca. Videochiamate, CRM e statistiche sono funzionalità grandi.
- **Domande per Franco.** Quanti consulenti? Come prendono gli appuntamenti oggi? Il CRM ha un'interfaccia? Chi gestisce il dominio e gli account?
- **Prossimo passo.** Per un prodotto, la qualifica del cliente.

**Designazione del PL.** Leonardo, chi gestisce il team e il CEO, in cinque minuti. PL 1 è saturo fino al 27 novembre. PL 2 è già su un progetto che inizia il 13 ottobre. Nessun PL è libero.
**Chi gestisce il team:** "PL 1 avvia il prodotto il 30 novembre. Fino ad allora segue Leonardo con PL 2 in appoggio per l'analisi."
**CEO:** "Per lo sviluppo da gennaio ci servono due sviluppatori in più. Prendiamo due sviluppatori a contratto dall'11 gennaio."
- Osservazione R2: Buco. Nessuna skill né nessun piano verifica la capacità dell'azienda prima di promettere una durata. Le ore dei PL non sono in capacità (P5), gli sviluppatori sono già impegnati fra comparatore, area riservata e ticket (P20). Il prodotto richiede due persone a pieno ritmo per tre mesi: lo si scopre solo se qualcuno ci pensa.

### Qualifica e primo confronto, 15 ottobre

**Franco (cliente), call di 45 minuti** (PL 2 in appoggio, Leonardo). Trascrizione, skill `interpretazione-conversazioni`.

Estratto: Franco: "Abbiamo tre showroom, nove consulenti. Oggi gli appuntamenti si prendono per telefono e li scrivono su un foglio condiviso. Voglio che il cliente scelga showroom, consulente e orario, e che i consulenti vedano la loro agenda. Poi le videochiamate, il CRM e le statistiche. Per aprile."
Leonardo: "Il CRM ha un'interfaccia di programmazione?" Franco: "Credo di sì, è di un fornitore esterno, non so altro."

Sintesi: richieste (prenotazione, agenda, videochiamate, CRM, statistiche); informazioni (tre showroom, nove consulenti, foglio condiviso); scadenza: aprile. Domande: D1 quando in aprile esattamente? D2 il CRM ha un'interfaccia? D3 chi sono gli utilizzatori? D4 cosa serve a una videochiamata: solo il collegamento o anche la registrazione? D5 quali statistiche? Dove riportare: Stato di partenza e Proposta.

**Franco, 16 ottobre:** "Aprile, entro il 15. Per il CRM chiedo al fornitore."

**Osservazione R3: Contraddizione.** Il Piano di prodotto separa la qualifica (fase 2) e l'analisi del contesto (fase 3), con "tempo limitato" non definito. Il Piano di progetto ha il kickoff unico con il 10% della stima. Per un prodotto la regola del 10% non c'è.

### Analisi del contesto, dal 19 al 23 ottobre

**Skill `stato-di-partenza`, forma prodotto.** Incontri con i consulenti dei tre showroom (nove persone). Il tempo è limitato: 4 giorni.

1. **Come lavora oggi il cliente.** Prenotazione per telefono, appunti su un foglio condiviso, nessun promemoria al cliente. Riferito (consulenti).
2. **Chi userà il prodotto.** Cliente finale, consulente, responsabile showroom (probabile, da chiedere).
3. **Sistemi con cui dialogare.** CRM del fornitore esterno: nessuna documentazione, nessun accesso: da chiedere. Videochiamata: servizio non scelto. Email: da definire.
4. **Vincoli.** Scadenza 15 aprile. Dominio e account intestati a Lumera. Privacy: informativa e cookie, spettano al cliente. Identità grafica di Lumera.
5. **Fattibilità.** Prenotazione e agenda: fattibile. Videochiamate: fattibile con un servizio esterno, da scegliere. CRM: provvisoria, senza documentazione né accesso. Statistiche: fattibile, dipende dai dati. Scadenza: provvisoria.
6. **Incognite.** Interfaccia del CRM, servizio di videochiamata, tipo di statistiche.
7. **Fonti.** Incontri del 19 e 20 ottobre, call del 15.

**Interpretazione degli incontri.** Un consulente chiede "se il cliente non si presenta?": nuova informazione, va nelle domande.

### Proposta di soluzione, 28 ottobre (skill `proposta-di-soluzione`)

Cinque pagine. Contiene: sintesi, richiesta, soluzione (utenti: cliente finale, consulente, responsabile showroom), compromessi, suggerimenti (promemoria per email), cosa non si potrà fare, divisione in release, assunzioni, domande aperte (D1 a D9), cosa serve dal cliente (nome del referente, accessi al CRM, scelta dell'orario di apertura), prossimi passi. Allegato con 24 story, ciascuna con titolo e frase, e wireframe delle schermate principali.

**Divisione in release.** Release 1: prenotazione da parte del cliente finale, agenda dei consulenti, email di conferma e promemoria. Release 2: videochiamate. Release 3: CRM. Release 4: statistiche. Perché: la release 1 è il minimo con cui gli utilizzatori possono lavorare davvero.

**Franco (evento 1), 29 ottobre:** "Io li voglio tutti per aprile."

**Piano di prodotto, "Il cliente vuole tutto nella prima release."** Si applica la regola: entra solo ciò senza cui il prodotto non è utilizzabile. La divisione la conferma il referente.
**Leonardo** gli mostra la stima: la sola release 1 (480 ore stimate, 96 di buffer) richiede 12 settimane di due persone a pieno ritmo. Con tutto, altre sei settimane o più. Franco: "Capisco. Fate la prima parte, ma per aprile ci devo essere."
**Franco** conferma a voce, a telefono, la divisione in release. Riepilogo scritto di Leonardo il 30 ottobre: "Confermata la divisione: prima release con prenotazione, agenda e promemoria. Le altre in seguito." Franco risponde ok.

**Osservazioni.**
- R4: Buco. Con 24 story e la divisione in release, le 5 pagine della Proposta sono al limite: l'allegato da solo ne occupa due. La skill non distingue fra prodotto e progetto.
- R5: Buco. Franco ha dato per conferma la divisione. Il Piano di prodotto dice "il cliente la conferma nella fase 5": la conferma è stata data in fase 4, a voce. Le fasi si sovrappongono.

### Revisione e conferma, dal 4 all'11 novembre

Giri brevi, due versioni. Il referente conferma per iscritto l'11 novembre, con la divisione in release e i wireframe, senza domande aperte. Il Piano di prodotto dice "conferma per iscritto"; il Piano di progetto dice "anche a voce, con riepilogo scritto". Il test segue il Piano di prodotto, e osserva.
- Osservazione R6: Contraddizione. Conferma per iscritto contro conferma a voce con riepilogo scritto.

### Prototipo e design, dal 12 novembre

**Chi.** Grafica, 8 ore a settimana. Skill `wireframe-e-prototipo` per il prototipo navigabile (pagine HTML), skill `mockup` per il materiale destinato alla grafica.
- **Prototipo.** Generato dai wireframe: 12 schermate. Sessioni guidate con tre consulenti.
- **Mockup.** Materiale per la grafica: 12 schermate. Stima: 6 ore a schermata, 72 ore. A 8 ore a settimana sono 9 settimane: dal 12 novembre al 22 gennaio, tolti l'8 dicembre e la chiusura aziendale.
- Osservazione R7: Buco. Il Piano di prodotto non dà un tempo alla fase 6 e la sua condizione di chiusura è "il cliente approva prototipo e mockup". Nessuna skill né documento stima la capacità della grafica: la fase finisce il 22 gennaio, dopo l'inizio dello sviluppo.

**Sessione sul prototipo, 2 dicembre (evento 2).** Franco, davanti al prototipo: "Ma se nell'orario scelto non c'è posto? Voglio una lista d'attesa."
**Skill `interpretazione-conversazioni`.** Richiesta nuova del referente. Prima della conferma del Manuale: è una modifica secondo le regole nuove (Piano di progetto, Regole comuni). Il Piano di prodotto, invece: "Il prototipo rivela una richiesta nuova: se resta nella proposta confermata si integra. Se la supera è una variazione grande."
- Osservazione R8: Contraddizione. Per il Piano di prodotto è una variazione grande, per le regole nuove è una modifica (il Manuale non è ancora confermato). Cambia il costo: una variazione grande torna alla proposta e rifà tutta la documentazione.
- Decisione del test: modifica. La lista d'attesa vale 40 ore: non entra nella release 1 per tenere aprile. Franco accetta: "Ok, nella seconda."

### Documentazione, dal 14 dicembre al 8 gennaio

**Manuale** (skill `manuale-del-prodotto`). Sistema nuovo: un Manuale proprio, v0.1 prima stesura, per la sola release 1 con le story complete. Le story della release 2 restano titolo e frase con l'indicazione della release.

**Documento tecnico** (skill `documento-tecnico`). Sistema nuovo: i capitoli su infrastruttura e sicurezza sono completi. Decisioni tecniche: servizio per email, servizio di calendario, dominio. La skill `piano-delle-milestone` produce il capitolo Milestone: tre milestone.
- **M1, fondamenta.** Infrastruttura, staging e produzione, accessi, struttura dei dati. 140 ore stimate, buffer 28. Issue di supporto per infrastruttura e ambienti. Lo spike sul CRM non entra qui (vedi R10).
- **M2, prenotazione del cliente finale.** 200 ore, buffer 40.
- **M3, agenda dei consulenti e promemoria.** 140 ore, buffer 28.
- Totale 480 ore stimate, 96 di buffer. Squadra: due sviluppatori a contratto, 6 ore al giorno ciascuno: 12 ore lorde al giorno, 9,6 nette.
- Date, dall'11 gennaio: M1 martedì 2 febbraio, M2 martedì 9 marzo, M3 lunedì 5 aprile.

**Osservazioni.**
- R9: Contraddizione. Il Piano di prodotto dice che la fase 7 si chiude con "l'approvazione per iscritto di Manuale e Piano dei SAL, ed è arrivata l'approvazione economica". Le Regole comuni e il Piano di progetto dicono che non c'è approvazione economica e che il Piano dei SAL si invia per informare. La condizione di chiusura non può essere soddisfatta come scritta.
- R10: Contraddizione. Lo spike per il CRM va "nella milestone delle fondamenta" (Piano di prodotto, regola per i sistemi esterni senza documentazione). Ma il CRM è nella release 3, non nella prima. Lo spike nella M1 consumerebbe ore della prima release per un lavoro che non serve. Il test lo mette nella milestone che apre la release 3.
- R11: Passaggio. `piano-delle-milestone` e il Piano di prodotto non dicono che cosa si pianifica per le release successive (solo la prima release ha milestone).

**Piano dei SAL**, 8 gennaio (testo): "L'applicazione di prenotazione, prima release, ha una durata stimata di 12 settimane dall'11 gennaio. Tre consegne. SAL1, fondamenta: demo martedì 2 febbraio. SAL2, prenotazione: demo martedì 9 marzo. SAL3, agenda e promemoria: demo lunedì 5 aprile. Poi il lancio. Le funzionalità di videochiamata, CRM e statistiche arriveranno in release successive."

**Franco (cliente):** "Ok. Il lancio quando?"
**Leonardo:** "Il Piano di lancio lo scriviamo a marzo: per ora il lancio gradualmente dal 12 aprile."

**Evento 3, 9 gennaio.** Il fornitore del CRM comunica: "Accesso alle interfacce entro tre settimane." Dato che il CRM è nella release 3, non ha effetto sulla release 1. Registrato.

### Sviluppo e lancio

**Sprint e demo.** Come per il progetto: `sprint`, `demo`, `milestone-report`. Nessuna differenza di processo nella prima release, tranne che la M1 è la milestone delle fondamenta. Demo di M1 il 2 febbraio, di M2 il 9 marzo, di M3 il 5 aprile: tutte accettate in modo esplicito.

**Lancio.** `piano-di-lancio` (skill), marzo.
- Parametri: data prevista 12 aprile (gruppo ristretto: uno showroom), apertura a tutti il 19 aprile. Assistenza rafforzata: 2 settimane (proposta della skill). Garanzia: la skill propone 60 giorni.
- Osservazione R12: Contraddizione. La skill propone la garanzia a 60 giorni, le Regole comuni la calcolano con la formula (massimo tra 15 giorni e 50% della durata pianificata). Per questo prodotto, circa 5 mesi pianificati, sono circa 75 giorni.
- Sezione 3 della skill, cosa serve dal cliente, con data: dati iniziali (elenco dei clienti, file Excel di 2.800 righe) entro il 15 marzo; testi legali (informativa privacy, cookie, condizioni d'uso) entro il 22 marzo; account e domini intestati a Lumera, già dal kickoff; persone per la formazione (i nove consulenti) entro il 29 marzo.
- Promemoria interno: backup, monitoraggio, ritorno alla versione precedente provato; difetti non bloccanti aperti.

**Collaudo finale.** Il Piano di prodotto lo mette nel lancio, passo 1. `collaudo-e-rilascio` dice "vale per i progetti; il rilascio di un prodotto ha anche il Piano di lancio". Nessuna skill è esplicitamente per il collaudo del prodotto.
- Osservazione R13: Buco. Il collaudo finale e la scheda tecnica di rilascio di un prodotto non hanno una skill dichiarata. Si usa `collaudo-e-rilascio` per analogia, e il Piano di lancio per il resto.

**Evento 4, 12 marzo.** Il cliente consegna l'elenco dei clienti: un Excel disordinato, con righe duplicate e telefoni in formati diversi.
Piano di prodotto: "La pulizia spetta al cliente. Se la chiede al team è una variazione." **Franco:** "Non abbiamo tempo, fatelo voi." È una variazione: pulizia di 2.800 righe, 20 ore: media. Approvazione scritta. Il piano non dice dove entra: non è una story, non è nel Manuale.
- Osservazione R14: Buco. Il caricamento dei dati iniziali non ha una issue nel capitolo Milestone (né il piano né la skill `piano-delle-milestone` lo chiedono). La pulizia, da variazione, non ha un posto.

**Evento 5, 6 aprile.** A sei giorni dal lancio i testi sulla privacy non sono pronti.
Piano di prodotto e skill: "Il lancio non avviene finché mancano." Leonardo avvisa Franco: "Senza informativa non possiamo aprire". **Franco:** "Arrivano il 14." Il lancio al gruppo ristretto slitta di sette giorni: dal 12 al 19 aprile; apertura a tutti dal 19 al 26; assistenza rafforzata fino al 10 maggio. "Aprile" è rispettato per il gruppo ristretto, non per tutti.

**Pubblicazione del 19 aprile.** L'incaricato designato da chi gestisce il team (sistemista 2) segue due pubblicazioni: la prima per il gruppo ristretto, la seconda per tutti il 26 aprile. Il piano dice "il prodotto va in produzione e decorre la garanzia", ma una produzione a due tempi non è prevista.
- Osservazione R15: Buco. La garanzia decorre "dalla messa in produzione": per un lancio graduale è il 19 aprile (gruppo ristretto) o il 26 (tutti)? Il Piano di prodotto non lo dice.

**Passaggio a regime.** Manuale e Documento tecnico aggiornati; il prodotto passa ai ticket per le richieste e ai progetti per le release successive.

### Verifica dei fattori del percorso 3

- Sistema nuovo, quindi prodotto: emerso.
- Non tutto nella prima release: emerso e deciso dal referente, dopo che la stima ha mostrato la differenza.
- Il CRM esterno senza documentazione: emerso, con il conflitto fra regola dello spike e divisione in release (R10).
- "Aprile": emerso alla valutazione, risolto con la prima release ridotta. La scadenza non è registrata in nessun campo di un documento oltre lo Stato di partenza, dove il prodotto ha il campo "Vincoli".
- Prototipo e design: emerso il limite di capacità della grafica (R7).
- La pubblicazione la segue l'incaricato: emerso, con il lancio a due tempi (R15).

## Osservazioni emerse leggendo le skill e i documenti

Queste osservazioni non sono legate a un passo del test, ma sono emerse applicando le skill.

- G4: Contraddizione. Il documento "Piano delle milestone" non esiste più: è un capitolo del Documento tecnico. Il nome compare ancora nelle Regole comuni (materiali del cliente, variazioni), in `allineamento-documenti`, `demo`, `riprogrammazione`, `piano-di-lancio` e `verifica-preliminare`, che lo citano come fonte o come documento da aggiornare.
- G5: Contraddizione. `verifica-preliminare` e `mockup` nominano ancora "product lead" e "team lead", ruoli che i piani non usano più nello stesso modo (chi analizza, PL, chi gestisce il team).
- G6: Contraddizione. I diagrammi di flusso dei ticket e del progetto, e il Ciclo di sviluppo, non nominano l'incaricato della pubblicazione: dicono ancora "il responsabile" nei passi di pubblicazione. Il Piano dei ticket, il Piano di progetto, le Regole comuni e `collaudo-e-rilascio` sì.
- G7: Contraddizione. Le Regole comuni, i piani e le skill dicono che i documenti sono conservati su Drive. Quando il piano sarà in uso, i documenti generati per i ticket e i progetti di un prodotto andranno in un repository separato chiamato "knowledge base brain". Proposta: sostituire "Drive" con la knowledge base brain dove si parla di dove stanno i documenti, e dire come si organizza per prodotto.
- G8: Buco. Il sistema del cliente non è un solo repository: ne ha di distinti, per esempio uno per il sito pubblico e uno per il gestionale. La voce "Su cosa intervenire" della Scheda di intervento e il Documento tecnico indicano un repository solo. Proposta: indicare sempre il repository per ogni parte da toccare, e fare del Documento tecnico la mappa dei repository del prodotto.

## Registro delle osservazioni

Per ogni osservazione: skill o documento, tipo e correzione proposta. Nessuna è stata corretta: aspettano la decisione di Leonardo. Le correzioni proposte sono indicazioni, non decisioni.

**Percorso 1: ticket**

- **T1.** Ritirata il 2026-10-06. Il cliente su osTicket non sceglie la categoria: era un refuso della base.
- **T2.** `valutazione-richiesta`, Scheda di intervento. Buco. Nessun campo per la scadenza del cliente: l'urgenza non dice "serve entro". Proposta: aggiungere la scadenza del cliente alla valutazione e alla Scheda, e dire che una scadenza vicina fa passare un ticket da tempo perso a normale. Corretta il 2026-10-06: il cliente può indicare una scadenza su osTicket, di rado (ferie, Black Friday, emergenze). Aggiunta a Regole comuni, Piano dei ticket, Piano di progetto, `valutazione-richiesta` e `scheda-di-intervento`.
- **T3.** `verifica-preliminare`, Regole comuni. Contraddizione. Per un conflitto con un progetto sono previste tre opzioni (rinviare, assorbire come variazione, fare comunque se urgente), per una sovrapposizione con uno sviluppo in corso solo il rinvio. Proposta: dare le stesse opzioni a entrambi i casi.
- **T4.** `verifica-preliminare`, Piano dei ticket. Buco. "Da rimandare" non dice chi riprende il ticket e quando. Proposta: indicare nell'esito l'evento che lo riapre (per esempio il rilascio del ramo) e chi lo riesamina.
- **T5.** `valutazione-richiesta`. Manca. Nessun prossimo passo né formato per una richiesta che diventa una variazione. Proposta: aggiungerlo, con rinvio alla skill `variazione`.
- **T6.** `variazione`. Manca. L'avvio non chiede chi ha chiesto la variazione. Proposta: chiederlo e, se non è il referente, indirizzare la comunicazione al referente.
- **T7.** `variazione`, Ciclo di sviluppo. Buco. Non è detto entro quando serve la conferma per entrare nello sprint successivo. Proposta: la comunicazione indica la data di risposta necessaria per il primo sprint utile.
- **T8.** Piano dei ticket. Contraddizione. Un'assistenza la cui risposta è già disponibile in fase 1 può chiudersi con la risposta (fase 1) o passare per Scheda e Resoconto (percorso abbreviato). Proposta: scegliere la prima se non serve un'operazione.
- **T9.** Piano dei ticket, Regole comuni, nessuna skill. Buco. Il pacchetto di garanzia non ha un flusso: responsabile, documenti, sprint, pubblicazione. Proposta: definire una Scheda ridotta, un Resoconto breve, il responsabile del lavoro chiuso o la persona assegnata.
- **T10.** Piano dei ticket, `sprint`. Passaggio. Un ticket in attesa di una risposta del cliente non può entrare nello sprint, e la risposta non ha scadenza. Proposta: dire che si pianificano solo ticket con Scheda completa e che i ticket in attesa non occupano capacità.
- **T11.** `scheda-di-intervento`, `valutazione-richiesta`. Manca. Ogni stima di ticket va validata da chi conosce il lavoro, cioè dal team lead, con 8 ore. Proposta: per un ticket rapido basta la stima del responsabile.
- **T12.** `scheda-di-intervento`, `allineamento-documenti`, `manuale-del-prodotto`. Passaggio. Una story nuova di un ticket non dice a quale funzionalità appartiene. Proposta: chi aggiorna il Manuale la assegna a una funzionalità o ne apre una con il codice successivo.
- **T13.** `allineamento-documenti`, `manuale-del-prodotto`, `documento-tecnico`, Regole comuni. Buco. Due lavori aggiornano lo stesso Manuale e lo stesso Documento tecnico nelle stesse settimane. Proposta: una regola di numerazione e di fusione delle versioni.
- **T14.** `sprint`. Manca. Per uno sprint di soli ticket manca il Documento tecnico con il capitolo Milestone, e la skill non dice come inserire un ticket. Proposta: aggiungere un ramo per i ticket.
- **T15.** Regole comuni, `sprint`. Buco. Il buffer di sprint è il 20% della capacità dello sprint, ma lo sprint è aziendale: del perimetro non si dice nulla. Proposta: dichiarare che è il 20% della capacità di ogni persona.
- **T16.** `sprint`, Ciclo di sviluppo, Regole comuni. Contraddizione. "Il resto si pianifica per intero" e "i ticket a tempo perso entrano con la capacità che avanza". Proposta: i ticket a tempo perso entrano quando si libera capacità durante lo sprint.
- **T17.** Regole comuni, Piano dei ticket, Piano di progetto, `collaudo-e-rilascio`. Buco. Non è scritto chi designa l'incaricato della pubblicazione né con quale criterio. Proposta: lo designa chi gestisce il team, da un elenco con disponibilità e sostituto.
- **T18.** Piano dei ticket, `collaudo-e-rilascio`. Buco. La pubblicazione di un ticket non ha una scheda di rilascio. Proposta: una scheda ridotta, nella Scheda di intervento o a parte.
- **T19.** Piano dei ticket. Buco. Un ticket urgente su un lavoro in garanzia segue il percorso d'urgenza ma è anche un pacchetto di garanzia. Proposta: scrivere che segue il percorso d'urgenza e si registra nel pacchetto.
- **T20.** Piano dei ticket, `sprint`. Buco. Se la stima viene superata il piano dice solo di aggiornarla. Proposta: dire cosa fare se non sta più nello sprint e se il cliente va avvisato.
- **T21.** `allineamento-documenti`, Regole comuni. Contraddizione. Il Manuale è documento del sistema e documento di un lavoro aperto: un ticket lo aggiorna, ma un documento approvato di un lavoro aperto non si modifica in silenzio. Proposta: il divieto vale per le story che appartengono al lavoro aperto.
- **T22.** Piano dei ticket, `collaudo-e-rilascio`. Buco. Non è detto chi dà il via all'invio del Resoconto quando chi pubblica non è chi lo scrive. Proposta: l'incaricato avvisa il responsabile a pubblicazione fatta e verificata, e solo allora si invia il Resoconto.
- **T23.** Piano dei ticket, Regole comuni. Contraddizione. Per un bug su un lavoro in garanzia il piano dice sia "si riapre come urgente" sia "pacchetto di garanzia". Proposta: in garanzia è sempre un pacchetto, con la priorità data dall'urgenza.
- **T24.** Piano dei ticket. Buco. Un ticket a tempo perso che non trova capacità resta in coda per sempre. Proposta: dopo un numero di sprint si chiede al cliente se lo vuole ancora.
- **T25.** `variazione`, `piano-delle-milestone`. Buco. Non è detto come si muove il buffer di milestone quando una story cambia milestone. Proposta: il buffer si ricalcola sul 20% delle ore che la milestone contiene dopo la variazione.

**Percorso 2: progetto**

- **P1.** `valutazione-richiesta`, `stato-di-partenza`. Manca. Nessuna skill raccoglie le scadenze del cliente per un progetto. Proposta: una voce "scadenze e vincoli del cliente" nella valutazione e nello Stato di partenza. In parte corretta il 2026-10-06: la valutazione ora raccoglie la scadenza indicata dal cliente (vedi T2). Restano lo Stato di partenza (P9) e la Proposta (P10).
- **P2.** `valutazione-richiesta`. Manca. La durata si stima in giorni lavorativi ma il cliente paga le ore e la durata dipende dalla squadra. Proposta: stimare le ore, la squadra ipotizzata e la durata che ne deriva.
- **P3.** `valutazione-richiesta`, `piano-delle-milestone`. Buco. La stima iniziale non dice se comprende il buffer. Proposta: stima iniziale senza buffer, e nel Piano dei SAL stima più buffer con la spiegazione della differenza.
- **P4.** Piano di progetto, Ciclo di sviluppo. Buco. Il 10% è di quale stima e di quali persone. Proposta: 10% delle ore stimate, di tutte le persone coinvolte.
- **P5.** Regole comuni, Piano di progetto. Buco. Le ore dei PL non sono nella capacità né nella stima. Proposta: dire se sono lavoro fatturabile e come si contano.
- **P6.** Piano di progetto, `interpretazione-conversazioni`. Buco. Nessuno ha il compito di registrare e trascrivere le conversazioni né dove salvarle. Proposta: lo fa il responsabile, e gli sviluppatori inoltrano al responsabile ciò che il cliente dice loro.
- **P7.** `interpretazione-conversazioni`. Buco. Non c'è regola per le richieste di chi non è referente quando sono in conflitto con quelle del referente. Proposta: sono proposte, da portare al referente.
- **P8.** `stato-di-partenza`, `proposta-di-soluzione`, Regole comuni. Buco. Le differenze fra Manuale e codice "vanno sanate" ma nessuna skill dice chi decide quale dei due vale. Proposta: ogni differenza diventa una domanda al cliente.
- **P9.** `stato-di-partenza`. Manca. La forma per il progetto non ha le scadenze, la forma per il prodotto sì. Proposta: aggiungere la voce.
- **P10.** `proposta-di-soluzione`. Contraddizione. La Proposta non ammette date e la scadenza del cliente è la ragione del progetto. Il cliente scopre la fattibilità solo dal Piano dei SAL, dopo il Manuale e il Documento tecnico. Proposta: ammettere la scadenza del cliente e un giudizio orientativo di fattibilità, senza date di consegna.
- **P11.** `proposta-di-soluzione`. Buco. Vedi R4.
- **P12 e P15.** Piano di progetto, Regole comuni. Buco. La correzione di una difformità fra Manuale e codice decisa dal cliente non ha un posto: non è nella richiesta, non è variazione, non è ticket. Proposta: una issue di tipo bug nel progetto, con la story del Manuale.
- **P13.** `proposta-di-soluzione`, `manuale-del-prodotto`. Passaggio. Documenti con versioni vicine nello stesso lavoro. Proposta: nei riepiloghi scritti nominare sempre documento e versione.
- **P14.** `manuale-del-prodotto`. Contraddizione. "La versione confermata è la v1.0" non vale per un sistema con un Manuale già esistente. Proposta: la prima versione confermata di un Manuale nuovo è v1.0, altrimenti la versione successiva a quella corrente.
- **P16.** `sprint`. Contraddizione. Si dichiara lo sprint di supporto "perché il cliente saprà che non vedrà story nuove", ma lo Sprint report è interno. Proposta: togliere la frase, o dire dove lo si comunica.
- **P17.** `sprint`, Piano di progetto. Buco. La documentazione finisce a metà sprint e i giorni fino all'inizio dello sprint successivo non sono usati. Proposta: permettere di iniziare a metà sprint con capacità ridotta.
- **P18.** `piano-delle-milestone`, Ciclo di sviluppo. Buco. "Da 4 a 8 settimane" non dice se di calendario o di lavoro. Proposta: settimane di lavoro.
- **P19.** `piano-delle-milestone`, `sprint`. Buco. La data prevista della demo cade a metà sprint, mentre il controllo della milestone si fa a fine sprint. Proposta: ricontrollare anche a metà sprint se la demo è entro 5 giorni.
- **P20.** Piano di progetto, Ciclo di sviluppo. Buco. Un progetto toglie capacità ai ticket, ma "un ticket non toglie nessuno a un progetto" non dice il contrario. Proposta: fissare una capacità minima per i ticket.
- **P21.** Ciclo di sviluppo. Buco. Nessuna istruzione per lo sviluppatore a cui il cliente chiede qualcosa direttamente. Proposta: non accetta, risponde che la richiesta passa dal responsabile e gliela inoltra.
- **P22.** `sprint`. Buco. Residui di capacità troppo piccoli per ogni issue. Proposta: dire che si anticipa un'issue o si lascia il residuo.
- **P23.** `variazione`. Manca. Non dice quale buffer paga una variazione piccola quando quello della sua milestone è consumato. Proposta: il buffer della milestone in cui il lavoro viene eseguito.
- **P24.** `demo`, `milestone-report`. Passaggio. Entrambe producono l'esito della demo di una milestone. Proposta: `demo` produce l'esito, `milestone-report` lo include e non lo riscrive.
- **P25.** `sprint`, `milestone-report`. Passaggio. Sprint report e Milestone report ripetono voci. Proposta: il Milestone report parte dagli Sprint report.
- **P26.** Piano di progetto, Ciclo di sviluppo. Buco. Un cliente che non accetta una demo lascia la milestone "consegnata" senza limite e senza escalation. Proposta: sollecito scritto e poi coinvolgimento di chi gestisce il team o del CEO.
- **P27 e P28.** Piano di progetto, `collaudo-e-rilascio`. Buco. Il piano prevede un solo rilascio a fine progetto; per la fiera ne serve uno parziale. Proposta: aggiungere il rilascio per milestone al piano e alla skill, con l'accettazione esplicita.
- **P29.** Regole comuni. Buco. La formula della garanzia non dice quale durata pianificata si usa per una parte pubblicata prima. Proposta: la durata pianificata delle milestone pubblicate.
- **P30.** `variazione`. Contraddizione. Il primo criterio ("cambia ciò che la proposta ha stabilito") rende grande qualsiasi richiesta che contraddice una riga della proposta, anche di tre ore. Proposta: il primo criterio vale per cambiamenti di obiettivo o di ambito, non per una modifica di dettaglio di una story.

**Percorso 3: prodotto**

- **R1.** `verifica-preliminare`. Manca. Non dice che per un prodotto la parte B si salta. Proposta: scriverlo.
- **R2.** Piano di prodotto, `valutazione-richiesta`. Buco. Nessuna verifica della capacità dell'azienda prima di promettere una durata. Proposta: un controllo di capacità alla valutazione, con le persone disponibili e le date.
- **R3.** Piano di prodotto. Contraddizione. Qualifica e analisi del contesto separate e senza il limite del 10%. Proposta: un solo kickoff con il 10%.
- **R4.** `proposta-di-soluzione`. Buco. Con molte story e la divisione in release, 5 pagine sono al limite. Proposta: per un prodotto l'allegato delle story può essere un documento a parte non contato.
- **R5.** Piano di prodotto. Buco. Il cliente conferma la divisione in release nella fase 4, il piano la colloca nella fase 5. Proposta: fondere le fasi 4 e 5 come nel progetto.
- **R6.** Piano di prodotto. Contraddizione. Conferma per iscritto contro conferma a voce con riepilogo scritto.
- **R7.** Piano di prodotto, `mockup`. Buco. La fase di prototipo e design non ha tempo né capacità: la grafica ha 8 ore a settimana. Proposta: stimare il design e dire quando può cominciare lo sviluppo.
- **R8.** Piano di prodotto. Contraddizione. "Il prototipo rivela una richiesta nuova: variazione grande" contro la regola per cui prima della conferma del Manuale è una modifica.
- **R9.** Piano di prodotto. Contraddizione. La fase 7 si chiude con approvazione economica e approvazione scritta del Piano dei SAL: le Regole comuni e il Piano di progetto le tolgono.
- **R10.** Piano di prodotto. Contraddizione. Lo spike per un sistema esterno senza documentazione va nelle fondamenta, anche se il sistema è in una release successiva.
- **R11.** `piano-delle-milestone`, Piano di prodotto. Passaggio. Non dicono cosa si pianifica per le release successive alla prima.
- **R12.** `piano-di-lancio`. Contraddizione. Propone la garanzia a 60 giorni, le Regole comuni usano la formula.
- **R13.** `collaudo-e-rilascio`, Piano di prodotto. Buco. Il collaudo finale e la scheda di rilascio di un prodotto non hanno una skill dichiarata.
- **R14.** `piano-delle-milestone`, `piano-di-lancio`. Buco. Il caricamento dei dati iniziali non ha una issue. Proposta: farlo comparire nel capitolo Milestone.
- **R15.** Piano di prodotto, `piano-di-lancio`. Buco. La garanzia decorre dalla messa in produzione: nel lancio graduale non è detto da quale delle due.
- **R16.** Piano di prodotto. Contraddizione. Richiama documenti e regole che ora sono altrove (Piano delle milestone, imprevisti nelle Regole comuni, indagine sull'esistente, prototipo e mockup obbligatori).

**Osservazioni generali**

- **G1.** `sprint`, `riprogrammazione`. Contraddizione. "Ore rimanenti, buffer compreso, contro la capacità" si legge in tre modi, con esiti diversi per gli stessi numeri. Proposta: dire che le ore rimanenti sono quelle rivalutate dal team, che il buffer non è capacità in più perché la data lo contiene, e che "a rischio" significa buffer rimasto inferiore a una soglia.
- **G2.** `riprogrammazione`. Contraddizione. Per una milestone a rischio il cliente si avvisa solo se lo decide il responsabile, ma se una data già comunicata cambia si avvisa. Proposta: la seconda regola prevale.
- **G3.** `riprogrammazione`, Ciclo di sviluppo. Contraddizione. Chi decide di aggiungere ore: "la direzione" o "internamente"? Proposta: chi gestisce il team, con il CEO se serve.
- **G4, G5, G6.** Vedi sopra. Proposte: sostituire "Piano delle milestone" con "capitolo Milestone del Documento tecnico"; rendere impersonali i ruoli; aggiornare diagrammi e Ciclo di sviluppo con l'incaricato della pubblicazione.

## Cosa non ha retto, in sintesi

- Le contraddizioni più pesanti sono quelle fra il Piano di prodotto e gli altri documenti (R3, R6, R8, R9, R10, R12, R16): si risolvono riallineando il Piano di prodotto.
- Le lacune più pesanti nel flusso dei ticket sono il pacchetto di garanzia (T9, T19, T23) e la pubblicazione (T17, T18, T22).
- Le lacune più pesanti nel flusso del progetto sono le scadenze del cliente (P1, P9, P10), il rilascio parziale (P27 e P28) e il controllo della milestone (G1, G2).
- Le skill che hanno retto meglio sono `interpretazione-conversazioni`, `scheda-di-intervento` e `resoconto-di-intervento`: hanno prodotto ciò che serviva alla skill successiva senza richiedere informazioni inventate.
