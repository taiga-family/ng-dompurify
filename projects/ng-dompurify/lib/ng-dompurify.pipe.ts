import {inject, Pipe, PipeTransform, SecurityContext} from '@angular/core';
import {DomSanitizer, SafeValue} from '@angular/platform-browser';

import {NgDompurifySanitizer} from './ng-dompurify.service';
import {NgDompurifyConfig} from './types/ng-dompurify-config';

/**
 * Pipe that transforms dirty content to clean via {@link NgDompurifySanitizer}
 */
@Pipe({
    standalone: true,
    name: 'dompurify',
})
export class NgDompurifyPipe implements PipeTransform {
    private readonly sanitizer = inject(NgDompurifySanitizer);
    private readonly domSanitizer = inject(DomSanitizer);

    transform(
        value: Record<string, string> | string | null,
        context: SecurityContext = SecurityContext.HTML,
        config?: NgDompurifyConfig,
    ): SafeValue | null {
        return this.bypassSecurityTrust(
            context,
            this.sanitizer.sanitize(context, value, config),
        );
    }

    private bypassSecurityTrust(
        context: SecurityContext,
        purifiedValue: string,
    ): SafeValue | null {
        switch (context) {
            case SecurityContext.HTML:
                return this.domSanitizer.bypassSecurityTrustHtml(purifiedValue);
            case SecurityContext.STYLE:
                return this.domSanitizer.bypassSecurityTrustStyle(purifiedValue);
            case SecurityContext.URL:
                return this.domSanitizer.bypassSecurityTrustUrl(purifiedValue);
            case SecurityContext.RESOURCE_URL:
                return this.domSanitizer.bypassSecurityTrustResourceUrl(purifiedValue);
            default:
                return null;
        }
    }
}
