import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "material-symbols";
import PageHeader from "./ui/page-header";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chad Bennett - Web Developer & UX Designer",
  description:
    "Portfolio for showcasing my past work and developing new skills as I continue to learn.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${interSans.variable} h-full antialiased`}>
      <body className="px-4">
        <div className="justify-center md:flex md:gap-12 lg:gap-24">
          <PageHeader />
          <main className="my-10 max-w-2xl grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
