import { Fragment } from "react";
import ChooseFarm from "../../pages/ChooseFarm";
import ChooseModel from "../../pages/ChooseModel";
import ChoosePlan from "../../pages/ChoosePlan";
import ConfirmationPage from "../../pages/ConfirmationPage";
import MuiLayout from "../layout/MuiLayout";

const ActiveStep = ({ activeStep }) => {
  return (
    <MuiLayout>
      {activeStep === 0 && <ChooseFarm />}

      {activeStep === 1 && <ChooseModel />}
      {activeStep === 2 && <ChoosePlan />}

      {activeStep === 3 && <ConfirmationPage />}
    </MuiLayout>
  );
};

export default ActiveStep;
