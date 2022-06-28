import { Section1CreateDto } from "../types";
import { SyllabusCreateDto } from "../types/syllabusTypes";
import getAxiosInstance from "./axiosInstance";

export const getFaculties = async () => {
  try {
    const response = await getAxiosInstance().get(`/api/faculties`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const createSyllabus = async (syllabus: SyllabusCreateDto) => {
  try {
    const response = await getAxiosInstance().post(`/api/syllabuses`, syllabus);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const updateSyllabus = async (
  syllabus: SyllabusCreateDto,
  oldSyllabusId: string
) => {
  try {
    const response = await getAxiosInstance().put(`/api/syllabuses`, syllabus, {
      params: { oldSyllabusId },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
