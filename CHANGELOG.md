- chore(deps): update taiga-ui to v0.114.1 (#330) (164d18f)
- chore(deps): update nx to v19.4.3 (#354) (0aeca8e)
- chore(deps): update ng to v16.2.14 (#353) (857f179)
- chore(deps): update taiga-family/ci action to v1.65.5 (#352) (b722449)
- chore(deps): update taiga-family/ci action to v1.65.4 (#351) (23969aa)
- chore(deps): update dependency ts-jest to v29.2.2 (#350) (cfdbf92)
- chore(deps): update ng-web-apis to v4.1.3 (#349) (7033012)
- chore(deps): update dependency ts-jest to v29.2.1 (#348) (66480a8)
- chore(deps): update taiga-family/ci action to v1.65.3 (#347) (3135fcd)
- chore(deps): update nx to v19.4.2 (#346) (03ca126)
- chore(deps): update dependency glob to v11 (#345) (1ccae94)
- chore(deps): update dependency release-it to v17.5.0 (#344) (7993964)
- chore(deps): update dependency release-it to v17.4.2 (#343) (8a11fce)
- chore(deps): update dependency ts-jest to v29.2.0 (#342) (6c93ffb)
- chore(deps): update dependency glob to v10.4.3 (#341) (66fc391)
- chore(deps): update nx to v19.4.1 (#340) (4bb2e91)
- chore(deps): update dependency @types/node to v20.14.10 (#339) (12ffd49)
- chore(deps): update taiga-family/ci action to v1.65.2 (#338) (4f01821)

* chore(deps): update dependency dompurify to ^3.1.6 (#337) (72f4fe8)
* chore(deps): update nx to v19.4.0 (#336) (6b7f3de)
* chore(deps): update dependency release-it to v17.4.1 (#335) (1d42937)
* chore(deps): update taiga-family/ci action to v1.65.1 (#334) (21d9545)
* chore(deps): update ng-web-apis to v4.1.2 (#333) (f3f04b0)
* chore(deps): update ng-web-apis to v4.1.1 (#332) (8cc6db3)
* chore(deps): update ng-web-apis to v4.1.0 (#331) (c35b927)
* chore(deps): update taiga-ui to v0.104.0 (#320) (e016a85)
* chore(deps): update nx to v19.3.2 (#329) (dcff904)
* chore(deps): update ng-web-apis to v4.0.1 (#328) (0d6f703)
* chore(deps): update toshimaru/auto-author-assign action to v2.1.1 (#327) (a1a8b86)
* chore(deps): update dependency @types/node to v20.14.9 (#326) (9893c2f)
* chore(deps): update taiga-family/ci action to v1.65.0 (#325) (f8a23af)
* chore(deps): update taiga-family/ci action to v1.63.0 (#324) (72abd9a)
* chore(deps): update taiga-family/ci action to v1.62.25 (#323) (d47c6b2)
* chore(deps): update dependency @types/node to v20.14.8 (#322) (b948332)
* chore(deps): update nx to v19.3.1 (#321) (8a61070)
* chore(deps): update dependency release-it to v17.4.0 (#319) (07e8466)
* chore(deps): update dependency @types/node to v20.14.7 (#318) (bf0bf2a)
* chore(deps): update taiga-ui to v0.101.0 (#317) (3fd8115)
* chore(deps): update taiga-ui to v0.99.0 (#316) (fc2a066)
* chore(deps): update dependency jest-preset-angular to v14.1.1 (#315) (9a2a570)
* chore(deps): update dependency @types/node to v20.14.6 (#314) (f085aef)
* chore(deps): update dependency @types/node to v20.14.5 (#313) (d23e764)
* chore(deps): update dependency @types/node to v20.14.4 (#312) (ba3240f)
* chore(deps): update dependency @types/node to v20.14.3 (#311) (7a96049)
* chore(deps): update ng-web-apis to v4 (#310) (afe1f42)
* chore(deps): update dependency ts-jest to v29.1.5 (#309) (26e0a5c)
* chore(deps): update nx to v19.3.0 (#308) (ff63571)
* chore(deps): update jest (#307) (b288c0b)
* chore(deps): update dependency express to v4.19.2 (#306) (39eb103)
* chore(deps): update actions/checkout action to v4.1.7 (#304) (08cc77f)
* chore(deps): update taiga-family/ci action to v1.62.24 (#305) (3178db7)
* chore(deps): update dependency core-js to v3.37.1 (#303) (60f0bfd)
* chore(deps): update dependency lint-staged to v15.2.7 (#302) (0e6d38e)
* chore(deps): update taiga-ui to v0.98.1 (#278) (08ffd44)

# [4.1.0](https://github.com/taiga-family/ng-dompurify/compare/v4.0.1...v4.1.0) (2024-06-12)

## 4.0.1 (2024-06-12)

### Bug Fixes

- **dependencies:** make compatible with Angular 7
  ([7b3963a](https://github.com/taiga-family/ng-dompurify/commit/7b3963ac0157aadd2d6a2f1a43b1f450f9803e2a))
- **dependencies:** set dependencies to be backwards compatible with Angular 6-7
  ([906b61d](https://github.com/taiga-family/ng-dompurify/commit/906b61d61a9ce4f2a8d9ee895af4d646643005b2))
- **service:** implements now Angular Sanitizer insted of extending it to prevent problems in Ivy projects
  ([2e7f7a7](https://github.com/taiga-family/ng-dompurify/commit/2e7f7a779bdddb010eeee9ea9caba8abf748a0b6))
- **ssr:** fix type error in SSR environment ([#41](https://github.com/taiga-family/ng-dompurify/issues/41))
  ([14299c5](https://github.com/taiga-family/ng-dompurify/commit/14299c577ed4c9ea9a17dc1549bf996dbc4a8041))
- **SVG:** fix SVG style vulnerability ([#36](https://github.com/taiga-family/ng-dompurify/issues/36))
  ([87edb38](https://github.com/taiga-family/ng-dompurify/commit/87edb38c77bb37e422767ef6e8e2dffe10a29e6b))
- **types:** preserve ReadonlyArray in compiled code to support older TypeScript versions
  ([180e0dd](https://github.com/taiga-family/ng-dompurify/commit/180e0ddf81810be6fa86b69876dfcddf748a7ede))

### Features

- **css:** support sanitizing CSS through provided handler
  ([1321a4f](https://github.com/taiga-family/ng-dompurify/commit/1321a4fba4beefcb6658b8aac6e4f1b01b4d7df9))
- **NgDompurifySanitizer:** make service a single point of entrance to be able to attach hooks to DOMPurify in its
  constructor later
  ([78ccfe9](https://github.com/taiga-family/ng-dompurify/commit/78ccfe9b6e0b43e11894568ed41bbfbc228343a7))
- **sanitizer:** Remove DOM implementation as unnecessary and update …
  ([#56](https://github.com/taiga-family/ng-dompurify/issues/56))
  ([d50cbdd](https://github.com/taiga-family/ng-dompurify/commit/d50cbdd972598da056d32400a06a1d6cbe692a34))
- **ssr:** support server side environment and update to DOMPurify 2+
  ([#30](https://github.com/taiga-family/ng-dompurify/issues/30))
  ([65ea43d](https://github.com/taiga-family/ng-dompurify/commit/65ea43da03ad325467c76df98d1f4e1d79a4bc8c))
