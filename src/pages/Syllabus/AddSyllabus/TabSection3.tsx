import React from "react";
import { TabSectionFooter } from "./TabSectionFooter";
interface Props {
  handleForward: () => void;
  handleBack: () => void;
}
export const TabSection3 = ({ handleBack, handleForward }: Props) => {
  return (
    <>
      <p>3. 3333</p>
      <TabSectionFooter handleBack={handleBack} handleForward={handleForward} />
    </>
  );
};
