import MouseMoveEffect from "@/components/mouse-move-effect";
import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import type React from "react";
import "./globals.css";
import FadeIn from "@/components/fade-in";
import { siteConfig } from "@/lib/site-config";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-montserrat",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
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
