# rob's minimalistic portfolio

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new/roschreiber/portfolio-web-v2?skip_quickstart=true&machine=basicLinux32gb&repo=915006180&ref=master&geo=EuropeWest)


> ❤️ **This project depends on Open Source Software like** ***[Lanyard](https://github.com/Phineas/lanyard)*****,** ***[Astro](https://github.com/withastro/astro)*** **or** ***[Wakatime](https://github.com/wakatime)*** **and wouldn't exist without them.**

## ❓ What is this?

Most portfolio sites look kinda bland & boring and don't actually tell the visitor something about you. This one does. 

It uses ***[Lanyard](https://github.com/Phineas/lanyard)*** to grab your Discord & Spotify Activity and displays it on the front page of the website.

(You need to join the Lanyard Discord at [discord.gg/lanyard](https://discord.gg/lanyard) for tracking to work.)

It also shows visitors your coding stats in a fancy cake diagram through ***[Wakatime](https://github.com/wakatime)***, whilst displaying information about your **GitHub** Repos and Projects.

The API Keys for all of the services above are defined through Vercel's ENV. See more down Below.

## 🚀 Building and deploying

### 🔨 Building the website

This project uses Astro. After downloading, simply run `npm i` to install all Node Packages the website depends on.

After that run `npm run build` (to build locally!) or `vercel --prod` to deploy to Vercel. 

Now, change the website header to not say "rob" (because im rob already!) and change whatever else you want.

### 🔑 Environment Variables & APIs

After downloading & deploying it to Vercel, please configure the following environment variables: 

| ENV                   | Usage                                           |
| :------------------------ | :----------------------------------------------- |
| **`DISCORD_ID`**             | Your discord user ID.                            |
| **`WAKATIME_KEY`**             | Wakatime API Key.      |
| **`GITHUB_USERNAME`**             | Wakatime API Key.      |

Now, head to the ```CodingStatsBox.astro``` file and change following endpoint's URL:

```https://waka.hackclub.com/api/v1/users/current/stats/last_7_days?api_key=``` 

to whatever URL your Wakatime server uses.

## 👀 What do you plan to do in the future?

I don't know yet. I'm currently planning to clean everything up and fix all bugs before maybe adding the **Stats.fm** API to display your top listened to Spotify songs on a seperate page.

### 🤑 rob's minimalistic portfolio is perfect and i use it for everything i do! Do i need to credit you?

Sorry, but rob's minimalistic portfolio actually isn't that perfect. It's full of spaghetti code which is held together by duct tape.

And no, you do not need to give me any type of attribution, but if you do want to give me some credit for building the sheer perfect portfolio website, go for it!