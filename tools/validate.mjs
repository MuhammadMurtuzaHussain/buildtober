// Validates the idea bank embedded in index.html. Run with: npm run validate
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const start = html.indexOf('var RAW=[');
const end = html.indexOf('];\nvar IDEAS', start);
if (start < 0 || end < 0) {
  console.error('Could not find the RAW idea array in index.html');
  process.exit(1);
}

const RAW = new Function('return ' + html.slice(start + 'var RAW='.length, end + 1))();
const THEMES = new Set(['intel', 'ai', 'detect', 'cloud', 'grc', 'human', 'dev']);
const errors = [];
const seen = new Set();
const perLevel = { 1: 0, 2: 0, 3: 0 };

RAW.forEach((r, i) => {
  const where = `idea ${i + 1}`;
  if (!Array.isArray(r) || r.length !== 6) { errors.push(`${where}: expected 6 fields`); return; }
  const [level, cat, theme, title, problem, step] = r;
  if (![1, 2, 3].includes(level)) errors.push(`${where}: level must be 1, 2 or 3`);
  else perLevel[level]++;
  if (!['c', 'd'].includes(cat)) errors.push(`${where}: category must be "c" or "d"`);
  if (!THEMES.has(theme)) errors.push(`${where}: unknown theme "${theme}"`);
  [['title', title], ['problem', problem], ['first step', step]].forEach(([n, v]) => {
    if (typeof v !== 'string' || v.trim().length < 8) errors.push(`${where}: ${n} is missing or too short`);
  });
  if (typeof problem === 'string' && !/[.]$/.test(problem)) errors.push(`${where}: problem should end with a full stop`);
  if (typeof step === 'string' && !/[.]$/.test(step)) errors.push(`${where}: first step should end with a full stop`);
  const key = String(title).toLowerCase();
  if (seen.has(key)) errors.push(`${where}: duplicate title "${title}"`);
  seen.add(key);
});

Object.entries(perLevel).forEach(([l, n]) => {
  if (n < 10) errors.push(`level ${l} has only ${n} ideas (minimum 10)`);
});

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`OK: ${RAW.length} ideas (level 1: ${perLevel[1]}, level 2: ${perLevel[2]}, level 3: ${perLevel[3]})`);
