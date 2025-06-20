// GET /api/rooms/:roomId
import { NextResponse } from 'next/server'
import { getRoom } from '@/lib/data'

export async function GET(
  req: Request,
  { params }: { params: { roomId: string } }
) {
  const room = getRoom(params.roomId)
  if (!room) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(room)
}
