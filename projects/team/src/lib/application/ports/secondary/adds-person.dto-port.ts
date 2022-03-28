import { InjectionToken } from '@angular/core';
import { PersonDTO } from './person.dto';

export const ADDS_PERSON_DTO = new InjectionToken<AddsPersonDtoPort>('ADDS_PERSON_DTO');

export interface AddsPersonDtoPort {
  add(person: Partial<PersonDTO>): void;
}
