import { createSlice } from "@reduxjs/toolkit";

export const LoderSlice = createSlice({
  name: "loder",
  initialState: {
    loder: true,
  },
  reducers: {
    loder: (state, action) => {
      state.loder = action.payload;
    },
  },
});
export const loder = LoderSlice.actions.loder;
export const selectLoder = (state) => state.loder.loder;
export const loderReducer = LoderSlice.reducer;
