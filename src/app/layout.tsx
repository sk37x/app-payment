'use client'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Inter, Sarabun } from 'next/font/google'
import './globals.css'
import { ReduxProvider } from '@/lib/providers'
import { 
  Box
} from '@mui/material'
import { darkTheme, lightTheme } from '@/util/theme';
import MiniDrawer from './components/MiniDrawer'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import ThemeProviderCustom from '@/util/ThemeProviderCustom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '@/lib/redux/store';

const inter = Inter({ subsets: ['latin'] })
const sarabun = Sarabun({ subsets: ['latin'], weight: '500' })




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <ReduxProvider>
      <ThemeProviderCustom>
        <CssBaseline />
        <html lang="en">
          <body className={sarabun.className}>
            <PersistGate persistor={persistor}>
              <Box>
                <MiniDrawer>
                  {children}
                </MiniDrawer>
              </Box>
            </PersistGate>
          </body>
        </html>
      </ThemeProviderCustom>
    </ReduxProvider>
  )
}
