import Link from "next/link";
import { compositions, levelColors } from "@/data/compositions";

const levelLabels = [
  { level: 1, label: "Primary 1", ages: "Age 7" },
  { level: 2, label: "Primary 2", ages: "Age 8" },
  { level: 3, label: "Primary 3", ages: "Age 9" },
  { level: 4, label: "Primary 4", ages: "Age 10" },
  { level: 5, label: "Primary 5", ages: "Age 11" },
  { level: 6, label: "Primary 6", ages: "Age 12" },
];

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 sm:py-16">
      {/* Header */}
      <header className="text-center mb-14">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-stone-900">
          Compo<span className="text-amber-600">Bank</span>
        </h1>
        <p className="mt-3 text-lg text-stone-500 max-w-xl mx-auto">
          Model compositions for Primary 1 to 6 with interactive vocabulary.
          Tap highlighted words to learn their meanings.
        </p>
      </header>

      {/* Level grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {levelLabels.map(({ level, label, ages }) => {
          const colors = levelColors[level];
          const count = compositions.filter((c) => c.level === level).length;

          return (
            <Link
              key={level}
              href={`/level/${level}`}
              className={`group relative rounded-2xl border ${colors.border} ${colors.bg} p-6 transition-all hover:shadow-lg hover:-translate-y-0.5`}
            >
              {/* Level number badge */}
              <span
                className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${colors.accent} text-white font-bold text-lg mb-4`}
              >
                {level}
              </span>

              <h2 className={`text-xl font-bold ${colors.text}`}>{label}</h2>
              <p className="text-sm text-stone-500 mt-1">{ages}</p>
              <p className="text-sm text-stone-400 mt-3">
                {count} {count === 1 ? "composition" : "compositions"}
              </p>

              {/* Arrow */}
              <span className="absolute top-6 right-6 text-stone-300 group-hover:text-stone-500 transition-colors text-xl">
                &rarr;
              </span>
            </Link>
          );
        })}
      </div>

      {/* Upload section */}
      <section className="mt-16 rounded-2xl border-2 border-dashed border-stone-300 bg-white/60 p-8 text-center">
        <div className="text-3xl mb-3 text-stone-300">&#128196;</div>
        <h3 className="text-lg font-bold text-stone-700">
          Generate from PDF
        </h3>
        <p className="text-sm text-stone-400 mt-1 max-w-md mx-auto">
          Upload a PDF and let AI generate a composition with vocabulary
          highlights. Coming soon.
        </p>
        <button
          disabled
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-stone-200 px-5 py-2.5 text-sm font-semibold text-stone-400 cursor-not-allowed"
        >
          Upload PDF
        </button>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-xs text-stone-400">
        CompoBank &copy; {new Date().getFullYear()}
      </footer>
    </main>
  );
}
