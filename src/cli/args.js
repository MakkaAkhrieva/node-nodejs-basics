import process from "process";

const parseArgs = () => {
  const result = process.argv
    .filter(
      (arg, index, args) =>
        /^--/.test(arg) || (index > 0 && /^--/.test(args[index - 1]))
    )
    .reduce(
      (res, value, index, arr) =>
        (res +=
          index % 2 === 0
            ? `${value.slice(2)} is `
            : `${value}${index < arr.length - 1 ? ", " : ""}`),
      ""
    );
  console.log(result);
};

parseArgs();
