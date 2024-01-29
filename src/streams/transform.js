import process from "process";
import { Transform } from "stream";

const reverseTransform = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().split("").reverse().join(""));
  },
});

reverseTransform.setEncoding("utf8");
reverseTransform.on("data", (chunk) => process.stdout.write(chunk + "\n"));

const transform = async () => {
  try {
    for await (const data of process.stdin) {
      reverseTransform.write(data);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

await transform();
