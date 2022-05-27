import React, { useEffect, useState } from "react";
import {
  InstitutionHierarchyCreateDto,
  InstitutionHierarchyType,
} from "../../../common";
import { getFieldsOfStudyForDepartment } from "../../../data-access/service/departmentService";
import {
  createFieldOfStudy,
  deleteFieldOfStudy,
  updateFieldOfStudy,
} from "../../../data-access/service/fieldOfStudyService";

import { SectionContainer } from "./Section.styles";
import { Section } from "./Section";
interface Props {
  idDepartment: string;
}
const FieldOfStudySectionContainer = ({ idDepartment }: Props) => {
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
    if (response) setRefreshUI(!refreshUI);
  };

  const handleUpdateFieldOfStudy = async (
    updatedFieldOfStudy: InstitutionHierarchyType
  ): Promise<boolean> => {
    const response = await updateFieldOfStudy({
      ...updatedFieldOfStudy,
      idParent: idDepartment,
    });
    if (response?.status === 200) return true;
    return false;
  };

  const handleDeleteFieldOfStudy = async (
    idFieldOfStudy: string
  ): Promise<boolean> => {
    const response = await deleteFieldOfStudy({
      id: idFieldOfStudy,
      idParent: idDepartment,
    });
    if (response?.status === 200) return true;
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
