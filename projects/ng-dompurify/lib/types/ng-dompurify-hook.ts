import type {
    Hook,
    HookName,
    UponSanitizeAttributeHook,
    UponSanitizeElementHook,
} from 'dompurify';

/**
 * A DOMPurify supported hook see {@link addHook}
 */
export type NgDompurifyHook<T = unknown> = T extends 'uponSanitizeElement'
    ? {
          readonly name: 'uponSanitizeElement';
          readonly hook: UponSanitizeElementHook;
      }
    : T extends 'uponSanitizeAttribute'
      ? {
            readonly name: 'uponSanitizeAttribute';
            readonly hook: UponSanitizeAttributeHook;
        }
      : {
            readonly name: Exclude<
                HookName,
                'uponSanitizeAttribute' | 'uponSanitizeElement'
            >;
            readonly hook: Hook;
        };
