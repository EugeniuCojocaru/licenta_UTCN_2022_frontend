import React from "react";
import { Button } from "@mui/material";
import { ButtonContainer } from "./SideMenu.styles";
import { classes } from "../../common/style/styles";

interface PropTypes {
  active: string;
  children: any;
  label: string;
  handleClick: () => void;
}
export const SideMenuButton = ({
  active,
  children,
  label,
  handleClick,
}: PropTypes) => {
  return (
    <Button
      size="medium"
      variant="text"
      onClick={handleClick}
      style={classes.button.sideMenu}
    >
      <ButtonContainer active={active === label}>
        {children}
        <p>{label}</p>
      </ButtonContainer>
    </Button>
  );
};
