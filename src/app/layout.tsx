import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'RemX',
  description: 'An automated REM ( Random Encounter Model ) tool for animal abundance estimation using ML',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
