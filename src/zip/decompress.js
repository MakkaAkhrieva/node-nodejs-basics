import zlib from "zlib";
import fs from "fs";
import path from "path";
import { pipeline } from "stream";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const filePath = path.join(__dirname, "files", "fileToCompress.txt");
  const archivePath = path.join(__dirname, "files", "archive.gz");
  const sourceStream = fs.createReadStream(archivePath);
  const destStream = fs.createWriteStream(filePath);
  const gunzipStream = zlib.createGunzip();
  pipeline(sourceStream, gunzipStream, destStream, (error) => {
    if (error) {
      console.error("Error decompression");
      return;
    }
    console.log("Sucees");
  });
};

await decompress();
