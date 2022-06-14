import getAxiosInstance from "./axiosInstance";

export const getSubjects = async () => {
  try {
    const response = await getAxiosInstance().get(`/api/subjects`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
