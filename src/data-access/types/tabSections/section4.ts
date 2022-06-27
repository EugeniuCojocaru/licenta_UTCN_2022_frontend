import { SelectType } from "../componentsType";
import { mapSubjectsToSelectType } from "../subjectTypes";

export const SECTION4_DEFAULT: Section4Type = {
  id: "",
  selectedSubjects: [],
  competences: [],
};
export interface Section4Type {
  id: string;
  selectedSubjects: SelectType[];
  competences: string[];
}
export interface Section4CreateDto
  extends Omit<Section4Type, "id" | "selectedSubjects"> {
  subjects: string[];
}
export const mapSection4TypeToSection4CreateDto = (
  section3: Section4Type
): Section4CreateDto => {
  const { selectedSubjects, competences } = section3;

  return {
    subjects: selectedSubjects.map((value) => value.value),
    competences,
  };
};
export const mapSection4DtoToSection4Type = (
  section4Dto: any
): Section4Type => {
  console.log(
    section4Dto.subjects,
    mapSubjectsToSelectType(section4Dto.subjects)
  );
  return {
    id: section4Dto.id,
    competences: section4Dto.compentences,
    selectedSubjects: [...mapSubjectsToSelectType(section4Dto.subjects)],
  };
};
