import {
  CircularProgress,
  IconButton,
  TableCell,
  TableRow,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import {
  mapSection4DtoToSection4Type,
  Severity,
  Subject,
  SUBJECT_DEFAULT,
} from "../../../data-access/types";
import CheckIcon from "@mui/icons-material/Check";
import EditOffIcon from "@mui/icons-material/EditOff";
import EditIcon from "@mui/icons-material/Edit";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import HistoryIcon from "@mui/icons-material/History";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import {
  updateSubject,
  getSyllabusBySubjectId,
} from "../../../data-access/service/subjectService";
import { useNavigate } from "react-router-dom";
import {
  atLeastEditor,
  messages,
  SYLLABUS_ADD_URL,
  validateResponseStatus,
} from "../../../common";
import {
  mapSection2DtoToSection2Type,
  SECTION2_DEFAULT,
} from "../../../data-access/types/tabSections/section2";
import {
  deleteSyllabus,
  downloadSyllabus,
} from "../../../data-access/service/syllabusService";
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
import { useNotification } from "../../../common/hooks/useNotification";
import { colors } from "../../../common/style/styles";
interface Props {
  row: Subject;
  refreshUI: () => void;
  handleShowHistory: (id: string) => void;
}

export const SubjectTableRow = ({
  row,
  refreshUI,
  handleShowHistory,
}: Props) => {
  const { showNotification } = useNotification();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [edit, setEdit] = useState<boolean>(false);

  const [state, setState] = useState<Subject>(row || SUBJECT_DEFAULT);
  const { id, name, code, hasSyllabus } = state;

  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const handleInputChange = (field: string, value: string) => {
    setState({ ...state, [field]: value });
  };
  const handleEditEvent = () => {
    setEdit(!edit);
  };
  const handleEditSubject = async () => {
    if (name !== "" && code !== "") {
      const response = await updateSubject(state);
      if (validateResponseStatus(response?.status)) {
        showNotification(Severity.Success, "Subject updated successfully");
        setEdit(!edit);
        refreshUI();
      } else {
        showNotification(Severity.Error, response?.data);
      }
    } else {
      showNotification(Severity.Error, messages.emptyField);
    }
  };
  const handleGetSyllabus = async () => {
    const response = await getSyllabusBySubjectId(id);
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
    } else {
      showNotification(Severity.Error, messages.dk);
    }
  };

  const handleDeleteSyllabus = async () => {
    const response = await deleteSyllabus(id);
    if (validateResponseStatus(response?.status)) {
      showNotification(Severity.Success, "Syllabus removed successfully");
      refreshUI();
    } else {
      showNotification(Severity.Error, response?.data);
    }
  };

  const handleDownloadSyllabusPdf = async () => {
    setIsDownloading(true);
    const response = await downloadSyllabus(id, false);
    if (response) {
      setIsDownloading(false);
      if (validateResponseStatus(response?.status)) {
        showNotification(Severity.Success, "PDF generated successfully");
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `fisa_disciplina.pdf`);
        document.body.appendChild(link);
        link.click();
      } else {
        showNotification(Severity.Error, response?.data);
      }
    } else {
      setIsDownloading(false);
      showNotification(Severity.Error, messages.dk);
    }
  };

  const handleAddSyllabus = () => {
    dispatch(
      updateSection2({
        ...SECTION2_DEFAULT,
        subject: { label: name, value: id },
      })
    );
    navigate(SYLLABUS_ADD_URL);
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
            {atLeastEditor() && (
              <>
                <Tooltip title="Edit">
                  <IconButton onClick={() => handleEditEvent()}>
                    <EditIcon />
                  </IconButton>
                </Tooltip>
                {!hasSyllabus && (
                  <Tooltip title="Create syllabus">
                    <IconButton onClick={() => handleAddSyllabus()}>
                      <AttachFileIcon />
                    </IconButton>
                  </Tooltip>
                )}

                {hasSyllabus && (
                  <>
                    <Tooltip title="Edit syllabus">
                      <IconButton onClick={() => handleGetSyllabus()}>
                        <FileOpenIcon />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Remove syllabus">
                      <IconButton onClick={() => handleDeleteSyllabus()}>
                        <PlaylistRemoveIcon />
                      </IconButton>
                    </Tooltip>
                  </>
                )}
              </>
            )}
            {hasSyllabus && isDownloading ? (
              <CircularProgress
                sx={{ color: colors.appBackground, height: "inherit" }}
              />
            ) : (
              <Tooltip title="Download syllabus">
                <IconButton onClick={() => handleDownloadSyllabusPdf()}>
                  <FileDownloadIcon />
                </IconButton>
              </Tooltip>
            )}
            <Tooltip title="Syllabus versions">
              <IconButton onClick={() => handleShowHistory(id)}>
                <HistoryIcon />
              </IconButton>
            </Tooltip>
          </>
        )}
      </TableCell>
    </TableRow>
  );
};
