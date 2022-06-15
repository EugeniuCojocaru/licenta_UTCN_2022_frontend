import { TextField } from "@mui/material";
import React, { useState } from "react";
import Comp1 from "../../../../components/Comp1/Comp1";
import { updateSection7, useAppDispatch } from "../../../../data-access/store";
import { Section7Type, SECTION7_DEFAULT } from "../../../../data-access/types";
import { TabSectionContainer } from "../AddSyllabus.style";
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
  const [state, setState] = useState<Section7Type>(
    section7Data || SECTION7_DEFAULT
  );
  const { generalObjective, specificObjectives } = state;
  const handleSpecificObjectivesChange = (newValue: string[]) => {
    setState({ ...state, specificObjectives: newValue });
  };
  const handleSubmit = () => {
    dispatch(updateSection7(state));
    handleForward();
  };
  return (
    <>
      <p>
        7. Discipline objective (as results from the key competences gained)
      </p>
      <TabSectionContainer onSubmit={handleSubmit}>
        <TextField
          label={"General objective"}
          multiline
          maxRows={4}
          value={generalObjective}
          onChange={(e) =>
            setState({ ...state, generalObjective: e.target.value })
          }
        />
        <Comp1
          label={"Specific objectives"}
          values={specificObjectives}
          handleValuesChange={handleSpecificObjectivesChange}
        />
        <TabSectionFooter handleBack={handleBack} />
      </TabSectionContainer>
    </>
  );
};
