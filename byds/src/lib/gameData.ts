// src/lib/gameData.ts

import { Scenario } from './types';

// Forbidden Behavior scenarios (พฤติกรรมต้องห้าม)
export const forbiddenBehaviorScenarios: Scenario[] = [
  // Gaming scenarios inspired by Thepleela
  {
    id: 'fb_game_1',
    text: 'เล่นเกมแล้วต้องใช้คำสั่งภาษาอังกฤษ แต่ห้ามพูด "GG", "OP", "Noob", "Lag" และ "AFK"',
    category: 'เกม',
    gameMode: 'พฤติกรรมต้องห้าม',
    forbiddenWords: ['GG', 'OP', 'Noob', 'Lag', 'AFK']
  },
  {
    id: 'fb_game_2', 
    text: 'อธิบายวิธีเล่นเกม Mobile Legends แต่ห้ามพูด "Hero", "Lane", "Jungle", "Kill", "Tower"',
    category: 'เกม',
    gameMode: 'พฤติกรรมต้องห้าม',
    forbiddenWords: ['Hero', 'Lane', 'Jungle', 'Kill', 'Tower']
  },
  {
    id: 'fb_game_3',
    text: 'รีวิวเกม Genshin Impact แต่ห้ามพูด "Gacha", "Primogem", "Waifu", "Meta", "DPS"',
    category: 'เกม',
    gameMode: 'พฤติกรรมต้องห้าม',
    forbiddenWords: ['Gacha', 'Primogem', 'Waifu', 'Meta', 'DPS']
  },
  {
    id: 'fb_game_4',
    text: 'เล่าเรื่อง Minecraft แต่ห้ามพูด "Block", "Craft", "Mine", "Creeper", "Diamond"',
    category: 'เกม',
    gameMode: 'พฤติกรรมต้องห้าม',
    forbiddenWords: ['Block', 'Craft', 'Mine', 'Creeper', 'Diamond']
  },
  {
    id: 'fb_game_5',
    text: 'พูดถึง Battle Royale แต่ห้ามพูด "Zone", "Drop", "Loot", "Squad", "Victory"',
    category: 'เกม',
    gameMode: 'พฤติกรรมต้องห้าม',
    forbiddenWords: ['Zone', 'Drop', 'Loot', 'Squad', 'Victory']
  },

  // Food scenarios
  {
    id: 'fb_food_1',
    text: 'สอนทำส้มตำ แต่ห้ามพูด "มะละกอ", "น้ำปลา", "มะขาม", "พริก", "กะปิ"',
    category: 'อาหาร',
    gameMode: 'พฤติกรรมต้องห้าม',
    forbiddenWords: ['มะละกอ', 'น้ำปลา', 'มะขาม', 'พริก', 'กะปิ']
  },
  {
    id: 'fb_food_2',
    text: 'อธิบายวิธีทำผัดไทย แต่ห้ามพูด "เส้น", "ไข่", "ถั่ว", "กุ้ง", "น้ำตาล"',
    category: 'อาหาร',
    gameMode: 'พฤติกรรมต้องห้าม',
    forbiddenWords: ['เส้น', 'ไข่', 'ถั่ว', 'กุ้ง', 'น้ำตาล']
  },
  {
    id: 'fb_food_3',
    text: 'แนะนำร้านอาหารญี่ปุ่น แต่ห้ามพูด "ซูชิ", "ราเมน", "เทมปุระ", "วาซาบิ", "โซยุ"',
    category: 'อาหาร',
    gameMode: 'พฤติกรรมต้องห้าม',
    forbiddenWords: ['ซูชิ', 'ราเมน', 'เทมปุระ', 'วาซาบิ', 'โซยุ']
  },

  // Travel scenarios
  {
    id: 'fb_travel_1',
    text: 'แนะนำที่เที่ยวเชียงใหม่ แต่ห้ามพูด "ดอย", "วัด", "ตลาด", "กาแฟ", "ช้าง"',
    category: 'ท่องเที่ยว',
    gameMode: 'พฤติกรรมต้องห้าม',
    forbiddenWords: ['ดอย', 'วัด', 'ตลาด', 'กาแฟ', 'ช้าง']
  },
  {
    id: 'fb_travel_2',
    text: 'เล่าประสบการณ์เที่ยวทะเล แต่ห้ามพูด "หาด", "คลื่น", "ดำน้ำ", "ปลา", "เรือ"',
    category: 'ท่องเที่ยว',
    gameMode: 'พฤติกรรมต้องห้าม',
    forbiddenWords: ['หาด', 'คลื่น', 'ดำน้ำ', 'ปลา', 'เรือ']
  },

  // Entertainment scenarios inspired by Thepleela content
  {
    id: 'fb_ent_1',
    text: 'รีวิวหนังสยองขวัญ แต่ห้ามพูด "ผี", "สยอง", "กลัว", "เลือด", "ตาย"',
    category: 'บันเทิง',
    gameMode: 'พฤติกรรมต้องห้าม',
    forbiddenWords: ['ผี', 'สยอง', 'กลัว', 'เลือด', 'ตาย']
  },
  {
    id: 'fb_ent_2',
    text: 'พูดถึงซีรีย์เกาหลี แต่ห้ามพูด "โอปป้า", "รัก", "น้ำตา", "หล่อ", "สวย"',
    category: 'บันเทิง',
    gameMode: 'พฤติกรรมต้องห้าม',
    forbiddenWords: ['โอปป้า', 'รัก', 'น้ำตา', 'หล่อ', 'สวย']
  },
];

// Forbidden Words scenarios (คำต้องห้าม)
export const forbiddenWordsScenarios: Scenario[] = [
  // Simple topic-based forbidden words
  {
    id: 'fw_animal_1',
    text: 'พูดเรื่องสัตว์เลี้ยง',
    category: 'สัตว์',
    gameMode: 'คำต้องห้าม',
    forbiddenWords: ['หมา', 'แมว', 'ปลา', 'นก', 'หนู']
  },
  {
    id: 'fw_tech_1',
    text: 'คุยเรื่องโทรศัพท์มือถือ',
    category: 'เทคโนโลยี',
    gameMode: 'คำต้องห้าม',
    forbiddenWords: ['iPhone', 'Samsung', 'Android', 'iOS', 'แอป']
  },
  {
    id: 'fw_food_1',
    text: 'คุยเรื่องอาหารไทย',
    category: 'อาหาร',
    gameMode: 'คำต้องห้าม',
    forbiddenWords: ['ข้าว', 'แกง', 'ต้มยำ', 'ผัด', 'ย่าง']
  },
  {
    id: 'fw_sport_1',
    text: 'พูดเรื่องฟุตบอล',
    category: 'กีฬา',
    gameMode: 'คำต้องห้าม',
    forbiddenWords: ['ลูก', 'ประตู', 'ผู้เล่น', 'แข่ง', 'ชนะ']
  },
  {
    id: 'fw_weather_1',
    text: 'คุยเรื่องสภาพอากาศ',
    category: 'ธรรมชาติ',
    gameMode: 'คำต้องห้าม',
    forbiddenWords: ['ฝน', 'แดด', 'ร้อน', 'เย็น', 'ลม']
  },
  {
    id: 'fw_school_1',
    text: 'เล่าเรื่องโรงเรียน',
    category: 'การศึกษา',
    gameMode: 'คำต้องห้าม',
    forbiddenWords: ['ครู', 'นักเรียน', 'สอบ', 'เรียน', 'คะแนน']
  },
  {
    id: 'fw_home_1',
    text: 'อธิบายเรื่องบ้าน',
    category: 'ที่อยู่อาศัย',
    gameMode: 'คำต้องห้าม',
    forbiddenWords: ['ห้อง', 'ประตู', 'หน้าต่าง', 'เตียง', 'โต๊ะ']
  },
  {
    id: 'fw_game_thepleela_1',
    text: 'พูดเรื่องเกมออนไลน์ (สไตล์เทพลีลา)',
    category: 'เกม',
    gameMode: 'คำต้องห้าม',
    forbiddenWords: ['เล่น', 'เกม', 'ชนะ', 'แพ้', 'สกิล']
  },
  {
    id: 'fw_content_thepleela_1',
    text: 'พูดเรื่องการทำคอนเทนต์ (สไตล์เทพลีลา)',
    category: 'บันเทิง',
    gameMode: 'คำต้องห้าม',
    forbiddenWords: ['วิดีโอ', 'ยูทูบ', 'ฟอลโลว์', 'ไลค์', 'คอมเมนต์']
  },
  {
    id: 'fw_horror_thepleela_1',
    text: 'เล่าเรื่องสยองขวัญ (สไตล์เทพลีลา)',
    category: 'สยองขวัญ',
    gameMode: 'คำต้องห้าม',
    forbiddenWords: ['ผี', 'หลอน', 'กลัว', 'เสียง', 'มืด']
  }
];

export function getScenariosByGameMode(gameMode: 'พฤติกรรมต้องห้าม' | 'คำต้องห้าม', category?: string): Scenario[] {
  const scenarios = gameMode === 'พฤติกรรมต้องห้าม' ? forbiddenBehaviorScenarios : forbiddenWordsScenarios;
  
  if (category) {
    return scenarios.filter(s => s.category === category);
  }
  
  return scenarios;
}

export function getRandomScenario(gameMode: 'พฤติกรรมต้องห้าม' | 'คำต้องห้าม', category?: string): Scenario {
  const scenarios = getScenariosByGameMode(gameMode, category);
  return scenarios[Math.floor(Math.random() * scenarios.length)];
}

export function getAvailableCategories(gameMode: 'พฤติกรรมต้องห้าม' | 'คำต้องห้าม'): string[] {
  const scenarios = getScenariosByGameMode(gameMode);
  return [...new Set(scenarios.map(s => s.category))];
}
