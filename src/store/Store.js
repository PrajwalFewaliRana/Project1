import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlice";
import NotificationSlice from "./NotificationSlice";
import CreateSlice from "./CreateSlice";
import MoreSlice from "./MoreSlice";
import InstagramSlice from "./InstagramSlice";

const Store = configureStore({
  reducer: {
    search: SearchSlice,
    notification: NotificationSlice,
    create: CreateSlice,
    more: MoreSlice,
    instagram: InstagramSlice,
  },
});

export default Store;
