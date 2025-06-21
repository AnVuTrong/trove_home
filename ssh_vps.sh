#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status, treat unset variables as an error,
# and ensure that errors in a pipeline cause the script to fail.
set -euo pipefail

# Load environment variables from the .env file located at the project root, if it exists.
# This allows the script to pull in VPS_IP, VPS_USERNAME, VPS_PASSWORD, and VPS_SSH_PORT.
ENV_FILE="$(dirname "$0")/.env"
if [[ -f "$ENV_FILE" ]]; then
  # shellcheck disable=SC2046
  export $(grep -v "^#" "$ENV_FILE" | xargs)
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