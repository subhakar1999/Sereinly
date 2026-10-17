# Sereinly

A gentle mental-health self-help companion with breathing and grounding tools, a quiet library, mood reflections, journaling, and an optional encrypted personal vault.

## Deploy to Vercel

Deploy directly from GitHub using the Vercel website. You can complete these steps in your browser.

### 1. Sign in to Vercel

Open [Vercel](https://vercel.com/) and sign in with GitHub. For an eligible personal, non-commercial project, choose the free Hobby plan. It has usage limits; commercial projects require a suitable paid plan. See the current [Hobby plan details](https://vercel.com/docs/plans/hobby).

### 2. Import the repository

1. In the Vercel dashboard, select **Add New → Project**.
2. Under **Import Git Repository**, find [subhakar1999/Sereinly](https://github.com/subhakar1999/Sereinly).
3. If it is missing, use the GitHub account or app-permissions option to grant Vercel access to this repository.
4. Select **Import** and choose a project name, such as `sereinly` if available.

### 3. Confirm the build settings

Vercel should detect Vite. Use these settings for this repository:

| Setting | Value |
| --- | --- |
| Framework preset | **Vite** |
| Root directory | Repository root (`./`); do not select `src` |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node.js version | **24.x** |
| Environment variables | None required for the current app |

Enter the install and build commands in Vercel's configuration fields; Vercel runs them during deployment. The current app does not require a database, API key, or application server.

Node.js 24.x is currently Vercel's default. If needed, select **24.x** under the project's **Settings → Build and Deployment → Node.js Version** and redeploy. See Vercel's [Node.js version guide](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions).

### 4. Deploy and open the site

1. Select **Deploy**.
2. Wait for the installation and build to finish. If a step fails, open the deployment's build logs and check the settings above.
3. When the deployment is ready, select **Visit** and open its production URL.
4. Use the assigned Vercel domain to share the app. A custom domain is optional.

The framework integration is described in the official [Vite on Vercel guide](https://vercel.com/docs/frameworks/frontend/vite).

### 5. Check the deployed app

1. Open the homepage on a desktop and a phone. Start and pause a quiet minute; sound should remain off until selected.
2. Open the toolkit and try a grounding or thought-reflection flow.
3. Open **My space**, add a fictional check-in or journal entry, and confirm it appears in the relevant screen.
4. If you want to check persistence, enable the encrypted vault using a test passphrase, reload, and unlock it again. Erase your test records afterward from Settings.
5. Open **I need support** and confirm the safety and grounding options remain accessible.

Use the stable production URL for ongoing use. Records are saved in the visitor's browser, scoped to that browser profile and site address. A different preview URL, custom domain, browser, or device does not automatically share an existing vault. There is no cloud sync or passphrase recovery.

### 6. Publish future updates

Confirm that the Vercel project's production branch is `main`. Subsequent pushes or merges to that branch trigger new production deployments through the GitHub integration; other branches can receive preview deployments. See [Vercel for GitHub](https://vercel.com/docs/git/vercel-for-github).

The repository's [GitHub Actions](.github/workflows/ci.yml) check the code and save test reports. Vercel handles hosting through its own integration. These are separate processes; this repository does not configure deployment to wait for GitHub Actions to pass.

## Deployment troubleshooting

| Problem | Check |
| --- | --- |
| The repository is not listed in Vercel. | Confirm the connected GitHub account and grant the Vercel GitHub app access to `subhakar1999/Sereinly`. |
| Vercel cannot find `package.json`. | Set the root directory to the repository root. |
| The build cannot find its output. | Use `npm run build` and output directory `dist`. Read the first error in the build logs. |
| The build reports an unsupported Node version. | Select Node.js **24.x** in the project settings, then redeploy. |
| A change is not showing. | Check that the production deployment uses the latest `main` commit and that the deployment succeeded. |
| Records are missing on a new URL. | Return to the browser and exact site address where the vault was created. Deploying does not move personal records between addresses. |

## Documentation

- [Sereinly handbook](HANDBOOK.md): understand the code, data flow, privacy, and GitHub automation.
- [Optional local development README](README.local.md): installation, local previews, tests, screenshots, and development troubleshooting.

Sereinly is a self-help companion, not a replacement for clinical diagnosis, treatment, or emergency care. Deployment does not establish clinical, security, or accessibility certification. See the [product notes and current limits](HANDBOOK.md#product-notes-and-current-limits) before planning a public healthcare launch.
