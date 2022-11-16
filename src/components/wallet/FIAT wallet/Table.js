import { useState } from "react";

import { Box, Typography, Tab } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import Deposits from "./deposit/Deposits";
import Withdrawal from "./withdrawal/Withdrawal";

import Conversions from "./conversions/Conversions";

const Table = () => {
  const [tabValue, setTabValue] = useState("1");

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <Box
      sx={{
        background: "#fff",
        margin: "51px auto",
        width: "100%",
        border: " 2px solid #CEDDF2",
        padding: { xs: "40px 10px", xl: "40px 49px" },
      }}
    >
      <Typography
        component="h2"
        sx={{
          fontSize: { xs: "22px", xl: "35px" },
          fontWeight: 700,
          color: "#0A194E",
          marginBottom: "65px",
        }}
      >
        History of Deposits / Withdrawals / Conversions{" "}
      </Typography>

      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: "2px solid #CEDDF2" }}>
          <TabList aria-label="wallet" onChange={handleChange}>
            <Tab label="Deposit" value="1" />
            <Tab label="Withdrawal" value="2" />
            <Tab label="Conversions" value="3" />
          </TabList>
        </Box>

        <TabPanel value="1" sx={{ height: 1, width: 1 }}>
          <Deposits />
        </TabPanel>
        <TabPanel value="2" sx={{ height: 1, width: 1 }}>
          <Withdrawal />
        </TabPanel>
        <TabPanel value="3" sx={{ height: 1, width: 1 }}>
          <Conversions />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Table;
