# Analisi, ticket 2 (urgenza sul pagamento), esecuzione 1

Scenario: `../scenario.md`. Prova: `esecuzione-1`, eseguita il 2026-10-06. Nessuna prova precedente. Fonti lette: base comune, scenario, Piano dei ticket, Regole comuni, Ciclo di sviluppo, guide della giornata, le skill `kickoff-ticket`, `scheda-di-intervento`, `pacchetto-di-garanzia`, `revisione-codice`, `resoconto-di-intervento`, `allineamento-documenti`, `interpretazione-conversazioni`, `storico-lavorazione`, `registro-decisioni`, e tutti i file dell'esecuzione.

## 1. Sintesi

Il piano ha retto sul punto centrale: urgenza assegnata per prima sui fatti, persona scelta per conoscenza del modulo, interruzione decisa in un solo punto, issue in pausa riportata a PLANNED, ore sul ticket e sul buffer di sprint, nessun avviso al cliente del comparatore, revisione dopo la pubblicazione, scheda a posteriori, aggiornamento dei documenti dopo la chiusura. Tutti i controlli dello scenario sono emersi, alcuni in parte.

Dove non regge: la combinazione di ticket urgente e lavoro ancora in garanzia (due garanzie sovrapposte, due tracciati di registrazione), la chiusura del ticket urgente (il piano dà due condizioni diverse), il task ClickUp di un urgente (nessuno lo crea in tempo) e il peso: per un guasto da 4,5 ore sono stati prodotti undici documenti, di cui nessuno letto da una skill successiva tranne la scheda e il Documento tecnico.

Sulla qualità dell'esecuzione: ci sono errori di chi ha recitato che non vanno corretti nei piani (resoconto che spiega la causa, forma personale, Documento tecnico nel posto sbagliato, nessun avviso per la stima superata). Sono marcati Esecuzione.

Il test non ha trovato errori di numeri: le garanzie (26 ottobre per il pagamento, 4 novembre per il ticket), il buffer (6 ore dello sviluppatore 2 su 30) e il margine sono corretti. Resta un limite della base (T2-9).

## 2. Controlli dello scenario

**Cosa deve emergere**

- Urgenza assegnata per prima sui fatti: emersa (diario, 9:50).
- Percorso d'urgenza, persona che conosce meglio la parte, anche se su un progetto: emersa. Chi decide l'interruzione è chi gestisce il team (DEC1): emersa in parte, perché il piano non dice chi (vedi T2-12).
- Issue in pausa riportata a PLANNED, ore sul ticket: emersa.
- Capacità: prima il buffer di sprint, e chi decide se lo supera: emersa in parte. Il buffer è rispettato, ma il diario non dice chi decide oltre il buffer.
- Cliente del comparatore non avvisato salvo data che cambia: emersa.
- Garanzia: il 105 è anche pacchetto di garanzia, con ore tracciate, etichetta e codice della lavorazione originale: emersa in parte (il codice originale manca nella base, T2-3).
- Causa esterna da annotare per il Report di progetto della lavorazione originale: emersa in parte. È citata nella scheda, ma non scritta nello storico della lavorazione originale, che non esiste nella base.
- Correzione pubblicata dall'incaricato, non dal responsabile: emersa.
- Revisione comunque, anche dopo; il team lead dice cosa non ha controllato: emersa.
- Test automatico con dato finto segnalato, con issue o correzione: emersa.
- Scheda a posteriori con quattro voci; issue per rimuovere la causa se provvisoria: emersa.
- Verifica preliminare saltata eseguita dopo, con lavori e documenti toccati (100, 101): emersa.
- Resoconto breve; ticket chiuso alla pubblicazione con garanzia da lì: emersa in parte. Il ticket è stato chiuso all'invio del resoconto, 1 ora e 45 minuti dopo la pubblicazione (T2-4).
- Aggiornamento dei documenti dopo la chiusura: emersa.

**Eventi**

- 1, Franco chiama lo sviluppatore 2: emerso in parte. Lo sviluppatore non accetta nulla di nuovo, ma non risponde "passa dal canale previsto" e dà un'indicazione di tempo informale ("prima del primo pomeriggio spero"), che per un ticket va contro la regola di non dichiarare una data (T2-5, T2-7).
- 2, funzione condivisa con il comparatore: emerso (DEC2).
- 3, conferma a voce di Marta: emerso. Registrata nello storico senza valore.
- 4, secondo cambio di formato: emerso. Ticket 110, il 105 non si tocca (DEC4).
- 5, nuova segnalazione del 21 ottobre: emerso. Sviluppatore 3 per ferie dello sviluppatore 2. La variante `MASTERCARD_DEBIT` è un'assunzione dell'esecuzione (T2-13).

**Cosa non deve succedere**

- Attesa della verifica o della scheda: non successo.
- Issue lasciata IN PROGRESS: non successo.
- Ore sul progetto del comparatore: non successo.
- Cliente del comparatore informato: non successo.
- Aggiornamento dei documenti prima della pubblicazione: non successo.
- Due lavorazioni per lo stesso problema: successo in parte. Il 21 ottobre nasce un secondo task (105-G1) accanto al 105, e il 15 ottobre un ticket 110 per la causa. Sono giustificati, ma il rischio c'è (T2-2).

## 3. Documenti

**Prodotti e attesi:** `storico.md`, `decisioni.md`, Scheda di intervento a posteriori in `01-analisi`, Resoconto di intervento in `03-rilascio/01-resoconto`, risposta al cliente in `04-garanzia`, commento della revisione (nel diario).

**Mancante:** la nota di `03-rilascio/03-aggiornamento-documenti`. Non è un errore dell'esecuzione: la skill `allineamento-documenti` dice che il rapporto non si salva e il Piano dei ticket per quella sottofase prevede solo "i documenti aggiornati". È un errore dello scenario (T2-6).

**In più:**

- due trascrizioni e due sintesi di telefonate (`02-sviluppo`, `03-rilascio/02-pubblicazione`);
- il resoconto di garanzia (`04-garanzia`);
- il Documento tecnico v1.3 (`105/sistema/`).

**Fuori posto:** il Documento tecnico sta in `105/sistema/`, mentre le Regole comuni mettono i documenti del sistema in una cartella propria, fuori dalla lavorazione. Il file si chiama "del pagamento": per le Regole un sistema ha un solo Documento tecnico (T2-14).

**Non aggiornato:** il 21 ottobre la correzione cambia la regola delle sigle accettate, ma il Documento tecnico non è aggiornato e lo storico non lo registra. Il diario dice che si sarebbe fatto (versione 1.3.1) ma non c'è il file (T2-15).

## 4. Osservazioni

Ordinate per gravità. Il tipo "Esecuzione" non genera correzioni ai piani.

**Gravità alta**

- **T2-2, Contraddizione e Base.** Dove si registra un guasto su un lavoro ancora in garanzia che arriva come ticket nuovo.
  - Dove: Regole comuni (sezione Bug, ambiguità e garanzia), Piano dei ticket (Garanzia), skill `pacchetto-di-garanzia`, scenario.
  - Cosa è successo: le Regole dicono che il pacchetto di garanzia "non apre una nuova lavorazione" e "prosegue nella stessa richiesta aperta nel sistema di ticketing che l'ha originata". Lo scenario apre il ticket 105 come richiesta nuova. La skill chiede di registrare ogni voce sulla lavorazione originale; l'esecuzione ha registrato sul 105. Il 21 ottobre due garanzie coprono il caso (pagamento fino al 26 ottobre, ticket 105 fino al 4 novembre) e nessuna regola dice quale usare.
  - Correzione proposta: stabilire che una richiesta su un lavoro in garanzia, anche se arriva come nuova richiesta su osTicket, è un pacchetto di garanzia sul lavoro originale e il suo codice è quello originale (osTicket la collega). Per un ticket urgente sul pagamento i documenti vanno in `04-garanzia` della lavorazione originale. Lo scenario va riscritto di conseguenza: la base deve dare il codice originale.
  - Gravità: alta, fa sbagliare chi applica il piano.
- **T2-4, Contraddizione.** Quando si chiude un ticket urgente.
  - Dove: Piano dei ticket (sottofase 3.2 e percorso d'urgenza), Regole comuni.
  - Cosa è successo: la sottofase 3.2 dice "si chiude quando il lavoro è in produzione e il resoconto è inviato". Il percorso d'urgenza dice che il ticket si chiude alla pubblicazione e che il resoconto si scrive dopo (passo 7). L'esecuzione ha chiuso all'invio del resoconto, 17:30, mentre la pubblicazione era alle 15:45. Da quando decorre la garanzia: dal 14 ottobre in entrambi i casi, ma il ticket è rimasto aperto quasi due ore.
  - Correzione proposta: per l'urgenza, chiusura alla pubblicazione verificata e resoconto inviato subito dopo, senza condizione per la chiusura.
  - Gravità: alta.
- **T2-1, Buco.** Il task ClickUp di un ticket urgente non ha un proprietario.
  - Dove: skill `scheda-di-intervento` (crea il task "a scheda completa"), Piano dei ticket (analisi).
  - Cosa è successo: per un urgente la scheda si scrive dopo, ma il task serve da subito per stati e ore tracciate. L'esecuzione lo ha creato a mano all'inizio, senza regola.
  - Correzione proposta: per un urgente il task lo crea chi analizza appena assegna l'urgenza, con campi minimi (tipo, urgenza, responsabile) e la DoD base. La scheda a posteriori lo completa.
  - Gravità: alta, perché senza task le ore non si tracciano.

**Gravità media**

- **T2-9, Base.** Il margine di SAL2 non si può calcolare dai dati della base.
  - Dove: base comune (progetto comparatore).
  - Cosa è successo: la base dà "24 ore di buffer rimaste", non capacità rimanente e ore rimanenti. L'esecuzione ha assunto che il margine sia 24 ore, cioè esattamente metà del buffer iniziale (in linea per un soffio, "almeno metà"). Il risultato dipende dal confine.
  - Correzione proposta: dare nella base capacità rimanente (ore disponibili fino al 30 ottobre) e ore rimanenti.
  - Gravità: media.
- **T2-12, Buco.** Chi decide l'interruzione di un progetto per un urgente.
  - Dove: Piano dei ticket (percorso d'urgenza passo 1), Ciclo di sviluppo (ticket urgenti).
  - Cosa è successo: i piani dicono "l'interruzione si decide in un solo punto" ma non dicono chi. L'esecuzione ha scelto chi gestisce il team su proposta di chi analizza.
  - Correzione proposta: nominare chi gestisce il team (con il responsabile del progetto avvisato subito, non consultato).
  - Gravità: media.
- **T2-8, Passaggio.** La scheda a posteriori non dà al resoconto ciò che la skill `resoconto-di-intervento` chiede.
  - Dove: skill `scheda-di-intervento` (scheda a posteriori), skill `resoconto-di-intervento` (Avvio 3, "story di riferimento e condizioni di fine lavoro").
  - Cosa è successo: la scheda a posteriori ha quattro voci (cosa è successo, causa, correzione, su cosa si è intervenuti) e nessuna story né DoD. Il resoconto ha dovuto ricavare la story del bug ("pagare con Mastercard") senza un codice, perché il Manuale F4 non è dettagliato nella base. Inoltre le decisioni dell'analisi che la scheda a posteriori dovrebbe portare in testa vengono da `kickoff-ticket`, che per un urgente si esegue dopo: l'ordine non è scritto.
  - Correzione proposta: aggiungere alla scheda a posteriori la story violata e il comportamento atteso, e dire che le decisioni in testa si completano quando la verifica è fatta.
  - Gravità: media.
- **T2-17, Peso, Superfluo.** Lo storico e il Registro delle decisioni di un ticket non servono a nessuna skill successiva.
  - Dove: Piano dei ticket (Storico e decisioni), skill `storico-lavorazione`, `registro-decisioni`, `report-di-progetto`.
  - Cosa è successo: le skill dicono che servono per il Report di progetto, ma "un ticket non ha un Report di progetto". Qui sono stati scritti dieci eventi e cinque decisioni per 4,5 ore di lavoro, e nessun passo successivo li ha letti.
  - Correzione proposta: per un ticket, facoltativi e solo per ciò che il cliente o il team ritroverebbe davvero (una riga nello storico, nessun registro delle decisioni salvo una decisione che cambia un altro lavoro).
  - Gravità: media.
- **T2-10 e T2-5, Peso.** Documenti prodotti per un guasto di una riga di configurazione.
  - Dove: Piano dei ticket, skill `interpretazione-conversazioni`, skill `resoconto-di-intervento`, skill `pacchetto-di-garanzia`.
  - Cosa è successo: undici documenti più il diario. Due sintesi di telefonate senza decisioni né conferme. Tre testi al cliente in sette giorni (resoconto, risposta di garanzia, resoconto di garanzia). Una scheda a posteriori con verifica preliminare dentro.
  - Correzione proposta: vedi la sezione 5.
  - Gravità: media. È ciò che la tua richiesta chiedeva di cercare.
- **T2-6, Base.** Lo scenario si aspetta una nota di aggiornamento dei documenti.
  - Dove: scenario (Documenti attesi).
  - Cosa è successo: la skill dice che il rapporto non si salva e il piano prevede solo "i documenti aggiornati".
  - Correzione proposta: correggere lo scenario: la sottofase produce il Documento tecnico aggiornato, nessuna nota.
  - Gravità: media, ma solo dello scenario.
- **T2-7, Buco.** Il contatto diretto del cliente con il responsabile di un ticket.
  - Dove: Regole comuni (Contatti con il cliente), guida dello sviluppatore, scenario (evento 1).
  - Cosa è successo: la regola è "le richieste passano dal responsabile, mai da altri canali". Per un ticket il responsabile è lo sviluppatore, quindi Franco non ha sbagliato canale. Lo scenario si aspetta che lo sviluppatore risponda "passa dal canale previsto", cosa impossibile da dire.
  - Correzione proposta: dire cosa deve fare lo sviluppatore quando il cliente lo contatta per un'urgenza: rimandare a chi analizza per le richieste nuove e non dare date. Correggere lo scenario.
  - Gravità: media.
- **T2-18, Contraddizione.** La forma impersonale per i testi al cliente.
  - Dove: regole di scrittura di tutte le skill ("niente io, noi, tu, lei, voi"), skill `resoconto-di-intervento` ("testo da incollare nel ticket").
  - Cosa è successo: un messaggio a Marta con il suo nome e senza "noi" o "tu" suona innaturale. L'esecuzione ha scritto in forma personale ("abbiamo ricevuto la tua segnalazione", "segnalacelo"), violando la regola alla lettera.
  - Correzione proposta: decidere se la regola vale anche per le risposte nel ticket. Se sì, mostrarne un esempio nella skill; se no, escluderle.
  - Gravità: media. È la regola che l'esecuzione ha violato più spesso.
- **T2-14 e T2-15, Esecuzione.** Documenti del sistema trattati come documenti della lavorazione.
  - Il Documento tecnico sta in `105/sistema/` con un nome "del pagamento". Il 21 ottobre non è aggiornato né registrato nello storico, nonostante il diario.
  - Nessuna correzione ai piani. Una correzione alla prova successiva: usare la cartella `sistema/` fuori dalla lavorazione.
  - Gravità: media.
- **T2-19, Esecuzione.** Il resoconto spiega la causa.
  - La skill dice, per un bug, "cosa non funzionava e cosa funziona ora, con la story violata. Non si spiega la causa". Il resoconto del 14 ottobre apre con "il servizio che gestisce i pagamenti ha cambiato il modo in cui indica questo circuito" e il resoconto di garanzia parla di "varianti con cui il servizio di pagamento indica la Mastercard". Inoltre il resoconto ha una voce "Cosa non è stato fatto" che la skill prevede solo se qualcosa di chiesto resta fuori.
  - Gravità: media. Nessuna correzione ai piani.
- **T2-20, Esecuzione.** Stima superata senza avviso.
  - La stima del team lead è 1,5 ore, il reale 3,5 per lo sviluppatore 2. Il Piano dice che il responsabile avvisa chi ha analizzato, che aggiorna la stima. Non è stato fatto e la scheda a posteriori riporta le due cifre senza una spiegazione.
  - Gravità: media.
- **T2-21, Esecuzione.** Aggiornamento dei documenti incompleto.
  - Il diario cita il Manuale, il Documento tecnico e la Guida. Il Documento tecnico del comparatore (lavorazione 100), che usa la funzione modificata, non è stato controllato. Per la regola sui documenti approvati per un lavoro aperto andava almeno dichiarato come "non toccato" o "da verificare con il project manager 1".
  - Gravità: media.

**Gravità bassa**

- **T2-22, Buco.** La skill `pacchetto-di-garanzia` chiede di mostrare le issue al responsabile e crearle solo dopo la sua conferma. Con un urgente non c'è il tempo: la regola va resa facoltativa o preapprovata per l'urgenza.
- **T2-11, Buco.** Un test automatico che passa con un dato finto è un difetto del lavoro originale. Nessuna regola dice dove segnalarlo né se conta come causa "test mancante" nel Report del lavoro originale.
- **T2-23, Esecuzione.** Capacità: il diario somma le ore di tre persone (sviluppatore 2, team lead, sistemista) contro il buffer dello sviluppatore 2. Il buffer è per persona, e le ore del sistemista non fanno parte della sua capacità.
- **T2-24, Esecuzione.** Incoerenze interne: lo storico dice "verificata con un pagamento reale di Marta" alla pubblicazione, mentre il diario dice che la verifica alle 15:45 fu un ordine di prova e l'ordine reale fu alle 16:00. DEC3 dice che decide "chi analizza, con il team lead", il diario dice "Leonardo, chi gestisce il team e team lead". Lo storico usa "ingresso", "sviluppo", "rilascio" invece dei nomi delle cartelle di fase.
- **T2-13, Base e Esecuzione.** Fatti inventati dall'esecuzione, contro la regola 2 della base: fermo di circa 8 ore (9:40 e 15:45), messaggio "errore generico" nel Documento tecnico come comportamento del servizio che non risponde, variante `MASTERCARD_DEBIT`. Nessuno è nello scenario. Lo scenario dovrebbe darli.
- **T2-3, Base.** Mancano il codice e il tipo (progetto o ticket) della lavorazione originale del pagamento e cosa dice il Manuale F4 sui circuiti. Senza questi, la List "Garanzia", l'etichetta e il Report di progetto non si possono compilare.

## 5. Peso della procedura

Per un guasto da 4,5 ore sono stati prodotti: scheda a posteriori (con verifica preliminare), resoconto, risposta di garanzia, resoconto di garanzia, due trascrizioni, due sintesi, storico, registro delle decisioni, Documento tecnico. Il costo delle scritture in un ticket urgente si somma al fermo del sistema, che il piano vuole breve.

Quali documenti sono stati letti da una skill successiva: la scheda a posteriori (lo sviluppatore 3 la ha usata il 21 ottobre, ed è stato il suo valore maggiore) e il Documento tecnico. Gli altri o sono per il cliente (resoconti e risposta) o non li ha letti nessuno (sintesi, trascrizioni, storico, decisioni).

Proposte di eliminazione o fusione, in ordine di risparmio:

- **Sintesi di conversazione.** Per una telefonata senza decisioni né conferme basta una riga nello storico. La skill `interpretazione-conversazioni` dovrebbe dire quando non serve produrre la sintesi, e produrre le tre parti solo quando ce n'è motivo.
- **Storico e decisioni di un ticket.** Facoltativi, come in T2-17.
- **Testi al cliente in garanzia.** Un solo messaggio per pacchetto: risposta di presa in carico e, a pubblicazione fatta, un'unica riga di chiusura. Il resoconto di garanzia si fonde con la risposta.
- **Verifica preliminare saltata.** Dentro la scheda a posteriori, come qui, e non come un documento a parte: va bene. Si può chiarire nel piano.
- **Scheda a posteriori.** Va tenuta: è l'unico documento che ha avuto un lettore.

## 6. Confronto con la prova precedente

Non esiste una prova precedente di questo scenario.

## 7. Decisioni per Leonardo

1. **Ticket urgente su un lavoro in garanzia (T2-2).** Opzioni: (a) è sempre un pacchetto di garanzia sul lavoro originale, il 105 è solo l'ingresso su osTicket e i documenti vanno nella cartella della lavorazione originale; (b) restano due lavorazioni collegate. Raccomandazione: (a), perché evita due garanzie sovrapposte e il Report di progetto del lavoro originale vede la causa. Richiede di dare alla base il codice del pagamento.
2. **Chiusura di un ticket urgente (T2-4).** Opzioni: (a) alla pubblicazione verificata, resoconto subito dopo; (b) al resoconto inviato. Raccomandazione: (a).
3. **Task ClickUp dell'urgente (T2-1).** Raccomandazione: lo crea chi analizza appena assegna l'urgenza, con campi minimi.
4. **Storico e decisioni dei ticket (T2-17).** Opzioni: (a) facoltativi; (b) si tengono come ora. Raccomandazione: (a).
5. **Forma dei testi al cliente (T2-18).** Opzioni: (a) forma impersonale anche nelle risposte nel ticket, con un esempio nelle skill; (b) la regola si applica solo ai documenti, non alle risposte. Raccomandazione: (b), con le risposte brevi e senza "tu".
6. **Chi decide l'interruzione di un progetto per un urgente (T2-12).** Raccomandazione: chi gestisce il team.
7. **Scenario e base.** Correggere lo scenario (T2-6, T2-7, T2-13) e la base (T2-3, T2-9) prima della prova 2. Dopo le correzioni accettate rifare la prova come `esecuzione-2`.
