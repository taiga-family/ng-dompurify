import {Location} from '@angular/common';
import type {ErrorHandler} from '@angular/core';
import {inject, Injectable} from '@angular/core';

const KNOWN_ISSUES: string[] = [
    'requestAnimationFrame is not defined', // hljs
];

@Injectable()
export class ServerErrorHandler implements ErrorHandler {
    protected readonly location = inject(Location);

    public handleError(error: Error | string): void {
        const errorMessage = (typeof error === 'string' ? error : error.message) || '';

        if (KNOWN_ISSUES.some((issue) => errorMessage.includes(issue))) {
            console.warn(`Ignored known SSR issue: ${errorMessage}`);

            return;
        }

        console.error(`Error at ${this.location.path()}: ${errorMessage}`);

        if (process.env['NODE_ENV'] === 'production') {
            console.error('Aborting process due to critical server error');
            process.abort();
        }
    }
}
