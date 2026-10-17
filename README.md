# Sereinly

**A little less noise. A little more you.**

Visit the app: [**sereinly.vercel.app**](https://sereinly.vercel.app/)

Sereinly is a mental-health self-help companion designed to offer a gentle place to pause, reflect, and take a manageable next step. It brings together interactive exercises, mood tracking, journaling, and educational notes in a calm, responsive interface.

You can explore without creating an account. Choose what feels helpful, skip what does not, and move at your own pace.

## What you can do

### Take a quiet moment

- Try a guided quiet minute with a breathing-flower visual and start/pause controls.
- Turn optional soft-rain audio on or off; sound stays off until you choose it.
- Explore an interactive support map with paths for calm, grounding, reflection, focus, low energy, and urge surfing.

### Find a tool for how you feel

| Tool | What it offers |
| --- | --- |
| **Breathing space** | Visual pacing for box breathing, 4–7–8 breathing, and physiological sighs, with optional sound and supported-device haptic cues. |
| **Sensory grounding** | A guided 5–4–3–2–1 exercise, with space to write observations and the option to skip a sense. |
| **Thought challenger** | A five-step reflection covering a situation, automatic thought, thinking patterns, evidence, and a balanced perspective. |
| **The spoon menu** | Small self-care actions matched to zero, low, or medium energy. |
| **Task breakdown & focus timer** | An editable, rule-based way to divide an overwhelming task into smaller steps, paired with a focus timer. |
| **Urge surfing** | A visual timer for noticing an urge and delaying a response in small increments, with an optional anxiety reflection. |
| **Worry time** | A place to park worries and choose a daily 15-minute window to return to them. |
| **Emotion & body check** | Select feelings and mark sensations on an interactive body map. |
| **TIPP skills** | A step-by-step walkthrough of distress-tolerance options, including gentler alternatives and skip choices. |
| **Dopamine menu** | An editable menu of restorative activities grouped into starters, mains, sides, and desserts. |
| **A small good thing & free writing** | Keep a tiny win, a compassionate moment, a gratitude reflection, or an open-ended journal entry. |

### Make the space your own

- Choose focus areas without being asked to adopt a clinical label.
- Receive dashboard suggestions based on your focus and latest energy or anxiety check-in.
- Grow self-care seeds through engagement, without streak resets or penalties for missed days.
- Use **My space** to move between your overview, mood insights, journal, safety plan, and settings.

### Notice patterns over time

- Log mood, energy, anxiety, sleep hours, emotions, triggers, and medication adherence.
- Explore mood, sleep, and anxiety charts across **7, 30, or 90 days**, with a table alternative.
- View a descriptive sleep–anxiety association when enough varied records are available. Patterns do not establish cause or provide a diagnosis.
- Explore clearly labeled sample data separately from personal records.
- Export personal mood records as **CSV**, create a printable summary with **Print / Save PDF**, or download a readable JSON copy of your records.

### Read, reflect, and reach support

- Browse **The quiet library** for short notes on worries, comfortable breathing, thought reflections, and sleep, with links to NHS source guidance.
- Open **I need support** from the header for grounding and your safety plan.
- Build a personal safety plan covering warning signs, coping strategies, supportive people and places, professional support, a safer environment, and a trusted contact.
- Use a saved trusted-contact number for one-tap calling. The support panel currently includes an India-specific resource and general guidance for other countries; it does not detect your location.

## Comfort and accessibility

Sereinly includes responsive desktop and mobile layouts, light and dark themes, reduced-motion support, a high-contrast option, and a readable-font setting with wider spacing. Interactive controls support keyboard use, and dialogs have accessible labels.

The opening page has passed automated accessibility checks in light and dark themes. This does not certify every screen or replace manual testing with assistive technologies.

## Your privacy and your records

- **No account required:** the current app has no cloud sync or analytics service configured.
- **Session-only by default:** personal records stay in the current tab until encrypted saving is enabled. Closing or reloading can lose unsaved session records.
- **Optional encrypted vault:** protect saved records on your device using a passphrase. The app uses AES-256-GCM encryption and does not store the passphrase.
- **Your browser, your site address:** records do not automatically move between browsers, devices, or different website addresses.
- **Exports are readable:** CSV, PDF, and JSON copies contain personal information and should be shared deliberately.

There is no passphrase recovery. The current interface can export a JSON copy but does not include a JSON import screen. See the [handbook's privacy explanation](HANDBOOK.md#where-personal-information-goes) for details.

## About the project

Sereinly is built with **React, TypeScript, Vite, Tailwind CSS, Lucide icons, Framer Motion, and Recharts**. Its exercises and records run in the browser; the task breakdown is rule-based rather than an AI service.

- [Sereinly handbook](HANDBOOK.md): a plain-language guide to the code, data flow, privacy, and GitHub automation.
- [Optional local development README](README.local.md): setup, previews, tests, and development troubleshooting for contributors.

**Sereinly is a self-help companion, not a replacement for clinical diagnosis, treatment, or emergency care.** It does not diagnose conditions, prescribe medication changes, or guarantee immediate relief. For further context, see the [product notes and current limits](HANDBOOK.md#product-notes-and-current-limits).
