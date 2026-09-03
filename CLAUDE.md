# 10_teaching_4320 — public teaching site for 4320/7320 Plant Physiology

Static site served by GitHub Pages from the repo root of
`jagdeep2021/plant-physiology-roots` → https://jagdeep2021.github.io/plant-physiology-roots/

## What this is
Three single-file browser tools used in the roots block. No build step, no backend,
no accounts — students open a link. The only external request is Google Fonts.

| file | tool |
|---|---|
| `index.html` | landing page |
| `root-optimizer.html` | trait-allocation design tool; transparent cost model on its own tab |
| `calcium.html` | animated scenario simulator (calcium uptake, blossom-end rot) |
| `recap.html` | interactive recap of the root anatomy lecture |

## Conventions
- These files are ALSO published as Claude Artifacts. The Artifact copies live in
  `2_Courses/1_Fall 2026/2_prep material video links/`. **That OneDrive folder is the
  editing source**; this repo is the public mirror — copy from there, don't diverge.
- Everything must stay self-contained: no local assets, no relative imports, no
  server calls. A student on a phone with a flaky connection has to get a working page.
- The Root Optimizer class board deliberately uses pasted codes rather than shared
  server state, because students are not in the Mizzou Claude organisation.

## Drill
Update in OneDrive → copy across → commit → push. Pages redeploys on push.
