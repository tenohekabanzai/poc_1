"use client"; // Enables client-side rendering for path detection

import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AdminComp from "@/components/adminComp";
import CustomerComp from "@/components/CustomerComp";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current route

  // Check if the user is in the admin section
  const isAdmin = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {isAdmin ? (
          <AdminComp children={children}/>
        ) : (
          <CustomerComp children={children}/>
        )}
      </body>
    </html>
  );
}