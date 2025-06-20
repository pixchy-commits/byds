// src/app/game/[roomId]/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Room, Player } from '@/lib/types'

export default function GamePage() {
  const { roomId } = useParams<{ roomId: string }>()
  const [room, setRoom] = useState<Room | null>(null)
  const [me, setMe] = useState<Player | null>(null)
  const router = useRouter()

  useEffect(() => {
    const stored = localStorage.getItem(`player_${roomId}`)
    if (stored) setMe(JSON.parse(stored))
    fetchState()
    const iv = setInterval(fetchState, 2000)
    return () => clearInterval(iv)
  }, [roomId])

  async function fetchState() {
    const res = await fetch(`/api/rooms/${roomId}/state`)
    if (res.ok) setRoom(await res.json())
  }

  if (!room) return <p className="text-center">กำลังโหลดเกม…</p>
  if (!me) return <p className="text-center">ข้อมูลผู้เล่นไม่พบ กรุณาเข้าห้องใหม่</p>

  const isLastRound = room.currentRound === room.totalRounds

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow p-6 space-y-4">
      <h2 className="text-lg font-semibold text-center">
        รอบที่ {room.currentRound} / {room.totalRounds}
      </h2>

      <div className="p-4 border border-gray-200 rounded bg-gray-50">
        <p className="italic text-center">
          {/* TODO: pull a scenario card based on room.category & room.currentRound */}
          สถานการณ์ของคุณ: …
        </p>
      </div>

      <button
        onClick={() => alert('คุณกดว่า “ฉันแพ้”')}
        className="w-full py-3 bg-red-500 text-white rounded-lg hover:opacity-90"
      >
        ฉันแพ้
      </button>

      <button
        onClick={() =>
          isLastRound
            ? router.push(`/game/${roomId}?end=true`)
            : router.refresh()
        }
        className="w-full py-3 bg-black text-white rounded-lg hover:opacity-90"
      >
        {isLastRound ? 'ดูผลสรุป' : 'ถัดไป'}
      </button>
    </div>
  )
}
