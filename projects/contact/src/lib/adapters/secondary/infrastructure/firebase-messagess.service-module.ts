import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseMessagessService } from './firebase-messagess.service';
import { ADDS_MESSAGE_DTO } from '../../../application/ports/secondary/adds-message.dto-port';

@NgModule({
	imports: [AngularFirestoreModule],
	declarations: [],
	providers: [FirebaseMessagessService, { provide: ADDS_MESSAGE_DTO, useExisting: FirebaseMessagessService }],
	exports: []
})
export class FirebaseMessagessServiceModule {
}
