import {InjectionToken} from '@angular/core';

import {NgDompurifyConfig} from '../types/ng-dompurify-config';

/**
 * Token for {@link NgDompurifyConfig}
 */
export const DOMPURIFY_CONFIG = new InjectionToken<NgDompurifyConfig>(
    `[DOMPURIFY_CONFIG]: Config for DOMPurify`,
    {
        factory: () => ({}),
        providedIn: `root`,
    },
);
