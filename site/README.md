# Ravi Anuragi — Portfolio

## Folders
- `index.html` page structure
- `css/style.css` styling and colors (variables at the top)
- `js/data.js` ALL your content (edit this file)
- `js/main.js` rendering code (usually no need to touch)
- `images/projects/<project>/` project images, `images/awards/` award photos
- `resume/` put `Ravi-Anuragi-Resume.pdf` here

## Images
Each slot has a fixed file name shown on the page (dashed "Add image" box). Drop a file with that exact name into the folder and it appears. Set `SHOW_PLACEHOLDERS=false` in `data.js` to hide empty slots.

## Run locally
`cd site && python3 -m http.server 8000`, then open http://localhost:8000

## Deploy on Vercel
1. Push the `site` folder contents to a GitHub repo.
2. vercel.com > Add New Project > import the repo. Framework: "Other", no build command, output directory is the root.
3. Deploy. Every git push redeploys. Or run `npx vercel` inside `site`.
