import type { Metadata } from "next";
import "./globals.css";
import { bubblegum_sans,abeezee,mouse_memoirs } from "./fonts";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Grades",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bubblegum_sans.variable} ${abeezee.variable} ${mouse_memoirs.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
