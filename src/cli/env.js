import process from "process";

const parseEnv = () => {
  const envs = Object.entries(process.env)
    .filter(([key]) => /^RSS_/.test(key))
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");
  console.log(envs);
};
parseEnv();
