import getAxiosInstance from "./axiosInstance";

export const getAudit = async () => {
  try {
    const response = await getAxiosInstance().get(`/api/audit`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const getStats1 = async () => {
  try {
    const response = await getAxiosInstance().get(`/activity/user`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const getStats2 = async () => {
  try {
    const response = await getAxiosInstance().get(`/activity/month`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
