import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createState: false,
};

const CreateSlice = createSlice({
  initialState,
  name: "create",
  reducers: {
    setOpenCreate: (state, action) => {
      state.createState = action.payload.createState;
    },
    setCloseCreate: (state, action) => {
      state.createState = action.payload.createState;
    },
  },
});

export const { setCloseCreate, setOpenCreate } = CreateSlice.actions;
export const selectCreateState = (state) => state.create.createState;
export default CreateSlice.reducer;
