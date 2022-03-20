import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonDTO } from './person.dto';

export const GETS_ALL_PERSON_DTO = new InjectionToken<GetsAllPersonDtoPort>('GETS_ALL_PERSON_DTO');

export interface GetsAllPersonDtoPort {
  getAll(criterion?: Partial<PersonDTO>): Observable<PersonDTO[]>;
}
