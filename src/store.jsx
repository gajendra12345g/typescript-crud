import { configureStore ,getDefaultMiddleware} from "@reduxjs/toolkit";
import rootReducer from "./redux/authSlice";

const store=configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
        thunk: true,
      }),
})
export default store