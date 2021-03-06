import { AnyMap } from "immer/dist/internal";
import { SelectType } from "../componentsType";
import { mapSubjectsToSelectType } from "../subjectTypes";
import { mapUsersToSelectType } from "../userTypes";

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
    "id" | "subject" | "lecturer" | "selectedTeachers" | "year"
  > {
  yearOfStudy: string;
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
    yearOfStudy: year,
    semester,
    assessment,
    category1,
    category2,
    teachers: selectedTeachers.map((item) => item.value),
  };
};

export const mapSection2DtoToSection2Type = (
  section2Dto: any,
  subject: any
): Section2Type => {
  return {
    id: section2Dto.id,
    subject: { ...mapSubjectsToSelectType([subject])[0] },
    lecturer: { ...mapUsersToSelectType([section2Dto.teacher])[0] },
    selectedTeachers: mapUsersToSelectType(section2Dto.teachers),
    year: section2Dto.yearOfStudy,
    semester: section2Dto.semester,
    assessment: section2Dto.assessment,
    category1: section2Dto.category1,
    category2: section2Dto.category2,
  };
};
