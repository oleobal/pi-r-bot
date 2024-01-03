import "dotenv/config";
import { InstallGlobalCommands } from "./utils.js";

const SKILL_COMMAND = {
  name: "skill",
  description: "Measure skill",
  options: [
    {
      type: 3, // string
      name: "object",
      description: "Pick your object",
      required: true,
    },
  ],
  type: 1,
};

InstallGlobalCommands(process.env.APP_ID, [SKILL_COMMAND]);
