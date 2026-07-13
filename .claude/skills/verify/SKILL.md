---
name: verify
description: How to run and visually verify the Sphere site (Next.js landing page) on this Windows machine
---

# Verifying the Sphere site

Single-page Next.js 16 site (Tailwind 4, framer-motion). No tests. Verification = run dev server + headless-browser screenshots.

## Launch

```
npm run dev        # ready on http://localhost:3000 in ~1s
```

## Screenshots (no Playwright installed — use puppeteer-core + system Edge)

```
npm install puppeteer-core   # in a scratch dir, ~5s
```

- Edge lives at `C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe` — **use forward slashes** in the JS string (backslashes got mangled once via bash heredoc).
- Launch: `puppeteer.launch({ executablePath: EDGE, headless: 'new', args: ['--disable-gpu','--hide-scrollbars'] })`.
- Headings are revealed by framer-motion `useInView` animations (~1.6s): `scrollIntoView` the section, then wait ~2.5s before shooting.
- Section ids that exist: `#about`, `#heritage`, `#events`, `#news`, `#contact` (no `#services`, no `#team` ids).
- `page.screenshot({ clip })` clip coords are **document**-relative: use `rect.y + window.scrollY`.
- Language switch: `AR`/`EN` buttons in nav; choice persists in localStorage across pages of the same browser context.
- Plain `msedge --headless --screenshot` needs `--user-data-dir` or it silently writes nothing; and the hero is `min-h-screen`, so a giant `--window-size` height just stretches the hero — prefer puppeteer + scrolling.

## Gotchas

- Display font is Bodoni Moda (`--font-display`): tall metrics, descenders paint below the line box at `leading-[1.15]`. Heading reveals use `clip-path: inset(...)` that persists after the animation — insets must keep negative top/bottom margins (`-0.2em` / `-0.35em`) or g/y/p get clipped.
- Cookie banner overlays the bottom; click the ACCEPT button before full-page shots.
