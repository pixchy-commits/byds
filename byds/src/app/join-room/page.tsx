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
    // store my player info for later
    const player = await res.json()
    localStorage.setItem(`player_${roomId}`, JSON.stringify(player))
    router.push(`/lobby/${roomId}`)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">เข้าห้อง</h2>

      <input
        required
        placeholder="เลขห้อง"
        value={roomId}
        onChange={e => setRoomId(e.target.value.toUpperCase())}
        className="w-full px-3 py-2 border rounded"
      />

      <input
        required
        placeholder="ชื่อของคุณ"
        value={name}
        onChange={e => setName(e.target.value)}
        className="w-full px-3 py-2 border rounded"
      />

      <button type="submit" className="w-full py-3 bg-black text-white rounded">
        เข้าห้อง
      </button>
    </form>
  )
}
