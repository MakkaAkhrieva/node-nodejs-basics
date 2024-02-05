import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const fileStream = fs.createReadStream(filePath);
  const hash = crypto.createHash("sha256");
  hash.setEncoding("hex");
  fileStream.on("end", () => {
    hash.end();
    console.log(hash.read());
  });
  fileStream.pipe(hash);
};

await calculateHash();
