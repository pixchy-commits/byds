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
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">สร้างห้อง</h2>

      <input
        required
        placeholder="ชื่อห้อง"
        value={name}
        onChange={e => setName(e.target.value)}
        className="w-full px-3 py-2 border rounded"
      />

      <div className="flex space-x-2">
        {[2, 3, 4, 5, 6].map(n => (
          <button
            key={n}
            type="button"
            onClick={() => setMax(n)}
            className={`px-3 py-1 rounded ${
              maxPlayers === n ? 'bg-black text-white' : 'border'
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
        className="w-full px-3 py-2 border rounded"
      />

      <button type="submit" className="w-full py-3 bg-black text-white rounded">
        สร้าง
      </button>
    </form>
  )
}
