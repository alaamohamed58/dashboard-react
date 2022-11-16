import { useSelector } from "react-redux";
import { Stepper, Step, StepLabel } from "@mui/material";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Box } from "@mui/material";
const StepperShop = ({ activeStep, setAciveStep }) => {
  const farmTitle = useSelector((state) => state.cartReducer.farm),
    model = useSelector((state) => state.cartReducer.model),
    plan = useSelector((state) => state.cartReducer.plan);

  // localStorage.setItem("farmtitle", farmTitle.title);
  // let getFarmTitle;
  // if (localStorage.getItem("farmtitle")) {
  //   getFarmTitle = localStorage.getItem("farmtitle");
  // }

  return (
    <Stepper activeStep={activeStep} sx={{ marginBottom: "61px" }}>
      <Step
        sx={{ cursor: "pointer" }}
        onClick={() => {
          activeStep === 1 ? setAciveStep(0) : setAciveStep(activeStep);
        }}
      >
        <StepLabel>
          {activeStep >= 1 ? farmTitle.title : "Choose Farm"}
        </StepLabel>
      </Step>
      <Step
        sx={{ cursor: "pointer" }}
        onClick={() => {
          activeStep === 2 ? setAciveStep(1) : setAciveStep(activeStep);
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {activeStep === 1 && (
            <AiOutlineArrowLeft style={{ margin: "-1px 5px -1px 0" }} />
          )}
          <StepLabel>
            {activeStep >= 2 ? `${model.model} ($${model.price})` : ""}

            {activeStep === 1 && "Choose Model"}
            {activeStep < 1 && "Choose Model"}
          </StepLabel>
        </Box>
      </Step>
      <Step
        sx={{ cursor: "pointer" }}
        onClick={() => {
          activeStep === 3 ? setAciveStep(2) : setAciveStep(activeStep);
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {activeStep === 2 && (
            <AiOutlineArrowLeft style={{ margin: "-1px 0" }} />
          )}
          <StepLabel>
            {activeStep >= 3 ? `${plan.plan} ($${plan.power})` : ""}

            {activeStep === 2 && "Choose Electricity Plan"}
            {activeStep < 2 && "Choose Electricity Plan"}
          </StepLabel>
        </Box>
      </Step>
      <Step sx={{ cursor: "pointer" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {activeStep === 3 && (
            <AiOutlineArrowLeft style={{ margin: "-1px 0" }} />
          )}
          <StepLabel>
            {activeStep === 3 && "Confirm"}
            {activeStep < 2 && "Confirm"}
          </StepLabel>
        </Box>
      </Step>
    </Stepper>
  );
};

export default StepperShop;
