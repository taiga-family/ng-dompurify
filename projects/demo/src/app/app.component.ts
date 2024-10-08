import {ChangeDetectionStrategy, Component, inject, SecurityContext} from '@angular/core';
import {FormsModule} from '@angular/forms';
import type {SafeValue} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {NgDompurifyPipe} from '@taiga-ui/dompurify';

const dirtyHtml =
    '<p style="color: red;"> HELLO <iframe//src=JavaScript:alert&lpar;1)></ifrAMe><br>goodbye</p>';
const svg = `<svg width="56" height="56">
    <path fill="#D75A4A" style="malicious" d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543 c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503 c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"/>
</svg>`;

@Component({
    standalone: true,
    selector: 'my-app',
    imports: [FormsModule, NgDompurifyPipe],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    private readonly sanitizer = inject(DomSanitizer);

    protected value = dirtyHtml;
    protected domValue = svg;

    protected unwrap(value: SafeValue | null): string {
        return this.sanitizer.sanitize(SecurityContext.HTML, value) ?? '';
    }
}
