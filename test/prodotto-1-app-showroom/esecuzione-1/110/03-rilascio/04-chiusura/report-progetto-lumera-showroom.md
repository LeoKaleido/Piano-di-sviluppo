# Report di progetto, applicazione per gli showroom (prodotto 110)

Interno. Data: 2027-09-17. Fonti: `storico.md`, `decisioni.md`, Note di sprint, Milestone report, Registro delle variazioni, Piano dei SAL e dati di ClickUp indicati nello scenario. Lo storico dello sviluppo tra le milestone 2 e 5 è riassunto dai dati dello scenario, non dalle singole note.

## 1. Sintesi

Prodotto nuovo per tablet, prima release, quattro sviluppatori da febbraio 2027, cinque milestone. Lo sviluppo ha rispettato le date del Piano dei SAL. Il lancio è stato aperto a tutti il 13 settembre 2027, con tre giorni di ritardo rispetto al Piano di lancio per l'informativa sulla privacy. Le ore reali sono state il 4,5% sopra la stima iniziale.

## 2. Stima contro realtà

- **Durata.** Stima a occhio: 150 giorni lavorativi. Stima precisa (Proposta): 24 settimane. Stima con le issue (Piano dei SAL): 26 settimane, dal 1 febbraio al 30 luglio 2027. Reale: 26 settimane, stesso intervallo. Accettazione di M1 il 3 marzo contro prova il 26 febbraio, senza effetto sulle date.
- **Ore.** Stima iniziale 1.792 ore di issue, più 358,4 di buffer di milestone. Con le issue aggiunte (24 ore di spike nelle API degli ordini in M1) e la variazione V1 (14 ore), le ore stimate salgono a 1.830. Ore reali (ClickUp): 1.872.
- **Per milestone** (stima rivalutata, reale):
  - M1: 304, 292.
  - M2: 420, 410.
  - M3: 420, 441 (più 21 ore, più 5%).
  - M4: 406, 398.
  - M5: 280, 331 (più 51 ore, più 18%): la sincronizzazione senza rete è risultata più complessa.

## 3. Buffer

Buffer di milestone: 358,4 ore. Usati 80 ore secondo la definizione dello scenario (ore reali meno ore di issue della stima iniziale). Di queste, 38 sono lavoro aggiunto (24 della spike, 14 della variazione V1) e 42 sono scostamento sulle stime. Buffer di sprint: non usato per ticket urgenti (nessun ticket urgente), con 42 ore non usate nello sprint 12.

## 4. Variazioni

Una media (V1, SMS di promemoria, 14 ore, approvata il 22 marzo, nessuna data cambia). Una grande (V2, applicazione per i clienti, rifiutata il 19 aprile).

## 5. Imprevisti

- Assenza dello sviluppatore 4 per due giorni (sprint 12): 12 ore.
- Spike sulle API degli ordini: più 24 ore in M1; milestone in ritardo di 8 ore di margine dopo lo sprint 12, risolta con 16 ore aggiunte dai ticket.
- Prestiti di ore ai ticket dallo sviluppatore 3: 24 ore in totale.
- Problema all'invio delle email al lancio (dominio mittente senza autorizzazioni): corretto in tre giorni di calendario (dal 10 al 13 settembre). Le ore spese non sono indicate dallo scenario. Nessun effetto sull'apertura a tutti del 13 settembre.

## 6. Il cliente

- Manuale: risposta con 4 giorni lavorativi di attesa effettiva (chiusura aziendale esclusa); sollecito scritto il 7 gennaio.
- Prova del SAL1: accettazione dopo 3 giorni lavorativi, il silenzio non è stato trattato come accettazione.
- Informativa sulla privacy: 3 giorni lavorativi di ritardo, il lancio è slittato degli stessi giorni.
- Foglio dei clienti: consegnato il 31 agosto, come previsto dal Piano dei SAL. La qualità dopo la pulizia di Elena non è indicata nello scenario.

## 7. Decisioni chiave

Vedi il Registro delle decisioni: la divisione in release (nessun pagamento né firma nella prima), il blocco degli sconti oltre il 10%, l'applicazione web installabile al posto della nativa, la leva sulle 16 ore nello sprint 13.

## 8. Cosa ha funzionato e cosa no

- Funzionato: la durata (centrata sulla stima con le issue, 2 settimane sopra la stima precisa); le fondamenta con la spike sulle API; il blocco anticipato dei rischi.
- Non funzionato: la stima di M5 (sincronizzazione senza rete, più 18%); la Proposta sottostimava di 2 settimane; il buffer di sprint non è mai servito (42 ore non usate nello sprint 12), mentre il margine di M1 è andato sotto zero.

## 9. Dati per le stime future

- Tipo di lavoro: prodotto nuovo per tablet con integrazione su API e gestionale esistenti, uso senza rete, quattro sviluppatori.
- Dimensione: 18 story nella prima release; circa 104 ore reali per story, supporto e collaudo compresi (1.872 diviso 18).
- Scostamento sulla durata dalla stima precisa: più 8% (24 contro 26 settimane).
- Fattori che hanno spostato la durata: uso senza rete (più 18% su M5), estensione di API esistenti, dati dei clienti in Excel, approvazioni lente (4 giorni sul Manuale), materiali del cliente (3 giorni sull'informativa).

## 10. Garanzia

Il periodo è in corso: 91 giorni dal 13 settembre 2027, fino al 13 dicembre 2027. Da compilare a fine periodo, dalle issue di garanzia in ClickUp.
