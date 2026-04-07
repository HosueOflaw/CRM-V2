import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, NO_ERRORS_SCHEMA, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-fax-to-work-report',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './fax-to-work-report.html',
    styleUrl: './fax-to-work-report.css',
    encapsulation: ViewEncapsulation.None,
    schemas: [NO_ERRORS_SCHEMA]
})
export class FaxToWorkReport {
    @Input() clientData: any = {};
    @Input() isPreview: boolean = false;
    @Output() close = new EventEmitter<void>();

    currentDate: string = new Date().toLocaleDateString('en-GB').replace(/\//g, '-');

    printDocument() {
        window.print();
    }
}
