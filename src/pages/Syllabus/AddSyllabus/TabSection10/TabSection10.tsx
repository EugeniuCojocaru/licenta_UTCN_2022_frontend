import { TextField } from "@mui/material";
import React, { useState } from "react";
import { messages, Roboto } from "../../../../common";
import { useNotification } from "../../../../common/hooks/useNotification";
import ContentInput from "../../../../components/ContentInput/ContentInput";
import { updateSection10, useAppDispatch } from "../../../../data-access/store";
import {
  Section10Type,
  SECTION10_DEFAULT,
  Severity,
} from "../../../../data-access/types";
import {
  InputsContainer,
  RowContainer,
  TabSectionContainer,
} from "../AddSyllabus.style";
import { TabSectionFooter } from "../TabSectionFooter";

interface Props {
  handleBack: () => void;
  handleForward: () => void;
  section10Data: Section10Type;
}
export const TabSection10 = ({
  handleBack,
  handleForward,
  section10Data,
}: Props) => {
  const dispatch = useAppDispatch();
  const { showNotification } = useNotification();
  const [state, setState] = useState<Section10Type>(
    section10Data || SECTION10_DEFAULT
  );
  const {
    courseCriteria,
    courseMethods,
    courcePercentage,
    seminarCriteria,
    seminarMethods,
    seminarPercentage,
    laboratoryCriteria,
    laboratoryMethods,
    laboratoryPercentage,
    projectCriteria,
    projectMethods,
    projectPercentage,
    minimumPerformance,
    conditionsFinalExam,
    conditionPromotion,
  } = state;

  const handleConditionsFinalExamChange = (value: string[]) => {
    setState({ ...state, conditionsFinalExam: [...value] });
  };
  const validate = (): boolean => {
    if (
      Number(courcePercentage) +
        Number(seminarPercentage) +
        Number(laboratoryPercentage) +
        Number(projectPercentage) !==
      100
    )
      return false;

    return true;
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      dispatch(updateSection10(state));
      showNotification(Severity.Info, messages.ok);
      handleForward();
    } else {
      showNotification(Severity.Error, messages.sum);
    }
  };
  return (
    <>
      <Roboto>10. Evaluation</Roboto>
      <TabSectionContainer onSubmit={handleSubmit}>
        <InputsContainer>
          <RowContainer>
            <TextField
              label={"Course assessment criteria"}
              multiline
              value={courseCriteria}
              onChange={(e) =>
                setState({ ...state, courseCriteria: e.target.value })
              }
            />
            <TextField
              label={"Course assessment methods"}
              multiline
              value={courseMethods}
              onChange={(e) =>
                setState({ ...state, courseMethods: e.target.value })
              }
            />
            <TextField
              label="Course weight in the final grade ( % )"
              value={courcePercentage}
              type="number"
              onChange={(e) =>
                setState({ ...state, courcePercentage: Number(e.target.value) })
              }
              InputProps={{ inputProps: { min: 0, max: 100 } }}
            />
          </RowContainer>
          <RowContainer>
            <TextField
              required={false}
              label={"Seminar assessment criteria"}
              multiline
              value={seminarCriteria}
              onChange={(e) =>
                setState({ ...state, seminarCriteria: e.target.value })
              }
            />
            <TextField
              required={false}
              label={"Seminar assessment methods"}
              multiline
              value={seminarMethods}
              onChange={(e) =>
                setState({ ...state, seminarMethods: e.target.value })
              }
            />
            <TextField
              required={false}
              label="Seminar weight in the final grade ( % )"
              value={seminarPercentage}
              type="number"
              onChange={(e) =>
                setState({
                  ...state,
                  seminarPercentage: Number(e.target.value),
                })
              }
              InputProps={{ inputProps: { min: 0, max: 100 } }}
            />
          </RowContainer>

          <RowContainer>
            <TextField
              required={false}
              label={"Laboratory assessment criteria"}
              multiline
              value={laboratoryCriteria}
              onChange={(e) =>
                setState({ ...state, laboratoryCriteria: e.target.value })
              }
            />
            <TextField
              required={false}
              label={"Laboratory assessment methods"}
              multiline
              value={laboratoryMethods}
              onChange={(e) =>
                setState({ ...state, laboratoryMethods: e.target.value })
              }
            />
            <TextField
              required={false}
              label="Laboratory weight in the final grade ( % )"
              value={laboratoryPercentage}
              type="number"
              onChange={(e) =>
                setState({
                  ...state,
                  laboratoryPercentage: Number(e.target.value),
                })
              }
              InputProps={{ inputProps: { min: 0, max: 100 } }}
            />
          </RowContainer>

          <RowContainer>
            <TextField
              required={false}
              label={"Project assessment criteria"}
              multiline
              value={projectCriteria}
              onChange={(e) =>
                setState({ ...state, projectCriteria: e.target.value })
              }
            />
            <TextField
              required={false}
              label={"Project assessment methods"}
              multiline
              value={projectMethods}
              onChange={(e) =>
                setState({ ...state, projectMethods: e.target.value })
              }
            />
            <TextField
              required={false}
              label="Project weight in the final grade ( % )"
              value={projectPercentage}
              type="number"
              onChange={(e) =>
                setState({
                  ...state,
                  projectPercentage: Number(e.target.value),
                })
              }
              InputProps={{ inputProps: { min: 0, max: 100 } }}
            />
          </RowContainer>
          <TextField
            required={false}
            label={"Minimum standard of performance"}
            multiline
            value={minimumPerformance}
            onChange={(e) =>
              setState({ ...state, minimumPerformance: e.target.value })
            }
          />
          <ContentInput
            label="Conditions for participating in the final exam"
            values={conditionsFinalExam}
            handleValuesChange={handleConditionsFinalExamChange}
          />
          <TextField
            label={"Conditions for promotion"}
            multiline
            value={conditionPromotion}
            onChange={(e) =>
              setState({ ...state, conditionPromotion: e.target.value })
            }
          />
        </InputsContainer>
        <TabSectionFooter handleBack={handleBack} />
      </TabSectionContainer>
    </>
  );
};
