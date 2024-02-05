import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const copy = async () => {
  try {
    const source = path.join(__dirname, "files");
    const dest = path.join(__dirname, "files_copy");
    if (!fs.existsSync(source) || fs.existsSync(dest)) {
      throw new Error("FS operation failed");
    }
    fs.cp(source, dest, { recursive: true }, (err) => {
      if (err) {
        throw err;
      }
    });
  } catch (err) {
    throw err;
  }
};

await copy();
