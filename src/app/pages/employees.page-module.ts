import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeesPage } from './employees.page';
import { OurTeamComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/our-team.component-module';
import { FirebaseTeamListServiceModule } from '../../../projects/team/src/lib/adapters/secondary/infrastructure/firebase-team-list.service-module';
import { TeamListComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/team-list.component-module';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeesPage,
      }
    ]),
    OurTeamComponentModule,
    FirebaseTeamListServiceModule,
    TeamListComponentModule,
  ],
  declarations: [EmployeesPage],
  providers: [],
  exports: []
})
export class EmployeesPageModule {
}
