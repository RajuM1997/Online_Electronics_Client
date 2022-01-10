import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/serviceSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
