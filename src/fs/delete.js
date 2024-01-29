import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  try {
    await fs.promises.access(filePath, fs.constants.F_OK);
    fs.rm(filePath, (err) => {
      if (err) {
        throw err;
      }
      console.log("File deleted successfully!");
    });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await remove();
