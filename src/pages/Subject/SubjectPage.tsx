import { Button } from "@mui/material";
import React, { useState } from "react";
import { classes } from "../../common";
import { Layout } from "../../components/Layout";
import { ButtonContainer, InButtonContainer } from "./SubjectPage.styles";
import AddIcon from "@mui/icons-material/Add";
import { SubjectTable } from "./Table/SubjectTable";
import { AddSubjectModal } from "./AddSubjectModal";

export const SubjectPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [refreshUI, setRefreshUI] = useState<boolean>(false);
  const handleRefreshUI = () => {
    setRefreshUI(!refreshUI);
  };
  return (
    <Layout>
      <h1>Subjects</h1>
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

      <SubjectTable refreshUI={refreshUI} handleRefreshUI={handleRefreshUI} />
      {isOpen && (
        <AddSubjectModal
          open={isOpen}
          handleClose={() => setIsOpen(false)}
          handleRefreshUI={handleRefreshUI}
        />
      )}
    </Layout>
  );
};
