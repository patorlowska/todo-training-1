import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'lib-contact',
    templateUrl: './contact.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
    readonly contactForm: FormGroup = new FormGroup({
        email: new FormControl(),
        text: new FormControl(),
    });

    onFormSubmited(contactForm: FormGroup): void {
        alert(contactForm.get('email').value);
        console.log(contactForm.getRawValue());
    }
}
