// src/app/join-room/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function JoinRoomPage() {
  const [roomId, setRoomId] = useState('')
  const [playerName, setPlayerName] = useState('')
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch(`/api/rooms/${roomId}/join`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ playerName }),
    })
    if (!res.ok) return alert('เข้าห้องไม่สำเร็จ กรุณาตรวจสอบรหัสห้อง')
    const player = await res.json()
    localStorage.setItem(`player_${roomId}`, JSON.stringify(player))
    router.push(`/lobby/${roomId}`)
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">🚪</span>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              เข้าร่วมห้องเกม
            </h2>
            <p className="text-gray-600">ใส่รหัสห้องเพื่อเข้าร่วมเกม</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">รหัสห้อง</label>
              <input
                required
                placeholder="ใส่รหัสห้อง (เช่น ABC123)"
                value={roomId}
                onChange={e => setRoomId(e.target.value.toUpperCase())}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-center text-lg font-mono"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ชื่อของคุณ</label>
              <input
                required
                placeholder="ใส่ชื่อที่จะแสดงในเกม"
                value={playerName}
                onChange={e => setPlayerName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              เข้าห้อง 🎮
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm mb-4">ยังไม่มีห้อง?</p>
            <button
              onClick={() => router.push('/create-room')}
              className="text-purple-600 hover:text-purple-700 font-medium underline"
            >
              สร้างห้องใหม่
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
