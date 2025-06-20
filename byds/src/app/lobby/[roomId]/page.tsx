'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Room } from '@/lib/types'

export default function LobbyPage() {
  const { roomId } = useParams<{ roomId: string }>()
  const [room, setRoom] = useState<Room | null>(null)
  const router = useRouter()

  // Poll room state every 2s
  useEffect(() => {
    fetchState()
    const iv = setInterval(fetchState, 2000)
    return () => clearInterval(iv)
  }, [roomId])

  async function fetchState() {
    const res = await fetch(`/api/rooms/${roomId}/state`)
    if (res.ok) {
      const data: Room = await res.json()
      setRoom(data)
    }
  }

  if (!room) return <p>กำลังโหลด...</p>

  async function startGame() {
    await fetch(`/api/rooms/${roomId}/start`, { method: 'POST' })
    router.push(`/game/${roomId}`)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">ห้อง: {room.name}</h2>
      <ul className="space-y-1">
        {room.players.map(p => (
          <li key={p.id} className="px-3 py-2 border rounded">
            {p.name}
          </li>
        ))}
      </ul>
      {room.players.length === room.maxPlayers && (
        <button
          onClick={startGame}
          className="w-full py-3 bg-black text-white rounded"
        >
          เริ่มเกม
        </button>
      )}
    </div>
  )
}
