// src/app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Thepleela Games - เกมปาร์ตี้ออนไลน์',
  description: 'เกมสุดฮิตจากเทพลีลา - พฤติกรรมต้องห้าม คำต้องห้าม และอีกมากมาย',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="th">
      <body className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
