import React, { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { DataContainer, PageLayout } from "./InstitutionPage.styles";
import DepartmentSectionContainer from "./Section/DepartmentSectionContainer";
import FacultySectionContainer from "./Section/FacultySectionContainer";
import FieldOfStudySectionContainer from "./Section/FieldOfStudySectionContainer";
import InstitutionSectionContainer from "./Section/InstitutionSectionContainer";

export const InstitutionPage = () => {
  const [idInstitution, setIdInstitution] = useState<string>("");
  const [idFaculty, setIdFaculty] = useState<string>("");
  const [idDepartment, setIdDepartment] = useState<string>("");

  useEffect(() => {
    setIdFaculty("");
    setIdDepartment("");
  }, [idInstitution]);

  useEffect(() => {
    setIdDepartment("");
  }, [idFaculty]);

  return (
    <Layout>
      <PageLayout>
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
          <FieldOfStudySectionContainer idDepartment={idDepartment} />
        </DataContainer>
      </PageLayout>
    </Layout>
  );
};
