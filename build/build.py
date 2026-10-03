import pathlib, shutil, subprocess, sys, zipfile

ROOT = pathlib.Path("/home/claude")
SKILLS = ROOT / "skills"
DIST = ROOT / "dist"
CHECK = ROOT / "build" / "controlla_caratteri.py"

SCRITTURA = """- Lingua italiana. Forma impersonale: niente "io", "noi", "tu", "lei", "voi". Il cliente è chiamato per nome, sempre lo stesso.
- Ogni cosa ha un solo nome, lo stesso usato nei documenti precedenti del lavoro. Due nomi per la stessa cosa fanno credere che siano due cose.
- Frasi brevi. Elenchi al posto delle tabelle, che sono pesanti da leggere. Grassetti ed elenchi puntati sono ammessi.
- Solo caratteri digitabili da una normale tastiera italiana. Certi caratteri tipografici fanno percepire il testo come generato da una macchina. Sono esclusi: virgolette basse, virgolette curve, punto mediano usato come separatore, trattino lungo e trattino medio usati come incisi o separatori, puntini di sospensione come carattere unico, frecce e simboli decorativi, emoji. Al loro posto: virgolette dritte, virgole, due punti, parentesi e il trattino normale. Le lettere accentate si scrivono normalmente."""

CONTROLLO = """**Forma e caratteri.** Nessuna prima o seconda persona, cliente chiamato sempre con lo stesso nome. Se puoi eseguire comandi, lancia `python scripts/controlla_caratteri.py <file>` su ogni file prodotto: elenca i caratteri vietati con riga e colonna. Con `--correggi` sostituisce virgolette e puntini; trattini lunghi, punto mediano e simboli vanno riscritti a mano. Se non puoi eseguire comandi, rileggi il testo cercandoli."""

DIST.mkdir(exist_ok=True)
for f in DIST.glob("*"):
    f.unlink()

names = sorted(p.name for p in SKILLS.iterdir() if p.is_dir())
for name in names:
    md = SKILLS / name / "SKILL.md"
    text = md.read_text(encoding="utf-8")
    text = text.replace("{{SCRITTURA}}", SCRITTURA).replace("{{CONTROLLO}}", CONTROLLO)
    assert "{{" not in text, name
    md.write_text(text, encoding="utf-8")
    (SKILLS / name / "scripts").mkdir(exist_ok=True)
    shutil.copy(CHECK, SKILLS / name / "scripts" / "controlla_caratteri.py")

print(len(names), "skill:", ", ".join(names))
