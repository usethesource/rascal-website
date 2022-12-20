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
mvn package -Dwebdriver.chrome.driver=/path/to/geckodriver -Dwebdriver.chrome.browser=/path/to/google\ chrome
```

Without the webdriver parameters no screenshots will be taken from `Content` output in `rascal-shell` examples.

This will then compile the generated/downloaded markdown files to html:
```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service, but this will typically start a server for you to test the result:

```
$yarn serve
```

### Deployment

The `main` branch is automatically deployed immediately after `git push` to the github origin.


