---
name: valutazione-richiesta
description: Valuta la richiesta di un cliente appena arrivata e propone taglia (ticket, progetto, prodotto), tipo e urgenza, con le prime domande da fare. Usala all'apertura di ogni ticket o nuova richiesta, prima di qualunque altro documento.
---

# Valutazione della richiesta

## A cosa serve

Ogni richiesta di un cliente entra dal sistema di ticket e va classificata prima di fare qualunque altra cosa, perché la classificazione decide quale piano si applica: Piano dei ticket, Piano di progetto o Piano di prodotto. Una classificazione sbagliata costa cara: un progetto trattato come ticket parte senza proposta né conferma del cliente, un ticket trattato come progetto si carica di documenti inutili.

Questa skill legge la richiesta e produce una valutazione: una proposta di classificazione motivata. La decisione resta al product lead.

## Avvio

Chiedi solo ciò che non è già stato detto nel messaggio che richiama la skill.

1. **La richiesta.** Il testo del ticket, oppure dove si trova.
2. **Il cliente.** Il nome con cui indicarlo.
3. **Il sistema coinvolto.** Su quale sistema del cliente si interviene, se esiste.

Leggi la richiesta per intero, allegati compresi, prima di valutare.

## Prima di valutare: verifica preliminare

La classificazione non si basa sul solo testo della richiesta. Prima di proporre taglia e stima serve l'esito della verifica preliminare (skill `verifica-preliminare`), che confronta la richiesta con i lavori già aperti e con il codice del sistema. Se l'esito non è disponibile, chiedilo oppure esegui quella skill.

L'esito può chiudere la valutazione prima di iniziare: se il lavoro è già compreso in un progetto, è un doppione, o il sistema lo fa già, non c'è nulla da classificare. In quel caso riporta l'esito e il prossimo passo indicato dalla verifica.

Se la verifica non si può fare, procedi comunque, ma dichiara in testa alla valutazione che è basata sul solo testo della richiesta e che taglia e stima vanno confermate dopo la verifica.

Un ticket bloccante non aspetta la verifica: si interviene subito.

## Cosa valutare

### 1. Quante richieste contiene

Un ticket può contenere più richieste indipendenti. Se è così, elencale e valuta ciascuna separatamente: ognuna diventerà un ticket a sé.

### 2. Taglia

Applica i criteri in quest'ordine.

- **Prodotto**: la richiesta riguarda un sistema che non esiste ancora.
- **Progetto**: il sistema esiste, e vale almeno una di queste condizioni: la stima supera le 2 settimane; serve più di una persona; serve una proposta, perché il cliente deve decidere come funzionerà.
- **Ticket**: il sistema esiste e nessuna delle tre condizioni vale. Il ticket è **rapido** fino a 2 giorni, **esteso** da 2 giorni a 2 settimane.

La stima parte da ciò che la verifica ha visto nel codice, non da come appare la richiesta: un intervento che sembra piccolo può toccare codice usato in molti punti. In questa fase è un ordine di grandezza, non un impegno: indicala come intervallo (per esempio "da 1 a 3 giorni") e dichiara quanto è affidabile. Se non hai elementi per stimare, dillo e indica chi può farlo (il team lead o uno sviluppatore che conosce quella parte).

### 3. Tipo (solo per i ticket)

- **Bug**: il sistema fa una cosa diversa da quanto concordato.
- **Modifica**: il cliente vuole che qualcosa funzioni diversamente.
- **Assistenza**: domanda, verifica o operazione che non cambia il codice.

Per distinguere bug e modifica conta ciò che era stato concordato, descritto nel Manuale del prodotto se esiste. Se non hai accesso a quel riferimento, segnala che il tipo va verificato e su quale documento.

### 4. Urgenza

- **Bloccante**: sistema fermo in produzione, utenti che non possono lavorare, dati a rischio. Si interviene subito e il ticket può interrompere il lavoro di un progetto.
- **Alta**: funzione importante degradata, ma esiste un modo per aggirare il problema. Intervento entro il giorno lavorativo successivo.
- **Normale**: tutto il resto. In coda, con data prevista.

L'urgenza si assegna sui fatti descritti, non sul tono della richiesta. Un cliente può scrivere "urgentissimo" per una richiesta normale, o descrivere con calma un sistema fermo. Se i fatti non bastano a decidere tra due livelli, proponi quello più alto e indica la domanda che scioglie il dubbio.

### 5. Interfaccia

Indica se l'intervento tocca l'interfaccia. Se sì, servirà un wireframe (in ogni taglia) e, per progetto e prodotto, un mockup quando cambia l'aspetto grafico.

### 6. Documenti e lavori che possono essere toccati

Riporta ciò che la verifica preliminare ha trovato: lavori in corso sulla stessa parte, documenti esistenti (Manuale del prodotto, Documento tecnico), parti del codice coinvolte e chi altro le usa. Se ce ne sono, servirà l'allineamento dei documenti.

### 7. Prime domande per il cliente

Elenca, numerate, le domande senza le quali non si può procedere. Devono essere puntuali e a risposta breve, perché verranno scritte nel ticket.

In questa fase non proporre soluzioni e non suggerire alternative al cliente: si raccolgono informazioni. Le soluzioni arrivano nella Scheda di intervento o nella Proposta di soluzione.

## Formato della valutazione

La valutazione è una nota interna, breve, restituita in risposta e non come file, salvo richiesta diversa. Usa questa struttura:

- **Richiesta in una frase.** Cosa chiede il cliente, con parole sue.
- **Verifica preliminare.** L'esito e i riferimenti, oppure la dichiarazione che non è stata fatta.
- **Taglia proposta.** Con il criterio che la determina e la stima come intervallo.
- **Tipo.** Solo per i ticket.
- **Urgenza.** Con il fatto che la determina.
- **Interfaccia.** Toccata o no.
- **Documenti e lavori toccati.** Se rilevati.
- **Dubbi.** Cosa potrebbe far cambiare la classificazione, e quale informazione lo deciderebbe.
- **Domande per il cliente.** Numerate.
- **Prossimo passo.** Per un ticket, la Scheda di intervento. Per un ticket bloccante, il percorso d'urgenza: si interviene subito e la scheda si scrive a posteriori. Per un progetto, il primo confronto e lo Stato di partenza. Per un prodotto, la qualifica del cliente.

Se il ticket contiene più richieste, ripeti la struttura per ognuna.

## Regole

- **Proponi, non decidere.** Scrivi "taglia proposta", e quando sei in dubbio tra due classificazioni presentale entrambe con ciò che le distingue.
- **Non inventare.** Se un'informazione manca, va tra i dubbi o tra le domande, non viene supposta.
- **Segnala il confine.** Se una richiesta è vicina alla soglia tra ticket e progetto, dillo: un ticket che cresce durante la lavorazione va fermato e convertito, ed è meglio saperlo prima.

## Regole di scrittura

- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere. Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente.

## Controllo finale

1. Ogni classificazione è motivata da un criterio o da un fatto presente nella richiesta o nella verifica preliminare, il cui esito è riportato (oppure è dichiarato che manca).
2. La stima è un intervallo, con la sua affidabilità dichiarata.
3. Nessuna soluzione è stata proposta.
4. Le domande per il cliente sono numerate e a risposta breve.
5. Il prossimo passo corrisponde al piano della taglia proposta.
6. **Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli.
