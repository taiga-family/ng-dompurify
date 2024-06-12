import {APP_BASE_HREF, CommonModule} from '@angular/common';
import type {ElementRef} from '@angular/core';
import {Component, SecurityContext, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {afterEach, beforeEach, describe, expect, it} from '@jest/globals';
import {NgDompurifyPipe, SANITIZE_STYLE} from '@taiga-ui/dompurify';
import {removeAllHooks} from 'dompurify';

import {cleanHtml, dirtyHtml} from './test-samples/html';
import {sanitizeStyle} from './test-samples/sanitize-style';
import {cleanUrl, dirtyUrl} from './test-samples/url';

describe('NgDompurifyPipe', () => {
    @Component({
        standalone: true,
        imports: [CommonModule, NgDompurifyPipe],
        template: `
            <div
                *ngIf="html"
                #element
                [innerHTML]="content | dompurify: context : config"
            >
                test
            </div>
            <div
                *ngIf="style"
                #element
                [style.color]="content | dompurify: context : config"
            ></div>
            <img
                *ngIf="url"
                #element
                alt=""
                [src]="content | dompurify: context : config"
            />
        `,
    })
    class TestComponent {
        @ViewChild('element')
        public readonly element!: ElementRef<HTMLElement>;

        public content = '';
        public context?: SecurityContext = SecurityContext.HTML;
        public config? = {};

        protected get html(): boolean {
            return (
                this.context === undefined ||
                this.context === SecurityContext.HTML ||
                this.context === SecurityContext.SCRIPT ||
                this.context === SecurityContext.NONE
            );
        }

        protected get style(): boolean {
            return this.context === SecurityContext.STYLE;
        }

        protected get url(): boolean {
            return (
                this.context === SecurityContext.URL ||
                this.context === SecurityContext.RESOURCE_URL
            );
        }
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TestComponent],
            providers: [
                {
                    provide: SANITIZE_STYLE,
                    useValue: sanitizeStyle,
                },
                {
                    provide: APP_BASE_HREF,
                    useValue: '/',
                },
            ],
        });

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => {
        removeAllHooks();
    });

    it('sanitizes HTML', () => {
        testComponent.content = dirtyHtml;
        fixture.detectChanges();

        expect(testComponent.element.nativeElement.innerHTML).toBe(cleanHtml);
    });

    it('sanitizes HTML by default', () => {
        testComponent.content = dirtyHtml;
        testComponent.context = undefined;
        testComponent.config = undefined;
        fixture.detectChanges();

        expect(testComponent.element.nativeElement.innerHTML).toBe(cleanHtml);
    });

    it('sanitizes HTML with config', () => {
        testComponent.content = dirtyHtml;
        testComponent.config = {FORBID_TAGS: ['br']};
        fixture.detectChanges();

        expect(testComponent.element.nativeElement.innerHTML).toBe(
            cleanHtml.replace('<br>', ''),
        );
    });

    it('sanitizes URL', () => {
        testComponent.content = dirtyUrl;
        testComponent.context = SecurityContext.URL;
        fixture.detectChanges();

        expect(testComponent.element.nativeElement.getAttribute('src')).toBe(cleanUrl);
    });

    it('sanitizes RESOURCE URL', () => {
        testComponent.content = dirtyUrl;
        testComponent.context = SecurityContext.RESOURCE_URL;
        fixture.detectChanges();

        expect(testComponent.element.nativeElement.getAttribute('src')).toBe(cleanUrl);
    });

    it('sanitizes STYLE', () => {
        testComponent.content = 'some style';
        testComponent.context = SecurityContext.STYLE;
        fixture.detectChanges();

        expect(testComponent.element.nativeElement.getAttribute('style')).toBeNull();
    });

    it('throws error by using SCRIPT security context', done => {
        try {
            testComponent.context = SecurityContext.SCRIPT;
            fixture.detectChanges();
        } catch (error) {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(error).toBeTruthy();
            done();
        }
    });

    it('clears content when used with NONE context', () => {
        testComponent.content = dirtyHtml;
        testComponent.context = SecurityContext.NONE;
        fixture.detectChanges();

        expect(testComponent.element.nativeElement.innerHTML).toBe('');
    });
});
