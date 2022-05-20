import React, { useEffect, useState } from "react";
import {
  InstitutionHierarchyCreateDto,
  InstitutionHierarchyType,
} from "../../../common";
import {
  createInstitutions,
  getFacultiesForInstitution,
  getInstitutions,
} from "../../../service/institutionService";
import { SectionContainer } from "../InstitutionPage.styles";
import { Section } from "./Section";

const InstitutionSectionContainer = () => {
  const [data, setData] = useState<InstitutionHierarchyType[]>([]);
  const [refreshUI, setRefreshUI] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getInstitutions();
      console.log({ response });
      if (response) {
        setData(response.data);
      }
    };
    fetchData();
  }, [refreshUI]);

  const handleAddInstitution = async (name: InstitutionHierarchyCreateDto) => {
    const response = await createInstitutions(name);
    if (response) setRefreshUI(!refreshUI);
  };

  const handleGetFacultiesForInstitution = async (idInstitution: string) => {
    const response = await getFacultiesForInstitution(idInstitution);
  };

  return (
    <SectionContainer>
      <Section
        labelTextField="Institution name"
        title="Institutions"
        data={data}
        handleCreate={handleAddInstitution}
        handleShowChildren={handleGetFacultiesForInstitution}
        canShowChildren
      />
    </SectionContainer>
  );
};

export default InstitutionSectionContainer;
