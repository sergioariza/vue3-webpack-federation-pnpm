# Vue 3 + Webpack Module Federation + pnpm Monorepo
Microfrontend architecture using Vue 3, Webpack 5 Module Federation and pnpm workspaces.

---

## 🧠 Overview
This repository demonstrates a **microfrontend architecture** using:

- Vue 3
- Webpack 5 Module Federation
- pnpm workspaces
- Shared internal packages

It includes:

- 🟢 Host application (shell)
- 🔵 Remote applications (microfrontends)
- 📦 Shared packages (design system / utilities)

---

## 🏗️ Architecture
```
host-app
↓
remote-app(s)
↓
shared packages (@my/ui, utils)
```
---

## 📦 Structure
```
apps/
├── host-app/ # Shell application
└── remote-app/ # Microfrontend (exposed module)
packages
└── ui/ # Shared components library
```
---

## ⚙️ Tech Stack
- Vue 3
- Webpack 5
- Module Federation Plugin
- pnpm Workspaces
- Babel

---

## 🚀 Getting Started
### 1. Install dependencies
```bash
pnpm install
```

### 2. Run all apps
```bash
pnpm dev
```

This runs:
- Host → http://localhost:3000
- Remote → http://localhost:3001

---

## 🧪 Testing

### Host App Testing
```bash
cd apps/host-app
pnpm test
```

**Test Stack:**
- Jest with jsdom test environment
- @vue/vue3-jest for Vue SFC transformation
- @testing-library/vue for component testing
- Federated modules mocked via moduleNameMapper

**Key Test Files:**
- `apps/host-app/jest.config.js` – Jest configuration
- `apps/host-app/jest.setup.js` – Test environment setup
- `apps/host-app/.babelrc.js` – ES6 transpilation for tests
- `apps/host-app/tests/` – Test files
