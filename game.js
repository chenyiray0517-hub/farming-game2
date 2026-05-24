// ══════════════════════════════════════════
//  GAME DATA
// ══════════════════════════════════════════

const CROPS = {
  // ── 普通 ──────────────────────────────────
  potato:      { id: 'potato',      name: '馬鈴薯', emoji: '🥔', cost: 6,  sell: 16,  days: 2, xp: 4,  minLevel: 1,   seasons: [0, 2],    rarity: 'common'  },
  wheat:       { id: 'wheat',       name: '小麥',   emoji: '🌾', cost: 5,  sell: 14,  days: 2, xp: 3,  minLevel: 2,   seasons: [0, 1],    rarity: 'common'  },
  radish:      { id: 'radish',      name: '蘿蔔',   emoji: '🥬', cost: 10, sell: 28,  days: 2, xp: 7,  minLevel: 4,   seasons: [0, 2],    rarity: 'common'  },
  garlic:      { id: 'garlic',      name: '大蒜',   emoji: '🧄', cost: 9,  sell: 25,  days: 2, xp: 6,  minLevel: 7,   seasons: [3, 0],    rarity: 'common'  },
  cauliflower: { id: 'cauliflower', name: '花椰菜', emoji: '🥦', cost: 8,  sell: 20,  days: 2, xp: 5,  minLevel: 11,  seasons: [2, 3],    rarity: 'common'  },
  sweetpotato: { id: 'sweetpotato', name: '地瓜',   emoji: '🍠', cost: 12, sell: 33,  days: 3, xp: 8,  minLevel: 15,  seasons: [2],       rarity: 'common'  },
  mushroom:    { id: 'mushroom',    name: '蘑菇',   emoji: '🍄', cost: 11, sell: 30,  days: 2, xp: 7,  minLevel: 18,  seasons: [2, 3],    rarity: 'common'  },
  // ── 優良 ──────────────────────────────────
  onion:       { id: 'onion',       name: '洋蔥',   emoji: '🧅', cost: 14, sell: 38,  days: 3, xp: 10, minLevel: 14,  seasons: [0, 3],    rarity: 'good'    },
  chili:       { id: 'chili',       name: '辣椒',   emoji: '🌶️', cost: 16, sell: 45,  days: 3, xp: 12, minLevel: 17,  seasons: [1],       rarity: 'good'    },
  carrot:      { id: 'carrot',      name: '胡蘿蔔', emoji: '🥕', cost: 18, sell: 50,  days: 3, xp: 13, minLevel: 21,  seasons: [2, 3],    rarity: 'good'    },
  bellpepper:  { id: 'bellpepper',  name: '青椒',   emoji: '🫑', cost: 19, sell: 54,  days: 3, xp: 14, minLevel: 29,  seasons: [1],       rarity: 'good'    },
  pea:         { id: 'pea',         name: '豌豆',   emoji: '🫛', cost: 20, sell: 56,  days: 3, xp: 15, minLevel: 32,  seasons: [0],       rarity: 'good'    },
  corn:        { id: 'corn',        name: '玉米',   emoji: '🌽', cost: 25, sell: 70,  days: 4, xp: 20, minLevel: 36,  seasons: [1],       rarity: 'good'    },
  eggplant:    { id: 'eggplant',    name: '茄子',   emoji: '🍆', cost: 24, sell: 68,  days: 4, xp: 19, minLevel: 43,  seasons: [1, 2],    rarity: 'good'    },
  edamame:     { id: 'edamame',     name: '毛豆',   emoji: '🫘', cost: 21, sell: 60,  days: 4, xp: 17, minLevel: 48,  seasons: [1],       rarity: 'good'    },
  cucumber:    { id: 'cucumber',    name: '小黃瓜', emoji: '🥒', cost: 22, sell: 65,  days: 4, xp: 18, minLevel: 54,  seasons: [1],       rarity: 'good'    },
  // ── 高級 ──────────────────────────────────
  strawberry:  { id: 'strawberry',  name: '草莓',   emoji: '🍓', cost: 30, sell: 85,  days: 9,  xp: 25, minLevel: 64,  seasons: [0],       rarity: 'premium' },
  cherry:      { id: 'cherry',      name: '櫻桃',   emoji: '🍒', cost: 32, sell: 90,  days: 10, xp: 27, minLevel: 67,  seasons: [0],       rarity: 'premium' },
  grape:       { id: 'grape',       name: '葡萄',   emoji: '🍇', cost: 38, sell: 108, days: 11, xp: 33, minLevel: 71,  seasons: [2],       rarity: 'premium' },
  blueberry:   { id: 'blueberry',   name: '藍莓',   emoji: '🫐', cost: 40, sell: 114, days: 12, xp: 35, minLevel: 75,  seasons: [1, 2],    rarity: 'premium' },
  tomato:      { id: 'tomato',      name: '番茄',   emoji: '🍅', cost: 35, sell: 95,  days: 12, xp: 28, minLevel: 79,  seasons: [1],       rarity: 'premium' },
  watermelon:  { id: 'watermelon',  name: '西瓜',   emoji: '🍉', cost: 42, sell: 120, days: 14, xp: 37, minLevel: 86,  seasons: [1],       rarity: 'premium' },
  peach:       { id: 'peach',       name: '桃子',   emoji: '🍑', cost: 43, sell: 120, days: 15, xp: 38, minLevel: 93,  seasons: [0, 1],    rarity: 'premium' },
  pumpkin:     { id: 'pumpkin',     name: '南瓜',     emoji: '🎃', cost: 45,  sell: 125, days: 18, xp: 40,  minLevel: 100, seasons: [2],    rarity: 'premium'  },
  // ── 傳奇 ──────────────────────────────────
  tulip:       { id: 'tulip',       name: '仙鬱金香', emoji: '🌷', cost: 60,  sell: 168, days: 20, xp: 55,  minLevel: 110, seasons: [0],    rarity: 'legendary' },
  mango:       { id: 'mango',       name: '神芒',     emoji: '🥭', cost: 75,  sell: 210, days: 24, xp: 70,  minLevel: 130, seasons: [1],    rarity: 'legendary' },
  lotus:       { id: 'lotus',       name: '靈蓮',     emoji: '🪷', cost: 90,  sell: 252, days: 27, xp: 85,  minLevel: 150, seasons: [0, 1], rarity: 'legendary' },
  pineapple:   { id: 'pineapple',   name: '龍息果',   emoji: '🍍', cost: 110, sell: 308, days: 31, xp: 105, minLevel: 175, seasons: [1],    rarity: 'legendary' },
  rose:        { id: 'rose',        name: '帝王薔薇', emoji: '🌹', cost: 135, sell: 378, days: 35, xp: 130, minLevel: 200, seasons: [0],    rarity: 'legendary' },
};

const PET_TYPES = [
  // ── 普通 ────────────────────────────────────────────────────────────────────
  { id: 'chick',    name: '小雞',   emoji: '🐤', grade: 'common',  favCrop: 'cauliflower', xpBase: 10, buff: { type: 'shopDiscount', value: 0.1,  icon: '🛒', label: '種子費用 -10%'    } },
  { id: 'duck',     name: '小鴨',   emoji: '🦆', grade: 'common',  favCrop: 'radish',      xpBase: 10, buff: { type: 'noWither',     value: true, icon: '💧', label: '1天不澆水不會枯死' } },
  { id: 'frog',     name: '青蛙',   emoji: '🐸', grade: 'common',  favCrop: 'cucumber',    xpBase: 15, buff: { type: 'sellBonus',    value: 0.15, icon: '💰', label: '販售收益 +15%'    } },
  { id: 'cat',      name: '小貓',   emoji: '🐱', grade: 'common',  favCrop: 'strawberry',  xpBase: 15, buff: { type: 'xpBonus',      value: 0.3,  icon: '⭐', label: '採收 XP +30%'     } },
  { id: 'mouse',    name: '小鼠',   emoji: '🐭', grade: 'common',  favCrop: 'potato',      xpBase: 12, buff: { type: 'shopDiscount', value: 0.08, icon: '🛒', label: '種子費用 -8%'     } },
  { id: 'bee',      name: '蜜蜂',   emoji: '🐝', grade: 'common',  favCrop: 'bellpepper',  xpBase: 12, buff: { type: 'sellBonus',    value: 0.12, icon: '💰', label: '販售收益 +12%'    } },
  // ── 優良 ────────────────────────────────────────────────────────────────────
  { id: 'rabbit',   name: '小兔',   emoji: '🐰', grade: 'good',    favCrop: 'radish',      xpBase: 15, buff: { type: 'shopDiscount', value: 0.15, icon: '🛒', label: '種子費用 -15%'    } },
  { id: 'dog',      name: '小狗',   emoji: '🐶', grade: 'good',    favCrop: 'carrot',      xpBase: 15, buff: { type: 'extraGrowth',  value: 1,    icon: '🌱', label: '每天多成長 1 天'  } },
  { id: 'squirrel', name: '松鼠',   emoji: '🐿️', grade: 'good',    favCrop: 'corn',        xpBase: 15, buff: { type: 'shopDiscount', value: 0.2,  icon: '🛒', label: '種子費用 -20%'    } },
  { id: 'fox',      name: '小狐',   emoji: '🦊', grade: 'good',    favCrop: 'corn',        xpBase: 20, buff: { type: 'sellBonus',    value: 0.25, icon: '💰', label: '販售收益 +25%'    } },
  { id: 'deer',     name: '小鹿',   emoji: '🦌', grade: 'good',    favCrop: 'corn',        xpBase: 20, buff: { type: 'extraGrowth',  value: 1,    icon: '🌱', label: '每天多成長 1 天'  } },
  { id: 'hedgehog', name: '刺蝟',   emoji: '🦔', grade: 'good',    favCrop: 'strawberry',  xpBase: 20, buff: { type: 'sellBonus',    value: 0.2,  icon: '💰', label: '販售收益 +20%'    } },
  { id: 'otter',    name: '水獺',   emoji: '🦦', grade: 'good',    favCrop: 'mushroom',    xpBase: 18, buff: { type: 'noWither',     value: true, icon: '💧', label: '1天不澆水不會枯死' } },
  { id: 'swan',     name: '天鵝',   emoji: '🦢', grade: 'good',    favCrop: 'grape',       xpBase: 18, buff: { type: 'xpBonus',      value: 0.35, icon: '⭐', label: '採收 XP +35%'     } },
  // ── 高級 ────────────────────────────────────────────────────────────────────
  { id: 'owl',      name: '貓頭鷹', emoji: '🦉', grade: 'premium', favCrop: 'onion',       xpBase: 20, buff: { type: 'xpBonus',      value: 0.4,  icon: '⭐', label: '採收 XP +40%'     }, buff2: { type: 'shopDiscount', value: 0.15, icon: '🛒', label: '種子費用 -15%'    } },
  { id: 'panda',    name: '熊貓',   emoji: '🐼', grade: 'premium', favCrop: 'cauliflower', xpBase: 20, buff: { type: 'xpBonus',      value: 0.5,  icon: '⭐', label: '採收 XP +50%'     }, buff2: { type: 'sellBonus',    value: 0.15, icon: '💰', label: '販售收益 +15%'    } },
  { id: 'bear',     name: '小熊',   emoji: '🐻', grade: 'premium', favCrop: 'pumpkin',     xpBase: 25, buff: { type: 'noWither',     value: true, icon: '💧', label: '1天不澆水不會枯死' }, buff2: { type: 'sellBonus',    value: 0.2,  icon: '💰', label: '販售收益 +20%'    } },
  { id: 'koala',    name: '無尾熊', emoji: '🐨', grade: 'premium', favCrop: 'cucumber',    xpBase: 25, buff: { type: 'noWither',     value: true, icon: '💧', label: '1天不澆水不會枯死' }, buff2: { type: 'extraGrowth',  value: 1,    icon: '🌱', label: '每天多成長 1 天'  } },
  { id: 'tiger',    name: '小虎',   emoji: '🐯', grade: 'premium', favCrop: 'tomato',      xpBase: 30, buff: { type: 'sellBonus',    value: 0.35, icon: '💰', label: '販售收益 +35%'    }, buff2: { type: 'xpBonus',      value: 0.2,  icon: '⭐', label: '採收 XP +20%'     } },
  { id: 'lion',     name: '小獅',   emoji: '🦁', grade: 'premium', favCrop: 'watermelon',  xpBase: 28, buff: { type: 'sellBonus',    value: 0.3,  icon: '💰', label: '販售收益 +30%'    }, buff2: { type: 'extraGrowth',  value: 1,    icon: '🌱', label: '每天多成長 1 天'  } },
  { id: 'dragon',   name: '小龍',   emoji: '🐉', grade: 'premium', favCrop: 'eggplant',    xpBase: 30, buff: { type: 'xpBonus',      value: 0.45, icon: '⭐', label: '採收 XP +45%'     }, buff2: { type: 'noWither',     value: true, icon: '💧', label: '1天不澆水不會枯死' } },
  // ── 傳奇 ────────────────────────────────────────────────────────────────────
  { id: 'phoenix',  name: '鳳凰',   emoji: '🐦‍🔥', grade: 'legendary', favCrop: 'rose',      xpBase: 60, foodRarities: ['legendary', 'mythical'], buff: { type: 'extraGrowth',  value: 2,    icon: '🌱', label: '每天多成長 2 天'  }, buff2: { type: 'xpBonus',      value: 0.4,  icon: '⭐', label: '採收 XP +40%'     }, buff3: { type: 'sellBonus',    value: 0.2,  icon: '💰', label: '販售收益 +20%'    } },
  { id: 'unicorn',  name: '獨角獸', emoji: '🦄',    grade: 'legendary', favCrop: 'lotus',     xpBase: 60, foodRarities: ['legendary', 'mythical'], buff: { type: 'xpBonus',      value: 0.7,  icon: '⭐', label: '採收 XP +70%'     }, buff2: { type: 'shopDiscount', value: 0.35, icon: '🛒', label: '種子費用 -35%'    }, buff3: { type: 'noWither',     value: true, icon: '💧', label: '1天不澆水不會枯死' } },
  { id: 'shenlong', name: '神龍',   emoji: '🐲',    grade: 'legendary', favCrop: 'pineapple', xpBase: 60, foodRarities: ['legendary', 'mythical'], buff: { type: 'sellBonus',    value: 0.6,  icon: '💰', label: '販售收益 +60%'    }, buff2: { type: 'noWither',     value: true, icon: '💧', label: '1天不澆水不會枯死' }, buff3: { type: 'extraGrowth',  value: 1,    icon: '🌱', label: '每天多成長 1 天'  } },
];

const PET_FEEDS = [
  { id: 'feed_xp',       name: '智慧飼料', emoji: '⭐', desc: '採收 XP +5%',      cost: 800,  buffType: 'xpBonus',      boost: 0.05 },
  { id: 'feed_sell',     name: '財富飼料', emoji: '💎', desc: '販售收益 +5%',     cost: 1000, buffType: 'sellBonus',    boost: 0.05 },
  { id: 'feed_discount', name: '節儉飼料', emoji: '🏷️', desc: '種子費用 -5%',     cost: 900,  buffType: 'shopDiscount', boost: 0.05 },
  { id: 'feed_growth',   name: '成長飼料', emoji: '🌱', desc: '每天多成長 +0.2 天', cost: 1200, buffType: 'extraGrowth',  boost: 0.2  },
];

const PET_EGGS = [
  {
    id: 'egg_common',
    name: '普通蛋', emoji: '🥚', cls: 'egg-common',
    cost: 20000,
    grades:  ['common', 'good'],
    weights: [70, 30],
    desc: '普通 70%・優良 30%',
  },
  {
    id: 'egg_rare',
    name: '稀有蛋', emoji: '🥚', cls: 'egg-rare',
    cost: 60000,
    grades:  ['good', 'premium', 'legendary'],
    weights: [64, 35, 1],
    desc: '優良 64%・高級 35%・傳奇 1%',
  },
  {
    id: 'egg_special',
    name: '特殊蛋', emoji: '🥚', cls: 'egg-special',
    cost: 150000,
    grades:  ['premium', 'legendary', 'mythical'],
    weights: [94, 5, 1],
    desc: '高級 94%・傳奇 5%・神話 1%',
  },
];

const EGG_FEED_COST = {
  common:    1000,
  good:      5000,
  premium:   10000,
  legendary: 50000,
  mythical:  100000,
};

const SEASONS       = ['春', '夏', '秋', '冬'];
const SEASON_CLASSES = ['spring', 'summer', 'autumn', 'winter'];
const SEASON_ICONS   = ['🌸', '☀️', '🍂', '❄️'];
const SEASON_LENGTH  = 7;

const WEATHERS = [
  { name: '晴天', icon: '☀️',  bonus: 0 },
  { name: '雨天', icon: '🌧️', bonus: 1 }, // crops grow an extra day; rain also auto-waters
  { name: '霧天', icon: '🌫️', bonus: 0 },
  { name: '陰天', icon: '⛅',  bonus: 0 },
];
const WEATHER_WEIGHTS = [0.4, 0.2, 0.2, 0.2];

const RARITIES = {
  common:    { name: '普通', color: '#757575', borderColor: '#bdbdbd', badgeBg: '#eeeeee', badgeColor: '#424242' },
  good:      { name: '優良', color: '#2e7d32', borderColor: '#66bb6a', badgeBg: '#e8f5e9', badgeColor: '#1b5e20' },
  premium:   { name: '高級', color: '#1565c0', borderColor: '#42a5f5', badgeBg: '#e3f2fd', badgeColor: '#0d47a1' },
  legendary: { name: '傳奇', color: '#6a1b9a', borderColor: '#ab47bc', badgeBg: '#f3e5f5', badgeColor: '#4a148c' },
  mythical:  { name: '神話', color: '#bf360c', borderColor: '#ff7043', badgeBg: '#fbe9e7', badgeColor: '#7f0000' },
};

const LEVEL_TITLES = [
  '',
  '農業新手', '農業初學', '業餘農夫', '農夫',   '熟練農夫',
  '資深農夫', '農場老手', '農場主人', '農業達人', '老農',
  '農業專家', '農業大師', '農業宗師', '農耕大師', '傳奇農夫',
  '農業至尊', '種田之神', '大地之主', '農業傳說', '萬世農神',
];

const COLS = 6;
const ROWS = 7;

function xpNeeded(level) { return level * 150 + 50; }

// ══════════════════════════════════════════
//  AUDIO / SFX
// ══════════════════════════════════════════

let sfxMuted        = localStorage.getItem('farm_sfx_muted') === '1';
let isTouchPlanting = false;

const SFX = (() => {
  let ctx = null;

  function ac() {
    if (!ctx) {
      try { ctx = new (window.AudioContext || window.webkitAudioContext)(); }
      catch (_) { return null; }
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function note(freq, dur, vol = 0.22, type = 'sine', delay = 0) {
    if (sfxMuted) return;
    const c = ac(); if (!c) return;
    const t = c.currentTime + delay;
    const osc = c.createOscillator(), g = c.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    osc.connect(g); g.connect(c.destination);
    osc.start(t); osc.stop(t + dur + 0.02);
  }

  function sweep(f1, f2, dur, vol = 0.18, type = 'sine', delay = 0) {
    if (sfxMuted) return;
    const c = ac(); if (!c) return;
    const t = c.currentTime + delay;
    const osc = c.createOscillator(), g = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(f1, t);
    osc.frequency.exponentialRampToValueAtTime(f2, t + dur);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    osc.connect(g); g.connect(c.destination);
    osc.start(t); osc.stop(t + dur + 0.02);
  }

  return {
    plant()       { note(220, 0.1, 0.2, 'triangle'); note(330, 0.08, 0.12, 'triangle', 0.05); },
    water()       { sweep(700, 250, 0.28, 0.15); sweep(500, 180, 0.22, 0.1, 'sine', 0.07); },
    harvest()     { note(523, 0.2, 0.22); note(659, 0.2, 0.2, 'sine', 0.08); note(784, 0.35, 0.25, 'sine', 0.16); },
    sell()        { [523, 659, 784].forEach((f, i) => note(f, 0.12, 0.2, 'triangle', i * 0.055)); },
    levelUp()     { [523, 659, 784, 1047].forEach((f, i) => note(f, 0.35, 0.28, 'sine', i * 0.1)); },
    petLevelUp()  { sweep(440, 880, 0.12, 0.22, 'triangle'); [659, 880, 1100].forEach((f, i) => note(f, 0.25, 0.2, 'triangle', 0.1 + i * 0.08)); },
    taskDone()    { note(784, 0.15, 0.22, 'sine'); note(1047, 0.3, 0.28, 'sine', 0.12); },
    endDay()      { note(349, 0.7, 0.22, 'sine'); note(440, 0.5, 0.18, 'sine', 0.22); },
    feedPet()     { note(880, 0.1, 0.18, 'sine'); note(1100, 0.15, 0.2, 'sine', 0.08); },
    eggFeed()     { sweep(300, 600, 0.15, 0.2, 'sine'); note(800, 0.2, 0.18, 'sine', 0.15); note(1000, 0.2, 0.2, 'sine', 0.28); },
    gacha()       { sweep(200, 1200, 0.35, 0.25, 'sawtooth'); note(1047, 0.4, 0.3, 'sine', 0.3); note(1319, 0.5, 0.28, 'sine', 0.45); },
    adopt()       { [659, 784, 1047, 1319].forEach((f, i) => note(f, 0.3, 0.22, 'sine', i * 0.08)); },
    error()       { note(130, 0.25, 0.22, 'square'); },
    wither()      { sweep(280, 130, 0.45, 0.18, 'sawtooth'); },
  };
})();

function toggleMute() {
  sfxMuted = !sfxMuted;
  localStorage.setItem('farm_sfx_muted', sfxMuted ? '1' : '0');
  document.getElementById('mute-btn').textContent = sfxMuted ? '🔇' : '🔊';
}

// ══════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════

function makePlot() {
  return { state: 'empty', cropId: null, daysLeft: 0, totalDays: 0, watered: false, dryDays: 0 };
}

const DEFAULT_STATE = () => ({
  day:      1,
  money:    100,
  level:    1,
  xp:       0,
  season:   0,
  weather:  0,
  mode:     'normal', // 'normal' | 'watering' | 'harvest'
  selectedSeed: null,
  activeTab:    'shop',
  grid: Array(COLS * ROWS).fill(null).map(makePlot),
  inventory:        {},
  totalHarvested:   0,
  totalEarned:      0,
  harvestedToday:   0,
  earnedToday:      0,
  boughtToday:      0,
  dailyTasksDone:   {},
  achievementsDone: {},
  dailyPets:        [],
  feedingPetIdx:    -1,
  viewingPetIdx:    -1,
  viewingOwnedId:   null,
  petLevels:        {},
  ownedPets:        [],
  activeBuffs: { xpBonus: 0, sellBonus: 0, shopDiscount: 0, extraGrowth: 0, noWither: false },
  feedInventory:  {},
  petFeedBoosts:  {},
  petFeedCounts:  {},
});

let G = DEFAULT_STATE();

// ══════════════════════════════════════════
//  TASK DEFINITIONS
// ══════════════════════════════════════════

function makeDailyTasks() {
  return [
    { id: 'daily_harvest3', title: '今日收穫 3 個作物',  target: 3,   key: 'harvestedToday', reward: { xp: 30,  money: 20  } },
    { id: 'daily_earn100',  title: '今日賺取 100 金幣',  target: 100, key: 'earnedToday',    reward: { xp: 20,  money: 0   } },
    { id: 'daily_buy2',     title: '今日購買 2 個種子',  target: 2,   key: 'boughtToday',    reward: { xp: 15,  money: 10  } },
  ];
}

function makeAchievements() {
  return [
    { id: 'ach_first_harvest', title: '第一次收穫',          target: 1,    key: 'totalHarvested', reward: { xp: 50,  money: 0   } },
    { id: 'ach_earn500',       title: '累計賺取 500 金幣',   target: 500,  key: 'totalEarned',    reward: { xp: 100, money: 50  } },
    { id: 'ach_harvest20',     title: '累計收穫 20 個作物',  target: 20,   key: 'totalHarvested', reward: { xp: 150, money: 100 } },
    { id: 'ach_harvest100',    title: '累計收穫 100 個作物', target: 100,  key: 'totalHarvested', reward: { xp: 500, money: 300 } },
    { id: 'ach_earn2000',      title: '累計賺取 2000 金幣',  target: 2000, key: 'totalEarned',    reward: { xp: 300, money: 200 } },
    { id: 'ach_lv5',           title: '達到 5 級',           target: 5,    key: 'level',          reward: { xp: 0,   money: 200 } },
    { id: 'ach_lv10',          title: '達到 10 級',          target: 10,   key: 'level',          reward: { xp: 0,   money: 500 } },
  ];
}

// ══════════════════════════════════════════
//  SAVE / LOAD
// ══════════════════════════════════════════

function save() {
  try { localStorage.setItem('farmGame_v2', JSON.stringify(G)); } catch(_) {}
}

function load() {
  try {
    const raw = localStorage.getItem('farmGame_v2');
    if (raw) {
      G = Object.assign(DEFAULT_STATE(), JSON.parse(raw));
      G.grid.forEach(p => {
        if (p.watered  === undefined) p.watered  = false;
        if (p.dryDays  === undefined) p.dryDays  = 0;
      });
    }
  } catch(_) { G = DEFAULT_STATE(); }
  G.feedingPetIdx  = -1; // always reset transient state
  G.viewingPetIdx  = -1;
  G.viewingOwnedId = null;
  if (!G.feedInventory) G.feedInventory = {};
  if (!G.petFeedBoosts) G.petFeedBoosts = {};
  if (!G.petFeedCounts) G.petFeedCounts = {};
  if (!G.dailyPets || G.dailyPets.length === 0) generateDailyPets();
  else reapplyBuffs(); // ensure owned pet buffs are active on save-load
}

// ══════════════════════════════════════════
//  CURSOR / MODE
// ══════════════════════════════════════════

const follower = document.getElementById('cursor-follow');

document.addEventListener('mousemove', e => {
  if (G.mode === 'normal') return;
  follower.style.left = e.clientX + 'px';
  follower.style.top  = e.clientY + 'px';
});

function setMode(newMode) {
  G.mode = (G.mode === newMode) ? 'normal' : newMode;
  updateCursor();
  renderBottomBar();
  save();
}

function updateCursor() {
  document.body.classList.toggle('watering-mode', G.mode === 'watering');
  document.body.classList.toggle('harvest-mode',  G.mode === 'harvest');

  if (G.mode === 'watering') {
    follower.textContent = '🪣';
    follower.style.display = 'block';
  } else if (G.mode === 'harvest') {
    follower.textContent = '🌾';
    follower.style.display = 'block';
  } else {
    follower.style.display = 'none';
  }
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && G.mode !== 'normal') {
    G.mode = 'normal';
    updateCursor();
    renderBottomBar();
    save();
  }
});

// ══════════════════════════════════════════
//  RENDER
// ══════════════════════════════════════════

function renderAll() {
  renderTopBar();
  renderGrid();
  renderPanel();
  renderBottomBar();
  renderBuffStrip();
}

function renderBuffStrip() {
  const strip = document.getElementById('buff-strip');
  if (!strip) return;
  const b = G.activeBuffs;
  const chips = [];
  if (b.xpBonus      > 0)   chips.push(`⭐ 採收 XP +${Math.round(b.xpBonus * 100)}%`);
  if (b.sellBonus    > 0)   chips.push(`💰 販售 +${Math.round(b.sellBonus * 100)}%`);
  if (b.shopDiscount > 0)   chips.push(`🛒 種子 -${Math.round(b.shopDiscount * 100)}%`);
  if (b.extraGrowth  > 0)   chips.push(`🌱 成長 +${b.extraGrowth}天/日`);
  if (b.noWither)           chips.push(`💧 1天不澆水可緩衝`);
  strip.innerHTML = chips.length
    ? chips.map(t => `<span class="buff-chip">${t}</span>`).join('')
    : '';
}

function renderTopBar() {
  document.getElementById('day-num').textContent   = G.day;
  document.getElementById('money-num').textContent = G.money;
  document.getElementById('lv-num').textContent    = G.level;
  document.getElementById('lv-title').textContent  = LEVEL_TITLES[Math.min(G.level, LEVEL_TITLES.length - 1)];

  const needed = xpNeeded(G.level);
  const pct    = Math.min((G.xp / needed) * 100, 100);
  document.getElementById('xp-bar').style.width = pct + '%';
  document.getElementById('xp-rem').textContent = needed - G.xp;

  const sb = document.getElementById('season-badge');
  sb.textContent = SEASON_ICONS[G.season] + ' ' + SEASONS[G.season];
  sb.className   = 'badge ' + SEASON_CLASSES[G.season];

  const w = WEATHERS[G.weather];
  document.getElementById('weather-badge').textContent = w.icon + ' ' + w.name;
}

function plotEmoji(plot) {
  if (plot.state !== 'growing') return '';
  const progress = 1 - plot.daysLeft / plot.totalDays;
  if (progress < 0.35) return '🌱';
  if (progress < 0.75) return '🌿';
  return CROPS[plot.cropId].emoji;
}

function renderGrid() {
  const grid = document.getElementById('farm-grid');
  grid.innerHTML = '';

  G.grid.forEach((plot, idx) => {
    const cell = document.createElement('div');
    cell.className = 'plot ' + plot.state + (plot.state === 'growing' && plot.watered ? ' watered' : '');
    cell.dataset.idx = idx;

    if (plot.state === 'growing') {
      cell.textContent = plotEmoji(plot);

      const dTag = document.createElement('span');
      dTag.className = 'days-tag';
      dTag.textContent = Math.round(plot.daysLeft) + '天';
      cell.appendChild(dTag);

    } else if (plot.state === 'ready') {
      cell.textContent = CROPS[plot.cropId].emoji;

    } else if (plot.state === 'withered') {
      cell.textContent = '🥀';
      cell.title = '點擊清除枯死的植物';

    } else if (plot.state === 'empty' && isTouchPlanting && G.selectedSeed) {
      const hint = document.createElement('span');
      hint.className = 'seed-hint';
      hint.textContent = CROPS[G.selectedSeed].emoji;
      cell.appendChild(hint);
    }

    grid.appendChild(cell);
  });
}

function renderPanel() {
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === G.activeTab);
  });
  const body = document.getElementById('panel-body');
  if      (G.activeTab === 'shop')      renderShop(body);
  else if (G.activeTab === 'warehouse') renderWarehouse(body);
  else if (G.activeTab === 'tasks')     renderTasks(body);
  else if (G.activeTab === 'petshop')   renderPetShop(body);
}

function renderBottomBar() {
  document.getElementById('water-btn').classList.toggle('active', G.mode === 'watering');
  document.getElementById('harvest-single-btn').classList.toggle('active', G.mode === 'harvest');
}

// ── Shop ──────────────────────────────────

function renderShop(el) {
  let html = '<div class="shop-hint">選好種子後，長按拖曳農地批量種植<br>非當季種植每天有 25% 枯死率</div>';

  ['common', 'good', 'premium', 'legendary', 'mythical'].forEach(rarityKey => {
    const crops = Object.values(CROPS).filter(c => c.rarity === rarityKey);
    if (!crops.length) return;

    const r = RARITIES[rarityKey];
    html += `<div class="rarity-section-title" style="color:${r.color};border-color:${r.borderColor}">${r.name}</div>`;

    crops.forEach(crop => {
      const locked      = G.level < crop.minLevel;
      const selected    = G.selectedSeed === crop.id;
      const inSeason    = crop.seasons.includes(G.season);
      const seasonIcons = crop.seasons.map(s => SEASON_ICONS[s]).join('');
      const cls = `seed-card rarity-${rarityKey}${locked ? ' locked' : ''}${selected ? ' selected' : ''}`;

      html += `
        <div class="${cls}" data-crop="${crop.id}">
          <span class="seed-emoji">${crop.emoji}</span>
          <div class="seed-info">
            <div class="seed-name">
              ${crop.name}
              <span class="rarity-badge" style="color:${r.badgeColor};background:${r.badgeBg}">${r.name}</span>
            </div>
            <div class="seed-days">${crop.days}天</div>
            <div class="seed-season ${inSeason ? 'in-season' : 'out-season'}">${seasonIcons} ${inSeason ? '當季' : '非當季⚠'}</div>
          </div>
          <div class="seed-prices">
            ${locked
              ? `<span class="lock-label">🔒 Lv.${crop.minLevel}</span>`
              : `<span class="seed-cost">-${crop.cost} 💰</span><span class="seed-sell">+${crop.sell} 💰</span>`}
          </div>
        </div>`;
    });
  });

  el.innerHTML = html;

  el.querySelectorAll('.seed-card:not(.locked)').forEach(card => {
    card.addEventListener('click', () => {
      G.selectedSeed = G.selectedSeed === card.dataset.crop ? null : card.dataset.crop;
      renderPanel();
    });
  });
}

// ── Warehouse ─────────────────────────────

function renderWarehouse(el) {
  const items = Object.entries(G.inventory);
  if (!items.length) {
    el.innerHTML = '<div class="empty-msg">倉庫是空的<br/>收穫作物後在這裡出售</div>';
    return;
  }

  let total = 0;
  let html  = '';

  items.forEach(([id, count]) => {
    const crop = CROPS[id];
    const val  = crop.sell * count;
    total += val;
    html += `
      <div class="inv-item">
        <span class="inv-emoji">${crop.emoji}</span>
        <div class="inv-info">
          <div class="inv-name">${crop.name}</div>
          <div class="inv-sub">x${count} &nbsp;(共 ${val} 💰)</div>
        </div>
        <button class="sell-btn" data-crop="${id}">出售</button>
      </div>`;
  });

  html += `<button class="sell-all-btn">全部出售 (+${total} 💰)</button>`;
  el.innerHTML = html;

  el.querySelectorAll('.sell-btn').forEach(b => b.addEventListener('click', () => showSellQtyModal(b.dataset.crop)));
  el.querySelector('.sell-all-btn').addEventListener('click', sellAll);
}

// ── Tasks ─────────────────────────────────

function renderTasks(el) {
  function taskHTML(tasks, doneMap) {
    return tasks.map(t => {
      const cur  = Math.min(taskStatValue(t.key), t.target);
      const done = !!doneMap[t.id];
      const pct  = Math.min((cur / t.target) * 100, 100);
      const cls  = done ? 'done' : (cur > 0 ? 'in-progress' : '');
      const rwd  = [t.reward.xp ? t.reward.xp + ' XP' : '', t.reward.money ? '+' + t.reward.money + ' 💰' : ''].filter(Boolean).join('  ');

      return `
        <div class="task-card ${cls}">
          <div class="task-title">${done ? '✅ ' : ''}${t.title}</div>
          <div class="task-prog-txt">${cur} / ${t.target}</div>
          <div class="task-prog-bar"><div class="task-prog-fill" style="width:${pct}%"></div></div>
          <div class="task-reward">獎勵: ${rwd}</div>
        </div>`;
    }).join('');
  }

  el.innerHTML = `
    <div class="task-section-title">📅 今日任務</div>
    ${taskHTML(makeDailyTasks(), G.dailyTasksDone)}
    <div class="task-section-title" style="margin-top:14px">🏆 成就</div>
    ${taskHTML(makeAchievements(), G.achievementsDone)}`;
}

function taskStatValue(key) {
  return { harvestedToday: G.harvestedToday, earnedToday: G.earnedToday, boughtToday: G.boughtToday, totalHarvested: G.totalHarvested, totalEarned: G.totalEarned, level: G.level }[key] ?? 0;
}

// ══════════════════════════════════════════
//  ACTIONS
// ══════════════════════════════════════════

function plantSeed(idx) {
  if (!G.selectedSeed) { showToast('請先在商店選擇種子'); return; }
  const plot = G.grid[idx];
  if (plot.state !== 'empty') return;

  const crop = CROPS[G.selectedSeed];
  const cost = Math.max(1, Math.round(crop.cost * (1 - G.activeBuffs.shopDiscount)));
  if (G.money < cost) { SFX.error(); showToast('💰 金幣不足！'); return; }

  SFX.plant();
  G.money -= cost;
  G.boughtToday++;

  plot.state     = 'growing';
  plot.cropId    = G.selectedSeed;
  plot.daysLeft  = crop.days;
  plot.totalDays = crop.days;
  plot.watered   = true; // freshly planted = already watered today
  plot.dryDays   = 0;

  checkTasks();
  save();
  renderAll();
}

function harvestPlot(idx) {
  const plot = G.grid[idx];
  if (plot.state !== 'ready') return;

  SFX.harvest();
  const crop = CROPS[plot.cropId];
  G.inventory[plot.cropId] = (G.inventory[plot.cropId] || 0) + 1;
  G.harvestedToday++;
  G.totalHarvested++;

  gainXP(crop.xp);

  Object.assign(plot, makePlot());

  showToast(`收穫 ${crop.emoji} ${crop.name}！ +${crop.xp} XP`);
  checkTasks();
  save();
  renderAll();
}

function harvestAll() {
  let count = 0;
  G.grid.forEach((plot, idx) => {
    if (plot.state !== 'ready') return;
    const crop = CROPS[plot.cropId];
    G.inventory[plot.cropId] = (G.inventory[plot.cropId] || 0) + 1;
    G.harvestedToday++;
    G.totalHarvested++;
    gainXP(crop.xp);
    Object.assign(plot, makePlot());
    count++;
  });

  if (count === 0) { showToast('目前沒有可收穫的作物'); return; }
  SFX.harvest();
  showToast(`🌾 全部收穫！共收穫 ${count} 個作物`);
  checkTasks();
  save();
  renderAll();
}

function waterPlot(idx) {
  const plot = G.grid[idx];
  if (plot.state !== 'growing' || plot.watered) return;
  SFX.water();
  plot.watered = true;
  save();
  renderGrid(); // lightweight re-render
}

function clearWithered(idx) {
  const plot = G.grid[idx];
  if (plot.state !== 'withered') return;
  Object.assign(plot, makePlot());
  save();
  renderGrid();
}

function sellCrop(cropId, qty) {
  const available = G.inventory[cropId] || 0;
  const count = (qty !== undefined) ? Math.min(qty, available) : available;
  if (!count) return;
  const crop   = CROPS[cropId];
  const earned = Math.round(crop.sell * count * (1 + G.activeBuffs.sellBonus));

  G.money       += earned;
  G.earnedToday += earned;
  G.totalEarned += earned;
  G.inventory[cropId] -= count;
  if (G.inventory[cropId] <= 0) delete G.inventory[cropId];

  SFX.sell();
  showToast(`出售 ${crop.emoji} ×${count}，獲得 +${earned} 💰`);
  checkTasks();
  save();
  renderAll();
}

function showSellQtyModal(cropId) {
  const crop = CROPS[cropId];
  const max  = G.inventory[cropId] || 0;
  if (!max) return;

  document.getElementById('sell-qty-modal')?.remove();

  const modal = document.createElement('div');
  modal.id = 'sell-qty-modal';
  let qty = 1;

  function renderModal() {
    const earned = Math.round(crop.sell * qty * (1 + G.activeBuffs.sellBonus));
    modal.innerHTML = `
      <div class="sqm-box">
        <div class="sqm-title">${crop.emoji} ${crop.name} 出售</div>
        <div class="sqm-stock">持有：${max} 個</div>
        <div class="sqm-controls">
          <button class="sqm-btn" id="sqm-minus">－</button>
          <span class="sqm-qty">${qty}</span>
          <button class="sqm-btn" id="sqm-plus">＋</button>
        </div>
        <div class="sqm-all-hint">或 <button class="sqm-max-btn" id="sqm-max">全部 (${max})</button></div>
        <div class="sqm-total">合計 +${earned} 💰</div>
        <div class="sqm-actions">
          <button class="sqm-cancel" id="sqm-cancel">取消</button>
          <button class="sqm-confirm" id="sqm-confirm">出售</button>
        </div>
      </div>`;
    modal.querySelector('#sqm-minus').onclick   = () => { qty = Math.max(1, qty - 1); renderModal(); };
    modal.querySelector('#sqm-plus').onclick    = () => { qty = Math.min(max, qty + 1); renderModal(); };
    modal.querySelector('#sqm-max').onclick     = () => { qty = max; renderModal(); };
    modal.querySelector('#sqm-cancel').onclick  = () => modal.remove();
    modal.querySelector('#sqm-confirm').onclick = () => { modal.remove(); sellCrop(cropId, qty); };
  }

  renderModal();
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}

function sellAll() {
  let total = 0;
  Object.entries(G.inventory).forEach(([id, count]) => {
    total += Math.round(CROPS[id].sell * count * (1 + G.activeBuffs.sellBonus));
  });
  if (!total) return;

  G.money       += total;
  G.earnedToday += total;
  G.totalEarned += total;
  G.inventory    = {};

  SFX.sell();
  showToast(`全部出售！獲得 +${total} 💰`);
  checkTasks();
  save();
  renderAll();
}

function gainXP(amount) {
  if (amount <= 0) return;
  amount = Math.round(amount * (1 + G.activeBuffs.xpBonus));
  G.xp += amount;
  while (G.xp >= xpNeeded(G.level)) {
    G.xp -= xpNeeded(G.level);
    G.level++;
    SFX.levelUp();
    const title = LEVEL_TITLES[Math.min(G.level, LEVEL_TITLES.length - 1)];
    showToast(`🎉 升級！現在是 Lv.${G.level} ${title}`, 3000);
    checkTasks();
  }
}

// ── Task checks ───────────────────────────

function checkTasks() {
  makeDailyTasks().forEach(t => {
    if (G.dailyTasksDone[t.id]) return;
    if (taskStatValue(t.key) >= t.target) {
      G.dailyTasksDone[t.id] = true;
      G.money += t.reward.money;
      gainXP(t.reward.xp);
      SFX.taskDone();
      showToast(`📅 任務完成：${t.title}！`, 3000);
    }
  });
  makeAchievements().forEach(t => {
    if (G.achievementsDone[t.id]) return;
    if (taskStatValue(t.key) >= t.target) {
      G.achievementsDone[t.id] = true;
      G.money += t.reward.money;
      gainXP(t.reward.xp);
      SFX.taskDone();
      showToast(`🏆 成就解鎖：${t.title}！`, 3500);
    }
  });
}

// ── End Day ───────────────────────────────

function endDay() {
  const rainDay = WEATHERS[G.weather].bonus > 0;

  // Wither or grow all crops
  let witheredCount = 0;
  let outOfSeasonCount = 0;
  G.grid.forEach(plot => {
    if (plot.state !== 'growing') return;

    const isDry = !plot.watered && !rainDay;
    if (isDry) {
      if (G.activeBuffs.noWither && plot.dryDays === 0) {
        // Grace day: first day without water, survive but mark the streak
        plot.dryDays = 1;
        plot.daysLeft -= 1 + WEATHERS[G.weather].bonus + G.activeBuffs.extraGrowth;
        plot.watered   = false;
        if (plot.daysLeft <= 0) {
          plot.daysLeft = 0;
          plot.state    = 'ready';
        } else {
          const crop = CROPS[plot.cropId];
          if (!crop.seasons.includes(G.season) && Math.random() < 0.25) {
            plot.state = 'withered';
            outOfSeasonCount++;
          }
        }
      } else {
        // No buff, or second consecutive dry day → wither
        plot.state   = 'withered';
        plot.dryDays = 0;
        witheredCount++;
      }
    } else {
      // Watered or rained → normal growth, reset dry streak
      plot.dryDays   = 0;
      plot.daysLeft -= 1 + WEATHERS[G.weather].bonus + G.activeBuffs.extraGrowth;
      plot.watered   = false;
      if (plot.daysLeft <= 0) {
        plot.daysLeft = 0;
        plot.state    = 'ready';
      } else {
        // Out-of-season: 25% daily death chance
        const crop = CROPS[plot.cropId];
        if (!crop.seasons.includes(G.season) && Math.random() < 0.25) {
          plot.state = 'withered';
          outOfSeasonCount++;
        }
      }
    }
  });

  if (witheredCount > 0) { SFX.wither(); showToast(`🥀 有 ${witheredCount} 株植物因缺水枯死了！`, 3500); }
  if (outOfSeasonCount > 0) { SFX.wither(); showToast(`🌡️ 有 ${outOfSeasonCount} 株植物因季節不適而枯死了！`, 3500); }

  // Advance day
  G.day++;
  G.harvestedToday = 0;
  G.earnedToday    = 0;
  G.boughtToday    = 0;
  G.dailyTasksDone = {};

  // Random weather
  const r = Math.random();
  let cum  = 0;
  for (let i = 0; i < WEATHER_WEIGHTS.length; i++) {
    cum += WEATHER_WEIGHTS[i];
    if (r < cum) { G.weather = i; break; }
  }

  // Season change
  const newSeason = Math.floor((G.day - 1) / SEASON_LENGTH) % 4;
  if (newSeason !== G.season) {
    G.season = newSeason;
    showToast(`${SEASON_ICONS[G.season]} 季節變換：${SEASONS[G.season]}！`, 3000);
  }

  // New pets for the new day
  generateDailyPets();

  // Day overlay
  SFX.endDay();
  const overlay = document.createElement('div');
  overlay.id = 'day-overlay';
  overlay.innerHTML = `<div class="day-big">第 ${G.day} 天</div><div class="day-sub">${SEASON_ICONS[G.season]}${SEASONS[G.season]}・${WEATHERS[G.weather].icon}${WEATHERS[G.weather].name}</div>`;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.remove(), 1200);

  if (rainDay) showToast('🌧️ 雨天！作物加速生長，且已自動澆水');

  checkTasks();
  save();
  renderAll();
}

// ══════════════════════════════════════════
//  TOAST
// ══════════════════════════════════════════

function showToast(msg, ms = 2200) {
  const box   = document.getElementById('toast-box');
  const toast = document.createElement('div');
  toast.className   = 'toast';
  toast.textContent = msg;
  box.appendChild(toast);
  setTimeout(() => {
    toast.style.transition = 'opacity 0.35s';
    toast.style.opacity    = '0';
    setTimeout(() => toast.remove(), 360);
  }, ms);
}

// ══════════════════════════════════════════
//  PET SYSTEM
// ══════════════════════════════════════════

// ── Pet helpers ───────────────────────────

function getPetLevel(petId) {
  return G.petLevels[petId] || 1;
}

function scaledBuffValue(buff, level) {
  if (buff.type === 'noWither') return buff.value;
  return buff.value * (1 + 0.3 * (level - 1));
}

function upgradeCost(level) {
  return level * 12000;
}

function formatBuffLabel(buff, value) {
  switch (buff.type) {
    case 'xpBonus':      return `採收 XP +${Math.round(value * 100)}%`;
    case 'sellBonus':    return `販售收益 +${Math.round(value * 100)}%`;
    case 'shopDiscount': return `種子費用 -${Math.round(value * 100)}%`;
    case 'extraGrowth':  return `每天多成長 ${value.toFixed(1)} 天`;
    case 'noWither':     return `1天不澆水不會枯死`;
    default:             return buff.label;
  }
}

function applyPetBuff(petId, buff) {
  const lv = getPetLevel(petId);
  if (buff.type === 'noWither') {
    G.activeBuffs.noWither = true;
  } else {
    G.activeBuffs[buff.type] = (G.activeBuffs[buff.type] || 0) + scaledBuffValue(buff, lv);
  }
}

function reapplyBuffs() {
  G.activeBuffs = { xpBonus: 0, sellBonus: 0, shopDiscount: 0, extraGrowth: 0, noWither: false };
  const counted = new Set();

  // Fed daily pets take priority
  G.dailyPets.forEach(pet => {
    if (!pet.fed) return;
    counted.add(pet.id);
    applyPetBuff(pet.id, pet.buff);
    if (pet.buff2) applyPetBuff(pet.id, pet.buff2);
    if (pet.buff3) applyPetBuff(pet.id, pet.buff3);
  });

  // Owned pets always provide passive buff (skip if already counted above)
  (G.ownedPets || []).forEach(petId => {
    if (!counted.has(petId)) {
      const pt = PET_TYPES.find(p => p.id === petId);
      if (pt) {
        applyPetBuff(petId, pt.buff);
        if (pt.buff2) applyPetBuff(petId, pt.buff2);
        if (pt.buff3) applyPetBuff(petId, pt.buff3);
      }
    }
    // Feed boosts are permanent upgrades — always apply for owned pets
    const boosts = (G.petFeedBoosts || {})[petId] || {};
    Object.entries(boosts).forEach(([type, val]) => {
      G.activeBuffs[type] = (G.activeBuffs[type] || 0) + val;
    });
  });
}

function upgradeByPetId(petId) {
  const lv = getPetLevel(petId);
  if (lv >= 5) { showToast('✨ 已達最高等級！'); return; }
  const cost = upgradeCost(lv);
  if (G.money < cost) { SFX.error(); showToast('💰 金幣不足！'); return; }
  const pt = PET_TYPES.find(p => p.id === petId);
  G.money -= cost;
  G.petLevels[petId] = lv + 1;
  reapplyBuffs();
  SFX.petLevelUp();
  showToast(`${pt?.emoji || ''} ${pt?.name || ''} 升到 Lv.${lv + 1}！`, 2500);
  save();
  renderPetScreen();
  renderAll();
}

function upgradePet(petIdx) {
  const pet = G.dailyPets[petIdx];
  if (!pet || !pet.fed) return;
  upgradeByPetId(pet.id);
}

function adoptPet(petIdx) {
  const pet = G.dailyPets[petIdx];
  if (!pet || !pet.fed) return;
  if (!G.ownedPets) G.ownedPets = [];
  if (G.ownedPets.includes(pet.id)) { showToast(`${pet.emoji} 已經在農場裡了！`); return; }
  if (G.ownedPets.length >= 5) { showToast('🏡 農場最多容納 5 隻寵物，請先放生一隻！', 3000); return; }
  G.ownedPets.push(pet.id);
  reapplyBuffs();
  SFX.adopt();
  showToast(`🐾 ${pet.emoji} ${pet.name} 永久加入了你的農場！`, 3000);
  save();
  renderPetScreen();
  renderAll();
}

function releasePet(petId) {
  if (!G.ownedPets) return;
  const pt = PET_TYPES.find(p => p.id === petId);
  G.ownedPets = G.ownedPets.filter(id => id !== petId);
  if (G.viewingOwnedId === petId) G.viewingOwnedId = null;
  reapplyBuffs();
  showToast(`🌿 ${pt?.emoji || ''} ${pt?.name || ''} 已放生，祝牠一路順風！`, 3000);
  save();
  renderPetScreen();
  renderAll();
}

function generateDailyPets() {
  const shuffled = [...PET_TYPES].sort(() => Math.random() - 0.5);
  G.dailyPets = shuffled.slice(0, 3).map(p => ({ ...p, fed: false, happiness: 0 }));
  reapplyBuffs(); // owned pets keep their passive buffs; daily pets start unfed
}

function openPetScreen() {
  G.feedingPetIdx  = -1;
  G.viewingPetIdx  = -1;
  G.viewingOwnedId = null;
  document.getElementById('pet-screen').hidden = false;
  renderPetScreen();
}

function closePetScreen() {
  G.feedingPetIdx  = -1;
  G.viewingPetIdx  = -1;
  G.viewingOwnedId = null;
  document.getElementById('pet-screen').hidden = true;
}

function renderPetScreen() {
  document.getElementById('pet-screen-day').textContent = G.day;
  const list = document.getElementById('pet-list');
  list.innerHTML = '';

  G.dailyPets.forEach((pet, idx) => {
    const isFeedMode = G.feedingPetIdx === idx;
    const favCrop    = CROPS[pet.favCrop];
    const moodEmoji  = pet.fed ? (pet.happiness >= 3 ? '😍' : '😊') : '😐';

    let feedContent;
    if (pet.fed) {
      const isViewing = G.viewingPetIdx === idx;
      if (isViewing) {
        const lv       = getPetLevel(pet.id);
        const isMax    = lv >= 5;
        const eff      = scaledBuffValue(pet.buff, lv);
        const effLabel = formatBuffLabel(pet.buff, eff);
        const eff2Label = pet.buff2 ? formatBuffLabel(pet.buff2, scaledBuffValue(pet.buff2, lv)) : null;
        const eff3Label = pet.buff3 ? formatBuffLabel(pet.buff3, scaledBuffValue(pet.buff3, lv)) : null;
        const cost     = upgradeCost(lv);
        const isOwned  = (G.ownedPets || []).includes(pet.id);
        feedContent = `
          <div class="pet-fed-label">💕 已餵食</div>
          <div class="pet-stat-panel">
            <div class="pet-stat-lv">⭐ Lv.${lv}</div>
            <div class="pet-stat-buff">${pet.buff.icon} ${effLabel}</div>
            ${eff2Label ? `<div class="pet-stat-buff pet-stat-buff2">${pet.buff2.icon} ${eff2Label}</div>` : ''}
            ${eff3Label ? `<div class="pet-stat-buff pet-stat-buff3">${pet.buff3.icon} ${eff3Label}</div>` : ''}
            ${isMax
              ? `<div class="pet-stat-maxlv">✨ 已達最高等級</div>`
              : `<div class="pet-stat-cost">升級費用：${cost} 💰</div>
                 <button class="pet-upgrade-btn" data-act="upgrade" data-pet="${idx}">⬆ 升到 Lv.${lv + 1}</button>`}
            ${isOwned
              ? `<div class="pet-owned-badge">🏡 已收留</div>`
              : `<button class="pet-adopt-btn" data-act="adopt" data-pet="${idx}">🏠 收留牠</button>`}
            <button class="food-cancel-btn" data-act="closeView">關閉</button>
          </div>`;
      } else {
        feedContent = `
          <div class="pet-fed-label">💕 已餵食</div>
          <button class="pet-view-btn" data-act="view" data-pet="${idx}">📊 點即可查看屬性</button>`;
      }
    } else if (isFeedMode) {
      const allItems = Object.entries(G.inventory);
      const eligible = pet.foodRarities
        ? allItems.filter(([cid, cnt]) => pet.foodRarities.includes(CROPS[cid].rarity) && cnt >= 10)
        : allItems.filter(([, cnt]) => cnt >= 10);
      if (!eligible.length) {
        const hint = pet.foodRarities
          ? '沒有足夠的傳奇或神話農作物<br>每次餵食需要 10 個相同作物'
          : '背包沒有足夠的農作物<br>每次餵食需要 10 個相同作物';
        feedContent = `
          <div class="no-food-msg">${hint}</div>
          <button class="food-cancel-btn" data-act="cancel">取消</button>`;
      } else {
        const chips = eligible.map(([cid, cnt]) => {
          const c = CROPS[cid];
          const isFav = cid === pet.favCrop;
          return `<button class="food-chip${isFav ? ' fav-chip' : ''}" data-act="feed" data-pet="${idx}" data-crop="${cid}">${c.emoji} ${c.name} ×${cnt}${isFav ? ' ★' : ''}</button>`;
        }).join('');
        feedContent = `
          <div class="food-select-title">選擇要餵的食物</div>
          <div class="food-cost-note">每次消耗 10 個</div>
          <div class="food-grid">${chips}</div>
          <button class="food-cancel-btn" data-act="cancel">取消</button>`;
      }
    } else {
      feedContent = `<button class="pet-feed-btn" data-act="open" data-pet="${idx}">🌾 餵食</button>`;
    }

    const petGrade  = pet.grade || 'common';
    const gradeInfo = RARITIES[petGrade];
    const card = document.createElement('div');
    card.className = 'pet-card grade-' + petGrade + (isFeedMode ? ' feeding' : '') + (pet.fed ? ' fed-done' : '');
    card.innerHTML = `
      <span class="rarity-badge pet-grade-badge" style="color:${gradeInfo.badgeColor};background:${gradeInfo.badgeBg}">${gradeInfo.name}</span>
      <span class="pet-emoji-big">${pet.emoji}</span>
      <div class="pet-name">${pet.name}</div>
      <div class="pet-fav-food">喜歡：${favCrop ? favCrop.emoji + ' ' + favCrop.name : '?'}</div>
      ${pet.foodRarities ? `<div class="pet-food-restrict">🍽️ 只吃傳奇 / 神話作物</div>` : ''}
      <div class="pet-buff-tag${pet.fed ? ' active' : ''}">${pet.buff.icon} ${pet.buff.label}</div>
      ${pet.buff2 ? `<div class="pet-buff-tag pet-buff2-tag${pet.fed ? ' active' : ''}">${pet.buff2.icon} ${pet.buff2.label}</div>` : ''}
      ${pet.buff3 ? `<div class="pet-buff-tag pet-buff3-tag${pet.fed ? ' active' : ''}">${pet.buff3.icon} ${pet.buff3.label}</div>` : ''}
      <span class="pet-mood">${moodEmoji}</span>
      ${feedContent}`;
    list.appendChild(card);
  });

  list.onclick = e => {
    const btn = e.target.closest('[data-act]');
    if (!btn) return;
    if      (btn.dataset.act === 'open')      { G.feedingPetIdx = parseInt(btn.dataset.pet); renderPetScreen(); }
    else if (btn.dataset.act === 'cancel')    { G.feedingPetIdx = -1; renderPetScreen(); }
    else if (btn.dataset.act === 'feed')      { feedPet(parseInt(btn.dataset.pet), btn.dataset.crop); }
    else if (btn.dataset.act === 'view')      { G.viewingPetIdx = parseInt(btn.dataset.pet); renderPetScreen(); }
    else if (btn.dataset.act === 'closeView') { G.viewingPetIdx = -1; renderPetScreen(); }
    else if (btn.dataset.act === 'upgrade')   { upgradePet(parseInt(btn.dataset.pet)); }
    else if (btn.dataset.act === 'adopt')     { adoptPet(parseInt(btn.dataset.pet)); }
  };
  renderOwnedPets();
}

function renderOwnedPets() {
  const list   = document.getElementById('pet-owned-list');
  const detail = document.getElementById('pet-owned-detail');
  if (!list) return;

  const owned = G.ownedPets || [];

  if (!owned.length) {
    list.innerHTML = '<div class="owned-empty">餵食寵物後點「收留牠」，牠就會永遠住在這裡 🌿</div>';
    detail.innerHTML = '';
    G.viewingOwnedId = null;
    return;
  }

  list.innerHTML = owned.map(petId => {
    const pt      = PET_TYPES.find(p => p.id === petId);
    if (!pt) return '';
    const lv        = getPetLevel(petId);
    const viewing   = G.viewingOwnedId === petId;
    const og        = pt.grade || 'common';
    const ogInfo    = RARITIES[og];
    return `<div class="owned-pet-card grade-${og}${viewing ? ' viewing' : ''}" data-petid="${petId}">
      <span class="rarity-badge pet-grade-badge" style="color:${ogInfo.badgeColor};background:${ogInfo.badgeBg}">${ogInfo.name}</span>
      <span class="owned-pet-emoji">${pt.emoji}</span>
      <div class="owned-pet-name">${pt.name}</div>
      <div class="owned-pet-lv">⭐ Lv.${lv}</div>
    </div>`;
  }).join('');

  list.onclick = e => {
    const card = e.target.closest('.owned-pet-card');
    if (!card) return;
    const petId = card.dataset.petid;
    G.viewingOwnedId = G.viewingOwnedId === petId ? null : petId;
    renderOwnedPets();
  };

  if (G.viewingOwnedId) {
    const pt = PET_TYPES.find(p => p.id === G.viewingOwnedId);
    if (!pt) { detail.innerHTML = ''; return; }
    const lv       = getPetLevel(G.viewingOwnedId);
    const isMax    = lv >= 5;
    const eff      = scaledBuffValue(pt.buff, lv);
    const effLabel = formatBuffLabel(pt.buff, eff);
    const eff2Label = pt.buff2 ? formatBuffLabel(pt.buff2, scaledBuffValue(pt.buff2, lv)) : null;
    const eff3Label = pt.buff3 ? formatBuffLabel(pt.buff3, scaledBuffValue(pt.buff3, lv)) : null;
    const cost     = upgradeCost(lv);
    const dg     = pt.grade || 'common';
    const dgInfo = RARITIES[dg];
    const feedBoostLines = Object.entries((G.petFeedBoosts || {})[G.viewingOwnedId] || {})
      .filter(([, v]) => v > 0)
      .map(([type, val]) => {
        const fd  = PET_FEEDS.find(f => f.buffType === type);
        const lbl = type === 'extraGrowth' ? `+${val.toFixed(1)}天/日` : `+${Math.round(val * 100)}%`;
        return `<div class="owned-detail-buff owned-feed-boost">${fd?.emoji || '🍖'} ${fd?.name || ''} ${lbl}</div>`;
      }).join('');
    detail.innerHTML = `
      <div class="owned-detail-inner">
        <span class="owned-detail-emoji">${pt.emoji}</span>
        <div class="owned-detail-info">
          <div class="owned-detail-name">${pt.name} <span class="rarity-badge pet-grade-badge" style="color:${dgInfo.badgeColor};background:${dgInfo.badgeBg}">${dgInfo.name}</span></div>
          <div class="owned-detail-lv">⭐ Lv.${lv}</div>
          <div class="owned-detail-buff">${pt.buff.icon} ${effLabel}</div>
          ${eff2Label ? `<div class="owned-detail-buff">${pt.buff2.icon} ${eff2Label}</div>` : ''}
          ${eff3Label ? `<div class="owned-detail-buff">${pt.buff3.icon} ${eff3Label}</div>` : ''}
          ${feedBoostLines}
        </div>
        <div class="owned-detail-actions">
          ${isMax
            ? `<div class="pet-stat-maxlv">✨ 最高等級</div>`
            : `<div class="pet-stat-cost">${cost} 💰</div>
               <button id="owned-upgrade-btn" class="pet-upgrade-btn">⬆ 升到 Lv.${lv + 1}</button>`}
          <button id="owned-release-btn" class="pet-release-btn">🌿 放生</button>
        </div>
      </div>`;
    if (!isMax) {
      document.getElementById('owned-upgrade-btn').onclick = () => upgradeByPetId(G.viewingOwnedId);
    }
    document.getElementById('owned-release-btn').onclick = () => releasePet(G.viewingOwnedId);
  } else {
    detail.innerHTML = '';
  }
}

function feedPet(petIdx, cropId) {
  const pet  = G.dailyPets[petIdx];
  const crop = CROPS[cropId];
  if (!pet || !crop || pet.fed) return;
  if (!G.inventory[cropId] || G.inventory[cropId] < 10) {
    SFX.error();
    showToast('需要 10 個相同作物才能餵食！', 2000);
    return;
  }
  if (pet.foodRarities && !pet.foodRarities.includes(crop.rarity)) {
    SFX.error();
    showToast(`${pet.emoji} ${pet.name} 只吃傳奇或神話作物！`, 2500);
    return;
  }

  G.inventory[cropId] -= 10;
  if (G.inventory[cropId] <= 0) delete G.inventory[cropId];

  const isFav     = cropId === pet.favCrop;
  const xpGain    = isFav ? pet.xpBase * 2 : pet.xpBase;
  const moneyGain = isFav ? 15 : 0;

  pet.fed = true;
  pet.happiness = isFav ? 3 : 1;
  G.feedingPetIdx = -1;

  reapplyBuffs();

  gainXP(xpGain);
  G.money += moneyGain;

  SFX.feedPet();
  showToast(
    isFav
      ? `${pet.emoji} ${pet.name} 最愛的食物！ +${xpGain} XP +${moneyGain} 💰  ${pet.buff.icon}${pet.buff.label}`
      : `${pet.emoji} ${pet.name} 吃得很開心！ +${xpGain} XP  ${pet.buff.icon}${pet.buff.label}`,
    3500
  );
  save();
  renderPetScreen();
  renderAll(); // update buff strip + topbar
}

// ── Pet Shop ──────────────────────────────

function renderPetShop(el) {
  let html = '<div class="shop-hint">購買飼料強化寵物，或開蛋獲得新夥伴</div>';

  html += '<div class="task-section-title">🏪 飼料商店</div>';
  PET_FEEDS.forEach(feed => {
    html += `
      <div class="feed-shop-item">
        <span class="feed-emoji">${feed.emoji}</span>
        <div class="feed-info">
          <div class="feed-name">${feed.name}</div>
          <div class="feed-desc">${feed.desc}</div>
        </div>
        <div class="feed-right">
          <div class="feed-cost">-${feed.cost} 💰</div>
          <button class="feed-buy-btn" data-feed="${feed.id}">購買</button>
        </div>
      </div>`;
  });

  const ownedFeeds = Object.entries(G.feedInventory || {}).filter(([, cnt]) => cnt > 0);
  html += '<div class="task-section-title" style="margin-top:14px">🎒 飼料庫存</div>';
  if (!ownedFeeds.length) {
    html += '<div class="empty-msg" style="padding:12px 0">尚未購買任何飼料</div>';
  } else {
    ownedFeeds.forEach(([feedId, cnt]) => {
      const feed = PET_FEEDS.find(f => f.id === feedId);
      if (!feed) return;
      html += `
        <div class="feed-inv-item">
          <span class="feed-emoji">${feed.emoji}</span>
          <div class="feed-info">
            <div class="feed-name">${feed.name} <span class="feed-cnt">×${cnt}</span></div>
            <div class="feed-desc">${feed.desc}</div>
          </div>
          <button class="feed-use-btn" data-feed="${feedId}">使用</button>
        </div>`;
    });
  }

  html += '<div class="task-section-title" style="margin-top:14px">🥚 寵物蛋</div>';
  html += '<div class="egg-feed-hint">🍖 開蛋後需花費金幣請商人餵養，才能收留寵物</div>';
  PET_EGGS.forEach(egg => {
    html += `
      <div class="egg-shop-card ${egg.cls}">
        <span class="egg-shop-emoji">${egg.emoji}</span>
        <div class="egg-shop-name">${egg.name}</div>
        <div class="egg-shop-desc">${egg.desc}</div>
        <div class="egg-shop-cost">${egg.cost.toLocaleString()} 💰</div>
        <div class="egg-btn-group">
          <button class="egg-open-btn" data-egg="${egg.id}">✨ 單抽</button>
          <button class="egg-multi-btn" data-egg="${egg.id}">✨×10 連抽<span class="egg-multi-cost">${(egg.cost * 10).toLocaleString()} 💰</span></button>
        </div>
      </div>`;
  });

  el.innerHTML = html;
  el.querySelectorAll('.feed-buy-btn').forEach(b => b.addEventListener('click', () => buyFeed(b.dataset.feed)));
  el.querySelectorAll('.feed-use-btn').forEach(b => b.addEventListener('click', () => showFeedUseModal(b.dataset.feed)));
  el.querySelectorAll('.egg-open-btn').forEach(b => b.addEventListener('click', () => openEgg(b.dataset.egg)));
  el.querySelectorAll('.egg-multi-btn').forEach(b => b.addEventListener('click', () => openEggMulti(b.dataset.egg)));
}

function buyFeed(feedId) {
  const feed = PET_FEEDS.find(f => f.id === feedId);
  if (!feed) return;
  if (G.money < feed.cost) { SFX.error(); showToast('💰 金幣不足！'); return; }
  G.money -= feed.cost;
  G.feedInventory[feedId] = (G.feedInventory[feedId] || 0) + 1;
  SFX.sell();
  showToast(`購買了 ${feed.emoji} ${feed.name}！`);
  save();
  renderAll();
}

function showFeedUseModal(feedId) {
  const feed  = PET_FEEDS.find(f => f.id === feedId);
  const owned = G.ownedPets || [];
  if (!feed || !(G.feedInventory[feedId] > 0)) return;
  if (!owned.length) { showToast('先收留一隻寵物再使用飼料！', 2500); return; }

  document.getElementById('feed-use-modal')?.remove();
  const modal = document.createElement('div');
  modal.id = 'feed-use-modal';

  const petList = owned.map(petId => {
    const pt = PET_TYPES.find(p => p.id === petId);
    if (!pt) return '';
    const lv      = getPetLevel(petId);
    const used    = ((G.petFeedCounts || {})[petId] || {})[feed.buffType] || 0;
    const isFull  = used >= 3;
    const cur     = ((G.petFeedBoosts || {})[petId] || {})[feed.buffType] || 0;
    const curLabel = used > 0
      ? `${used}/3 次（${feed.buffType === 'extraGrowth' ? '+' + cur.toFixed(1) + '天/日' : '+' + Math.round(cur * 100) + '%'}）`
      : '0/3 次';
    return `
      <div class="fum-pet${isFull ? ' fum-pet-full' : ''}">
        <span class="fum-pet-emoji">${pt.emoji}</span>
        <div class="fum-pet-info">
          <div class="fum-pet-name">${pt.name} Lv.${lv}</div>
          <div class="fum-pet-boost">${curLabel}</div>
        </div>
        <button class="fum-apply-btn" data-petid="${petId}" ${isFull ? 'disabled' : ''}>${isFull ? '已滿' : '套用'}</button>
      </div>`;
  }).join('');

  modal.innerHTML = `
    <div class="fum-box">
      <div class="fum-title">${feed.emoji} ${feed.name}</div>
      <div class="fum-desc">${feed.desc}（永久）</div>
      <div class="fum-label">選擇要強化的寵物</div>
      <div class="fum-pet-list">${petList}</div>
      <button class="fum-cancel" id="fum-cancel">取消</button>
    </div>`;

  modal.querySelector('#fum-cancel').onclick = () => modal.remove();
  modal.querySelectorAll('.fum-apply-btn').forEach(btn => {
    btn.onclick = () => { modal.remove(); applyFeedToPet(feedId, btn.dataset.petid); };
  });
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}

function applyFeedToPet(feedId, petId) {
  const feed = PET_FEEDS.find(f => f.id === feedId);
  const pt   = PET_TYPES.find(p => p.id === petId);
  if (!feed || !pt || !(G.feedInventory[feedId] > 0)) return;

  if (!G.petFeedCounts[petId]) G.petFeedCounts[petId] = {};
  const used = G.petFeedCounts[petId][feed.buffType] || 0;
  if (used >= 3) {
    SFX.error();
    showToast(`${pt.emoji} ${pt.name} 的 ${feed.emoji} 已達上限（3次）！`, 2500);
    return;
  }

  G.feedInventory[feedId]--;
  if (G.feedInventory[feedId] <= 0) delete G.feedInventory[feedId];

  if (!G.petFeedBoosts[petId]) G.petFeedBoosts[petId] = {};
  G.petFeedBoosts[petId][feed.buffType]  = (G.petFeedBoosts[petId][feed.buffType] || 0) + feed.boost;
  G.petFeedCounts[petId][feed.buffType]  = used + 1;

  reapplyBuffs();
  SFX.feedPet();
  showToast(`${pt.emoji} ${pt.name} 的 ${feed.emoji} 技能提升！（${used + 1}/3）`, 2500);
  save();
  renderAll();
}

// ── Pet Eggs ──────────────────────────────

function rollEggResult(egg) {
  const total = egg.weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  let rolledGrade = egg.grades[egg.grades.length - 1];
  for (let i = 0; i < egg.grades.length; i++) {
    r -= egg.weights[i];
    if (r <= 0) { rolledGrade = egg.grades[i]; break; }
  }
  let pool = PET_TYPES.filter(p => p.grade === rolledGrade);
  let mythicalFallback = false;
  if (!pool.length) {
    mythicalFallback = true;
    rolledGrade = 'legendary';
    pool = PET_TYPES.filter(p => p.grade === rolledGrade);
  }
  const pet = pool[Math.floor(Math.random() * pool.length)];
  return { pet, grade: rolledGrade, mythicalFallback };
}

function openEgg(eggId) {
  const egg = PET_EGGS.find(e => e.id === eggId);
  if (!egg) return;
  if (G.money < egg.cost) { SFX.error(); showToast('💰 金幣不足！'); return; }
  G.money -= egg.cost;
  SFX.gacha();
  const { pet, grade, mythicalFallback } = rollEggResult(egg);
  save();
  renderAll();
  showEggResultModal(pet, grade, mythicalFallback);
}

function openEggMulti(eggId) {
  const egg = PET_EGGS.find(e => e.id === eggId);
  if (!egg) return;
  const totalCost = egg.cost * 10;
  if (G.money < totalCost) { SFX.error(); showToast('💰 金幣不足！'); return; }
  G.money -= totalCost;
  SFX.gacha();
  const results = Array.from({ length: 10 }, () => rollEggResult(egg));
  save();
  renderAll();
  showEggMultiResultModal(results);
}

function showEggResultModal(pet, grade, mythicalFallback) {
  document.getElementById('egg-result-modal')?.remove();
  const modal = document.createElement('div');
  modal.id = 'egg-result-modal';
  document.body.appendChild(modal);

  let fed = false;
  let firstRender = true;

  function render() {
    const rarity   = RARITIES[grade];
    const isOwned  = (G.ownedPets || []).includes(pet.id);
    const isFull   = (G.ownedPets || []).length >= 5;
    const feedCost = EGG_FEED_COST[grade];

    const buffLines = [pet.buff, pet.buff2, pet.buff3]
      .filter(Boolean)
      .map(b => `<div class="erm-buff">${b.icon} ${b.label}</div>`)
      .join('');

    const mythNote = mythicalFallback
      ? '<div class="erm-mythical-note">✨ 神話寵物即將推出！本次以傳奇替代</div>'
      : '';

    let adoptArea;
    if (isOwned) {
      adoptArea = `
        <div class="erm-already-owned">🏡 已收留此寵物</div>
        <button class="erm-dismiss" id="erm-ok">確認</button>`;
    } else if (fed) {
      adoptArea = `
        <div class="erm-fed-note">🍖 牠已吃飽，可以收留了！</div>
        <div class="erm-actions">
          ${isFull
            ? '<div class="erm-full-note">農場已滿（5/5）</div>'
            : '<button class="erm-adopt" id="erm-adopt">🏠 收留牠！</button>'}
          <button class="erm-release" id="erm-release">🌿 放生</button>
        </div>`;
    } else {
      adoptArea = `
        <div class="erm-feed-note">需要先餵養才能收留</div>
        <div class="erm-actions">
          ${isFull
            ? '<div class="erm-full-note">農場已滿（5/5）</div>'
            : `<button class="erm-feed-btn" id="erm-feed">🍖 花費 ${feedCost.toLocaleString()} 💰 餵養</button>`}
          <button class="erm-release" id="erm-release">🌿 放生</button>
        </div>`;
    }

    modal.innerHTML = `
      <div class="erm-box grade-${grade}">
        ${mythNote}
        ${firstRender ? '<div class="erm-egg-crack">🥚✨</div>' : ''}
        <div class="erm-pet-emoji">${pet.emoji}</div>
        <div class="erm-grade-badge">
          <span class="rarity-badge" style="color:${rarity.badgeColor};background:${rarity.badgeBg};font-size:13px;padding:3px 12px">${rarity.name}</span>
        </div>
        <div class="erm-pet-name">${pet.name}</div>
        <div class="erm-buffs">${buffLines}</div>
        ${adoptArea}
      </div>`;
    firstRender = false;

    modal.querySelector('#erm-feed')?.addEventListener('click', () => {
      if (G.money < feedCost) { SFX.error(); showToast('💰 金幣不足，無法餵養！'); return; }
      G.money -= feedCost;
      fed = true;
      SFX.eggFeed();
      save();
      renderAll();
      render();
    });

    modal.querySelector('#erm-adopt')?.addEventListener('click', () => {
      if (!G.ownedPets) G.ownedPets = [];
      if (G.ownedPets.length >= 5) { showToast('🏡 農場已滿！'); return; }
      G.ownedPets.push(pet.id);
      reapplyBuffs();
      SFX.adopt();
      showToast(`🐾 ${pet.emoji} ${pet.name} 加入了農場！`, 3000);
      save();
      renderAll();
      modal.remove();
    });

    modal.querySelector('#erm-release')?.addEventListener('click', () => {
      showToast(`🌿 ${pet.emoji} ${pet.name} 放生了...`, 2000);
      modal.remove();
    });

    modal.querySelector('#erm-ok')?.addEventListener('click', () => modal.remove());
  }

  render();
}

function showEggMultiResultModal(results) {
  document.getElementById('egg-multi-modal')?.remove();
  const modal = document.createElement('div');
  modal.id = 'egg-multi-modal';
  document.body.appendChild(modal);

  const fedSet      = new Set();
  const adoptedSet  = new Set();
  const releasedSet = new Set();

  function render() {
    const adoptedCount = adoptedSet.size;
    const slotsLeft    = Math.max(0, 5 - (G.ownedPets || []).length - adoptedCount);

    const cardsHtml = results.map(({ pet, grade, mythicalFallback }, i) => {
      const rarity   = RARITIES[grade];
      const isOwned  = (G.ownedPets || []).includes(pet.id);
      const isAdopted = adoptedSet.has(i);
      const isReleased = releasedSet.has(i);
      const isFed    = fedSet.has(i);
      const feedCost = EGG_FEED_COST[grade];

      const buffLines = [pet.buff, pet.buff2, pet.buff3]
        .filter(Boolean)
        .map(b => `<span class="emr-buff-tag">${b.icon} ${b.label}</span>`)
        .join('');

      const mythBadge = mythicalFallback
        ? '<span class="emr-myth-note">傳奇替代</span>'
        : '';

      let actionHtml;
      if (isOwned || isAdopted) {
        actionHtml = `<div class="emr-status-tag owned">🏡 已收留</div>`;
      } else if (isReleased) {
        actionHtml = `<div class="emr-status-tag released">🌿 放生</div>`;
      } else if (isFed) {
        actionHtml = slotsLeft <= 0
          ? `<div class="emr-status-tag full">農場已滿</div>`
          : `<button class="emr-adopt-btn" data-idx="${i}">🏠 收留</button>`;
      } else {
        actionHtml = `
          <button class="emr-feed-btn" data-idx="${i}">🍖 ${feedCost.toLocaleString()}💰</button>
          <button class="emr-skip-btn" data-idx="${i}">🌿 放生</button>`;
      }

      return `
        <div class="emr-card grade-${grade}${isAdopted || isReleased ? ' emr-dim' : ''}">
          <span class="emr-card-emoji">${pet.emoji}</span>
          <div class="emr-card-info">
            <div class="emr-card-name">
              <span class="rarity-badge" style="color:${rarity.badgeColor};background:${rarity.badgeBg};font-size:10px;padding:1px 7px;margin-right:4px">${rarity.name}</span>
              ${pet.name}${mythBadge}
            </div>
            <div class="emr-card-buffs">${buffLines}</div>
          </div>
          <div class="emr-card-action">${actionHtml}</div>
        </div>`;
    }).join('');

    modal.innerHTML = `
      <div class="emr-overlay">
        <div class="emr-box">
          <div class="emr-header">🥚 10連抽結果</div>
          <div class="emr-slots">農場空位：${slotsLeft} 格</div>
          <div class="emr-list">${cardsHtml}</div>
          <button class="emr-close-btn" id="emr-close">完成</button>
        </div>
      </div>`;

    modal.querySelectorAll('.emr-feed-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.idx);
        const cost = EGG_FEED_COST[results[idx].grade];
        if (G.money < cost) { SFX.error(); showToast('💰 金幣不足！'); return; }
        G.money -= cost;
        fedSet.add(idx);
        SFX.eggFeed();
        save();
        renderAll();
        render();
      });
    });

    modal.querySelectorAll('.emr-adopt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.idx);
        const { pet } = results[idx];
        if (!G.ownedPets) G.ownedPets = [];
        if (G.ownedPets.length + adoptedSet.size >= 5) { showToast('🏡 農場已滿！'); return; }
        G.ownedPets.push(pet.id);
        adoptedSet.add(idx);
        reapplyBuffs();
        SFX.adopt();
        showToast(`🐾 ${pet.emoji} ${pet.name} 加入了農場！`, 2000);
        save();
        renderAll();
        render();
      });
    });

    modal.querySelectorAll('.emr-skip-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        releasedSet.add(parseInt(btn.dataset.idx));
        render();
      });
    });

    modal.querySelector('#emr-close').addEventListener('click', () => modal.remove());
  }

  render();
}

// ══════════════════════════════════════════
//  EVENTS
// ══════════════════════════════════════════

function handleCell(idx) {
  const plot = G.grid[idx];
  if (!plot) return;

  if (G.mode === 'watering') {
    if (plot.state === 'growing') waterPlot(idx);
    return;
  }

  if (G.mode === 'harvest') {
    if (plot.state === 'ready') harvestPlot(idx);
    return;
  }

  // Normal mode
  if      (plot.state === 'withered')                          clearWithered(idx);
  else if (plot.state === 'ready')                             harvestPlot(idx);
  else if (plot.state === 'empty' && G.selectedSeed)          plantSeed(idx);
  else if (plot.state === 'empty' && !G.selectedSeed)         showToast('請先在商店選擇種子');
}

function bindEvents() {
  // Farm grid — hold + drag interaction
  let isHolding   = false;
  let lastCellIdx = -1;

  const farmGrid = document.getElementById('farm-grid');

  farmGrid.addEventListener('mousedown', e => {
    if (e.button !== 0) return;
    e.preventDefault(); // prevent text selection while dragging
    const cell = e.target.closest('.plot');
    if (!cell) return;
    isHolding   = true;
    lastCellIdx = parseInt(cell.dataset.idx);
    handleCell(lastCellIdx);
  });

  // mouseover fires when entering child elements too, so deduplicate by idx
  farmGrid.addEventListener('mouseover', e => {
    if (!isHolding) return;
    const cell = e.target.closest('.plot');
    if (!cell) return;
    const idx = parseInt(cell.dataset.idx);
    if (idx === lastCellIdx) return; // same cell, skip
    lastCellIdx = idx;
    handleCell(idx);
  });

  document.addEventListener('mouseup', () => { isHolding = false; });

  // Touch planting — press to show seed hints, drag to plant
  let lastTouchCellIdx = -1;

  function touchCellFromPoint(touch) {
    const el = document.elementFromPoint(touch.clientX, touch.clientY);
    return el?.closest('.plot');
  }

  function enterTouchPlanting() {
    if (!G.selectedSeed || G.mode !== 'normal') return;
    isTouchPlanting = true;
    farmGrid.classList.add('touch-planting');
    renderFarm();
  }

  function exitTouchPlanting() {
    isTouchPlanting = false;
    farmGrid.classList.remove('touch-planting');
    renderFarm();
    lastTouchCellIdx = -1;
  }

  farmGrid.addEventListener('touchstart', e => {
    e.preventDefault();
    const cell = touchCellFromPoint(e.touches[0]);
    if (!cell) return;
    enterTouchPlanting();
    lastTouchCellIdx = parseInt(cell.dataset.idx);
    handleCell(lastTouchCellIdx);
  }, { passive: false });

  farmGrid.addEventListener('touchmove', e => {
    e.preventDefault();
    const cell = touchCellFromPoint(e.touches[0]);
    if (!cell) return;
    const idx = parseInt(cell.dataset.idx);
    if (idx === lastTouchCellIdx) return;
    lastTouchCellIdx = idx;
    handleCell(idx);
  }, { passive: false });

  farmGrid.addEventListener('touchend',   exitTouchPlanting);
  farmGrid.addEventListener('touchcancel', exitTouchPlanting);

  // Panel tabs
  document.getElementById('tab-nav').addEventListener('click', e => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    if (btn.dataset.tab === 'end') { endDay(); return; }
    if (btn.dataset.tab === 'pet') { openPetScreen(); return; }
    G.activeTab = btn.dataset.tab;
    renderPanel();
  });

  // Bottom bar
  document.getElementById('water-btn').addEventListener('click', () => setMode('watering'));
  document.getElementById('harvest-all-btn').addEventListener('click', harvestAll);
  document.getElementById('harvest-single-btn').addEventListener('click', () => setMode('harvest'));

  // Pet screen
  document.getElementById('pet-btn').addEventListener('click', openPetScreen);
  document.getElementById('pet-back-btn').addEventListener('click', closePetScreen);
  document.getElementById('mute-btn').addEventListener('click', toggleMute);
}

// ══════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════

load();
bindEvents();
updateCursor();
renderAll();
document.getElementById('mute-btn').textContent = sfxMuted ? '🔇' : '🔊';
