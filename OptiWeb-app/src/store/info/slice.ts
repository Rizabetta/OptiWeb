import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  hasShownToast: false,
};

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setShowInfoToast: (state, action: PayloadAction<boolean>) => {
      state.hasShownToast = action.payload;
    },
  },
});

export const { setShowInfoToast } = infoSlice.actions;
export default infoSlice.reducer;
