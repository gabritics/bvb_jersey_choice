# BVB Kit Survey — React + TypeScript + Vite

A tiny two-page app that compares two images and asks for a user choice. With Routing and a dropdown selection that activates a next button only after selection
Built with React, TypeScript, Vite, and React Router.

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

## Project Structure (simplified)

```
public/
  E2C44F55-...jpeg
  92835-...webp

src/
  main.tsx          # App bootstrap (createRoot + BrowserRouter)
  App.tsx           # Routes: "/" → Home, "/markup" → MarkupPage
  MarkupPage.tsx    # Images, text, Dropdown (controlled), disabled button
  index.css         # Minimal layout/styles

index.html          # <div id="root"> and <title>
```

> **Assets:** Files in `public/` should be referenced **without** the `public/` prefix, e.g.
> `<img src="/E2C44F55-...jpeg" />` (leading slash), so they resolve in dev and in production builds.

## How It Works

* **index.html**: Provides the `#root` mount node and sets the document title (`BVB Trikot`).
* **main.tsx**:

  ```tsx
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  )
  ```

  Mounts React, enables React Router and dev checks.
* **App.tsx**:

    * `<Routes>` with two `<Route>`s:

        * `/` → `HomePage` (headline + `<Link to="/markup"><button>Teilnehmen!</button></Link>`)
        * `/markup` → `MarkupPage`
* **MarkupPage.tsx**:

    * Shows two images (300×300), explanatory text, and a controlled `<select>`.
    * State: `const [answer, setAnswer] = useState<string>("")`

        * `<Dropdown value={answer} onChange={setAnswer} />`
        * Button: `<button disabled={!answer}>Weiter</button>`
    * The dropdown’s first option is `value=""` (“Bitte wählen”), so selecting it again resets the state and re-disables the button.
    * Accessibility: an invisible `<label htmlFor="antwort" className="sr-only">Antwort wählen</label>` (define a `.sr-only` utility in CSS), or alternatively use `aria-label` on the `<select>`.

## Key Types & Props

```ts
type DropdownProps = {
  value: string;                 // current selection from parent
  onChange: (v: string) => void; // report new value to parent
};
```

`onChange={(e) => onChange(e.currentTarget.value)}` adapts the native change event to the string that your parent state expects.

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
