#!/usr/bin/env bash
set -euo pipefail

# Local helper to bootstrap and build the monorepo
if ! command -v npm >/dev/null 2>&1; then
  echo "npm not found in PATH. Install Node.js and npm first." >&2
  exit 2
fi

npx lerna bootstrap --hoist
npm run build
