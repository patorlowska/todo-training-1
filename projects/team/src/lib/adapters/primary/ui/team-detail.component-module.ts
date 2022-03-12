import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamDetailComponent } from './team-detail.component';

@NgModule({ imports: [CommonModule],
  	declarations: [TeamDetailComponent],
  	providers: [],
  	exports: [TeamDetailComponent] })
export class TeamDetailComponentModule {
}
