import React, { useEffect, useState } from "react";
import { InstitutionHierarchyType } from "../../../common";
import { getInstitutions } from "../../../service/institutionService";
import { SectionContainer } from "../InstitutionPage.styles";
import { Section } from "./Section";

const InstitutionSectionContainer = () => {
  const [data, setData] = useState<InstitutionHierarchyType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getInstitutions();
      console.log({ response });
      if (response) {
        setData(response.data);
      }
    };
    fetchData();
  }, []);

  return (
    <SectionContainer>
      <Section
        labelTextField="Institution name"
        title="Institutions"
        data={data}
      />
    </SectionContainer>
  );
};

export default InstitutionSectionContainer;
