// POST /api/rooms/:roomId/join
import { NextResponse } from 'next/server'
import { joinRoom } from '@/lib/data'

export async function POST(
  req: Request,
  { params }: { params: { roomId: string } }
) {
  const { playerName } = await req.json()
  const player = joinRoom(params.roomId, playerName)
  if (!player) return NextResponse.json({ error: 'Unable to join' }, { status: 400 })
  return NextResponse.json(player)
}
