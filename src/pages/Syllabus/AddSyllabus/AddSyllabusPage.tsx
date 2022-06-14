import React, { useState } from "react";
import { CustomStepper } from "./Stepper";
import { TabController, TabControllerContainer } from "./AddSyllabus.style";

import TabSection2 from "./TabSection2";
import { Layout } from "../../../components/Layout";
import TabSection1Container from "./TabSection1Container";
import { TabSectionFooter } from "./TabSectionFooter";
const steps = ["s1", "s2", "s3", "s4", "s5", "s6", "s6", "s8", "s9", "s10"];

export const AddSyllabusPage = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <Layout>
      <CustomStepper steps={steps} activeStep={activeStep} />
      <TabControllerContainer>
        <TabController>
          {activeStep === 0 && (
            <TabSection1Container handleForward={handleNext} />
          )}
          {activeStep === 1 && (
            <TabSection2 handleBack={handleBack} handleForward={handleNext} />
          )}
        </TabController>
      </TabControllerContainer>
    </Layout>
  );
};
