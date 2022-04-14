import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonDTO } from '../../../application/ports/secondary/person.dto';
import { GETS_ONE_PERSON_DTO, GetsOnePersonDtoPort } from '../../../application/ports/secondary/gets-one-person.dto-port';
import { switchMap, tap } from 'rxjs/operators';
import { CONTEXT_DTO_STORAGE, ContextDtoStoragePort } from '../../../application/ports/secondary/context-dto.storage-port';
import { ContextDTO } from '../../../application/ports/secondary/context.dto';

@Component({
    selector: 'lib-employee-detail',
    templateUrl: './employee-detail.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailComponent {
    employee$: Observable<PersonDTO> = this._contextDtoStoragePort
        .asObservable()
        .pipe(switchMap((data: ContextDTO) => this._getsOnePersonDto.getOne(data.personId)));


    constructor(
        @Inject(GETS_ONE_PERSON_DTO)
        private _getsOnePersonDto: GetsOnePersonDtoPort, @Inject(CONTEXT_DTO_STORAGE)
        private _contextDtoStoragePort: ContextDtoStoragePort) { }
}

