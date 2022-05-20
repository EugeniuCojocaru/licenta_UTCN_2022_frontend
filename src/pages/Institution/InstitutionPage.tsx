import React, { useEffect, useState } from "react";
import { InstitutionHierarchyType } from "../../common";
import { Layout } from "../../components/Layout";
import { getFacultiesForInstitution } from "../../service/institutionService";
import {
  DataContainer,
  PageLayout,
  SectionContainer,
} from "./InstitutionPage.styles";
import DepartmentSectionContainer from "./Section/DepartmentSectionContainer";
import FacultySectionContainer from "./Section/FacultySectionContainer";
import InstitutionSectionContainer from "./Section/InstitutionSectionContainer";

export const InstitutionPage = () => {
  const [idInstitution, setIdInstitution] = useState<string>("");
  const [idFaculty, setIdFaculty] = useState<string>("");
  const [idDepartment, setIdDepartment] = useState<string>("");

  useEffect(() => {
    setIdFaculty("");
  }, [idInstitution]);

  useEffect(() => {
    setIdDepartment("");
  }, [idFaculty]);

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
          <DepartmentSectionContainer
            idFaculty={idFaculty}
            shouldLoadFieldsOfStudy={setIdDepartment}
          />
          <SectionContainer>4</SectionContainer>
        </DataContainer>
      </PageLayout>
    </Layout>
  );
};
