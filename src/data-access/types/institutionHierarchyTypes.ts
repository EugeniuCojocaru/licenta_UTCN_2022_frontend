import { SelectType } from "./componentsType";
export interface InstitutionHierarchyType {
  id: string;
  name: string;
}
export interface InstitutionHierarchyCreateDto {
  name: string;
}

export interface FacultyCreateDto {
  name: string;
  institutionId: string;
}
export interface DepartmentCreateDto {
  name: string;
  facultyId: string;
}
export interface FieldOfStudyCreateDto {
  name: string;
  departmentId: string;
}
export interface InstitutionHierarchyUpdateDto {
  id: string;
  name: string;
  idParent?: string;
}

export interface InstitutionHierarchyDeleteDto {
  id: string;
  idParent: string;
}

export const mapInstitutionsHierarchyToSelectType = (
  data: InstitutionHierarchyType[]
): SelectType[] => data.map(({ id, name }) => ({ label: name, value: id }));
