type DnaHeroBackgroundProps = {
  className?: string;
};

export default function DnaHeroBackground({ className }: DnaHeroBackgroundProps) {
  return (
    <div className={`dna-hero ${className ?? ""}`.trim()} aria-hidden="true">
      <div className="dna-layer dna-variant-1">
        <svg viewBox="0 0 1200 600" role="presentation" aria-hidden="true">
          <defs>
            <linearGradient id="dna-grad-1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6EF3FF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3C7CFF" stopOpacity="0.25" />
            </linearGradient>
          </defs>
          <path d="M80 80 C 260 160, 380 40, 560 120 S 900 200, 1120 80" fill="none" stroke="url(#dna-grad-1)" strokeWidth="2" />
          <path d="M80 520 C 260 440, 380 560, 560 480 S 900 400, 1120 520" fill="none" stroke="url(#dna-grad-1)" strokeWidth="2" />
          <g fill="#B5F4FF" opacity="0.35">
            <circle cx="160" cy="130" r="3" />
            <circle cx="260" cy="170" r="2" />
            <circle cx="360" cy="120" r="3" />
            <circle cx="470" cy="160" r="2" />
            <circle cx="650" cy="120" r="3" />
            <circle cx="760" cy="170" r="2" />
            <circle cx="880" cy="140" r="3" />
            <circle cx="1020" cy="160" r="2" />
          </g>
        </svg>
      </div>
      <div className="dna-layer dna-variant-2">
        <svg viewBox="0 0 1200 600" role="presentation" aria-hidden="true">
          <defs>
            <linearGradient id="dna-grad-2" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9D7BFF" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#44FFD1" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path d="M60 140 C 260 260, 420 80, 640 190 S 980 260, 1160 140" fill="none" stroke="url(#dna-grad-2)" strokeWidth="2" />
          <path d="M60 460 C 260 340, 420 520, 640 410 S 980 340, 1160 460" fill="none" stroke="url(#dna-grad-2)" strokeWidth="2" />
          <g fill="#C8FFE8" opacity="0.3">
            <circle cx="140" cy="210" r="3" />
            <circle cx="260" cy="240" r="2" />
            <circle cx="380" cy="190" r="3" />
            <circle cx="520" cy="230" r="2" />
            <circle cx="700" cy="200" r="3" />
            <circle cx="820" cy="230" r="2" />
            <circle cx="960" cy="210" r="3" />
          </g>
        </svg>
      </div>
      <div className="dna-layer dna-variant-3">
        <svg viewBox="0 0 1200 600" role="presentation" aria-hidden="true">
          <defs>
            <linearGradient id="dna-grad-3" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF9BE8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#5BE7FF" stopOpacity="0.25" />
            </linearGradient>
          </defs>
          <path d="M90 110 C 260 220, 420 40, 620 150 S 960 220, 1110 110" fill="none" stroke="url(#dna-grad-3)" strokeWidth="2" />
          <path d="M90 490 C 260 380, 420 560, 620 450 S 960 380, 1110 490" fill="none" stroke="url(#dna-grad-3)" strokeWidth="2" />
          <g fill="#FFD6F6" opacity="0.28">
            <circle cx="170" cy="180" r="3" />
            <circle cx="300" cy="210" r="2" />
            <circle cx="430" cy="170" r="3" />
            <circle cx="580" cy="200" r="2" />
            <circle cx="760" cy="180" r="3" />
            <circle cx="900" cy="210" r="2" />
            <circle cx="1040" cy="190" r="3" />
          </g>
        </svg>
      </div>
      <div className="dna-gradient" />
    </div>
  );
}
