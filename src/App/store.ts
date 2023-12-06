import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import categories from "../features/categoriesSlice";
import programs from "../features/programSlice";
import consults  from "../features/consultSlice";
// import user from "../features/userSlice";


const store = configureStore({
    reducer:{
        application,
        categories,
        programs,
        consults
        
        // user
    },
})
export default store