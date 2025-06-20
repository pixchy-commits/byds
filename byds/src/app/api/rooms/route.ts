// POST /api/rooms
import { NextResponse } from 'next/server'
import { createRoom } from '@/lib/data'

export async function POST(req: Request) {
  const { name, maxPlayers, gameMode, category } = await req.json()
  const room = createRoom(name, maxPlayers, gameMode, category)
  return NextResponse.json(room)
}
