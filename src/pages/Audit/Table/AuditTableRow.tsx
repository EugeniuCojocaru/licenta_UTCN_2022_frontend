import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { formatDate } from "../../../common";
import { AuditType } from "../../../data-access/types";

interface Props {
  row: AuditType;
}

export const AuditTableRow = ({ row }: Props) => {
  const { user, operation, entity, notes, createdAt } = row;

  return (
    <TableRow
      key={user + createdAt}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="left">{user}</TableCell>
      <TableCell component="th" scope="row">
        {operation}
      </TableCell>
      <TableCell component="th" scope="row">
        {entity}
      </TableCell>

      <TableCell component="th" scope="row">
        {formatDate(createdAt)}
      </TableCell>
      <TableCell component="th" scope="row">
        {notes || "-"}
      </TableCell>
    </TableRow>
  );
};
