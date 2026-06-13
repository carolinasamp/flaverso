# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### 0.1.1 (2026-06-13)

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and Conventional Commits.

## Unreleased

- 

---

## Release process (suggested)

1. Follow Conventional Commits when authoring commits (`feat`, `fix`, `chore`, `docs`, `refactor`, `perf`, `test`).
2. When ready to release, update changelog under `## Unreleased` with the notable changes.
3. Tag the release following semantic versioning, e.g. `v1.2.0`:

```bash
# create a tag
git tag -a v1.2.0 -m "Release v1.2.0"
# push tag
git push origin v1.2.0
```

4. Optional: Use `conventional-changelog` or `standard-version` to generate changelog and bump versions automatically.

```bash
# using standard-version
npx standard-version
# or using conventional-changelog
npx conventional-changelog -p angular -i CHANGELOG.md -s
```

5. Create a release in GitHub using the tag and changelog notes.

---

## Example

### v0.1.0 - 2026-06-13

- Initial scaffold and dev tooling.
