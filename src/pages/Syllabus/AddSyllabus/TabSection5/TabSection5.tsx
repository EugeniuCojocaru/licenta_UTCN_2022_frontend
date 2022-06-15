import React, { useState } from "react";
import Comp1 from "../../../../components/Comp1/Comp1";
import { updateSection5, useAppDispatch } from "../../../../data-access/store";
import { Section5Type, SECTION5_DEFAULT } from "../../../../data-access/types";
import { TabSectionContainer } from "../AddSyllabus.style";
import { TabSectionFooter } from "../TabSectionFooter";

interface Props {
  handleBack: () => void;
  handleForward: () => void;
  section5Data: Section5Type;
}
export const TabSection5 = ({
  handleBack,
  handleForward,
  section5Data,
}: Props) => {
  const dispatch = useAppDispatch();
  const [state, setState] = useState<Section5Type>(
    section5Data || SECTION5_DEFAULT
  );
  const { course, application } = state;
  const handleCourseChange = (newValue: string[]) => {
    setState({ ...state, course: newValue });
  };
  const handleApplicationChange = (newValue: string[]) => {
    setState({ ...state, application: newValue });
  };
  const handleSubmit = () => {
    dispatch(updateSection5(state));
    handleForward();
  };
  return (
    <>
      <p>5. Requirements *optional</p>
      <TabSectionContainer onSubmit={handleSubmit}>
        <Comp1
          label={"Course"}
          values={course}
          handleValuesChange={handleCourseChange}
        />
        <Comp1
          label={"Applications"}
          values={application}
          handleValuesChange={handleApplicationChange}
        />
        <TabSectionFooter handleBack={handleBack} />
      </TabSectionContainer>
    </>
  );
};
