# Trivia Game
By **Matias Benedetto** <matias.benedetto@gmail.com>

Trivia Game app for web and mobile built with **TypeScript, React, React Native, Redux, and Saga**.

You can use the web version here: https://triviagame.matiasbenedetto.now.sh/

![Screenshots](https://user-images.githubusercontent.com/1310626/75196164-2e04af00-573a-11ea-933c-78978b56076d.png)

## Architecture:

The organization of the codebase was planned to have a large portion of the code shared between the web and native apps to avoid code repetition and make app development more efficient, maintainable and sustainable.

### Shared code
The shared code that lives in `/main/src` contains all the logic, API data fetching and state management tasks and is re-utilized across both apps. All the common dependency packages for both platforms as `react` are listed in the `/main/package.json` file.

### Platform-specific code
The code that lives in `/main/apps/web` and `/main/apps/native` is unique for each kind of platform. This code is related to the navigation and presentational parts of the apps that should be managed differently for each platform.

The specific package dependencies for web (as react-router react-dom, node-sass) are listed on `/main/apps/web/package.json`. The specific package dependencies for native apps (as expo, react-native and react-navigation) are listed on `/main/apps/web/package.json`. To access de common dependencies npm will look upper in the directory hierarchy.

For both Web and Native the project relays on `npm link` to link the dependency of the main module. `npm link` creates a symlink between the main module and the platform module's `node_modules` folder, so the developer can work with all the tooling working as Hot-Reloading and IntelliSense. Even though for react-native `npm link` is not enough because the Metro bundler is not able to follow symlinks so I've should add a specific config for the bundler that lives in `main/apps/native/metro.config.js`.

![Structure](https://user-images.githubusercontent.com/1310626/75196162-2cd38200-573a-11ea-8385-e4b2c1681b9a.png)

## Main App (shared)
- Path: /main/src
- Tech stack: TypeScript, Redux, React-Redux, Redux-Saga, Jest, Axios.
- **buid:** `npm run build`
- **watch:** `npm run watch`
- **test:** `npm run test`

## Web App
- Based on: create-react-app
- Path: `/main/apps/web`
- Tech stack: React, React DOM, React-Router, Node-Sass. 
- **start:** `npm run start`

## Mobile App
- Based on: Expo CLI
- Path: `/main/apps/native`
- Tech stack: React, React Native, React-Navigation.
- **start:** `npm run start`


## TODO:
- Add more tests
- Add more emojis :)

## Developed and tested with
- Node 12.13.1
- NPM 6.13.7
- Native app tested on Android 9
