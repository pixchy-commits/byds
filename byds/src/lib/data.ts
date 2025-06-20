// src/lib/data.ts

import { Room, Player, GameMode } from './types'
import { randomUUID } from 'crypto'

// In-memory store of all rooms
const rooms = new Map<string, Room>()

/**
 * Create a new room
 */
export function createRoom(
  name: string,
  maxPlayers: number,
  gameMode: GameMode,
  category: string,
  totalRounds = 5
): Room {
  const id = randomUUID().slice(0, 6).toUpperCase()
  const room: Room = {
    id,
    name,
    maxPlayers,
    gameMode,
    category,
    players: [],
    currentRound: 1,
    totalRounds,
  }
  rooms.set(id, room)
  return room
}

/**
 * Fetch a room by ID
 */
export function getRoom(id: string): Room | undefined {
  return rooms.get(id)
}

/**
 * Add a player to the room
 */
export function joinRoom(
  roomId: string,
  playerName: string
): Player | null {
  const room = rooms.get(roomId)
  if (!room || room.players.length >= room.maxPlayers) return null

  const player: Player = {
    id: randomUUID(),
    name: playerName,
    lostRounds: [],
  }
  room.players.push(player)
  return player
}

/**
 * “Start” the game (for now just returns the room)
 */
export function startGame(roomId: string): Room | undefined {
  return rooms.get(roomId)
}
