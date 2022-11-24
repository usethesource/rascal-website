# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator and [Rascal Tutor](https://github.com/usethesource/rascal-tutor) a documentation generator for Rascal source files and a MarkDown pre-processor for executing inline code fragments, cross linking between courses and screenshotting interactive visualizations.

### Installation
You need NodeJS 14+ installed, and yarn (`npm install --global yarn`)
```
$ yarn
```

### Local Development


``` 
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

This will generate the docs and download docs from projects we depend on, running rascal-tutor:
```
mvn package -Dwebdriver.gecko.driver=/path/to/geckodriver
```

This will then compile the generated/downloaded markdown files to html:
```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
