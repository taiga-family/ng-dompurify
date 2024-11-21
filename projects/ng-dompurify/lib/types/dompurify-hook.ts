import type {
    Config,
    UponSanitizeAttributeHookEvent,
    UponSanitizeElementHookEvent,
} from 'dompurify';

/**
 * DOMPurify hook function {@link addHook}
 */
export type DompurifyHook = (
    currentNode: Element,
    data: UponSanitizeAttributeHookEvent | UponSanitizeElementHookEvent | null,
    config: Config,
) => void;
