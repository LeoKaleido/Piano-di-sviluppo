---
name: analisi-test
description: Analizza l'esecuzione di uno scenario di test in test/ (cartella esecuzione-N) e produce l'analisi: i documenti prodotti confrontati con quelli attesi, i controlli dello scenario superati o no, le osservazioni di tipo manca, superfluo, peso, contraddizione, buco, passaggio e base, con la correzione proposta. Se esiste una prova precedente la confronta. Usala dopo aver eseguito uno scenario, prima di correggere piani e skill.
---

# Analisi dei test

Questa è una skill della repo, non del piano operativo: vive in `.claude/skills/` e non va spostata in `skills/`.

## A cosa serve

I test delle skill (cartella `test/`) producono documenti e un diario. Questa skill li legge e dice dove il piano o una skill non ha retto, in modo che Leonardo possa decidere cosa correggere. Non corregge nulla: propone.

## Avvio

Chiedi solo ciò che non è già stato detto.

1. **Lo scenario e la prova.** Per esempio `test/ticket-2-urgenza-checkout/esecuzione-1`. Se la prova non è indicata, usa l'ultima.
2. **La prova precedente**, se esiste: `esecuzione-N-1` dello stesso scenario.
3. **Le fonti.** `test/base-comune.md`, lo `scenario.md`, i piani in `docs/`, le Regole comuni, il Ciclo di sviluppo e le skill in `skills/` che l'esecuzione ha usato.

Leggi tutto per intero: una ricerca per parole chiave non basta.

## Cosa fare

1. **Inventario.** Elenca i file di `esecuzione-N`. Confrontali con la sezione "Documenti attesi" dello scenario: mancanti, in più, nella cartella sbagliata. Un documento in più di quelli previsti dal piano è un'osservazione di tipo Superfluo o Peso, salvo che lo scenario lo chieda.
2. **Controlli dello scenario.** Per ogni voce di "Cosa deve emergere" e di "Eventi da introdurre", verifica nel diario e nei documenti se è emersa. Esito: emersa, emersa in parte, non emersa. Per ogni "Cosa non deve succedere", cerca se è successo.
3. **Fedeltà al piano.** Per ogni fase, controlla che i passi, i documenti e le chiusure siano quelli del piano della categoria. Una deviazione è una Contraddizione se è colpa del piano o delle skill, un errore di esecuzione se è colpa di chi ha recitato (si dichiara e non diventa una modifica ai piani).
4. **Coerenza dei numeri.** Ricalcola ore, capacità, buffer, margine, date e durata della garanzia con le regole delle Regole comuni e del Ciclo di sviluppo. Un numero sbagliato è un errore di esecuzione, tranne se la regola è ambigua: allora è una Contraddizione.
5. **Regole di scrittura.** Per ogni documento prodotto, controlla: italiano, forma impersonale, un solo nome per ogni cosa, niente tabelle, solo caratteri da tastiera italiana (cerca virgolette curve, trattini lunghi, puntini di sospensione come carattere unico, emoji), niente ore e tecnologie nei documenti per il cliente, niente prezzi. Se puoi eseguire comandi, usa una ricerca dei caratteri vietati sui file dell'esecuzione.
6. **Passaggi.** Per ogni coppia di skill consecutive, verifica che ciò che la prima ha prodotto basti alla seconda: se la seconda ha dovuto chiedere o inventare, è un Passaggio o un Manca.
7. **Peso.** Per ogni documento e passo, stima quanto costa e quanto vale. Un documento che nessuna skill successiva ha letto, o che ripete ciò che sta in un altro, è un Peso: la procedura rischia di essere troppo lenta. Segnala anche i casi in cui un ticket piccolo ha prodotto più documenti di quanto il suo lavoro giustifica.
8. **Diario.** Riprendi le annotazioni di chi ha eseguito il test e verifica che siano riportate o scartate con un motivo.
9. **Confronto.** Se esiste una prova precedente, per ogni osservazione di quella prova dì se è risolta, ancora aperta o peggiorata, e se la prova nuova ha prodotto osservazioni nuove (regressioni).

## Tipi di osservazione

- **Manca.** Una skill chiede un'informazione che a quel punto nessuno ha.
- **Superfluo.** Una skill produce o chiede qualcosa che non serve.
- **Peso.** Un passo o un documento che costa più di quanto vale.
- **Contraddizione.** Due skill, o una skill e un piano, dicono cose diverse.
- **Buco.** Una situazione reale che nessuna skill copre.
- **Passaggio.** Ciò che una skill produce non basta alla successiva.
- **Base.** Un errore o una lacuna della base o dello scenario, da correggere lì.
- **Esecuzione.** Un errore di chi ha recitato, non del piano: non si corregge niente, serve solo a pulire il confronto.

## Cosa restituisci

Un file `analisi.md` in `esecuzione-N`, con queste parti, in quest'ordine:

1. **Sintesi.** Poche righe: lo scenario, la prova, il giudizio generale (il piano ha retto? dove no?).
2. **Controlli dello scenario.** Elenco con l'esito di ciascuno: emerso, emerso in parte, non emerso. Per ciò che non è emerso, il motivo.
3. **Documenti.** Prodotti, mancanti, in più, fuori posto.
4. **Osservazioni.** Una per voce, numerate con il codice dello scenario (per esempio T2-1) e ordinate per gravità. Ogni voce ha: tipo, dove (piano, skill, passo), cosa è successo, correzione proposta, gravità (alta se fa sbagliare chi applica il piano, media se è un buco o un residuo, bassa se cosmetica).
5. **Peso della procedura.** Documenti e passi più costosi, con una proposta di eliminazione o fusione dove ha senso.
6. **Confronto con la prova precedente**, se c'è.
7. **Decisioni per Leonardo.** Le osservazioni che richiedono una scelta sua, con le opzioni e una raccomandazione.

Le osservazioni accettate da Leonardo passano poi a piani e skill: non lo fa questa skill.

## Regole

- **Nulla di inventato.** Ogni osservazione cita il file o il passo da cui nasce. Se non puoi verificare, dillo.
- **Non correggere.** Non modificare piani, skill, scenari o documenti dell'esecuzione.
- **Distingui piano ed esecuzione.** Se l'errore è di chi ha recitato, è un'osservazione di tipo Esecuzione.
- **Una sola osservazione per causa.** Se la stessa causa produce più effetti, riuniscili.
- **Italiano, forma impersonale.** Frasi brevi, elenchi, niente tabelle, solo caratteri da tastiera italiana.
