# Hormones study-guide site

## Baseline

This repository began as an export of the published site at `https://learnlane-8qjdszjn.manus.space`, based on checkpoint `698d731b346086cc714fd0b3b8d0c8354f8246b2`. The current working tree is no longer an exact export: it includes the requested visual refresh.

## Current visual assets

The current artwork is under `images/`. The page header uses a single laboratory image with the course title positioned over the lower desk area. Session 4 displays the placental structure illustration; other figures support the menstrual-cycle, hormone, HIV/STI, transmission, and prevention sections. The opening section includes a four-group, 20-term English–Traditional Chinese glossary. The original exported `source-images/`, `ppt-images/`, and `ppt-sti-images/` directories have been removed so the old artwork is not served.

`LIVE_ASSET_MANIFEST.json` records hashes, sizes, and public paths for the current website files and image assets. `LIVE_MANUS_VERSION.txt` retains the origin and checkpoint of the baseline export.

## Run locally

From this directory, run:

```bash
python3 -m http.server 3000
```

Then open `http://localhost:3000`.

## Main files

- `index.html`, `styles.css`, `script.js`: website source and session figure mappings
- `manus-routes.json`: root route manifest
- `images/`: page header and section illustrations
