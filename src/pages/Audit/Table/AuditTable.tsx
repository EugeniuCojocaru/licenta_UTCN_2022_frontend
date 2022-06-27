import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ScrollableTableBody } from "../AuditPage.styles";
import { getAudit } from "../../../data-access/service";
import { AuditType } from "../../../data-access/types";
import { AuditTableRow } from "./AuditTableRow";

export const AuditTable = () => {
  const [data, setData] = useState<AuditType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAudit();
      setData(response?.data);
    };
    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>User</strong>
            </TableCell>
            <TableCell align="left">
              <strong>Operation</strong>
            </TableCell>
            <TableCell align="left">
              <strong>Entity</strong>
            </TableCell>
            <TableCell align="left">
              <strong>At date</strong>
            </TableCell>
            <TableCell align="left">
              <strong>Notes</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <AuditTableRow row={row} key={row.user + row.createdAt} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
