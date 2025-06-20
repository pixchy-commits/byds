// src/app/join-room/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function JoinRoomPage() {
  const [roomId, setRoomId] = useState('')
  const [name, setName] = useState('')
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch(`/api/rooms/${roomId}/join`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ playerName: name }),
    })
    if (!res.ok) return alert('เข้าห้องไม่สำเร็จ')
    const player = await res.json()
    localStorage.setItem(`player_${roomId}`, JSON.stringify(player))
    router.push(`/lobby/${roomId}`)
  }

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-center">เข้าห้อง</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          required
          placeholder="เลขห้อง"
          value={roomId}
          onChange={e => setRoomId(e.target.value.toUpperCase())}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          required
          placeholder="ชื่อของคุณ"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full py-3 bg-black text-white rounded-lg text-lg hover:opacity-90"
        >
          เข้าห้อง
        </button>
      </form>
    </div>
  )
}
