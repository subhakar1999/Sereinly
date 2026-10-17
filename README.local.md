# Optional local development — Sereinly

This guide is for people who want to run or change the app on their own computer. You can deploy using only the Vercel website by following the [main README](README.md#deploy-to-vercel).

## Get the project

Install Git, Node.js 24, and npm. If the source is not already on your computer, clone the repository:

```sh
git clone https://github.com/subhakar1999/Sereinly.git
cd Sereinly
```

## Get it running

Use **Node.js 24** and npm. Node.js runs the development tools; npm installs the libraries the app uses. The `.nvmrc` file tells compatible version managers which Node version this project recommends. Ordinary app visitors do not need either tool.

Open a terminal in the project folder and run:

```sh
npm ci
npm run dev
```

Open the local address printed in the terminal. Editing a source file normally updates the browser automatically. Stop the server with **Ctrl+C** when finished.

On Windows, if PowerShell blocks `npm.ps1`, use `npm.cmd` in place of `npm`:

```powershell
npm.cmd ci
npm.cmd run dev
```

`npm ci` installs the exact dependency versions recorded in `package-lock.json`. Keep that file with the project; it helps your computer and GitHub use the same libraries.

To inspect the production build:

```sh
npm run build
npm run preview
```

The build creates the `dist/` folder. Preview serves those finished files locally. Development and preview servers are local tools, not public deployments.

Local browser tests use Google Chrome. Install it if you plan to run those tests. The app itself can be opened in other supported modern browsers.

## Check your work

The project has different checks because different mistakes need different tools.

| Command | What it checks |
| --- | --- |
| `npm run typecheck` | Inconsistent TypeScript types and unused code in the app source. |
| `npm test` | Small code-level checks, especially privacy, exports, and migration. |
| `npm run build` | Whether TypeScript and Vite can produce the finished site. |
| `npm run test:e2e` | Real browser interactions, including vault use, mobile navigation, and homepage accessibility checks. |

Browser tests start their own server and stop it when finished. Locally they use installed Google Chrome and can reuse a development server already running at `http://127.0.0.1:5173`. You do not need to start a separate server just for these tests.

For an HTML summary after a browser-test run:

```sh
npx playwright show-report
```

Failures can also produce screenshots and traces in `test-results/`. A trace is a replayable record of the automated test's actions. The tests use fictional information and isolated browser contexts.

The standalone scripts `scripts/capture-ui.mjs` and `scripts/audit-accessibility.mjs` still need a running development server and installed Chrome. The first captures desktop and mobile images; the second prints accessibility findings. The test suite is the automation that fails when its accessibility assertions fail. An automated pass does not certify every screen or replace testing with assistive technologies.

## Local troubleshooting

| What you see | What to try |
| --- | --- |
| PowerShell says `npm.ps1` cannot be loaded. | Use `npm.cmd` instead. No PowerShell policy change is needed. |
| npm reports an unsupported Node version. | Use Node 24. The exact accepted range is recorded in `package.json`. |
| `npm ci` says the package files disagree. | If you intentionally changed dependencies, run `npm install`, then include both package files in the change. Otherwise restore the matching lockfile. |
| A local browser test cannot find Chrome. | Install Google Chrome, or run `npx playwright install chrome`, then retry. This installation may need operating-system permission. |
| Port 5173 is busy. | Stop an old development or preview server. CI deliberately refuses to reuse an existing server. |
| The CI preview cannot find the production files. | Run `npm run build` before CI-mode browser tests. The supplied workflow already does this. |

## Keep generated files out of commits

The existing `.gitignore` excludes installed packages, builds, browser binaries, screenshots, test reports, and `.env` files. Commit source changes and intentional dependency updates, including both package files. Use fictional personal records when testing or sharing screenshots.

For the code map and editing examples, read the [handbook](HANDBOOK.md). For hosting, return to the [Vercel deployment guide](README.md).
