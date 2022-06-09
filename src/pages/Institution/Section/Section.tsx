import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import { Divider, IconButton, TextField } from "@mui/material";
import { AddItemContainer, ItemsContainer } from "./Section.styles";
import {
  InstitutionHierarchyCreateDto,
  InstitutionHierarchyType,
} from "../../../data-access/types";
import SectionItem from "./SectionItem";
import { classes } from "../../../common/style/styles";
interface PropType {
  labelTextField: string;
  title: string;
  data: InstitutionHierarchyType[];
  handleCreate: (name: InstitutionHierarchyCreateDto) => void;
  handleUpdate: (name: InstitutionHierarchyType) => Promise<boolean>;
  handleDelete: (id: string) => Promise<boolean>;
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
  handleDelete,
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
      <IconButton onClick={() => setAddState(true)} style={classes.button.icon}>
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

        <IconButton
          onClick={() => handleCreateResource()}
          style={classes.button.icon}
        >
          <CheckIcon />
        </IconButton>
        <IconButton
          onClick={() => setAddState(false)}
          style={classes.button.icon}
        >
          <ClearIcon />
        </IconButton>
      </AddItemContainer>
    );
  };
  return (
    <>
      <h1> {title}</h1>

      <ItemsContainer>
        {data.map((value) => (
          <>
            <SectionItem
              key={value.id}
              item={value}
              canShowChildren={canShowChildren}
              handleShowChildren={handleShowChildren}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
              refreshUI={refreshUI}
            />
            <Divider variant="fullWidth" />
          </>
        ))}
      </ItemsContainer>

      {showAddButton && loadAddButton()}
    </>
  );
};
