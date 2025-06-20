'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Room, Player } from '@/lib/types'

export default function GamePage() {
  const { roomId } = useParams<{ roomId: string }>()
  const [room, setRoom] = useState<Room | null>(null)
  const [me, setMe] = useState<Player | null>(null)
  const router = useRouter()

  // Load player info and poll room state
  useEffect(() => {
    const stored = localStorage.getItem(`player_${roomId}`)
    if (stored) setMe(JSON.parse(stored))
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

  if (!room) return <p>Loading game…</p>
  if (!me) return <p>Player info not found. Please re-join the room.</p>

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">
        รอบที่ {room.currentRound} / {room.totalRounds}
      </h2>

      <div className="p-4 border rounded bg-white">
        <p className="italic">
          {/* TODO: pull a scenario card based on room.category & room.currentRound */}
          สถานการณ์ของคุณ: …  
        </p>
      </div>

      <button
        onClick={() => {
          // TODO: call an API to record that this player lost this round
          alert('คุณกดว่า “ฉันแพ้”')
        }}
        className="w-full py-3 bg-red-500 text-white rounded"
      >
        ฉันแพ้
      </button>

      <button
        onClick={() => {
          if (room.currentRound < room.totalRounds) {
            // TODO: advance round via API
          } else {
            router.push(`/game/${roomId}?end=true`)
          }
        }}
        className="w-full py-3 bg-black text-white rounded"
      >
        ถัดไป
      </button>
    </div>
  )
}
