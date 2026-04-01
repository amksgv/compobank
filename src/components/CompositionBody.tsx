"use client";

import type { VocabWord } from "@/data/compositions";
import VocabTooltip from "./VocabTooltip";

interface CompositionBodyProps {
  body: string;
  vocabulary: VocabWord[];
  levelColor: string;
}

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export default function CompositionBody({ body, vocabulary, levelColor }: CompositionBodyProps) {
  const paragraphs = body.trim().split(/\n\n+/);

  // Build a regex that matches any vocabulary word (case-insensitive, whole word)
  const vocabMap = new Map<string, VocabWord>();
  vocabulary.forEach((v) => vocabMap.set(v.word.toLowerCase(), v));

  const pattern = vocabulary.map((v) => escapeRegExp(v.word)).join("|");
  const regex = new RegExp(`\\b(${pattern})\\b`, "gi");

  function renderParagraph(text: string, pIdx: number) {
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    const matched = new Set<string>();

    let match;
    // Reset regex
    regex.lastIndex = 0;

    while ((match = regex.exec(text)) !== null) {
      const word = match[0];
      const vocabEntry = vocabMap.get(word.toLowerCase());
      if (!vocabEntry) continue;

      // Only highlight first occurrence per paragraph
      const key = word.toLowerCase();
      if (matched.has(key)) continue;
      matched.add(key);

      // Add text before match
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }

      parts.push(
        <VocabTooltip
          key={`${pIdx}-${match.index}`}
          word={{ ...vocabEntry, word }}
          levelColor={levelColor}
        />
      );

      lastIndex = match.index + word.length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  }

  return (
    <div className="space-y-5">
      {paragraphs.map((p, i) => (
        <p key={i} className="text-stone-800 text-lg leading-loose">
          {renderParagraph(p, i)}
        </p>
      ))}
    </div>
  );
}
