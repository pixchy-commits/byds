// src/app/lobby/[roomId]/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Room } from '@/lib/types'

export default function LobbyPage() {
  const { roomId } = useParams<{ roomId: string }>()
  const [room, setRoom] = useState<Room | null>(null)
  const router = useRouter()

  useEffect(() => {
    fetchState()
    const iv = setInterval(fetchState, 2000)
    return () => clearInterval(iv)
  }, [roomId])

  async function fetchState() {
    const res = await fetch(`/api/rooms/${roomId}/state`)
    if (res.ok) setRoom(await res.json())
  }

  async function startGame() {
    await fetch(`/api/rooms/${roomId}/start`, { method: 'POST' })
    router.push(`/game/${roomId}`)
  }

  if (!room) return <p className="text-center">กำลังโหลด…</p>

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow p-6 space-y-4">
      <h2 className="text-lg font-semibold text-center">ห้อง: {room.name}</h2>
      <ul className="space-y-2">
        {room.players.map((p, i) => (
          <li
            key={p.id}
            className="flex items-center px-3 py-2 border border-gray-200 rounded"
          >
            <span className="w-6 font-medium">{i + 1}.</span>
            <span className="ml-2">{p.name}</span>
          </li>
        ))}
      </ul>

      {room.players.length === room.maxPlayers ? (
        <button
          onClick={startGame}
          className="w-full py-3 bg-black text-white rounded-lg text-lg hover:opacity-90"
        >
          เริ่มเกม
        </button>
      ) : (
        <p className="text-center text-gray-600">
          รอผู้เล่นอีก {room.maxPlayers - room.players.length} คน…
        </p>
      )}
    </div>
  )
}
