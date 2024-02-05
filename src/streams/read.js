import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import process from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(process.stdout);
};

await read();
