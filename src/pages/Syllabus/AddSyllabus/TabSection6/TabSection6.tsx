import React, { useState } from "react";
import { messages } from "../../../../common";
import { useNotification } from "../../../../common/hooks/useNotification";
import ContentInput from "../../../../components/ContentInput/ContentInput";
import { updateSection6, useAppDispatch } from "../../../../data-access/store";
import {
  Section6Type,
  SECTION6_DEFAULT,
  Severity,
} from "../../../../data-access/types";
import { InputsContainer, TabSectionContainer } from "../AddSyllabus.style";
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
  const { showNotification } = useNotification();
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
  const validate = (): boolean => {
    if (professional.length === 0) return false;
    if (cross.length === 0) return false;
    return true;
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      dispatch(updateSection6(state));
      showNotification(Severity.Info, messages.ok);
      handleForward();
    } else {
      showNotification(Severity.Error, messages.allFields);
    }
  };
  return (
    <>
      <p>6. Specific competence</p>
      <TabSectionContainer onSubmit={handleSubmit}>
        <InputsContainer>
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
        </InputsContainer>
        <TabSectionFooter handleBack={handleBack} />
      </TabSectionContainer>
    </>
  );
};
