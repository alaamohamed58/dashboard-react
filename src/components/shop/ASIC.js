import { useCallback, useEffect, useState } from "react";
import MuiLayout from "../layout/MuiLayout";
import StepperShop from "./StepperShop";
import Farm from "./farm/Farm";
import { Box } from "@mui/material";
import Model from "./model/Model";
import ElectricityPlan from "./electricity plan/ElectricityPlan";
import Confirmation from "./Confirmation";
const DUMMY_DATA = [
  {
    id: "d1",
    title: "Farm 001 - ASIC",
    location: "Texas 1: US",
    "electricity-price": "$3/kWh",
    "maintainance-fee": "Percentage BTC",
    guarantee: "11 Months",
    security: "Physical 24/4",
    "setup-period": "3 Weeks",
    "guaranteed-uptime": "95%",
    "mines-to-external-wallet": "Yes",
    "setup-fee": 300,
    filled: 30,
    image: "/images/icons/group.svg",
  },
  {
    id: "d2",
    title: "Farm 002 - ASIC",
    location: "California 1: US",
    "electricity-price": "$5/kWh",
    "maintainance-fee": "Percentage BTC",
    guarantee: "14 Months",
    security: "Physical 24/4",
    "setup-period": "2 Weeks",
    "guaranteed-uptime": "95%",
    "mines-to-external-wallet": "Yes",
    "setup-fee": 300,
    filled: 60,
    image: "/images/icons/group.svg",
  },
];

const ASIC = () => {
  let storageStep;

  if (sessionStorage.getItem("activeStep")) {
    storageStep = parseInt(sessionStorage.getItem("activeStep"));
  } else {
    storageStep = 0;
  }
  const [activeStep, setAciveStep] = useState(storageStep);
  const [farms, setFarms] = useState([]);

  useEffect(() => {
    sessionStorage.setItem("activeStep", activeStep);
  }, [activeStep, storageStep]);

  //fetch farm
  useEffect(() => {
    setFarms(DUMMY_DATA);
  }, []);

  const activeStepHandler = useCallback(() => {
    if (activeStep < 3) {
      setAciveStep((currentStep) => currentStep + 1);
      sessionStorage.setItem("activeStep", activeStep);
    }
  }, [activeStep]);

  return (
    <MuiLayout>
      <StepperShop activeStep={activeStep} setAciveStep={setAciveStep} />

      {activeStep === 0 && (
        <Box>
          {farms.map((data) => {
            return (
              <Farm
                activeStepHandler={activeStepHandler}
                key={data.id}
                data={data}
              />
            );
          })}
        </Box>
      )}

      {activeStep === 1 && <Model activeStepHandler={activeStepHandler} />}
      {activeStep === 2 && (
        <ElectricityPlan activeStepHandler={activeStepHandler} />
      )}

      {activeStep === 3 && (
        <Confirmation activeStepHandler={activeStepHandler} />
      )}
    </MuiLayout>
  );
};

export default ASIC;
