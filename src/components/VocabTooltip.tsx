"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import type { VocabWord } from "@/data/compositions";

interface VocabTooltipProps {
  word: VocabWord;
  levelColor: string;
}

export default function VocabTooltip({ word, levelColor }: VocabTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<"above" | "below">("below");
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    setPosition(spaceBelow < 200 ? "above" : "below");
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    updatePosition();

    function handleClickOutside(e: MouseEvent) {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, updatePosition]);

  return (
    <span className="relative inline">
      <span
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`cursor-pointer border-b-2 border-dashed ${levelColor} font-semibold transition-colors hover:opacity-80`}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        {word.word}
      </span>

      {isOpen && (
        <span
          ref={tooltipRef}
          className={`absolute z-50 w-72 rounded-xl border border-stone-200 bg-white p-4 shadow-xl ${
            position === "above" ? "bottom-full mb-2" : "top-full mt-2"
          } left-1/2 -translate-x-1/2`}
          role="tooltip"
        >
          <span className="block mb-1">
            <span className="font-bold text-stone-900 text-base">{word.word}</span>
            <span className="ml-2 text-xs font-medium text-stone-400 italic">
              {word.partOfSpeech}
            </span>
          </span>
          <span className="block text-sm text-stone-700 leading-relaxed mb-2">
            {word.meaning}
          </span>
          <span className="block text-sm italic text-stone-500 border-t border-stone-100 pt-2">
            &ldquo;{word.example}&rdquo;
          </span>

          {/* Arrow */}
          <span
            className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-stone-200 rotate-45 ${
              position === "above"
                ? "bottom-0 translate-y-1/2 border-r border-b"
                : "top-0 -translate-y-1/2 border-l border-t"
            }`}
          />
        </span>
      )}
    </span>
  );
}
