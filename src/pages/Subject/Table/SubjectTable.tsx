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
import { Subject } from "../../../data-access/types";
import { getSubjects } from "../../../data-access/service/subjectService";
import { SubjectTableRow } from "./SubjectTableRow";

export const SubjectTable = () => {
  const [data, setData] = useState<Subject[]>([]);
  const [refreshUI, setRefreshUI] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getSubjects();
      setData(response?.data);
    };
    fetchData();
  }, [refreshUI]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Code</strong>
            </TableCell>
            <TableCell align="left">
              <strong>Name</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Actions</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <SubjectTableRow
              row={row}
              key={row.id}
              refreshUI={() => setRefreshUI(!refreshUI)}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
