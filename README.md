# 🎭 playwright-testkit

A modern Playwright testing boilerplate featuring:

- ✅ Session-based login (via storage state)
- 📦 Page Object Model (POM) structure
- 🧪 Headless and headed test runs
- 🔄 Built-in trace recording and report viewing
- 🚀 CI-ready with modular structure
- ✂️ Useful test snippets out of the box

---

## 🚀 Getting Started

Install Playwright (if not already):

```bash
npm install playwright@latest
```

---

## 📜 Available Scripts

Defined in `package.json` under `"scripts"`:

| Command                        | Description                              |
|-------------------------------|------------------------------------------|
| `npm test`                    | Run all tests (headless mode)            |
| `npm run test:ui`             | Open Playwright's test runner UI         |
| `npm run trace:on`            | Run tests with trace recording enabled   |
| `npm test tests/example.spec.ts -- --trace on` | Run a specific test file with trace |
| `npm run trace:show`          | Open the trace viewer                    |

---

## 📁 Folder Structure

```
playwright-testkit/
├── tests/                # Test specs
├── pages/                # Page Object files
├── fixtures/             # Shared setup/login fixtures
├── utils/                # Helpers and mock data
├── storage/              # storageState.json for session reuse
├── playwright.config.ts  # Global config
├── global-setup.ts       # Setup file (e.g., login once)
└── README.md
```

---

Feel free to fork, clone, and build on top of it!