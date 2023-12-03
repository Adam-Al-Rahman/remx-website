import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import '@/styles/globals.css'

import fetchRepoInfo from '@/components/RepoInfo'
import { TypeRepoInfo } from '@/components/RepoInfo';

export let repoInfo: TypeRepoInfo[] | null = null;

const remxYoloRepoInfo = async () => {
  const data = await fetchRepoInfo('Adam-Al-Rahman', 'remx_yolo');
  repoInfo = data;
}

export const modelVersion = "v1.0.0";
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
