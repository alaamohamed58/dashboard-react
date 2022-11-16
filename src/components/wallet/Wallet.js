import { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";

import MuiLayout from "../layout/MuiLayout";
import BTCWallet from "./BTC wallet/BTCWallet";
import FIATWallet from "./FIAT wallet/FIATWallet";
import { PageTitle } from "../../customThemes";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const Wallet = () => {
  const tabValue = useSelector((state) => state.uiReducer.tabValue);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    dispatch(uiActions.changeTab(newValue));
  };

  return (
    <MuiLayout>
      <PageTitle component="h1">Wallet</PageTitle>

      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: "2px solid #CEDDF2" }}>
          <TabList aria-label="wallet" onChange={handleChange}>
            <Tab label="BTC Wallet" value="1" />
            <Tab label="FIAT Wallet" value="2" />
          </TabList>
        </Box>

        <TabPanel
          value="1"
          sx={{ height: 1, width: 1, padding: 0, marginTop: "51px" }}
        >
          <BTCWallet />
        </TabPanel>
        <TabPanel
          value="2"
          sx={{ height: 1, width: 1, padding: 0, marginTop: "51px" }}
        >
          <FIATWallet />
        </TabPanel>
      </TabContext>
    </MuiLayout>
  );
};

export default Wallet;
