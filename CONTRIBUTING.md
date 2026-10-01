# Contributing to Buildtober

Thanks for helping more people learn by building. The most useful contribution is a good project idea.

## Add an idea

The idea bank is the `RAW` array near the top of the script in `index.html`. Each idea is one line:

```js
[level, category, theme, "Title", "The real-world problem it solves.", "A first step to take."],
```

- **level**: `1` quick win (an hour or two), `2` solid build (an evening), `3` showcase (a weekend).
- **category**: `"c"` for cyber, `"d"` for general dev.
- **theme**: one of `intel`, `ai`, `detect`, `cloud`, `grc`, `human`, `dev`.

A good idea names a real problem in plain English, can be built by one person within its level, and has a first step someone can take in minutes.

## Ground rules

- Keep ideas defensive or educational. No offensive tooling, malware development or anything aimed at systems the builder does not own.
- Prefer test data, synthetic data and public samples.
- Write in plain, concise British English and end each sentence with a full stop.
- Do not add trackers, analytics or external network calls. Progress is stored in the visitor's browser only.

## Check your change

```bash
npm run validate
```

This checks field counts, levels, themes, duplicate titles and minimum coverage per level. Then open `index.html` in a browser and roll a few ideas.

## Pull requests

Keep each pull request to one focused change, explain what it adds and why, and mention the level and theme for new ideas. Small, tidy pull requests are reviewed fastest.

## Not sure?

Open an issue using the "Suggest a project idea" template and it can be added for you.
