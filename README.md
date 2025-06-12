# playwright-testkit
Modern Playwright testing boilerplate featuring session storage, POM architecture, headless runs, CI-readiness and some code snippets out of the box.

# Start
npm install playwright@latest

# Useful commands (defined in package.json - scripts)
# start test (with or without ui)
npm test 
npm run test:ui
# start test with trace
npm run trace:on
# start test with trace (for specific test file)
npm test tests/example.spec.ts --trace on
# open trace
npm run trace:show

