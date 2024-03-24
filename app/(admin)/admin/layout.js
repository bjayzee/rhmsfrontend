import { Nunito_Sans } from "next/font/google";
import AdminNav from "@/components/AdminNav";
import "../../globals.css";
import "antd/dist/antd.variable.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SessionProvider from "@/app/(home)/context/AuthProvider";
import { getServerSession } from "next-auth";

const nunito = Nunito_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "RHMS-admin",
  description: "RHMS admin dashboard",
  keywords: "rhms, admin",
};

export default async function Layout({ children }) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={nunito.className}>
        <SessionProvider session={session}>
          <AdminNav />
          <div>{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}
