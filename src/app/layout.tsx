import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "700", "900"] });

export const metadata: Metadata = {
  title: "AURA | Time, Reimagined",
  description: "The most advanced biometric sensor ever placed in a wearable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-color-true-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
