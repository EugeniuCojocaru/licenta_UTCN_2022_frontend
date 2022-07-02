import React, { useEffect, useState } from "react";
import {
  InstitutionHierarchyCreateDto,
  InstitutionHierarchyType,
  Severity,
} from "../../../data-access/types";
import {
  createFaculty,
  deleteFaculty,
  updateFaculty,
} from "../../../data-access/service/facultyService";
import { getFacultiesForInstitution } from "../../../data-access/service/institutionService";
import { SectionContainer } from "./Section.styles";
import { Section } from "./Section";
import { useNotification } from "../../../common/hooks/useNotification";
import { validateResponseStatus } from "../../../common";
interface Props {
  idInstitution: string;
  shouldLoadDepartments: (idFaculty: string) => void;
}
const FacultySectionContainer = ({
  idInstitution,
  shouldLoadDepartments,
}: Props) => {
  const { showNotification } = useNotification();
  const [data, setData] = useState<InstitutionHierarchyType[]>([]);
  const [refreshUI, setRefreshUI] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFacultiesForInstitution(idInstitution);
      if (response) {
        setData(response.data);
      }
    };
    if (idInstitution) fetchData();
    else setData([]);
  }, [refreshUI, idInstitution]);

  const handleUpdateFaculty = async (
    updatedFaculty: InstitutionHierarchyType
  ): Promise<boolean> => {
    const response = await updateFaculty({
      ...updatedFaculty,
      idParent: idInstitution,
    });
    if (validateResponseStatus(response?.status)) {
      showNotification(Severity.Success, "Faculty updated successfully");
      return true;
    }
    showNotification(Severity.Error, response?.data);
    return false;
  };

  const handleAddFaculty = async (name: InstitutionHierarchyCreateDto) => {
    const response = await createFaculty({
      ...name,
      institutionId: idInstitution,
    });
    if (validateResponseStatus(response?.status)) {
      showNotification(Severity.Success, "Faculty created successfully");
      setRefreshUI(!refreshUI);
    } else {
      showNotification(Severity.Error, response?.data);
    }
  };

  const handleDeleteFaculty = async (idFaculty: string): Promise<boolean> => {
    const response = await deleteFaculty({
      id: idFaculty,
      idParent: idInstitution,
    });
    if (validateResponseStatus(response?.status)) {
      showNotification(Severity.Success, "Faculty deleted successfully");
      return true;
    }
    showNotification(Severity.Error, response?.data);
    return false;
  };

  return (
    <SectionContainer>
      <Section
        labelTextField="Faculty name"
        title="Faculties"
        data={data}
        handleCreate={handleAddFaculty}
        handleUpdate={handleUpdateFaculty}
        handleDelete={handleDeleteFaculty}
        handleShowChildren={shouldLoadDepartments}
        canShowChildren
        showAddButton={!!idInstitution}
        refreshUI={() => {
          setRefreshUI(!refreshUI);
        }}
      />
    </SectionContainer>
  );
};

export default FacultySectionContainer;
