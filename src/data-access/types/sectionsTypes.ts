import { SelectType } from "./componentsType";

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

/*Section 2*/
export interface TabSection2Type {
  id: string;
  subject: SelectType | null;
  lecturer: SelectType | null;
  selectedTeachers: SelectType[];
  year: string;
  semester: string;
  assessment: string;
  category1: string;
  category2: string;
}
export const SECTION2_DEFAULT: TabSection2Type = {
  id: "",
  subject: null,
  lecturer: null,
  selectedTeachers: [],
  year: "",
  semester: "",
  assessment: "",
  category1: "",
  category2: "",
};
