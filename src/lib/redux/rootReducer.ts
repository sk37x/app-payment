import { counterSlice } from "./slices/counterSlice/counterSlice"
export const reducers = {
    [counterSlice.name]: counterSlice.reducer
}