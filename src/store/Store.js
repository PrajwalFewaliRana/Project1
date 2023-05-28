import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlice";
import NotificationSlice from "./NotificationSlice";
import CreateSlice from "./CreateSlice";

const Store = configureStore({
  reducer: {
    search:SearchSlice,
    notification:NotificationSlice,
    create:CreateSlice,
  },
});

export default Store;
