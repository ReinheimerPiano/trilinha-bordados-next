type PackDecorProps = {
  className?: string;
  accent?: "purple" | "teal";
};

export default function PackDecor({ className = "", accent = "purple" }: PackDecorProps) {
  const stripe = accent === "teal" ? "rgba(52, 211, 153, 0.22)" : "rgba(139, 92, 246, 0.2)";

  return (
    <>
      <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`.trim()}>
        <svg viewBox="0 0 1200 420" preserveAspectRatio="none" className="h-full w-full" role="presentation">
          <defs>
            <pattern id="pg-stripes" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
              <rect width="8" height="16" fill={stripe} />
            </pattern>
          </defs>
          <circle cx="110" cy="90" r="58" fill="rgba(251,191,36,0.35)" />
          <rect x="880" y="30" width="170" height="90" rx="45" fill="url(#pg-stripes)" />
          <path d="M1010 270 L1080 370 L940 370 Z" fill="rgba(244,114,182,0.30)" />
          <rect x="70" y="280" width="110" height="110" rx="18" fill="rgba(52,211,153,0.28)" />
          <path
            d="M 220 290 C 360 230, 480 355, 620 290 S 900 220, 1050 295"
            fill="none"
            stroke="rgba(30,41,59,0.42)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="10 10"
          />
        </svg>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-45"
        style={{
          backgroundImage: "radial-gradient(rgba(30,41,59,0.16) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />
    </>
  );
}
