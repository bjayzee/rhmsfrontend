import { Nunito_Sans } from 'next/font/google';
import AdminNav from '@/components/AdminNav';
import '../globals.css'
import "antd/dist/antd.variable.min.css";
import 'bootstrap/dist/css/bootstrap.min.css'

const nunito = Nunito_Sans({
  subsets: ['latin'],
});

export const metadata = {
  title: 'RHMS admin',
  description: 'RHMS admin dashboard',
  keywords:
    'rhms, admin',
};

export default function Layout({ children }) {
  return (
      <body className={nunito.className}>
        <AdminNav/>
      <div>{children}</div>

      </body>
 
  );
}
