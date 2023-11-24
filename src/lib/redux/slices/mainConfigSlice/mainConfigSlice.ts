import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/lib/redux/store';


export interface MainConfigState {
    theme: 'dark' | 'light';
}

const initialState = {
    theme: 'light'
} as MainConfigState;

const mainConfigSlice = createSlice({
    name: 'mainConfig',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
            state.theme = action.payload
        }
    }
})

export const { setTheme } = mainConfigSlice.actions;

export const selectTheme = (state: RootState) => state.mainConfig.theme;

export {
    mainConfigSlice
}

export default mainConfigSlice.reducer;

