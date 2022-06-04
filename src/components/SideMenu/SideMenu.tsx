import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

import {
  SideMenuContainer,
  ButtonsContainer,
  LogoContainer,
} from "./SideMenu.styles";
import { SideMenuButton } from "./SideMenuButton";
import {
  DASHBOARD_URL,
  INSTITUTION_URL,
  SUBJECT_URL,
  SYLLABUS_URL,
  TEACHER_URL,
} from "../../common/routes";

import logo from "../../common/resources/logo.png";

export const SideMenu = () => {
  const navigate = useNavigate();
  const [activeElement, setActiveElement] = useState<string>("");
  const handleNavigateTo = (route: string, label: string) => {
    setActiveElement(label);

    navigate(route);
  };

  return (
    <SideMenuContainer>
      <LogoContainer>
        <img src={logo} alt="Logo" height="75px" />
      </LogoContainer>

      <ButtonsContainer>
        <SideMenuButton
          label="Dashboard"
          active={activeElement}
          handleClick={() => handleNavigateTo(DASHBOARD_URL, "Dashboard")}
        >
          <DashboardIcon />
        </SideMenuButton>

        <SideMenuButton
          label="Institutions"
          active={activeElement}
          handleClick={() => handleNavigateTo(INSTITUTION_URL, "Institutions")}
        >
          <CorporateFareIcon />
        </SideMenuButton>
        <SideMenuButton
          label="Subjects"
          active={activeElement}
          handleClick={() => handleNavigateTo(SUBJECT_URL, "Subjects")}
        >
          <MenuBookIcon />
        </SideMenuButton>
        <SideMenuButton
          label="Syllabus"
          active={activeElement}
          handleClick={() => handleNavigateTo(SYLLABUS_URL, "Syllabus")}
        >
          <DashboardIcon />
        </SideMenuButton>
        <SideMenuButton
          label="Teachers"
          active={activeElement}
          handleClick={() => handleNavigateTo(TEACHER_URL, "Teachers")}
        >
          <PeopleAltIcon />
        </SideMenuButton>
      </ButtonsContainer>
    </SideMenuContainer>
  );
};
