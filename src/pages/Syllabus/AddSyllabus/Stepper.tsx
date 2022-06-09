import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { StepperContainer } from "./AddSyllabus.style";

interface Props {
  steps: Array<string>;
  activeStep: number;
}
export const CustomStepper = ({ steps, activeStep }: Props) => {
  return (
    <StepperContainer>
      <Box sx={{ width: "100%" }}>
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((label) => {
            const stepProps: { completed?: boolean } = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel />
              </Step>
            );
          })}
        </Stepper>
      </Box>
    </StepperContainer>
  );
};
