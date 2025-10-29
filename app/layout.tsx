import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nextblock.ca"
const metadataBase = (() => {
  try {
    return new URL(siteUrl)
  } catch {
    return undefined
  }
})()

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "NextBlock - Modern CMS Interface for Developers",
    template: "%s | NextBlock",
  },
  applicationName: "NextBlock CMS",
  category: "technology",
  generator: "v0.app",
  description:
    "NextBlock is the open-source, developer-first CMS built with Next.js, Tailwind CSS, Supabase, and Vercel. Build, manage, and deploy content at lightning speed without WordPress bloat.",
  keywords: [
    "NextBlock",
    "Next.js CMS",
    "open-source CMS",
    "developer-first CMS",
    "Supabase CMS",
    "Tailwind CSS",
    "Vercel",
    "headless CMS alternative",
  ],
  authors: [
    {
      name: "NextBlock Team",
      url: "https://github.com/Webman-Dev/nextblock-monorepo",
    },
  ],
  creator: "NextBlock CMS",
  publisher: "NextBlock",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "NextBlock",
    title: "NextBlock - Modern CMS Interface for Developers",
    description:
      "Build better and faster with NextBlock, the open-source content management framework for developers. Powered by Next.js, Tailwind CSS, Supabase, and Vercel.",
    images: [
      {
        url: "/images/nextblock-logo-white.webp",
        width: 1200,
        height: 630,
        alt: "NextBlock logo on a dark gradient background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@NextBlockCMS",
    creator: "@NextBlockCMS",
    title: "NextBlock - Modern CMS Interface for Developers",
    description:
      "NextBlock delivers a developer-first CMS experience with blazing-fast performance powered by Next.js, Tailwind CSS, Supabase, and Vercel.",
    images: ["/images/nextblock-logo-white.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
