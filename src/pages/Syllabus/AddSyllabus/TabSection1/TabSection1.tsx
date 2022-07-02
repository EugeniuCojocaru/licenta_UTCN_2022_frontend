import React, { useEffect, useState } from "react";

import { TextField, MenuItem } from "@mui/material";

import {
  SelectType,
  mapInstitutionsHierarchyToSelectType,
  Section1Type,
  SECTION1_DEFAULT,
  Severity,
} from "../../../../data-access/types";

import {
  getFacultiesForInstitution,
  getInstitutions,
  getDepartmentsForFaculties,
  getFieldsOfStudyForDepartment,
} from "../../../../data-access/service";

import { TabSectionFooter } from "../TabSectionFooter";
import { updateSection1, useAppDispatch } from "../../../../data-access/store";

import { sxClasses } from "../../../../common/style/styles";
import {
  InputsContainer,
  RowContainer,
  TabSectionContainer,
} from "../AddSyllabus.style";
import { useNotification } from "../../../../common/hooks/useNotification";
import { messages } from "../../../../common";

interface Props {
  handleForward: () => void;
  section1Data: Section1Type;
}
export const TabSection1 = ({ section1Data, handleForward }: Props) => {
  const dispatch = useAppDispatch();
  const { showNotification } = useNotification();

  const [institutions, setInstitutions] = useState<SelectType[]>([]);
  const [faculties, setFaculties] = useState<SelectType[]>([]);
  const [departments, setDepartments] = useState<SelectType[]>([]);
  const [fieldsOfStudy, setFieldsOfStudy] = useState<SelectType[]>([]);
  const [state, setState] = useState<Section1Type>(
    section1Data || SECTION1_DEFAULT
  );
  const {
    institutionId,
    facultyId,
    departmentId,
    fieldOfStudyId,
    cycleOfStudy,
    programOfStudy,
    qualification,
    formOfEducation,
  } = state;

  useEffect(() => {
    const fetchData = async () => {
      const response = await getInstitutions();
      response?.data &&
        setInstitutions(mapInstitutionsHierarchyToSelectType(response.data));
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getFacultiesForInstitution(institutionId);
      response?.data &&
        setFaculties(mapInstitutionsHierarchyToSelectType(response.data));
    };
    institutionId !== "" && fetchData();
  }, [institutionId]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getDepartmentsForFaculties(facultyId);
      response?.data &&
        setDepartments(mapInstitutionsHierarchyToSelectType(response.data));
    };
    facultyId !== "" && fetchData();
  }, [facultyId]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getFieldsOfStudyForDepartment(departmentId);
      response?.data &&
        setFieldsOfStudy(mapInstitutionsHierarchyToSelectType(response.data));
    };
    departmentId !== "" && fetchData();
  }, [departmentId]);

  const handleInputChange = (field: string, value: string) => {
    setState({ ...state, [field]: value });
  };

  const handleSubmit = async () => {
    dispatch(updateSection1(state));
    showNotification(Severity.Info, messages.ok);
    handleForward();
  };
  return (
    <>
      <p>1. Data about the program of study</p>
      <TabSectionContainer onSubmit={handleSubmit}>
        <InputsContainer>
          <TextField
            select
            sx={sxClasses.select}
            label="Institutions"
            value={institutionId}
            variant="standard"
            onChange={(e) => handleInputChange("institutionId", e.target.value)}
          >
            {institutions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            sx={sxClasses.select}
            label="Faculties"
            value={facultyId}
            variant="standard"
            disabled={!faculties.length}
            onChange={(e) => handleInputChange("facultyId", e.target.value)}
          >
            {faculties.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            sx={sxClasses.select}
            label="Departments"
            value={departmentId}
            variant="standard"
            disabled={!departments.length}
            onChange={(e) => handleInputChange("departmentId", e.target.value)}
          >
            {departments.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            sx={sxClasses.select}
            label="Fields of study"
            value={fieldOfStudyId}
            variant="standard"
            disabled={!fieldsOfStudy.length}
            onChange={(e) =>
              handleInputChange("fieldOfStudyId", e.target.value)
            }
          >
            {fieldsOfStudy.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <RowContainer>
            <TextField
              required
              label="Cycle of study"
              variant="standard"
              value={cycleOfStudy}
              onChange={(e) =>
                handleInputChange("cycleOfStudy", e.target.value)
              }
            />
            <TextField
              required
              label="Program of study"
              variant="standard"
              value={programOfStudy}
              onChange={(e) =>
                handleInputChange("programOfStudy", e.target.value)
              }
            />
          </RowContainer>
          <RowContainer>
            <TextField
              required
              label="Qualification"
              variant="standard"
              value={qualification}
              onChange={(e) =>
                handleInputChange("qualification", e.target.value)
              }
            />
            <TextField
              required
              label="Form of education"
              variant="standard"
              value={formOfEducation}
              onChange={(e) =>
                handleInputChange("formOfEducation", e.target.value)
              }
            />
          </RowContainer>
        </InputsContainer>
        <TabSectionFooter disableBack />
      </TabSectionContainer>
    </>
  );
};
