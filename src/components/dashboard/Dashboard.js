import React, { useState } from "react";
import { Stack, Box, Tab, Typography } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";

import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
import MuiLayout from "../layout/MuiLayout";
import Categories from "./Categories";
import News from "./News";
import Bills from "./Bills";

const typographyStyle = {
  fontWeight: 700,
  fontSize: "35px",
  lineHeight: "133.4%",
  color: "#0A194E",
};

const data = [
  { quarter: 1, earnings: 0.3 },
  { quarter: 2, earnings: 0.5 },
  { quarter: 3, earnings: 0.3 },
  { quarter: 4, earnings: 0.35 },
  { quarter: 5, earnings: 0.7 },
  { quarter: 6, earnings: 0.8 },
  { quarter: 7, earnings: 0.33 },
  { quarter: 8, earnings: 1.0 },
  { quarter: 9, earnings: 0 },
  { quarter: 10, earnings: 0 },
  { quarter: 11, earnings: 0 },
  { quarter: 12, earnings: 0 },
];

const Dashboard = () => {
  const [tabValue, setTabValue] = useState("1");

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <MuiLayout>
      <Typography component="h1" sx={typographyStyle}>
        Dashboard
      </Typography>
      <Categories />

      <Stack
        sx={{ flexDirection: { xl: "row" }, flexWrap: "wrap", gap: "50px" }}
      >
        <Box
          sx={{
            width: { xs: "100%" },
            height: "645px",
            border: "2px solid #CEDDF2",
            background: "#Fff",
            margin: "auto",
          }}
        >
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: "2px solid #CEDDF2" }}>
              <TabList aria-label="dashboard" onChange={handleChange}>
                <Tab label="BTC Earned" value="1" />
                <Tab label="Expenses" value="2" />
              </TabList>
            </Box>

            <TabPanel value="1" sx={{ height: 1, width: 1 }}>
              <VictoryChart domain={{ x: [0, 12] }}>
                <VictoryAxis
                  tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                  tickFormat={[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ]}
                />
                <VictoryAxis dependentAxis tickFormat={(x) => `${x} BTC`} />
                <VictoryBar
                  data={data}
                  x="quarter"
                  y="earnings"
                  style={{
                    data: { fill: "#2776EA", width: 20, gap: "30px" },
                  }}
                />
              </VictoryChart>
            </TabPanel>
            <TabPanel value="2"> NOTHING TO SHOW</TabPanel>
          </TabContext>
        </Box>
        {/* <News /> */}
      </Stack>
      <Bills />
    </MuiLayout>
  );
};

export default Dashboard;
