import type {SanitizeStyle} from '../../lib/types/sanitize-style';

export const sanitizeStyle: SanitizeStyle = (style) => (style.includes('(') ? '' : style);
