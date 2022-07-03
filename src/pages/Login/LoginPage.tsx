import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  ACTIVATE_ACCOUNT_URL,
  BigPoppins,
  classes,
  Poppins,
  validateResponseStatus,
} from "../../common";
import { login } from "../../data-access/service";
import { LoginType, LOGIN_DEFAULT, Severity } from "../../data-access/types";
import Cookies from "js-cookie";
import {
  ButtonsContainer,
  InputsContainer,
  LoginContainer,
  MiddleText,
  PageContainer,
} from "./LoginPage.styles";
import { useAppDispatch, userIsLoggedIn } from "../../data-access/store";
import { useNotification } from "../../common/hooks/useNotification";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const { showNotification } = useNotification();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [state, setState] = useState<LoginType>(LOGIN_DEFAULT);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await login(state);
    console.log(response);
    if (response.status === 222) {
      console.log(`${ACTIVATE_ACCOUNT_URL}/${response.data}`);
      navigate(`${ACTIVATE_ACCOUNT_URL}/${response.data}`);
    } else {
      validateResponseStatus(response?.status)
        ? loginSuccessful(response?.data)
        : loginFailed();
    }
  };
  const loginSuccessful = (data: string) => {
    showNotification(Severity.Success, "Login successfully");
    setState(LOGIN_DEFAULT);
    Cookies.set("Token", data);
    dispatch(userIsLoggedIn());
  };
  const loginFailed = () => {
    showNotification(Severity.Error, "Login failed");
    setState({ ...state, password: "" });
  };
  return (
    <PageContainer>
      <LoginContainer onSubmit={handleSubmit}>
        <MiddleText>
          <BigPoppins>LOGIN</BigPoppins>
        </MiddleText>
        <InputsContainer>
          <TextField
            required
            label="Email"
            type="email"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
          <TextField
            required
            label="Password"
            type="password"
            value={state.password}
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />
        </InputsContainer>
        <ButtonsContainer>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            style={classes.button.primary}
          >
            <Poppins>Login</Poppins>
          </Button>
        </ButtonsContainer>
      </LoginContainer>
    </PageContainer>
  );
};
