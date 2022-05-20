import { FacultyCreateDto, InstitutionHierarchyCreateDto } from "../common";
import getAxiosInstance from "./axiosInstance";

export const getFaculties = async () => {
  try {
    const response = await getAxiosInstance().get(`/api/faculties`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getDepartmentsForFaculties = async (idFaculty: string) => {
  try {
    const response = await getAxiosInstance().get(
      `/api/institutions/${idFaculty}/faculties`
    );
    console.log({ response });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const createFaculty = async (newFaculty: FacultyCreateDto) => {
  try {
    const response = await getAxiosInstance().post(
      `/api/faculties`,
      newFaculty
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
