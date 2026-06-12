# Sphere — Roadmap & Pending Work

## In sospeso: Deploy + Sistema News

### 1. GitHub Actions + Deploy FTP

Configurare il deploy automatico su ogni push a `main`.

**Cosa fare:**
1. Aggiungere `output: 'export'` in `next.config.ts` per generare il sito statico in `/out`
2. Creare `.github/workflows/deploy.yml` con la action `SamKirkland/FTP-Deploy-Action`
3. Aggiungere questi GitHub Secrets nel repo (Settings → Secrets → Actions):
   - `FTP_SERVER` — hostname o IP del server agenzia
   - `FTP_USERNAME` — utente FTP
   - `FTP_PASSWORD` — password FTP

**Risultato:** ogni push su `main` triggera build Next.js → upload automatico via FTP.

---

### 2. Bot Telegram per gestione News (costo zero)

Il cliente gestisce la sezione news direttamente da Telegram, senza CMS.

**Architettura:**
```
Cliente scrive al bot Telegram
        ↓
Bot (Node.js su Render free) riceve il messaggio
        ↓
Bot fa commit su src/data/news.json via GitHub API
        ↓
GitHub Actions triggera automaticamente
        ↓
Build next export → deploy FTP (~2-3 minuti)
```

**Stack:**
- Bot: `node-telegram-bot-api` (Node.js), hostato su **Render free tier**
- Database: `src/data/news.json` nel repo (zero costi, versionato)
- Next.js: legge `news.json` a build time (sostituisce l'array hardcoded in `News.tsx`)

**Cosa serve per implementarlo:**
1. Credenziali FTP agenzia (→ step 1 sopra)
2. Creare il bot con BotFather: https://t.me/BotFather → `/newbot` → salva il token
3. GitHub Personal Access Token con scope `repo` (per commit via API)
4. Account Render: https://render.com (piano free, zero carta di credito)

**Formato messaggi bot (da definire con il cliente):**
```
/addnews
Titolo: Gala Riyadh 2025
Categoria: Event
Testo: Descrizione breve dell'articolo...
[immagine opzionale allegata]
```

---

## Stato attuale del sito

- [x] Hero, About, Events, Concierge, Team, News, Contact
- [x] Footer con Instagram + link Privacy
- [x] Cookie banner GDPR + Privacy Policy page (/privacy)
- [x] Scroll-to-top button
- [x] Form contatti con checkbox consenso Privacy Policy
- [ ] Deploy FTP (attesa credenziali agenzia)
- [ ] Bot Telegram per news (attesa deploy FTP)
