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
interface Props {
  refreshUI: boolean;
  handleRefreshUI: () => void;
  handleShowHistory: (id: string) => void;
}
export const SubjectTable = ({
  refreshUI,
  handleRefreshUI,
  handleShowHistory,
}: Props) => {
  const [data, setData] = useState<Subject[]>([]);

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
        <TableHead
          style={{
            position: "sticky",
            top: 0,
            backgroundColor: "#FFF",
            borderBottom: "4px solid rgba(224, 224, 224, 1)",
            zIndex: 1,
            fontFamily: "Poppins",
          }}
        >
          <TableRow>
            <TableCell>
              <strong>CODE</strong>
            </TableCell>
            <TableCell align="left">
              <strong>NAME</strong>
            </TableCell>
            <TableCell align="right" sx={{ minWidth: 200 }}>
              <strong>ACTIONS</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <SubjectTableRow
              row={row}
              key={row.id + row.hasSyllabus}
              refreshUI={handleRefreshUI}
              handleShowHistory={handleShowHistory}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
