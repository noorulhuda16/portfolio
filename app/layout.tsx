import "./globals.css"
import { Outfit } from 'next/font/google'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import type React from "react"

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
})

export const metadata = {
  title: "Your Name - Portfolio",
  description: "A showcase of design projects by Your Name",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="bg-background text-foreground">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
