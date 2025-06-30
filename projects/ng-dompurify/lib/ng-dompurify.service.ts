import {DOCUMENT} from '@angular/common';
import type {Sanitizer} from '@angular/core';
import {inject, Injectable, SecurityContext} from '@angular/core';
import type {
    DocumentFragmentHook,
    DOMPurify,
    ElementHook,
    HookName,
    NodeHook,
    UponSanitizeAttributeHook,
    UponSanitizeElementHook,
} from 'dompurify';
import dompurify from 'dompurify';

import {DOMPURIFY_CONFIG} from './tokens/dompurify-config';
import {DOMPURIFY_HOOKS} from './tokens/dompurify-hooks';
import {SANITIZE_STYLE} from './tokens/sanitize-style';
import type {NgDompurifyConfig} from './types/ng-dompurify-config';
import type {NgDompurifyHook} from './types/ng-dompurify-hook';

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
    private readonly domPurify: DOMPurify;

    constructor() {
        this.domPurify = createDOMPurify(
            inject(DOCUMENT).defaultView as dompurify.WindowLike,
        );

        inject(DOMPURIFY_HOOKS).forEach(({name, hook}) => {
            this.addHook(name, hook);
        });
    }

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

    private addHook(name: HookName, hook: NgDompurifyHook['hook']): void {
        switch (name) {
            case 'afterSanitizeAttributes':
            case 'beforeSanitizeAttributes':
                this.domPurify.addHook(name, hook as ElementHook);
                break;

            case 'afterSanitizeElements':
            case 'beforeSanitizeElements':
            case 'uponSanitizeShadowNode':
                this.domPurify.addHook(name, hook as NodeHook);
                break;

            case 'afterSanitizeShadowDOM':
            case 'beforeSanitizeShadowDOM':
                this.domPurify.addHook(name, hook as DocumentFragmentHook);
                break;

            case 'uponSanitizeAttribute':
                this.domPurify.addHook(name, hook as UponSanitizeAttributeHook);
                break;

            case 'uponSanitizeElement':
                this.domPurify.addHook(name, hook as UponSanitizeElementHook);
                break;
        }
    }
}
