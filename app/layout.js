import { PNav, NavBar, Footer } from '@/components'
import './globals.css'

import { Nunito_Sans } from "next/font/google";
import AppContext from './context/AppContext';
import { getServerSession } from "next-auth";
import SessionProvider from './context/AuthProvider'



const nunito = Nunito_Sans({ subsets: ["latin"] })

export const metadata = {
  title: 'RHMS',
  description: 'An Ecommerce project for RHMS',
}

export default async function RootLayout({ children }) {

  const session = await getServerSession()
  return (
    <html lang="en">
      <body className={nunito.className}>
        
        <SessionProvider session={session}>
          <AppContext>
            <PNav />
            <NavBar />
            {children}
            <Footer />
          </AppContext>
        </SessionProvider>



      </body>
    </html>
  )
}
