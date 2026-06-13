#!/usr/bin/env bash

# Install development dependencies for Flaverso
npm install -D \
  eslint prettier eslint-config-prettier \
  @typescript-eslint/parser @typescript-eslint/eslint-plugin \
  eslint-plugin-react eslint-plugin-react-hooks \
  jest ts-jest @types/jest \
  @testing-library/react @testing-library/jest-dom identity-obj-proxy \
  husky lint-staged \
  typescript @types/node @types/react @types/react-dom ts-node

echo "Dev dependencies installed."
