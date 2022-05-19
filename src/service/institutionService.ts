import getAxiosInstance from "./axiosInstance";

export const getInstitutions = async () => {
  try {
    const response = await getAxiosInstance().get(`/api/institutions`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
