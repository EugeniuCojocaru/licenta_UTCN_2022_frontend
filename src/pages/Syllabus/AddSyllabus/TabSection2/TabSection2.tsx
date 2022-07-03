import React, { useEffect, useState } from "react";
import { getSubjects } from "../../../../data-access/service/subjectService";
import {
  mapSubjectsToSelectType,
  Semesters,
  SubjectCategory1,
  SubjectCategory2,
  TypesOfAssessment,
  YearsOfStudy,
} from "../../../../data-access/types/subjectTypes";
import {
  InputsContainer,
  RowContainer,
  TabSectionContainer,
} from "../AddSyllabus.style";
import { TabSectionFooter } from "../TabSectionFooter";
import {
  SelectType,
  Severity,
} from "../../../../data-access/types/componentsType";
import { Autocomplete, MenuItem, TextField } from "@mui/material";
import {
  mapUsersToSelectType,
  Section2Type,
  SECTION2_DEFAULT,
} from "../../../../data-access/types";
import { getUsers } from "../../../../data-access/service";
import { messages, sxClasses } from "../../../../common";
import { updateSection2, useAppDispatch } from "../../../../data-access/store";
import { useNotification } from "../../../../common/hooks/useNotification";

interface Props {
  handleBack: () => void;
  handleForward: () => void;
  section2Data: Section2Type;
}

export const TabSection2 = ({
  handleBack,
  handleForward,
  section2Data,
}: Props) => {
  const dispatch = useAppDispatch();
  const { showNotification } = useNotification();
  const [subjects, setSubjects] = useState<SelectType[]>([]);
  const [teachers, setTeachers] = useState<SelectType[]>([]);

  const [state, setState] = useState<Section2Type>(
    section2Data || SECTION2_DEFAULT
  );
  const {
    id,
    year,
    semester,
    assessment,
    category1,
    category2,
    subject,
    lecturer,
    selectedTeachers,
  } = state;
  useEffect(() => {
    const fetchData = async () => {
      let response = await getSubjects();
      response?.data && setSubjects(mapSubjectsToSelectType(response.data));
      response = await getUsers(true, true);
      response?.data && setTeachers(mapUsersToSelectType(response.data));
    };
    fetchData();
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setState({ ...state, [field]: value });
  };

  const validate = (): boolean => {
    if (selectedTeachers.length === 0) return false;
    return true;
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      const newState = {
        id,
        subject,
        lecturer,
        selectedTeachers,
        year,
        semester,
        assessment,
        category1,
        category2,
      };

      dispatch(updateSection2(newState));
      showNotification(Severity.Info, messages.ok);
      handleForward();
    } else {
      showNotification(Severity.Error, messages.allFields);
    }
  };
  return (
    <>
      <p>2. Data about the subject</p>
      <TabSectionContainer onSubmit={handleSubmit}>
        <InputsContainer>
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
            onChange={(e, item) => setState({ ...state, subject: item })}
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
            onChange={(e, item) => setState({ ...state, lecturer: item })}
          />

          <Autocomplete
            multiple
            options={teachers}
            disableCloseOnSelect
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField
                {...params}
                required={false}
                variant="standard"
                label="Teachers in charge of seminars/ laboratory/ project"
              />
            )}
            onChange={(e, item) =>
              setState({ ...state, selectedTeachers: [...item] })
            }
            value={selectedTeachers}
          />
          <RowContainer>
            <TextField
              select
              sx={sxClasses.select}
              label="Year of study"
              variant="standard"
              value={year}
              onChange={(e) => handleInputChange("year", e.target.value)}
            >
              {YearsOfStudy.map((option) => (
                <MenuItem key={"year_" + option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              sx={sxClasses.select}
              label="Semester"
              variant="standard"
              value={semester}
              onChange={(e) => handleInputChange("semester", e.target.value)}
            >
              {Semesters.map((option) => (
                <MenuItem key={"semester_" + option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              sx={sxClasses.select}
              label="Type of assessment"
              variant="standard"
              value={assessment}
              onChange={(e) => handleInputChange("assessment", e.target.value)}
            >
              {TypesOfAssessment.map((option) => (
                <MenuItem
                  key={"assessment_" + option.value}
                  value={option.value}
                >
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
              value={category1}
              onChange={(e) => handleInputChange("category1", e.target.value)}
            >
              {SubjectCategory1.map((option) => (
                <MenuItem key={"c1_" + option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              sx={sxClasses.select}
              label="Subject category"
              variant="standard"
              value={category2}
              onChange={(e) => handleInputChange("category2", e.target.value)}
            >
              {SubjectCategory2.map((option) => (
                <MenuItem key={"c2_" + option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </RowContainer>
        </InputsContainer>
        <TabSectionFooter handleBack={handleBack} />
      </TabSectionContainer>
    </>
  );
};
