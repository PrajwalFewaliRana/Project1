import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notificationState: false,
};

const NotificationSlice = createSlice({
  initialState,
  name: "notification",
  reducers: {
    setOpenNotification: (state, action) => {
      state.notificationState = action.payload.notificationState;
    },
    setCloseNotification: (state, action) => {
      state.notificationState = action.payload.notificationState;
    },
  },
});

export const { setCloseNotification, setOpenNotification } =
  NotificationSlice.actions;
export const selectNotificationState = (state) =>
  state.notification.notificationState;
export default NotificationSlice.reducer;
