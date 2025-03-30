import { configureStore } from "@reduxjs/toolkit";
import adminAuthReducer from "./adminAuthSlice";
import authorAuthReducer from "./authorAuthSlice";

const store = configureStore({
  reducer: {
    adminAuth: adminAuthReducer,
    authorAuth: authorAuthReducer,
  },
});

export default store;
