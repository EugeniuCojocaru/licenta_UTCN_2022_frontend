import React, { useEffect, useState } from "react";

import { getFieldsOfStudyForDepartment } from "../../../data-access/service/departmentService";
import {
  createFieldOfStudy,
  deleteFieldOfStudy,
  updateFieldOfStudy,
} from "../../../data-access/service/fieldOfStudyService";

import { SectionContainer } from "./Section.styles";
import { Section } from "./Section";
import {
  InstitutionHierarchyCreateDto,
  InstitutionHierarchyType,
  Severity,
} from "../../../data-access/types";
import { validateResponseStatus } from "../../../common";
import { useNotification } from "../../../common/hooks/useNotification";
interface Props {
  idDepartment: string;
}
const FieldOfStudySectionContainer = ({ idDepartment }: Props) => {
  const { showNotification } = useNotification();
  const [data, setData] = useState<InstitutionHierarchyType[]>([]);
  const [refreshUI, setRefreshUI] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFieldsOfStudyForDepartment(idDepartment);
      console.log({ response });
      if (response) {
        setData(response.data);
      }
    };
    if (idDepartment) fetchData();
    else setData([]);
  }, [refreshUI, idDepartment]);

  const handleAddFieldOfStudy = async (name: InstitutionHierarchyCreateDto) => {
    const response = await createFieldOfStudy({
      ...name,
      departmentId: idDepartment,
    });
    if (validateResponseStatus(response?.status)) {
      showNotification(Severity.Success, "Field of study created successfully");
      setRefreshUI(!refreshUI);
    } else {
      showNotification(Severity.Error, response?.data);
    }
  };

  const handleUpdateFieldOfStudy = async (
    updatedFieldOfStudy: InstitutionHierarchyType
  ): Promise<boolean> => {
    const response = await updateFieldOfStudy({
      ...updatedFieldOfStudy,
      idParent: idDepartment,
    });
    if (validateResponseStatus(response?.status)) {
      showNotification(Severity.Success, "Field of study updated successfully");
      return true;
    }
    showNotification(Severity.Error, response?.data);
    return false;
  };

  const handleDeleteFieldOfStudy = async (
    idFieldOfStudy: string
  ): Promise<boolean> => {
    const response = await deleteFieldOfStudy({
      id: idFieldOfStudy,
      idParent: idDepartment,
    });
    if (validateResponseStatus(response?.status)) {
      showNotification(Severity.Success, "Field of study deleted successfully");
      return true;
    }
    showNotification(Severity.Error, response?.data);
    return false;
  };
  return (
    <SectionContainer>
      <Section
        labelTextField="Field of study name"
        title="Fields of study"
        data={data}
        handleCreate={handleAddFieldOfStudy}
        handleUpdate={handleUpdateFieldOfStudy}
        handleDelete={handleDeleteFieldOfStudy}
        showAddButton={!!idDepartment}
        refreshUI={() => {
          setRefreshUI(!refreshUI);
        }}
      />
    </SectionContainer>
  );
};

export default FieldOfStudySectionContainer;
