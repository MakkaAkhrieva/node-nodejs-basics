import { Worker } from "worker_threads";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
  const coresCount = os.cpus().length;
  const promises = [];

  for (let i = 0; i < coresCount; i += 1) {
    const promise = new Promise((resolve, reject) => {
      const worker = new Worker(path.join(__dirname, "worker.js"), {
        workerData: i + 10,
      });

      worker.on("message", (value) => {
        resolve({
          status: "resolved",
          data: value,
        });
      });

      worker.on("error", (error) => {
        reject({
          status: "error",
          data: null,
          error: error,
        });
      });

      worker.on("exit", () => {
        resolve({
          status: "exited",
          data: null,
        });
      });
    });

    promises.push(promise);
  }

  try {
    const result = await Promise.all(promises);
    console.log(result);
  } catch (error) {
    console.error("Error occurred:", error);
  }
};

await performCalculations();
