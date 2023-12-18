import {InjectionToken} from '@angular/core';

import {NgDompurifyHook} from '../types/ng-dompurify-hook';

/**
 * Token for adding hooks to DOMPurify, see {@link addHook}
 */
export const DOMPURIFY_HOOKS = new InjectionToken<readonly NgDompurifyHook[]>(
    '[DOMPURIFY_HOOKS]: Hooks for DOMPurify',
    {
        factory: () => [],
        providedIn: 'root',
    },
);
