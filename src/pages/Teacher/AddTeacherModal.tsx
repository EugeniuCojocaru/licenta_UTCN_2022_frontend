import React, { useState } from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import { TextField, MenuItem, Button } from "@mui/material";
import { Role, Roles, UserCreateDto } from "../../data-access/types/userTypes";
import { ButtonContainer, FormContainer } from "./TeachersPage.styles";
import { classes, sxClasses } from "../../common/style/styles";
import { createUser } from "../../data-access/service";
import { messages, validateResponseStatus } from "../../common";
import { useNotification } from "../../common/hooks/useNotification";
import { Severity } from "../../data-access/types";

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
}
export const AddTeacherModal = ({ handleClose, open }: Props) => {
  const { showNotification } = useNotification();
  const [newUser, setNewUser] = useState<UserCreateDto>({
    name: "",
    email: "",
    role: 10,
  });

  const { name, email, role } = newUser;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (name !== "" && email !== "") {
      const response = await createUser(newUser);
      if (validateResponseStatus(response?.status)) {
        showNotification(Severity.Success, "User created successfully");
        handleClose();
      } else {
        showNotification(Severity.Error, response?.data);
      }
    } else {
      showNotification(Severity.Error, messages.emptyField);
    }
  };
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
        <FormContainer onSubmit={(e) => handleSubmit(e)}>
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
