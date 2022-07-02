import React, { useEffect, useState } from "react";
import {
  InstitutionHierarchyCreateDto,
  InstitutionHierarchyType,
  Severity,
} from "../../../data-access/types";
import {
  createDepartment,
  deleteDepartment,
  updateDepartment,
} from "../../../data-access/service/departmentService";
import { getDepartmentsForFaculties } from "../../../data-access/service/facultyService";

import { Section } from "./Section";
import { SectionContainer } from "./Section.styles";
import { useNotification } from "../../../common/hooks/useNotification";
import { validateResponseStatus } from "../../../common";
interface Props {
  idFaculty: string;
  shouldLoadFieldsOfStudy: (idDepartment: string) => void;
}
const DepartmentSectionContainer = ({
  idFaculty,
  shouldLoadFieldsOfStudy,
}: Props) => {
  const { showNotification } = useNotification();
  const [data, setData] = useState<InstitutionHierarchyType[]>([]);
  const [refreshUI, setRefreshUI] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getDepartmentsForFaculties(idFaculty);
      console.log({ response });
      if (response) {
        setData(response.data);
      }
    };
    if (idFaculty) fetchData();
    else setData([]);
  }, [refreshUI, idFaculty]);

  const handleAddDepartment = async (name: InstitutionHierarchyCreateDto) => {
    const response = await createDepartment({
      ...name,
      facultyId: idFaculty,
    });
    if (validateResponseStatus(response?.status)) {
      showNotification(Severity.Success, "Department created successfully");
      setRefreshUI(!refreshUI);
    } else {
      showNotification(Severity.Error, response?.data);
    }
  };

  const handleUpdateDepartment = async (
    updatedDepartment: InstitutionHierarchyType
  ): Promise<boolean> => {
    const response = await updateDepartment({
      ...updatedDepartment,
      idParent: idFaculty,
    });
    if (validateResponseStatus(response?.status)) {
      showNotification(Severity.Success, "Department updated successfully");
      return true;
    }
    showNotification(Severity.Error, response?.data);
    return false;
  };

  const handleDeleteDepartment = async (
    idDepartment: string
  ): Promise<boolean> => {
    const response = await deleteDepartment({
      id: idDepartment,
      idParent: idFaculty,
    });
    if (validateResponseStatus(response?.status)) {
      showNotification(Severity.Success, "Department deleted successfully");
      return true;
    }
    showNotification(Severity.Error, response?.data);
    return false;
  };

  return (
    <SectionContainer>
      <Section
        labelTextField="Department name"
        title="Departments"
        data={data}
        handleCreate={handleAddDepartment}
        handleUpdate={handleUpdateDepartment}
        handleShowChildren={shouldLoadFieldsOfStudy}
        handleDelete={handleDeleteDepartment}
        canShowChildren
        showAddButton={!!idFaculty}
        refreshUI={() => {
          setRefreshUI(!refreshUI);
        }}
      />
    </SectionContainer>
  );
};

export default DepartmentSectionContainer;
