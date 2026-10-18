# privacy first development

Landing page for the privacy first development projects. Plain static HTML: no build step, no framework, no third-party requests.

## Publish with GitHub Pages

1. Create a GitHub repository and push this folder to it (the folder root is the site).
2. In the repository, go to **Settings → Pages**, choose **Deploy from a branch**, pick `main` and `/ (root)`, and save.
3. The Install extension links in `index.html` point to the Chrome Web Store listing. Licenses are bought inside the extension (Stripe), so the site has no checkout link of its own.

## Files

| Path | What it is |
| --- | --- |
| `index.html` | The whole page. Styles are inline so it is one file to edit. |
| `assets/fonts/` | Figtree (weights 400, 500, 700) as woff2, Latin subset, plus `figtree.css` and the OFL licence. |
| `assets/logo/` | `lockup.svg` (name, outlined) and `mark.svg`. Use as-is. |
| `assets/icons/` | Chrome extension icon as SVG and PNG (32 and 128 pixels). |
| `design-system/` | The design system this page is built from. Reference only; not linked from the page. |
| `.nojekyll` | Tells GitHub Pages to serve files as they are. |

## Rules this page follows

- **No Google Fonts or other CDNs.** Figtree is self-hosted, so visitors' IP addresses are not sent to a third party. Keep it that way: do not add external scripts, stylesheets, fonts or analytics.
- Colours and spacing come from `design-system/tokens.json`.
- The theme switch stores only the light or dark choice, in this browser's `localStorage`.

## Updating the font

The woff2 files come from the `@fontsource/figtree` package (5.2.10). To update, download the Latin files for the weights you need from that package and replace the files in `assets/fonts/`.
