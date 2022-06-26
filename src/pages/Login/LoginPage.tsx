import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { classes, validateResponseStatus } from "../../common";
import { login } from "../../data-access/service";
import { LoginType, LOGIN_DEFAULT } from "../../data-access/types";
import Cookies from "js-cookie";
import {
  ButtonsContainer,
  InputsContainer,
  LoginContainer,
  MiddleText,
  PageContainer,
} from "./LoginPage.styles";
import { useAppDispatch, userIsLoggedIn } from "../../data-access/store";

export const LoginPage = () => {
  const dispatch = useAppDispatch();
  const [state, setState] = useState<LoginType>(LOGIN_DEFAULT);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await login(state);
    console.log(response);
    validateResponseStatus(response?.status)
      ? loginSuccessful(response?.data)
      : loginFailed();
  };
  const loginSuccessful = (data: string) => {
    setState(LOGIN_DEFAULT);
    Cookies.set("Token", data);
    dispatch(userIsLoggedIn());
  };
  const loginFailed = () => {
    setState({ ...state, password: "" });
  };
  return (
    <PageContainer>
      <LoginContainer onSubmit={handleSubmit}>
        <MiddleText>Login</MiddleText>
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
            Login
          </Button>
        </ButtonsContainer>
      </LoginContainer>
    </PageContainer>
  );
};
