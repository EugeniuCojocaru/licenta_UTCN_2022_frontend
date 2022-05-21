import React, { useEffect, useState } from "react";
import {
  InstitutionHierarchyCreateDto,
  InstitutionHierarchyType,
} from "../../../common";
import { getFieldsOfStudyForDepartment } from "../../../service/departmentService";
import { createFieldOfStudy } from "../../../service/fieldOfStudyService";

import { SectionContainer } from "../InstitutionPage.styles";
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

  return (
    <SectionContainer>
      <Section
        labelTextField="Field of study name"
        title="Fields of study"
        data={data}
        handleCreate={handleAddFieldOfStudy}
        showAddButton={!!idDepartment}
      />
    </SectionContainer>
  );
};

export default FieldOfStudySectionContainer;
