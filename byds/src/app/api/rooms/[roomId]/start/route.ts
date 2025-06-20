// POST /api/rooms/:roomId/start
import { NextResponse } from 'next/server'
import { startGame } from '@/lib/data'

export async function POST(
  req: Request,
  { params }: { params: { roomId: string } }
) {
  const room = startGame(params.roomId)
  if (!room) return NextResponse.json({ error: 'Room not found' }, { status: 404 })
  return NextResponse.json(room)
}
