import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import process from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.resolve(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  const fileStream = fs.createWriteStream(filePath);
  process.stdin.pipe(fileStream);
};

await write();
