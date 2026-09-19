// ══════════════════════════════════════════
//  PET BATTLE SYSTEM（寵物副本）
//  依賴 game.js 的 G / PET_TYPES / RARITIES / SFX / showToast / gainXP / save
// ══════════════════════════════════════════

// ── 寵物戰鬥數值 ───────────────────────────
// range: 'melee' 近戰（只能打敵方前排）｜'ranged' 遠程（可打任何敵人）
// 數值會再乘上寵物等級（每級 +15%）與訓練次數（每次 +5%）
const PET_COMBAT = {
  // 普通
  chick:        { hp: 85,  atk: 24, def: 4,  range: 'ranged' },
  duck:         { hp: 110, atk: 18, def: 6,  range: 'melee'  },
  frog:         { hp: 95,  atk: 21, def: 5,  range: 'ranged' },
  cat:          { hp: 90,  atk: 25, def: 4,  range: 'melee'  },
  mouse:        { hp: 80,  atk: 23, def: 3,  range: 'melee'  },
  bee:          { hp: 70,  atk: 27, def: 3,  range: 'ranged' },
  // 優良
  rabbit:       { hp: 130, atk: 30, def: 7,  range: 'melee'  },
  dog:          { hp: 160, atk: 27, def: 9,  range: 'melee'  },
  squirrel:     { hp: 120, atk: 31, def: 6,  range: 'ranged' },
  fox:          { hp: 125, atk: 33, def: 6,  range: 'ranged' },
  deer:         { hp: 170, atk: 25, def: 10, range: 'melee'  },
  hedgehog:     { hp: 150, atk: 26, def: 13, range: 'melee'  },
  otter:        { hp: 140, atk: 28, def: 8,  range: 'ranged' },
  swan:         { hp: 135, atk: 30, def: 7,  range: 'ranged' },
  // 高級
  owl:          { hp: 170, atk: 42, def: 10, range: 'ranged' },
  panda:        { hp: 240, atk: 33, def: 16, range: 'melee'  },
  bear:         { hp: 250, atk: 36, def: 15, range: 'melee'  },
  koala:        { hp: 220, atk: 32, def: 17, range: 'melee'  },
  tiger:        { hp: 190, atk: 46, def: 11, range: 'melee'  },
  lion:         { hp: 200, atk: 44, def: 12, range: 'melee'  },
  dragon:       { hp: 185, atk: 45, def: 11, range: 'ranged' },
  // 傳奇
  phoenix:      { hp: 270, atk: 62, def: 16, range: 'ranged' },
  unicorn:      { hp: 300, atk: 55, def: 20, range: 'ranged' },
  shenlong:     { hp: 320, atk: 58, def: 22, range: 'melee'  },
  // 神話
  timedrake:    { hp: 360, atk: 78, def: 24, range: 'ranged' },
  chaosspirit:  { hp: 370, atk: 80, def: 23, range: 'ranged' },
  icedragon:    { hp: 420, atk: 74, def: 28, range: 'melee'  },
  moonrabbit:   { hp: 350, atk: 82, def: 22, range: 'ranged' },
  goldendragon: { hp: 440, atk: 76, def: 30, range: 'melee'  },
  angelbeast:   { hp: 390, atk: 72, def: 27, range: 'ranged' },
  fategod:      { hp: 380, atk: 85, def: 24, range: 'ranged' },
  cosmicspirit: { hp: 400, atk: 77, def: 26, range: 'ranged' },
  chaosdragon:  { hp: 430, atk: 80, def: 27, range: 'melee'  },
};

// ── 技能 ──────────────────────────────────
// 目前所有寵物共用一招；之後可在 PET_COMBAT 加 skill 欄位指定不同技能
const SKILLS = {
  powerStrike: { id: 'powerStrike', name: '全力一擊', icon: '💥', cd: 3, mult: 2.0, pierce: 0.5, desc: '造成 200% 傷害，無視 50% 防禦' },
};
const DEFAULT_SKILL = 'powerStrike';

// ── 敵人 ──────────────────────────────────
// kind: normal 普通｜special 特殊｜boss
// range: 'melee' 只能打我方前排｜'ranged' 可打任何寵物｜'both' 遠近皆可（Boss）
const ENEMY_TYPES = {
  wolf:   { name: '野狼',   emoji: '🐺',  kind: 'normal',  range: 'melee',  hp: 90,  atk: 18, def: 4  },
  boar:   { name: '野豬',   emoji: '🐗',  kind: 'normal',  range: 'melee',  hp: 120, atk: 16, def: 7  },
  snake:  { name: '毒蛇',   emoji: '🐍',  kind: 'normal',  range: 'melee',  hp: 75,  atk: 24, def: 3  },
  crow:   { name: '烏鴉',   emoji: '🐦‍⬛', kind: 'normal',  range: 'ranged', hp: 65,  atk: 20, def: 3  },
  spider: { name: '蜘蛛',   emoji: '🕷️',  kind: 'normal',  range: 'ranged', hp: 80,  atk: 19, def: 5  },
  bat:    { name: '蝙蝠',   emoji: '🦇',  kind: 'normal',  range: 'ranged', hp: 60,  atk: 22, def: 2  },
  treant: { name: '樹精',   emoji: '🌳',  kind: 'special', range: 'melee',  hp: 260, atk: 22, def: 14 },
  witch:  { name: '巫婆',   emoji: '🧙',  kind: 'special', range: 'ranged', hp: 150, atk: 40, def: 6  },
  golem:  { name: '石魔',   emoji: '🗿',  kind: 'special', range: 'melee',  hp: 320, atk: 28, def: 20 },
  boss:   { name: '森林魔王', emoji: '👹', kind: 'boss',    range: 'both',   hp: 700, atk: 45, def: 15 },
};
const ENEMY_KIND_LABEL = { normal: '普通', special: '特殊', boss: 'BOSS' };
const BOSS_AOE_EVERY   = 3;   // Boss 每 N 回合放一次全體攻擊
const BOSS_AOE_MULT    = 0.6;
const BOSS_MELEE_MULT  = 1.3;

// ── 副本 ──────────────────────────────────
const DUNGEONS = [
  {
    id: 'forest', name: '迷霧森林', emoji: '🌲',
    desc: '傳說森林深處住著一隻魔王，帶著夥伴一路打進去吧！',
    attemptsPerDay: 3,
    firstClearMult: 3,   // 首次通關獎勵倍率
    stages: [
      { name: '林間小徑', enemies: [['wolf', 'front'], ['wolf', 'front'], ['crow', 'back']],                       reward: { money: 800,   xp: 120  } },
      { name: '荊棘叢',   enemies: [['boar', 'front'], ['boar', 'front'], ['spider', 'back'], ['bat', 'back']],     reward: { money: 1500,  xp: 200  } },
      { name: '毒沼',     enemies: [['snake', 'front'], ['treant', 'front'], ['snake', 'front'], ['crow', 'back']], reward: { money: 2500,  xp: 320  } },
      { name: '古木祭壇', enemies: [['golem', 'front'], ['wolf', 'front'], ['witch', 'back'], ['bat', 'back']],     reward: { money: 4000,  xp: 480  } },
      { name: '魔王巢穴', enemies: [['boss', 'front'], ['bat', 'back'], ['bat', 'back']], boss: true,               reward: { money: 10000, xp: 1000 } },
    ],
  },
];
const STAGE_SCALE   = 0.2;  // 每關敵人數值 +20%
const TEAM_MAX      = 4;
const ACTION_DELAY  = 420;  // 每個動作之間的毫秒數（讓玩家看得到發生什麼事）
const RANGE_ICON    = { melee: '🗡️', ranged: '🏹', both: '🗡️🏹' };
const RANGE_LABEL   = { melee: '近戰', ranged: '遠程', both: '遠近皆可' };

// ── 數值計算 ──────────────────────────────

function petCombatStats(petId) {
  const base   = PET_COMBAT[petId] || { hp: 100, atk: 20, def: 5, range: 'melee' };
  const lv     = getPetLevel(petId);
  const trains = (G.petTrainCounts || {})[petId] || 0;
  const mult   = (1 + 0.15 * (lv - 1)) * (1 + 0.05 * trains);
  return {
    hp:    Math.round(base.hp  * mult),
    atk:   Math.round(base.atk * mult),
    def:   Math.round(base.def * mult),
    range: base.range,
    skill: SKILLS[base.skill || DEFAULT_SKILL],
  };
}

function enemyStats(typeId, stageIdx) {
  const t    = ENEMY_TYPES[typeId];
  const mult = 1 + STAGE_SCALE * stageIdx;
  return { hp: Math.round(t.hp * mult), atk: Math.round(t.atk * mult), def: Math.round(t.def * mult) };
}

// 傷害 = 攻擊 × 倍率 − 防禦 ×(1 − 穿透)，最低為攻擊的 15%，再乘 ±10% 浮動
function calcDamage(atk, def, mult = 1, pierce = 0) {
  const raw = atk * mult - def * (1 - pierce);
  const dmg = Math.max(atk * mult * 0.15, raw) * (0.9 + Math.random() * 0.2);
  return Math.max(1, Math.round(dmg));
}

const sleep = ms => new Promise(r => setTimeout(r, ms));
const pick  = arr => arr[Math.floor(Math.random() * arr.length)];

// ── 畫面切換 ──────────────────────────────

let B = null; // 進行中的戰鬥（不存檔）

function openBattleScreen() {
  dismissNPCBubble();
  document.getElementById('battle-screen').hidden = false;
  if (B && !B.over) renderBattle();
  else renderLobby();
}

function closeBattleScreen() {
  if (B && !B.over) {
    showConfirm('要撤退嗎？', '戰鬥中離開視為挑戰失敗，會消耗一次挑戰機會', '撤退', () => {
      B = null;
      document.getElementById('battle-screen').hidden = true;
    });
    return;
  }
  B = null;
  document.getElementById('battle-screen').hidden = true;
}

function setBattleHeader(title, sub, right) {
  document.getElementById('battle-title').textContent     = title;
  document.getElementById('battle-sub').textContent       = sub;
  document.getElementById('battle-hdr-right').textContent = right;
}

// ── 隊伍 ─────────────────────────────────

function cleanTeam() {
  const owned = G.ownedPets || [];
  G.dungeon.team = (G.dungeon.team || []).filter(m => owned.includes(m.id)).slice(0, TEAM_MAX);
}

function toggleTeamMember(petId) {
  cleanTeam();
  const idx = G.dungeon.team.findIndex(m => m.id === petId);
  if (idx >= 0) G.dungeon.team.splice(idx, 1);
  else {
    if (G.dungeon.team.length >= TEAM_MAX) { SFX.error(); showToast(`隊伍最多 ${TEAM_MAX} 隻`); return; }
    // 近戰預設前排、遠程預設後排
    const row = petCombatStats(petId).range === 'melee' ? 'front' : 'back';
    G.dungeon.team.push({ id: petId, row });
  }
  save();
  renderLobby();
}

function toggleTeamRow(petId) {
  const m = G.dungeon.team.find(x => x.id === petId);
  if (!m) return;
  m.row = m.row === 'front' ? 'back' : 'front';
  save();
  renderLobby();
}

// ── 大廳 ─────────────────────────────────

function renderLobby() {
  cleanTeam();
  const dg      = DUNGEONS[0];
  const body    = document.getElementById('battle-body');
  const cleared = G.dungeon.clearedStage || 0;
  const left    = dg.attemptsPerDay - (G.dungeon.attemptsToday || 0);
  const owned   = G.ownedPets || [];
  const team    = G.dungeon.team;

  setBattleHeader('⚔️ 寵物副本', '帶著你的動物夥伴去冒險吧', `第 ${G.day} 天`);

  // 關卡列表
  const stageCards = dg.stages.map((st, i) => {
    const unlocked = i <= cleared;
    const done     = i < cleared;
    const enemies  = st.enemies.map(([e]) => ENEMY_TYPES[e].emoji).join('');
    const rw       = st.reward;
    return `<div class="stage-card${st.boss ? ' boss' : ''}${done ? ' done' : ''}${!unlocked ? ' locked' : ''}" data-stage="${i}">
      <div class="stage-num">${st.boss ? '👑' : i + 1}</div>
      <div class="stage-info">
        <div class="stage-name">${st.name}${done ? ' <span class="stage-done-tag">✔ 已通關</span>' : ''}${!unlocked ? ' 🔒' : ''}</div>
        <div class="stage-enemies">${enemies}</div>
        <div class="stage-reward">💰 ${rw.money.toLocaleString()}　⭐ ${rw.xp} XP${!done ? `　<span class="stage-first">首通 ×${dg.firstClearMult}</span>` : ''}</div>
      </div>
      ${unlocked ? `<button class="stage-go-btn" data-stage="${i}" ${left <= 0 || !team.length ? 'disabled' : ''}>挑戰</button>` : ''}
    </div>`;
  }).join('');

  // 隊伍
  const teamSlots = Array.from({ length: TEAM_MAX }, (_, i) => {
    const m = team[i];
    if (!m) return `<div class="team-slot empty">空位</div>`;
    const pt = PET_TYPES.find(p => p.id === m.id);
    const cs = petCombatStats(m.id);
    return `<div class="team-slot grade-${pt.grade}">
      <div class="team-slot-top">
        <span class="team-slot-emoji">${pt.emoji}</span>
        <div>
          <div class="team-slot-name">${pt.name} <span class="team-slot-lv">Lv.${getPetLevel(m.id)}</span></div>
          <div class="team-slot-range">${RANGE_ICON[cs.range]} ${RANGE_LABEL[cs.range]}</div>
        </div>
        <button class="team-remove-btn" data-petid="${m.id}" title="移出隊伍">✕</button>
      </div>
      <div class="team-slot-stats">❤️ ${cs.hp}　⚔️ ${cs.atk}　🛡️ ${cs.def}</div>
      <button class="team-row-btn ${m.row}" data-petid="${m.id}">${m.row === 'front' ? '🛡️ 前排' : '🏹 後排'}　切換</button>
    </div>`;
  }).join('');

  const ownedCards = owned.length ? owned.map(petId => {
    const pt   = PET_TYPES.find(p => p.id === petId);
    if (!pt) return '';
    const cs   = petCombatStats(petId);
    const inT  = team.some(m => m.id === petId);
    const rg   = RARITIES[pt.grade];
    return `<div class="bpet-card grade-${pt.grade}${inT ? ' in-team' : ''}" data-petid="${petId}">
      <span class="rarity-badge" style="color:${rg.badgeColor};background:${rg.badgeBg}">${rg.name}</span>
      <span class="bpet-emoji">${pt.emoji}</span>
      <div class="bpet-name">${pt.name} <small>Lv.${getPetLevel(petId)}</small></div>
      <div class="bpet-range">${RANGE_ICON[cs.range]} ${RANGE_LABEL[cs.range]}</div>
      <div class="bpet-stats">❤️${cs.hp} ⚔️${cs.atk} 🛡️${cs.def}</div>
      <div class="bpet-skill" title="${cs.skill.desc}">${cs.skill.icon} ${cs.skill.name}</div>
      ${inT ? '<div class="bpet-inteam-tag">出戰中</div>' : ''}
    </div>`;
  }).join('') : '<div class="empty-msg">還沒有寵物夥伴 🐾<br>先到寵物頁面餵食並收留牠們</div>';

  const noFront = team.length && !team.some(m => m.row === 'front');

  body.innerHTML = `
    <div id="lobby">
      <section class="lobby-col lobby-stages">
        <div class="lobby-title">${dg.emoji} ${dg.name}</div>
        <div class="lobby-desc">${dg.desc}</div>
        <div class="lobby-attempts ${left <= 0 ? 'none' : ''}">今日剩餘挑戰：<b>${left}</b> / ${dg.attemptsPerDay}</div>
        <div class="stage-list">${stageCards}</div>
        <div class="lobby-rules">
          <b>戰鬥規則</b><br>
          🗡️ 近戰單位只能攻擊對方<b>前排</b>（前排全滅後才能打後排）<br>
          🏹 遠程單位可以攻擊<b>任何</b>目標<br>
          👹 Boss 遠近皆可，且每 ${BOSS_AOE_EVERY} 回合施放全體攻擊<br>
          💥 技能冷卻結束後按「準備技能」，下回合就會施放
        </div>
      </section>
      <section class="lobby-col lobby-team">
        <div class="lobby-title">🐾 出戰隊伍（${team.length}/${TEAM_MAX}）</div>
        <div class="team-slots">${teamSlots}</div>
        ${noFront ? '<div class="team-warn">⚠️ 至少要有一隻寵物站前排</div>' : ''}
        <div class="lobby-subtitle">點選寵物加入 / 移出隊伍</div>
        <div class="bpet-list">${ownedCards}</div>
      </section>
    </div>`;

  body.querySelectorAll('.bpet-card[data-petid]').forEach(el => el.addEventListener('click', () => toggleTeamMember(el.dataset.petid)));
  body.querySelectorAll('.team-remove-btn').forEach(el => el.addEventListener('click', e => { e.stopPropagation(); toggleTeamMember(el.dataset.petid); }));
  body.querySelectorAll('.team-row-btn').forEach(el => el.addEventListener('click', () => toggleTeamRow(el.dataset.petid)));
  body.querySelectorAll('.stage-go-btn').forEach(el => el.addEventListener('click', () => startBattle(+el.dataset.stage)));
}

// ── 開戰 ─────────────────────────────────

function startBattle(stageIdx) {
  cleanTeam();
  const dg   = DUNGEONS[0];
  const left = dg.attemptsPerDay - (G.dungeon.attemptsToday || 0);
  if (left <= 0)                     { SFX.error(); showToast('今天的挑戰次數用完了，明天再來'); return; }
  if (!G.dungeon.team.length)        { SFX.error(); showToast('先組隊再出發'); return; }
  if (!G.dungeon.team.some(m => m.row === 'front')) { SFX.error(); showToast('至少要有一隻寵物站前排'); return; }
  if (stageIdx > (G.dungeon.clearedStage || 0))     { SFX.error(); showToast('先通過前一關'); return; }

  G.dungeon.attemptsToday = (G.dungeon.attemptsToday || 0) + 1;
  save();

  let uid = 0;
  const pets = G.dungeon.team.map(m => {
    const pt = PET_TYPES.find(p => p.id === m.id);
    const cs = petCombatStats(m.id);
    return { uid: uid++, side: 'pet', id: m.id, name: pt.name, emoji: pt.emoji, grade: pt.grade,
             hp: cs.hp, maxHp: cs.hp, atk: cs.atk, def: cs.def, range: cs.range, row: m.row,
             skill: cs.skill, cd: 0, useSkill: false, alive: true };
  });
  const st = dg.stages[stageIdx];
  const enemies = st.enemies.map(([typeId, row]) => {
    const t  = ENEMY_TYPES[typeId];
    const es = enemyStats(typeId, stageIdx);
    return { uid: uid++, side: 'enemy', id: typeId, name: t.name, emoji: t.emoji, kind: t.kind,
             hp: es.hp, maxHp: es.hp, atk: es.atk, def: es.def, range: t.range, row,
             alive: true, actions: 0 };
  });

  B = { stageIdx, round: 1, pets, enemies, log: [], focus: null, auto: false, busy: false, over: false };
  addLog(`⚔️ 進入「${st.name}」！`, 'sys');
  renderBattle();
}

function addLog(text, cls = '') {
  B.log.push({ text, cls });
  if (B.log.length > 60) B.log.shift();
}

// ── 目標選擇 ──────────────────────────────

function aliveOf(list)       { return list.filter(u => u.alive); }
function frontAlive(list)    { return list.filter(u => u.alive && u.row === 'front'); }

// 近戰：對方前排有人就只能打前排；遠程 / both：任何人
function reachable(attackerRange, targets) {
  const alive = aliveOf(targets);
  if (attackerRange === 'melee') {
    const front = frontAlive(targets);
    if (front.length) return front;
  }
  return alive;
}

// ── 回合流程 ──────────────────────────────

async function doRound() {
  if (!B || B.over || B.busy) return;
  B.busy = true;
  renderBattleControls();

  // 我方行動（撤退或離開畫面會把 B 清掉，所以每一步都要檢查）
  for (const pet of B.pets) {
    if (!B || B.over) break;
    if (!pet.alive) continue;
    const cands = reachable(pet.range, B.enemies);
    if (!cands.length) break;
    const focus  = cands.find(e => e.uid === B.focus);
    const target = focus || pick(cands);

    if (pet.useSkill && pet.cd === 0) {
      const dmg = calcDamage(pet.atk, target.def, pet.skill.mult, pet.skill.pierce);
      pet.useSkill = false;
      pet.cd = pet.skill.cd;
      SFX.skill();
      await applyHit(pet, target, dmg, true);
    } else {
      const dmg = calcDamage(pet.atk, target.def);
      SFX.hit();
      await applyHit(pet, target, dmg, false);
    }
    if (!B) break;
    if (!aliveOf(B.enemies).length) { finishBattle(true); break; }
  }

  // 敵方行動
  if (B && !B.over) {
    for (const en of B.enemies) {
      if (!B || B.over) break;
      if (!en.alive) continue;
      en.actions++;
      if (en.kind === 'boss' && en.actions % BOSS_AOE_EVERY === 0) {
        // Boss 全體攻擊
        addLog(`${en.emoji} ${en.name} 施放 🌪️ 暗影風暴！`, 'boss');
        SFX.skill();
        for (const p of aliveOf(B.pets)) {
          if (!B) break;
          const dmg = calcDamage(en.atk, p.def, BOSS_AOE_MULT);
          await applyHit(en, p, dmg, true, true);
        }
      } else if (en.range === 'both') {
        // Boss：前排有人時 50% 用近戰重擊，否則遠程射擊任意目標
        const front = frontAlive(B.pets);
        if (front.length && Math.random() < 0.5) {
          const t = pick(front);
          await applyHit(en, t, calcDamage(en.atk, t.def, BOSS_MELEE_MULT), false, false, '🗡️ 重擊');
        } else {
          const t = pick(aliveOf(B.pets));
          if (t) await applyHit(en, t, calcDamage(en.atk, t.def), false, false, '🏹 射擊');
        }
      } else {
        const cands = reachable(en.range, B.pets);
        if (!cands.length) break;
        const t = pick(cands);
        SFX.hit();
        await applyHit(en, t, calcDamage(en.atk, t.def), false);
      }
      if (!B) break;
      if (!aliveOf(B.pets).length) { finishBattle(false); break; }
    }
  }

  if (!B) return;
  if (!B.over) {
    B.pets.forEach(p => { if (p.cd > 0) p.cd--; });
    B.round++;
    addLog(`── 第 ${B.round} 回合 ──`, 'sys');
  }
  B.busy = false;
  renderBattle();

  if (!B.over && B.auto) {
    await sleep(600);
    if (B && B.auto && !B.over) doRound();
  }
}

async function applyHit(attacker, target, dmg, isSkill, quiet = false, verb = null) {
  if (!B) return;
  target.hp = Math.max(0, target.hp - dmg);
  if (target.hp === 0) target.alive = false;
  if (B.focus === target.uid && !target.alive) B.focus = null;

  const what = isSkill
    ? (attacker.side === 'pet' ? `${attacker.skill.icon} ${attacker.skill.name}` : '')
    : (verb || '攻擊');
  const cls  = attacker.side === 'pet' ? 'pet' : 'enemy';
  if (!quiet) addLog(`${attacker.emoji} ${attacker.name} ${what} → ${target.emoji} ${target.name}，造成 <b>${dmg}</b> 傷害${target.alive ? '' : '，擊倒！'}`, cls);
  else        addLog(`　↳ ${target.emoji} ${target.name} 受到 <b>${dmg}</b> 傷害${target.alive ? '' : '，倒下了'}`, cls);

  renderBattle();
  flashUnit(attacker.uid, 'attacking');
  flashUnit(target.uid, 'hit', dmg, isSkill);
  await sleep(ACTION_DELAY);
}

function flashUnit(uid, cls, dmg, big) {
  const el = document.querySelector(`.bunit[data-uid="${uid}"]`);
  if (!el) return;
  el.classList.add(cls);
  setTimeout(() => el.classList.remove(cls), 380);
  if (dmg !== undefined) {
    const f = document.createElement('div');
    f.className = 'dmg-float' + (big ? ' big' : '');
    f.textContent = `-${dmg}`;
    el.appendChild(f);
    setTimeout(() => f.remove(), 800);
  }
}

// ── 結算 ─────────────────────────────────

function finishBattle(won) {
  B.over = true;
  B.auto = false;
  const dg = DUNGEONS[0];
  const st = dg.stages[B.stageIdx];
  let money = 0, xp = 0, first = false;

  if (won) {
    first = B.stageIdx >= (G.dungeon.clearedStage || 0);
    const mult = first ? dg.firstClearMult : 1;
    money = st.reward.money * mult;
    xp    = st.reward.xp * mult;
    G.money       += money;
    G.totalEarned += money;
    gainXP(xp);
    if (first) G.dungeon.clearedStage = B.stageIdx + 1;
    save();
    SFX.battleWin();
    addLog(`🎉 勝利！獲得 💰 ${money.toLocaleString()}、⭐ ${xp} XP`, 'win');
  } else {
    SFX.battleLose();
    addLog('💀 全軍覆沒……', 'lose');
  }
  renderBattle();
  if (typeof renderTopBar === 'function') renderTopBar();

  const overlay = document.createElement('div');
  overlay.className = 'generic-confirm-overlay';
  overlay.innerHTML = `
    <div class="rcm-box battle-result ${won ? 'win' : 'lose'}">
      <div class="rcm-icon">${won ? (st.boss ? '👑' : '🏆') : '💀'}</div>
      <div class="rcm-title">${won ? (st.boss ? '擊敗魔王！' : '挑戰成功！') : '挑戰失敗'}</div>
      <div class="rcm-desc">${won
        ? `${first ? `<b style="color:var(--gold-dark)">首次通關 ×${dg.firstClearMult}</b><br>` : ''}💰 +${money.toLocaleString()}<br>⭐ +${xp} XP`
        : '寵物們全都倒下了…<br>試試升級、訓練寵物，或調整前後排配置'}</div>
      <div class="rcm-actions">
        <button class="rcm-confirm battle-ok">回到副本大廳</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  overlay.querySelector('.battle-ok').onclick = () => { overlay.remove(); B = null; renderLobby(); };
}

function retreat() {
  if (!B || B.over) return;
  showConfirm('要撤退嗎？', '本次挑戰將視為失敗（已消耗一次挑戰機會）', '撤退', () => {
    B.auto = false;
    B = null;
    renderLobby();
  });
}

// ── 戰鬥畫面 ──────────────────────────────

function renderBattle() {
  if (!B) return;
  const dg   = DUNGEONS[0];
  const st   = dg.stages[B.stageIdx];
  const body = document.getElementById('battle-body');

  setBattleHeader(`${st.boss ? '👑' : '⚔️'} ${st.name}`, `${dg.name} 第 ${B.stageIdx + 1} 關`, `第 ${B.round} 回合`);

  let field = body.querySelector('#bfield');
  if (!field) {
    body.innerHTML = `
      <div id="bfield">
        <div class="bside enemy-side">
          <div class="brow-label">敵方後排</div><div class="brow" id="row-enemy-back"></div>
          <div class="brow-label">敵方前排</div><div class="brow" id="row-enemy-front"></div>
        </div>
        <div class="bvs">VS</div>
        <div class="bside pet-side">
          <div class="brow-label">我方前排</div><div class="brow" id="row-pet-front"></div>
          <div class="brow-label">我方後排</div><div class="brow" id="row-pet-back"></div>
        </div>
      </div>
      <div id="bbottom">
        <div id="blog"></div>
        <div id="bcontrols"></div>
      </div>`;
    field = body.querySelector('#bfield');
  }

  const rows = { 'enemy-front': [], 'enemy-back': [], 'pet-front': [], 'pet-back': [] };
  B.enemies.forEach(u => rows[`enemy-${u.row}`].push(u));
  B.pets.forEach(u => rows[`pet-${u.row}`].push(u));
  Object.entries(rows).forEach(([key, units]) => {
    const el = document.getElementById(`row-${key}`);
    el.innerHTML = units.length ? units.map(unitHTML).join('') : '<div class="brow-empty">－</div>';
  });

  // 事件：敵人卡 → 設定集火；寵物技能鈕
  field.querySelectorAll('.bunit.enemy').forEach(el => el.addEventListener('click', () => {
    const u = B.enemies.find(e => e.uid === +el.dataset.uid);
    if (!u || !u.alive || B.busy) return;
    B.focus = B.focus === u.uid ? null : u.uid;
    renderBattle();
  }));
  field.querySelectorAll('.bskill-btn').forEach(el => el.addEventListener('click', e => {
    e.stopPropagation();
    const u = B.pets.find(p => p.uid === +el.dataset.uid);
    if (!u || !u.alive || u.cd > 0 || B.busy) return;
    u.useSkill = !u.useSkill;
    renderBattle();
  }));

  // log
  const logEl = document.getElementById('blog');
  logEl.innerHTML = B.log.map(l => `<div class="blog-line ${l.cls}">${l.text}</div>`).join('');
  logEl.scrollTop = logEl.scrollHeight;

  renderBattleControls();
}

function unitHTML(u) {
  const pct     = Math.round(u.hp / u.maxHp * 100);
  const hpCls   = pct > 50 ? 'ok' : pct > 25 ? 'warn' : 'low';
  const isPet   = u.side === 'pet';
  const focused = !isPet && B.focus === u.uid;
  const kindTag = !isPet ? `<span class="bunit-kind ${u.kind}">${ENEMY_KIND_LABEL[u.kind]}</span>` : '';
  let skillBtn = '';
  if (isPet) {
    if (!u.alive)        skillBtn = '';
    else if (u.cd > 0)   skillBtn = `<button class="bskill-btn cd" disabled>${u.skill.icon} 冷卻 ${u.cd}</button>`;
    else                 skillBtn = `<button class="bskill-btn${u.useSkill ? ' ready' : ''}" data-uid="${u.uid}" title="${u.skill.desc}">${u.skill.icon} ${u.useSkill ? '準備施放！' : '準備技能'}</button>`;
  }
  return `<div class="bunit ${u.side}${u.alive ? '' : ' dead'}${focused ? ' focused' : ''}${u.kind === 'boss' ? ' boss' : ''}" data-uid="${u.uid}">
    ${focused ? '<div class="bunit-focus">🎯</div>' : ''}
    ${kindTag}
    <div class="bunit-emoji">${u.alive ? u.emoji : '💀'}</div>
    <div class="bunit-name">${u.name}</div>
    <div class="bunit-range">${RANGE_ICON[u.range]}</div>
    <div class="bhp-bar"><div class="bhp-fill ${hpCls}" style="width:${pct}%"></div></div>
    <div class="bunit-hp">${u.hp} / ${u.maxHp}</div>
    <div class="bunit-stats">⚔️${u.atk} 🛡️${u.def}</div>
    ${skillBtn}
  </div>`;
}

function renderBattleControls() {
  const el = document.getElementById('bcontrols');
  if (!el || !B) return;
  const focus = B.enemies.find(e => e.uid === B.focus);
  el.innerHTML = `
    <div class="bctrl-hint">${focus ? `🎯 集火：${focus.emoji} ${focus.name}（點敵人可切換）` : '點擊敵人可指定集火目標'}</div>
    <div class="bctrl-btns">
      <button id="bnext-btn" class="bctrl-main" ${B.busy || B.over ? 'disabled' : ''}>▶ 下一回合</button>
      <button id="bauto-btn" class="bctrl-sub${B.auto ? ' on' : ''}" ${B.over ? 'disabled' : ''}>${B.auto ? '⏸ 停止自動' : '⏩ 自動戰鬥'}</button>
      <button id="bretreat-btn" class="bctrl-sub danger" ${B.busy || B.over ? 'disabled' : ''}>🏳️ 撤退</button>
    </div>`;
  el.querySelector('#bnext-btn').onclick    = () => doRound();
  el.querySelector('#bretreat-btn').onclick = retreat;
  el.querySelector('#bauto-btn').onclick    = () => {
    B.auto = !B.auto;
    renderBattleControls();
    if (B.auto && !B.busy) doRound();
  };
}

// ── 綁定 ─────────────────────────────────

document.getElementById('battle-btn').addEventListener('click', openBattleScreen);
document.getElementById('battle-back-btn').addEventListener('click', closeBattleScreen);
