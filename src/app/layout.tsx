
import { Inter } from 'next/font/google'
import './globals.css'
import { ReduxProvider } from '@/lib/providers'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={inter.className}>
          
          {children}
          
        </body>
      </html>
    </ReduxProvider>
  )
}
