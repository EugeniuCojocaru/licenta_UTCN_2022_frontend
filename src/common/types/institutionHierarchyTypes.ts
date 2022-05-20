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
