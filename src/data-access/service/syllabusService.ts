import { Section1CreateDto } from "../types";
import getAxiosInstance from "./axiosInstance";

export const getFaculties = async () => {
  try {
    const response = await getAxiosInstance().get(`/api/faculties`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const createSyllabus = async (section1: Section1CreateDto) => {
  try {
    const response = await getAxiosInstance().post(`/api/syllabuses`, section1);
    return response;
  } catch (error) {
    console.error(error);
  }
};
