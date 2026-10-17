# Sereinly

A responsive React + TypeScript self-help application with a spacious arrival page, a gentle interactive pause, an explorable support map, a sourced knowledge library, a private dashboard and encrypted local records. This is a local implementation; it has not been deployed or clinically validated.

New to the project? Start with the [Sereinly handbook](HANDBOOK.md): a plain-language tour of the app, code, storage, common edits, testing, and GitHub automation.

## Run

Use Node.js 24 (also recorded in `.nvmrc`) and npm. Other supported versions are listed in `package.json`. On Windows with PowerShell script restrictions, use `npm.cmd`.

```sh
npm ci
npm run dev
npm run typecheck
npm run build
npm test
npm run test:e2e
```

Browser tests automatically start their server and use locally installed Google Chrome. In CI, they start a production preview and use Playwright's bundled Chromium. `PLAYWRIGHT_CHANNEL` can override the browser channel for a particular environment. The privacy/crypto tests run without a browser. `node scripts/capture-ui.mjs` captures desktop and mobile previews under ignored `.qa/`; `node scripts/audit-accessibility.mjs` checks the arrival page in light and dark themes. Those standalone scripts still need a running development server and installed Chrome.

## GitHub automation

[App checks](.github/workflows/ci.yml) runs on pushes, pull requests, and manual starts. It installs locked dependencies, checks types, runs unit tests, builds the site, and runs browser/accessibility tests against the build. Reports and successful production files are kept as downloadable artifacts for seven days.

[Dependency audit](.github/workflows/dependency-audit.yml) checks for known dependency vulnerabilities weekly and on manual starts. High or critical findings fail the audit. [Dependabot](.github/dependabot.yml) proposes weekly dependency and Actions updates.

The workflows need no application secrets and do not deploy the site. They start working after these files are pushed to a GitHub repository with Actions enabled. See the [handbook](HANDBOOK.md#what-github-actions-does) for setup and how to read results.

## Structure

```text
src/main.tsx       Application, accessible dialogs, navigation, interactive modules
src/Welcome.tsx    Arrival page, breathing bloom, local rain audio, support map, library
src/SiteHeader.tsx Responsive site navigation and persistent support access
src/wellbeing.ts   Original library notes with NHS source links and support-map paths
src/data.ts        Typed schema, sample records, AES-GCM vault, CSV export
src/data.test.ts   Encryption, authentication, tamper detection, CSV tests
src/style.css     Responsive design, themes, motion and print styles
src/welcome.css   Sereinly visual identity, arrival and library layouts
tests/            Browser navigation, vault migration and accessibility checks
vite.config.ts    React and Tailwind integration
```

## Data schema and persistence

`Data` contains name, nonclinical focus preferences, mood records, journal records, self-care seeds, completed actions, seven safety-plan fields, parked worries, worry schedule, and accessibility preferences. `Mood` stores ISO date, mood (1–10), energy (1–10), anxiety (0–10), sleep hours (0–24), emotions, triggers, and medication adherence. `Entry` stores ISO date, kind, and ordered reflection values. See `src/data.ts` for the complete schema.

Data stays in memory until a user enables saving. The `sereinly-v1` localStorage record is a versioned envelope containing base64 salt, IV, and ciphertext. AES-256-GCM authenticates ciphertext, PBKDF2-SHA256 derives the key with 310,000 iterations, and each save uses a fresh random 16-byte salt and 12-byte IV. No password or key is persisted. There is no recovery. Use HTTPS or localhost for Web Crypto. No third-party analytics, remote assets, cloud database, or authentication service is configured. Locking removes visible session data; browser memory cannot be securely wiped by JavaScript. An unlocked device or malicious scripts can access decrypted data. Exports intentionally contain plaintext and must be handled carefully.

Existing vaults from the previous app name remain readable. On successful unlock, data is encrypted and written under the Sereinly storage key before the legacy record is removed. A failed write leaves the legacy vault intact. The previous name remains only in the migration code and tests, not the user interface. Downloads, package metadata, document title, favicon, privacy copy and printed content use Sereinly.

## Design and naming research

The reference at https://mindheaven.life/ was inspected on 17 October 2026. The redesign adapts its spacious typography, interactive network exploration and knowledge-library concept to a self-help context. The support map opens actual exercises; library notes are original summaries that link to NHS guidance. It does not invent researchers, affiliations, AI capabilities, clinical outcomes or supplement claims.

The new name is **Sereinly**. Exact-name and app/brand web searches on 17 October 2026 found no obvious existing exact-name app or brand. Search visibility does not establish legal uniqueness; trademark and domain availability have not been verified.

The opening experience offers a quiet minute without an account or a mandatory check-in. Breathing visuals only animate after an explicit start. Sound is off by default and synthesized in the browser without downloads. Reduced-motion preferences disable the bloom animation while keeping text guidance available. The user can pause, leave, switch to sensory grounding, or open support at any time. This is designed to reduce pressure; immediate relief is not promised.

Sample mood data is separate from personal records; sample data is never exported as personal data. An example CBT record is available from the empty journal. The body map and emotion choices work without stored data. Browser Print / Save PDF exports the personal summary and CBT records; CSV exports personal mood records. Cloud sync is optional in the brief and is not implemented. No API secrets are needed.

## Clinical and product boundaries

The task breakdown is an editable rule-based guide, not an AI service. Worry time is a user-controlled compartment with a daily time setting, not an access lock or background notification. Focus and urge timers run while the tab is active; browsers may throttle background timers. Haptics depend on browser support. The emotion map is an emotion-selection aid, not a diagnostic assessment. TIPP uses gentler alternatives and explicit skip choices; it does not prescribe intense exercise or extreme cold. No app behavior diagnoses bipolar disorder, predicts risk, or changes medication. Sereinly is not emergency care.

The crisis panel uses an explicit country choice, defaults to India based on the requested locale, and does not request geolocation. Tele-MANAS was verified through the supplied hotline service on 17 October 2026. Other countries currently receive local emergency/provider guidance rather than unverified telephone numbers.

Clinical references used for cautious breathing instructions and safety-plan structure:
- NHS breathing guidance: https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/
- VA safety plan: https://www.ptsd.va.gov/appvid/mobile/safety_plan_app.asp

Before a public healthcare launch, obtain clinical content review, an independent security review, accessibility testing with assistive technologies, and jurisdiction-specific privacy/legal review. The arrival page passes automated axe WCAG A/AA checks in light and dark themes; this does not certify the entire application or replace manual assistive-technology testing. Production healthcare readiness has not been certified.
