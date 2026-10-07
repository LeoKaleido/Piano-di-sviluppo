# Costruisce presentation/index.html: unisce le slide di presentation/slides (in ordine di nome file)
# dentro presentation/template.html. Ogni file di slide contiene una sola <section>.
# Uso, dalla radice della repo: powershell -ExecutionPolicy Bypass -File presentation/build.ps1

$ErrorActionPreference = "Stop"
$utf8 = New-Object System.Text.UTF8Encoding($false)
$dir = $PSScriptRoot
$template = [System.IO.File]::ReadAllText((Join-Path $dir "template.html"), $utf8)

$files = Get-ChildItem (Join-Path $dir "slides") -Filter "*.html" | Sort-Object Name
if ($files.Count -eq 0) { throw "Nessuna slide in presentation/slides" }

$parts = foreach ($f in $files) {
    $text = [System.IO.File]::ReadAllText($f.FullName, $utf8).Trim()
    if (-not $text.StartsWith("<section")) { throw "$($f.Name): deve iniziare con <section" }
    $text = $text -replace '^<section ', '<section class="slide" '
    $text = $text -replace ' data-transition="[a-z]+"', ''
    $text
}

$html = $template.Replace("{{SLIDES}}", ($parts -join "`n"))
[System.IO.File]::WriteAllText((Join-Path $dir "index.html"), $html, $utf8)
Write-Host ("index.html: " + $files.Count + " slide")
