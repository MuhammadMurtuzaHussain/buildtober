# Buildtober

**31 days. 31 things worth building.**

A free October build-along for anyone who wants to skill up by making things in public. Pick a level, roll an idea that solves a real problem, ship it and stick a sticker on your sheet for every day you build.

Live site: `https://muhammadmurtuzahussain.github.io/buildtober/` (replace after enabling GitHub Pages)

## What you get

- **Idea generator.** Press Level 1, 2 or 3 and get a project idea with the problem it solves and a first step. Filter by theme, including open-source AI.
- **Sticker sheet.** Pin ideas to days of October, log progress and earn a sticker for every build you ship. Tracks your streak.
- **Share drafts.** Generate an editable post for each day.
- **Starter kit.** A repository layout and README template for your own October repo.
- **Hacktoberfest 2026 notes.** Key dates and a challenge log. Hacktoberfest 2026 is about learning and building with open-source AI, and pull requests no longer count towards rewards.

## The levels

| Level | Name | Time | What it means |
| --- | --- | --- | --- |
| 1 | Quick win | An hour or two | One clear job: a single script, page or tool. |
| 2 | Solid build | An evening | A small app or tool with tests and a proper README. |
| 3 | Showcase | A weekend | Several parts, docs and a demo. Worth a write-up. |

## Run it

It is one static file with no build step and no dependencies. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Progress is saved in your browser's local storage on your device only. Nothing is sent anywhere. There is a copy-and-paste backup under the Hacktoberfest section.

## Contribute

Ideas are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for the one-line format, ground rules and `npm run validate`.

## Deploy

A GitHub Actions workflow validates the idea bank and publishes the site with GitHub Pages on every push to `main`. See [GITHUB-SETUP.md](GITHUB-SETUP.md).

## Licence and credit

Released under the [MIT licence](LICENSE). Created by [Muhammad Murtuza Hussain](https://muhammadmurtuza.com).

Buildtober is an independent community project. It is not affiliated with or endorsed by Hacktoberfest, MLH, DEV or DigitalOcean.
