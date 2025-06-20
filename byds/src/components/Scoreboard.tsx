// src/components/Scoreboard.tsx
'use client'

import { Room, Player } from '@/lib/types'

type ScoreboardProps = {
  room: Room
  onPlayAgain: () => void
  onHome: () => void
}

export default function Scoreboard({
  room,
  onPlayAgain,
  onHome,
}: ScoreboardProps) {
  // calculate wins per player
  const wins: Record<string, number> = {}
  room.players.forEach((p: Player) => {
    const lostCount = p.lostRounds.length
    wins[p.id] = room.totalRounds - lostCount
  })
  // sort by wins descending
  const sorted = [...room.players].sort((a, b) => wins[b.id] - wins[a.id])

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-center">ผลสรุปคะแนน</h2>
      <ul className="space-y-2">
        {sorted.map((p, idx) => (
          <li
            key={p.id}
            className="flex justify-between items-center px-3 py-2 border rounded"
          >
            <span className="font-medium">{idx + 1}. {p.name}</span>
            <span className="text-sm text-gray-700">{wins[p.id]} ชนะ</span>
          </li>
        ))}
      </ul>
      <div className="flex space-x-2">
        <button
          onClick={onPlayAgain}
          className="flex-1 py-2 bg-black text-white rounded"
        >
          เล่นอีกครั้ง
        </button>
        <button
          onClick={onHome}
          className="flex-1 py-2 border rounded"
        >
          กลับหน้าหลัก
        </button>
      </div>
    </div>
  )
}
