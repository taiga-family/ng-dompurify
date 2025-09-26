# NgDompurify

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@taiga-ui/dompurify)](https://bundlephobia.com/result?p=@taiga-ui/dompurify)
[![npm version](https://img.shields.io/npm/v/@taiga-ui/dompurify.svg?style=flat-square)](https://npmjs.com/package/@taiga-ui/dompurify)

> This library implements `DOMPurify` as Angular `Sanitizer` or `Pipe`. It delegates sanitizing to `DOMPurify` and
> supports the same configuration. See [DOMPurify](https://github.com/cure53/DOMPurify).

Read more about Sanitization in Angular and how ng-dompurify works in
[this article](https://medium.com/angular-in-depth/warning-sanitizing-html-stripped-some-content-and-how-to-deal-with-it-properly-10ff77012d5a).

## Install

```
npm install @taiga-ui/dompurify
```

## How to use

Either use pipe to sanitize your content when binding to `[innerHTML]` or use `NgDompurifySanitizer` service manually.

As a pipe:

```html
<div [innerHtml]="value | dompurify"></div>
```

As a service:

```ts
import {SecurityContext} from '@angular/core';
import {NgDompurifySanitizer} from '@taiga-ui/dompurify';

@Component({
  // ..
})
export class App {
  private readonly sanitizer = new NgDompurifySanitizer();

  protected purify(value: string): string {
    return this.sanitizer.sanitize(SecurityContext.HTML, value);
  }
}
```

You can also substitute Angular `Sanitizer` with `DOMPurify` so it is automatically used all the time:

```ts
import {NgModule, Sanitizer} from '@angular/core';
import {NgDompurifySanitizer} from '@taiga-ui/dompurify';
// ...

bootstrapApplication(App, {
  providers: [
    {
      provide: Sanitizer,
      useClass: NgDompurifySanitizer,
    },
  ],
});
```

## Configuring

Config for `NgDompurifySanitizer` or `NgDompurifyDomSanitizer` can be provided using token `DOMPURIFY_CONFIG`.
`NgDompurifyPipe` supports passing DOMPurify config as an argument to override config from DI.

```ts
import {NgModule, Sanitizer} from '@angular/core';
import {NgDompurifySanitizer, DOMPURIFY_CONFIG} from '@taiga-ui/dompurify';
// ...

bootstrapApplication(App, {
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
});
```

## CSS sanitization

DOMPurify does not support sanitizing CSS. Angular starting version 10 dropped CSS sanitation as something that presents
no threat in supported browsers. You can still provide a handler to sanitize CSS rules values upon binding if you want
to:

```ts
import {NgModule, Sanitizer} from '@angular/core';
import {NgDompurifySanitizer, SANITIZE_STYLE} from '@taiga-ui/dompurify';

bootstrapApplication(App, {
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
});
```

## Hooks

DOMPurify supports various hooks. You can provide them using `DOMPURIFY_HOOKS` token:

```ts
import {NgModule, Sanitizer} from '@angular/core';
import {NgDompurifySanitizer, DOMPURIFY_HOOKS, SANITIZE_STYLE} from '@taiga-ui/dompurify';
// ..

bootstrapApplication(App, {
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
});
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
