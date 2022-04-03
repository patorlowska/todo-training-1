import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonDTO } from './person.dto';

export const GETS_ONE_PERSON_DTO = new InjectionToken<GetsOnePersonDtoPort>('GETS_ONE_PERSON_DTO');

export interface GetsOnePersonDtoPort {
  getOne(id: string): Observable<PersonDTO>;
}
