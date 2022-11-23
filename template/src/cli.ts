import parseArgs from "./utils/parseArgs";

import welcome from "./utils/welcome";

const sleep = async (ms: number = 500) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function cli(args: Args) {
  if (
    args.includes("-h") ||
    args.includes("--help") ||
    args.slice(2).length === 0
  ) {
    welcome(true);
  } else {
    welcome();
    await sleep();
  }

  const options = parseArgs(args);
}
