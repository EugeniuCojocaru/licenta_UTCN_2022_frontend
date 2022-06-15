import { SelectType } from "../componentsType";

export const SECTION4_DEFAULT: Section4Type = {
  selectedSubjects: [],
  competences: [],
};

export interface Section4Type {
  selectedSubjects: SelectType[];
  competences: string[];
}
