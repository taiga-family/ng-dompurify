import type {Sanitizer} from '@angular/core';
import {inject, Injectable, SecurityContext} from '@angular/core';

import {DOMPURIFY} from './tokens/dompurify';
import {DOMPURIFY_CONFIG} from './tokens/dompurify-config';
import {SANITIZE_STYLE} from './tokens/sanitize-style';
import type {NgDompurifyConfig} from './types/ng-dompurify-config';

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
    private readonly domPurify = inject(DOMPURIFY);

    public sanitize(
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
