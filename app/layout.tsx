import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

{/* Providers: Wraps the app with global providers
  (theme, auth, state, i18n, etc.), supplying
  shared context and side-effects site-wide.*/}
import { Providers } from "./providers";

{/* ThemeToggle: UI control that toggles and
  persists the color scheme (light/dark); used in
  the layout/header to update theme state.*/}
import { ThemeToggle } from "@/components/theme-toggle";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recreational Dive Planner",
  description: "Compare the result with your next diving plan!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <div className="absolute right-0 mr-20 top-10 z-50">
            <ThemeToggle/>
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
