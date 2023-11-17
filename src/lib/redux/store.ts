import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./rootReducer";


const store = configureStore({
    reducer: reducers
})

export {
    store
}

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;