// src/components/Lobby.tsx
'use client'

import { Room, Player } from '@/lib/types'

type LobbyProps = {
  room: Room
  onStart: () => void
}

export default function Lobby({ room, onStart }: LobbyProps) {
  return (
    <div className="space-y-4">
      <div className="text-center space-y-2">
        <h2 className="text-lg font-semibold">ห้อง: {room.name}</h2>
        <div className="text-sm text-gray-600 space-y-1">
          <div>โหมด: <span className="font-medium">{room.gameMode}</span></div>
          <div>หมวดหมู่: <span className="font-medium">{room.category}</span></div>
          <div>จำนวนรอบ: <span className="font-medium">{room.totalRounds} รอบ</span></div>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="font-medium">ผู้เล่น ({room.players.length}/{room.maxPlayers})</h3>
        <ul className="space-y-1">
          {room.players.map((p: Player, idx: number) => (
            <li key={p.id} className="flex items-center px-3 py-2 border rounded">
              <span className="w-6 font-medium">{idx + 1}.</span>
              <span className="ml-2">{p.name}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {room.players.length === room.maxPlayers && (
        <button
          onClick={onStart}
          className="w-full py-3 bg-black text-white rounded hover:opacity-90"
        >
          เริ่มเกม 🎮
        </button>
      )}
      {room.players.length < room.maxPlayers && (
        <p className="text-center text-sm text-gray-600 py-4">
          รอผู้เล่นอีก {room.maxPlayers - room.players.length} คน…
        </p>
      )}
    </div>
  )
}
