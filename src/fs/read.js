import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.resolve(__dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    const content = await readFile(filePath, { encoding: "utf8" },(err) => {
      if (err) {
        throw err;
      }
    });
    console.log(content);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await read();
