import { LoginType } from "../types";
import getAxiosInstance from "./axiosInstance";

export const login = async (credentials: LoginType) => {
  try {
    const response = await getAxiosInstance().post(
      `/api/authentication/authenticate`,
      credentials
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
