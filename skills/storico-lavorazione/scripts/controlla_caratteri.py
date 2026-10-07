#!/usr/bin/env python3
"""Cerca in uno o piu' file di testo i caratteri esclusi dalle regole di scrittura.

Uso:
    python controlla_caratteri.py file1.md [file2.md ...]
    python controlla_caratteri.py --correggi file1.md

Senza opzioni elenca ogni occorrenza con riga e colonna ed esce con codice 1
se ne trova. Con --correggi sostituisce i caratteri che hanno un equivalente
sicuro (virgolette, apostrofi, puntini di sospensione, spazi speciali) e
elenca quelli che richiedono una riscrittura a mano (trattini lunghi, punto
mediano, frecce, simboli, emoji).
"""
import re
import sys

SOSTITUIBILI = {
    "«": '"',   # virgoletta bassa aperta
    "»": '"',   # virgoletta bassa chiusa
    "“": '"',   # virgoletta curva aperta
    "”": '"',   # virgoletta curva chiusa
    "„": '"',
    "‘": "'",   # apostrofo curvo aperto
    "’": "'",   # apostrofo curvo chiuso
    "…": "...", # puntini di sospensione
    " ": " ",   # spazio non separabile
    " ": " ",
    " ": " ",
}

DA_RISCRIVERE = {
    "—": "trattino lungo",
    "–": "trattino medio",
    "‒": "trattino medio",
    "―": "trattino lungo",
    "·": "punto mediano",
    "•": "pallino",
    "→": "freccia",
    "←": "freccia",
    "↑": "freccia",
    "↓": "freccia",
    "⇒": "freccia",
    "➔": "freccia",
    "➜": "freccia",
    "✓": "simbolo",
    "✔": "simbolo",
    "✗": "simbolo",
    "★": "simbolo",
    "☆": "simbolo",
}

EMOJI = re.compile(
    "[\U0001F000-\U0001FAFF\U00002600-\U000027BF\U0001F1E6-\U0001F1FF️‍]"
)

NOMI = {
    "«": "virgoletta bassa",
    "»": "virgoletta bassa",
    "“": "virgoletta curva",
    "”": "virgoletta curva",
    "„": "virgoletta curva",
    "‘": "apostrofo curvo",
    "’": "apostrofo curvo",
    "…": "puntini di sospensione",
    " ": "spazio speciale",
    " ": "spazio speciale",
    " ": "spazio speciale",
}


def trova(testo):
    esiti = []
    for n_riga, riga in enumerate(testo.splitlines(), start=1):
        for col, car in enumerate(riga, start=1):
            if car in SOSTITUIBILI:
                esiti.append((n_riga, col, car, NOMI[car], True))
            elif car in DA_RISCRIVERE:
                esiti.append((n_riga, col, car, DA_RISCRIVERE[car], False))
            elif EMOJI.match(car):
                esiti.append((n_riga, col, car, "emoji o simbolo", False))
    return esiti


def main(argv):
    correggi = "--correggi" in argv
    percorsi = [a for a in argv if not a.startswith("--")]
    if not percorsi:
        print(__doc__)
        return 2

    trovati = 0
    for percorso in percorsi:
        with open(percorso, encoding="utf-8") as f:
            testo = f.read()

        if correggi:
            nuovo = testo
            for car, sost in SOSTITUIBILI.items():
                nuovo = nuovo.replace(car, sost)
            if nuovo != testo:
                with open(percorso, "w", encoding="utf-8") as f:
                    f.write(nuovo)
                print(f"{percorso}: sostituzioni automatiche applicate")
            testo = nuovo

        esiti = trova(testo)
        for n_riga, col, car, nome, _ in esiti:
            print(f"{percorso}:{n_riga}:{col}: {nome} (U+{ord(car):04X})")
        trovati += len(esiti)
        if not esiti:
            print(f"{percorso}: nessun carattere vietato")

    if trovati and correggi:
        print("I caratteri elencati vanno riscritti a mano: una sostituzione automatica cambierebbe la frase.")
    return 1 if trovati else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
