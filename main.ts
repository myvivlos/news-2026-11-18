import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
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

// Validate the copied file is really a 1024x1024 PNG by parsing its IHDR.
const EXPECTED = 1024;
const PNG_MAGIC = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const bytes = readFileSync(dest);
if (bytes.length < 24 || !PNG_MAGIC.every((b, i) => bytes[i] === b)) {
  throw new Error("entry.png is not a PNG: missing the 8-byte PNG signature");
}
if (bytes.toString("latin1", 12, 16) !== "IHDR") {
  throw new Error("entry.png is not a valid PNG: first chunk is not IHDR");
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width !== EXPECTED || height !== EXPECTED) {
  throw new Error(`entry.png is ${width}x${height}, expected exactly ${EXPECTED}x${EXPECTED}`);
}
