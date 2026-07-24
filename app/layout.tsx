import MouseMoveEffect from "@/components/mouse-move-effect";
import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import type React from "react";
import "./globals.css";
import FadeIn from "@/components/fade-in";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Aguilar IT Solutions",
  description: "IT solutions for the modern business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} bg-background text-foreground font-sans antialiased`}
      >
        <MouseMoveEffect />
        <FadeIn delay={100} duration={600}>
          {children}
        </FadeIn>
      </body>
    </html>
  );
}
