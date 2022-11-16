import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { tabValue: "1" },
  reducers: {
    fiatWallet: (state) => {
      state.tabValue = "2";
    },

    btcWallet: (state) => {
      state.tabValue = "1";
    },
    changeTab: (state, action) => {
      state.tabValue = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
