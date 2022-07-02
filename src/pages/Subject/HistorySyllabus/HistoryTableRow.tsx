import { TableCell, TableRow, Tooltip, IconButton } from "@mui/material";
import React from "react";
import { formatDate, messages, validateResponseStatus } from "../../../common";
import { Severity, SyllabusVersionDto } from "../../../data-access/types";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { downloadSyllabus } from "../../../data-access/service/syllabusService";
import { useNotification } from "../../../common/hooks/useNotification";

interface Props {
  row: SyllabusVersionDto;
}

export const HistoryTableRow = ({ row }: Props) => {
  const { showNotification } = useNotification();
  const { createdAt, updatedAt, syllabusId } = row;

  const handleDownloadSyllabusPdf = async () => {
    const response = await downloadSyllabus(syllabusId, true);
    if (response) {
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
      showNotification(Severity.Error, messages.dk);
    }
  };
  return (
    <TableRow
      key={createdAt + updatedAt}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="left">{syllabusId}</TableCell>
      <TableCell align="left">{formatDate(createdAt)}</TableCell>
      <TableCell align="left">
        {updatedAt === "0001-01-01T00:00:00" ? "-" : formatDate(updatedAt)}
      </TableCell>
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
