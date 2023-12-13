import {NgModule, Sanitizer} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgDompurifyPipe, NgDompurifySanitizer} from '@tinkoff/ng-dompurify';

import {AppComponent} from './app.component';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, NgDompurifyPipe],
    declarations: [AppComponent],
    providers: [
        {
            provide: Sanitizer,
            useClass: NgDompurifySanitizer,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
