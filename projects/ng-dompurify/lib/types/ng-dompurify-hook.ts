import type {
    DocumentFragmentHook,
    ElementHook,
    HookName,
    NodeHook,
    UponSanitizeAttributeHook,
    UponSanitizeElementHook,
} from 'dompurify';

/**
 * A DOMPurify supported hook see {@link addHook}
 */
export interface NgDompurifyHook {
    readonly name: HookName;
    readonly hook:
        | DocumentFragmentHook
        | ElementHook
        | NodeHook
        | UponSanitizeAttributeHook
        | UponSanitizeElementHook;
}
