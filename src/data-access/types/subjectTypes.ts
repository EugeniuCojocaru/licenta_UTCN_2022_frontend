import { Subject } from "@mui/icons-material";

export const YearsOfStudy = [
  { label: "I", value: 1 },
  { label: "II", value: 2 },
  { label: "III", value: 3 },
  { label: "IV", value: 4 },
];
export const Semesters = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
];
export const TypesOfAssessment = [
  { label: "Exam", value: 0 },
  { label: "Colloquium", value: 1 },
  { label: "Verification", value: 2 },
];

export const SubjectCategory1 = [
  { label: "Fundamental", value: 0 },
  { label: "Domain", value: 1 },
  { label: "Speciality", value: 2 },
  { label: "Complementary", value: 3 },
];

export const SubjectCategory2 = [
  { label: "Mandatory", value: 0 },
  { label: "Optional", value: 1 },
  { label: "Dispensable", value: 2 },
];

export interface Subject {
  id: string;
  name: string;
  code: string;
  hasSyllabus: boolean;
}
export interface SubjectCreateDto extends Omit<Subject, "id" | "hasSyllabus"> {}
export const SUBJECT_DEFAULT = {
  id: "",
  name: "",
  code: "",
  hasSyllabus: true,
};
export const mapSubjectToSubjectCreateDto = (
  subject: Subject
): SubjectCreateDto => {
  return {
    name: subject.name,
    code: subject.code,
  };
};
export const mapSubjectsToSelectType = (subjects: Subject[]) =>
  subjects.map(({ name, id }) => ({ label: name, value: id }));
