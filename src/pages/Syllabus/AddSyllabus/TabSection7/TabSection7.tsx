import React, { useState } from "react";
import { useAppDispatch } from "../../../../data-access/store";
import { Section7Type } from "../../../../data-access/types";
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
  const [state, setState] = useState({});
  const handleInputChange = (field: string, value: string) => {
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
        <TabSectionFooter handleBack={handleBack} />
      </TabSectionContainer>
    </>
  );
};
