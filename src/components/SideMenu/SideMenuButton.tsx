import React from "react";
import { Button } from "@mui/material";
import { ButtonContainer } from "./SideMenu.styles";

const classes = {
  sideMenuButton: {
    padding: 0,
    backgroundColor: "transparent",
  },
};

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
  console.log({ active });
  return (
    <Button
      size="medium"
      variant="text"
      onClick={handleClick}
      style={classes.sideMenuButton}
    >
      <ButtonContainer active={active === label}>
        {children}
        <p>{label}</p>
      </ButtonContainer>
    </Button>
  );
};
