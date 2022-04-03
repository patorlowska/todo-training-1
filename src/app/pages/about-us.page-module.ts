import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutUsPage } from './about-us.page';
import { OurTeamComponentModule } from '@team';
import { FirebaseTeamListServiceModule } from '../../../projects/team/src/lib/adapters/secondary/infrastructure/firebase-team-list.service-module';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutUsPage,
      }
    ]),
    OurTeamComponentModule,
    FirebaseTeamListServiceModule,
  ],
  declarations: [AboutUsPage],
  providers: [],
  exports: []
})
export class AboutUsPageModule {
}