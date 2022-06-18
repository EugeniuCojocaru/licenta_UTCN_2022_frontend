import {
  IconButton,
  TableCell,
  TableRow,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import { Subject, SUBJECT_DEFAULT } from "../../../data-access/types";
import CheckIcon from "@mui/icons-material/Check";
import EditOffIcon from "@mui/icons-material/EditOff";
import EditIcon from "@mui/icons-material/Edit";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import { updateSubject } from "../../../data-access/service/subjectService";
interface Props {
  row: Subject;
  refreshUI: () => void;
}

export const SubjectTableRow = ({ row, refreshUI }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);

  const [state, setState] = useState<Subject>(row || SUBJECT_DEFAULT);
  const { id, name, code } = state;

  const handleInputChange = (field: string, value: string) => {
    setState({ ...state, [field]: value });
  };
  const handleEditEvent = () => {
    setEdit(!edit);
  };
  const handleEditSubject = async () => {
    const response = await updateSubject(state);
    console.log(response);
    // if (response.status >= 200 && response.status < 300) {
    //   showNotification({
    //     severity: "success",
    //     message: "User updated successfully!",
    //   });
    // } else {
    //   showNotification({
    //     severity: "error",
    //     message: "Something went wrong updating user data!",
    //   });
    // }
    setEdit(!edit);
    refreshUI();
  };
  return (
    <TableRow
      key={id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="left">
        {edit ? (
          <TextField
            required
            variant="standard"
            value={code}
            onChange={(e) => handleInputChange("code", e.target.value)}
          />
        ) : (
          code
        )}
      </TableCell>
      <TableCell component="th" scope="row">
        {edit ? (
          <TextField
            value={name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
        ) : (
          name
        )}
      </TableCell>

      <TableCell align="right" width="150px">
        {edit ? (
          <>
            <Tooltip title="Save">
              <IconButton>
                <CheckIcon onClick={() => handleEditSubject()} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Exit">
              <IconButton onClick={() => handleEditEvent()}>
                <EditOffIcon />
              </IconButton>
            </Tooltip>
          </>
        ) : (
          <>
            <Tooltip title="Edit">
              <IconButton onClick={() => handleEditEvent()}>
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Open syllabus">
              <IconButton onClick={() => console.log("")}>
                <FileOpenIcon />
              </IconButton>
            </Tooltip>
          </>
        )}
      </TableCell>
    </TableRow>
  );
};
