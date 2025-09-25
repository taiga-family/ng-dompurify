import type {HookName} from 'dompurify';

export interface NgDompurifyHook {
    readonly name: HookName;
    readonly hook: (...args: any[]) => void;
}
