export interface Section3Type {
  id: string;
  courseHoursPerWeek: number;
  seminarHoursPerWeek: number;
  laboratoryHoursPerWeek: number;
  projectHoursPerWeek: number;
  courseHoursPerSemester: number;
  seminarHoursPerSemester: number;
  laboratoryHoursPerSemester: number;
  projectHoursPerSemester: number;
  individualStudyA: number;
  individualStudyB: number;
  individualStudyC: number;
  individualStudyD: number;
  individualStudyE: number;
  individualStudyF: number;
  credits: number;
}
export interface Section3CreateDto extends Omit<Section3Type, "id"> {}
export const SECTION3_DEFAULT = {
  id: "",
  courseHoursPerWeek: 0,
  seminarHoursPerWeek: 0,
  laboratoryHoursPerWeek: 0,
  projectHoursPerWeek: 0,
  courseHoursPerSemester: 0,
  seminarHoursPerSemester: 0,
  laboratoryHoursPerSemester: 0,
  projectHoursPerSemester: 0,
  individualStudyA: 0,
  individualStudyB: 0,
  individualStudyC: 0,
  individualStudyD: 0,
  individualStudyE: 0,
  individualStudyF: 0,
  credits: 0,
};

export const mapSection3TypeToSection3CreateDto = (
  section3: Section3Type
): Section3CreateDto => {
  const {
    courseHoursPerWeek,
    seminarHoursPerWeek,
    laboratoryHoursPerWeek,
    projectHoursPerWeek,
    courseHoursPerSemester,
    seminarHoursPerSemester,
    laboratoryHoursPerSemester,
    projectHoursPerSemester,
    individualStudyA,
    individualStudyB,
    individualStudyC,
    individualStudyD,
    individualStudyF,
    individualStudyE,
    credits,
  } = section3;

  return {
    courseHoursPerWeek,
    seminarHoursPerWeek,
    laboratoryHoursPerWeek,
    projectHoursPerWeek,
    courseHoursPerSemester,
    seminarHoursPerSemester,
    laboratoryHoursPerSemester,
    projectHoursPerSemester,
    individualStudyA,
    individualStudyB,
    individualStudyC,
    individualStudyD,
    individualStudyF,
    individualStudyE,
    credits,
  };
};
