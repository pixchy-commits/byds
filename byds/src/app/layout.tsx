// src/app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'พฤติกรรมต้องห้าม',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="th">
      <body className="bg-gray-100 min-h-screen">
        <main className="flex items-center justify-center p-4">
          <div className="w-full max-w-sm">{children}</div>
        </main>
      </body>
    </html>
  )
}
