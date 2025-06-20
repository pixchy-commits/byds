// src/lib/types.ts

export type Player = {
  id: string;
  name: string;
  lostRounds: number[];    // which rounds this player has lost
};

export type GameMode = 'พฤติกรรมต้องห้าม' | 'คำต้องห้าม';

export type Room = {
  id: string;
  name: string;            // room name (e.g. "BYDS001")
  maxPlayers: number;      // 2–6
  gameMode: GameMode;      // game type
  category: string;        // preset task category
  players: Player[];
  currentRound: number;
  totalRounds: number;
};

export type Scenario = {
  id: string;
  text: string;
  category: string;
  gameMode: GameMode;
  forbiddenWords?: string[]; // for คำต้องห้าม mode
};
