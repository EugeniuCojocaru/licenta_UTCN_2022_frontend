import { Button } from "@mui/material";
import React, { useState } from "react";
import { BigPoppins, classes, Poppins } from "../../common";
import { Layout } from "../../components/Layout";
import { ButtonContainer, InButtonContainer } from "./SubjectPage.styles";
import AddIcon from "@mui/icons-material/Add";
import { SubjectTable } from "./Table/SubjectTable";
import { AddSubjectModal } from "./AddSubjectModal";
import { HistorySyllabusModal } from "./HistorySyllabus/HistorySyllabusModal";

export const SubjectPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [refreshUI, setRefreshUI] = useState<boolean>(false);

  const [isOpenHistory, setIsOpenHistory] = useState<boolean>(false);
  const [subjectId, setSubjectId] = useState<string>("");
  const handleRefreshUI = () => {
    setRefreshUI(!refreshUI);
  };
  const handleShowHistory = (id: string) => {
    setSubjectId(id);
    setIsOpenHistory(true);
  };
  return (
    <Layout>
      <BigPoppins>SUBJECTS</BigPoppins>
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

      <SubjectTable
        refreshUI={refreshUI}
        handleRefreshUI={handleRefreshUI}
        handleShowHistory={handleShowHistory}
      />
      {isOpen && (
        <AddSubjectModal
          open={isOpen}
          handleClose={() => setIsOpen(false)}
          handleRefreshUI={handleRefreshUI}
        />
      )}
      {isOpenHistory && subjectId && (
        <HistorySyllabusModal
          open={isOpenHistory}
          handleClose={() => setIsOpenHistory(false)}
          subjectId={subjectId}
        />
      )}
    </Layout>
  );
};
