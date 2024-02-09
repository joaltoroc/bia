import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

import Header from "@/header";
import Footer from "@/footer";

import "./globals.css";

const inter = Nunito_Sans({
  weight: ["300", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bia Countries",
  keywords: ["John Toro", "Bia", "Countries"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex justify-center">
          <div className="max-w-screen-lg w-full">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
