import { Role } from "../../data-access/types";
import { TokenType, TOKEN_DEFAULT } from "../../data-access/types/loginTypes";
import jwt_decode from "jwt-decode";

export const useToken = (token: string) => {
  const tokenData: TokenType = token ? jwt_decode(token) : TOKEN_DEFAULT;
  const isValid = (): boolean => {
    if (Date.now() >= Number(tokenData.exp) * 1000) return false;
    return true;
  };
  const getRole = (): Role => {
    return tokenData.role;
  };
  const getUserId = (): string => {
    return tokenData.sub;
  };
  return {
    isValid,
    getRole,
    getUserId,
  };
};
