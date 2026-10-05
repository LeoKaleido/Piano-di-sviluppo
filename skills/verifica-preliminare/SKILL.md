---
name: verifica-preliminare
description: Verifica se una richiesta appena arrivata va davvero lavorata, confrontandola con i lavori già aperti (progetti, ticket, variazioni, consegne in garanzia) e con il codice del sistema. Usala su ogni ticket prima di classificarlo e stimarlo, e ogni volta che c'è il dubbio che una richiesta sia già compresa in un altro lavoro o che il sistema la faccia già.
---

# Verifica preliminare

## A cosa serve

Una richiesta non va valutata da sola. Prima di classificarla e stimarla bisogna sapere due cose:

- **se quel lavoro esiste già altrove**: dentro un progetto in corso, in un altro ticket, in una variazione già registrata, in una consegna ancora in garanzia;
- **se va davvero fatto**: il codice può mostrare che il sistema lo fa già, che basta una configurazione, o che l'intervento è molto più grande di come appare.

Senza questa verifica capita di stimare e far confermare al cliente un lavoro che è già compreso in un progetto, di correggere una parte che un progetto sta per rifare, o di promettere in due giorni un intervento che tocca mezzo sistema.

La verifica propone un esito. Le decisioni restano al product lead.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **La richiesta.** Il testo del ticket, oppure dove si trova.
2. **Cliente e sistema.**
3. **Dove sono i lavori aperti.** I documenti sono su Drive: chiedi in quale cartella si trovano quelli del cliente e del sistema. Servono i Piani delle milestone dei progetti in corso, le Schede di intervento dei ticket aperti, il Registro delle modifiche, i verbali delle ultime demo. Se hai accesso a Drive cerca tu a partire da quella cartella, altrimenti chiedi che vengano forniti.
4. **Dove si trova il codice.** Il repository del sistema, e se puoi accedervi.

Se la richiesta è un ticket bloccante (sistema fermo, utenti che non possono lavorare, dati a rischio), la verifica non deve ritardare l'intervento: si interviene subito e la verifica si fa in parallelo o dopo. Dillo e fermati.

## Tempo

La verifica ha un tempo limitato, proporzionato alla richiesta e deciso dal product lead. Non è l'indagine di un progetto: deve rispondere a due domande, non descrivere il sistema. Se allo scadere del tempo una domanda resta aperta, lo dichiari e indichi cosa servirebbe per chiuderla.

## Parte A: confronto con i lavori aperti

Cerca la richiesta in ciò che è già in corso sullo stesso sistema.

- **Progetti in corso.** Nel Manuale del prodotto e nel Piano delle milestone: esiste una story o una issue che copre la richiesta, in tutto o in parte? Il progetto prevede di modificare la stessa parte?
- **Ticket aperti.** Nelle Schede di intervento: qualcuno ha già chiesto la stessa cosa, o un intervento sulla stessa parte?
- **Variazioni.** Nel Registro delle modifiche: la richiesta è già stata registrata, approvata o rifiutata?
- **Consegne recenti.** Nei verbali di accettazione e nelle schede chiuse: la parte coinvolta è stata consegnata da poco ed è ancora in garanzia?

Leggi i documenti per intero. Una ricerca per parole chiave non basta: il cliente chiama le cose in modo diverso dai documenti.

### Esiti della parte A

- **Già compresa in un progetto.** Una story la copre. Non si apre lavoro: al cliente si risponde con la story e la data del SAL in cui arriverà.
- **Compresa, ma serve prima.** La story esiste ma il cliente la vuole in anticipo. È un cambio di priorità: una variazione media sul progetto.
- **Compresa in parte.** Il progetto copre una parte della richiesta. Va detto quale parte resta fuori: solo quella può diventare un ticket.
- **In conflitto con un progetto.** Il progetto sta per rifare quella parte, oppure il ticket cambia qualcosa su cui il progetto si appoggia. Farla ora sarebbe lavoro da rifare, o romperebbe il progetto. Le opzioni sono tre: rinviarla, assorbirla nel progetto come variazione, farla comunque perché urgente.
- **Doppione di un ticket aperto.** Si unisce a quello.
- **Già decisa.** Una variazione identica è stata rifiutata o è in attesa del cliente: si rimanda a quella.
- **Difetto di una consegna recente.** Non è un ticket nuovo: è un bug in garanzia, o un difetto della milestone.
- **Nessuna sovrapposizione.**

## Parte B: verifica nel codice

Guarda il codice della parte coinvolta, in sola lettura. La verifica non modifica nulla: niente correzioni, niente commit, nemmeno se la correzione sembra banale.

Se hai accesso al repository, cercala tu. Se non ce l'hai, questa parte la fa il team lead o uno sviluppatore: prepara per lui le domande precise a cui deve rispondere, e riporta le risposte come "Riferito".

Cosa cercare:

- **Il comportamento attuale.** Cosa fa davvero il sistema in quel punto, confrontato con ciò che descrive il cliente.
- **Se il sistema lo fa già.** La funzione chiesta può esistere ed essere sconosciuta al cliente, nascosta da un permesso, o disattivata da una configurazione.
- **Per un bug: se si riproduce e dove nasce.** La causa può essere nel codice, nei dati, in una configurazione o in un sistema esterno.
- **Quanto è esteso l'intervento.** Quali file e quali parti tocca, e chi altro usa quel codice: altre schermate, altre funzioni, integrazioni, dati condivisi.
- **Sviluppi non rilasciati.** Rami o modifiche in corso che toccano la stessa parte, anche se non compaiono nei documenti.
- **Lo stato del codice.** Test presenti o assenti, parti fragili: incidono sulla stima.

### Esiti della parte B

- **Il sistema lo fa già.** Non serve sviluppo: è una risposta di assistenza, con le istruzioni per il cliente.
- **Basta una configurazione.** L'intervento non cambia il codice.
- **Bug confermato.** Si riproduce e la causa è individuata, con il punto del codice.
- **Bug non riprodotto.** Servono altre informazioni dal cliente: quali, in domande puntuali.
- **La causa è fuori dal codice.** Dati, configurazione o sistema esterno: l'intervento è diverso da quello chiesto.
- **Intervento come appare.** L'estensione corrisponde alla richiesta.
- **Intervento più esteso di come appare.** Tocca più parti o codice usato altrove. La taglia può cambiare: se supera le 2 settimane o richiede più di una persona, è un progetto.
- **Sovrapposizione con uno sviluppo in corso.** Un'altra modifica sta toccando la stessa parte.

## Grado di certezza

Ogni affermazione porta il suo grado di certezza:

- **Verificato**: visto nel codice, nel sistema in uso o in un documento approvato.
- **Riferito**: raccontato da qualcuno, non controllato.
- **Supposto**: dedotto, da confermare.

Non presentare come verificato ciò che non lo è. Una parte non eseguita va dichiarata: "Parte B non eseguita: codice non accessibile".

## Cosa restituisci

Una nota interna, breve, in risposta e non come file, salvo richiesta diversa.

- **Esito in una frase.** Va lavorata, non va lavorata, va lavorata in altro modo.
- **Parte A.** L'esito, con il riferimento preciso: lavoro, documento, codice della story o della issue, data prevista.
- **Parte B.** L'esito, con il riferimento preciso: file e punti del codice, cosa è stato osservato.
- **Effetto sulla classificazione.** Come cambiano taglia, tipo e stima rispetto a ciò che la richiesta farebbe pensare.
- **Decisioni per il product lead.** Solo se servono, con le opzioni.
- **Domande per il cliente.** Numerate, a risposta breve.
- **Cosa non è stato verificato**, e cosa servirebbe per farlo.
- **Prossimo passo.** Uno fra: valutazione della richiesta e schede del ticket (Scheda di intervento e Scheda di sviluppo); risposta al cliente senza aprire lavoro; variazione sul progetto; unione con un altro ticket; riclassificazione come progetto.

Quando l'esito è che non si apre lavoro, oppure che la richiesta è già compresa in un progetto, aggiungi il **testo della risposta al cliente**: cosa è stato trovato, dove e quando lo riceverà, cosa può fare se gli serve prima. Per il cliente niente tecnologie, niente nomi di file, niente ore.

## Regole

- **Sola lettura.** Né il codice né i documenti degli altri lavori vengono modificati.
- **Riferimenti precisi.** "È già previsto nel progetto" non basta: serve il codice della story e la data.
- **Nessuna soluzione.** La verifica dice cosa c'è e cosa manca. Come intervenire lo diranno la Scheda di sviluppo e la Scheda di intervento, o la proposta.
- **Nessuna decisione al posto del product lead.** Davanti a un conflitto presenta le opzioni con le conseguenze di ciascuna.

## Regole di scrittura

{{SCRITTURA}}

Nella nota interna i nomi di file e di parti del codice si scrivono come sono.

## Controllo finale

1. Entrambe le parti hanno un esito, oppure è dichiarato perché una non è stata eseguita.
2. Ogni esito ha un riferimento preciso e un grado di certezza.
3. Nulla è stato modificato, nel codice o nei documenti.
4. La risposta al cliente, se presente, non contiene tecnologie, nomi di file o ore.
5. {{CONTROLLO}}
