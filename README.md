# Personal Portfolio — Manvirender Singh Rawat

A professional personal portfolio website built with HTML, CSS, and vanilla JavaScript.

## Live Site

🔗 [msrawat78.github.io](https://msrawat78.github.io) *(update when published)*

## Project Structure

```
profile/
├── index.html              # Main HTML template
├── css/
│   └── style.css           # Responsive styles with CSS custom properties
├── js/
│   └── main.js             # DOM population & interactions
├── data/
│   └── content.js          # ✏️ Edit this file to update site content
├── assets/
│   ├── images/             # Profile photo, OG card image
│   └── icons/              # Favicon
├── resume/
│   └── MSRawat_Resume.pdf  # Downloadable resume
└── README.md
```

## How to Update Content

All website content lives in **`data/content.js`**. Edit that single file to change:

- Personal info, headline, and CTAs
- Services and engagement types
- Training offerings
- Projects and case studies
- Experience timeline, education, certifications
- YouTube/content links
- Contact information

The frontend reads from this data file and renders automatically — no HTML editing needed.

## How to Change Design

- **Colors**: Edit CSS custom properties in `:root` at the top of `css/style.css`
- **Fonts**: Change `--font-heading` and `--font-body` variables + the Google Fonts `<link>` in `index.html`
- **Spacing/Layout**: Adjust `--space-*` and `--max-width` variables

## Local Development

Just open `index.html` in a browser. No build tools or server required.

For live reload during development, you can use VS Code's Live Server extension.

## GitHub Pages Deployment

1. Create a repository named `msrawat78.github.io`
2. Push all files to the `main` branch
3. Go to Settings → Pages → Deploy from `main` branch
4. Site will be live at `https://msrawat78.github.io/`

## Tech Stack

- HTML5 (semantic, accessible)
- CSS3 (custom properties, responsive, mobile-first)
- Vanilla JavaScript (no frameworks, no dependencies)
- Google Fonts (Inter, JetBrains Mono)

---

Built with care, not with frameworks.

