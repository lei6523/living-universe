import { useLang } from "../context/LanguageContext";

export default function Nav() {
  const { t, lang, setLang } = useLang();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-void/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-display text-[15px] font-bold tracking-[0.35em] text-cold transition-colors hover:text-accent"
        >
          LIVUNIS
        </a>

        <nav className="hidden items-center gap-8 font-mono text-[11px] tracking-[0.22em] text-mist md:flex">
          {t.nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          {/* language switch */}
          <div
            className="flex items-center gap-2 border border-line px-2.5 py-1 font-mono text-[10px] tracking-[0.15em]"
            role="group"
            aria-label="Language / 语言"
          >
            <button
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={
                lang === "en"
                  ? "text-accent"
                  : "text-faint transition-colors hover:text-mist"
              }
            >
              {t.nav.switchEn}
            </button>
            <span className="text-faint/60">/</span>
            <button
              onClick={() => setLang("zh")}
              aria-pressed={lang === "zh"}
              className={
                lang === "zh"
                  ? "text-accent"
                  : "text-faint transition-colors hover:text-mist"
              }
            >
              {t.nav.switchZh}
            </button>
          </div>

          <div className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.2em] text-signal">
            <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_8px_rgba(140,233,154,0.8)] animate-[pulseDot_2.2s_ease-in-out_infinite]" />
            {t.nav.status}
          </div>
        </div>
      </div>
    </header>
  );
}
