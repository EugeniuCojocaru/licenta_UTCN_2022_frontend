import {
  DepartmentCreateDto,
  InstitutionHierarchyDeleteDto,
  InstitutionHierarchyUpdateDto,
} from "../../data-access/types";
import getAxiosInstance from "./axiosInstance";

export const getDepartments = async () => {
  try {
    const response = await getAxiosInstance().get(`/api/departments`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getFieldsOfStudyForDepartment = async (idDepartment: string) => {
  try {
    const response = await getAxiosInstance().get(
      `/api/departments/${idDepartment}/fieldsOfStudy`
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const createDepartment = async (newDepartment: DepartmentCreateDto) => {
  try {
    const response = await getAxiosInstance().post(
      `/api/departments`,
      newDepartment
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const updateDepartment = async (
  updatedDepartment: InstitutionHierarchyUpdateDto
) => {
  try {
    const response = await getAxiosInstance().put(
      `/api/departments`,
      {
        id: updatedDepartment.id,
        name: updatedDepartment.name,
      },
      { params: { facultyId: updatedDepartment.idParent } }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteDepartment = async (ids: InstitutionHierarchyDeleteDto) => {
  try {
    const response = await getAxiosInstance().delete(
      `/api/departments`,

      { params: { facultyId: ids.idParent, departmentId: ids.id } }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
