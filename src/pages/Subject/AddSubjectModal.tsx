import React, { useState } from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import { TextField, Button } from "@mui/material";

import { classes, sxClasses } from "../../common/style/styles";
import { ButtonContainer, FormContainer } from "./SubjectPage.styles";
import { SubjectCreateDto } from "../../data-access/types/subjectTypes";
import { createSubject } from "../../data-access/service/subjectService";
import { BigPoppins, validateResponseStatus } from "../../common";
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
  handleRefreshUI: () => void;
}
export const AddSubjectModal = ({
  handleClose,
  open,
  handleRefreshUI,
}: Props) => {
  const { showNotification } = useNotification();
  const [state, setState] = useState<SubjectCreateDto>({
    name: "",
    code: "",
  });
  const { name, code } = state;
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await createSubject(state);
    console.log({ response });
    if (validateResponseStatus(response?.status)) {
      console.log({ response });
      showNotification(Severity.Success, "Subject created successfully");
      setState({
        name: "",
        code: "",
      });
      handleRefreshUI();
      handleClose();
    } else {
      console.log(response?.status);
      showNotification(Severity.Error, response?.data);
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
        <BigPoppins>Add subject</BigPoppins>
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
              Cancel
            </Button>
          </ButtonContainer>
        </FormContainer>
      </Box>
    </StyledModal>
  );
};
