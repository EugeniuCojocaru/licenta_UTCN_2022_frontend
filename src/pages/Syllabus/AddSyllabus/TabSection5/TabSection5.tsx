import React, { useState } from "react";
import { messages } from "../../../../common";
import { useNotification } from "../../../../common/hooks/useNotification";
import ContentInput from "../../../../components/ContentInput/ContentInput";
import { updateSection5, useAppDispatch } from "../../../../data-access/store";
import {
  Section5Type,
  SECTION5_DEFAULT,
  Severity,
} from "../../../../data-access/types";
import { InputsContainer, TabSectionContainer } from "../AddSyllabus.style";
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
  const { showNotification } = useNotification();
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
    showNotification(Severity.Info, messages.ok);
    handleForward();
  };
  return (
    <>
      <p>5. Requirements *optional</p>
      <TabSectionContainer onSubmit={handleSubmit}>
        <InputsContainer>
          <ContentInput
            label={"Course"}
            values={course}
            handleValuesChange={handleCourseChange}
          />
          <ContentInput
            label={"Applications"}
            values={application}
            handleValuesChange={handleApplicationChange}
          />
        </InputsContainer>
        <TabSectionFooter handleBack={handleBack} />
      </TabSectionContainer>
    </>
  );
};
