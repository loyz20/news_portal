

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "./transition";
import Navbar from "@/components/layout/Navbar";
import RunningText from "@/components/layout/RunningText";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "News Portal",
  description: "Portal berita modern dan responsif",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100`}
      >
        <RunningText text="Breaking News: Portal berita modern dan responsif. Update terbaru setiap saat!" />
        <Navbar />
        {/* Konten utama */}
        <main className="max-w-7xl mx-auto px-4 pt-22 space-y-6">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
