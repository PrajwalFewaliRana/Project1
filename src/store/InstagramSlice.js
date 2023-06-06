import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  instagramState: false,
};

const InstagramSlice = createSlice({
  initialState,
  name: "instagram",
  reducers: {
    setOpenInstagram: (state, action) => {
      state.instagramState = action.payload.instagramState;
    },
    setCloseInstagram: (state, action) => {
      state.instagramState = action.payload.instagramState;
    },
  },
});

export const { setOpenInstagram, setCloseInstagram } = InstagramSlice.actions;
export const selectInstagramState = (state) => state.instagram.instagramState;
export default InstagramSlice.reducer;
