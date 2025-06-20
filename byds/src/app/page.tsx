// src/app/page.tsx
'use client'

import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">พฤติกรรมต้องห้าม</h1>

      <button
        onClick={() => router.push('/join-room')}
        className="block w-full py-3 border border-gray-300 rounded-lg text-lg hover:bg-gray-50"
      >
        เข้าห้อง
      </button>

      <button
        onClick={() => router.push('/create-room')}
        className="block w-full py-3 bg-black text-white rounded-lg text-lg hover:opacity-90"
      >
        สร้างห้อง
      </button>
    </div>
  )
}
