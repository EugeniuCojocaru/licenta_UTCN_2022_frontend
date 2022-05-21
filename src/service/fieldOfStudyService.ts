import { FieldOfStudyCreateDto } from "../common";
import getAxiosInstance from "./axiosInstance";

export const getFieldsOfStudy = async () => {
  try {
    const response = await getAxiosInstance().get(`/api/fieldsOfStudy`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const createFieldOfStudy = async (
  newFieldOfStudy: FieldOfStudyCreateDto
) => {
  try {
    const response = await getAxiosInstance().post(
      `/api/fieldsOfStudy`,
      newFieldOfStudy
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
