import React, { useEffect, useState } from "react";
import {
  InstitutionHierarchyCreateDto,
  InstitutionHierarchyType,
  Severity,
} from "../../../data-access/types";
import {
  createInstitutions,
  deleteInstitution,
  getInstitutions,
  updateInstitutions,
} from "../../../data-access/service/institutionService";
import { SectionContainer } from "./Section.styles";
import { Section } from "./Section";
import { validateResponseStatus } from "../../../common";
import { useNotification } from "../../../common/hooks/useNotification";

interface Props {
  shouldLoadFaculties: (idInstitution: string) => void;
}
const InstitutionSectionContainer = ({ shouldLoadFaculties }: Props) => {
  const { showNotification } = useNotification();
  const [data, setData] = useState<InstitutionHierarchyType[]>([]);
  const [refreshUI, setRefreshUI] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getInstitutions();
      if (response) {
        setData(response.data);
      }
    };
    fetchData();
  }, [refreshUI]);

  const handleAddInstitution = async (name: InstitutionHierarchyCreateDto) => {
    const response = await createInstitutions(name);
    if (validateResponseStatus(response?.status)) {
      showNotification(Severity.Success, "Institution created successfully");
      setRefreshUI(!refreshUI);
    } else {
      showNotification(Severity.Error, response?.data);
    }
  };

  const handleUpdateInstitution = async (
    newInstitution: InstitutionHierarchyType
  ): Promise<boolean> => {
    const response = await updateInstitutions(newInstitution);
    if (validateResponseStatus(response?.status)) {
      showNotification(Severity.Success, "Institution updated successfully");
      return true;
    }
    showNotification(Severity.Error, response?.data);
    return false;
  };

  const handleDeleteInstitution = async (
    idInstitution: string
  ): Promise<boolean> => {
    const response = await deleteInstitution({
      idParent: idInstitution,
      id: idInstitution,
    });
    if (validateResponseStatus(response?.status)) {
      showNotification(Severity.Success, "Institution deleted successfully");
      return true;
    }
    showNotification(Severity.Error, response?.data);
    return false;
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
        handleUpdate={handleUpdateInstitution}
        handleDelete={handleDeleteInstitution}
        handleShowChildren={handleGetFacultiesForInstitution}
        canShowChildren
        showAddButton
        refreshUI={() => {
          setRefreshUI(!refreshUI);
        }}
      />
    </SectionContainer>
  );
};

export default InstitutionSectionContainer;
