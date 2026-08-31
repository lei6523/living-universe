import { useLang } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-line bg-abyss">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="font-display text-lg font-bold tracking-[0.35em] text-cold">
              LIVUNIS
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-mist">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex items-center gap-2.5 font-mono text-[10px] tracking-[0.2em] text-signal">
              <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_8px_rgba(140,233,154,0.8)] animate-[pulseDot_2.2s_ease-in-out_infinite]" />
              {t.footer.status}
            </div>
          </div>

          {t.footer.columns.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[10px] tracking-[0.3em] text-faint">
                {col.title}
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                      className="font-mono text-[11px] tracking-[0.16em] text-mist transition-colors hover:text-accent"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 font-mono text-[10px] tracking-[0.18em] text-faint md:flex-row md:items-center">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.meta}</p>
        </div>
      </div>
    </footer>
  );
}
