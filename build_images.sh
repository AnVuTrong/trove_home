#!/usr/bin/env bash
# ----------------------------------------------------------------------------
# build_images.sh – Build & push Trove Home Docker images
# ----------------------------------------------------------------------------
# Usage: ./build_images.sh [<major> <minor>] [--force-stop]
# Version is now split into MAJOR.MINOR for clearer control.
# Priority order (highest → lowest):
#   1. CLI args:  ./build_images.sh 2 3
#   2. .env variables MAJOR_VERSION and MINOR_VERSION
#   3. Fallback: MAJOR=0 MINOR=<git short hash>
# The composed string MAJOR.MINOR becomes the tag.
# --force-stop   : automatically stop and remove running trove_* containers before build.
#
# The script is smart enough to handle these scenarios:
#   • If containers are running → you can stop them with --force-stop or the script will abort.
#   • If the skeleton image is missing → it will be built first before backend / frontend.
#   • If the image already exists locally or remotely → the script will re-use the cached layers.
# Requires .env to contain DOCKER_USER and DOCKER_HUB_ACCESS_TOKEN.
# ----------------------------------------------------------------------------

set -euo pipefail

if [[ -f .env ]]; then
  # shellcheck disable=SC2046
  export $(grep -v "^#" .env | xargs)
fi

: "${DOCKER_USER:?Please set DOCKER_USER in your .env file}"
: "${DOCKER_HUB_ACCESS_TOKEN:?Please set DOCKER_HUB_ACCESS_TOKEN in your .env file}"

# -----------------------------------------------------------------------------
# Parse CLI arguments (non flag values become major & minor)                    
# -----------------------------------------------------------------------------

ARGS=()
FORCE_STOP=false

for PARAM in "$@"; do
  if [[ "$PARAM" == "--force-stop" ]]; then
    FORCE_STOP=true
  else
    ARGS+=("$PARAM")
  fi
done

if (( ${#ARGS[@]} >= 1 )); then
  VERSION_MAJOR="${ARGS[0]}"
else
  VERSION_MAJOR="${MAJOR_VERSION:-0}"
fi

if (( ${#ARGS[@]} >= 2 )); then
  VERSION_MINOR="${ARGS[1]}"
else
  VERSION_MINOR="${MINOR_VERSION:-$(git rev-parse --short HEAD)}"
fi

VERSION="${VERSION_MAJOR}.${VERSION_MINOR}"

# -----------------------------------------------------------------------------
# Check for running containers                                                 
# -----------------------------------------------------------------------------
RUNNING_CONTAINERS=$(docker ps --filter "name=trove_" --format '{{.Names}}')

if [[ -n "$RUNNING_CONTAINERS" ]]; then
  if [[ "$FORCE_STOP" == true ]]; then
    printf "\n⏹️  Stopping running containers: %s\n" "$RUNNING_CONTAINERS"
    docker compose down || true
  else
    echo "❌  Containers are currently running ( $RUNNING_CONTAINERS )."
    echo "    Re-run with --force-stop to stop them automatically."
    exit 1
  fi
fi

# -----------------------------------------------------------------------------
# Docker Hub login                                                             
# -----------------------------------------------------------------------------
printf "\n🔑  Logging in to Docker Hub as %s...\n" "$DOCKER_USER"
echo "$DOCKER_HUB_ACCESS_TOKEN" | docker login -u "$DOCKER_USER" --password-stdin

# -----------------------------------------------------------------------------
# Build images                                                                 
# -----------------------------------------------------------------------------

# 1) Skeleton -----------------------------------------------------------------
SKELETON_TAG="${DOCKER_USER}/trove_skeleton:${VERSION}"
if ! docker pull "$SKELETON_TAG" 2>/dev/null; then
  printf "\n📦  Building skeleton image (%s)...\n" "$SKELETON_TAG"
  docker build -f Dockerfile.skeleton -t "$SKELETON_TAG" .
else
  echo "✅  Re-using skeleton image from registry."
fi

# 2) Backend ------------------------------------------------------------------
BACKEND_TAG="${DOCKER_USER}/trove_backend:${VERSION}"
printf "\n📦  Building backend image (%s)...\n" "$BACKEND_TAG"
docker build \
  --build-arg SKELETON_IMAGE="$SKELETON_TAG" \
  -f Dockerfile.backend \
  -t "$BACKEND_TAG" .

# 3) Frontend -----------------------------------------------------------------
FRONTEND_TAG="${DOCKER_USER}/trove_frontend:${VERSION}"
printf "\n📦  Building frontend image (%s)...\n" "$FRONTEND_TAG"
docker build \
  --build-arg SKELETON_IMAGE="$SKELETON_TAG" \
  --build-arg REACT_APP_GRAPHQL_URL="/graphql" \
  -f Dockerfile.frontend \
  -t "$FRONTEND_TAG" .

# -----------------------------------------------------------------------------
# Push images                                                                  
# -----------------------------------------------------------------------------

# Push with version tag only (no "latest" to avoid ambiguity) -----------------
for IMAGE in skeleton backend frontend; do
  TAG_VAR="${DOCKER_USER}/trove_${IMAGE}:${VERSION}"
  printf "\n🚀  Pushing %s...\n" "$TAG_VAR"
  docker push "$TAG_VAR"
done

printf "\n✅  All images built and pushed successfully as version %s.\n" "$VERSION" 