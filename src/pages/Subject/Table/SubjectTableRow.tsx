import {
  IconButton,
  TableCell,
  TableRow,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import {
  mapSection4DtoToSection4Type,
  Subject,
  SUBJECT_DEFAULT,
} from "../../../data-access/types";
import CheckIcon from "@mui/icons-material/Check";
import EditOffIcon from "@mui/icons-material/EditOff";
import EditIcon from "@mui/icons-material/Edit";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import {
  updateSubject,
  getSyllabusBySubjectId,
} from "../../../data-access/service/subjectService";
import { useNavigate } from "react-router-dom";
import { SYLLABUS_ADD_URL, validateResponseStatus } from "../../../common";
import { mapSection2DtoToSection2Type } from "../../../data-access/types/tabSections/section2";
import {
  updateIdSyllabus,
  updateSection1,
  updateSection10,
  updateSection2,
  updateSection3,
  updateSection4,
  updateSection5,
  updateSection6,
  updateSection7,
  updateSection8,
  updateSection9,
  useAppDispatch,
} from "../../../data-access/store";
interface Props {
  row: Subject;
  refreshUI: () => void;
}

export const SubjectTableRow = ({ row, refreshUI }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [edit, setEdit] = useState<boolean>(false);

  const [state, setState] = useState<Subject>(row || SUBJECT_DEFAULT);
  const { id, name, code, hasSyllabus } = state;

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
  const handleGetSyllabus = async () => {
    const response = await getSyllabusBySubjectId(id);
    console.log(response);
    if (validateResponseStatus(response?.status)) {
      const {
        section1,
        section2,
        section3,
        section4,
        section5,
        section6,
        section7,
        section8,
        section9,
        section10,
        id,
        subject,
      } = response?.data;
      dispatch(updateIdSyllabus(id));
      dispatch(updateSection1(section1));
      dispatch(updateSection2(mapSection2DtoToSection2Type(section2, subject)));
      dispatch(updateSection3(section3));
      dispatch(updateSection4(mapSection4DtoToSection4Type(section4)));
      dispatch(updateSection5(section5));
      dispatch(updateSection6(section6));
      dispatch(updateSection7(section7));
      dispatch(updateSection8(section8));
      dispatch(updateSection9(section9));
      dispatch(updateSection10(section10));

      navigate(SYLLABUS_ADD_URL);
    }
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
            {!hasSyllabus && (
              <Tooltip title="Create syllabus">
                <IconButton onClick={() => navigate(SYLLABUS_ADD_URL)}>
                  <AttachFileIcon />
                </IconButton>
              </Tooltip>
            )}

            {hasSyllabus && (
              <Tooltip title="Edit syllabus">
                <IconButton onClick={() => handleGetSyllabus()}>
                  <FileOpenIcon />
                </IconButton>
              </Tooltip>
            )}
          </>
        )}
      </TableCell>
    </TableRow>
  );
};
