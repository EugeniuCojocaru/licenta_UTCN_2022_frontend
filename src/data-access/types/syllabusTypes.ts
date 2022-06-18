import {
  Section10CreateDto,
  Section1CreateDto,
  Section2CreateDto,
  Section3CreateDto,
  Section4CreateDto,
  Section5CreateDto,
  Section6CreateDto,
  Section7CreateDto,
  Section8CreateDto,
  Section9CreateDto,
} from "./tabSections";

export interface SyllabusCreateDto {
  subjectId: string;
  section1: Section1CreateDto;
  section2: Section2CreateDto;
  section3: Section3CreateDto;
  section4: Section4CreateDto;
  section5: Section5CreateDto;
  section6: Section6CreateDto;
  section7: Section7CreateDto;
  section8: Section8CreateDto;
  section9: Section9CreateDto;
  section10: Section10CreateDto;
}
