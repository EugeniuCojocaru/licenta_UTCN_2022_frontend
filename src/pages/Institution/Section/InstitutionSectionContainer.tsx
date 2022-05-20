import React, { useEffect, useState } from "react";
import {
  InstitutionHierarchyCreateDto,
  InstitutionHierarchyType,
} from "../../../common";
import {
  createInstitutions,
  getInstitutions,
} from "../../../service/institutionService";
import { SectionContainer } from "../InstitutionPage.styles";
import { Section } from "./Section";

interface Props {
  shouldLoadFaculties: (idInstitution: string) => void;
}
const InstitutionSectionContainer = ({ shouldLoadFaculties }: Props) => {
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
    shouldLoadFaculties(idInstitution);
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
        showAddButton
      />
    </SectionContainer>
  );
};

export default InstitutionSectionContainer;
