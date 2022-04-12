import { ActivatedRoute } from '@angular/router';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonDTO } from '../../../application/ports/secondary/person.dto';
import { GETS_ONE_PERSON_DTO, GetsOnePersonDtoPort } from '../../../application/ports/secondary/gets-one-person.dto-port';
import { switchMap, tap } from 'rxjs/operators';

@Component({
    selector: 'lib-employee-detail',
    templateUrl: './employee-detail.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailComponent {

    employee$: Observable<PersonDTO> = this._activatedRoute.params
        .pipe(switchMap(({ personId }) => this._getsOnePersonDto.getOne(personId)))
        .pipe(tap(x => console.log(x)));

    constructor(
        @Inject(GETS_ONE_PERSON_DTO)
        private _getsOnePersonDto: GetsOnePersonDtoPort,
        private _activatedRoute: ActivatedRoute) { }
}

