

## 4.0.1 (2024-06-12)


### Bug Fixes

* **dependencies:** make compatible with Angular 7 ([7b3963a](https://github.com/taiga-family/ng-dompurify/commit/7b3963ac0157aadd2d6a2f1a43b1f450f9803e2a))
* **dependencies:** set dependencies to be backwards compatible with Angular 6-7 ([906b61d](https://github.com/taiga-family/ng-dompurify/commit/906b61d61a9ce4f2a8d9ee895af4d646643005b2))
* **service:** implements now Angular Sanitizer insted of extending it to prevent problems in Ivy projects ([2e7f7a7](https://github.com/taiga-family/ng-dompurify/commit/2e7f7a779bdddb010eeee9ea9caba8abf748a0b6))
* **ssr:** fix type error in SSR environment ([#41](https://github.com/taiga-family/ng-dompurify/issues/41)) ([14299c5](https://github.com/taiga-family/ng-dompurify/commit/14299c577ed4c9ea9a17dc1549bf996dbc4a8041))
* **SVG:** fix SVG style vulnerability ([#36](https://github.com/taiga-family/ng-dompurify/issues/36)) ([87edb38](https://github.com/taiga-family/ng-dompurify/commit/87edb38c77bb37e422767ef6e8e2dffe10a29e6b))
* **types:** preserve ReadonlyArray in compiled code to support older TypeScript versions ([180e0dd](https://github.com/taiga-family/ng-dompurify/commit/180e0ddf81810be6fa86b69876dfcddf748a7ede))


### Features

* **css:** support sanitizing CSS through provided handler ([1321a4f](https://github.com/taiga-family/ng-dompurify/commit/1321a4fba4beefcb6658b8aac6e4f1b01b4d7df9))
* **NgDompurifySanitizer:** make service a single point of entrance to be able to attach hooks to DOMPurify in its constructor later ([78ccfe9](https://github.com/taiga-family/ng-dompurify/commit/78ccfe9b6e0b43e11894568ed41bbfbc228343a7))
* **sanitizer:** Remove DOM implementation as unnecessary and update … ([#56](https://github.com/taiga-family/ng-dompurify/issues/56)) ([d50cbdd](https://github.com/taiga-family/ng-dompurify/commit/d50cbdd972598da056d32400a06a1d6cbe692a34))
* **ssr:** support server side environment and update to DOMPurify 2+ ([#30](https://github.com/taiga-family/ng-dompurify/issues/30)) ([65ea43d](https://github.com/taiga-family/ng-dompurify/commit/65ea43da03ad325467c76df98d1f4e1d79a4bc8c))
