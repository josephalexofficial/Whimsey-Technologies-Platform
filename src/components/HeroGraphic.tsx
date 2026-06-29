export default function HeroGraphic() {
  return (
    <div className="relative flex w-full items-center justify-center">
      <svg
        viewBox="0 0 400 400"
        className="h-auto w-full max-w-[340px] md:max-w-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >        {/* Background grid */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0056D2" strokeOpacity="0.08" strokeWidth="1" />
          </pattern>
          <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0056D2" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0056D2" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <rect width="400" height="400" fill="url(#grid)" rx="16" />

        {/* Connection lines */}
        <line x1="100" y1="120" x2="200" y2="80" stroke="#0056D2" strokeOpacity="0.3" strokeWidth="1.5" />
        <line x1="200" y1="80" x2="300" y2="140" stroke="#0056D2" strokeOpacity="0.3" strokeWidth="1.5" />
        <line x1="100" y1="120" x2="150" y2="220" stroke="#0056D2" strokeOpacity="0.3" strokeWidth="1.5" />
        <line x1="300" y1="140" x2="250" y2="240" stroke="#0056D2" strokeOpacity="0.3" strokeWidth="1.5" />
        <line x1="150" y1="220" x2="250" y2="240" stroke="#0056D2" strokeOpacity="0.3" strokeWidth="1.5" />
        <line x1="200" y1="80" x2="200" y2="200" stroke="#0056D2" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="150" y1="220" x2="80" y2="300" stroke="#0056D2" strokeOpacity="0.2" strokeWidth="1" />
        <line x1="250" y1="240" x2="320" y2="310" stroke="#0056D2" strokeOpacity="0.2" strokeWidth="1" />

        {/* Nodes */}
        <circle cx="100" cy="120" r="24" fill="url(#nodeGrad)" stroke="#0056D2" strokeWidth="2" />
        <circle cx="200" cy="80" r="20" fill="url(#nodeGrad)" stroke="#0056D2" strokeWidth="2" />
        <circle cx="300" cy="140" r="22" fill="url(#nodeGrad)" stroke="#0056D2" strokeWidth="2" />
        <circle cx="150" cy="220" r="28" fill="url(#nodeGrad)" stroke="#0056D2" strokeWidth="2" />
        <circle cx="250" cy="240" r="26" fill="url(#nodeGrad)" stroke="#0056D2" strokeWidth="2" />
        <circle cx="200" cy="200" r="16" fill="#0056D2" fillOpacity="0.15" stroke="#0056D2" strokeWidth="1.5" />
        <circle cx="80" cy="300" r="14" fill="url(#nodeGrad)" stroke="#0056D2" strokeWidth="1.5" />
        <circle cx="320" cy="310" r="14" fill="url(#nodeGrad)" stroke="#0056D2" strokeWidth="1.5" />

        {/* UI wireframe blocks */}
        <rect x="60" y="50" width="80" height="50" rx="6" stroke="#0056D2" strokeOpacity="0.2" strokeWidth="1" fill="#0056D2" fillOpacity="0.03" />
        <rect x="70" y="60" width="40" height="4" rx="2" fill="#0056D2" fillOpacity="0.3" />
        <rect x="70" y="70" width="60" height="3" rx="1.5" fill="#0056D2" fillOpacity="0.15" />
        <rect x="70" y="78" width="50" height="3" rx="1.5" fill="#0056D2" fillOpacity="0.1" />

        <rect x="260" y="260" width="90" height="60" rx="6" stroke="#0056D2" strokeOpacity="0.2" strokeWidth="1" fill="#0056D2" fillOpacity="0.03" />
        <rect x="270" y="270" width="30" height="30" rx="4" fill="#0056D2" fillOpacity="0.1" />
        <rect x="308" y="270" width="30" height="12" rx="2" fill="#0056D2" fillOpacity="0.15" />
        <rect x="308" y="288" width="30" height="8" rx="2" fill="#0056D2" fillOpacity="0.08" />

        {/* Data flow arrows */}
        <path d="M 180 100 L 190 95 L 190 105 Z" fill="#0056D2" fillOpacity="0.4" />
        <path d="M 280 160 L 270 155 L 270 165 Z" fill="#0056D2" fillOpacity="0.4" />
      </svg>
    </div>
  )
}
