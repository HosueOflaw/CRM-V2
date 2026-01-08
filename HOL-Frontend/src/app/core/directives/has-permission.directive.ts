import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { AuthService } from '../services/auth';

@Directive({
    selector: '[hasPermission]',
    standalone: true
})
export class HasPermissionDirective implements OnInit {
    private permission: string = '';

    @Input() set hasPermission(val: string) {
        this.permission = val;
        this.updateView();
    }

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.updateView();
    }

    private updateView() {
        if (this.authService.hasFeature(this.permission)) {
            // If user has permission, show the element
            if (this.viewContainer.length === 0) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
        } else {
            // If no permission, remove it from DOM
            this.viewContainer.clear();
        }
    }
}
