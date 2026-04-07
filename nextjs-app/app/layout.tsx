import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import BottomNav from "@/components/layout/BottomNav";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hype.Wav",
  description: "Discover live music near you",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#09090F",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <main className="min-h-dvh" style={{ paddingBottom: "var(--nav-height)" }}>
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
