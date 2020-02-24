# Trivia Game
By **Matias Benedetto** <matias.benedetto@gmail.com>

Trivia Game app for web and mobile built with **TypeScript, React, React Native, Redux, and Saga**.


## Architecture:

The organization of the codebase was planned to have a large portion of the code shared between the web and native apps to avoid code repetition and make app development more efficient, maintainable and sustainable.

### Shared code
The shared code that lives in `/main/src` contains all the logic and state management tasks and is re-utilized across both apps. All the common dependency packages for both platforms as `react` are listed in the `/main/package.json` file.

### Platform-specific code
The code that lives in `/main/apps/web` and `/main/apps/native` is unique for each kind of platform. This code is related to the navigation and presentational parts of the apps that should be managed differently for each platform.

The specific package dependencies for web (as react-router react-dom, node-sass) are listed on `/main/apps/web/package.json`. The specific package dependencies for native apps (as expo, react-native and react-navigation) are listed on `/main/apps/web/package.json`. To access de common dependencies npm will look upper in the directory hierarchy.

For both Web and Native the project relays on `npm link` to link the dependency of the main module. `npm link` creates a symlink between the main module and the platform module's `node_modules` folder, so the developer can work with all the tooling working as Hot-Reloading and IntelliSense. Even though for react-native `npm link` is not enough because the Metro bundler is not able to follow symlinks so I've should add a specific config for the bundler that lives in `main/apps/native/metro.config.js`.

## Main App (shared)
Path: /main/src
Tech stack: TypeScript, Redux, React-Redux, Redux-Saga, Jest, Axios.
### Commands
**buid:** `npm run build`
**watch:** `npm run watch`
**test:** `npm run test`

## Web App
Based on: create-react-app

Path: `/main/apps/web`

Tech stack: React, React DOM, React-Router, Node-Sass. 

### Commands:
**start:** `npm run start`

## Mobile App
Based on: Expo CLI

Path: `/main/apps/native`

Tech stack: React, React Native, React-Navigation.

### Commands:
**start:** `npm run start`


## TODO:
- Add more tests
- Add more emojis :)
