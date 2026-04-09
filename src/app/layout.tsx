import type { Metadata } from "next";
import "@/app/globals.css";
import { Footer, NavBar } from "@/components";

export const metadata: Metadata = {
  title: "Professional website",
  description:
    "A modern, conversion-focused professional website built to showcase services, build trust, and turn interest into action."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}