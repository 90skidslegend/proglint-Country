import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./Module/Country/Redux/Reducer/ThemeReducer";

export const store = configureStore({
    reducer:{
        themeReducer:ThemeReducer
    }
})