import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import categories from "../features/categoriesSlice";
import programs from "../features/programSlice";
import consults from "../features/consultSlice";

import lessons from "../features/lessonsSlice";
// import user from "../features/userSlice";
import messages from "../features/ChatSlice";

const store = configureStore({
  reducer: {
    application,
    categories,
    programs,
    consults,
    lessons,
    // user
    messages
    
  },
});
export default store;
