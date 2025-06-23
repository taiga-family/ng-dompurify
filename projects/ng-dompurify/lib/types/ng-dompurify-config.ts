import type {Config} from 'dompurify';

/**
 * Config that allows to return only string result
 */
export type NgDompurifyConfig = Omit<
    Config,
    'IN_PLACE' | 'RETURN_DOM_FRAGMENT' | 'RETURN_DOM' | 'RETURN_TRUSTED_TYPE'
> & {
    /**
     * Disallow DOM return options to ensure string output
     */
    RETURN_DOM?: never;
    RETURN_DOM_FRAGMENT?: never;
    RETURN_TRUSTED_TYPE?: never;

    /**
     * Disallow in-place sanitization as we always use string input
     */
    IN_PLACE?: never;
};
