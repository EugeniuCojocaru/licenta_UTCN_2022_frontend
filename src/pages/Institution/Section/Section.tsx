import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import { IconButton, TextField } from "@mui/material";
import { AddItemContainer } from "./Section.styles";
import {
  InstitutionHierarchyCreateDto,
  InstitutionHierarchyType,
  InstitutionHierarchyUpdateDto,
} from "../../../common";
import SectionItem from "./SectionItem";
interface PropType {
  labelTextField: string;
  title: string;
  data: InstitutionHierarchyType[];
  handleCreate: (name: InstitutionHierarchyCreateDto) => void;
  handleUpdate: (name: InstitutionHierarchyUpdateDto) => Promise<boolean>;
  canShowChildren?: boolean;
  handleShowChildren?: (idParent: string) => void;
  showAddButton?: boolean;
  refreshUI: any;
}
export const Section = ({
  labelTextField,
  title,
  data,
  handleCreate,
  handleUpdate,
  handleShowChildren,
  refreshUI,
  canShowChildren = false,
  showAddButton = false,
}: PropType) => {
  const [addState, setAddState] = useState<boolean>(false);
  const [addValue, setAddValue] = useState<string>("");

  const handleCreateResource = () => {
    setAddState(false);
    handleCreate({ name: addValue });
  };

  const loadAddButton = () => {
    return !addState ? (
      <IconButton onClick={() => setAddState(true)}>
        <AddIcon />
      </IconButton>
    ) : (
      <AddItemContainer>
        <TextField
          fullWidth
          variant="standard"
          size="small"
          placeholder={labelTextField}
          value={addValue || ""}
          onChange={(e) => setAddValue(e.target.value)}
        />

        <IconButton onClick={() => handleCreateResource()}>
          <CheckIcon />
        </IconButton>
        <IconButton onClick={() => setAddState(false)}>
          <ClearIcon />
        </IconButton>
      </AddItemContainer>
    );
  };
  return (
    <>
      <h1> {title}</h1>

      {data.map((value) => (
        <SectionItem
          item={value}
          canShowChildren={canShowChildren}
          handleShowChildren={handleShowChildren}
          handleUpdate={handleUpdate}
          refreshUI={refreshUI}
        />
      ))}

      {showAddButton && loadAddButton()}
    </>
  );
};
