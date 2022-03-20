import { DepartmentDTO } from './department.dto';

export interface PersonDTO {
  readonly id: string;
  readonly imageLink: string;
  readonly name: string;
  readonly description: string;
  readonly linkUrl: string;
  readonly department: DepartmentDTO;
}
