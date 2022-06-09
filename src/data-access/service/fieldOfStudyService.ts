import {
  FieldOfStudyCreateDto,
  InstitutionHierarchyDeleteDto,
  InstitutionHierarchyUpdateDto,
} from "../../data-access/types";
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

export const updateFieldOfStudy = async (
  updatedFieldOfStudy: InstitutionHierarchyUpdateDto
) => {
  try {
    const response = await getAxiosInstance().put(
      `/api/fieldsOfStudy`,
      {
        id: updatedFieldOfStudy.id,
        name: updatedFieldOfStudy.name,
      },
      { params: { departmentId: updatedFieldOfStudy.idParent } }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteFieldOfStudy = async (
  ids: InstitutionHierarchyDeleteDto
) => {
  try {
    const response = await getAxiosInstance().delete(
      `/api/fieldsOfStudy`,

      { params: { departmentId: ids.idParent, fieldOfStudyId: ids.id } }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
