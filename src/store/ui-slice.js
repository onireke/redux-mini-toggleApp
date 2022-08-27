import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isCartAvailable: false },
  reducers: {
    toggle(state) {
      state.isCartAvailable = !state.isCartAvailable;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
