// src/app/create-room/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { GameMode } from '@/lib/types'
import { getAvailableCategories } from '@/lib/gameData'

export default function CreateRoomPage() {
  const [name, setName] = useState('')
  const [maxPlayers, setMax] = useState(4)
  const [gameMode, setGameMode] = useState<GameMode>('พฤติกรรมต้องห้าม')
  const [category, setCat] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const modeParam = searchParams.get('mode')
    if (modeParam === 'คำต้องห้าม' || modeParam === 'พฤติกรรมต้องห้าม') {
      setGameMode(modeParam as GameMode)
    }
  }, [searchParams])

  const availableCategories = getAvailableCategories(gameMode)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const selectedCategory = category || availableCategories[0]
    const res = await fetch('/api/rooms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, maxPlayers, gameMode, category: selectedCategory }),
    })
    if (!res.ok) return alert('สร้างห้องไม่สำเร็จ')
    const room = await res.json()
    router.push(`/lobby/${room.id}`)
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              สร้างห้องเกม
            </h2>
            <p className="text-gray-600">เตรียมตัวให้พร้อมกับความสนุก!</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ชื่อห้อง</label>
              <input
                required
                placeholder="ใส่ชื่อห้องที่สนุกๆ"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">โหมดเกม</label>
              <div className="grid gap-4">
                <button
                  type="button"
                  onClick={() => setGameMode('พฤติกรรมต้องห้าม')}
                  className={`p-4 rounded-xl text-left transition-all ${
                    gameMode === 'พฤติกรรมต้องห้าม'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🎭</span>
                    <div>
                      <div className="font-bold">พฤติกรรมต้องห้าม</div>
                      <div className={`text-sm ${gameMode === 'พฤติกรรมต้องห้าม' ? 'text-purple-100' : 'text-gray-500'}`}>
                        เล่นตามสถานการณ์ แต่ห้ามใช้คำบางคำ
                      </div>
                    </div>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setGameMode('คำต้องห้าม')}
                  className={`p-4 rounded-xl text-left transition-all ${
                    gameMode === 'คำต้องห้าม'
                      ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg'
                      : 'border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🤐</span>
                    <div>
                      <div className="font-bold">คำต้องห้าม (สไตล์เทพลีลา)</div>
                      <div className={`text-sm ${gameMode === 'คำต้องห้าม' ? 'text-purple-100' : 'text-gray-500'}`}>
                        พูดในหัวข้อที่กำหนด แต่ห้ามใช้คำต้องห้าม
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">จำนวนผู้เล่น</label>
              <div className="flex space-x-2">
                {[2, 3, 4, 5, 6].map(n => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setMax(n)}
                    className={`flex-1 py-3 rounded-xl text-center font-semibold transition-all ${
                      maxPlayers === n
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                        : 'border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 text-gray-700'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">หมวดหมู่</label>
              <select
                value={category}
                onChange={e => setCat(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              >
                <option value="">เลือกหมวดหมู่...</option>
                {availableCategories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              สร้างห้อง 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
