// src/components/GameRound.tsx
'use client'

import { Room, Scenario } from '@/lib/types'

type GameRoundProps = {
  room: Room
  onLose: () => void
  onNext: () => void
  scenario: Scenario
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
      <div className="text-center">
        <h2 className="text-lg font-semibold">
          รอบที่ {room.currentRound} / {room.totalRounds}
        </h2>
        <div className="text-sm text-gray-600 mt-1">
          โหมด: {room.gameMode}
        </div>
      </div>
      
      <div className="p-4 border rounded bg-white space-y-3">
        <div className="text-center">
          <div className="text-sm font-medium text-gray-700 mb-2">
            หมวดหมู่: {scenario.category}
          </div>
          <p className="italic text-lg">{scenario.text}</p>
        </div>
        
        {scenario.forbiddenWords && scenario.forbiddenWords.length > 0 && (
          <div className="mt-4 p-3 bg-red-50 rounded-lg">
            <h4 className="font-medium text-red-800 mb-2">
              {scenario.gameMode === 'คำต้องห้าม' ? 'คำต้องห้าม:' : 'คำที่ห้ามใช้:'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {scenario.forbiddenWords.map((word, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-red-200 text-red-800 rounded text-sm font-medium"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <button
          onClick={onLose}
          className="w-full py-3 bg-red-500 text-white rounded hover:bg-red-600"
        >
          ฉันแพ้แล้ว 😭
        </button>
        <button
          onClick={onNext}
          className="w-full py-3 bg-black text-white rounded hover:opacity-90"
        >
          {isLastRound ? 'ดูผลสรุป 🎉' : 'ถัดไป ➡️'}
        </button>
      </div>
    </div>
  )
}
