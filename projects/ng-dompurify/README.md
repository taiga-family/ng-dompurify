# NgDompurify

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@taiga-ui/dompurify)](https://bundlephobia.com/result?p=@taiga-ui/dompurify)
[![npm version](https://img.shields.io/npm/v/@taiga-ui/dompurify.svg?style=flat-square)](https://npmjs.com/package/@taiga-ui/dompurify)
[![code style: @tinkoff/linters](https://img.shields.io/badge/code%20style-%40tinkoff%2Flinters-blue?style=flat-square)](https://github.com/taiga-family/linters)

> This library implements `DOMPurify` as Angular `Sanitizer` or `Pipe`. It delegates sanitizing to `DOMPurify` and
> supports the same configuration. See [DOMPurify](https://github.com/cure53/DOMPurify).

Read more about Sanitization in Angular and how ng-dompurify works in
[this article](https://medium.com/angular-in-depth/warning-sanitizing-html-stripped-some-content-and-how-to-deal-with-it-properly-10ff77012d5a).

## Install

```
npm install @taiga-ui/dompurify
```

If you do not have `dompurify` in your package, install also:

```
npm install dompurify
npm install --save-dev @types/dompurify
```

## How to use

Either use pipe to sanitize your content when binding to `[innerHTML]` or use `NgDompurifySanitizer` service manually.

```typescript
import {NgDompurifyModule} from '@taiga-ui/dompurify';

@NgModule({
  imports: [NgDompurifyModule],
})
export class MyModule {}
```

As a pipe:

```html
<div [innerHtml]="value | dompurify"></div>
```

As a service:

```typescript
import {SecurityContext} from '@angular/core';
import {NgDompurifySanitizer} from '@taiga-ui/dompurify';

@Component({})
export class MyComponent {
  constructor(private readonly dompurifySanitizer: NgDompurifySanitizer) {}

  purify(value: string): string {
    return this.dompurifySanitizer.sanitize(SecurityContext.HTML, value);
  }
}
```

You can also substitute Angular `Sanitizer` with `DOMPurify` so it is automatically used all the time:

```typescript
import {NgModule, Sanitizer} from '@angular/core';
import {NgDompurifySanitizer} from '@taiga-ui/dompurify';
// ...

@NgModule({
  // ...
  providers: [
    {
      provide: Sanitizer,
      useClass: NgDompurifySanitizer,
    },
  ],
  // ...
})
export class AppModule {}
```

## Configuring

Config for `NgDompurifySanitizer` or `NgDompurifyDomSanitizer` can be provided using token `DOMPURIFY_CONFIG`.
`NgDompurifyPipe` supports passing DOMPurify config as an argument to override config from DI.

```typescript
import {NgModule, Sanitizer} from '@angular/core';
import {NgDompurifySanitizer, DOMPURIFY_CONFIG} from '@taiga-ui/dompurify';
// ...

@NgModule({
  // ...
  providers: [
    {
      provide: Sanitizer,
      useClass: NgDompurifySanitizer,
    },
    {
      provide: DOMPURIFY_CONFIG,
      useValue: {FORBID_ATTR: ['id']},
    },
  ],
  // ...
})
export class AppModule {}
```

## CSS sanitization

DOMPurify does not support sanitizing CSS. Angular starting version 10 dropped CSS sanitation as something that presents
no threat in supported browsers. You can still provide a handler to sanitize CSS rules values upon binding if you want
to:

```typescript
import {NgModule, Sanitizer} from '@angular/core';
import {NgDompurifySanitizer, SANITIZE_STYLE} from '@taiga-ui/dompurify';

@NgModule({
  // ...
  providers: [
    {
      provide: Sanitizer,
      useClass: NgDompurifySanitizer,
    },
    {
      provide: SANITIZE_STYLE,
      useValue: yourImplementation, // <---
    },
  ],
  // ...
})
export class AppModule {}
```

## Hooks

DOMPurify supports various hooks. You can provide them using `DOMPURIFY_HOOKS` token:

```typescript
import {NgModule, Sanitizer} from '@angular/core';
import {NgDompurifySanitizer, DOMPURIFY_HOOKS, SANITIZE_STYLE} from '@taiga-ui/dompurify';

@NgModule({
  // ...
  providers: [
    {
      provide: Sanitizer,
      useClass: NgDompurifySanitizer,
    },
    {
      provide: SANITIZE_STYLE,
      useValue: yourImplementation,
    },
    {
      provide: DOMPURIFY_HOOKS,
      useValue: [
        {
          name: 'beforeSanitizeAttributes',
          hook: (node: Element) => {
            node.removeAttribute('id');
          },
        },
      ],
    },
  ],
  // ...
})
export class AppModule {}
```

## Maintained

**@taiga-ui/dompurify** is a part of [Taiga UI](https://github.com/taiga-family/taiga-ui) libraries family which is
backed and used by a large enterprise. This means you can rely on timely support and continuous development.

## License

🆓 Feel free to use our library in your commercial and private applications

All **@taiga-ui/dompurify** packages are covered by [Apache 2.0](/LICENSE)

Read more about this license [here](https://choosealicense.com/licenses/apache-2.0/)

## Demo

You can see live demo here: https://stackblitz.com/github/taiga-family/ng-dompurify/tree/master/projects/demo
