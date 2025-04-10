import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import ModalProvide from "@/providers/modal-providers";
import { ContactProvider } from "@/contexts/contact-context";
import { Toaster } from "@/components/ui/sonner"
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const myFont = localFont({
  src: "../fonts/CalSans-SemiBold.woff",
  variable: "--cal",
  weight: "400",
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
        <ContactProvider>
          <body className={cn(myFont.className, inter.className)}>
            {children}
     
            <ModalProvide />
         <Toaster richColors />
          </body>
        </ContactProvider>
      </html>
    </ClerkProvider>
  );
}
