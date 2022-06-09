import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { classes } from "../../common/style/styles";
import { SYLLABUS_ADD_URL } from "../../common";
import { Layout } from "../../components/Layout/Layout";

import { ButtonContainer, InButtonContainer } from "./SyllabusPage.style";

export const SyllabusPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(SYLLABUS_ADD_URL);
  };
  return (
    <Layout>
      <ButtonContainer>
        <Button
          variant="contained"
          style={classes.button.primary}
          onClick={handleNavigate}
        >
          <InButtonContainer>
            <AddIcon />
            <p>Add new</p>
          </InButtonContainer>
        </Button>
      </ButtonContainer>
    </Layout>
  );
};
