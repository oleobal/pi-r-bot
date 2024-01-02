import crypto from "crypto";

export function measureSkill(str) {
  let x =
    crypto
      .createHash("shake256", { outputLength: 1 })
      .update(str.normalize("NFC").toLowerCase())
      .digest()
      .readUInt8() / 255;

  return (Math.cbrt((x - 0.5) * 2) + 1) / 2; // make values closer to extremes
}

export function getSkillMessage(str) {
  function getEmoji(skill) {
    if (skill < 0.02) return "😴";
    if (skill < 0.05) return "🥱";
    if (skill < 0.10) return "🙃";
    if (skill < 0.20) return "🙄";
    if (skill > 0.98) return "🤯";
    if (skill > 0.95) return "😎";
    if (skill > 0.90) return "🔥";
    if (skill > 0.80) return "😉";
    return "😐";
  }

  let result = measureSkill(str);
  return (
    (str.startsWith("<@") && str.endsWith(">") ? str : `\`${str}\``) +
    ` est\xa0: **${result >= 0.5 ? "SKILL" : "NOOB"}** _(Skillmètre\xa0: ${(
      result * 100
    ).toFixed(2)}% ${getEmoji(result)})_`
  );
}
