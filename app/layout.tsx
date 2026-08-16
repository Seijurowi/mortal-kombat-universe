import type { Metadata } from "next"
import Link from "next/link"
import { Geist_Mono, Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

import "./globals.css"
import "./mk-theme.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
})

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Mortal Kombat Universe",
  description: "A source-aware Mortal Kombat knowledge graph and interactive encyclopedia.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans antialiased", inter.variable, mono.variable)}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <nav
            aria-label="Universe modes"
            className="fixed right-3 bottom-3 z-50 flex items-center gap-1 rounded-xl border border-border/80 bg-background/90 p-1 shadow-lg backdrop-blur md:right-5 md:bottom-5"
          >
            <Link
              className="rounded-lg px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              href="/"
            >
              Explorer
            </Link>
            <Link
              className="rounded-lg px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              href="/causality"
            >
              Causality
            </Link>
            <Link
              className="rounded-lg px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              href="/claims"
            >
              Claims
            </Link>
            <Link
              className="rounded-lg px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              href="/cosmology"
            >
              Cosmology
            </Link>
          </nav>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
