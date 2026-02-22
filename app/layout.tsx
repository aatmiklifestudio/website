import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const isProd = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const basePath = isProd && isGitHubPages ? '/website' : '';

export const metadata = {
  title: "Aatmik Life Studio",
  icons: {
    icon: {
      url: `${basePath}/icon-tab.jpg`,
      sizes: '128x128',
    },
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
