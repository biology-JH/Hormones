# Exact Live Manus Website Export

This is a direct export of the currently published Manus website, downloaded from:

https://learnlane-8qjdszjn.manus.space

The root HTML, CSS, JavaScript, route manifest, and every deployed image/diagram asset were requested from that live origin and saved here. The associated published checkpoint is `698d731b346086cc714fd0b3b8d0c8354f8246b2`.

## Run locally

From this directory run:

```bash
python3 -m http.server 3000
```

Then open `http://localhost:3000`.

## Contents

- `index.html`, `styles.css`, `script.js`: exact live browser files
- `manus-routes.json`: live route manifest
- `source-images/`, `ppt-images/`, `ppt-sti-images/`: all live deployed image and diagram assets
- `LIVE_ASSET_MANIFEST.json`: URL, content type, byte length, and SHA-256 for every captured file
- `LIVE_MANUS_VERSION.txt`: live origin and published checkpoint
