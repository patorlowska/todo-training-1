import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirstPersonPage } from './first-person.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: FirstPersonPage,
        }
      ])],
  	declarations: [FirstPersonPage],
  	providers: [],
  	exports: [] })
export class FirstPersonPageModule {
}
