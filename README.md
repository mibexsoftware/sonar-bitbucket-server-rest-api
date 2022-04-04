# Sonar for Bitbucket Server OpenAPI Specification

## Steps to finish

1. [Create GitHub access token](https://help.github.com/articles/creating-an-access-token-for-command-line-use/); check `public_repo` on `Select scopes` section.
2. Use the token value as a value for github workflow with the name `secrets.GITHUB_TOKEN`
3. Make a test commit to trigger CI: `git commit --allow-empty -m "Test CI" && git push`
4. Wait until build is finished. You can check progress by clicking on the `Build Status` badge at the top
5. If you did everything correct, https://mibexsoftware.github.io/sonar-bitbucket-server-rest-api/ will lead to your new docs
6. **[Optional]** You can setup [custom domain](https://help.github.com/articles/using-a-custom-domain-with-github-pages/) (just create `web/CNAME` file)
7. Start writing/editing your OpenAPI spec: check out [usage](#usage) section below

## Links

- Documentation(ReDoc): https://mibexsoftware.github.io/sonar-bitbucket-server-rest-api/

## Working on specification

1. `cd rest-api` 
2. Start a simple http server that watches your files e.g. `npx browser-sync start --server --files "*.html, *.yaml"`
3. Make changes using your favorite editor or `swagger-editor` (look for URL in console output)
4. All changes are immediately propagated to your local server, moreover all documentation pages will be automagically refreshed in a browser after each change
**TIP:** you can open `swagger-editor`, documentation and `swagger-ui` in parallel
**TIP:** use the redocly extension in VSCode, nice autocompletion and preview functions
