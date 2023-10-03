"use client"
import '@/globals.css'
import "./layout.scss"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AuthContextProvider } from '@/context/Auth'
import { UserHeader } from './[user]/components/user.header'
import { UserNavBar } from './[user]/components/user.navbar'

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
      <body className='user_body'>
        <AuthContextProvider>
          <UserHeader />
            <main>
              <aside>
                <UserNavBar />
              </aside>
              <section>
              {children}
              </section>
            </main>
        </AuthContextProvider>
        </body>
    </html>
  )
}
