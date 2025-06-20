// src/lib/types.ts

export type Player = {
  id: string;
  name: string;
  lostRounds: number[];    // which rounds this player has lost
};

export type Room = {
  id: string;
  name: string;            // room name (e.g. “BYDS001”)
  maxPlayers: number;      // 2–6
  category: string;        // preset task category
  players: Player[];
  currentRound: number;
  totalRounds: number;
};
