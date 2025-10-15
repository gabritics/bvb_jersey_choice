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

## Getting Started

Install and run:

```bash
git clone <your-repo-url>
cd <your-project-directory>
npm install
npm run dev
```

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

## Customization Ideas

* Replace `alert` with a results page or modal
* Add a “Reset selection” button
* Show a live summary of the chosen answer
* Add image captions and responsive styling
* Persist the choice (e.g., localStorage) or send it to an API

## License

Choose a license (e.g., MIT) and add a `LICENSE` file.
