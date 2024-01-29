import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files", "fresh.txt");

  try {
    await fs.access(filePath);
    throw new Error("FS operation failed");
  } catch (err) {
    console.log(err.code);
    if (err.code === "ENOENT") {
      try {
        await fs.writeFile(filePath, "I am fresh and young", { flag: "wx" });
        console.log("File created successfully!");
      } catch (err) {
        throw err;
      }
    } else {
      throw err;
    }
  }
};

await create();
