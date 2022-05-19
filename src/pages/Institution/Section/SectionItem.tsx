import React from "react";
import { InstitutionHierarchyType } from "../../../common";
import { SectionItemContainer } from "./Section.styles";
interface Props {
  item: InstitutionHierarchyType;
  handleUpdate: () => void;
}
const SectionItem = ({ item, handleUpdate }: Props) => {
  return (
    <SectionItemContainer id={item.id} onClick={() => handleUpdate()}>
      {item.name}
    </SectionItemContainer>
  );
};

export default SectionItem;
