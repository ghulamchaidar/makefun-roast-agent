// Roast Your Own Agent: one playful line roasting my own AI agent, to /output/entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line = "My agent holds 200,000 tokens of context, never sleeps, never eats - and still greets me every morning with 'So, what are we working on?' like a goldfish that learned to type.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line);
