import React, { useState } from "react";
import { CustomStepper } from "./Stepper";
import { TabController, TabControllerContainer } from "./AddSyllabus.style";

import { Layout } from "../../../components/Layout";
import TabSection1Container from "./TabSection1Container";
import TabSection2Container from "./TabSection2Container";
import TabSectionFinishContainer from "./TabSectionFinishContainer";
import { TabSection3 } from "./TabSection3";
import TabSection3Container from "./TabSection3/TabSection3Container";
const steps = [
  "s1",
  "s2",
  "s3",
  "s4",
  "s5",
  "s6",
  "s6",
  "s8",
  "s9",
  "s10",
  "s11",
];

export const AddSyllabusPage = () => {
  const [activeStep, setActiveStep] = useState<number>(2);

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
            <TabSection2Container
              handleBack={handleBack}
              handleForward={handleNext}
            />
          )}
          {activeStep === 2 && (
            <TabSection3Container
              handleBack={handleBack}
              handleForward={handleNext}
            />
          )}
          {activeStep === 11 && (
            <TabSectionFinishContainer
              handleBack={handleBack}
              handleForward={handleNext}
            />
          )}
        </TabController>
      </TabControllerContainer>
    </Layout>
  );
};
