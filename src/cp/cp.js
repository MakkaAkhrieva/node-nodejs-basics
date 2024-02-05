import { fork } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (params) => {
  fork(path.join(__dirname, "files", "script.js"), params);
};

spawnChildProcess(["qwerty", 123456, null, 56]);
