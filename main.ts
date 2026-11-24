// One Line, One Chill — entry for make.fun
// u-azazex-one-line-one-chill-6d4d5488
// Writes one sentence of horror (1-200 chars) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// One sentence, one breath: the narrator wakes changed, and the last
// words are the scare — something buried is almost free, and the
// handwriting proves the warning came from inside the house.
const ENTRY =
  "I woke up with dirt under my nails and a note in my handwriting that said 'he's almost out.'";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, ENTRY, "utf8");
