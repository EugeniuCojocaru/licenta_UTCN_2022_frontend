import React, { useState } from "react";
import ContentInput from "../../../../components/ContentInput/ContentInput";
import ContentOptionsInput from "../../../../components/ContentOptionsInput/ContentOptionsInput";
import { updateSection8, useAppDispatch } from "../../../../data-access/store";
import {
  ContentOptionsInputType,
  Section8Type,
  SECTION8_DEFAULT,
} from "../../../../data-access/types";
import { TabSectionContainer } from "../AddSyllabus.style";
import { TabSectionFooter } from "../TabSectionFooter";

interface Props {
  handleBack: () => void;
  handleForward: () => void;
  section8Data: Section8Type;
}
export const TabSection8 = ({
  handleBack,
  handleForward,
  section8Data,
}: Props) => {
  const dispatch = useAppDispatch();
  const [state, setState] = useState<Section8Type>(
    section8Data || SECTION8_DEFAULT
  );
  const {
    bibliographyCourse,
    bibliographyLab,
    lecturesCourse,
    lecturesLab,
    teachingMethodsCourse,
    teachingMethodsLab,
  } = state;

  const handleInputChange = (
    field: string,
    value: string[] | ContentOptionsInputType[]
  ) => {
    setState({ ...state, [field]: value });
  };
  const handleTeachingMethodsCourseChange = (newValue: string[]) => {
    handleInputChange("teachingMethodsCourse", newValue);
  };
  const handleTeachingMethodsLabChange = (newValue: string[]) => {
    handleInputChange("teachingMethodsLab", newValue);
  };
  const handleBibliographyCourseChange = (newValue: string[]) => {
    handleInputChange("bibliographyCourse", newValue);
  };
  const handleBibliographyLabChange = (newValue: string[]) => {
    handleInputChange("bibliographyLab", newValue);
  };
  const handleSubmit = () => {
    dispatch(updateSection8(state));
    handleForward();
  };
  return (
    <>
      <p>8. Contents</p>
      <TabSectionContainer onSubmit={handleSubmit}>
        <p>Lectures </p>
        <ContentInput
          label="Teaching methods"
          values={teachingMethodsCourse}
          handleValuesChange={handleTeachingMethodsCourseChange}
        />
        <ContentOptionsInput
          values={lecturesCourse}
          handleValuesChange={handleInputChange}
          fieldName="lecturesCourse"
        />
        <ContentInput
          label="Bibliography"
          values={bibliographyCourse}
          handleValuesChange={handleBibliographyCourseChange}
        />
        <p>Applications – Seminars/Laboratory/Project </p>
        <ContentInput
          label="Teaching methods"
          values={teachingMethodsLab}
          handleValuesChange={handleTeachingMethodsLabChange}
        />
        <ContentOptionsInput
          values={lecturesLab}
          handleValuesChange={handleInputChange}
          fieldName="lecturesLab"
        />
        <ContentInput
          label="Bibliography"
          values={bibliographyLab}
          handleValuesChange={handleBibliographyLabChange}
        />
        <TabSectionFooter handleBack={handleBack} />
      </TabSectionContainer>
    </>
  );
};
