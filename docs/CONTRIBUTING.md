# Contribuindo para o Flaverso

Este documento define as práticas e normas que o projeto Flaverso seguirá para manter consistência, qualidade e facilidade de colaboração.

## Objetivo

Ter um padrão claro de desenvolvimento: testes, linting, formatação e convenções de TypeScript.

---

## Estrutura do repositório (sugestão)

- `apps/` - aplicações (web, mobile, api)
- `packages/` - pacotes compartilhados (ui, types, utils)
- `docs/` - documentação do projeto

---

## Convenções de código

- Linguagem: `TypeScript`.
- Estilo: `Prettier` (configuração do projeto).
- Lint: `ESLint` com plugin `@typescript-eslint`.
- EditorConfig para manter indentação e finais de linha.

### Regras principais

- Use 2 ou 4 espaços conforme `editorconfig` (padrão do projeto).
- Preferir `const` e `let` (não usar `var`).
- Tipar explicitamente `props` e `public APIs`.

---

# Prompt de Contribuição — Regras que o assistente deve seguir

Este arquivo é uma prompt direta para o assistente (GitHub Copilot) — todas as ações automatizadas, patches e commits que eu (assistente) fizer neste repositório devem seguir estritamente estas regras.

1. Objetivo geral

- Priorizar qualidade, legibilidade e segurança. Não quebre a build nem o CI.

1. Antes de qualquer alteração em código

- Verificar se há testes relevantes; adicionar/atualizar testes com `Jest` quando modificar lógica ou componentes.
- Garantir que o código esteja tipado em `TypeScript` e respeite `@typescript-eslint`.

1. Formatação e lint

- Aplicar `Prettier` e `ESLint` automaticamente antes de finalizar um patch.
- Comandos a executar localmente (ou em CI):

```bash
npm run format
npm run lint -- --fix
npm run test -- --runInBand
```

1. Testes

- Para componentes React, criar testes com `@testing-library/react` e `Jest`.
- Nome dos arquivos: `ComponentName.test.tsx` ou `ComponentName.spec.tsx`.
- Cobertura mínima recomendada para áreas críticas: 80%.

1. Estrutura de commits e PRs

- Criar branches do tipo `feature/descricao` ou `fix/descricao`.
- Commit messages: curto, em inglês preferencialmente, formato: `type(scope): short description` (ex: `feat(ui): add Button component`).
- Incluir no PR descrição das alterações, resumo de como testar e comandos relevantes.

1. Arquivos de configuração obrigatórios

- Respeitar e manter:
  - `/.editorconfig`
  - `/.prettierrc`
  - `/.eslintrc.json`
  - `/jest.config.js`

1. Scripts sugeridos no `package.json` (o assistente pode adicioná-los quando autorizado)

```json
{
  "scripts": {
    "format": "prettier --write .",
    "lint": "eslint . --ext .ts,.tsx --fix",
    "test": "jest --runInBand",
    "test:watch": "jest --watch"
  }
}
```

1. CI e validações automáticas

- Em qualquer PR, o assistente deve garantir que os passos de CI rodem: `install`, `format`, `lint`, `test`.

1. Mudanças que o assistente NÃO deve fazer sem aprovação humana

- Alterações de produto (UX, layout significativo), mudanças de arquitetura, ou remoção de dependências devem ser discutidas antes.

1. Comunicação no PR

- Incluir checklist no PR quando aplicável: testes adicionados, lint ok, build ok, notas de teste.

1. Quando o assistente modificar arquivos

- Incluir comentários concisos no PR explicando o motivo técnico.
- Garantir que alterações em arquivos de configuração sejam mínimas e documentadas.

1. Responsabilidade do assistente

- Se um patch gerar erros de lint, formatação ou testes, reverter ou corrigir antes de finalizar o PR.

---

Se estiver de acordo com estas regras, responda com uma confirmação curta e então informe qual ação automatizada deseja que eu execute a seguir (ex.: adicionar scripts ao `package.json` e instalar dependências dev).

---

ENGLISH VERSION (Assistant Instructions)

This file is an instruction prompt for the assistant: every automated action, patch or commit the assistant makes in this repository must strictly follow these rules.

1. Purpose

- Prioritize code quality, readability, and security. Do not break the build or CI.

1. Before changing code

- Check for relevant tests; add or update tests using `Jest` when modifying logic or components.
- Ensure TypeScript typings are present and `@typescript-eslint` rules are respected.

1. Formatting and linting

- Run `Prettier` and `ESLint` automatically before finishing a patch.
- Local or CI commands to run:

```bash
npm run format
npm run lint -- --fix
npm run test -- --runInBand
```

1. Tests

- For React components, write tests using `@testing-library/react` and `Jest`.
- File name conventions: `ComponentName.test.tsx` or `ComponentName.spec.tsx`.
- Recommended coverage for critical areas: 80% or higher.

1. Commits and PRs

- Branch names: `feature/description` or `fix/description`.
- Commit messages: short, in English, format: `type(scope): short description` (e.g. `feat(ui): add Button component`).
- PR description must include a summary, how to test, and relevant commands.

1. Required configuration files

- Preserve and follow rules in:
  - `/.editorconfig`
  - `/.prettierrc`
  - `/.eslintrc.json`
  - `/jest.config.js`

1. Suggested `package.json` scripts (assistant may add when authorized)

```json
{
  "scripts": {
    "format": "prettier --write .",
    "lint": "eslint . --ext .ts,.tsx --fix",
    "test": "jest --runInBand",
    "test:watch": "jest --watch"
  }
}
```

1. CI and automated checks

- For every PR, ensure CI runs the steps: `install`, `format`, `lint`, `test`.

1. Actions that require human approval

- Significant UX/product changes, architectural changes, and dependency removals require discussion before being applied.

1. PR communication

- Add a checklist when applicable: tests added, lint ok, build ok, test notes.

1. When the assistant modifies files

- Add concise explanations in the PR for technical reasons.
- Keep configuration changes minimal and documented.

1. Assistant responsibilities

- If a patch causes lint, formatting, or test failures, fix or revert before finalizing the PR.

1. Language and best practices

- All code, comments, commit messages, PR descriptions, tests, and documentation must be written in clear English.
- Follow recognized best practices: SOLID principles, single responsibility, clear naming, and avoid premature optimization.

---

**TypeScript 7 migration**

- The repository uses a solution-style TypeScript setup with project references (`tsconfig.base.json` + per-package `tsconfig.json`).
- We target TypeScript 7 and Node ESM (`module: NodeNext`). Ensure `typescript` devDependency is `^7.0.0` locally and run `npm install`.
- Avoid using `baseUrl`; prefer per-package `paths` or project references. If upgrading TypeScript versions, run the type checks with `tsc -b`.
- To build all projects locally:

```bash
npm run build --if-present || npx tsc -b
```

Pre-commit checklist (example)

- Run `npm run format` and ensure no formatting errors remain.
- Run `npm run lint` and fix any reported issues.
- Run `npm run test` and ensure tests pass for modified code.
- Verify staged files are limited to intended changes and update tests or types if needed.
- Confirm commit message follows Conventional Commits format (e.g. `feat(scope): short description`).

If you confirm these rules, reply with a short confirmation and tell me which automated action to perform next (for example: add the scripts to `package.json` and install dev dependencies).
