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
