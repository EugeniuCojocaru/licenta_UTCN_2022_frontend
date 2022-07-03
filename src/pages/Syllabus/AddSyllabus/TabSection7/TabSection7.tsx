import { TextField } from "@mui/material";
import React, { useState } from "react";
import { messages, Roboto } from "../../../../common";
import { useNotification } from "../../../../common/hooks/useNotification";
import ContentInput from "../../../../components/ContentInput/ContentInput";
import { updateSection7, useAppDispatch } from "../../../../data-access/store";
import {
  Section7Type,
  SECTION7_DEFAULT,
  Severity,
} from "../../../../data-access/types";
import { InputsContainer, TabSectionContainer } from "../AddSyllabus.style";
import { TabSectionFooter } from "../TabSectionFooter";

interface Props {
  handleBack: () => void;
  handleForward: () => void;
  section7Data: Section7Type;
}
export const TabSection7 = ({
  handleBack,
  handleForward,
  section7Data,
}: Props) => {
  const dispatch = useAppDispatch();
  const { showNotification } = useNotification();
  const [state, setState] = useState<Section7Type>(
    section7Data || SECTION7_DEFAULT
  );
  const { generalObjective, specificObjectives } = state;
  const handleSpecificObjectivesChange = (newValue: string[]) => {
    setState({ ...state, specificObjectives: newValue });
  };

  const validate = (): boolean => {
    if (specificObjectives.length === 0) return false;

    return true;
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      dispatch(updateSection7(state));
      showNotification(Severity.Info, messages.ok);
      handleForward();
    } else {
      showNotification(Severity.Error, messages.allFields);
    }
  };
  return (
    <>
      <Roboto>
        7. Discipline objective (as results from the key competences gained)
      </Roboto>
      <TabSectionContainer onSubmit={handleSubmit}>
        <InputsContainer>
          <TextField
            label={"General objective"}
            multiline
            maxRows={4}
            value={generalObjective}
            onChange={(e) =>
              setState({ ...state, generalObjective: e.target.value })
            }
          />
          <ContentInput
            label={"Specific objectives *"}
            values={specificObjectives}
            handleValuesChange={handleSpecificObjectivesChange}
          />
        </InputsContainer>
        <TabSectionFooter handleBack={handleBack} />
      </TabSectionContainer>
    </>
  );
};
