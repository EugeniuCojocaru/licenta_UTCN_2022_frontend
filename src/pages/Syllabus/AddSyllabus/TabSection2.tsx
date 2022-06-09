import React from "react";
import { TabSectionFooter } from "./TabSectionFooter";
interface Props {
  handleBack: () => void;
  handleForward: () => void;
}
const TabSection2 = ({ handleBack, handleForward }: Props) => {
  return (
    <div>
      TabSection2
      <TabSectionFooter handleForward={handleForward} handleBack={handleBack} />
    </div>
  );
};

export default TabSection2;
