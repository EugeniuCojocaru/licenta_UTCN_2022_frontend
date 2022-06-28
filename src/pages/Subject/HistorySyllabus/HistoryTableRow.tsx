import { TableCell, TableRow, Tooltip, IconButton } from "@mui/material";
import React from "react";
import { formatDate } from "../../../common";
import { SyllabusVersionDto } from "../../../data-access/types";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { downloadSyllabus } from "../../../data-access/service/syllabusService";

interface Props {
  row: SyllabusVersionDto;
}

export const HistoryTableRow = ({ row }: Props) => {
  const { createdAt, updatedAt, syllabusId } = row;

  const handleDownloadSyllabusPdf = async () => {
    const response = await downloadSyllabus(syllabusId, true);
    if (response) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `fisa_disciplina.pdf`);
      document.body.appendChild(link);
      link.click();
    }
    console.log(response);
  };
  return (
    <TableRow
      key={createdAt + updatedAt}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="left">{syllabusId}</TableCell>
      <TableCell align="left">{formatDate(createdAt)}</TableCell>
      <TableCell align="left">{formatDate(updatedAt)}</TableCell>
      <TableCell align="left">
        <Tooltip title="Download syllabus">
          <IconButton onClick={() => handleDownloadSyllabusPdf()}>
            <FileDownloadIcon />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};
