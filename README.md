# Astro Starter Kit: Basics

```
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![basics](https://user-images.githubusercontent.com/4677417/186188965-73453154-fdec-4d6b-9c34-cb35c248ae5b.png)


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── tap.wav
│   └── win.mp3
├── src/
│   ├── components/
│   │   └── App.jsx
        └── Card.astro
        └── Dashboard.jsx
        └── Game.jsx
        └── GamerInput.jsx
        └── Header.astro
        └── Image.jsx
        └── ImageContainer.jsx
        └── Key.jsx
        └── Keyboard.jsx
        └── Loader.jsx
        └── NextChallenge.jsx
        └── Presentational.jsx
        └── Square.jsx
        └── TapSound.jsx
        └── WinnerAnimation.jsx
        └── WinnerInterface.jsx
        └── WinnerMessage.jsx
│   ├── functions/
│   │   └── checkWin.js
│   └── layouts/
│       └── Layout.astro
    └── pages/
        └── about.astro
        └── game.astro
        └── index.astro
        └── launch.astro
    └── reducers/
        └── Dashboard.js
        └── ImageReducer.js
        └── Puzzle.js
        └── store.js
    └── services/
        └── firebase.js

└── package.json
```

This app is based on the Static Site Generator called ASTRO. The same uses extensions like `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

This route: `src/components/` contains React components from which the game runs.

Any static assets, like sounds, have been placed in the `public/` directory.

Other important assets like challenges and the respective images come from a Firebase Database.

## 🧞 Commands used from ASTRO

All these commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

All of the above where used in development. Apart from these, others were required, like the following:

## 🧞 Commands used from Firebase CLI

Firebase offers a Command Line Interface (CLI) for initializing Firebase projects, and so avoiding to go directly to their page for doing it. This offers more productivity since you will not be waiting for loading Firebase page graphic interfaces and you can take avantage of your typing/coding skills in the terminal.

| Command                  | Action                                           |
| :---------------------   | :----------------------------------------------- |
| `firebase projects:list` | If you have not installed Firebase in your local machine yet, run this |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
