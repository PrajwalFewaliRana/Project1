import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moreState: false,
};

const MoreSlice = createSlice({
  initialState,
  name: "more",
  reducers: {
    setOpenMore: (state, action) => {
      state.moreState = action.payload.moreState;
    },
    setCloseMore: (state, action) => {
      state.moreState = action.payload.moreState;
    },
  },
});

export const { setCloseMore, setOpenMore } = MoreSlice.actions;
export const selectMoreState = (state) => state.more.moreState;
export default MoreSlice.reducer;
