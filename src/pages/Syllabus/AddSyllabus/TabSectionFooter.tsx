import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import { classes } from "../../../common/style/styles";
import { ButtonContainer } from "./AddSyllabus.style";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Props {
  handleBack?: () => void;
  handleForward?: () => void;
  disableBack?: boolean;
  disableForward?: boolean;
}
export const TabSectionFooter = ({
  handleBack,
  handleForward,
  disableBack = false,
  disableForward = false,
}: Props) => {
  return (
    <ButtonContainer>
      <Tooltip title="Back">
        <IconButton
          style={classes.button.icon}
          onClick={handleBack}
          disabled={disableBack}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Next">
        <IconButton
          type="submit"
          style={classes.button.icon}
          onSubmit={handleForward}
          disabled={disableForward}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Tooltip>
    </ButtonContainer>
  );
};
