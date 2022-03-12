import {
    Component,
    ViewEncapsulation,
    ChangeDetectionStrategy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'lib-team-detail',
    templateUrl: './team-detail.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamDetailComponent {

    params$ = this._activatedRoute.params;
    constructor(private _activatedRoute: ActivatedRoute) { }
}

