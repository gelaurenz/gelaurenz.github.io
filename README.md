# UX Portfolio Starter

This is a standalone static portfolio that can be published very cheaply on GitHub Pages or Cloudflare Pages.

## Files

- `index.html`: Main content and case study structure
- `styles.css`: Visual design and responsive layout
- `script.js`: Scroll reveal and active navigation states
- `assets/`: Screenshot images used in the sample portfolio

## Customize It

Edit `index.html` and replace:

- `Your Name`
- Intro copy in the hero section
- Case study titles and summaries
- User stories and study summaries
- Contact links and email

Swap screenshots by replacing the files in `assets/` and keeping the same file names, or update the image paths in `index.html`.

## Publish on GitHub Pages

Recommended if you want the simplest free hosting tied to a GitHub repo.

1. Create a new public GitHub repository, for example `yourname-portfolio`.
2. Upload the contents of this folder so that `index.html` is at the repository root.
3. In GitHub, open `Settings` -> `Pages`.
4. Choose the branch you uploaded to and publish from the root folder.
5. Wait a few minutes for the site to go live at `https://<your-username>.github.io/<repo-name>/` or on your custom domain.

## Publish on Cloudflare Pages

Recommended if you want very fast hosting, a clean dashboard, and easy custom-domain setup.

### Option A: Drag and drop

1. Open Cloudflare Pages and create a new project with Direct Upload.
2. Upload this whole folder.
3. Deploy the site.

### Option B: Connect a Git repo

1. Push this folder to a GitHub repository.
2. Create a new Cloudflare Pages project with Git integration.
3. Set the root directory to the repository root, because this portfolio is already a standalone project.
4. Leave the build command blank for a plain static site, or use `exit 0`.
5. Set the output directory to `.` so Cloudflare serves the files from the repository root.
6. Deploy.

## Domain

After publishing, connect a custom domain such as `yourname.design` or `yournameux.com`.

Typical budget:

- Hosting: free
- Domain: usually around 10 to 20 USD per year

## Good Next Upgrades

- Add your real LinkedIn and email
- Add one PDF resume link
- Replace sample research text with your own studies
- Add image captions if a screenshot needs more context
- Remove or blur anything confidential before publishing
