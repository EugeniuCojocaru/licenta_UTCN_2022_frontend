import { LoginType, UserActivateType } from "../types";
import getAxiosInstance from "./axiosInstance";

export const login = async (credentials: LoginType) => {
  try {
    const response = await getAxiosInstance().post(
      `/api/authentication/authenticate`,
      credentials
    );
    return response;
  } catch (error: any) {
    return error.response;
  }
};
export const activate = async (credentials: UserActivateType) => {
  try {
    const response = await getAxiosInstance().put(
      `/api/authentication`,
      credentials
    );
    return response;
  } catch (error: any) {
    return error.response;
  }
};
