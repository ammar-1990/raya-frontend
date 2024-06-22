import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] ,variable:'--inter'});
const myFont = localFont({
  src: "../fonts/CalSans-SemiBold.woff",variable:'--cal',weight:'400'
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
      <body className={cn(myFont.className,inter.className)}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
