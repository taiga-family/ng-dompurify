import {DOCUMENT} from '@angular/common';
import {inject, Injectable, Sanitizer, SecurityContext} from '@angular/core';
import dompurify, {DOMPurifyI} from 'dompurify';

import {DOMPURIFY_CONFIG} from './tokens/dompurify-config';
import {DOMPURIFY_HOOKS} from './tokens/dompurify-hooks';
import {SANITIZE_STYLE} from './tokens/sanitize-style';
import {NgDompurifyConfig} from './types/ng-dompurify-config';

const createDOMPurify = dompurify;

/**
 * Implementation of Angular {@link Sanitizer} purifying via DOMPurify
 *
 * use {@link DOMPURIFY_CONFIG} token to provide config ({@link NgDompurifyConfig})
 * use {@link SANITIZE_STYLE} token to provide a style sanitizing method ({@link SanitizeStyle})
 * use {@link DOMPURIFY_HOOKS} token to provide a hooks for DOMPurify ({@link addHook})
 *
 * Ambient type cannot be used without @dynamic https://github.com/angular/angular/issues/23395
 * @dynamic
 */
@Injectable({
    providedIn: 'root',
})
export class NgDompurifySanitizer implements Sanitizer {
    private readonly config = inject(DOMPURIFY_CONFIG);
    private readonly sanitizeStyle = inject(SANITIZE_STYLE);
    private readonly domPurify: DOMPurifyI;

    constructor() {
        this.domPurify = createDOMPurify(inject(DOCUMENT).defaultView as Window);

        inject(DOMPURIFY_HOOKS).forEach(({name, hook}) => {
            this.domPurify.addHook(name, hook);
        });
    }

    sanitize(
        context: SecurityContext,
        value: Record<string, string> | string | null,
        config: NgDompurifyConfig = this.config,
    ): string {
        if (context === SecurityContext.SCRIPT) {
            throw new Error('DOMPurify does not support SCRIPT context');
        }

        return context === SecurityContext.STYLE
            ? this.sanitizeStyle(String(value))
            : this.domPurify.sanitize(String(value || ''), config);
    }
}
