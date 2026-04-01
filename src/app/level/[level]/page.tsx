import Link from "next/link";
import { getCompositionsByLevel, levelColors } from "@/data/compositions";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ level: string }>;
}

const levelNames: Record<number, string> = {
  1: "Primary 1",
  2: "Primary 2",
  3: "Primary 3",
  4: "Primary 4",
  5: "Primary 5",
  6: "Primary 6",
};

export default async function LevelPage({ params }: Props) {
  const { level: levelStr } = await params;
  const level = parseInt(levelStr, 10);
  if (isNaN(level) || level < 1 || level > 6) notFound();

  const comps = getCompositionsByLevel(level);
  const colors = levelColors[level];
  const name = levelNames[level];

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-stone-400">
        <Link href="/" className="hover:text-stone-600 transition-colors">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className={`font-semibold ${colors.text}`}>{name}</span>
      </nav>

      <header className="mb-10">
        <span
          className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${colors.accent} text-white font-bold text-xl mb-4`}
        >
          {level}
        </span>
        <h1 className={`text-3xl sm:text-4xl font-extrabold ${colors.text}`}>
          {name}
        </h1>
        <p className="text-stone-500 mt-2">
          {comps.length} {comps.length === 1 ? "composition" : "compositions"} available
        </p>
      </header>

      {comps.length === 0 ? (
        <div className="rounded-2xl border border-stone-200 bg-white p-8 text-center text-stone-400">
          No compositions yet for this level. Check back soon!
        </div>
      ) : (
        <div className="space-y-4">
          {comps.map((comp) => (
            <Link
              key={comp.slug}
              href={`/level/${level}/${comp.slug}`}
              className={`group block rounded-2xl border ${colors.border} ${colors.bg} p-5 sm:p-6 transition-all hover:shadow-md hover:-translate-y-0.5`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className={`text-lg font-bold ${colors.text} group-hover:underline`}>
                    {comp.title}
                  </h2>
                  <p className="text-sm text-stone-500 mt-1">
                    {comp.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-3 text-xs text-stone-400">
                    <span>{comp.wordCount} words</span>
                    <span>&middot;</span>
                    <span>{comp.vocabulary.length} vocab words</span>
                    <span>&middot;</span>
                    <span className={`${colors.light} ${colors.text} px-2 py-0.5 rounded-full font-semibold`}>
                      {comp.theme}
                    </span>
                  </div>
                </div>
                <span className="text-stone-300 group-hover:text-stone-500 transition-colors text-xl mt-1 shrink-0">
                  &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-10">
        <Link
          href="/"
          className="text-sm text-stone-400 hover:text-stone-600 transition-colors"
        >
          &larr; Back to all levels
        </Link>
      </div>
    </main>
  );
}
