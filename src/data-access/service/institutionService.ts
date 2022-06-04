import {
  InstitutionHierarchyCreateDto,
  InstitutionHierarchyDeleteDto,
  InstitutionHierarchyType,
} from "../../common";
import getAxiosInstance from "./axiosInstance";

export const getInstitutions = async () => {
  try {
    const response = await getAxiosInstance().get(`/api/institutions`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getFacultiesForInstitution = async (idInstitution: string) => {
  try {
    const response = await getAxiosInstance().get(
      `/api/institutions/${idInstitution}/faculties`
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const createInstitutions = async (
  name: InstitutionHierarchyCreateDto
) => {
  try {
    const response = await getAxiosInstance().post(`/api/institutions`, name);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const updateInstitutions = async (
  newInstitution: InstitutionHierarchyType
) => {
  try {
    const response = await getAxiosInstance().put(
      `/api/institutions`,
      newInstitution
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteInstitution = async (ids: InstitutionHierarchyDeleteDto) => {
  try {
    const response = await getAxiosInstance().delete(
      `/api/institutions`,

      { params: { institutionId: ids.id } }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
