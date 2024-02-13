import { Nunito_Sans } from 'next/font/google';
import "./globals.css";
import AdminNav from '@/components/AdminNav';
const nunito = Nunito_Sans({
  subsets: ['latin'],
});

export const metadata = {
  title: 'RHMS admin',
  description: 'RHMS admin dashboard',
  keywords:
    'rhms, admin',
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <AdminNav/>
      <main>{children}</main>

      </body>
    </html>
  );
}
