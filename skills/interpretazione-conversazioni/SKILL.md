---
name: interpretazione-conversazioni
description: Interpreta la trascrizione di una riunione, telefonata o altra conversazione con il cliente e ne ricava richieste, decisioni, conferme, informazioni sul sistema, domande aperte e variazioni, indicando in quale documento del lavoro vanno riportate. Prepara anche il riepilogo scritto da inviare al cliente. Usala dopo ogni conversazione con il cliente su un ticket, un progetto o un prodotto.
---

# Interpretazione delle conversazioni

## A cosa serve

Le riunioni, le telefonate e le altre conversazioni con il cliente si registrano, si trascrivono e si aggiungono alla documentazione del lavoro, su Drive. Il testo grezzo però non basta alle altre skill: dentro ci sono richieste, decisioni, conferme e informazioni sul sistema mescolate a ciò che non serve.

Questa skill legge una trascrizione e la trasforma in informazioni utilizzabili: dice cosa è stato chiesto, deciso e confermato, e in quale documento del lavoro va riportato. Prepara anche il riepilogo scritto da inviare al cliente, perché ciò che viene detto a voce vale solo dopo un riepilogo scritto.

La skill non modifica nessun documento: propone. Le modifiche le applicano le skill dei singoli documenti (`stato-di-partenza`, `proposta-di-soluzione`, `manuale-del-prodotto`, `documento-tecnico`, `variazione`), dopo la conferma del responsabile.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **La trascrizione**, oppure dove si trova. Può essere di una riunione, di una telefonata o di uno scambio di messaggi.
2. **Il lavoro.** Cliente, sistema, e se è un ticket, un progetto o un prodotto.
3. **Data e partecipanti.** Chi c'era per il cliente, e in particolare se c'era il referente: vale solo la sua approvazione.
4. **A che punto è il lavoro**, e la versione corrente dei documenti: Proposta di soluzione, Manuale del prodotto, Documento tecnico, Registro delle variazioni. Serve a sapere se un cambiamento chiesto è una modifica (documento non ancora confermato) o una variazione (dopo la conferma del Manuale).
5. **I documenti collegati.** Stato di partenza, domande aperte con i loro codici (D1, D2), materiali attesi dal cliente.

Leggi la trascrizione per intero prima di estrarre qualcosa.

## Come leggere

- **Chi ha detto cosa.** Ogni voce estratta indica chi l'ha detta. Una cosa detta da chi non è il referente non è una decisione.
- **Fatto, opinione, desiderio.** Distingui ciò che il cliente afferma sul sistema (un fatto, da verificare), ciò che preferisce (un'opinione) e ciò che chiede (una richiesta).
- **Grado di certezza.** Ogni informazione sul sistema porta il suo grado: verificata, riferita o supposta. Una cosa raccontata dal cliente è "riferita".
- **Ambiguità.** Se una frase si può leggere in due modi, non scegliere: segnalala come "Da chiarire", con le due letture.
- **Rumore.** Saluti, battute e divagazioni non vanno nella sintesi.

## Cosa estrarre

Per ogni voce: il testo in una frase, chi l'ha detta, il punto della trascrizione (riga o minuto, se noto) e il documento in cui va riportata.

- **Richieste.** Cose che il cliente vuole. Per ognuna: se è già prevista dai documenti, se è una modifica (documento non ancora confermato) o una variazione (dopo la conferma del Manuale), o se è una richiesta nuova su un lavoro concluso.
- **Decisioni.** Scelte fatte durante la conversazione, da chi.
- **Conferme.** Approvazioni di documenti o di versioni: quale documento, quale versione, chi ha confermato. Vale solo se a confermare è il referente, e solo dopo il riepilogo scritto.
- **Informazioni sul sistema o sul cliente.** Come funziona qualcosa, quali utenti, quali processi. Vanno allo Stato di partenza, alla Proposta o al Manuale.
- **Risposte alle domande aperte.** Con il codice della domanda (D3). Una risposta parziale lascia la domanda aperta, riformulata su ciò che manca.
- **Domande del cliente.** A cui bisogna rispondere, e chi risponde.
- **Materiali promessi.** Cosa il cliente ha detto che consegnerà, e quando.
- **Impegni nostri.** Cosa il team ha detto che farà, e entro quando.
- **Contraddizioni.** Cose dette in conversazione che contraddicono un documento esistente: quale documento, quale punto.

## Cosa restituisci

Tre parti, in quest'ordine.

**1. Sintesi della conversazione.** Documento interno, con le voci sopra raggruppate per tipo. Prima riga: lavoro, data, partecipanti.

**2. Dove riportare.** Per ogni voce che cambia un documento: il documento, la sezione, il testo attuale (se c'è) e il testo proposto. È la lista che il responsabile usa per aggiornare i documenti con le altre skill.

**3. Riepilogo scritto per il cliente.** Solo se la conversazione ha prodotto decisioni, conferme o richieste. Testo da inviare per email, breve, senza tecnologie, ore o nomi interni:

- cosa si è deciso o confermato, voce per voce;
- cosa è stato chiesto e come verrà trattato;
- cosa serve dal cliente, con le date;
- la richiesta di rispondere solo se qualcosa non corrisponde a quanto detto.

Se il riepilogo riporta una conferma di documento, nomina il documento e la versione.

## Regole di contenuto

- **Non inventare.** Ciò che non è nella trascrizione non entra nella sintesi. Se manca un'informazione, chiedila.
- **Non applicare.** Nessun documento viene modificato dalla skill.
- **Non attribuire.** Non mettere in bocca al cliente ciò che non ha detto, e non trasformare un'opinione in una decisione.
- **Riservatezza.** Se la conversazione contiene dati personali o informazioni non pertinenti al lavoro, non riportarli nella sintesi e segnalalo.
- **Una conversazione, una sintesi.** Se la trascrizione copre più lavori, produci una sintesi per lavoro.

## Formato

Markdown, `sintesi-conversazione-<cliente>-<lavoro>-<AAAA-MM-GG>.md`. La trascrizione originale si conserva a parte, non modificata. Il riepilogo per il cliente si restituisce come testo da incollare in un'email.

## Regole di scrittura

{{SCRITTURA}}

## Controllo finale

1. Ogni voce indica chi l'ha detta e il documento di destinazione.
2. Nessuna conferma è considerata valida senza il referente e senza il riepilogo scritto.
3. Le richieste sono separate in modifiche, variazioni e richieste nuove, secondo lo stato dei documenti.
4. Ogni risposta a una domanda aperta riporta il codice della domanda.
5. Il riepilogo per il cliente non contiene tecnologie, ore o nomi interni.
6. Nessun documento è stato modificato.
7. {{CONTROLLO}}
