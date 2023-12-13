import {Config} from 'dompurify';

/**
 * Config that allows to return only string result
 */
export type NgDompurifyConfig = Config & {
    RETURN_DOM_FRAGMENT?: false;
    RETURN_DOM?: false;
};
