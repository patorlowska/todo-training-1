import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-admin-page',
    templateUrl: './admin.page.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPage {
}
