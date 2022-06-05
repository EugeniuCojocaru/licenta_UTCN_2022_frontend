import React, { useState } from "react";

import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { classes } from "../../common/style/styles";
import { Layout } from "../../components/Layout/Layout";
import { AddSyllabusModal } from "./AddSyllabus/AddSyllabusModal";

import { ButtonContainer, InButtonContainer } from "./SyllabusPage.style";

export const SyllabusPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Layout>
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
      {isOpen && (
        <AddSyllabusModal open={isOpen} handleClose={() => setIsOpen(false)} />
      )}
    </Layout>
  );
};
