import React from "react";
import { Layout } from "../../components/Layout";
import {
  DataContainer,
  PageLayout,
  SectionContainer,
} from "./InstitutionPage.styles";
import InstitutionSectionContainer from "./Section/InstitutionSectionContainer";

export const InstitutionPage = () => {
  return (
    <Layout>
      <PageLayout>
        <div>InstitutionPage</div>
        <DataContainer>
          <InstitutionSectionContainer />
          <SectionContainer>2</SectionContainer>
          <SectionContainer>3</SectionContainer>
          <SectionContainer>4</SectionContainer>
        </DataContainer>
      </PageLayout>
    </Layout>
  );
};
