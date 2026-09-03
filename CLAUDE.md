# 10_teaching_4320 — public teaching site for 4320/7320 Plant Physiology

Static site on GitHub Pages: `jagdeep2021/plant-physiology-roots`
→ https://jagdeep2021.github.io/plant-physiology-roots/

## What this is
Self-contained browser tools for the roots block. No build step, no backend, no
accounts — students open a link. Only external request is Google Fonts.

| file | tool |
|---|---|
| `index.html` | landing page |
| `root-optimizer.html` | trait-budget design tool + 120-day season sim + **live class board tab** |
| `calcium.html` | calcium uptake scenarios (blossom-end rot) |
| `recap.html` | interactive root anatomy recap |
| `config.js` | `CLASS_ROOM` — the ntfy.sh topic. Change it to start a fresh class. |
| `root-architect.html`, `board.html` | redirects only; older links and QR codes still land |

## Hard-won constraints — do not undo these
- **One model, one file.** The class board used to be a separate `board.html` with its
  own copy of `cost()`/`season()`. They drifted twice. The board is now a TAB inside
  `root-optimizer.html` using the same functions. Do not split it again.
- **Leaching is movement, not uptake.** Nitrate packets sink at the season's leach rate;
  a packet only disappears when a root takes it up. Survival is computed per *starting*
  layer following that packet's descent. Drawing net layer change instead makes dots
  vanish where there are no roots — a bug the user caught.
- **Each scenario changes the soil**, not just the score weights (`SOIL` table).
- **The endodermis is not the only Casparian barrier** — maize also bands the exodermis.
  Any copy claiming "one layer alone" is wrong.
- **Predict, then run.** Moving a slider must NOT re-run the season; students commit a
  prediction first. That is deliberate pedagogy.
- Students are NOT in the Mizzou Claude org, so artifact `db` cannot be used — it forces
  org-internal and would break the public link. Hence the ntfy relay.

## Editing source
Files are ALSO published as Claude Artifacts from
`2_Courses/1_Fall 2026/2_prep material video links/` (`L2_*.html`).
**That OneDrive folder is the editing source**; this repo is the public mirror.
Edit there, copy across, commit, push. Pages redeploys on push.
