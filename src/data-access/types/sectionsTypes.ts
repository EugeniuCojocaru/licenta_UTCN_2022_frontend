export interface Section1 {
  id: string;
  institutionId: string;
  facultyId: string;
  departmentId: string;
  fieldOfStudyId: string;
  cycleOfStudy: string;
  programOfStudy: string;
  qualification: string;
  formOfEducation: string;
}

export interface Section1CreateDto extends Omit<Section1, "id"> {}

export const SECTION1_DEFAULT = {
  id: "",
  institutionId: "",
  facultyId: "",
  departmentId: "",
  fieldOfStudyId: "",
  cycleOfStudy: "",
  programOfStudy: "",
  qualification: "",
  formOfEducation: "",
};
