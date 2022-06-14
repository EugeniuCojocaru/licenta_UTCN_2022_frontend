import { User, UserCreateDto } from "../types/userTypes";
import getAxiosInstance from "./axiosInstance";

export const getUsers = async (active: boolean, list: boolean = false) => {
  try {
    const response = await getAxiosInstance().get(`/api/teachers`, {
      params: { active, list },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getUserById = async (id: string) => {
  try {
    const response = await getAxiosInstance().get(`/api/teachers/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (newUser: UserCreateDto) => {
  try {
    const response = await getAxiosInstance().post(`/api/teachers`, newUser);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (user: User) => {
  try {
    const response = await getAxiosInstance().put(`/api/teachers`, user);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (id: string) => {
  try {
    const response = await getAxiosInstance().delete(`/api/teachers`, {
      params: { id },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
