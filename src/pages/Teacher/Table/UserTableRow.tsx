import React, { useState } from "react";
import PropTypes from "prop-types";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import EditIcon from "@mui/icons-material/Edit";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import { MenuItem, TextField } from "@mui/material";

import EditOffIcon from "@mui/icons-material/EditOff";
import {
  mapRoleIdToString,
  Role,
  Roles,
  User,
} from "../../../data-access/types/userTypes";
import {
  updateUser,
  deleteUser,
} from "../../../data-access/service/userService";
//import useNotification from "../../common/hooks/useNotification";

interface Props {
  row: User;
  refreshUI: () => void;
}

const UserTableRow = ({ row, refreshUI }: Props) => {
  const [edit, setEdit] = useState(false);

  const [user, setUser] = useState({
    id: row.id,
    name: row.name,
    email: row.email,
    role: row.role,
  });

  const { id, name, email, role } = user;
  //const { showNotification } = useNotification();

  const handleEditEvent = () => {
    setEdit(!edit);
  };
  const handleInputChange = (field: string, value: string | Role) => {
    setUser({ ...user, [field]: value });
  };

  const handleEditUser = async () => {
    const response = await updateUser(user);
    console.log(response);
    // if (response.status >= 200 && response.status < 300) {
    //   showNotification({
    //     severity: "success",
    //     message: "User updated successfully!",
    //   });
    // } else {
    //   showNotification({
    //     severity: "error",
    //     message: "Something went wrong updating user data!",
    //   });
    // }
    setEdit(!edit);
    refreshUI();
  };

  const handleDeleteUser = async () => {
    const response = await deleteUser(id);
    console.log(response);
    refreshUI();
  };

  return (
    <TableRow
      key={id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {edit ? (
          <TextField
            required
            variant="standard"
            value={name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
        ) : (
          name
        )}
      </TableCell>

      <TableCell align="left">
        {edit ? (
          <TextField
            required
            variant="standard"
            value={email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        ) : (
          email
        )}
      </TableCell>
      <TableCell align="left">
        {edit ? (
          <TextField
            select
            label="Role"
            required
            fullWidth
            value={role}
            onChange={(e) => handleInputChange("role", e.target.value)}
          >
            {Roles.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        ) : (
          mapRoleIdToString(role)
        )}
      </TableCell>

      <TableCell align="right" width="150px">
        {edit ? (
          <>
            <IconButton>
              <CheckIcon onClick={() => handleEditUser()} />
            </IconButton>
            <IconButton onClick={() => handleEditEvent()}>
              <EditOffIcon />
            </IconButton>
          </>
        ) : (
          <>
            <IconButton onClick={() => handleEditEvent()}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleDeleteUser()}>
              <PersonRemoveIcon />
            </IconButton>
          </>
        )}
      </TableCell>
    </TableRow>
  );
};

UserTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  refreshUI: PropTypes.func.isRequired,
};

export default UserTableRow;
