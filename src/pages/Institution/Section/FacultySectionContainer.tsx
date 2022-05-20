import React, { useEffect, useState } from "react";
import {
  FacultyCreateDto,
  InstitutionHierarchyCreateDto,
  InstitutionHierarchyType,
} from "../../../common";
import { createFaculty } from "../../../service/facultyService";
import {
  createInstitutions,
  getFacultiesForInstitution,
  getInstitutions,
} from "../../../service/institutionService";
import { SectionContainer } from "../InstitutionPage.styles";
import { Section } from "./Section";
interface Props {
  idInstitution: string;
  shouldLoadDepartments: (idFaculty: string) => void;
}
const FacultySectionContainer = ({
  idInstitution,
  shouldLoadDepartments,
}: Props) => {
  const [data, setData] = useState<InstitutionHierarchyType[]>([]);
  const [refreshUI, setRefreshUI] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFacultiesForInstitution(idInstitution);
      console.log({ response });
      if (response) {
        setData(response.data);
      }
    };
    if (idInstitution) fetchData();
    else setData([]);
  }, [refreshUI, idInstitution]);

  const handleAddFaculty = async (name: InstitutionHierarchyCreateDto) => {
    const response = await createFaculty({
      ...name,
      institutionId: idInstitution,
    });
    if (response) setRefreshUI(!refreshUI);
  };

  const handleGetFacultiesForInstitution = async (idInstitution: string) => {
    const response = await getFacultiesForInstitution(idInstitution);
  };

  return (
    <SectionContainer>
      <Section
        labelTextField="Faculty name"
        title="Faculties"
        data={data}
        handleCreate={handleAddFaculty}
        handleShowChildren={shouldLoadDepartments}
        canShowChildren
      />
    </SectionContainer>
  );
};

export default FacultySectionContainer;
