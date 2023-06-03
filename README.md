<img src="static/img/logo-sticker.svg" alt="Rowy Docs" height="60" />

Documentation website of Rowy built using [Docusaurus](https://docusaurus.io/).

### Updating the changelog

Run the script `generate-changelog.js` in Node.

```
node generate-changelog
```

### Installation

```
yarn install
```

### Local Development

```
yarn start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

### Build

```
yarn build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service.

### Deployment

```
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to
build the website and push to the `gh-pages` branch.
