import { Button } from "@mui/material";
import React from "react";
import { ButtonContainer } from "./SideMenu.styles";


interface PropTypes {
    children: any;
    label: string;
    handleClick: () => void;
}
export const SideMenuButton = ({ children, label, handleClick }: PropTypes) => {
  return (    
      <Button size="large" variant="text" onClick={handleClick}>
        <ButtonContainer>
          {children}
          {label}
        </ButtonContainer>      
      </Button>    
  );
};
