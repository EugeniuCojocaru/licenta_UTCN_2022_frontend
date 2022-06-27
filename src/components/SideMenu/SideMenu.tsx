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
  AUDIT_URL,
  DASHBOARD_URL,
  INSTITUTION_URL,
  SUBJECT_URL,
  SYLLABUS_URL,
  TEACHER_URL,
} from "../../common/routes";

import logo from "../../common/resources/logo.png";
import { removeToken } from "../../common/utils/tokenHelper";
import {
  resetAuth,
  resetSections,
  useAppDispatch,
} from "../../data-access/store";

export const SideMenu = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [activeElement, setActiveElement] = useState<string>("");
  const handleNavigateTo = (route: string, label: string) => {
    setActiveElement(label);
    navigate(route);
  };
  const handleLogout = () => {
    dispatch(resetAuth());
    dispatch(resetSections());
    removeToken();
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
        <SideMenuButton
          label="Audit log"
          active={activeElement}
          handleClick={() => handleNavigateTo(AUDIT_URL, "Audit")}
        >
          <PeopleAltIcon />
        </SideMenuButton>
        <SideMenuButton
          label="Log out"
          active={activeElement}
          handleClick={() => handleLogout()}
        >
          <PeopleAltIcon />
        </SideMenuButton>
      </ButtonsContainer>
    </SideMenuContainer>
  );
};
