import { PNav, NavBar, Footer } from '@/components'
import './globals.css'

import { Nunito_Sans } from "next/font/google";


const garamond = Nunito_Sans({subsets: ["latin"]})

export const metadata = {
  title: 'RHMS',
  description: 'An Ecommerce project for RHMS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={garamond.className}>
        <PNav />
        <NavBar />
        {children}
        <Footer />
        
      </body>
    </html>
  )
}
