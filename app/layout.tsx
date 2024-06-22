import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({
  src: "../fonts/CalSans-SemiBold.woff2"
});

export const metadata: Metadata = {
  title: "Raya",
  description: "Grow your busyness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
