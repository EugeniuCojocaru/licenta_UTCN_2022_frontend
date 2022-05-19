import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import { IconButton, TextField } from "@mui/material";
import { AddItemContainer } from "./Section.styles";
import { InstitutionHierarchyType } from "../../../common";
import SectionItem from "./SectionItem";
interface PropType {
  labelTextField: string;
  title: string;
  data: InstitutionHierarchyType[];
}
export const Section = ({ labelTextField, title, data }: PropType) => {
  const [addState, setAddState] = useState<boolean>(false);
  const [addValue, setAddValue] = useState<string>("");

  return (
    <>
      <h1> {title}</h1>

      {data.map((value) => (
        <SectionItem item={value} handleUpdate={() => console.log("updatee")} />
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

          <IconButton onClick={() => setAddState(false)}>
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
