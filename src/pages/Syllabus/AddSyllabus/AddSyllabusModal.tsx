import React, { useState } from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import { classes, sxClasses } from "../../../common/style/styles";
import { CustomStepper } from "./Stepper";
import { ButtonContainer, TabController } from "./AddSyllabus.style";
import { TabSection1 } from "./TabSection1";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton, Tooltip } from "@mui/material";

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
const steps = ["", "", "", "", "", "", "", "", ""];
interface Props {
  open: boolean;
  handleClose: () => void;
  handleAddUser?: () => void;
}
export const AddSyllabusModal = ({ handleClose, open }: Props) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <StyledModal
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      open={open}
      onClose={handleClose}
      BackdropComponent={Backdrop}
    >
      <Box sx={{ ...sxClasses.modal, width: "1000px" }}>
        <CustomStepper steps={steps} activeStep={activeStep} />
        <TabController>
          <TabSection1 />
        </TabController>

        <ButtonContainer>
          <Tooltip title={"Back"}>
            <IconButton style={classes.button.icon} onClick={handleBack}>
              <ArrowBackIosNewIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={"Next"}>
            <IconButton style={classes.button.icon} onClick={handleNext}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Tooltip>
        </ButtonContainer>
      </Box>
    </StyledModal>
  );
};
