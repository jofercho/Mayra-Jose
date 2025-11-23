# Mayra & José Wedding — Digital Invitation

An elegant mobile-first digital wedding invitation for Mayra & José.

## Overview
- Project: TikTok-style digital invitation with full-screen sections, animations managed by Anime.js v4, and mobile-first design.
- Purpose: Display event information (welcome, countdown, timeline, details, location, and RSVP) in a tactile, animated experience for mobile devices.

## Key Features
- Mobile-first design (100vh sections with `scroll-snap` for TikTok-style scrolling).
- Animations controlled by Anime.js v4 (UMD bundle included via CDN).
- Section tracking system with `IntersectionObserver` that logs to console and triggers section-specific animations.
- Animation state preparation and reset system so animations play fresh each time a user enters a section.
- Modular CSS organization in `css/` folder with main `main.css` file centralizing imports.

## Project Structure (Overview)
- `index.html` — Main page: structure with sections for `inicio`, `countdown`, `timeline`, `detalles`, `ubicacion`, `rsvp`, and `footer`.
- `main.css` — Imports files from `css/` folder.
- `styles.css` — (if exists) alternative main file with consolidated styles.
- `css/` — Folder with modular CSS:
  - `variables.css` — Variables and colors.
  - `fonts.css` — Local font declarations.
  - `base.css` / `layout.css` / `components.css` / `sections.css` / `animations.css` / `responsive.css` — Styles by responsibility. (Note: project moved to mobile-first approach; old media queries were removed.)
- `script.js` — JavaScript logic: animation handling, `IntersectionObserver`, `prepareAllAnimations()`, `resetAdjacentSections()`, and countdown timer.
- `images/`, `icons/` — Static assets (images and SVGs).

## Dependencies
- [Anime.js v4 UMD bundle] included via CDN in `index.html`.
  Example import in `index.html`:
  ```html
  <script src="https://cdn.jsdelivr.net/npm/animejs/dist/bundles/anime.umd.min.js"></script>
  <script>const { animate, stagger } = anime;</script>
  ```
- Fonts: Google Fonts (`Playfair Display`, `Inter`) and local fonts (`Perfecto Calligraphy`, `Palisade`).

## Run Locally
Quick options to view the project on your machine:

- Open `index.html` directly in browser (ideal for quick tests on local files).
- Use a static server (recommended to avoid iframe/Google Maps issues):

  - Python 3:
    ```powershell
    cd "d:\Projects\31 Wedding"
    python -m http.server 8000
    ```
    Then open `http://localhost:8000`.

  - VS Code: install and use "Live Server" extension and click "Go Live".

## Testing and Debugging
- Open browser console (F12) to see section tracking logs (emoji messages) and errors.
- Force reload without cache: Ctrl+F5 or from dev tools -> reload button with cache disabled.
- Review `script.js` to adjust animation options (duration, easing, stagger).

## Animations and How to Customize
- All animations are implemented with Anime.js v4's `animate(target, options)` API and utilities like `stagger()`.
- Key points in `script.js`:
  - `prepareAllAnimations()` / `setupInitialStates()` — sets elements to initial state (opacity 0, transforms) so animations start immediately when entering a section.
  - `sectionObserver` — detects visible section and calls `triggerSectionAnimations(sectionId)`.
  - `resetAdjacentSections(sections, currentIndex)` — resets initial state for previous and next sections, allowing animations to replay each time.

To modify an animation: find the `animate<Section>Name` function in `script.js` (e.g., `animateCountdownElements()`) and adjust `duration`, `delay`, `translateY`, etc.

## Layout and Mobile-First Notes
- Project is optimized for mobile; media queries were removed to maintain a single mobile-first design. If desktop support is desired, add breakpoints in `css/responsive.css` or reintroduce media queries.
- The `ubicacion` section (map) is vertically centered and uses `ubicacion-content` to maintain proper layout on mobile.

## Known Issues / Recommendations
- Google Maps iframe may require a local server to work correctly (avoid `file://` issues).
- On older iOS devices some CSS effects or transforms may behave differently; JS functions include fallbacks that force visibility if needed.

## Suggested Next Steps
- Add validation and real data handling for the RSVP form (send to an endpoint or Google Forms).
- Add lightweight tests (CSS/JS linting) and a precommit script.
- Desktop support: reintroduce media queries for tablet/desktop and adjust layouts.
- Internationalization (i18n) if the invitation is required in multiple languages.

---

If you'd like, I can:
- Add a `package.json` and development scripts (build, lint).
- Generate an optimized static version (CSS/JS minification) and a small `gulp`/`npm` workflow.
- Create a launch checklist (optimize images, check map permissions, iOS/Android testing).

Let me know what works best for you!