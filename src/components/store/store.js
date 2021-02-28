import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "./mailSlice";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    mail: mailReducer,
    user: userSlice,
  },
});
