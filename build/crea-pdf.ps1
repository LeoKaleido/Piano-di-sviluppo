# Crea il PDF di uno o piu documenti Markdown.
# Uso: .\build\crea-pdf.ps1 percorso\claude\manuale-del-prodotto-v1.4.md [altri.md ...]
# Se il sorgente sta in una cartella "claude", il PDF va nella cartella superiore.
# Il nome del PDF e preceduto da un numero progressivo che non
# salta mai: un tipo di documento prende il numero successivo libero la prima volta,
# e lo tiene per le versioni e gli esemplari successivi (vedi Regole comuni,
# Numero dei PDF).
# Nella radice resta solo la versione finale di ogni documento: i PDF delle versioni precedenti dello stesso tipo si tolgono.
# I documenti di "develop" (Note di sprint, Milestone report) non hanno il PDF.
# Se il sorgente sta altrove, il PDF va accanto al sorgente con lo stesso nome.
# Richiede Node (winget install OpenJS.NodeJS.LTS) e Chrome o Edge installati.

param(
    [Parameter(Mandatory = $true, ValueFromRemainingArguments = $true)]
    [string[]]$Documenti
)

$ErrorActionPreference = "Stop"
$env:Path = [Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [Environment]::GetEnvironmentVariable("Path", "User")
$env:PUPPETEER_SKIP_DOWNLOAD = "1"

if (-not (Get-Command npx -ErrorAction SilentlyContinue)) {
    throw "Node non trovato. Installarlo con: winget install OpenJS.NodeJS.LTS"
}

# Il tipo di documento e il nome senza versione, codice o numero di bozza.
function Get-Tipo([string]$nome) {
    return ($nome -replace '-(v\d[\d.]*|S\d+|SAL\d+|V\d+|bozza-\d+)$', '')
}

$config = Join-Path $PSScriptRoot "md-to-pdf.config.js"

foreach ($doc in $Documenti) {
    $file = Get-Item (Resolve-Path $doc).Path
    $nome = [IO.Path]::GetFileNameWithoutExtension($file.Name)
    $cartella = $file.Directory

    if ($cartella.Name -eq "claude") {
        $radice = $cartella.Parent.FullName
        $tipo = Get-Tipo $nome
        $numero = $null
        $massimo = 0
        foreach ($esistente in Get-ChildItem $radice -Filter "*.pdf" -File) {
            if ($esistente.BaseName -match '^(\d{2})-(.+)$') {
                $n = [int]$Matches[1]
                if ($n -gt $massimo) { $massimo = $n }
                if ((Get-Tipo $Matches[2]) -eq $tipo) { $numero = $n }
            }
        }
        if ($null -eq $numero) { $numero = $massimo + 1 }
        $pdf = Join-Path $radice ("{0:D2}-{1}.pdf" -f $numero, $nome)
    } else {
        $pdf = Join-Path $cartella.FullName "$nome.pdf"
    }

    Write-Host "PDF: $pdf"
    & npx --yes md-to-pdf --config-file $config $file.FullName
    if ($LASTEXITCODE -ne 0) { throw "Conversione fallita: $($file.FullName)" }
    $prodotto = Join-Path $cartella.FullName "$nome.pdf"
    if ($prodotto -ne $pdf) { Move-Item -Force $prodotto $pdf }
    if ($cartella.Name -eq "claude") {
        # Nella radice resta solo la versione finale: i PDF di altre versioni dello stesso tipo escono.
        foreach ($vecchio in Get-ChildItem $radice -Filter "*.pdf" -File) {
            if ($vecchio.FullName -ne $pdf -and $vecchio.BaseName -match '^(\d{2})-(.+)$' -and (Get-Tipo $Matches[2]) -eq $tipo -and $Matches[2] -cmatch '-v\d[\d.]*$') {
                Remove-Item $vecchio.FullName
            }
        }
    }
}
