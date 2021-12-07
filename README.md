## Introduction

This is NextJS and Storyblok Integration Guide.

## Steps
1. Install Dependencies `npm i` 
2. Create `.env.local` as per `.env.sample` 
3. Get a token, from Storyblok Interface and append it in the `.env.local`
4. Run `npm run dev` 
5. View your presentation at : `http://localhost:3000`


## Project Config.

1. lib/storyblok.js -> Function Signature of useStoryblok hook and Initialization of Storyblok API.
2. components/DynamicComponent.js -> Used for Component mapping, used to map storyblok components, to React Components.
3. The current config, shows the published version, in order to view draft version, please change the following file `pages/index.js` at `Line49` to:

```js
let sbParams = {
    version: "draft", // or 'draft'
  };
```

## Deployment
You can deploy this site to Vercel.