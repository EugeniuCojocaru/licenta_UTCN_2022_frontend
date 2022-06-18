import { ContentOptionsInputType } from "../componentsType";

export const SECTION8_DEFAULT: Section8Type = {
  teachingMethodsCourse: [],
  lecturesCourse: [],
  bibliographyCourse: [],
  teachingMethodsLab: [],
  lecturesLab: [],
  bibliographyLab: [],
  id: "",
};

export interface Section8Type {
  teachingMethodsCourse: string[];
  lecturesCourse: ContentOptionsInputType[];
  bibliographyCourse: string[];
  teachingMethodsLab: string[];
  lecturesLab: ContentOptionsInputType[];
  bibliographyLab: string[];
  id: string;
}

export interface Section8CreateDto extends Omit<Section8Type, "id"> {}
export const mapSection8TypeToSection8CreateDto = (
  section3: Section8Type
): Section8CreateDto => {
  const {
    teachingMethodsCourse,
    lecturesCourse,
    bibliographyCourse,
    teachingMethodsLab,
    lecturesLab,
    bibliographyLab,
  } = section3;

  return {
    teachingMethodsCourse,
    lecturesCourse,
    bibliographyCourse,
    teachingMethodsLab,
    lecturesLab,
    bibliographyLab,
  };
};
