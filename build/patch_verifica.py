import pathlib

S = pathlib.Path("/home/claude/skills")


def patch(name, pairs):
    p = S / name / "SKILL.md"
    t = p.read_text(encoding="utf-8")
    for old, new in pairs:
        assert t.count(old) == 1, (name, old[:60], t.count(old))
        t = t.replace(old, new)
    p.write_text(t, encoding="utf-8")


patch("valutazione-richiesta", [
    (
        "## Cosa valutare\n",
        "## Prima di valutare: verifica preliminare\n\n"
        "La classificazione non si basa sul solo testo della richiesta. Prima di proporre taglia e stima serve l'esito della verifica preliminare (skill `verifica-preliminare`), che confronta la richiesta con i lavori già aperti e con il codice del sistema. Se l'esito non è disponibile, chiedilo oppure esegui quella skill.\n\n"
        "L'esito può chiudere la valutazione prima di iniziare: se il lavoro è già compreso in un progetto, è un doppione, o il sistema lo fa già, non c'è nulla da classificare. In quel caso riporta l'esito e il prossimo passo indicato dalla verifica.\n\n"
        "Se la verifica non si può fare, procedi comunque, ma dichiara in testa alla valutazione che è basata sul solo testo della richiesta e che taglia e stima vanno confermate dopo la verifica.\n\n"
        "Un ticket bloccante non aspetta la verifica: si interviene subito.\n\n"
        "## Cosa valutare\n",
    ),
    (
        "Se l'intervento tocca una parte del sistema su cui esistono altri lavori in corso o documenti (Manuale del prodotto, Documento tecnico, altri progetti, altri ticket), segnalalo: servirà l'allineamento dei documenti.",
        "Riporta ciò che la verifica preliminare ha trovato: lavori in corso sulla stessa parte, documenti esistenti (Manuale del prodotto, Documento tecnico), parti del codice coinvolte e chi altro le usa. Se ce ne sono, servirà l'allineamento dei documenti.",
    ),
    (
        "La stima in questa fase è un ordine di grandezza, non un impegno:",
        "La stima parte da ciò che la verifica ha visto nel codice, non da come appare la richiesta: un intervento che sembra piccolo può toccare codice usato in molti punti. In questa fase è un ordine di grandezza, non un impegno:",
    ),
    (
        "- **Taglia proposta.** Con il criterio che la determina e la stima come intervallo.",
        "- **Verifica preliminare.** L'esito e i riferimenti, oppure la dichiarazione che non è stata fatta.\n"
        "- **Taglia proposta.** Con il criterio che la determina e la stima come intervallo.",
    ),
    (
        "1. Ogni classificazione è motivata da un criterio o da un fatto presente nella richiesta.",
        "1. Ogni classificazione è motivata da un criterio o da un fatto presente nella richiesta o nella verifica preliminare, il cui esito è riportato (oppure è dichiarato che manca).",
    ),
])

patch("scheda-di-intervento", [
    (
        "4. **La situazione.** Quale delle cinque sopra. Se non è detto e non esiste ancora una scheda, è la scheda iniziale.",
        "4. **La situazione.** Quale delle cinque sopra. Se non è detto e non esiste ancora una scheda, è la scheda iniziale.\n"
        "5. **L'esito della verifica preliminare**, per la scheda iniziale: cosa è stato trovato nel codice e nei lavori aperti. Stato di partenza, esclusioni e stima partono da lì. Se la verifica non è stata fatta, segnalalo: una scheda scritta senza aver guardato il codice impegna su una stima non fondata.",
    ),
])

patch("stato-di-partenza", [
    (
        "## Grado di certezza\n",
        "## Cosa analizzare in un progetto\n\n"
        "L'indagine non si limita a ciò che viene raccontato: guarda il codice e gli altri lavori. Una proposta scritta senza aver aperto il codice promette cose che poi costano il doppio.\n\n"
        "**Il codice.** Con il team lead o uno sviluppatore, oppure direttamente se hai accesso al repository. In sola lettura: l'indagine non modifica nulla.\n\n"
        "- Dove si trova la parte coinvolta e come è fatta.\n"
        "- Chi altro la usa: altre schermate, altre funzioni, integrazioni, dati condivisi.\n"
        "- Cosa fa davvero, confrontato con ciò che il cliente crede e con ciò che dicono i documenti.\n"
        "- I comportamenti non documentati.\n"
        "- Lo stato del codice: test presenti o assenti, parti fragili, debito tecnico che renderebbe l'intervento più costoso.\n"
        "- Gli sviluppi non ancora rilasciati che toccano la stessa parte.\n\n"
        "**Gli altri lavori.** Progetti in corso, ticket aperti, variazioni registrate e consegne in garanzia sullo stesso sistema: cosa prevedono di cambiare nella stessa parte, e quando. Se la richiesta è già compresa in tutto o in parte in un altro lavoro, va detto con il riferimento preciso.\n\n"
        "**I documenti.** Manuale del prodotto e Documento tecnico, se esistono: quanto corrispondono al codice. Le differenze vanno elencate, perché il progetto dovrà sanarle.\n\n"
        "Se non hai accesso al codice e nessuno può guardarlo nel tempo dell'indagine, il documento lo dichiara in apertura: le affermazioni sul sistema restano \"Riferito\" o \"Supposto\", e la fattibilità è provvisoria. Prepara in quel caso le domande precise per chi potrà guardare il codice.\n\n"
        "Se esiste l'esito di una verifica preliminare sulla richiesta, parti da quello.\n\n"
        "## Grado di certezza\n",
    ),
    (
        "3. **Cosa verrà toccato.** Schermate, dati, integrazioni, e le altre parti del sistema che dipendono da quella coinvolta.",
        "3. **Cosa verrà toccato.** Schermate, dati, integrazioni, e le altre parti del sistema che dipendono da quella coinvolta. Per il codice: dove si trova, chi altro lo usa, in che stato è.",
    ),
    (
        "8. **Lavori e documenti sullo stesso sistema.** Progetti in corso, ticket aperti, documenti esistenti che il lavoro potrebbe toccare.",
        "8. **Lavori e documenti sullo stesso sistema.** Progetti in corso, ticket aperti, variazioni, sviluppi non rilasciati e documenti esistenti che il lavoro potrebbe toccare, con le sovrapposizioni trovate e le differenze tra documenti e codice.",
    ),
])
print("ok")
