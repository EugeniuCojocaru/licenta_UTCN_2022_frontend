import { Button } from "@mui/material";
import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";

import { Layout } from "../../components/Layout/Layout";
import UserTable from "./Table/UserTable";
import { AddTeacherModal } from "./AddTeacherModal";

import { ButtonContainer, InButtonContainer } from "./TeachersPage.styles";
import { classes } from "../../common/style/styles";

export const TeacherPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Layout>
      <h1>Users</h1>
      <ButtonContainer>
        <Button
          variant="contained"
          style={classes.button.primary}
          onClick={() => setIsOpen(true)}
        >
          <InButtonContainer>
            <AddIcon />
            <p>Add new</p>
          </InButtonContainer>
        </Button>
      </ButtonContainer>
      <UserTable />
      {isOpen && (
        <AddTeacherModal open={isOpen} handleClose={() => setIsOpen(false)} />
      )}
    </Layout>
  );
};
