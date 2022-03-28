import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseTeamListService } from './firebase-team-list.service';
import { GETS_ALL_PERSON_DTO } from '../../../application/ports/secondary/gets-all-person.dto-port';
import { ADDS_PERSON_DTO } from '../../../application/ports/secondary/adds-person.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseTeamListService, { provide: GETS_ALL_PERSON_DTO, useExisting: FirebaseTeamListService }, { provide: ADDS_PERSON_DTO, useExisting: FirebaseTeamListService }],
  	exports: [] })
export class FirebaseTeamListServiceModule {
}
