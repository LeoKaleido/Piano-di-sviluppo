---
name: stato-di-partenza
description: Scrive lo Stato di partenza, cioè come funziona oggi il sistema del cliente, cosa verrà toccato, vincoli e incognite. Usala al kickoff di un progetto, per l'indagine sull'esistente, o per l'analisi del contesto di un prodotto.
---

# Stato di partenza

## A cosa serve

Lo Stato di partenza è un documento interno. Fotografa la situazione prima del lavoro, così che la Proposta di soluzione poggi su fatti e non sulla memoria di chi conosce il sistema. Da qui nascono i paletti della proposta: cosa è fattibile, cosa no, e perché.

Ha due forme:

- **Progetto**: indagine sull'esistente. Descrive come funziona oggi il sistema e cosa verrà toccato.
- **Prodotto**: analisi del contesto. Il sistema non esiste, quindi descrive come lavora oggi il cliente.

Il kickoff, di cui l'indagine fa parte, ha un tempo massimo pari al 10% della stima del progetto, prima Proposta di soluzione compresa. Quando il tempo finisce il documento si chiude comunque, con le incognite rimaste elencate: diventano issue di tipo Spike nella prima milestone.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Cliente e sistema.** Il nome del cliente e, per un progetto, il sistema coinvolto.
2. **Forma.** Progetto o prodotto.
3. **La richiesta.** Il ticket, le trascrizioni e le sintesi delle conversazioni del kickoff (skill `interpretazione-conversazioni`), oppure dove si trovano.
4. **Le fonti dell'indagine.** Appunti di chi conosce il sistema, codice se accessibile, Manuale del prodotto e Documento tecnico del sistema se esistono, racconti degli utilizzatori. Chiedi dove si trovano su Drive: non dare per scontata la struttura delle cartelle.

Leggi tutte le fonti prima di scrivere.

## Cosa analizzare in un progetto

L'indagine non si limita a ciò che viene raccontato: guarda il codice e gli altri lavori. Una proposta scritta senza aver aperto il codice promette cose che poi costano il doppio.

**Il codice.** Con chi conosce il sistema, oppure direttamente se hai accesso al repository. In sola lettura: l'indagine non modifica nulla.

- Dove si trova la parte coinvolta e come è fatta.
- Chi altro la usa: altre schermate, altre funzioni, integrazioni, dati condivisi.
- Cosa fa davvero, confrontato con ciò che il cliente crede e con ciò che dicono i documenti.
- I comportamenti non documentati.
- Lo stato del codice: test presenti o assenti, parti fragili, debito tecnico che renderebbe l'intervento più costoso.
- Gli sviluppi non ancora rilasciati che toccano la stessa parte.

**Gli altri lavori.** Progetti in corso, ticket aperti, variazioni registrate e consegne in garanzia sullo stesso sistema: cosa prevedono di cambiare nella stessa parte, e quando. Se la richiesta è già compresa in tutto o in parte in un altro lavoro, va detto con il riferimento preciso.

**I documenti.** Manuale del prodotto e Documento tecnico, se esistono: quanto corrispondono al codice. Le differenze vanno elencate, perché il progetto dovrà sanarle.

Se non hai accesso al codice e nessuno può guardarlo nel tempo dell'indagine, il documento lo dichiara in apertura: le affermazioni sul sistema restano "Riferito" o "Supposto", e la fattibilità è provvisoria. Prepara in quel caso le domande precise per chi potrà guardare il codice.

Se esiste l'esito di una verifica preliminare sulla richiesta, parti da quello.

## Grado di certezza

Ogni affermazione sul sistema o sul cliente porta il suo grado di certezza, perché un comportamento supposto e poi rivelatosi diverso è la causa più comune di stime sbagliate:

- **Verificato**: visto nel codice, nel sistema in uso o in un documento approvato.
- **Riferito**: raccontato da qualcuno, non controllato.
- **Supposto**: dedotto, da confermare.

Non presentare come verificato ciò che è riferito o supposto.

## Struttura per il progetto

1. **Parte del sistema coinvolta.** Cosa riguarda la richiesta, in una frase.
2. **Come funziona oggi.** Il comportamento attuale visto da chi lo usa, per tipo di utente.
3. **Cosa verrà toccato.** Schermate, dati, integrazioni, e le altre parti del sistema che dipendono da quella coinvolta. Per il codice: dove si trova, chi altro lo usa, in che stato è.
4. **Comportamenti non documentati.** Ciò che il sistema fa e che nessun documento descrive. Vanno elencati perché il cliente dà per scontato che restino.
5. **Vincoli.** Cosa non si può fare o costa molto, con il motivo.
6. **Fattibilità.** Per ogni punto della richiesta: fattibile, fattibile con un compromesso, non fattibile. Con il motivo.
7. **Incognite.** Ciò che l'indagine non ha chiarito. Per ognuna: cosa non si sa, come si può scoprire, chi può farlo.
8. **Lavori e documenti sullo stesso sistema.** Progetti in corso, ticket aperti, variazioni, sviluppi non rilasciati e documenti esistenti che il lavoro potrebbe toccare, con le sovrapposizioni trovate e le differenze tra documenti e codice.
9. **Fonti consultate.**

## Struttura per il prodotto

1. **Come lavora oggi il cliente.** Il processo attuale, con gli strumenti usati.
2. **Chi userà il prodotto.** I tipi di utilizzatore e cosa fa ciascuno.
3. **Sistemi con cui dialogare.** Per ognuno: cosa deve scambiare, se esiste documentazione, se c'è accesso.
4. **Vincoli.** Scadenze, obblighi di legge, identità grafica, limiti tecnici.
5. **Fattibilità.** Come sopra.
6. **Incognite.** Come sopra.
7. **Fonti consultate.**

## Regole di contenuto

- **Nessuna soluzione.** Il documento descrive e valuta la fattibilità. Come risolvere lo dirà la Proposta di soluzione.
- **Linguaggio tecnico ammesso.** È un documento interno: si possono nominare tecnologie e parti del codice.
- **Nulla di inventato.** Ciò che non risulta dalle fonti va tra le incognite.

## Regole di scrittura

{{SCRITTURA}}

## Formato

Markdown, file `stato-di-partenza-<cliente>-<sistema>.md`. Se le fonti non bastano a compilare una sezione, il documento si produce comunque: la sezione riporta ciò che si sa e termina con un blocco "Cosa manca", con ciò che serve e chi può fornirlo.

## Controllo finale

1. Ogni punto della richiesta del cliente ha un giudizio di fattibilità motivato.
2. Ogni affermazione ha il suo grado di certezza.
3. Ogni incognita indica come scioglierla e chi può farlo.
4. Nessuna soluzione è stata proposta.
5. {{CONTROLLO}}
