import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import categories from "../features/categoriesSlice";
import programs from "../features/programSlice";
import lessons from "../features/lessonsSlice";
// import user from "../features/userSlice";

const store = configureStore({
  reducer: {
    application,
    categories,
    programs,
    lessons,
    // user
  },
});
export default store;
