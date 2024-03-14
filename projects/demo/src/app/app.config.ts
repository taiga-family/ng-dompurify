import type {ApplicationConfig} from '@angular/core';
import {Sanitizer} from '@angular/core';
import {provideAnimations} from '@angular/platform-browser/animations';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimations(),
        {
            provide: Sanitizer,
            useClass: NgDompurifySanitizer,
        },
    ],
};
