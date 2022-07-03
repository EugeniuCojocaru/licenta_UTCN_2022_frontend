import React, { useEffect, useState } from "react";

import { User } from "../../../data-access/types/userTypes";

import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Table,
} from "@mui/material";

import UserTableRow from "./UserTableRow";
import { getUsers } from "../../../data-access/service/userService";

const UserTable = () => {
  const [data, setData] = useState<User[]>([]);
  const [refreshUI, setRefreshUI] = useState<boolean>(false);
  const [onlyActiveTeachers, setOnlyActiveTeacher] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUsers(onlyActiveTeachers);
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
              <strong>NAME</strong>
            </TableCell>
            <TableCell align="left">
              <strong>EMAIL</strong>
            </TableCell>
            <TableCell align="left">
              <strong>ROLE</strong>
            </TableCell>
            <TableCell align="right">
              <strong>ACTIONS</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <UserTableRow
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
export default UserTable;
