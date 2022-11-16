import { useState, useEffect } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";

const InstallingStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeStep < 2) {
        setActiveStep((currentStep) => currentStep + 1);
      } else if (activeStep !== -1) {
        setActiveStep((currentStep) => currentStep - 1);
      } else {
        return;
      }
    }, [2000]);

    return () => clearInterval(timer);
  }, [activeStep]);

  return (
    <Stepper sx={{ marginTop: "30px " }} activeStep={activeStep}>
      <Step>
        <StepLabel>Confirm Payments</StepLabel>
      </Step>
      <Step>
        <StepLabel>Sending From Factory</StepLabel>
      </Step>

      <Step>
        <StepLabel>Installing In Farm</StepLabel>
      </Step>
    </Stepper>
  );
};

export default InstallingStepper;
