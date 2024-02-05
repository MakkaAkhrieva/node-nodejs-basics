import zlib from "zlib";
import fs from "fs";
import path from "path";
import { pipeline } from "stream";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const filePath = path.join(__dirname, "files", "fileToCompress.txt");
  const archivePath = path.join(__dirname, "files", "archive.gz");
  const sourceStream = fs.createReadStream(filePath);
  const destStream = fs.createWriteStream(archivePath);
  const gzipStream = zlib.createGzip();
  pipeline(sourceStream, gzipStream, destStream, (error) => {
    if (error) {
      console.error("Error during compression");
      return;
    }
    console.log("Success");
  });
};

await compress();
