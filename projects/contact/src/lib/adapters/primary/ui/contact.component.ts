import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_MESSAGE_DTO, AddsMessageDtoPort } from '../../../application/ports/secondary/adds-message.dto-port';

@Component({
  selector: 'lib-contact',
  templateUrl: './contact.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  readonly contactForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    comment: new FormControl(),
  });


  constructor(@Inject(ADDS_MESSAGE_DTO) private _addsMessageDto: AddsMessageDtoPort) {
  }

  onContactFormSubmited(contactForm: FormGroup): void {
    if (contactForm.invalid) {
      return;
    }
    this._addsMessageDto.add({
      name: contactForm.get('name').value,
      email: contactForm.get('email').value,
      comment: contactForm.get('comment').value,
    });
    contactForm.reset();
  }
}
