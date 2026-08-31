export type { Dict, Lang } from "./types";
import type { Dict, Lang } from "./types";
import { en } from "./en";
import { zh } from "./zh";

export const dicts: Record<Lang, Dict> = { en, zh };

export const DEFAULT_LANG: Lang = "en";

export function detectLang(): Lang {
  try {
    const saved = localStorage.getItem("livunis-lang");
    if (saved === "en" || saved === "zh") return saved;
  } catch {
    /* storage unavailable — ignore */
  }
  if (typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("zh")) {
    return "zh";
  }
  return DEFAULT_LANG;
}
