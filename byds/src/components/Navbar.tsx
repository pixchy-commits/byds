// src/components/Navbar.tsx
'use client'

import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => router.push('/')}
            className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
          >
            เทพลีลา
          </button>
          
          <div className="flex items-center space-x-6">
            <button
              onClick={() => router.push('/join-room')}
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              เข้าห้อง
            </button>
            <button
              onClick={() => router.push('/create-room')}
              className="bg-gray-900 text-white px-4 py-2 rounded-xl font-medium hover:bg-gray-800 transition-colors"
            >
              สร้างห้อง
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
