import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/serviceSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    details: bookReducer,
  },
});
