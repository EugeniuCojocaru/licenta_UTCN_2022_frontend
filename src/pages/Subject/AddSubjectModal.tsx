import React, { useState } from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import { TextField, Button } from "@mui/material";

import { classes, sxClasses } from "../../common/style/styles";
import { ButtonContainer, FormContainer } from "./SubjectPage.styles";
import { SubjectCreateDto } from "../../data-access/types/subjectTypes";
import { createSubject } from "../../data-access/service/subjectService";
import { validateResponseStatus } from "../../common";

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
  handleRefreshUI: () => void;
}
export const AddSubjectModal = ({
  handleClose,
  open,
  handleRefreshUI,
}: Props) => {
  const [state, setState] = useState<SubjectCreateDto>({
    name: "",
    code: "",
  });
  const { name, code } = state;
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await createSubject(state);
    if (validateResponseStatus(response?.status)) {
      setState({
        name: "",
        code: "",
      });
      handleRefreshUI();
      handleClose();
    } else console.log(response);
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
        <h1>Add subject</h1>
        <FormContainer onSubmit={(e) => handleSubmit(e)}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
          <TextField
            label="Code"
            value={code}
            onChange={(e) => setState({ ...state, code: e.target.value })}
          />
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
              Create with syllabus
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
