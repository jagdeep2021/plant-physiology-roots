# 4320 / 7320 Plant Physiology — root teaching tools

## ▶ Live site

### https://jagdeep2021.github.io/plant-physiology-roots/

| tool | link |
|---|---|
| **Root Optimizer** — build a root on a carbon budget, run a season, watch the soil deplete | [open](https://jagdeep2021.github.io/plant-physiology-roots/root-optimizer.html) |
| **Class board** (a tab inside Root Optimizer — put it on the projector) | [open](https://jagdeep2021.github.io/plant-physiology-roots/root-optimizer.html#board) |
| **The Calcium Bottleneck** — why fertiliser does not cure blossom-end rot | [open](https://jagdeep2021.github.io/plant-physiology-roots/calcium.html) |
| **Before the Casparian Strip** — the animated lecture recap | [open](https://jagdeep2021.github.io/plant-physiology-roots/recap.html) |

Printable QR codes for all of these are in the course folder under
`2_prep material video links/qr/`.

## What this is

Three self-contained HTML files. No build step, no backend, no accounts — a student
opens a link and it works, on a laptop or a phone. The only external request is to
Google Fonts.

Student submissions reach the class board over a public [ntfy.sh](https://ntfy.sh)
topic set in `config.js`. Change `CLASS_ROOM` there to start a fresh class.

| file | what |
|---|---|
| `index.html` | landing page |
| `root-optimizer.html` | trait-budget design tool, season simulation, live class board |
| `calcium.html` | animated calcium uptake scenarios |
| `recap.html` | interactive root anatomy recap |
| `config.js` | the relay room name |
| `root-architect.html`, `board.html` | redirects, so older links still work |

Served by GitHub Pages from the repository root; pushing to `main` redeploys.
