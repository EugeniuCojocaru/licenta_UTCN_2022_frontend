import { Section1CreateDto, Section2CreateDto } from "./tabSections";

export interface SyllabusCreateDto {
  subjectId: string;
  section1: Section1CreateDto;
  section2: Section2CreateDto;
}
