import React, { useState } from "react";
import { CustomStepper } from "./Stepper";
import { TabController, TabControllerContainer } from "./AddSyllabus.style";

import { Layout } from "../../../components/Layout";
import TabSection1Container from "./TabSection1Container";
import TabSection2Container from "./TabSection2Container";
import TabSectionFinishContainer from "./TabSectionFinishContainer";
import TabSection3Container from "./TabSection3/TabSection3Container";
import TabSection4Container from "./TabSection4/TabSection4Container";
import TabSection5Container from "./TabSection5/TabSection5Container";
import TabSection6Container from "./TabSection6/TabSection6Container";
import TabSection7Container from "./TabSection7/TabSection7Container";
import TabSection8Container from "./TabSection8/TabSection8Container";
import TabSection9Container from "./TabSection9/TabSection9Container";
import TabSection10Container from "./TabSection10/TabSection10Container";
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
  const [activeStep, setActiveStep] = useState<number>(0);

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
          {activeStep === 3 && (
            <TabSection4Container
              handleBack={handleBack}
              handleForward={handleNext}
            />
          )}
          {activeStep === 4 && (
            <TabSection5Container
              handleBack={handleBack}
              handleForward={handleNext}
            />
          )}
          {activeStep === 5 && (
            <TabSection6Container
              handleBack={handleBack}
              handleForward={handleNext}
            />
          )}
          {activeStep === 6 && (
            <TabSection7Container
              handleBack={handleBack}
              handleForward={handleNext}
            />
          )}
          {activeStep === 7 && (
            <TabSection8Container
              handleBack={handleBack}
              handleForward={handleNext}
            />
          )}
          {activeStep === 8 && (
            <TabSection9Container
              handleBack={handleBack}
              handleForward={handleNext}
            />
          )}
          {activeStep === 9 && (
            <TabSection10Container
              handleBack={handleBack}
              handleForward={handleNext}
            />
          )}
          {activeStep === 10 && (
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
