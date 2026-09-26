# LordsOfBoards

A task and project management app, in the spirit of a to-do list or Jira / Azure DevOps boards.

- **Backend:** Python 3.12+, FastAPI, Uvicorn, pytest (`backend/`)
- **Frontend:** React + TypeScript, Vite, Vitest, ESLint (`frontend/`)

Each section below gives the terminal command and then says whether and how you can do the same thing in **IntelliJ IDEA Community**.

> **IntelliJ Community in short:** Python works well once you install the free **Python** plugin. JavaScript/TypeScript support (TS checking, ESLint/Prettier, npm run configurations) is **Ultimate-only**. For the frontend, use the built-in terminal or a **Shell Script** run configuration, or edit it in WebStorm (free for non-commercial use) or VS Code.

---

## Prerequisites

| Tool | Version |
|------|---------|
| Python | 3.12+ |
| Node.js + npm | Node 18+ (LTS recommended) |

**IntelliJ Community:** Go to *Settings → Plugins → Marketplace* and install **Python** (by JetBrains). **Ruff** is optional and adds linting and formatting for the backend.

---

## Backend (`backend/`)

### 1. Create a virtual environment and install dependencies

```bash
cd backend
python -m venv .venv

# Windows
.venv\Scripts\activate
# macOS / Linux
source .venv/bin/activate

pip install -r requirements.txt
```

**IntelliJ Community: Yes.**
1. Go to *File → Project Structure → SDKs*, click **+** and choose **Add Python SDK → Virtualenv Environment**.
   - Choose **New** to create `backend/.venv`.
   - Or choose **Existing** and select `backend/.venv/Scripts/python.exe` (Windows) or `backend/.venv/bin/python` (macOS/Linux).
2. Go to *Project Structure → Modules* and set that SDK on the module.
3. Open `requirements.txt`. IntelliJ offers an **Install requirements** banner, or you can run `pip install -r requirements.txt` in the built-in terminal (*View → Tool Windows → Terminal*).

### 2. Run the API server (dev mode, auto-reload)

```bash
cd backend
uvicorn app.main:app --reload
```

- API: http://localhost:8000
- Health check: http://localhost:8000/health
- Interactive docs (Swagger): http://localhost:8000/docs

**IntelliJ Community: Yes, with a Python run configuration.** The dedicated FastAPI run configuration is Ultimate-only.
1. Go to *Run → Edit Configurations → + → Python*.
2. Switch *Script path* to **Module name** and enter `uvicorn`.
3. Set *Parameters* to `app.main:app --reload`.
4. Set *Working directory* to `backend`.
5. Pick the `.venv` interpreter.

Run it with ▶ or debug it with 🐞. Breakpoints work.

### 3. Run tests

```bash
cd backend
pytest
```

**IntelliJ Community: Yes.** Right-click `backend/tests` and choose **Run 'pytest in tests'**, or click the green gutter icon next to a test. If IntelliJ doesn't pick up pytest, set it under *Settings → Tools → Python Integrated Tools → Default test runner: pytest*.

### 4. Lint and format

Ruff is configured in `pyproject.toml` but is not in `requirements.txt` yet, so install it first:

```bash
pip install ruff
ruff check .          # lint
ruff check . --fix    # lint and auto-fix
ruff format .         # format
```

**IntelliJ Community: Yes.**
- The built-in Python inspections and formatter (*Code → Reformat Code*, `Ctrl+Alt+L`) work out of the box.
- For ruff, install the **Ruff** plugin, then enable it under *Settings → Tools → Ruff*. You can also turn on "format on save" there.

### 5. Build

The backend has no build step. Python runs directly from source.

---

## Frontend (`frontend/`)

### 1. Install dependencies

```bash
cd frontend
npm install
```

**IntelliJ Community: Only through the terminal.** npm integration (the "npm install" banner and the npm tool window) is Ultimate-only. Run `npm install` in the built-in terminal.

### 2. Run the dev server

```bash
cd frontend
npm run dev
```

The app is served at http://localhost:5173 and calls the backend at http://localhost:8000, so start the backend too.

**IntelliJ Community: Yes, with a Shell Script run configuration.** npm run configurations are Ultimate-only.
1. Go to *Run → Edit Configurations → + → Shell Script*.
2. Set *Execute* to **Script text** and enter `npm run dev`.
3. Set *Working directory* to `frontend`.

There's no JS debugger in Community. Debug in the browser DevTools instead.

### 3. Run tests

```bash
cd frontend
npm test          # vitest run (single run)
npx vitest        # watch mode
```

> There are no frontend test files yet. Until the first `*.test.tsx` is added, `npm test` exits with "No test files found".

**IntelliJ Community: Only through the terminal or a Shell Script run configuration.** Vitest integration (gutter icons, test tree) is Ultimate-only.

### 4. Type-check, lint and format

```bash
cd frontend
npx tsc --noEmit  # TypeScript type check
npm run lint      # ESLint
```

> `npm run lint` needs an `eslint.config.js`, which isn't in the project yet. Prettier isn't set up either.

**IntelliJ Community: No editor support.** TypeScript validation, ESLint/Prettier integration and *Reformat Code* for TS/TSX are Ultimate-only. Run the commands above in the terminal, or edit the frontend in WebStorm or VS Code.

### 5. Production build

```bash
cd frontend
npm run build     # tsc -b && vite build → frontend/dist
npm run preview   # serve the built app locally
```

**IntelliJ Community: Only through the terminal or a Shell Script run configuration.**

---

## Run backend and frontend together

**Terminal:** open two terminals and run `uvicorn app.main:app --reload` in `backend/` in one, and `npm run dev` in `frontend/` in the other.

**IntelliJ Community: Yes.** Create the two run configurations above. Then go to *Run → Edit Configurations → + → Compound* and add both. One click on ▶ starts the whole stack.

---

## Summary: IntelliJ Community vs Ultimate

| Task | Backend (Python) | Frontend (React/TS) |
|------|------------------|---------------------|
| Open the project | ✅ | ✅ |
| Syntax highlighting and completion | ✅ (Python plugin) | ❌ Ultimate only |
| Validation (type errors, lint) | ✅ inspections + Ruff plugin | ❌ terminal only (`tsc`, `npm run lint`) |
| Formatting | ✅ built-in / Ruff plugin | ❌ terminal only |
| Install dependencies | ✅ | ⚠️ terminal only |
| Run the dev server | ✅ Python run config | ⚠️ Shell Script run config |
| Debugging | ✅ | ❌ use browser DevTools |
| Tests | ✅ pytest integration | ⚠️ terminal / Shell Script |
| Start everything at once | ✅ Compound run config | ✅ Compound run config |
