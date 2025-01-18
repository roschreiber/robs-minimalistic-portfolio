# rob's minimalistic portfolio

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new/roschreiber/portfolio-web-v2?skip_quickstart=true&machine=basicLinux32gb&repo=915006180&ref=master&geo=EuropeWest)


> ❤️ **This project depends on Open Source Software like** ***[Lanyard](https://github.com/Phineas/lanyard)*****,** ***[Astro](https://github.com/withastro/astro)*** **or** ***[Wakatime](https://github.com/wakatime)*** **and wouldn't exist without them.**

## ❓ What is this?

Most portfolio sites look kinda bland & boring and don't actually tell the visitor something about you. This one does. 

It uses ***[Lanyard](https://github.com/Phineas/lanyard)*** to grab your Discord & Spotify Activity on the front page of the website.

(You need to join the Lanyard Discord )

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
