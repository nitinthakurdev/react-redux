import { configureStore } from "@reduxjs/toolkit";
import userDetail from "./slices/userdetail"


export const store = configureStore({
    reducer:{
        app:userDetail
    }
})