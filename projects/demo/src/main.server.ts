import type {ApplicationRef} from '@angular/core';
import {ErrorHandler, importProvidersFrom, mergeApplicationConfig} from '@angular/core';
import type {BootstrapContext} from '@angular/platform-browser';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideServerRendering, ServerModule} from '@angular/platform-server';

import {AppComponent} from './app/app.component';
import {appConfig} from './app/app.config';
import {ServerErrorHandler} from './app/server-error-handler';

const serverConfig = mergeApplicationConfig(appConfig, {
    providers: [
        importProvidersFrom(ServerModule),
        provideServerRendering(),
        {
            provide: ErrorHandler,
            useClass: ServerErrorHandler,
        },
    ],
});

export default async (context: BootstrapContext): Promise<ApplicationRef> =>
    bootstrapApplication(AppComponent, serverConfig, context);
