// src/components/GameRound.tsx
'use client'

import { Room } from '@/lib/types'

type GameRoundProps = {
  room: Room
  onLose: () => void
  onNext: () => void
  scenario: string
  isLastRound: boolean
}

export default function GameRound({
  room,
  scenario,
  onLose,
  onNext,
  isLastRound,
}: GameRoundProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">
        รอบที่ {room.currentRound} / {room.totalRounds}
      </h2>
      <div className="p-4 border rounded bg-white">
        <p className="italic text-center">{scenario}</p>
      </div>
      <button
        onClick={onLose}
        className="w-full py-3 bg-red-500 text-white rounded"
      >
        ฉันแพ้
      </button>
      <button
        onClick={onNext}
        className="w-full py-3 bg-black text-white rounded"
      >
        {isLastRound ? 'ดูผลสรุป' : 'ถัดไป'}
      </button>
    </div>
  )
}
