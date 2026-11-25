// Import global styles and fonts
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Image from "next/image";
import Image404 from "@/public/images/404.jpg";
import Link from "next/link";
import { LinkStyles } from "./lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="relative min-h-screen">
          <Image
            src={Image404}
            alt="Snake River at twilight"
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            className="-z-10 object-cover object-center"
          />
          <main className="relative z-10 flex min-h-screen flex-col items-center justify-center p-8 text-white">
            <p className="text-sm font-medium text-orange-400">404</p>
            <h1 className="mt-2 text-3xl font-thin uppercase sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-4 max-w-md text-center text-base font-light text-gray-400 italic">
              Getting lost dosen't always have to be a bad thing.
            </p>
            <div className="mt-8">
              <Link href="/" className={`group ${LinkStyles}`}>
                <span className="relative inline-flex items-center before:mr-2 before:font-[Material_Symbols_Outlined] before:text-2xl before:leading-0 before:content-['home']">
                  Back to home
                </span>
              </Link>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
