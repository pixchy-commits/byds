// src/app/page.tsx
'use client'

import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  return (
    <div className="space-y-6 text-center">
      <h1 className="text-3xl font-bold">พฤติกรรมต้องห้าม</h1>
      <button
        onClick={() => router.push('/join-room')}
        className="w-full py-3 bg-black text-white rounded"
      >
        เข้าห้อง
      </button>
      <button
        onClick={() => router.push('/create-room')}
        className="w-full py-3 border border-black rounded"
      >
        สร้างห้อง
      </button>
    </div>
  )
}
