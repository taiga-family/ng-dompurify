import type {
    Config,
    UponSanitizeAttributeHookEvent,
    UponSanitizeElementHookEvent,
} from 'dompurify';

/**
 * DOMPurify hook function {@link addHook}
 * @deprecated: drop in v5.0
 */
export type DompurifyHook = (
    currentNode: Element,
    data: UponSanitizeAttributeHookEvent | UponSanitizeElementHookEvent | null,
    config: Config,
) => void;
