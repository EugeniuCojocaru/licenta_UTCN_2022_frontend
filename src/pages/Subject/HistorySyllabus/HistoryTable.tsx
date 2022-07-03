import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React from "react";
import { SyllabusVersionDto } from "../../../data-access/types";
import { HistoryTableRow } from "./HistoryTableRow";

interface Props {
  data: SyllabusVersionDto[];
}
export const HistoryTable = ({ data }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>SYLLABUS ID</strong>
            </TableCell>
            <TableCell align="left">
              <strong>CREATED AT</strong>
            </TableCell>
            <TableCell align="left">
              <strong>UPDATED AT</strong>
            </TableCell>
            <TableCell align="right">
              <strong>ACTIONS</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <HistoryTableRow row={row} key={row.createdAt + row.updatedAt} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
