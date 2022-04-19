import { Observable, of } from 'rxjs';
import { PersonDTO } from '../../../application/ports/secondary/person.dto';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { GETS_ALL_PERSON_DTO, GetsAllPersonDtoPort } from '../../../application/ports/secondary/gets-all-person.dto-port';
import { filter, map } from 'rxjs/operators';
// import { CONTEXT_DTO_STORAGE, ContextDtoStoragePort } from '../../../application/ports/secondary/context-dto.storage-port';

@Component({
    selector: 'lib-our-team',
    templateUrl: './our-team.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OurTeamComponent {


    //sortowanie po literach

    teamList$: Observable<PersonDTO[]> = this._getsAllPersonDto.getAll()
        .pipe(
            map((teamList: PersonDTO[]) =>
                teamList.sort((a, b) => a.name.localeCompare(b.name))
            )
        );

    constructor(
        @Inject(GETS_ALL_PERSON_DTO)
        private _getsAllPersonDto: GetsAllPersonDtoPort
    ) { }
}
