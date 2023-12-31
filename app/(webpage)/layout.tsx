"use client"
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import '@/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AuthContextProvider } from '@/context/Auth'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UNI Trading',
  description: 'Mastering the art of Achieving financial stability with forex trading',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider >
          <Header />
            {children}
          <Footer />
        </AuthContextProvider>
          
        </body>
    </html>
  )
}
