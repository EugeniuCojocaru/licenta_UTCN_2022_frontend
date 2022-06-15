import { Button } from "@mui/material";
import React from "react";
import { TabSectionFooter } from "./TabSectionFooter";
import {
  Section1,
  Section2Type,
} from "../../../data-access/types/sectionsTypes";
import { SyllabusCreateDto } from "../../../data-access/types/syllabusTypes";
import { mapSection2TypeToSection2CreateDto } from "../../../data-access/types/sectionsTypes";
import { createSyllabus } from "../../../data-access/service/syllabusService";
interface Props {
  handleForward: () => void;
  handleBack: () => void;
  section1Data: Section1;
  section2Data: Section2Type;
}
export const TabSectionFinish = ({
  handleBack,
  handleForward,
  section1Data,
  section2Data,
}: Props) => {
  const handleSubmit = async () => {
    const syllabus: SyllabusCreateDto = {
      subjectId: section2Data.subject?.value || "",
      section1: section1Data,
      section2: mapSection2TypeToSection2CreateDto(section2Data),
    };
    console.log({ syllabus });
    const response = await createSyllabus(syllabus);
    console.log({ response });
  };
  return (
    <>
      <p>3. 3333</p>
      <Button onClick={handleSubmit}>submit</Button>
      <TabSectionFooter handleBack={handleBack} handleForward={handleForward} />
    </>
  );
};
