
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Elton Gomes | Business & Engineering Student',
  description: 'Netflix-inspired CV showcasing expertise in product development, brand strategy, B2B marketing, business development, project management, and sales.',
  keywords: ['business', 'engineering', 'marketing', 'product development', 'brand strategy', 'sales'],
  authors: [{ name: 'Elton Gomes' }],
  openGraph: {
    title: 'Elton Gomes | Business & Engineering Student',
    description: 'Netflix-inspired CV showcasing expertise across multiple business domains',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#141414] text-white min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  )
}
