export const SECTION10_DEFAULT: Section10Type = {
  courseCriteria: "",
  courseMethods: "",
  courcePercentage: 0,
  seminarCriteria: "",
  seminarMethods: "",
  seminarPercentage: 0,
  laboratoryCriteria: "",
  laboratoryMethods: "",
  laboratoryPercentage: 0,
  projectCriteria: "",
  projectMethods: "",
  projectPercentage: 0,
  minimumPerformance: "",
  conditionsFinalExam: [],
  conditionsPromotion: "",
  id: "",
};

export interface Section10Type {
  courseCriteria: string;
  courseMethods: string;
  courcePercentage: number;
  seminarCriteria: string;
  seminarMethods: string;
  seminarPercentage: number;
  laboratoryCriteria: string;
  laboratoryMethods: string;
  laboratoryPercentage: number;
  projectCriteria: string;
  projectMethods: string;
  projectPercentage: number;
  minimumPerformance: string;
  conditionsFinalExam: string[];
  conditionsPromotion: string;
  id: string;
}
export interface Section10CreateDto extends Omit<Section10Type, "id"> {}
export const mapSection10TypeToSection10CreateDto = (
  section3: Section10Type
): Section10CreateDto => {
  const {
    courseCriteria,
    courseMethods,
    courcePercentage,
    seminarCriteria,
    seminarMethods,
    seminarPercentage,
    laboratoryCriteria,
    laboratoryMethods,
    laboratoryPercentage,
    projectCriteria,
    projectMethods,
    projectPercentage,
    minimumPerformance,
    conditionsFinalExam,
    conditionsPromotion,
  } = section3;

  return {
    courseCriteria,
    courseMethods,
    courcePercentage,
    seminarCriteria,
    seminarMethods,
    seminarPercentage,
    laboratoryCriteria,
    laboratoryMethods,
    laboratoryPercentage,
    projectCriteria,
    projectMethods,
    projectPercentage,
    minimumPerformance,
    conditionsFinalExam,
    conditionsPromotion,
  };
};
