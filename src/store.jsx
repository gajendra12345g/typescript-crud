import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/authSlice";

const store=configureStore({
    reducer: rootReducer
})
export default store