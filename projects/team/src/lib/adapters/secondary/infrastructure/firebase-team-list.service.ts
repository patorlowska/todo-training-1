import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllPersonDtoPort } from '../../../application/ports/secondary/gets-all-person.dto-port';
import { PersonDTO } from '../../../application/ports/secondary/person.dto';
import { filterByCriterion } from '@lowgular/shared';
import { AddsPersonDtoPort } from '../../../application/ports/secondary/adds-person.dto-port';
import { GetsOnePersonDtoPort } from '../../../application/ports/secondary/gets-one-person.dto-port';

@Injectable()
export class FirebaseTeamListService implements GetsAllPersonDtoPort, AddsPersonDtoPort,
  GetsOnePersonDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(criterion: Partial<PersonDTO>): Observable<PersonDTO[]> {
    return this._client
      .collection<PersonDTO>('team-list')
      .valueChanges(({ idField: 'id' }))
      .pipe(map((data: PersonDTO[]) => filterByCriterion(data, criterion)));
  }

  add(person: Partial<PersonDTO>): void {
    this._client.collection('team-list').add(person);
  }

  getOne(id: string): Observable<PersonDTO> {
    return this._client
      .doc<PersonDTO>('team-list/' + id)
      .valueChanges({ idField: 'id' });
  }
}
