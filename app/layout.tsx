import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { SzhMainHeader } from "@/components/szh-main-header"
import { SzhMainFooter } from "@/components/szh-main-footer"
import { SzhCookieConsent } from "@/components/szh-cookie-consent"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Top Kladionice Hrvatska - Najbolje Stranice za Klađenje 2025",
  description:
    "Stručne analize vodećih kladionica u Hrvatskoj. Objektivne recenzije, usporedbe kvota i ekskluzivni bonusi za sportsko klađenje. Pronađite najbolju platformu za vas.",
  keywords: [
    "sportsko klađenje Hrvatska",
    "kladionice Hrvatska",
    "online klađenje Hrvatska",
    "najbolje kladionice",
    "nogometno klađenje Hrvatska",
    "tenis klađenje",
    "košarka klađenje",
    "bonusi za klađenje",
    "klađenje uživo",
    "legalne kladionice Hrvatska",
    "betting sites Croatia",
    "online sportsko klađenje",
    "Formula 1 klađenje",
    "MMA klađenje",
    "hokej klađenje",
    "pikado klađenje",
    "bilijar klađenje",
    "top kladionice Hrvatska",
    "rang lista kladionica",
    "sigurno klađenje Hrvatska",
    "odgovorno klađenje",
    "najbolje kladionice Hrvatska",
    "sportsko klađenje savjeti",
    "klađenje aplikacije Hrvatska",
    "mobilno klađenje",
    "eSports klađenje",
    "virtualni sportovi klađenje",
    "klađenje na nogometne lige",
    "klađenje na teniske turnire",
    "klađenje na košarkaške utakmice",
    "ekskluzivni bonusi za nove korisnike",
    "promocije kladionica",
    "isplate dobitaka klađenje",
    "korisnička podrška kladionica",
    "zakonski okvir klađenja Hrvatska",
    "porezi na dobitke od klađenja",
    "kladionica",
    "sportska kladionica",
    "online kladionica",
    "klađenje uživo",
    "online klađenje",
    "kladionica uzivo",
    "online casino Hrvatska",
    "najbolji online casino",
    "casino bonusi",
    "casino igre Hrvatska",
    "casino Croatia",
    "online casino games",
    "casino bonuses"
  ],
  authors: [{ name: "Top Kladionice Hrvatska" }],
  openGraph: {
    title: "Top Kladionice Hrvatska - Stručne Analize i Recenzije",
    description:
      "Neovisne analize najboljih kladionica u Hrvatskoj. Pronađite pouzdanu platformu za sportsko klađenje.",
    url: "https://topkladionicehrvatska.com",
    siteName: "Top Kladionice Hrvatska",
    locale: "hr_HR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function SzhRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={geistSans.className}>
        <SzhMainHeader />
        {children}
        <SzhMainFooter />
        <SzhCookieConsent />
      </body>
    </html>
  )
}
