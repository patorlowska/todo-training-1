import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { OurTeamComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/our-team.component-module';
import { TeamListComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/team-list.component-module';
import { FirebaseTeamListServiceModule } from '../../../projects/team/src/lib/adapters/secondary/infrastructure/firebase-team-list.service-module';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      }
    ]),
    OurTeamComponentModule,
    TeamListComponentModule,
    FirebaseTeamListServiceModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: []
})
export class HomePageModule {
}
