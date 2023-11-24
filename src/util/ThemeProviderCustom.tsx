import { ThemeProvider } from '@mui/material/styles';
import { ThemeProviderProps } from '@emotion/react';
import React from 'react';
import { darkTheme, lightTheme } from './theme';
import { useAppSelector } from '@/lib/redux/hooks';

type Props = ThemeProviderProps & {
    children: React.ReactNode;
}

const ThemeProviderCustom = ({children}:{children: React.ReactNode}) => {
    const theme = useAppSelector(state => state.mainConfig.theme);
    
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            {children}
        </ThemeProvider>
    )
};

export default ThemeProviderCustom