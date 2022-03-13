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
        alert((`email:${contactForm.value.email}, text:${contactForm.value.text}`));
        console.log(contactForm.getRawValue());
    }
}
