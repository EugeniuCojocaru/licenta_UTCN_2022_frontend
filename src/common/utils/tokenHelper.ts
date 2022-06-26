import Cookies from "js-cookie";
import { TokenType, TOKEN_DEFAULT } from "../../data-access/types";
import jwt_decode from "jwt-decode";
export const getToken = (): string | undefined => {
  return Cookies.get("Token");
};
export const setToken = (token: string) => {
  Cookies.set("Token", token);
};
export const isTokenValid = (token: string | undefined): boolean => {
  if (!token) return false;
  else {
    const tokenData: TokenType = token ? jwt_decode(token) : TOKEN_DEFAULT;
    if (Date.now() >= Number(tokenData.exp) * 1000) return false;
  }
  return true;
};

export const getUserId = (token: string): string => {
  const tokenData: TokenType = jwt_decode(token);
  return tokenData.sub;
};
