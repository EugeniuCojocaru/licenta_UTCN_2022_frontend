import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { formatDate } from "../../../common";
import { SyllabusVersionDto } from "../../../data-access/types";

interface Props {
  row: SyllabusVersionDto;
}

export const HistoryTableRow = ({ row }: Props) => {
  const { createdAt, updatedAt, syllabusId } = row;
  return (
    <TableRow
      key={createdAt + updatedAt}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="left">{syllabusId}</TableCell>
      <TableCell align="left">{formatDate(createdAt)}</TableCell>
      <TableCell align="left">{formatDate(updatedAt)}</TableCell>
    </TableRow>
  );
};
