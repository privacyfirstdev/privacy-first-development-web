The brand is a person held between two code brackets: privacy at the centre, development around it. The name is always written in lowercase as "privacy first development".

## Content fundamentals
Write plainly and lead with what the person keeps, not the technology. Use sentence case in headings and UI text, and lowercase only for the wordmark. Say "we don't collect it" instead of "data minimisation". Avoid exclamation marks and emoji.

## Visual foundations
Set text in `ink` on `surface-100` or `surface-200`. Use `brand-blue` for links, headings and primary buttons and `brand-orange` for emphasis text. Use `logo-blue` and `logo-orange` only for the logo and large graphics: `logo-orange` fails 4.5:1 on white at small sizes. Status colours are `success`, `danger` and `warning-fill` (text on warning-fill is always `ink`). The five source colours are listed under `color.palette` in `tokens.json`; the interface tokens are darkened or lightened from them to pass 4.5:1. Keep `space-8` between sections and `radius-lg` on cards and logo panels. Set type in `display`, `h1` and `h2` for headings and `body` for running text.

## Logo
Use `assets/Logos/mark.svg` as the default mark: the blue and orange brackets with the person, no shield, redrawn as clean geometry from the original. Use `assets/Logos/lockup.svg` where the name is needed: the mark with "privacy first" in blue (Figtree Bold) over "development" in orange (Figtree Medium), outlined to paths so it needs no font. Use `assets/Logos/mark-original-traced.svg` only where the original shield version is required; `assets/Logos/original-lockup.png` is the original for reference. On the dark theme the mark and lockup can sit directly on `surface-100` (blue 4.2:1, orange 7.2:1, both fine for large graphics); on any other busy or mid-tone ground use a white panel with `radius-lg`. Leave `space-6` of clear space on every side and never stretch, outline, recolour or redraw it. Keep the lockup at 28px tall or more and the mark at 16px or more. Do not use `logo-green` outside the original shield version.

## Chrome extension icon
The extension for Reddit uses the same brackets around an R in place of the person: `assets/Chrome/chrome-icon-r.svg`, with PNGs at 16, 32, 48 and 128 pixels for the manifest. Use the 128 pixel file for the Chrome Web Store listing. At 16 pixels the R stays legible; the person version does not, so do not use it below 32 pixels. The R is Figtree Bold outlined to a path, so it matches the wordmark.

## Iconography
The brackets are code and the person is privacy. Do not add a shield or lock to the simplified mark.


## Example
`examples/landing.html` is a one-page landing and settings-popup example built only from these tokens, with light and dark themes. Its copy is placeholder.
