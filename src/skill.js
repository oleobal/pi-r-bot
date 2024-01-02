import crypto from 'crypto';

export function measureSkill(str) {
  return crypto
    .createHash('shake256', { outputLength: 1 })
    .update(str.normalize('NFC').toLowerCase())
    .digest()
    .readUInt8() / 256; // this should actually be /255 but I messed up and now it's too late
}

export function getSkillMessage(str) {
  let result = measureSkill(str);
  return `\`${str}\` est: **${result>=0.5? "SKILL": "NOOB" }** _(Skillmètre: ${(result * 100).toFixed(2)}%)_`;
}