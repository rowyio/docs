<img with="300" src="https://user-images.githubusercontent.com/307298/134683363-0f13f9a0-b9f7-44cf-897a-db3594f8c814.png"/>

Documentation website of Rowy built using [Docusaurus](https://docusaurus.io/).


### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
