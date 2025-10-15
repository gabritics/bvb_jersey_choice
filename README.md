# BVB Kit Survey — React + TypeScript + Vite

A tiny two-page app that compares two images and asks for a user choice. With Routing and a dropdown selection that activates a next button only after selection.
Built with React, TypeScript, Vite, and React Router.

<img src="Bildschirmfoto 2025-09-18 um 11.26.52.png" alt="alt text" width="500">

## Features

* Home → “Teilnehmen!” button navigates to `/markup`
* Markup page with:

    * Two side-by-side images for comparison
    * Controlled `<select>` dropdown
    * “Weiter” button stays **disabled** until an option is chosen (re-disables when you pick “Bitte wählen”)
* Simple accessibility: screen-reader label for the dropdown
* Fast dev experience via Vite + HMR

## Requirements

* Node.js 18+
* npm, pnpm, or yarn


Vite serves the app at `http://localhost:5173` by default.

### Build and Preview

```bash
npm run build
npm run preview
```


## NPM Scripts

* `dev` — start Vite dev server
* `build` — production build
* `preview` — preview the production build
* `lint` — run ESLint (if configured)
