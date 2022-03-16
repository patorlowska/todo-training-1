import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutUsPage } from './about-us.page';
import { OurTeamComponentModule } from '@team';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutUsPage,
      }
    ]),
    OurTeamComponentModule
  ],
  declarations: [AboutUsPage],
  providers: [],
  exports: []
})
export class AboutUsPageModule {
}