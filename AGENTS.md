# Rental Template Safety Rules

## Deploy Policy
- Never run `wrangler pages deploy .` in this repository.
- Only deploy from `publish/`.
- Always run the security check before deploy.

## Required Flow
1. Run `powershell -ExecutionPolicy Bypass -File .\tools\prepublish-security-check.ps1`.
2. Run `powershell -ExecutionPolicy Bypass -File .\tools\safe-deploy.ps1 -ProjectName <cloudflare-pages-project>`.

## Sensitive Data Guardrails
- Do not commit or deploy `.env*`, `*.pem`, `*.key`, `id_rsa*`, `credentials*`, `secrets*`, `token*`.
- Keep cache/runtime folders out of deploy: `.npm-cache/`, `.wrangler/`, `.appdata/`, `.vercel/`.

