import React, { useEffect, useState } from "react";
import { InstitutionHierarchyType } from "../../common";
import { Layout } from "../../components/Layout";
import { getFacultiesForInstitution } from "../../service/institutionService";
import {
  DataContainer,
  PageLayout,
  SectionContainer,
} from "./InstitutionPage.styles";
import FacultySectionContainer from "./Section/FacultySectionContainer";
import InstitutionSectionContainer from "./Section/InstitutionSectionContainer";

export const InstitutionPage = () => {
  const [idInstitution, setIdInstitution] = useState<string>("");
  const [idFaculty, setIdFaculty] = useState<string>("");
  const [idDepartment, setIdDepartment] = useState<string>("");

  useEffect(() => {}, [idInstitution]);

  useEffect(() => {
    const fetchData = () => {};
    fetchData();
  }, [idFaculty]);
  useEffect(() => {
    const fetchData = () => {};
    fetchData();
  }, [idDepartment]);

  return (
    <Layout>
      <PageLayout>
        <div>InstitutionPage</div>
        <DataContainer>
          <InstitutionSectionContainer shouldLoadFaculties={setIdInstitution} />
          <FacultySectionContainer
            idInstitution={idInstitution}
            shouldLoadDepartments={setIdFaculty}
          />
          <SectionContainer>3</SectionContainer>
          <SectionContainer>4</SectionContainer>
        </DataContainer>
      </PageLayout>
    </Layout>
  );
};
