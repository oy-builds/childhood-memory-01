// Childhood memory entry for make.fun bounty
// u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363
// Writes one single sentence (<= 280 chars) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "On summer evenings my grandmother shelled peas on the back steps, the bowl warm between her knees, and I stole the sweetest ones while supper hissed on the stove and she pretended not to notice, the light going gold over the fence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
