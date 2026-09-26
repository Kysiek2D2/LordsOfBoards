# CLAUDE.md

## Project overview
LordsOfBoards — This application is a task tracker and project management system in one.

## Tech stack
- Backend: Python 3.12+, FastAPI, Uvicorn
- Frontend: React + TypeScript, Vite
- Database: TODO (e.g. PostgreSQL + SQLAlchemy/SQLModel)
- Tests: pytest (backend), Vitest/React Testing Library (frontend)
- Lint/format: ruff + black (backend), eslint + prettier (frontend)

## Repo structure
```
/backend       # FastAPI code (routers, models, business logic)
/frontend      # React app (Vite)
/docs          # notes, architecture decisions (optional)
CLAUDE.md      # this file
```

## Setup / dev commands
```bash
# backend
cd backend
python -m venv .venv
.venv/Scripts/activate   # Windows
pip install -r requirements.txt
uvicorn app.main:app --reload

# frontend
cd frontend
npm install
npm run dev
```

## Testing
```bash
# backend
cd backend && pytest

# frontend
cd frontend && npm test
```
Always run the tests after making changes before reporting a task as done.

## Code style / conventions
- Backend: type hints everywhere, Pydantic for input/output data validation, routers split per domain (e.g. `routers/users.py`), business logic kept out of routers (in `services/`).
- Frontend: functional components + hooks, TypeScript strict mode, avoid `any`.
- Branch names: `feature/...`, `fix/...`.
- Commits: short, specific description in imperative mood (e.g. "Add user login endpoint").

## Do / avoid
- Don't add dependencies without a clear need — ask if it's not obvious.
- Don't commit or push automatically — only do it when explicitly asked.
- Prefer editing existing files over creating new ones.
- If a change affects the UI, test it in the browser before reporting it as done.
- Secrets (API keys, database passwords) are kept in `.env` (added to `.gitignore`), never in code or in the repo.
- Use only English language in this project.
- Always first do changes on my local. Never do commits and do not push to git repository unless I tell you so.

## Architecture / decisions (fill in as the project grows)
<!-- E.g. why FastAPI instead of Django, how auth works, what the data model looks like. -->
TODO

## Known limitations / TODO
- Backend and frontend scaffolding is in place (health-check endpoint, React app calling it) but no real features yet.
- No database configured yet.
- Project overview and architecture sections above still need to be filled in.
