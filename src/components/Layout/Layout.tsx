import React from "react";
import { SideMenu } from "../SideMenu";
import {
  FullPageContainer,
  NotificationZone,
  PageContainer,
  SideMenuContainer,
} from "./Layout.styles";

interface PropType {
  children: any;
}
export const Layout = ({ children }: PropType) => {
  return (
    <FullPageContainer>
      <SideMenuContainer>
        <SideMenu />
      </SideMenuContainer>
      <PageContainer>
        <NotificationZone />
        {children}
      </PageContainer>
    </FullPageContainer>
  );
};
