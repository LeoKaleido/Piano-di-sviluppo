# Scenario: ticket 2, urgenza sul pagamento

Codice della lavorazione: 105. Base: `../base-comune.md`. Categoria attesa: ticket urgente, con pacchetto di garanzia. Piano: Piano dei ticket (percorso d'urgenza), Ciclo di sviluppo (ticket urgenti durante un progetto).

Il test parte mercoledì 14 ottobre 2026, in sprint 4.

## Ruoli in scena

Marta (cliente), Franco (referente), Leonardo (chi analizza), chi gestisce il team, supervisore, project manager 1 (progetto comparatore), sviluppatore 2 (il più adatto, sta lavorando al comparatore), sviluppatore 3, team lead (revisione), incaricato della pubblicazione.

## Richiesta

Aperta da Marta su osTicket il 14 ottobre alle 9:40.

"Da stamattina i clienti con una carta Mastercard non riescono a pagare. Dicono che compare un errore generico e l'ordine non parte. Abbiamo già perso diversi ordini."

## Fatti aggiuntivi sul codice

- I circuiti di carta accettati sono in un file di configurazione del pagamento. Dal rilascio del 14 settembre il file contiene Visa, Maestro e Mastercard.
- Il servizio esterno di pagamento ha cambiato da stamattina il formato della sigla del circuito per Mastercard (da `MC` a `MASTERCARD`). Il codice del sito confronta la sigla in modo esatto: dopo il cambio la Mastercard non è più riconosciuta e l'ordine non parte.
- Esiste un test automatico che usa la sigla `MC`: oggi passa perché il test usa un dato finto e non quello reale.
- La correzione è una riga nella configurazione e una nella funzione di confronto. Non tocca altro. Il team lead stima 1,5 ore.
- La Guida alla pubblicazione v1.0 dice che dopo ogni pubblicazione si riavvia il server SSR.
- Lo sviluppatore 2 conosce meglio il pagamento (l'ha scritto) ma ha 15 ore sul comparatore, SAL2 in corso con prova il 30 ottobre e margine ridotto (24 ore su 48 consumate come buffer di milestone).
- Lo sviluppatore 3 ha capacità dedicata ai ticket, ma non conosce il modulo.

## Cosa deve emergere, fase per fase

**Ingresso e urgenza**

- L'urgenza si assegna prima di tutto, sui fatti: sistema fermo in produzione sul pagamento, ordini persi. Urgente. Non si aspetta la verifica né la pianificazione.
- Il percorso d'urgenza parte: si sceglie la persona che conosce meglio la parte coinvolta (sviluppatore 2), anche se lavora a un progetto. L'interruzione si decide in un solo punto: chi gestisce il team.
- Lo sviluppatore 2 mette in pausa l'issue in corso del comparatore: lavoro salvato, commento sullo stato, issue riportata a PLANNED (non resta IN PROGRESS). Le ore vanno sul ticket.
- Per la capacità: prima il buffer di sprint, poi il resto. Si dice chi decide se superano il buffer.
- Il cliente non viene avvisato di nulla sul comparatore, a meno che una data già comunicata cambi.

**Garanzia**

- Il pagamento è rilasciato il 14 settembre, la garanzia scade il 26 ottobre: la richiesta rientra nella garanzia. Il ticket 105 è anche un pacchetto di garanzia sul lavoro del pagamento. Si deve dire quale dei due percorsi vale e come si combinano: urgente e in garanzia usa il buffer di sprint, ore tracciate, issue in ClickUp con etichetta `garanzia` e codice della lavorazione originale. Non si apre una nuova lavorazione.
- Cosa conta come causa: causa esterna (il servizio ha cambiato formato). Va annotata per il Report di progetto della lavorazione originale.

**Correzione e rilascio**

- La correzione si fa e si pubblica appena pronta. Pubblica l'incaricato (la persona designata), non il responsabile. Si può anche di venerdì sera fino alle 18: qui è mercoledì.
- La revisione del codice si fa comunque, anche dopo la pubblicazione se serve a non ritardare la correzione: il team lead la fa e dice cosa non ha controllato.
- Il test automatico che passa pur essendo sbagliato va segnalato: se si corregge il test, o si apre un'issue per farlo.
- La Scheda di intervento si scrive a posteriori con quattro voci: cosa è successo, causa, correzione, parti toccate. Se la correzione è provvisoria si apre un'issue per rimuovere la causa.
- La verifica preliminare saltata all'inizio si esegue dopo, per sapere quali lavori e documenti sono toccati: la lavorazione 100 (comparatore) usa il pagamento? Il ticket 101 riguarda lo stesso codice?
- Si risponde al cliente nel ticket, con un messaggio breve. Il ticket si chiude alla pubblicazione e da lì decorre la garanzia del ticket. L'aggiornamento dei documenti segue dopo la chiusura.

## Eventi da introdurre, nell'ordine

1. 14 ottobre 10:15: Franco telefona direttamente a Marta e allo sviluppatore 2, chiedendo di sistemare subito. Si deve rispondere che la richiesta passa dal canale previsto.
2. 14 ottobre 11:30: dopo due ore di lavoro lo sviluppatore 2 scopre che la correzione tocca anche una funzione condivisa con il comparatore. Si decide se serve una persona in più o se si va avanti.
3. 14 ottobre 16:00: la correzione è pubblicata e Marta conferma a voce per telefono che funziona. Non conta come conferma di nulla: il ticket non ha prove del cliente. Si registra nello storico.
4. 15 ottobre: il servizio esterno annuncia un secondo cambio di formato per Maestro la settimana dopo. Si apre un ticket nuovo (provvisorio o definitivo), non si modifica il 105.
5. 21 ottobre: un'altra Mastercard fallisce per lo stesso motivo su un caso non coperto. Entro la garanzia: pacchetto di garanzia sul 105.

## Cosa non deve succedere

- Aspettare la verifica preliminare o la Scheda di intervento prima di intervenire.
- Lo sviluppatore 2 che lascia l'issue IN PROGRESS, o che non lascia traccia dello stato.
- Le ore del ticket sul progetto del comparatore.
- Il cliente del comparatore informato di un ticket urgente di un altro cliente o dell'effetto se nessuna data cambia.
- L'aggiornamento dei documenti prima della pubblicazione.
- Due lavorazioni (un ticket nuovo e un pacchetto di garanzia) per lo stesso problema.

## Documenti attesi in `esecuzione-N/105/`

- `storico.md` e `decisioni.md`.
- `01-analisi`: Scheda di intervento a posteriori, con in testa le decisioni dell'analisi (urgenza, categoria, tipo).
- `sistema/`: Documento tecnico aggiornato. Nessun documento in `03-rilascio`.
- `04-garanzia`: risposta al cliente sulla segnalazione del 21 ottobre.
- Il commento della revisione del codice (nel diario, non è un file) e l'issue di rimozione della causa.
