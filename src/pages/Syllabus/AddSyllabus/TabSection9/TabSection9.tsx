import { TextField } from "@mui/material";
import React, { useState } from "react";
import { updateSection9, useAppDispatch } from "../../../../data-access/store";
import { Section9Type, SECTION9_DEFAULT } from "../../../../data-access/types";
import { TabSectionContainer } from "../AddSyllabus.style";
import { TabSectionFooter } from "../TabSectionFooter";

interface Props {
  handleBack: () => void;
  handleForward: () => void;
  section9Data: Section9Type;
}
export const TabSection9 = ({
  handleBack,
  handleForward,
  section9Data,
}: Props) => {
  const dispatch = useAppDispatch();
  const [state, setState] = useState<Section9Type>(
    section9Data || SECTION9_DEFAULT
  );
  const { description } = state;
  const handleSubmit = () => {
    dispatch(updateSection9(state));
    handleForward();
  };
  return (
    <>
      <p>
        9. Bridging course contents with the expectations of the representatives
        of the community, professional associations and employers in the field
      </p>

      <TabSectionContainer onSubmit={handleSubmit}>
        <TextField
          label={"Description"}
          multiline
          value={description}
          onChange={(e) => setState({ ...state, description: e.target.value })}
        />
        <TabSectionFooter handleBack={handleBack} />
      </TabSectionContainer>
    </>
  );
};
