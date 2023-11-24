'use client'
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
    components: {
      MuiButton: {
        defaultProps: {
          style: {color:'white'}
        }
      }
    }
  });

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    }
})
  
export {
    lightTheme,
    darkTheme
}