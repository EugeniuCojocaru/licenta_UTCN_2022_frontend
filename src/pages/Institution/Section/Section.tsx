import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import { IconButton, TextField } from "@mui/material";
import { AddItemContainer } from "./Section.styles";
import {
  InstitutionHierarchyCreateDto,
  InstitutionHierarchyType,
} from "../../../common";
import SectionItem from "./SectionItem";
interface PropType {
  labelTextField: string;
  title: string;
  data: InstitutionHierarchyType[];
  handleCreate: (name: InstitutionHierarchyCreateDto) => void;
  canShowChildren?: boolean;
  handleShowChildren?: (idParent: string) => void;
}
export const Section = ({
  labelTextField,
  title,
  data,
  handleCreate,
  handleShowChildren,
  canShowChildren = false,
}: PropType) => {
  const [addState, setAddState] = useState<boolean>(false);
  const [addValue, setAddValue] = useState<string>("");

  const handleCreateResource = () => {
    setAddState(false);
    handleCreate({ name: addValue });
  };
  return (
    <>
      <h1> {title}</h1>

      {data.map((value) => (
        <SectionItem
          item={value}
          handleUpdate={() => console.log("updatee")}
          canShowChildren={canShowChildren}
          handleShowChildren={handleShowChildren}
        />
      ))}
      {!addState ? (
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
      )}
    </>
  );
};
