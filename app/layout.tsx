import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Flame Bible",
  description: "A mobile application for Bible study groups",
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/png" href="/logo-round-removebg-preview.png"/>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <main className="min-h-screen flex flex-col">
            <div className="fixed top-4 right-4 z-50">
              <ThemeToggle />
            </div>
            <div className="flex-1 pb-16 max-w-md mx-auto w-full pt-12">{children}</div>
            <Navigation />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
