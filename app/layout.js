import { Hero, PNav, NavBar, DealOfTheDay, RHMSNEWS, Footer } from '@/components'
import './globals.css'


export const metadata = {
  title: 'RHMS',
  description: 'An Ecommerce project for RHMS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <PNav />
        <NavBar />
        <Hero />
        <DealOfTheDay />
        <RHMSNEWS />
        {children}
        <Footer />
        
      </body>
    </html>
  )
}
