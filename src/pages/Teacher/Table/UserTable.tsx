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
import { useNotification } from "../../../common/hooks/useNotification";
import { Severity } from "../../../data-access/types";

const UserTable = () => {
  const [data, setData] = useState<User[]>([]);
  const [refreshUI, setRefreshUI] = useState<boolean>(false);
  const [onlyActiveTeachers, setOnlyActiveTeacher] = useState<boolean>(true);

  const { showNotification } = useNotification();
  useEffect(() => {
    const fetchData = async () => {
      const response = await getUsers(onlyActiveTeachers);
      setData(response?.data);
      showNotification(Severity.Error, "ioooooooooooooooi");
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
