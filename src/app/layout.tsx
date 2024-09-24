import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { GoogleAnalytics } from '@next/third-parties/google'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Reyhan Abizar - Senior Android Engineer",
  description: "Reyhan Abizar's portfolio showcasing expertise in Android development, Kotlin, and mobile app development.",
  keywords: "Reyhan Abizar, Android Engineer, Kotlin, Mobile Development, Portfolio",
  openGraph: {
    title: "Reyhan Abizar - Senior Android Engineer",
    description: "Reyhan Abizar's portfolio showcasing expertise in Android development, Kotlin, and mobile app development.",
    url: "https://abizareyhan.com",
    type: "website",
    images: [
      {
        url: "https://assets.abizareyhan.com/profile.png",
        width: 1080,
        height: 1080,
        alt: "Reyhan Abizar",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://assets.abizareyhan.com/profile.png",
        width: 1080,
        height: 1080,
        alt: "Reyhan Abizar",
      },
    ],
    card: "summary_large_image",
    site: "@abizareyhan",
    title: "Reyhan Abizar - Senior Android Engineer",
    description: "Reyhan Abizar's portfolio showcasing expertise in Android development, Kotlin, and mobile app development.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <body className={plusJakartaSans.className}>
        <>
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full ring-1 ring-zinc-100 bg-zinc-900 ring-zinc-300/20" />
            </div>
          </div>
          <div className="relative">
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </>
      </body>
      <GoogleAnalytics gaId="G-G9RBZJFR8E" />
    </html>
  )
}
