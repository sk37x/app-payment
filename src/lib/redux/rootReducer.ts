import { combineReducers } from "@reduxjs/toolkit"
import { counterSlice } from "./slices/counterSlice/counterSlice"
import { mainConfigSlice } from "./slices/mainConfigSlice/mainConfigSlice"
import storage from "./webStorage";
import { persistReducer } from "redux-persist";

const persistConfig = {
    key: "root",
    version: 1,
    storage: storage
}

export const reducers = combineReducers(
    {
        [counterSlice.name]: counterSlice.reducer,
        [mainConfigSlice.name]: mainConfigSlice.reducer
    }
);

export const persistedReducer = persistReducer(persistConfig, reducers);