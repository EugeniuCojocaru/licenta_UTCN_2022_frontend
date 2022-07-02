import React, { useState } from "react";
import { InstitutionHierarchyType, Severity } from "../../../data-access/types";
import {
  SectionItemContainer,
  SectionItemEditContainer,
} from "./Section.styles";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { IconButton, TextField, Tooltip } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CloseIcon from "@mui/icons-material/Close";
import { useNotification } from "../../../common/hooks/useNotification";
import { messages } from "../../../common";
interface Props {
  item: InstitutionHierarchyType;
  handleUpdate: (name: InstitutionHierarchyType) => Promise<boolean>;
  handleDelete: (id: string) => Promise<boolean>;
  canShowChildren: boolean;
  //handleShowChildren?: (idParent: string) => void;
  handleShowChildren: any;
  refreshUI: any;
}
const SectionItem = ({
  item,
  handleUpdate,
  handleDelete,
  handleShowChildren,
  canShowChildren,
  refreshUI,
}: Props) => {
  const { showNotification } = useNotification();
  const [edit, setEdit] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>(item.name);

  const handleUpdateEvent = async () => {
    if (newName !== "" && newName !== item.name) {
      const newItem = {
        id: item.id,
        name: newName,
      };
      handleUpdate(newItem)
        .then(() => {
          setEdit(false);
          setNewName(item.name);
          refreshUI();
        })
        .catch(() => {
          setNewName(item.name);
        });
    } else {
      let message = "";
      newName === ""
        ? (message = messages.emptyField)
        : newName === item.name
        ? (message = messages.sameValue)
        : (message = messages.dk);

      showNotification(Severity.Error, message);
    }
  };

  const handleDeleteEvent = async () => {
    handleDelete(item.id)
      .then(() => {
        setEdit(false);
        refreshUI();
      })
      .catch(() => {
        //TODO: add error notification
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
          <Tooltip title="Save" arrow>
            <IconButton>
              <CheckIcon onClick={() => handleUpdateEvent()} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete" arrow>
            <IconButton>
              <DeleteOutlineIcon onClick={() => handleDeleteEvent()} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Cancel" arrow>
            <IconButton>
              <CloseIcon
                onClick={() => {
                  setEdit(false);
                  setNewName(item.name);
                }}
              />
            </IconButton>
          </Tooltip>
        </SectionItemEditContainer>
      ) : (
        item.name
      )}

      {canShowChildren && !edit && (
        <IconButton onClick={() => handleShowChildren(item.id)}>
          <ArrowRightIcon />
        </IconButton>
      )}
    </SectionItemContainer>
  );
};

export default SectionItem;
