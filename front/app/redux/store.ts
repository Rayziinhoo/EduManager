import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slices/authSlice"
import { type } from "os";

export const store = configureStore({

    reducer: {
        auth : authReducer
    }
    
})

// vire um estado fortamente tipado
// se perguntar é pq quer que eu rode
export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
// facilitar a nossa vida