import React from "react";
import { InstitutionHierarchyType } from "../../../common";
import { SectionItemContainer } from "./Section.styles";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { IconButton } from "@mui/material";
interface Props {
  item: InstitutionHierarchyType;
  handleUpdate: () => void;
  canShowChildren: boolean;
  //handleShowChildren?: (idParent: string) => void;
  handleShowChildren: any;
}
const SectionItem = ({
  item,
  handleUpdate,
  handleShowChildren,
  canShowChildren,
}: Props) => {
  return (
    <SectionItemContainer id={item.id} onClick={() => handleUpdate()}>
      {item.name}
      {canShowChildren && (
        <IconButton onClick={() => handleShowChildren(item.id)}>
          <ArrowRightIcon />
        </IconButton>
      )}
    </SectionItemContainer>
  );
};

export default SectionItem;
