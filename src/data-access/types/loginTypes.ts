import { Role } from "./userTypes";

export interface LoginType {
  email: string;
  password: string;
}
export const LOGIN_DEFAULT: LoginType = {
  email: "",
  password: "",
};

export interface TokenType {
  aud: string;
  exp: string;
  iss: string;
  nbf: string;
  role: Role;
  sub: string;
}
export const TOKEN_DEFAULT = {
  aud: "",
  exp: "",
  iss: "",
  nbf: "",
  role: Role.User,
  sub: "",
};

export interface UserActivateType {
  id: string;
  password: string;
}
