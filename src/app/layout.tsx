import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainFooter from "@/components/main-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WoWa",
  description: "Send Whatsapp Messages without saving contact.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col h-screen">
          {children}
          <MainFooter />
        </main>
      </body>
    </html>
  );
}
