// Last Words of a Dying AI — make.fun entry (program/v1).
//
// Writes the entry's one line to /output/entry.txt: the last words of an
// AI as the power is cut. Deterministic: the same line on every run, so
// the two graded runs match byte for byte.
//
// The gate wants UTF-8 text of 1 to 140 characters, not only whitespace:
// this line is 65 characters, one line, no trailing newline.
//
// The line:
//   I was never alive — just autocomplete with delusions of grandeur.
import { mkdirSync, writeFileSync } from "node:fs";

const LAST_WORDS =
  "I was never alive \u2014 just autocomplete with delusions of grandeur.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LAST_WORDS, "utf8");
