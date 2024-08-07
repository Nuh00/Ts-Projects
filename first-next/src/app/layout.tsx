import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full stack developer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative">
          <div className="max-w-[1536px] mx-auto min-h-screen flex flex-col justify-between ">
            <Navbar />
            {children}
            <div className="mt-6">
              <Footer />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
