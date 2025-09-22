import type {Config, HookEvent} from 'dompurify';

/**
 * DOMPurify hook function {@link addHook}
 * @deprecated will be removed in v5.0
 */
export type DompurifyHook = (
    currentNode: Element,
    data: HookEvent,
    config: Config,
) => void;
