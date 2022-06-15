import React, { useState } from "react";
import { useAppDispatch } from "../../../../data-access/store";
import { Section4Type } from "../../../../data-access/types";
import { TabSectionContainer } from "../AddSyllabus.style";
import { TabSectionFooter } from "../TabSectionFooter";

interface Props {
  handleBack: () => void;
  handleForward: () => void;
  section4Data: Section4Type;
}
export const TabSection4 = ({
  handleBack,
  handleForward,
  section4Data,
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
