import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "material-symbols";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chad Bennett - Web Developer & UX Designer",
  description:
    "Portfolio site for showing the work I've done and learning new development skills in the process.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${interSans.variable} h-full antialiased`}>
      <body className="px-4">{children}</body>
    </html>
  );
}
