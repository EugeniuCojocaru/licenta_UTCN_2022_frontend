import React, { useEffect, useState } from "react";

import { User } from "../../../common/types/userTypes";

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
              <strong>Name</strong>
            </TableCell>
            <TableCell align="left">
              <strong>Email</strong>
            </TableCell>
            <TableCell align="left">
              <strong>Role</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Actions</strong>
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
