# Equivalente di build.py per chi non ha Python. Legge i blocchi SCRITTURA e CONTROLLO da build.py,
# sostituisce i segnaposto nelle skill, copia lo script di controllo e crea i file .skill in dist/.
# Uso, dalla radice della repo: powershell -ExecutionPolicy Bypass -File build/build.ps1

$ErrorActionPreference = "Stop"
$utf8 = New-Object System.Text.UTF8Encoding($false)
$root = Split-Path -Parent $PSScriptRoot
$skills = Join-Path $root "skills"
$dist = Join-Path $root "dist"
$check = Join-Path $PSScriptRoot "controlla_caratteri.py"

$src = [System.IO.File]::ReadAllText((Join-Path $PSScriptRoot "build.py"), $utf8)
function Get-Block($name) {
    $m = [regex]::Match($src, $name + ' = """(.*?)"""', "Singleline")
    if (-not $m.Success) { throw "Blocco $name non trovato in build.py" }
    return $m.Groups[1].Value
}
$scrittura = Get-Block "SCRITTURA"
$controllo = Get-Block "CONTROLLO"

New-Item -ItemType Directory -Force $dist | Out-Null
Get-ChildItem $dist -File | Remove-Item -Force

$names = Get-ChildItem $skills -Directory | Sort-Object Name | ForEach-Object { $_.Name }
foreach ($name in $names) {
    $dir = Join-Path $skills $name
    $md = Join-Path $dir "SKILL.md"
    $text = [System.IO.File]::ReadAllText($md, $utf8)
    $text = $text.Replace("{{SCRITTURA}}", $scrittura).Replace("{{CONTROLLO}}", $controllo)
    if ($text.Contains("{{")) { throw "Segnaposto non risolto in $name" }
    [System.IO.File]::WriteAllText($md, $text, $utf8)
    New-Item -ItemType Directory -Force (Join-Path $dir "scripts") | Out-Null
    Copy-Item $check (Join-Path $dir "scripts\controlla_caratteri.py") -Force

    $zip = Join-Path $dist "$name.zip"
    Compress-Archive -Path $dir -DestinationPath $zip -Force
    Move-Item $zip (Join-Path $dist "$name.skill") -Force
}
Write-Host ($names.Count.ToString() + " skill: " + ($names -join ", "))
