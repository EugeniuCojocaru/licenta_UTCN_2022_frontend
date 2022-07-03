import React, { useState } from "react";
import { messages } from "../../../../common";
import { useNotification } from "../../../../common/hooks/useNotification";
import ContentInput from "../../../../components/ContentInput/ContentInput";
import ContentOptionsInput from "../../../../components/ContentOptionsInput/ContentOptionsInput";
import { updateSection8, useAppDispatch } from "../../../../data-access/store";
import {
  ContentOptionsInputType,
  Section8Type,
  SECTION8_DEFAULT,
  Severity,
} from "../../../../data-access/types";
import { InputsContainer, TabSectionContainer } from "../AddSyllabus.style";
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
  const { showNotification } = useNotification();
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
  const validate = (): boolean => {
    if (teachingMethodsCourse.length === 0) return false;
    if (teachingMethodsLab.length === 0) return false;
    if (bibliographyCourse.length === 0) return false;
    if (bibliographyLab.length === 0) return false;
    if (teachingMethodsCourse.length === 0) return false;
    if (teachingMethodsLab.length === 0) return false;

    return true;
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      dispatch(updateSection8(state));
      showNotification(Severity.Info, messages.ok);
      handleForward();
    } else {
      showNotification(Severity.Error, messages.allFields);
    }
  };
  return (
    <>
      <p>8. Contents</p>
      <TabSectionContainer onSubmit={handleSubmit}>
        <InputsContainer>
          <p>Lectures </p>
          <ContentInput
            label="Teaching methods *"
            values={teachingMethodsCourse}
            handleValuesChange={handleTeachingMethodsCourseChange}
          />
          <ContentOptionsInput
            values={lecturesCourse}
            handleValuesChange={handleInputChange}
            fieldName="lecturesCourse"
          />
          <ContentInput
            label="Bibliography *"
            values={bibliographyCourse}
            handleValuesChange={handleBibliographyCourseChange}
          />
          <p>Applications – Seminars/Laboratory/Project </p>
          <ContentInput
            label="Teaching methods *"
            values={teachingMethodsLab}
            handleValuesChange={handleTeachingMethodsLabChange}
          />
          <ContentOptionsInput
            values={lecturesLab}
            handleValuesChange={handleInputChange}
            fieldName="lecturesLab"
          />
          <ContentInput
            label="Bibliography *"
            values={bibliographyLab}
            handleValuesChange={handleBibliographyLabChange}
          />
        </InputsContainer>
        <TabSectionFooter handleBack={handleBack} />
      </TabSectionContainer>
    </>
  );
};
