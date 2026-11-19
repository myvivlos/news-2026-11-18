import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const MAX_BYTES = 1048576;

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR || "/output");
const dest = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);

const size = statSync(dest).size;
if (size > MAX_BYTES) {
  throw new Error(`entry.png is ${size} bytes, exceeding the ${MAX_BYTES}-byte (1 MiB) limit`);
}
