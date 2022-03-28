import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminPage } from './admin.page';
import { CreateEmployeeComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/create-employee.component-module';
import { FirebaseTeamListServiceModule } from '../../../projects/team/src/lib/adapters/secondary/infrastructure/firebase-team-list.service-module';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminPage,
      }
    ]),
    CreateEmployeeComponentModule,
    FirebaseTeamListServiceModule,
  ],
  declarations: [AdminPage],
  providers: [],
  exports: []
})
export class AdminPageModule {
}
