import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactPage } from './contact.page';
import { ContactComponentModule } from '../../../projects/contact/src/lib/adapters/primary/ui/contact.component-module';
import { FirebaseMessagessServiceModule } from '../../../projects/contact/src/lib/adapters/secondary/infrastructure/firebase-messagess.service-module';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([
    {
      path: '',
      component: ContactPage,
    }
  ]),
    ContactComponentModule, FirebaseMessagessServiceModule],
  declarations: [ContactPage],
  providers: [],
  exports: []
})
export class ContactPageModule {
}
