import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ModelData from "./ModelData";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "power Model 001",
    model: "AntiMiner S19 pro",
    rate: "110 TH/s",
    power: "3250 w",
    algorithm: "SHA256",
    estimatedDate: "07/10/2022",
    warranty: "11 Months",
    conditions: "New",
    price: "2000",
    img: "/images/icons/model.svg",
  },
  {
    id: "m2",
    title: "power Model 003",
    model: "AntiMiner S19 pro",
    rate: "110 TH/s",
    power: "3250 w",
    algorithm: "SHA256",
    estimatedDate: "07/10/2022",
    warranty: "11 Months",
    conditions: "New",
    price: "2000",
    img: "/images/icons/model.svg",
  },
];

const Model = ({ activeStepHandler }) => {
  const [model, setModel] = useState([]);
  //fetch model
  useEffect(() => {
    setModel(DUMMY_DATA);
  }, []);

  return (
    <Box component="ul">
      {model.map((data) => {
        return (
          <ModelData
            activeStepHandler={activeStepHandler}
            key={data.id}
            id={data.id}
            title={data.title}
            model={data.model}
            rate={data["hash_rate"]}
            power={data.power}
            algorithm={data.algorithm}
            estimatedDate={data["estimatedDate"]}
            warrenty={data.warranty}
            conditions={data.conditions}
            price={data.price}
            image="/images/icons/model.svg"
          />
        );
      })}
    </Box>
  );
};

export default Model;
