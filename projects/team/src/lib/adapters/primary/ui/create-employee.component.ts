import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_PERSON_DTO, AddsPersonDtoPort } from '../../../application/ports/secondary/adds-person.dto-port';

@Component({
    selector: 'lib-create-employee',
    templateUrl: './create-employee.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CreateEmployeeComponent {
    readonly createEmployee: FormGroup = new FormGroup({
        name: new FormControl(),
        description: new FormControl(),
        linkUrl: new FormControl(),
        imageLink: new FormControl(),
        department: new FormControl(),
    });

    constructor(
        @Inject(ADDS_PERSON_DTO) private _addsPersonDto: AddsPersonDtoPort
    ) { }

    onCreateEmployeeSubmited(createEmployee: FormGroup): void {
        if (createEmployee.invalid) {
            return
        }
        this._addsPersonDto.add({
            name: createEmployee.get('name').value,
            description: createEmployee.get('description').value,
            // linkUrl: createEmployee.get('linkUrl').value,
            imageLink: createEmployee.get('imageLink').value,
            department: createEmployee.get('department').value,
        });
        this.createEmployee.reset();
    }
}
