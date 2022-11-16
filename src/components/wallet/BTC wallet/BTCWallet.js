import { useState, Fragment } from "react";
import { Typography, Button, Box, Stack } from "@mui/material";
import BTCProfit from "./BTCProfit";
import HistoryProfit from "./HistoryProfit";
import Model from "../../UI/Model";

const boxStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  border: "2px solid #CEDDF2",
  width: "100%",
  height: {
    sm: "95px",
    xl: "149px",
  },
  background: "#fff",
};
const h3Style = {
  fontSize: {
    sm: "14px",
    xl: "22px",
  },
  color: "#A2BCDC",
  fontWeight: 700,
  lineHeight: "33px",
  marginBottom: {
    sm: "0",
    lg: "10px",
  },
};

const btnStyle = {
  background: "#fff",
  border: "2px solid #2776EA",
  minWidth: {
    xs: "150px",
    xl: "200px",
  },
  width: "100%",
  height: {
    sm: "50px",
    xl: "71px",
  },
  color: "#2776EA",
  fontSize: {
    sm: "12px",
    xl: "24px",
  },
  fontWeight: 600,
  "&:hover": {
    background: "unset",
  },
};

const DUMMY_DATA = [
  {
    id: "d1",
    title: "Available BTC",
    value: "₿17.000",
  },
  {
    id: "d2",
    title: "Total Mined BTC",
    value: "₿2.7",
  },
];

const BTCWallet = () => {
  const [toggleModel, setToggleModel] = useState(false);

  const toggleModelHandler = () => {
    setToggleModel(true);
  };
  const hideModelHandler = () => {
    setToggleModel(false);
  };
  return (
    <Fragment>
      {toggleModel && <Model hideModelHandler={hideModelHandler} />}
      <Stack
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            gap: {
              xs: "10px",
              xl: "35px",
            },
            justifyContent: {
              sm: "flex-start",
            },
            margin: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              width: "100%",
              gap: { xs: "10px", xl: "50px" },
            }}
          >
            {DUMMY_DATA.map((data) => {
              return (
                <Box sx={boxStyle} key={data.id}>
                  <Typography component="h3" sx={h3Style}>
                    {data.title}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: {
                        sm: "24px",
                        xl: "35px",
                      },
                      color: "#0A194E",
                      fontWeight: 700,
                    }}
                  >
                    {data.value}
                  </Typography>
                </Box>
              );
            })}
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: { xs: "10px", lg: "20px" },
              width: "100%",
            }}
          >
            <Button sx={btnStyle} variant="contained">
              WITHDRAW
            </Button>
            <Button
              sx={btnStyle}
              variant="contained"
              onClick={toggleModelHandler}
            >
              CONVERT BTC TO BALANCE
            </Button>
          </Box>
        </Box>
        <BTCProfit />
        <HistoryProfit />
      </Stack>
    </Fragment>
  );
};

export default BTCWallet;
