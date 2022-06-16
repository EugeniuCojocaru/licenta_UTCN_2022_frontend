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
  conditionPropotion: "",
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
  conditionPropotion: string;
}
