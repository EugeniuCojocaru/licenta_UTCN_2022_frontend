import React, { useState } from "react";
import ContentInput from "../../../../components/ContentInput/ContentInput";
import { updateSection6, useAppDispatch } from "../../../../data-access/store";
import { Section6Type, SECTION6_DEFAULT } from "../../../../data-access/types";
import { TabSectionContainer } from "../AddSyllabus.style";
import { TabSectionFooter } from "../TabSectionFooter";

interface Props {
  handleBack: () => void;
  handleForward: () => void;
  section6Data: Section6Type;
}
export const TabSection6 = ({
  handleBack,
  handleForward,
  section6Data,
}: Props) => {
  const dispatch = useAppDispatch();

  const [state, setState] = useState<Section6Type>(
    section6Data || SECTION6_DEFAULT
  );
  const { professional, cross } = state;
  const handleProfessionalChange = (newValue: string[]) => {
    setState({ ...state, professional: newValue });
  };
  const handleCrossChange = (newValue: string[]) => {
    setState({ ...state, cross: newValue });
  };
  const handleSubmit = () => {
    dispatch(updateSection6(state));
    handleForward();
  };
  return (
    <>
      <p>6. Specific competence</p>
      <TabSectionContainer onSubmit={handleSubmit}>
        <ContentInput
          label={"Professional competences *"}
          values={professional}
          handleValuesChange={handleProfessionalChange}
        />
        <ContentInput
          label={"Cross competences *"}
          values={cross}
          handleValuesChange={handleCrossChange}
        />
        <TabSectionFooter handleBack={handleBack} />
      </TabSectionContainer>
    </>
  );
};
