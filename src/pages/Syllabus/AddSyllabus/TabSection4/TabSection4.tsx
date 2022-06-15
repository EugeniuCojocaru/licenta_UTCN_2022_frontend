import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { getSubjects } from "../../../../data-access/service/subjectService";
import { updateSection4, useAppDispatch } from "../../../../data-access/store";
import {
  Section4Type,
  SelectType,
  SECTION4_DEFAULT,
  mapSubjectsToSelectType,
} from "../../../../data-access/types";
import Comp1 from "../../../../components/Comp1/Comp1";
import { TabSectionFooter } from "../TabSectionFooter";
import { TabSectionContainer } from "../AddSyllabus.style";

interface Props {
  handleBack: () => void;
  handleForward: () => void;
  section4Data: Section4Type;
}
export const TabSection4 = ({
  handleBack,
  handleForward,
  section4Data,
}: Props) => {
  const dispatch = useAppDispatch();

  const [subjects, setSubjects] = useState<SelectType[]>([]);

  const [state, setState] = useState<Section4Type>(
    section4Data || SECTION4_DEFAULT
  );
  const { selectedSubjects, competences } = state;

  useEffect(() => {
    const fetchData = async () => {
      let response = await getSubjects();
      response?.data && setSubjects(mapSubjectsToSelectType(response.data));
    };
    fetchData();
  }, []);

  const handleValuesChange = (newValue: string[]) => {
    setState({ ...state, competences: newValue });
  };
  const handleSubmit = () => {
    dispatch(updateSection4(state));
    handleForward();
  };
  return (
    <>
      <p>4. Pre-requirements *optional</p>
      <TabSectionContainer onSubmit={handleSubmit}>
        <Autocomplete
          multiple
          options={subjects}
          disableCloseOnSelect
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextField
              {...params}
              required={false}
              variant="standard"
              label="Curriculum"
            />
          )}
          onChange={(e, item) =>
            setState({ ...state, selectedSubjects: [...item] })
          }
          value={selectedSubjects}
        />
        <Comp1
          label={"Competence"}
          values={competences}
          handleValuesChange={handleValuesChange}
        />
        <TabSectionFooter handleBack={handleBack} />
      </TabSectionContainer>
    </>
  );
};
