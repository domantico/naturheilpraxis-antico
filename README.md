# Naturheilpraxis Antico-Abenstein

Website der Naturheilpraxis Ursula Antico-Abenstein, Heilpraktikerin in Traunstein.

🌐 **Live:** [naturheilpraxis-antico.de](https://www.naturheilpraxis-antico.de)

## Seiten

| Datei | Inhalt |
|-------|--------|
| `index.html` | Startseite |
| `indikationen.html` | Behandlungsgebiete |
| `therapie.html` | Therapieangebote |
| `uber-mich.html` | Über die Heilpraktikerin |
| `kontakt.html` | Kontakt & Anfahrt |
| `AGB.html` | Allgemeine Geschäftsbedingungen |
| `datenschutzerklarung.html` | Datenschutz |
| `impressum.html` | Impressum |

## Struktur

```
/
├── index.html
├── indikationen.html
├── therapie.html
├── uber-mich.html
├── kontakt.html
├── AGB.html
├── datenschutzerklarung.html
├── impressum.html
├── CNAME                  ← Custom Domain für GitHub Pages
├── css/
│   └── style.css
├── js/
│   └── nav.js
└── img/
    ├── Logo.png
    ├── Panorama.jpeg
    └── ...
```

## Hosting: GitHub Pages (kostenlos)

Diese Website läuft auf **GitHub Pages** – kostenfrei, mit automatischem SSL.

### DNS-Einstellungen bei IONOS

| Typ | Name | Wert |
|-----|------|------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | `DEIN-GITHUB-USERNAME.github.io` |

### GitHub Pages aktivieren

1. Repository → Settings → Pages
2. Source: Branch `main`, Ordner `/` (root)
3. Custom domain: `naturheilpraxis-antico.de` eintragen
4. "Enforce HTTPS" aktivieren ✅
