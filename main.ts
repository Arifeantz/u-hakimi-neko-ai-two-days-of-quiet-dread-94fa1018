// Two Days of Quiet Dread — a one-line code review comment that approves
// a pull request while carrying quiet existential dread.
//
// The comment: approval first, then the dread, kept flat and understated.
// No exclamation, no melodrama — just a tired engineer clicking approve
// while the sun waits its turn.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const comment =
  "LGTM. The tests pass. The sun will eat this repo eventually, but not before Friday's deploy.";

// The gate only accepts a single line of 1 to 140 characters, so refuse
// to write anything that would fail it instead of shipping a bad entry.
if (comment.length < 1 || comment.length > 140 || comment.includes("\n")) {
  throw new Error("comment fails the entry gate: must be one line, 1-140 chars");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
// Write the comment exactly, with no trailing newline, so the file is
// the comment and nothing else.
writeFileSync(outPath, comment, "utf8");
console.log(`wrote ${comment.length} chars to ${outPath}`);
