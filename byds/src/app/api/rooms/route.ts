// POST /api/rooms
import { NextResponse } from 'next/server'
import { createRoom } from '@/lib/data'

export async function POST(req: Request) {
  const { name, maxPlayers, category } = await req.json()
  const room = createRoom(name, maxPlayers, category)
  return NextResponse.json(room)
}
