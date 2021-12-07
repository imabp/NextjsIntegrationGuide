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
3. The current config, shows the published version of your story, in order to view draft version, please change the following file `pages/index.js` at `Line 48` to:

```js
let sbParams = {
    version: "draft", // or 'draft'
  };
```

## Deployment

As it is a Nextjs Codebase, the recommended option to deploy is using Vercel.<br/>
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fimabp%2FNextjsIntegrationGuide)
