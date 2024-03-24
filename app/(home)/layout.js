import "../globals.css";
import { Nunito_Sans } from "next/font/google";
import AppContext from "./context/AppContext";
import SessionProvider from "./context/AuthProvider";
import { getServerSession } from "next-auth";
import { PNav, NavBar, Footer } from "@/components";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "RHMS",
  description: "An Ecommerce project for RHMS",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={nunito.className}>
        <SessionProvider session={session}>
          <AppContext>
            <div>
              <PNav />
              <NavBar />
            </div>
            <div>{children}</div>
            <Footer />
          </AppContext>
        </SessionProvider>
      </body>
    </html>
  );
}
