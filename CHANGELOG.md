## [6.0.0](https://github.com/taiga-family/ng-dompurify/compare/v4.1.11...v6.0.0) (2025-09-25)

### 🚀 Features

- update dompufiry to 3.2.6
  [(e230946)](https://github.com/taiga-family/ng-dompurify/commit/e2309466f3bfee34516672909cf14735d694b00c)

### [4.1.11](https://github.com/taiga-family/ng-dompurify/compare/v4.1.10...v4.1.11) (2025-03-14)

### [4.1.10](https://github.com/taiga-family/ng-dompurify/compare/v4.1.9...v4.1.10) (2024-11-21)

### 🐞 Bug Fixes

- pin dompurify version (#596)
  [(c06c3fb)](https://github.com/taiga-family/ng-dompurify/commit/c06c3fbdbffd88af082cec70848b841aaad4148f)

# Changelog

All notable changes to this project will be documented in this file. See
[`conventional commits`](https://www.conventionalcommits.org/) guidelines.

### [4.1.9](https://github.com/taiga-family/ng-dompurify/compare/v4.1.8...v4.1.9) (2024-09-27)

### [4.1.8](https://github.com/taiga-family/ng-dompurify/compare/v4.1.7...v4.1.8) (2024-09-20)

### 🐞 Bug Fixes

- forgot publish licence (#531)
  [(3c3c2a9)](https://github.com/taiga-family/ng-dompurify/commit/3c3c2a9bced3c4cbd71b4f12f90849f578a9759a)

### [4.1.7](https://github.com/taiga-family/ng-dompurify/compare/v4.1.6...v4.1.7) (2024-09-10)

### [4.1.6](https://github.com/taiga-family/ng-dompurify/compare/v4.1.5...v4.1.6) (2024-09-05)

### [4.1.5](https://github.com/taiga-family/ng-dompurify/compare/v4.1.4...v4.1.5) (2024-08-28)

### [4.1.4](https://github.com/taiga-family/ng-dompurify/compare/v4.1.3...v4.1.4) (2024-08-23)

### [4.1.3](https://github.com/taiga-family/ng-dompurify/compare/v4.1.2...v4.1.3) (2024-08-22)

### [4.1.2](https://github.com/taiga-family/ng-dompurify/compare/v4.1.1...v4.1.2) (2024-07-13)

### [4.1.1](https://github.com/taiga-family/ng-dompurify/compare/v4.1.0...v4.1.1) (2024-07-05)

### [4.1.0](https://github.com/taiga-family/ng-dompurify/compare/v4.0.1...v4.1.0) (2024-06-12)

### [4.0.1]() (2024-06-12)

### 🚀 Features

- **css**: support sanitizing CSS through provided handler
  [(be0d3a6)](https://github.com/taiga-family/ng-dompurify/commit/be0d3a61c2f93be8283dab6986a076aa53edea21)
- **css**: support sanitizing CSS through provided handler
  [(1321a4f)](https://github.com/taiga-family/ng-dompurify/commit/1321a4fba4beefcb6658b8aac6e4f1b01b4d7df9)
- **ngdompurifysanitizer**: make service a single point of entrance to be able to attach hooks to DOMPurify in its
  constructor later
  [(78ccfe9)](https://github.com/taiga-family/ng-dompurify/commit/78ccfe9b6e0b43e11894568ed41bbfbc228343a7)
- add angular 16 (#249)
  [(1d986b5)](https://github.com/taiga-family/ng-dompurify/commit/1d986b570fde4d004f60448e6846d6ef0952518c)
- **sanitizer**: Remove DOM implementation as unnecessary and update … (#56)
  [(d50cbdd)](https://github.com/taiga-family/ng-dompurify/commit/d50cbdd972598da056d32400a06a1d6cbe692a34)
- **ssr**: support server side environment and update to DOMPurify 2+ (#30)
  [(65ea43d)](https://github.com/taiga-family/ng-dompurify/commit/65ea43da03ad325467c76df98d1f4e1d79a4bc8c)

### 🐞 Bug Fixes

- **service**: implements now Angular Sanitizer insted of extending it to prevent problems in Ivy projects
  [(2e7f7a7)](https://github.com/taiga-family/ng-dompurify/commit/2e7f7a779bdddb010eeee9ea9caba8abf748a0b6)
- **dependencies**: make compatible with Angular 7
  [(7b3963a)](https://github.com/taiga-family/ng-dompurify/commit/7b3963ac0157aadd2d6a2f1a43b1f450f9803e2a)
- **dependencies**: set dependencies to be backwards compatible with Angular 6-7
  [(906b61d)](https://github.com/taiga-family/ng-dompurify/commit/906b61d61a9ce4f2a8d9ee895af4d646643005b2)
- **types**: preserve ReadonlyArray in compiled code to support older TypeScript versions
  [(387e87b)](https://github.com/taiga-family/ng-dompurify/commit/387e87b1bd68f0d92b8ca9cb70caccef2c2ea5f1)
- **types**: preserve ReadonlyArray in compiled code to support older TypeScript versions
  [(180e0dd)](https://github.com/taiga-family/ng-dompurify/commit/180e0ddf81810be6fa86b69876dfcddf748a7ede)
- **ssr**: fix type error in SSR environment (#41)
  [(14299c5)](https://github.com/taiga-family/ng-dompurify/commit/14299c577ed4c9ea9a17dc1549bf996dbc4a8041)
- **svg**: fix SVG style vulnerability (#36)
  [(87edb38)](https://github.com/taiga-family/ng-dompurify/commit/87edb38c77bb37e422767ef6e8e2dffe10a29e6b)
