import { ContentOptionsInputType } from "../componentsType";

export const SECTION8_DEFAULT: Section8Type = {
  teachingMethodsCourse: [],
  lecturesCourse: [],
  bibliographyCourse: [],
  teachingMethodsLab: [],
  lecturesLab: [],
  bibliographyLab: [],
};

export interface Section8Type {
  teachingMethodsCourse: string[];
  lecturesCourse: ContentOptionsInputType[];
  bibliographyCourse: string[];
  teachingMethodsLab: string[];
  lecturesLab: ContentOptionsInputType[];
  bibliographyLab: string[];
}
