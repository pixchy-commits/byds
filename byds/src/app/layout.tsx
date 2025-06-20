// src/app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'BYDS Game',
  description: 'Don’t Do That Action!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="th">
      <body className="bg-gray-50 min-h-screen text-gray-900">
        <main className="max-w-md mx-auto p-4">{children}</main>
      </body>
    </html>
  )
}
