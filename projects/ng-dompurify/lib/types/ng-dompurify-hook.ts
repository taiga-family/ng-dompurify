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

// export type BasicHookName =
//     | 'afterSanitizeElements'
//     | 'beforeSanitizeElements'
//     | 'uponSanitizeShadowNode';
// export type ElementHookName = 'afterSanitizeAttributes' | 'beforeSanitizeAttributes';
// export type DocumentFragmentHookName =
//     | 'afterSanitizeShadowDOM'
//     | 'beforeSanitizeShadowDOM';

// /**
//  * A DOMPurify supported hook see {@link addHook}
//  */
// export type NgDompurifyHook<T extends HookName = HookName> = T extends BasicHookName
//     ? {readonly name: T; readonly hook: NodeHook}
//     : T extends ElementHookName
//       ? {readonly name: T; readonly hook: ElementHook}
//       : T extends DocumentFragmentHookName
//         ? {readonly name: T; readonly hook: DocumentFragmentHook}
//         : T extends 'uponSanitizeElement'
//           ? {readonly name: T; readonly hook: UponSanitizeElementHook}
//           : T extends 'uponSanitizeAttribute'
//             ? {readonly name: T; readonly hook: UponSanitizeAttributeHook}
//             : never;
