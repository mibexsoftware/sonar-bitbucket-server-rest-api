# Sonar for Bitbucket Server OpenAPI Specification

## Links

- Documentation(ReDoc): https://mibexsoftware.github.io/sonar-bitbucket-server-rest-api/
- Look full spec:
    + JSON https://mibexsoftware.github.io/sonar-bitbucket-server-rest-api/swagger.json
    + YAML https://mibexsoftware.github.io/sonar-bitbucket-server-rest-api/swagger.yaml
- Preview spec version for branch `[branch]`: https://mibexsoftware.github.io/sonar-bitbucket-server-rest-api/preview/[branch]

**Warning:** All above links are updated only after Travis CI finishes deployment

## Working on specification
### Install

1. Install [Node JS](https://nodejs.org/)
2. Clone repo and `cd`
    + Run `npm ci`

### Usage

1. Run `npm start`
2. Checkout console output to see where local server is started. You can use all [links](#links) (except `preview`) by replacing https://mibexsoftware.github.io/sonar-bitbucket-server-rest-api/ with url from the message: `Server started <url>`
3. Make changes using your favorite editor or `swagger-editor` (look for URL in console output)
4. All changes are immediately propagated to your local server, moreover all documentation pages will be automagically refreshed in a browser after each change
**TIP:** you can open `swagger-editor`, documentation and `swagger-ui` in parallel
5. Once you finish with the changes you can run tests using: `npm test`
6. Share you changes with the rest of the world by pushing to GitHub :smile:

### Deployment
1. Merging to master will trigger a Github workflow deploying the latest changes
