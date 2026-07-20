# nibras-bank-cards

The **Cards** micro-frontend — **the Cards squad's own repo**. A standalone Next.js 16 app that owns
`/cards/*` and is composed into the Nibras Bank shell via **Multi-Zones**. Includes an interactive
freeze/unfreeze toggle.

> **Nibras Bank is a fictional bank** for a developer demo — not a real institution, not affiliated
> with anyone.

**▶ Live:** [nibras-bank-shell.vercel.app/cards](https://nibras-bank-shell.vercel.app/cards) (composed in the shell) · standalone: [nibras-bank-cards.vercel.app](https://nibras-bank-cards.vercel.app)

Part of the mesh: **[nibras-bank-shell](https://github.com/hafisn07/nibras-bank-shell)** ·
**[nibras-bank-accounts](https://github.com/hafisn07/nibras-bank-accounts)** ·
**[nibras-bank-payments](https://github.com/hafisn07/nibras-bank-payments)** ·
**nibras-bank-cards** (this) · **[nibras-bank-ui](https://github.com/hafisn07/nibras-bank-ui)** (shared `@nibras/ui`).

## Run standalone

```bash
npm install      # also pulls @nibras/ui from GitHub
npm run dev      # http://localhost:3003
```

Under the shell it appears at `http://localhost:3000/cards`.

## How it fits

Owns `/cards/*`; sets `assetPrefix: "/cards-static"`. Depends on `@nibras/ui`
(`github:hafisn07/nibras-bank-ui`, kept current by Renovate). Deploys independently of every other
zone.
