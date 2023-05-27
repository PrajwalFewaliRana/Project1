import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlice";
import NotificationSlice from "./NotificationSlice";

const Store = configureStore({
  reducer: {
    search:SearchSlice,
    notification:NotificationSlice,
  },
});

export default Store;
