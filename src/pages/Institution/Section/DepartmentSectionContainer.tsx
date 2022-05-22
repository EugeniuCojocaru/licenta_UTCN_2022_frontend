import React, { useEffect, useState } from "react";
import {
  InstitutionHierarchyCreateDto,
  InstitutionHierarchyType,
} from "../../../common";
import {
  createDepartment,
  updateDepartment,
} from "../../../service/departmentService";
import { getDepartmentsForFaculties } from "../../../service/facultyService";

import { SectionContainer } from "../InstitutionPage.styles";
import { Section } from "./Section";
interface Props {
  idFaculty: string;
  shouldLoadFieldsOfStudy: (idDepartment: string) => void;
}
const DepartmentSectionContainer = ({
  idFaculty,
  shouldLoadFieldsOfStudy,
}: Props) => {
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
    if (response) setRefreshUI(!refreshUI);
  };

  const handleUpdateDepartment = async (
    updatedDepartment: InstitutionHierarchyType
  ): Promise<boolean> => {
    const response = await updateDepartment({
      ...updatedDepartment,
      idParent: idFaculty,
    });
    if (response?.status === 200) return true;
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
