# web-teal

## Development

Install the project dependencies (for example, after cloning the repository):

```sh
npm ci
```

Start the Tailwind watcher while working on the site:

```sh
npm run dev
```

Keep this command running while you edit. It watches the project CSS and regenerates the development stylesheet in `dist/`. Open `index.html` in a browser (or use a local server) and refresh to see changes. Stop the watcher with `Ctrl+C`.

## Build and publish

Create the minified stylesheet for publishing:

```sh
npm run build
```

You do **not** need to run a build just to push source-code changes to GitHub. Run it before publishing/deploying if your deployment does not build the site automatically. If GitHub Actions or another deployment service runs `npm run build`, let that service handle it.

**Important:** Generated files in `dist/` are ignored by Git. A plain GitHub Pages deployment from the repository branch will therefore not include the generated CSS/AOS assets. Configure a deployment workflow to run `npm ci` and `npm run build`, and publish the site files together with `dist/`.

## Project files

- `index.html` — the page markup.
- `style.css` — Tailwind entry point and custom styles.
- `script.js` — site JavaScript.
- `dist/` — generated CSS and copied AOS assets; do not edit these generated files directly.