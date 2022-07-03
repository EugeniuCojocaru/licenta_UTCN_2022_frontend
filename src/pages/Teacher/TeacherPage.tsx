import { Button } from "@mui/material";
import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";

import { Layout } from "../../components/Layout/Layout";
import UserTable from "./Table/UserTable";
import { AddTeacherModal } from "./AddTeacherModal";

import { ButtonContainer, InButtonContainer } from "./TeachersPage.styles";
import { classes } from "../../common/style/styles";
import { atLeastAdmin, BigPoppins, Poppins } from "../../common";

export const TeacherPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Layout>
      <BigPoppins>USERS</BigPoppins>
      {atLeastAdmin() && (
        <ButtonContainer>
          <Button
            variant="contained"
            style={classes.button.primary}
            onClick={() => setIsOpen(true)}
          >
            <InButtonContainer>
              <AddIcon />
              <Poppins>Add new</Poppins>
            </InButtonContainer>
          </Button>
        </ButtonContainer>
      )}
      <UserTable />
      {isOpen && (
        <AddTeacherModal open={isOpen} handleClose={() => setIsOpen(false)} />
      )}
    </Layout>
  );
};
