import { DepartmentCreateDto } from "../common";
import getAxiosInstance from "./axiosInstance";

export const getDepartments = async () => {
  try {
    const response = await getAxiosInstance().get(`/api/departments`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getFieldsOfStudyForDepartment = async (idDepartment: string) => {
  try {
    const response = await getAxiosInstance().get(
      `/api/department/${idDepartment}/fieldsOfStudy`
    );
    console.log({ response });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const createDepartment = async (newDepartment: DepartmentCreateDto) => {
  try {
    const response = await getAxiosInstance().post(
      `/api/department`,
      newDepartment
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
