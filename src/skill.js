import crypto from "crypto";

export function measureSkill(str) {
  let digest = crypto
    .createHash("shake256", { outputLength: 2 })
    .update(str.normalize("NFC").toLowerCase())
    .digest();
  let skill = digest.readUInt8() / 255;

  skill = (Math.cbrt((skill - 0.5) * 2) + 1) / 2; // make values closer to extremes

  skill *= 100;

  if (skill != 0 && skill != 100) {
    console.log(skill);
    skill = Math.floor(skill) + digest.readUint8(1) / 255;
    // to avoid the same decimals popping up again and again, get them from the hash too
    // except for whole values (which are only 0 and 100)
  }

  return skill;
}

export function getSkillMessage(str) {
  function getEmoji(skill) {
    if (skill == 0) return "🫠";
    if (skill < 2) return "😴";
    if (skill < 5) return "🥱";
    if (skill < 10) return "🙃";
    if (skill < 20) return "🙄";

    if (skill == 100) return "🤯";
    if (skill > 98) return "🙀";
    if (skill > 95) return "🫨";
    if (skill > 90) return "😎";
    if (skill > 80) return "😉";

    return "😐";
  }

  let result = measureSkill(str);
  return (
    (str.startsWith("<@") && str.endsWith(">") ? str : `\`${str}\``) +
    ` est\xa0: **${
      result >= 50 ? "SKILL" : "NOOB"
    }** _(Skillmètre\xa0: ${result.toFixed(2)}% ${getEmoji(result)})_`
  );
}
