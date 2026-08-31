/**
 * Four corner brackets for panel frames — the "archive terminal"
 * window treatment.
 */
export default function CornerFrame({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden="true"
    >
      <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-accent/60" />
      <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-accent/60" />
      <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-accent/60" />
      <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-accent/60" />
    </div>
  );
}
