import getAxiosInstance from "./axiosInstance";

export const getAudit = async () => {
  try {
    const response = await getAxiosInstance().get(`/api/audit`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
