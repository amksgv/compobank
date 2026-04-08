import type { Composition, VocabWord } from "./types";
import { p1 } from "./compositions-p1";
import { p2 } from "./compositions-p2";
import { p3 } from "./compositions-p3";
import { p4 } from "./compositions-p4";
import { p5 } from "./compositions-p5";
import { p6 } from "./compositions-p6";

export type { Composition, VocabWord };

export const compositions: Composition[] = [...p1, ...p2, ...p3, ...p4, ...p5, ...p6];


export function getCompositionsByLevel(level: number): Composition[] {
  return compositions.filter((c) => c.level === level);
}

export function getComposition(level: number, slug: string): Composition | undefined {
  return compositions.find((c) => c.level === level && c.slug === slug);
}

export const levelColors: Record<number, { bg: string; text: string; accent: string; light: string; border: string }> = {
  1: { bg: "bg-amber-50", text: "text-amber-900", accent: "bg-amber-500", light: "bg-amber-100", border: "border-amber-200" },
  2: { bg: "bg-sky-50", text: "text-sky-900", accent: "bg-sky-500", light: "bg-sky-100", border: "border-sky-200" },
  3: { bg: "bg-emerald-50", text: "text-emerald-900", accent: "bg-emerald-500", light: "bg-emerald-100", border: "border-emerald-200" },
  4: { bg: "bg-violet-50", text: "text-violet-900", accent: "bg-violet-500", light: "bg-violet-100", border: "border-violet-200" },
  5: { bg: "bg-rose-50", text: "text-rose-900", accent: "bg-rose-500", light: "bg-rose-100", border: "border-rose-200" },
  6: { bg: "bg-indigo-50", text: "text-indigo-900", accent: "bg-indigo-500", light: "bg-indigo-100", border: "border-indigo-200" },
};
