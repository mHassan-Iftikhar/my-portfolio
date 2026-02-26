import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Hassan Iftikhar - Frontend Engineer",
  description: "Portfolio of Hassan Iftikhar, a frontend engineer specializing in modern web applications. Explore projects, skills, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased font-ibm`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
