// src/app/game/[roomId]/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Room, Player, Scenario } from '@/lib/types'
import { getRandomScenario } from '@/lib/gameData'
import GameRound from '@/components/GameRound'
import Scoreboard from '@/components/Scoreboard'

export default function GamePage() {
  const { roomId } = useParams<{ roomId: string }>()
  const [room, setRoom] = useState<Room | null>(null)
  const [me, setMe] = useState<Player | null>(null)
  const [scenario, setScenario] = useState<Scenario | null>(null)
  const [showScoreboard, setShowScoreboard] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const stored = localStorage.getItem(`player_${roomId}`)
    if (stored) setMe(JSON.parse(stored))
    
    const fetchState = async () => {
      const res = await fetch(`/api/rooms/${roomId}/state`)
      if (res.ok) setRoom(await res.json())
    }
    
    fetchState()
    const iv = setInterval(fetchState, 2000)
    return () => clearInterval(iv)
  }, [roomId])

  useEffect(() => {
    if (room && !scenario) {
      const newScenario = getRandomScenario(room.gameMode, room.category)
      setScenario(newScenario)
    }
  }, [room, scenario])

  function handleLose() {
    if (!me || !room) return
    alert(`${me.name} แพ้ในรอบที่ ${room.currentRound}! 😭`)
    // In a real implementation, you'd update the server
    handleNext()
  }

  function handleNext() {
    if (!room) return
    if (room.currentRound >= room.totalRounds) {
      setShowScoreboard(true)
    } else {
      // Generate new scenario for next round
      const newScenario = getRandomScenario(room.gameMode, room.category)
      setScenario(newScenario)
      // In a real implementation, you'd advance the round on the server
    }
  }

  if (!room) return <p className="text-center">กำลังโหลดเกม…</p>
  if (!me) return <p className="text-center">ข้อมูลผู้เล่นไม่พบ กรุณาเข้าห้องใหม่</p>
  if (!scenario) return <p className="text-center">กำลังสร้างสถานการณ์…</p>

  if (showScoreboard) {
    return (
      <div className="bg-white border border-gray-300 rounded-lg shadow p-6">
        <Scoreboard 
          room={room} 
          onPlayAgain={() => setShowScoreboard(false)}
          onHome={() => router.push('/')}
        />
      </div>
    )
  }

  const isLastRound = room.currentRound === room.totalRounds

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow p-6">
      <GameRound
        room={room}
        scenario={scenario}
        onLose={handleLose}
        onNext={handleNext}
        isLastRound={isLastRound}
      />
    </div>
  )
}
