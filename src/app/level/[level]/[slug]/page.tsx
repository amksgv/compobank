import Link from "next/link";
import { getComposition, levelColors } from "@/data/compositions";
import { notFound } from "next/navigation";
import CompositionBody from "@/components/CompositionBody";

interface Props {
  params: Promise<{ level: string; slug: string }>;
}

const levelNames: Record<number, string> = {
  1: "Primary 1",
  2: "Primary 2",
  3: "Primary 3",
  4: "Primary 4",
  5: "Primary 5",
  6: "Primary 6",
};

const borderColorMap: Record<number, string> = {
  1: "border-amber-400",
  2: "border-sky-400",
  3: "border-emerald-400",
  4: "border-violet-400",
  5: "border-rose-400",
  6: "border-indigo-400",
};

export default async function CompositionPage({ params }: Props) {
  const { level: levelStr, slug } = await params;
  const level = parseInt(levelStr, 10);
  if (isNaN(level) || level < 1 || level > 6) notFound();

  const comp = getComposition(level, slug);
  if (!comp) notFound();

  const colors = levelColors[level];
  const name = levelNames[level];

  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-stone-400">
        <Link href="/" className="hover:text-stone-600 transition-colors">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/level/${level}`}
          className="hover:text-stone-600 transition-colors"
        >
          {name}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-stone-600 font-semibold">{comp.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span
            className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${colors.accent} text-white text-sm font-bold`}
          >
            {level}
          </span>
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors.light} ${colors.text}`}>
            {comp.theme}
          </span>
          <span className="text-xs text-stone-400">
            {comp.wordCount} words
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif">
          {comp.title}
        </h1>
        <p className="text-stone-500 mt-2">{comp.description}</p>
      </header>

      {/* Vocab hint */}
      <div className={`rounded-xl ${colors.bg} border ${colors.border} px-4 py-3 mb-8 text-sm text-stone-600`}>
        <span className="font-semibold">Tip:</span> Tap the{" "}
        <span className={`border-b-2 border-dashed ${borderColorMap[level]} font-semibold`}>
          underlined words
        </span>{" "}
        to see their meanings.
      </div>

      {/* Composition body */}
      <article className="composition-text rounded-2xl bg-white border border-stone-200 shadow-sm p-6 sm:p-8">
        <CompositionBody
          body={comp.body}
          vocabulary={comp.vocabulary}
          levelColor={borderColorMap[level]}
        />
      </article>

      {/* Vocabulary list */}
      <section className="mt-10">
        <h2 className="text-lg font-bold text-stone-800 mb-4">
          Vocabulary List ({comp.vocabulary.length} words)
        </h2>
        <div className="space-y-3">
          {comp.vocabulary.map((v) => (
            <div
              key={v.word}
              className="rounded-xl bg-white border border-stone-200 p-4"
            >
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-bold text-stone-900">{v.word}</span>
                <span className="text-xs text-stone-400 italic">
                  {v.partOfSpeech}
                </span>
              </div>
              <p className="text-sm text-stone-600">{v.meaning}</p>
              <p className="text-sm text-stone-400 italic mt-1">
                &ldquo;{v.example}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="mt-10 flex justify-between">
        <Link
          href={`/level/${level}`}
          className="text-sm text-stone-400 hover:text-stone-600 transition-colors"
        >
          &larr; Back to {name}
        </Link>
        <Link
          href="/"
          className="text-sm text-stone-400 hover:text-stone-600 transition-colors"
        >
          All levels
        </Link>
      </div>
    </main>
  );
}
