import { Subject, SubjectCreateDto } from "../types";
import getAxiosInstance from "./axiosInstance";

export const getSubjects = async () => {
  try {
    const response = await getAxiosInstance().get(`/api/subjects`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const getSubjectById = async (id: string) => {
  try {
    const response = await getAxiosInstance().get(`/api/subjects`, {
      params: { id },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const getSyllabusBySubjectId = async (id: string) => {
  try {
    const response = await getAxiosInstance().get(
      `/api/syllabuses/subject/${id}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const createSubject = async (newSubject: SubjectCreateDto) => {
  try {
    const response = await getAxiosInstance().post(`/api/subjects`, newSubject);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const updateSubject = async (subject: Subject) => {
  try {
    const response = await getAxiosInstance().put(`/api/subjects`, subject);
    return response;
  } catch (error) {
    console.error(error);
  }
};
