import { Button } from "@mui/material";
import React from "react";
import { TabSectionFooter } from "./TabSectionFooter";

import { SyllabusCreateDto } from "../../../data-access/types/syllabusTypes";
import {
  createSyllabus,
  updateSyllabus,
} from "../../../data-access/service/syllabusService";
import { mapSection3TypeToSection3CreateDto } from "../../../data-access/types/tabSections/section3";
import {
  mapSection10TypeToSection10CreateDto,
  mapSection2TypeToSection2CreateDto,
  mapSection4TypeToSection4CreateDto,
  mapSection5TypeToSection5CreateDto,
  mapSection6TypeToSection6CreateDto,
  mapSection7TypeToSection7CreateDto,
  mapSection8TypeToSection8CreateDto,
  mapSection9TypeToSection9CreateDto,
  Section10Type,
  Section1Type,
  Section2Type,
  Section3Type,
  Section4Type,
  Section5Type,
  Section6Type,
  Section7Type,
  Section8Type,
  Section9Type,
  Severity,
} from "../../../data-access/types";
import { SUBJECT_URL, validateResponseStatus } from "../../../common";
import { useAppDispatch } from "../../../data-access/store/hooks";
import { resetSections } from "../../../data-access/store";
import { useNotification } from "../../../common/hooks/useNotification";
import { useNavigate } from "react-router-dom";
interface Props {
  handleForward: () => void;
  handleBack: () => void;
  idSyllabus: string;
  section1Data: Section1Type;
  section2Data: Section2Type;
  section3Data: Section3Type;
  section4Data: Section4Type;
  section5Data: Section5Type;
  section6Data: Section6Type;
  section7Data: Section7Type;
  section8Data: Section8Type;
  section9Data: Section9Type;
  section10Data: Section10Type;
}
export const TabSectionFinish = ({
  handleBack,
  handleForward,
  idSyllabus,
  section1Data,
  section2Data,
  section3Data,
  section4Data,
  section5Data,
  section6Data,
  section7Data,
  section8Data,
  section9Data,
  section10Data,
}: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { showNotification } = useNotification();
  const handleSubmit = async () => {
    const syllabus: SyllabusCreateDto = {
      subjectId: section2Data.subject?.value || "",
      section1: section1Data,
      section2: mapSection2TypeToSection2CreateDto(section2Data),
      section3: mapSection3TypeToSection3CreateDto(section3Data),
      section4: mapSection4TypeToSection4CreateDto(section4Data),
      section5: mapSection5TypeToSection5CreateDto(section5Data),
      section6: mapSection6TypeToSection6CreateDto(section6Data),
      section7: mapSection7TypeToSection7CreateDto(section7Data),
      section8: mapSection8TypeToSection8CreateDto(section8Data),
      section9: mapSection9TypeToSection9CreateDto(section9Data),
      section10: mapSection10TypeToSection10CreateDto(section10Data),
    };
    if (idSyllabus) {
      const response = await updateSyllabus(syllabus, idSyllabus);
      if (validateResponseStatus(response?.status)) {
        dispatch(resetSections());
        showNotification(Severity.Success, "Syllabus updated successfully");
        navigate(SUBJECT_URL);
      } else {
        showNotification(Severity.Error, response?.data);
      }
    } else {
      const response = await createSyllabus(syllabus);
      if (validateResponseStatus(response?.status)) {
        dispatch(resetSections());
        showNotification(Severity.Success, "Syllabus created successfully");
        navigate(SUBJECT_URL);
      } else {
        showNotification(Severity.Error, response?.data);
      }
    }
  };

  return (
    <>
      <p>Finish page</p>
      <Button onClick={handleSubmit}>submit</Button>
      <TabSectionFooter handleBack={handleBack} handleForward={handleForward} />
    </>
  );
};
