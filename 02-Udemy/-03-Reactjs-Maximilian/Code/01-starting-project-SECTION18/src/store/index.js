import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authRreducer from "./auth";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authRreducer },
});

export default store;
