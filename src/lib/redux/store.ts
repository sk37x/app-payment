import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import { persistedReducer, reducers } from "./rootReducer";
import middlewares from "./middleware";
import { persistStore,
    REGISTER,
    PERSIST
} from "redux-persist";

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({ 
            serializableCheck: {
                ignoredActions: [REGISTER, PERSIST]
            }
        }).prepend(middlewares)
    },
    // middleware: (getDefaultMiddleware) => {
    //     return getDefaultMiddleware().prepend(middlewares)
    // }
})

export {
    store
}

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;