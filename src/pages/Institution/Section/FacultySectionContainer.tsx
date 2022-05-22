import React, { useEffect, useState } from "react";
import {
  InstitutionHierarchyCreateDto,
  InstitutionHierarchyType,
} from "../../../common";
import {
  createFaculty,
  deleteFaculty,
  updateFaculty,
} from "../../../service/facultyService";
import { getFacultiesForInstitution } from "../../../service/institutionService";
import { SectionContainer } from "./Section.styles";
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

  const handleUpdateFaculty = async (
    updatedFaculty: InstitutionHierarchyType
  ): Promise<boolean> => {
    const response = await updateFaculty({
      ...updatedFaculty,
      idParent: idInstitution,
    });
    if (response?.status === 200) return true;
    return false;
  };

  const handleAddFaculty = async (name: InstitutionHierarchyCreateDto) => {
    const response = await createFaculty({
      ...name,
      institutionId: idInstitution,
    });
    if (response) setRefreshUI(!refreshUI);
  };

  const handleDeleteFaculty = async (idFaculty: string): Promise<boolean> => {
    const response = await deleteFaculty({
      id: idFaculty,
      idParent: idInstitution,
    });
    if (response?.status === 200) return true;
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
