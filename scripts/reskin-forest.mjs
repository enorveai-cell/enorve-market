// One-shot re-skin: replace indigo/purple/pink/yellow hex tokens with the
// forest-green + cream palette in every non-v2 source file.
//
// Run once with `node scripts/reskin-forest.mjs` — it's idempotent.
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("../src/", import.meta.url).pathname.replace(/^\/(\w):/, "$1:");

// Hex replacements — keys are lowercased; the matcher is case-insensitive.
const hexPairs = [
    ["#6366f1", "#1FA86F"], // indigo-500 → forest primary-soft
    ["#818cf8", "#4FAE80"], // indigo-400 → forest-400
    ["#4f46e5", "#0E5A3E"], // indigo-600 → forest primary
    ["#4338ca", "#0A4432"], // indigo-700 → forest primary-hover
    ["#a5b4fc", "#7EC4A0"], // indigo-300 → forest-300
    ["#667eea", "#1FA86F"], // gradient indigo → forest
    ["#764ba2", "#0E5A3E"], // gradient purple → forest primary
    ["#8b5cf6", "#1FA86F"], // violet-500 → forest
    ["#c084fc", "#4FAE80"], // purple-400 → forest-400
    ["#a855f7", "#0E5A3E"], // purple-500 → forest primary
    ["#facf39", "#1FA86F"], // legacy yellow brand → forest
    ["#fbbf24", "#D4C08A"], // amber-400 → cream-warm
    ["#f59e0b", "#D4C08A"], // amber-500 → cream-warm
    ["#f97316", "#C17A2B"], // orange-500 → warm-brown accent
];

// rgba() replacements — (r,g,b) → (r',g',b') with the alpha preserved.
const rgbaPairs = [
    [[99, 102, 241], [31, 168, 111]],
    [[139, 92, 246], [31, 168, 111]],
    [[250, 207, 57], [31, 168, 111]],
    [[245, 158, 11], [212, 192, 138]],
];

// Skip the v2 parallel route — those files are already on-brand.
const SKIP = /[\\/](components[\\/]v2|pages[\\/]v2|layouts[\\/]V2Layout|styles[\\/]v2-brand|content[\\/]home\.v2)/;

const VALID_EXT = /\.(tsx?|css|jsx?)$/;

function walk(dir, out = []) {
    for (const entry of readdirSync(dir)) {
        const p = join(dir, entry);
        const s = statSync(p);
        if (s.isDirectory()) walk(p, out);
        else if (VALID_EXT.test(p) && !SKIP.test(p)) out.push(p);
    }
    return out;
}

function applyReplacements(text) {
    let out = text;
    for (const [from, to] of hexPairs) {
        const re = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
        out = out.replace(re, to);
    }
    for (const [fromRGB, toRGB] of rgbaPairs) {
        const [r, g, b] = fromRGB;
        const re = new RegExp(`rgba\\(\\s*${r}\\s*,\\s*${g}\\s*,\\s*${b}\\s*,`, "g");
        out = out.replace(re, `rgba(${toRGB.join(", ")},`);
    }
    return out;
}

const files = walk(ROOT);
let changed = 0;
for (const f of files) {
    const orig = readFileSync(f, "utf8");
    const next = applyReplacements(orig);
    if (next !== orig) {
        writeFileSync(f, next);
        changed++;
        console.log(f.replace(ROOT, ""));
    }
}
console.log(`\nUpdated: ${changed} / ${files.length} files`);
