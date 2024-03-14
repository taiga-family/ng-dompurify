import type {HookName} from 'dompurify';

import type {DompurifyHook} from './dompurify-hook';

/**
 * A DOMPurify supported hook see {@link addHook}
 */
export interface NgDompurifyHook {
    readonly name: HookName;
    readonly hook: DompurifyHook;
}
