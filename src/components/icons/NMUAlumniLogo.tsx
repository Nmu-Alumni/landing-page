import React from "react";

const NMUAlumniLogo = ({ width = 420, height = 420 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 800 950"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="NMU Alumni Association Logo"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f7df8b" />
          <stop offset="40%" stopColor="#d4af37" />
          <stop offset="70%" stopColor="#b8860b" />
          <stop offset="100%" stopColor="#f5d77b" />
        </linearGradient>

        <linearGradient id="navyGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#102a56" />
          <stop offset="100%" stopColor="#081a3a" />
        </linearGradient>

        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="100%" height="100%" fill="#ffffff" />

      {/* Main emblem group */}
      <g transform="translate(0,20)" filter="url(#shadow)">
        {/* Shield */}
        <path
          d="M400 120
             L545 165
             Q595 180 610 230
             L610 420
             Q610 560 400 690
             Q190 560 190 420
             L190 230
             Q205 180 255 165
             Z"
          fill="url(#navyGrad)"
          stroke="url(#goldGrad)"
          strokeWidth="10"
        />

        {/* Person silhouette */}
        <g>
          {/* Head */}
          <ellipse cx="400" cy="205" rx="70" ry="88" fill="#071427" />
          {/* Neck */}
          <rect x="378" y="280" width="44" height="42" rx="10" fill="#071427" />
          {/* Shoulders / torso */}
          <path
            d="M305 365
               Q335 300 400 300
               Q465 300 495 365
               L520 470
               L280 470
               Z"
            fill="#071427"
          />

          {/* Shirt collar */}
          <path
            d="M360 305 L400 350 L440 305 L465 305 L400 390 L335 305 Z"
            fill="#ffffff"
          />

          {/* Tie */}
          <path
            d="M390 345 L410 345 L425 430 L400 470 L375 430 Z"
            fill="#0b2c63"
          />

          {/* Gold academic sash */}
          <path
            d="M290 305 L370 305 L400 355 L430 305 L510 305
               L470 355 L440 355 L400 410 L360 355 L330 355 Z"
            fill="url(#goldGrad)"
            stroke="#b8860b"
            strokeWidth="4"
          />
        </g>

        {/* Graduation cap */}
        <g>
          <polygon
            points="280,110 400,60 520,110 400,160"
            fill="#0b2347"
            stroke="url(#goldGrad)"
            strokeWidth="5"
          />
          <rect
            x="340"
            y="115"
            width="120"
            height="30"
            rx="10"
            fill="#0b2347"
            stroke="url(#goldGrad)"
            strokeWidth="4"
          />
          {/* Tassel */}
          <line x1="315" y1="110" x2="315" y2="210" stroke="#c99a1a" strokeWidth="6" />
          <circle cx="315" cy="112" r="10" fill="#c99a1a" />
          <path
            d="M315 210 L300 260 L330 260 Z"
            fill="url(#goldGrad)"
            stroke="#b8860b"
            strokeWidth="3"
          />
          <line x1="306" y1="210" x2="306" y2="255" stroke="#c99a1a" strokeWidth="2" />
          <line x1="312" y1="210" x2="312" y2="258" stroke="#c99a1a" strokeWidth="2" />
          <line x1="318" y1="210" x2="318" y2="258" stroke="#c99a1a" strokeWidth="2" />
          <line x1="324" y1="210" x2="324" y2="255" stroke="#c99a1a" strokeWidth="2" />
        </g>

        {/* Anchor */}
        <g transform="translate(0,20)">
          {/* Stem */}
          <path
            d="M390 380 L410 380 L410 620
               Q410 650 400 665
               Q390 650 390 620 Z"
            fill="url(#goldGrad)"
          />

          {/* Top ring */}
          <circle cx="400" cy="370" r="18" fill="none" stroke="url(#goldGrad)" strokeWidth="10" />
          <circle cx="400" cy="370" r="5" fill="#d4af37" />

          {/* Cross bar */}
          <line x1="340" y1="430" x2="460" y2="430" stroke="url(#goldGrad)" strokeWidth="12" strokeLinecap="round" />

          {/* Flukes / anchor arms */}
          <path
            d="M400 635
               C360 620, 315 590, 285 535
               C270 505, 265 470, 270 435
               L290 440
               C287 475, 294 505, 308 530
               C332 572, 365 595, 400 605
               C435 595, 468 572, 492 530
               C506 505, 513 475, 510 440
               L530 435
               C535 470, 530 505, 515 535
               C485 590, 440 620, 400 635 Z"
            fill="url(#goldGrad)"
          />

          {/* Arrow tips */}
          <path d="M270 440 L245 500 L305 470 Z" fill="url(#goldGrad)" />
          <path d="M530 440 L555 500 L495 470 Z" fill="url(#goldGrad)" />
        </g>

        {/* Ship wheel */}
        <g transform="translate(400,430)">
          <circle r="95" fill="none" stroke="url(#goldGrad)" strokeWidth="16" />
          <circle r="55" fill="none" stroke="url(#goldGrad)" strokeWidth="12" />
          <circle r="18" fill="#d4af37" />

          {/* spokes */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const x1 = Math.cos(angle) * 20;
            const y1 = Math.sin(angle) * 20;
            const x2 = Math.cos(angle) * 78;
            const y2 = Math.sin(angle) * 78;
            const x3 = Math.cos(angle) * 102;
            const y3 = Math.sin(angle) * 102;
            return (
              <g key={i}>
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="url(#goldGrad)"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <circle cx={x3} cy={y3} r="10" fill="url(#goldGrad)" />
              </g>
            );
          })}
        </g>
      </g>

      {/* Text */}
      <g transform="translate(400,790)" textAnchor="middle">
        <text
          x="0"
          y="0"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="72"
          fontWeight="700"
          letterSpacing="2"
          fill="#0b2347"
        >
          NMU ALUMNI
        </text>

        <g transform="translate(0,55)">
          <line x1="-260" y1="0" x2="-175" y2="0" stroke="#c89c2d" strokeWidth="3" />
          <line x1="175" y1="0" x2="260" y2="0" stroke="#c89c2d" strokeWidth="3" />
          <text
            x="0"
            y="12"
            fontFamily="Arial, sans-serif"
            fontSize="38"
            fontWeight="600"
            letterSpacing="10"
            fill="#0b2347"
          >
            ASSOCIATION
          </text>
        </g>

        {/* bottom star + lines */}
        <g transform="translate(0,105)">
          <line x1="-160" y1="0" x2="-35" y2="0" stroke="#c89c2d" strokeWidth="3" />
          <line x1="35" y1="0" x2="160" y2="0" stroke="#c89c2d" strokeWidth="3" />

          <path
            d="M0,-18
               L5,-5 L18,0 L5,5 L0,18 L-5,5 L-18,0 L-5,-5 Z"
            fill="#c89c2d"
          />
        </g>
      </g>
    </svg>
  );
};

export default NMUAlumniLogo;