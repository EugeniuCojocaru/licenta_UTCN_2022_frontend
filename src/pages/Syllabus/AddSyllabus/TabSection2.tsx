import React, { useEffect, useState } from "react";
import { getSubjects } from "../../../data-access/service/subjectService";
import {
  mapSubjectsToSelectType,
  Semesters,
  SubjectCategory1,
  SubjectCategory2,
  TypesOfAssessment,
  YearsOfStudy,
} from "../../../data-access/types/subjectTypes";
import { RowContainer, TabSectionContainer } from "./AddSyllabus.style";
import { TabSectionFooter } from "./TabSectionFooter";
import { SelectType } from "../../../data-access/types/componentsType";
import { Autocomplete, MenuItem, TextField } from "@mui/material";
import { mapUsersToSelectType } from "../../../data-access/types";
import { getUsers } from "../../../data-access/service";
import { sxClasses } from "../../../common";

interface Props {
  handleBack: () => void;
  handleForward: () => void;
}
const TabSection2 = ({ handleBack, handleForward }: Props) => {
  const [subjects, setSubjects] = useState<SelectType[]>([]);
  const [teachers, setTeachers] = useState<SelectType[]>([]);

  const [subject, setSubject] = useState<SelectType | null>();
  const [lecturer, setLecturer] = useState<SelectType | null>();
  const [selectedTeachers, setSelectedTeachers] = useState<SelectType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await getSubjects();
      response?.data && setSubjects(mapSubjectsToSelectType(response.data));
      response = await getUsers(true, true);
      response?.data && setTeachers(mapUsersToSelectType(response.data));
    };
    fetchData();
  }, []);

  const handleChangeAutocomplete = (value: SelectType[]) => {
    setSelectedTeachers([...value]);
  };
  return (
    <>
      <p>2. Data about the subject</p>
      <TabSectionContainer>
        <Autocomplete
          disablePortal
          options={subjects}
          renderInput={(params) => (
            <TextField {...params} variant="standard" label="Subject name" />
          )}
          isOptionEqualToValue={(option: SelectType, value: SelectType) =>
            option.value === value.value
          }
          value={subject}
          onChange={(e, item) => setSubject(item)}
        />
        <Autocomplete
          disablePortal
          options={teachers}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Course responsible"
            />
          )}
          value={lecturer}
          onChange={(e, item) => setLecturer(item)}
        />

        <Autocomplete
          multiple
          options={teachers}
          disableCloseOnSelect
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Teachers in charge of seminars/laboratory/project"
            />
          )}
          onChange={(e, item) => handleChangeAutocomplete(item)}
          value={selectedTeachers}
        />
        <RowContainer>
          <TextField
            select
            sx={sxClasses.select}
            label="Year of study"
            variant="standard"
          >
            {YearsOfStudy.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            sx={sxClasses.select}
            label="Semester"
            variant="standard"
          >
            {Semesters.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            sx={sxClasses.select}
            label="Type of assesment"
            variant="standard"
          >
            {TypesOfAssessment.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </RowContainer>
        <RowContainer>
          <TextField
            select
            sx={sxClasses.select}
            label="Subject category"
            variant="standard"
          >
            {SubjectCategory1.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            sx={sxClasses.select}
            label="Subject category"
            variant="standard"
          >
            {SubjectCategory2.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </RowContainer>
      </TabSectionContainer>
      <TabSectionFooter handleForward={handleForward} handleBack={handleBack} />
    </>
  );
};

export default TabSection2;
