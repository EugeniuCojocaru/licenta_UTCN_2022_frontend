import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import EditIcon from "@mui/icons-material/Edit";
//import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import { MenuItem, TextField } from "@mui/material";

import EditOffIcon from "@mui/icons-material/EditOff";
//import useNotification from "../../common/hooks/useNotification";

const roleType = [
  { value: "user", label: "User" },
  { value: "admin", label: "Admin" },
  { value: "doctor", label: "Doctor" },
];
const UserTableRow = ({ row, refreshUI }) => {
  const [edit, setEdit] = useState(false);
  const [client, setClient] = useState({
    name: "",
    email: "",
    role: "",
  });
  const id = row.id;
  const { name, email, role } = client;
  //const { showNotification } = useNotification();

  useEffect(() => {
    setClient(row);
  }, []);

  const handleEditEvent = () => {
    setEdit(!edit);
  };
  const handleInputChange = (column, newData) => {
    setClient({ ...client, [column]: newData });
  };

  // const handleEditUser = async () => {
  //   const newUserInfo = { ...row, name, email, role };
  //   const response = await updateUser(newUserInfo);
  //   if (response.status >= 200 && response.status < 300) {
  //     showNotification({
  //       severity: "success",
  //       message: "User updated successfully!",
  //     });
  //   } else {
  //     showNotification({
  //       severity: "error",
  //       message: "Something went wrong updating user data!",
  //     });
  //   }
  //   setEdit(!edit);
  // };

  return (
    <TableRow
      key={row.id}
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
            {roleType.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        ) : (
          role
        )}
      </TableCell>

      <TableCell align="right" width="150px">
        {/* {edit && (
          <IconButton>
            <CheckIcon onClick={() => handleEditUser()} />
          </IconButton>
        )} */}
        {edit ? (
          <IconButton onClick={() => handleEditEvent()}>
            <EditOffIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => handleEditEvent()}>
            <EditIcon />
          </IconButton>
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
