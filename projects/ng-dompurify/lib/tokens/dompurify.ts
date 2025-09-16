import {DOCUMENT} from '@angular/common';
import {inject, InjectionToken} from '@angular/core';
import type {DOMPurify} from 'dompurify';
import dompurify from 'dompurify';

import {DOMPURIFY_HOOKS} from './dompurify-hooks';

/**
 * Low-level configured DOMPurify instance token.
 * Hooks are applied once here
 */
export const DOMPURIFY = new InjectionToken<DOMPurify>(
    '[DOMPURIFY]: Configured DOMPurify instance',
    {
        providedIn: 'root',
        factory: () => {
            const instance = dompurify(inject(DOCUMENT).defaultView!);

            const add = instance.addHook.bind(instance) as any;

            inject(DOMPURIFY_HOOKS).forEach(({name, hook}) => {
                add(name, hook);
            });

            return instance;
        },
    },
);
