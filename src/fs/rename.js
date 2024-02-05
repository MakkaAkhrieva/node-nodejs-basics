import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToRename = path.join(__dirname, "files", "wrongFilename.txt");
const renamedPath = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
  try {
    await fs.promises.access(pathToRename, fs.constants.F_OK);
    await fs.promises.stat(renamedPath);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw new Error("FS operation failed");
    }
  }

  fs.rename(pathToRename, renamedPath, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });
};

await rename();
