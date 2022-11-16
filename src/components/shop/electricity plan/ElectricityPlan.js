import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ElectricityData from "./ElectricityData";
import { useSelector } from "react-redux";
const DUMMY_DATA = [
  {
    id: "d1",
    title: "Monthly Plan",
    detail:
      "The electricity cost will be deducted every month from your balance. 1 Month deposit paid in advance.",
    power: "0.099",
    image: "/images/icons/monthlyplan.svg",
  },
  {
    id: "d2",
    title: "Half Year Plan",
    detail:
      "electricity cost will be deducted every 6 months from your balance. No deposit required.",
    power: "$0.095/kW",
    image: "/images/icons/halfyear.svg",
  },
  {
    id: "d3",
    title: "Yearly Plan",
    detail:
      "he electricity cost will be deducted every 6 months from your balance. No deposit required.",
    power: "$0.09/kW",
    image: "/images/icons/yearplan.svg",
  },
];

const ElectricityPlan = ({ activeStepHandler }) => {
  const [electricityPlan, setElectricityPlan] = useState([]);
  const cart = useSelector((state) => state.cartReducer.cartItems);
  console.log(cart, "cart");
  useEffect(() => {
    setElectricityPlan(DUMMY_DATA);
  }, []);

  return (
    <Box component="ul">
      {electricityPlan.map((data) => {
        return (
          <ElectricityData
            key={data.id}
            data={data}
            activeStepHandler={activeStepHandler}
          />
        );
      })}
    </Box>
  );
};

export default ElectricityPlan;
