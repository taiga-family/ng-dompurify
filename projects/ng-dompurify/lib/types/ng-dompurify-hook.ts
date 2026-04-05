import {type HookName} from 'dompurify';

export interface NgDompurifyHook {
    readonly name: HookName;
    hook(...args: any[]): void;
}
