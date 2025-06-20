# Trove Home

A full-stack web application with React frontend and Node.js backend using GraphQL.

## Quick Start for AI Assistants

**Always run commands from the root directory to avoid path confusion!**

### Using Package.json Scripts (Recommended for AI)
```bash
# Navigate to project root first
cd /path/to/trove_home

# Install dependencies
yarn install:all

# Run tests
yarn test:frontend
yarn test:backend
yarn test:all

# Start development
yarn start:frontend
yarn start:backend
yarn start:dev

# Build
yarn build:frontend
yarn build:backend
```

### Using Development Script (Alternative)
```bash
# Navigate to project root first
cd /path/to/trove_home

# Make script executable (one time only)
chmod +x dev.sh

# Use the script
./dev.sh help           # Show all commands
./dev.sh test:frontend  # Run frontend tests
./dev.sh test:backend   # Run backend tests
./dev.sh start          # Start frontend
./dev.sh dev            # Start both frontend and backend
```

## Project Structure
```
trove_home/
├── package.json                 # Root package.json with unified scripts
├── dev.sh                      # Development helper script
├── trove_home_frontend/        # React TypeScript frontend
│   ├── src/
│   ├── package.json
│   └── ...
├── trove_home_backend/         # Node.js GraphQL backend
│   ├── src/
│   ├── package.json
│   └── ...
└── docker-compose.yml
```

## Available Commands

All commands work from the root directory and handle path navigation automatically:

- `yarn install:all` - Install all dependencies
- `yarn test:frontend` - Run frontend tests
- `yarn test:backend` - Run backend tests  
- `yarn test:all` - Run all tests
- `yarn start:frontend` - Start frontend dev server
- `yarn start:backend` - Start backend server
- `yarn start:dev` - Start both frontend and backend
- `yarn build:frontend` - Build frontend
- `yarn build:backend` - Build backend
- `yarn clean:all` - Clean all node_modules

## For AI Assistants

When working with this project:
1. Always ensure you're in the root directory (`/path/to/trove_home`)
2. Use the root package.json scripts (e.g., `yarn test:frontend`) 
3. Avoid using relative paths like `cd trove_home_frontend && yarn test`
4. If unsure about location, run `pwd` to check current directory

This prevents confusion when running commands multiple times from different starting directories.
