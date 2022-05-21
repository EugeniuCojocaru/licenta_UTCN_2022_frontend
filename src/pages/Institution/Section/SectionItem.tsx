import React, { useState } from "react";
import {
  InstitutionHierarchyType,
  InstitutionHierarchyUpdateDto,
} from "../../../common";
import {
  SectionItemContainer,
  SectionItemEditContainer,
} from "./Section.styles";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { IconButton, TextField } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
interface Props {
  item: InstitutionHierarchyType;
  handleUpdate: (name: InstitutionHierarchyUpdateDto) => Promise<boolean>;
  canShowChildren: boolean;
  //handleShowChildren?: (idParent: string) => void;
  handleShowChildren: any;
  refreshUI: any;
}
const SectionItem = ({
  item,
  handleUpdate,
  handleShowChildren,
  canShowChildren,
  refreshUI,
}: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>(item.name);

  const handleUpdateEvent = async () => {
    const newItem = {
      id: item.id,
      name: newName,
    };
    handleUpdate(newItem)
      .then(() => {
        setEdit(false);

        refreshUI();
      })
      .catch(() => {
        setNewName(item.name);
      });
  };
  const handleKeyPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleUpdateEvent();
    }
  };
  return (
    <SectionItemContainer
      id={item.id}
      onDoubleClick={() => setEdit(true)}
      onKeyPress={handleKeyPressed}
    >
      {edit ? (
        <SectionItemEditContainer>
          <TextField
            variant="standard"
            value={newName}
            fullWidth
            onChange={(e) => setNewName(e.target.value)}
          />
          <IconButton>
            <CheckIcon onClick={() => handleUpdateEvent()} />
          </IconButton>
          <IconButton>
            <CloseIcon
              onClick={() => {
                setEdit(false);
                setNewName(item.name);
              }}
            />
          </IconButton>
        </SectionItemEditContainer>
      ) : (
        item.name
      )}
      {canShowChildren && (
        <IconButton onClick={() => handleShowChildren(item.id)}>
          <ArrowRightIcon />
        </IconButton>
      )}
    </SectionItemContainer>
  );
};

export default SectionItem;
