import React, { useState } from "react";
import {
  BigPoppins,
  classes,
  LOGIN_URL,
  messages,
  validateResponseStatus,
} from "../../../common";
import { Button, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import {
  ButtonsContainer,
  InputsContainer,
  LoginContainer,
  MiddleText,
  PageContainer,
} from "../LoginPage.styles";
import { useNotification } from "../../../common/hooks/useNotification";
import { activate } from "../../../data-access/service";
import { Severity } from "../../../data-access/types";
const AccountActivationPage = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const { showNotification } = useNotification();
  const [state, setState] = useState({
    password: "",
    repassword: "",
  });
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (state.password === state.repassword) {
      const info = {
        id: id || "",
        password: state.password,
      };
      const response = await activate(info);
      if (validateResponseStatus(response?.status)) {
        showNotification(Severity.Success, "User activated successfully");
        navigate(LOGIN_URL);
      } else {
        showNotification(Severity.Error, response?.data);
      }
    } else {
      showNotification(Severity.Error, messages.activate);
    }
  };
  return (
    <PageContainer>
      <LoginContainer onSubmit={handleSubmit}>
        <MiddleText>
          <BigPoppins>ACTIVATE ACCOUNT</BigPoppins>
        </MiddleText>
        <InputsContainer>
          <TextField
            required
            id="new_password"
            label="New password"
            type="password"
            value={state.password}
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />
          <TextField
            required
            id="new_password2"
            label="Confirm new password"
            type="password"
            value={state.repassword}
            onChange={(e) => setState({ ...state, repassword: e.target.value })}
          />
        </InputsContainer>
        <ButtonsContainer>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            style={classes.button.primary}
          >
            Save changes
          </Button>
        </ButtonsContainer>
      </LoginContainer>
    </PageContainer>
  );
};

export default AccountActivationPage;
