#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status, treat unset variables as an error,
# and ensure that errors in a pipeline cause the script to fail.
set -euo pipefail

# Load environment variables from the .env file located alongside this script (same directory).
# This populates VPS_IP, VPS_USERNAME, VPS_PASSWORD, and optionally VPS_SSH_PORT.
ENV_FILE="$(dirname "$0")/.env"

# If the file exists, export every variable declared inside it. Using `set -a` (alias `allexport`)
# ensures that each variable becomes part of the environment automatically when sourced, which is
# safer than manually parsing with `grep | xargs` (handles quoted values, spaces, etc.).
if [[ -f "$ENV_FILE" ]]; then
  # shellcheck disable=SC1090  # the .env file is in a dynamic location relative to this script.
  set -o allexport
  source "$ENV_FILE"
  set +o allexport
  echo "Environment variables loaded from $ENV_FILE"
  echo "VPS_IP: $VPS_IP"
  echo "VPS_USERNAME: $VPS_USERNAME"
  echo "VPS_SSH_PORT: $VPS_SSH_PORT"
fi

# Validate that the mandatory variables are present.
: "${VPS_IP:?Environment variable VPS_IP is required but not set}"
: "${VPS_USERNAME:?Environment variable VPS_USERNAME is required but not set}"
: "${VPS_PASSWORD:?Environment variable VPS_PASSWORD is required but not set}"
# Default to port 22 if VPS_SSH_PORT is not specified.
VPS_SSH_PORT="${VPS_SSH_PORT:-22}"

# Ensure sshpass is installed. Suggest installation instructions if missing.
if ! command -v sshpass &> /dev/null; then
  echo "Error: sshpass is not installed. Install it via your package manager, e.g. 'sudo apt-get install sshpass'." >&2
  exit 1
fi

# Execute the SSH command using sshpass to supply the password non-interactively.
sshpass -p "$VPS_PASSWORD" \
  ssh -o StrictHostKeyChecking=no -p "$VPS_SSH_PORT" "$VPS_USERNAME@$VPS_IP" 