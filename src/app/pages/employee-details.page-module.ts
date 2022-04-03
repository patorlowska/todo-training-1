import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeDetailsPage } from './employee-details.page';
import { EmployeeDetailComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/employee-detail.component-module';
import { FirebaseTeamListServiceModule } from '../../../projects/team/src/lib/adapters/secondary/infrastructure/firebase-team-list.service-module';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: ':personId',
        component: EmployeeDetailsPage,
      }
    ]),
    EmployeeDetailComponentModule,
    FirebaseTeamListServiceModule,
  ],
  declarations: [EmployeeDetailsPage],
  providers: [],
  exports: []
})
export class EmployeeDetailsPageModule {
}
