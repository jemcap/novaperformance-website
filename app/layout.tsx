import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nova Performance | Barbell Club",
  description:
    "Nova Performance is a specialised strength sports facility. Nova prides itself on the community atmosphere encouraged among all members that allows each member to perform to their best. Nova Performance offers: Small group training, personal training, tailored lifting programs, and competition coaching. Nova Performance engages with high-quality coaches who understand the best training methods that fit your desired outcomes. With hard work and dedication, you can be the best version of yourself.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${bebasNeue.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
