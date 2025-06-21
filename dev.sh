#!/bin/bash

# Trove Home Development Script
# This script ensures all commands work from the root directory

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Automatically load environment variables from .env file if it exists
if [ -f "$PROJECT_ROOT/.env" ]; then
    # shellcheck disable=SC2046
    export $(grep -v '^#' "$PROJECT_ROOT/.env" | xargs)
fi

# Function to ensure we're in the project root
ensure_root() {
    cd "$PROJECT_ROOT"
}

# Function to display help
show_help() {
    echo "Trove Home Development Commands:"
    echo ""
    echo "Installation:"
    echo "  ./dev.sh install       - Install all dependencies"
    echo ""
    echo "Development:"
    echo "  ./dev.sh start         - Start frontend development server"
    echo "  ./dev.sh start:backend - Start backend server"
    echo "  ./dev.sh dev           - Start both frontend and backend"
    echo ""
    echo "Testing:"
    echo "  ./dev.sh test          - Run all tests"
    echo "  ./dev.sh test:frontend - Run frontend tests"
    echo "  ./dev.sh test:backend  - Run backend tests"
    echo ""
    echo "Building:"
    echo "  ./dev.sh build         - Build both frontend and backend"
    echo "  ./dev.sh build:frontend - Build frontend"
    echo "  ./dev.sh build:backend  - Build backend"
    echo ""
    echo "Docker:"
    echo "  ./dev.sh docker:up     - Start Docker containers"
    echo "  ./dev.sh docker:down   - Stop Docker containers"
    echo "  ./dev.sh docker:build  - Build Docker images"
    echo "  ./dev.sh docker:login  - Log in to Docker registry"
    echo ""
    echo "Utilities:"
    echo "  ./dev.sh clean         - Clean all node_modules"
    echo "  ./dev.sh pwd           - Show current directory"
    echo "  ./dev.sh help          - Show this help"
}

# Main command handler
case "$1" in
    "install")
        ensure_root
        echo "📦 Installing all dependencies..."
        yarn install:all
        ;;
    "start")
        ensure_root
        echo "🚀 Starting frontend development server..."
        yarn start:frontend
        ;;
    "start:backend")
        ensure_root
        echo "🚀 Starting backend server..."
        yarn start:backend
        ;;
    "dev")
        ensure_root
        echo "🚀 Starting both frontend and backend..."
        yarn start:dev
        ;;
    "test")
        ensure_root
        echo "🧪 Running all tests..."
        yarn test:all
        ;;
    "test:frontend")
        ensure_root
        echo "🧪 Running frontend tests..."
        yarn test:frontend
        ;;
    "test:backend")
        ensure_root
        echo "🧪 Running backend tests..."
        yarn test:backend
        ;;
    "build")
        ensure_root
        echo "🏗️  Building both frontend and backend..."
        yarn build:frontend && yarn build:backend
        ;;
    "build:frontend")
        ensure_root
        echo "🏗️  Building frontend..."
        yarn build:frontend
        ;;
    "build:backend")
        ensure_root
        echo "🏗️  Building backend..."
        yarn build:backend
        ;;
    "docker:login")
        ensure_root
        echo "🔑 Logging in to Docker registry..."
        if [ -z "$DOCKER_USER" ] || [ -z "$DOCKER_HUB_ACCESS_TOKEN" ]; then
            echo "❌ DOCKER_USER or DOCKER_HUB_ACCESS_TOKEN environment variables not set."
            echo "   Please export them or add them to an .env file before running this command."
            exit 1
        fi
        echo "$DOCKER_HUB_ACCESS_TOKEN" | docker login --username "$DOCKER_USER" --password-stdin
        ;;
    "docker:up")
        ensure_root
        # Ensure we are logged in first so that private images can be pulled without errors
        if [ -n "$DOCKER_USER" ] && [ -n "$DOCKER_HUB_ACCESS_TOKEN" ]; then
            echo "🔑 Ensuring Docker registry login..."
            if ! echo "$DOCKER_HUB_ACCESS_TOKEN" | docker login --username "$DOCKER_USER" --password-stdin >/dev/null 2>&1; then
                echo "❌ Docker login failed – please verify DOCKER_USER and DOCKER_HUB_ACCESS_TOKEN."
                exit 1
            fi
        fi
        echo "🐳 Starting Docker containers..."
        yarn docker:up
        ;;
    "docker:down")
        ensure_root
        echo "🐳 Stopping Docker containers..."
        yarn docker:down
        ;;
    "docker:build")
        ensure_root
        echo "🐳 Building Docker images..."
        yarn docker:build
        ;;
    "clean")
        ensure_root
        echo "🧹 Cleaning all node_modules..."
        yarn clean:all
        ;;
    "pwd")
        ensure_root
        echo "📍 Current directory: $(pwd)"
        ;;
    "help"|"--help"|"-h"|"")
        show_help
        ;;
    *)
        echo "❌ Unknown command: $1"
        echo "Use './dev.sh help' to see available commands."
        exit 1
        ;;
esac 