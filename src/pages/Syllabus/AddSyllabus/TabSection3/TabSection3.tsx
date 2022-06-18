import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { updateSection3, useAppDispatch } from "../../../../data-access/store";
import { Section3Type, SECTION3_DEFAULT } from "../../../../data-access/types";
import { RowContainer, TabSectionContainer } from "../AddSyllabus.style";
import { TabSectionFooter } from "../TabSectionFooter";

interface Props {
  handleForward: () => void;
  handleBack: () => void;
  section3Data: Section3Type;
}
const WEEKS_PER_SEMESTER: number = 14;
export const TabSection3 = ({
  handleBack,
  handleForward,
  section3Data,
}: Props) => {
  const dispatch = useAppDispatch();

  const [state, setState] = useState<Section3Type>(
    section3Data || SECTION3_DEFAULT
  );
  const {
    courseHoursPerWeek,
    seminarHoursPerWeek,
    laboratoryHoursPerWeek,
    projectHoursPerWeek,
    courseHoursPerSemester,
    seminarHoursPerSemester,
    laboratoryHoursPerSemester,
    projectHoursPerSemester,
    individualStudyA,
    individualStudyB,
    individualStudyC,
    individualStudyD,
    individualStudyE,
    individualStudyF,
    credits,
  } = state;
  const [totalWeek, setTotalWeek] = useState<number>(
    courseHoursPerWeek +
      seminarHoursPerWeek +
      laboratoryHoursPerWeek +
      projectHoursPerWeek
  );
  const [totalSemester, setTotalSemester] = useState<number>(
    courseHoursPerSemester +
      seminarHoursPerSemester +
      laboratoryHoursPerSemester +
      projectHoursPerSemester
  );
  const [totalIndividual, setTotalIndividual] = useState<number>(
    individualStudyA +
      individualStudyB +
      individualStudyC +
      individualStudyD +
      individualStudyE +
      individualStudyF
  );
  const [totalAll, setTotalAll] = useState<number>(
    totalSemester + totalIndividual
  );

  useEffect(() => {
    setTotalWeek(
      courseHoursPerWeek +
        seminarHoursPerWeek +
        laboratoryHoursPerWeek +
        projectHoursPerWeek
    );
  }, [
    courseHoursPerWeek,
    seminarHoursPerWeek,
    laboratoryHoursPerWeek,
    projectHoursPerWeek,
  ]);
  useEffect(() => {
    handleInputChange(
      "courseHoursPerSemester",
      String(courseHoursPerWeek * 14)
    );
  }, [courseHoursPerWeek]);
  useEffect(() => {
    handleInputChange(
      "seminarHoursPerSemester",
      String(seminarHoursPerWeek * 14)
    );
  }, [seminarHoursPerWeek]);
  useEffect(() => {
    handleInputChange(
      "laboratoryHoursPerSemester",
      String(laboratoryHoursPerWeek * 14)
    );
  }, [laboratoryHoursPerWeek]);
  useEffect(() => {
    handleInputChange(
      "projectHoursPerSemester",
      String(projectHoursPerWeek * 14)
    );
  }, [projectHoursPerWeek]);

  useEffect(() => {
    setTotalSemester(
      courseHoursPerSemester +
        seminarHoursPerSemester +
        laboratoryHoursPerSemester +
        projectHoursPerSemester
    );
  }, [
    courseHoursPerSemester,
    seminarHoursPerSemester,
    laboratoryHoursPerSemester,
    projectHoursPerSemester,
  ]);

  useEffect(() => {
    setTotalIndividual(
      individualStudyA +
        individualStudyB +
        individualStudyC +
        individualStudyD +
        individualStudyE +
        individualStudyF
    );
  }, [
    individualStudyA,
    individualStudyB,
    individualStudyC,
    individualStudyD,
    individualStudyE,
    individualStudyF,
  ]);

  useEffect(() => {
    setTotalAll(totalSemester + totalIndividual);
  }, [totalSemester, totalIndividual]);

  const handleInputChange = (field: string, value: string) => {
    setState({ ...state, [field]: Number(value) });
  };

  const handleSubmit = async () => {
    dispatch(updateSection3(state));
    handleForward();
  };

  return (
    <>
      <p>3 Estimated total time</p>
      <TabSectionContainer onSubmit={handleSubmit}>
        <p>Number of hours per week: {totalWeek}</p>
        <RowContainer>
          <TextField
            required
            label="Course"
            variant="standard"
            value={courseHoursPerWeek}
            type="number"
            onChange={(e) =>
              handleInputChange("courseHoursPerWeek", e.target.value)
            }
            InputProps={{ inputProps: { min: 0 } }}
          />
          <TextField
            required
            label="Seminar"
            variant="standard"
            value={seminarHoursPerWeek}
            type="number"
            onChange={(e) =>
              handleInputChange("seminarHoursPerWeek", e.target.value)
            }
            InputProps={{ inputProps: { min: 0 } }}
          />
          <TextField
            required
            label="Laboratory"
            variant="standard"
            value={laboratoryHoursPerWeek}
            type="number"
            onChange={(e) =>
              handleInputChange("laboratoryHoursPerWeek", e.target.value)
            }
            InputProps={{ inputProps: { min: 0 } }}
          />
          <TextField
            required
            label="Project"
            variant="standard"
            value={projectHoursPerWeek}
            type="number"
            onChange={(e) =>
              handleInputChange("projectHoursPerWeek", e.target.value)
            }
            InputProps={{ inputProps: { min: 0 } }}
          />
        </RowContainer>
        <p>Number of hours per semester: {totalSemester}</p>
        <RowContainer>
          <TextField
            required
            label="Course"
            variant="standard"
            value={courseHoursPerSemester}
            type="number"
            onChange={(e) =>
              handleInputChange("courseHoursPerSemester", e.target.value)
            }
            InputProps={{ inputProps: { min: 0 } }}
          />
          <TextField
            required
            label="Seminar"
            variant="standard"
            value={seminarHoursPerSemester}
            type="number"
            onChange={(e) =>
              handleInputChange("seminarHoursPerSemester", e.target.value)
            }
            InputProps={{ inputProps: { min: 0 } }}
          />
          <TextField
            required
            label="Laboratory"
            variant="standard"
            value={laboratoryHoursPerSemester}
            type="number"
            onChange={(e) =>
              handleInputChange("laboratoryHoursPerSemester", e.target.value)
            }
            InputProps={{ inputProps: { min: 0 } }}
          />
          <TextField
            required
            label="Project"
            variant="standard"
            value={projectHoursPerSemester}
            type="number"
            onChange={(e) =>
              handleInputChange("projectHoursPerSemester", e.target.value)
            }
            InputProps={{ inputProps: { min: 0 } }}
          />
        </RowContainer>
        <p>Individual study: {totalIndividual}</p>
        <RowContainer>
          <TextField
            required
            label="Manual, lecture material snd notes, bibliography"
            variant="standard"
            value={individualStudyA}
            type="number"
            onChange={(e) =>
              handleInputChange("individualStudyA", e.target.value)
            }
            InputProps={{ inputProps: { min: 0 } }}
          />
          <TextField
            required
            label="Supplementary study in the library, online and in the fields"
            variant="standard"
            value={individualStudyB}
            type="number"
            onChange={(e) =>
              handleInputChange("individualStudyB", e.target.value)
            }
            InputProps={{ inputProps: { min: 0 } }}
          />
          <TextField
            required
            label="Preparation for seminars/laboratory works, homework, reports, portfolios, essays"
            variant="standard"
            value={individualStudyC}
            type="number"
            onChange={(e) =>
              handleInputChange("individualStudyC", e.target.value)
            }
            InputProps={{ inputProps: { min: 0 } }}
          />
        </RowContainer>
        <RowContainer>
          <TextField
            required
            label="Tutoring"
            variant="standard"
            value={individualStudyD}
            type="number"
            onChange={(e) =>
              handleInputChange("individualStudyD", e.target.value)
            }
            InputProps={{ inputProps: { min: 0 } }}
          />
          <TextField
            required
            label="Exams and tests"
            variant="standard"
            value={individualStudyE}
            type="number"
            onChange={(e) =>
              handleInputChange("individualStudyE", e.target.value)
            }
            InputProps={{ inputProps: { min: 0 } }}
          />
          <TextField
            required
            label="Other activities"
            variant="standard"
            value={individualStudyF}
            type="number"
            onChange={(e) =>
              handleInputChange("individualStudyF", e.target.value)
            }
            InputProps={{ inputProps: { min: 0 } }}
          />
        </RowContainer>
        <p>Total hours per semester: {totalAll}</p>
        <TextField
          required
          label="Credits"
          variant="standard"
          value={credits}
          type="number"
          onChange={(e) => handleInputChange("credits", e.target.value)}
          InputProps={{ inputProps: { min: 0, max: 30 } }}
        />
        <TabSectionFooter
          handleBack={handleBack}
          handleForward={handleForward}
        />
      </TabSectionContainer>
    </>
  );
};
