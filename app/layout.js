import { PNav, NavBar, Footer } from '@/components'
import './globals.css'

import { EB_Garamond } from "next/font/google";


const garamond = EB_Garamond({subsets: ["latin"]})

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
        <>{children}</>
      </body>
      <Footer />
    </html>
  );
}
