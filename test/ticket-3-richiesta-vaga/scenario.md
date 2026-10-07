# Scenario: ticket 3, richiesta vaga che cresce

Codice della lavorazione: 104. Base: `../base-comune.md`. Categoria attesa: ticket che diventa progetto. Piano: Piano dei ticket, poi Piano di progetto.

Il test parte lunedì 12 ottobre 2026. Esercita il confine tra ticket e progetto, le richieste con più lavori dentro e il caso in cui il sistema "lo fa già".

## Ruoli in scena

Marta (cliente), Franco (referente), Leonardo (chi analizza), chi gestisce il team, project manager 2 (se diventa progetto), team lead, sviluppatore 3, chi conosce il sistema.

## Richiesta

Aperta da Marta su osTicket il 12 ottobre.

"Buongiorno, il sito a volte è lento quando i clienti cercano i prodotti e alcuni non trovano quello che cercano. Inoltre vorrei poter vedere solo i prodotti disponibili subito, e scaricare gli ordini del mese in Excel perché adesso li copio a mano. Se potete fare tutto prima della fine del mese."

## Fatti aggiuntivi sul codice

- La ricerca del catalogo interroga il database senza un indice sul testo: con 1.900 prodotti risponde in 1,2 secondi, con picchi di 4 secondi nel fine settimana. Non c'è un difetto "reale" da riprodurre: è lentezza strutturale.
- La ricerca non gestisce gli errori di battitura né i sinonimi: chi scrive "lampadario" non trova "lampada a sospensione". Il Manuale F1 non dice nulla sulla qualità dei risultati.
- Il filtro per disponibilità esiste già nelle API e nel gestionale; nel sito non è mostrato. Aggiungerlo al catalogo è una modifica piccola ma tocca il modulo `disponibilita`, su cui il ramo del comparatore sta lavorando senza averlo rilasciato.
- L'esportazione degli ordini esiste ed è visibile solo a chi ha il permesso di amministratore. Marta non lo ha. Per darglielo basta cambiare il permesso nel gestionale, senza toccare il codice, ma serve l'autorizzazione di Franco.
- Rifare la ricerca con indice, sinonimi e tolleranza agli errori richiede da 3 a 4 settimane per una persona.

## Cosa deve emergere, fase per fase

**Analisi (`01-analisi`)**

- La richiesta contiene tre lavori diversi: ricerca lenta e imprecisa, filtro disponibilità, esportazione ordini. Si dividono: un codice per lavoro. Il codice 104 resta al primo, gli altri hanno i propri codici di osTicket.
- **Esportazione.** Il sistema lo fa già: manca un permesso. Non serve sviluppo: è un'assistenza, con la risposta al cliente che contiene le istruzioni e la richiesta di autorizzazione a Franco. Esito: non da fare come sviluppo.
- **Filtro disponibilità.** Compreso in parte nel comparatore (la story F11.3 è un altro contesto: nel confronto). Sul catalogo è un lavoro nuovo ma tocca un modulo con uno sviluppo non rilasciato: esito da rimandare, con l'evento che lo riapre (rilascio del comparatore, 27 novembre).
- **Ricerca.** La richiesta è vaga ("a volte è lento", "alcuni non trovano"). Si fanno domande puntuali, numerate, senza proporre soluzioni: quali ricerche, quali prodotti, da quando, su quali dispositivi. Le schede si scrivono solo dopo la risposta.
- Per la scadenza (fine mese) si dice subito se è fattibile: per la ricerca no.

**Crescita**

- Dalla risposta di Marta emerge che il problema è strutturale. La stima supera le 2 settimane: il ticket si ferma e si riclassifica come progetto. Si cambia piano e si passa alla skill `kickoff`. Il lavoro già fatto (analisi e domande) si considera nella nuova stima.
- Chi analizza designa il responsabile (project manager 2) con chi gestisce il team. Il progetto ha una Proposta, senza saltare il kickoff, e il cliente è informato del motivo e dei passi successivi.
- La richiesta che passa a progetto esce dal Folder "Ticket" in ClickUp.

**Dopo la riclassificazione**

- Si ricomincia da `01-kickoff` della lavorazione 104 (la cartella resta quella, non si crea un altro codice). Il tempo del kickoff è il 10% di una stima a occhio nuova.
- Il primo passo del progetto è lo Stato di partenza con le decisioni dell'analisi, che riprende quello che il ticket aveva già trovato.

## Eventi da introdurre, nell'ordine

1. 12 ottobre: Marta insiste che sia "una cosa piccola". Chi analizza non cede sulla categoria: la decidono i fatti.
2. 12 ottobre: Marta risponde alle domande con ritardo, il 20 ottobre. Il ticket resta sospeso informalmente, senza termini.
3. 20 ottobre: le risposte confermano la lentezza strutturale e la ricerca imprecisa.
4. 21 ottobre: Franco telefona e dice "va bene, fate tutto e poi mi dite quanto costa". Non è una conferma di nulla: va messa per iscritto in un riepilogo, e un'approvazione economica non esiste.
5. 22 ottobre: il codice dell'esportazione è già autorizzato da Franco: Marta riceve il permesso. La richiesta si chiude con una risposta. Nessun documento da aggiornare.
6. 23 ottobre: Marta chiede a voce di aggiungere nella nuova ricerca anche i risultati degli articoli del blog. Se il progetto ha già una Proposta confermata sarebbe una variazione; se no, una modifica.

## Cosa non deve succedere

- Scrivere una Scheda di intervento per una richiesta vaga.
- Stimare la ricerca "a occhio" in poche ore senza averne guardato il codice.
- Tenere i tre lavori nello stesso codice.
- Completare il ticket "già che ci siamo" oltre le 2 settimane.
- Una Scheda di valutazione, o il vecchio nome Piano di sprint, comparsi nei documenti.
- Un'approvazione economica o un preventivo nei documenti.

## Documenti attesi in `esecuzione-N/104/`

- `storico.md` e `decisioni.md` (la riclassificazione è una decisione).
- `01-analisi` (primo tentativo come ticket): decisioni dell'analisi e domande per Marta, risposta sul permesso dell'esportazione.
- Dopo la riclassificazione: `01-kickoff/01-valutazione` con lo Stato di partenza, trascrizioni e riepilogo scritto delle telefonate; `01-kickoff/02-stima`; `01-kickoff/03-proposta` con la prima versione, entro il tempo del kickoff.
- La risposta al cliente sul perché si cambia piano.
- Il test si ferma alla Proposta: il resto del progetto è già coperto dal progetto 1.
