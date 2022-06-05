import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

interface Props {
  steps: Array<string>;
  activeStep: number;
}
export const CustomStepper = ({ steps, activeStep }: Props) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
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
  );
};
