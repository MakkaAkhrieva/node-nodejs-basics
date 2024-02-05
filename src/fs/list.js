import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirPath = path.join(__dirname, "files");

const list = async () => {
  try {
    
    await fs.promises.access(dirPath, fs.constants.F_OK);
    fs.readdir(dirPath, (err, files) => {
      if (err) {
        throw err;
      }
      console.log(files);
    });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
