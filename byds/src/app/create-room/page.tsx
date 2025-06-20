// src/app/create-room/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateRoomPage() {
  const [name, setName] = useState('')
  const [maxPlayers, setMax] = useState(4)
  const [category, setCat] = useState('เล่นเกม')
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch('/api/rooms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, maxPlayers, category }),
    })
    if (!res.ok) return alert('สร้างห้องไม่สำเร็จ')
    const room = await res.json()
    router.push(`/lobby/${room.id}`)
  }

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-center">สร้างห้อง</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          required
          placeholder="ชื่อห้อง"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex space-x-2">
          {[2, 3, 4, 5, 6].map(n => (
            <button
              key={n}
              type="button"
              onClick={() => setMax(n)}
              className={`flex-1 py-2 rounded-lg text-center ${
                maxPlayers === n
                  ? 'bg-black text-white'
                  : 'border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {n}
            </button>
          ))}
        </div>

        <input
          placeholder="หมวดหมู่ (เกม/ทำอาหาร/อื่นๆ)"
          value={category}
          onChange={e => setCat(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full py-3 bg-black text-white rounded-lg text-lg hover:opacity-90"
        >
          สร้าง
        </button>
      </form>
    </div>
  )
}
