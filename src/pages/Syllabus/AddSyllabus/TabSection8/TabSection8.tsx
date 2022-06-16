import React, { useState } from "react";
import ContentOptionsInput from "../../../../components/ContentOptionsInput/ContentOptionsInput";
import { useAppDispatch } from "../../../../data-access/store";
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
  const handleSubmit = () => {
    //dispatch(updateSection2(newState));
    handleForward();
  };
  return (
    <>
      <p>2. Data about the subject</p>
      <TabSectionContainer onSubmit={handleSubmit}>
        <ContentOptionsInput
          values={lecturesCourse}
          handleValuesChange={handleInputChange}
          fieldName="lecturesCourse"
        />
        <TabSectionFooter handleBack={handleBack} />
      </TabSectionContainer>
    </>
  );
};
