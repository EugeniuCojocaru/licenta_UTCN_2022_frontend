import { SelectType } from "../componentsType";

export const SECTION2_DEFAULT: Section2Type = {
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
export interface Section2Type {
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
export interface Section2CreateDto
  extends Omit<
    Section2Type,
    "id" | "subject" | "lecturer" | "selectedTeachers"
  > {
  teacherId: string;
  teachers: string[];
}
export const mapSection2TypeToSection2CreateDto = (
  section2: Section2Type
): Section2CreateDto => {
  const {
    lecturer,
    selectedTeachers,
    year,
    semester,
    assessment,
    category1,
    category2,
  } = section2;
  return {
    teacherId: lecturer?.value || "",
    year,
    semester,
    assessment,
    category1,
    category2,
    teachers: selectedTeachers.map((item) => item.value),
  };
};
