import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import DashboardWrapper from "./dashboardWrapper/page";
import StoreProvider from "./StoreProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <StoreProvider>
          <DashboardWrapper>
            {children}
          </DashboardWrapper>
        </StoreProvider>
      </body>
    </html>
  );
}
