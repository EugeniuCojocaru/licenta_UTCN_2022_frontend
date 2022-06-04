import React, { useState } from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import { TextField, MenuItem, Button } from "@mui/material";
import {
  Role,
  Roles,
  UserCreateViaAdminDto,
} from "../../common/types/userTypes";
import { ButtonContainer, FormContainer } from "./TeachersPage.styles";
import { classes, sxClasses } from "../../common/style/styles";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

interface Props {
  open: boolean;
  handleClose: () => void;
  handleAddUser?: () => void;
}
export const AddTeacherModal = ({
  handleClose,
  open,
  handleAddUser,
}: Props) => {
  const [newUser, setNewUser] = useState<UserCreateViaAdminDto>({
    name: "",
    email: "",
    role: 10,
  });

  const { name, email, role } = newUser;
  return (
    <StyledModal
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      open={open}
      onClose={handleClose}
      BackdropComponent={Backdrop}
    >
      <Box sx={{ ...sxClasses.modal, width: "500px" }}>
        <h1>Add user</h1>
        <FormContainer>
          <TextField
            label="Name"
            value={name}
            variant="standard"
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <TextField
            label="Email"
            value={email}
            variant="standard"
            type="email"
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <TextField
            sx={sxClasses.select}
            select
            variant="standard"
            label="Role"
            value={role}
            onChange={(e) => {
              setNewUser({
                ...newUser,
                role: e.target.value as unknown as Role,
              });
            }}
          >
            {Roles.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <ButtonContainer>
            <Button
              variant="contained"
              type="submit"
              style={classes.button.primary}
            >
              Create
            </Button>
            <Button
              variant="outlined"
              onClick={handleClose}
              style={classes.button.secondary}
            >
              Cancel
            </Button>
          </ButtonContainer>
        </FormContainer>
      </Box>
    </StyledModal>
  );
};
