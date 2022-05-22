import React from "react";
import { useNavigate } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";

import {
  SideMenuContainer,
  ButtonsContainer,
  LogoContainer,
} from "./SideMenu.styles";
import { SideMenuButton } from "./SideMenuButton";
import {
  DASHBOARD_URL,
  INSTITUTION_URL,
  SYLLABUS_URL,
} from "../../common/routes";

export const SideMenu = () => {
  const navigate = useNavigate();

  const handleNavigateTo = (route: string) => {
    navigate(route);
  };
  return (
    <SideMenuContainer>
      <LogoContainer></LogoContainer>
      <ButtonsContainer>
        <SideMenuButton
          label="Dashboard"
          handleClick={() => handleNavigateTo(DASHBOARD_URL)}
        >
          <DashboardIcon />
        </SideMenuButton>
        <SideMenuButton
          label="Syllabus"
          handleClick={() => handleNavigateTo(SYLLABUS_URL)}
        >
          <DashboardIcon />
        </SideMenuButton>
        <SideMenuButton
          label="Institutions"
          handleClick={() => handleNavigateTo(INSTITUTION_URL)}
        >
          <CorporateFareIcon />
        </SideMenuButton>
      </ButtonsContainer>
    </SideMenuContainer>
  );
};
