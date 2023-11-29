import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/styles/globals.css'
const inter = Inter({ subsets: ['latin'] })

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
    <>

      <body className={inter.className}>{children}</body>
    </>
  )
}
