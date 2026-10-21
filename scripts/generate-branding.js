import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const PUBLIC_DIR = path.resolve('public')

// 1. LOGO SVG (800x800)
const generateLogoSvg = () => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#111827"/>
      <stop offset="60%" stop-color="#0B0F17"/>
      <stop offset="100%" stop-color="#05070B"/>
    </radialGradient>

    <radialGradient id="glowOrb" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#2563EB" stop-opacity="0.5"/>
      <stop offset="50%" stop-color="#06B6D4" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#2563EB" stop-opacity="0"/>
    </radialGradient>

    <linearGradient id="neonBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="50%" stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#818CF8"/>
    </linearGradient>

    <linearGradient id="mrGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="35%" stop-color="#60A5FA"/>
      <stop offset="70%" stop-color="#818CF8"/>
      <stop offset="100%" stop-color="#C084FC"/>
    </linearGradient>

    <linearGradient id="cardBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1E293B" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0.95"/>
    </linearGradient>

    <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="14" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>

    <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#000000" flood-opacity="0.6"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="800" height="800" rx="180" fill="url(#bgGrad)"/>
  <rect width="800" height="800" rx="180" stroke="url(#neonBorder)" stroke-width="3" stroke-opacity="0.4"/>

  <!-- Glowing Aura -->
  <circle cx="400" cy="380" r="320" fill="url(#glowOrb)"/>

  <!-- Tech Grid Background -->
  <g opacity="0.12" stroke="#60A5FA" stroke-width="1.5">
    <line x1="200" y1="120" x2="200" y2="680" stroke-dasharray="6 6"/>
    <line x1="400" y1="80" x2="400" y2="720" stroke-dasharray="6 6"/>
    <line x1="600" y1="120" x2="600" y2="680" stroke-dasharray="6 6"/>
    <line x1="120" y1="260" x2="680" y2="260" stroke-dasharray="6 6"/>
    <line x1="80" y1="400" x2="720" y2="400" stroke-dasharray="6 6"/>
    <line x1="120" y1="540" x2="680" y2="540" stroke-dasharray="6 6"/>
  </g>

  <!-- Central Squircle Emblem -->
  <g filter="url(#softShadow)">
    <rect x="180" y="160" width="440" height="440" rx="90" fill="url(#cardBg)" stroke="url(#neonBorder)" stroke-width="4"/>
  </g>

  <!-- Inner Tech Corners -->
  <path d="M 220 200 L 250 200 M 220 200 L 220 230" stroke="#38BDF8" stroke-width="3" stroke-linecap="round"/>
  <path d="M 580 200 L 550 200 M 580 200 L 580 230" stroke="#38BDF8" stroke-width="3" stroke-linecap="round"/>
  <path d="M 220 560 L 250 560 M 220 560 L 220 530" stroke="#38BDF8" stroke-width="3" stroke-linecap="round"/>
  <path d="M 580 560 L 550 560 M 580 560 L 580 530" stroke="#38BDF8" stroke-width="3" stroke-linecap="round"/>

  <!-- Code Tag < / > Accents -->
  <path d="M 240 380 L 210 400 L 240 420" stroke="#38BDF8" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity="0.6"/>
  <path d="M 560 380 L 590 400 L 560 420" stroke="#818CF8" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity="0.6"/>

  <!-- Monogram MR Geometric Cyber Path -->
  <g filter="url(#glowFilter)">
    <!-- Letter M -->
    <path d="M 265 470 L 265 290 L 335 395 L 400 290 L 400 470" 
          stroke="url(#mrGrad)" 
          stroke-width="26" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          fill="none"/>

    <!-- Letter R linked seamlessly -->
    <path d="M 430 470 L 430 290 L 495 290 C 535 290 545 320 545 350 C 545 385 525 405 490 405 L 430 405 M 480 405 L 540 470" 
          stroke="url(#mrGrad)" 
          stroke-width="26" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          fill="none"/>

    <!-- Terminal Prompt Dash Underneath -->
    <rect x="370" y="505" width="60" height="10" rx="5" fill="#34D399"/>
  </g>

  <!-- Bottom Brand Text (Clean fonts without nested quotes) -->
  <text x="400" y="665" 
        font-family="DejaVu Sans, sans-serif" 
        font-size="28" 
        font-weight="bold" 
        letter-spacing="6" 
        text-anchor="middle" 
        fill="#FFFFFF">
    MATTÉO RIVIÈRE
  </text>
  <text x="400" y="705" 
        font-family="JetBrains Mono, DejaVu Sans Mono, monospace" 
        font-size="16" 
        font-weight="bold" 
        letter-spacing="4" 
        text-anchor="middle" 
        fill="#38BDF8">
    WEB &amp; SOFTWARE DEVELOPER
  </text>
</svg>
`

// 2. LINKEDIN BANNER SVG (1584x396)
const generateBannerSvg = () => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1584" height="396" viewBox="0 0 1584 396" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bannerBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080C14"/>
      <stop offset="40%" stop-color="#0B1120"/>
      <stop offset="100%" stop-color="#050811"/>
    </linearGradient>

    <radialGradient id="bannerGlowRight" cx="85%" cy="30%" r="55%">
      <stop offset="0%" stop-color="#2563EB" stop-opacity="0.35"/>
      <stop offset="50%" stop-color="#06B6D4" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#2563EB" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="bannerGlowCenter" cx="42%" cy="50%" r="45%">
      <stop offset="0%" stop-color="#4F46E5" stop-opacity="0.25"/>
      <stop offset="60%" stop-color="#0EA5E9" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#4F46E5" stop-opacity="0"/>
    </radialGradient>

    <linearGradient id="titleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#F1F5F9"/>
      <stop offset="100%" stop-color="#93C5FD"/>
    </linearGradient>

    <linearGradient id="badgeBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34D399"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>

    <linearGradient id="cardBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#818CF8" stop-opacity="0.2"/>
    </linearGradient>

    <linearGradient id="miniLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#818CF8"/>
    </linearGradient>
  </defs>

  <!-- Background Base -->
  <rect width="1584" height="396" fill="url(#bannerBg)"/>
  <rect width="1584" height="396" fill="url(#bannerGlowRight)"/>
  <rect width="1584" height="396" fill="url(#bannerGlowCenter)"/>

  <!-- Geometric Tech Grid Overlay -->
  <g opacity="0.08" stroke="#38BDF8" stroke-width="1">
    <line x1="0" y1="66" x2="1584" y2="66"/>
    <line x1="0" y1="132" x2="1584" y2="132"/>
    <line x1="0" y1="198" x2="1584" y2="198"/>
    <line x1="0" y1="264" x2="1584" y2="264"/>
    <line x1="0" y1="330" x2="1584" y2="330"/>

    <line x1="132" y1="0" x2="132" y2="396"/>
    <line x1="264" y1="0" x2="264" y2="396"/>
    <line x1="396" y1="0" x2="396" y2="396"/>
    <line x1="528" y1="0" x2="528" y2="396"/>
    <line x1="660" y1="0" x2="660" y2="396"/>
    <line x1="792" y1="0" x2="792" y2="396"/>
    <line x1="924" y1="0" x2="924" y2="396"/>
    <line x1="1056" y1="0" x2="1056" y2="396"/>
    <line x1="1188" y1="0" x2="1188" y2="396"/>
    <line x1="1320" y1="0" x2="1320" y2="396"/>
    <line x1="1452" y1="0" x2="1452" y2="396"/>
  </g>

  <!-- Diagonal Cyber Accent Lines -->
  <g opacity="0.15">
    <path d="M 850 0 L 1050 396" stroke="#2563EB" stroke-width="2"/>
    <path d="M 880 0 L 1080 396" stroke="#06B6D4" stroke-width="1.5" stroke-dasharray="8 8"/>
    <path d="M 1250 0 L 1450 396" stroke="#38BDF8" stroke-width="1.5"/>
  </g>

  <!-- Left Bottom Avatar Protected Circle (Safe Zone for round profile pic) -->
  <g opacity="0.12">
    <circle cx="170" cy="300" r="140" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="6 6"/>
    <circle cx="170" cy="300" r="170" stroke="#60A5FA" stroke-width="1"/>
  </g>

  <!-- ================= MIDDLE MAIN IDENTITY ================= -->
  <!-- Availability Badge (Top) -->
  <g transform="translate(360, 42)">
    <rect x="0" y="0" width="460" height="34" rx="17" fill="#064E3B" fill-opacity="0.45" stroke="url(#badgeBorder)" stroke-width="1.5"/>
    <circle cx="18" cy="17" r="5" fill="#34D399"/>
    <text x="32" y="22" 
          font-family="DejaVu Sans, sans-serif" 
          font-size="11.5" 
          font-weight="bold" 
          letter-spacing="0.8" 
          fill="#34D399">
      STAGE (18 SEM.) : 15 FÉV - 07 MAI &amp; 28 JUIN - 15 AOÛT 2027
    </text>
  </g>

  <!-- Name Header with mini MR badge -->
  <g transform="translate(360, 95)">
    <!-- Mini Logo Badge -->
    <rect x="0" y="6" width="46" height="46" rx="14" fill="#1E293B" stroke="url(#miniLogoGrad)" stroke-width="2"/>
    <path d="M 12 40 L 12 18 L 20 31 L 28 18 L 28 40" stroke="#60A5FA" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M 32 40 L 32 18 L 38 18 C 42 18 44 22 44 26 C 44 30 42 32 38 32 L 32 32 M 37 32 L 44 40" stroke="#38BDF8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

    <!-- Name text with robust font -->
    <text x="62" y="47" 
          font-family="DejaVu Sans, sans-serif" 
          font-size="52" 
          font-weight="bold" 
          letter-spacing="-0.5" 
          fill="url(#titleGrad)">
      Mattéo Rivière
    </text>
  </g>

  <!-- Role & Details -->
  <text x="360" y="190" 
        font-family="DejaVu Sans, sans-serif" 
        font-size="21" 
        font-weight="bold" 
        fill="#38BDF8">
    Développeur Web &amp; Logiciel
    <tspan fill="#64748B" font-weight="normal"> • 3e année BUT Informatique (Aubière)</tspan>
  </text>

  <!-- Tech Stack Pills Row -->
  <g transform="translate(360, 224)">
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="85" height="32" rx="10" fill="#1E293B" fill-opacity="0.85" stroke="#334155" stroke-width="1.2"/>
      <circle cx="16" cy="16" r="4" fill="#10B981"/>
      <text x="28" y="21" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="12" font-weight="bold" fill="#E2E8F0">Vue.js</text>
    </g>

    <g transform="translate(95, 0)">
      <rect x="0" y="0" width="88" height="32" rx="10" fill="#1E293B" fill-opacity="0.85" stroke="#334155" stroke-width="1.2"/>
      <circle cx="16" cy="16" r="4" fill="#059669"/>
      <text x="28" y="21" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="12" font-weight="bold" fill="#E2E8F0">Node.js</text>
    </g>

    <g transform="translate(193, 0)">
      <rect x="0" y="0" width="90" height="32" rx="10" fill="#1E293B" fill-opacity="0.85" stroke="#334155" stroke-width="1.2"/>
      <circle cx="16" cy="16" r="4" fill="#F8FAFC"/>
      <text x="28" y="21" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="12" font-weight="bold" fill="#E2E8F0">Symfony</text>
    </g>

    <g transform="translate(293, 0)">
      <rect x="0" y="0" width="138" height="32" rx="10" fill="#0369A1" fill-opacity="0.4" stroke="#38BDF8" stroke-width="1.5"/>
      <circle cx="16" cy="16" r="4" fill="#38BDF8"/>
      <text x="28" y="21" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="12" font-weight="bold" fill="#38BDF8">Playwright E2E</text>
    </g>

    <g transform="translate(441, 0)">
      <rect x="0" y="0" width="112" height="32" rx="10" fill="#1E293B" fill-opacity="0.85" stroke="#334155" stroke-width="1.2"/>
      <circle cx="16" cy="16" r="4" fill="#60A5FA"/>
      <text x="28" y="21" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="12" font-weight="bold" fill="#E2E8F0">PostgreSQL</text>
    </g>

    <g transform="translate(563, 0)">
      <rect x="0" y="0" width="105" height="32" rx="10" fill="#1E293B" fill-opacity="0.85" stroke="#334155" stroke-width="1.2"/>
      <circle cx="16" cy="16" r="4" fill="#F97316"/>
      <text x="28" y="21" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="12" font-weight="bold" fill="#E2E8F0">GitLab CI</text>
    </g>

    <g transform="translate(678, 0)">
      <rect x="0" y="0" width="80" height="32" rx="10" fill="#1E293B" fill-opacity="0.85" stroke="#334155" stroke-width="1.2"/>
      <circle cx="16" cy="16" r="4" fill="#FBBF24"/>
      <text x="28" y="21" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="12" font-weight="bold" fill="#E2E8F0">Linux</text>
    </g>
  </g>

  <!-- Contact & Web Links Bar (Bottom) -->
  <g transform="translate(360, 312)">
    <g transform="translate(0, 0)">
      <circle cx="8" cy="8" r="7" fill="#2563EB" fill-opacity="0.4"/>
      <text x="22" y="12" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="13" font-weight="bold" fill="#FFFFFF">matteoriviere.fr</text>
    </g>

    <text x="175" y="12" fill="#475569">•</text>

    <g transform="translate(195, 0)">
      <circle cx="8" cy="8" r="7" fill="#0EA5E9" fill-opacity="0.4"/>
      <text x="22" y="12" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="13" font-weight="bold" fill="#93C5FD">contact@matteoriviere.fr</text>
    </g>

    <text x="430" y="12" fill="#475569">•</text>

    <g transform="translate(450, 0)">
      <circle cx="8" cy="8" r="7" fill="#34D399" fill-opacity="0.4"/>
      <text x="22" y="12" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="13" font-weight="bold" fill="#E2E8F0">07 78 13 16 90</text>
    </g>

    <text x="590" y="12" fill="#475569">•</text>

    <g transform="translate(610, 0)">
      <circle cx="8" cy="8" r="7" fill="#A855F7" fill-opacity="0.4"/>
      <text x="22" y="12" font-family="DejaVu Sans, sans-serif" font-size="13" font-weight="bold" fill="#94A3B8">Clermont • Lyon • Hybride</text>
    </g>
  </g>

  <!-- ================= RIGHT SIDE: CODE TERMINAL CARD ================= -->
  <g transform="translate(1180, 42)">
    <rect x="0" y="0" width="360" height="312" rx="16" fill="#0B1220" fill-opacity="0.9" stroke="url(#cardBorder)" stroke-width="1.5"/>

    <!-- Terminal Header -->
    <path d="M 0 16 C 0 7 7 0 16 0 L 344 0 C 353 0 360 7 360 16 L 360 36 L 0 36 Z" fill="#0F172A"/>
    <circle cx="20" cy="18" r="5" fill="#EF4444"/>
    <circle cx="36" cy="18" r="5" fill="#F59E0B"/>
    <circle cx="52" cy="18" r="5" fill="#10B981"/>
    <text x="180" y="23" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="11" font-weight="bold" fill="#64748B" text-anchor="middle">engineer.config.ts</text>

    <!-- Terminal Code Body -->
    <g transform="translate(20, 56)" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="11.5">
      <text x="0" y="16" fill="#64748B">// Profil &amp; Ingénierie logicielle</text>

      <text x="0" y="40">
        <tspan fill="#F43F5E">const</tspan> <tspan fill="#60A5FA">developer</tspan> <tspan fill="#94A3B8">=</tspan> <tspan fill="#F43F5E">{</tspan>
      </text>

      <text x="16" y="64">
        <tspan fill="#E2E8F0">name:</tspan> <tspan fill="#34D399">'Mattéo Rivière'</tspan><tspan fill="#94A3B8">,</tspan>
      </text>

      <text x="16" y="88">
        <tspan fill="#E2E8F0">role:</tspan> <tspan fill="#38BDF8">'Web &amp; Software Dev'</tspan><tspan fill="#94A3B8">,</tspan>
      </text>

      <text x="16" y="112">
        <tspan fill="#E2E8F0">degree:</tspan> <tspan fill="#FCD34D">'BUT Informatique (UCA)'</tspan><tspan fill="#94A3B8">,</tspan>
      </text>

      <text x="16" y="136">
        <tspan fill="#E2E8F0">focus:</tspan> <tspan fill="#94A3B8">[</tspan><tspan fill="#38BDF8">'Vue'</tspan><tspan fill="#94A3B8">, </tspan><tspan fill="#38BDF8">'Playwright'</tspan><tspan fill="#94A3B8">, </tspan><tspan fill="#38BDF8">'Node'</tspan><tspan fill="#94A3B8">],</tspan>
      </text>

      <text x="16" y="160">
        <tspan fill="#E2E8F0">discipline:</tspan> <tspan fill="#C084FC">'6 ans boxe anglaise'</tspan><tspan fill="#94A3B8">,</tspan>
      </text>

      <text x="16" y="184">
        <tspan fill="#E2E8F0">internship:</tspan> <tspan fill="#34D399">'18 sem. (Fév-Août 27)'</tspan>
      </text>

      <text x="0" y="208">
        <tspan fill="#F43F5E">}</tspan><tspan fill="#94A3B8">;</tspan>
      </text>

      <text x="0" y="234">
        <tspan fill="#C084FC">await</tspan> <tspan fill="#60A5FA">deployToProduction</tspan><tspan fill="#94A3B8">(</tspan><tspan fill="#E2E8F0">developer</tspan><tspan fill="#94A3B8">);</tspan>
      </text>
    </g>
  </g>
</svg>
`

// 3. OPEN GRAPH BANNER (1200x630)
const generateOgSvg = () => `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ogBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080C14"/>
      <stop offset="50%" stop-color="#0B1120"/>
      <stop offset="100%" stop-color="#04060B"/>
    </linearGradient>

    <radialGradient id="ogGlow1" cx="30%" cy="30%" r="50%">
      <stop offset="0%" stop-color="#2563EB" stop-opacity="0.35"/>
      <stop offset="60%" stop-color="#06B6D4" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#2563EB" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="ogGlow2" cx="80%" cy="70%" r="50%">
      <stop offset="0%" stop-color="#6366F1" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#6366F1" stop-opacity="0"/>
    </radialGradient>

    <linearGradient id="ogTitleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#F1F5F9"/>
      <stop offset="100%" stop-color="#60A5FA"/>
    </linearGradient>

    <linearGradient id="ogBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="50%" stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#6366F1"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#ogBg)"/>
  <rect width="1200" height="630" fill="url(#ogGlow1)"/>
  <rect width="1200" height="630" fill="url(#ogGlow2)"/>
  <rect width="1200" height="630" stroke="url(#ogBorder)" stroke-width="4" stroke-opacity="0.4"/>

  <!-- Subtle grid -->
  <g opacity="0.08" stroke="#38BDF8" stroke-width="1">
    <line x1="0" y1="105" x2="1200" y2="105"/>
    <line x1="0" y1="210" x2="1200" y2="210"/>
    <line x1="0" y1="315" x2="1200" y2="315"/>
    <line x1="0" y1="420" x2="1200" y2="420"/>
    <line x1="0" y1="525" x2="1200" y2="525"/>
    <line x1="200" y1="0" x2="200" y2="630"/>
    <line x1="400" y1="0" x2="400" y2="630"/>
    <line x1="600" y1="0" x2="600" y2="630"/>
    <line x1="800" y1="0" x2="800" y2="630"/>
    <line x1="1000" y1="0" x2="1000" y2="630"/>
  </g>

  <!-- Logo Mark Center Left -->
  <g transform="translate(100, 95)">
    <rect x="0" y="0" width="105" height="105" rx="30" fill="#1E293B" stroke="url(#ogBorder)" stroke-width="3"/>
    <path d="M 29 76 L 29 32 L 46 58 L 63 32 L 63 76" stroke="#60A5FA" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M 72 76 L 72 32 L 85 32 C 94 32 97 40 97 47 C 97 54 92 60 84 60 L 72 60 M 83 60 L 97 76" stroke="#38BDF8" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </g>

  <!-- Tagline Top -->
  <g transform="translate(235, 130)">
    <rect x="0" y="0" width="450" height="34" rx="17" fill="#064E3B" fill-opacity="0.5" stroke="#34D399" stroke-width="1.5"/>
    <circle cx="16" cy="17" r="5" fill="#34D399"/>
    <text x="30" y="22" font-family="DejaVu Sans, sans-serif" font-size="11.5" font-weight="bold" letter-spacing="0.8" fill="#34D399">
      STAGE WEB (18 SEM.) : FÉV-MAI &amp; JUIN-AOÛT 2027
    </text>
  </g>

  <!-- Main Headline -->
  <text x="100" y="275" font-family="DejaVu Sans, sans-serif" font-size="62" font-weight="bold" letter-spacing="-1" fill="url(#ogTitleGrad)">
    Mattéo Rivière
  </text>

  <text x="100" y="325" font-family="DejaVu Sans, sans-serif" font-size="28" font-weight="bold" fill="#38BDF8">
    Développeur Web &amp; Logiciel
    <tspan fill="#64748B" font-weight="normal"> • 3e année BUT Informatique</tspan>
  </text>

  <text x="100" y="380" font-family="DejaVu Sans, sans-serif" font-size="20" font-weight="normal" fill="#94A3B8">
    Applications web modernes, architecture solide et automatisation de tests E2E.
  </text>

  <!-- Tech Badges -->
  <g transform="translate(100, 420)">
    <g transform="translate(0, 0)">
      <rect width="110" height="38" rx="12" fill="#1E293B" stroke="#334155" stroke-width="1.5"/>
      <text x="55" y="24" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="14" font-weight="bold" fill="#E2E8F0" text-anchor="middle">Vue.js 3</text>
    </g>
    <g transform="translate(122, 0)">
      <rect width="110" height="38" rx="12" fill="#1E293B" stroke="#334155" stroke-width="1.5"/>
      <text x="55" y="24" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="14" font-weight="bold" fill="#E2E8F0" text-anchor="middle">Node.js</text>
    </g>
    <g transform="translate(244, 0)">
      <rect width="110" height="38" rx="12" fill="#1E293B" stroke="#334155" stroke-width="1.5"/>
      <text x="55" y="24" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="14" font-weight="bold" fill="#E2E8F0" text-anchor="middle">Symfony</text>
    </g>
    <g transform="translate(366, 0)">
      <rect width="170" height="38" rx="12" fill="#0369A1" fill-opacity="0.35" stroke="#38BDF8" stroke-width="1.5"/>
      <text x="85" y="24" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="14" font-weight="bold" fill="#38BDF8" text-anchor="middle">Playwright E2E</text>
    </g>
    <g transform="translate(548, 0)">
      <rect width="130" height="38" rx="12" fill="#1E293B" stroke="#334155" stroke-width="1.5"/>
      <text x="65" y="24" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="14" font-weight="bold" fill="#E2E8F0" text-anchor="middle">PostgreSQL</text>
    </g>
    <g transform="translate(690, 0)">
      <rect width="130" height="38" rx="12" fill="#1E293B" stroke="#334155" stroke-width="1.5"/>
      <text x="65" y="24" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="14" font-weight="bold" fill="#E2E8F0" text-anchor="middle">GitLab CI</text>
    </g>
  </g>

  <!-- Footer Link Info -->
  <g transform="translate(100, 530)">
    <rect width="1000" height="52" rx="16" fill="#1E293B" fill-opacity="0.6" stroke="#334155" stroke-width="1.2"/>
    <text x="35" y="32" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="16" font-weight="bold" fill="#FFFFFF">
      matteoriviere.fr
    </text>
    <text x="260" y="32" fill="#64748B">•</text>
    <text x="290" y="32" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="15" font-weight="bold" fill="#93C5FD">
      contact@matteoriviere.fr
    </text>
    <text x="610" y="32" fill="#64748B">•</text>
    <text x="640" y="32" font-family="DejaVu Sans, sans-serif" font-size="15" font-weight="bold" fill="#94A3B8">
      Clermont-Ferrand • Lyon • Hybride
    </text>
  </g>
</svg>
`

// 4. GENERATION & CONVERSION
console.log('--- Generating Brand Assets ---')

const logoSvgPath = path.join(PUBLIC_DIR, 'logo.svg')
const bannerSvgPath = path.join(PUBLIC_DIR, 'linkedin-banner.svg')
const ogSvgPath = path.join(PUBLIC_DIR, 'og-image.svg')

const logoPngPath = path.join(PUBLIC_DIR, 'logo.png')
const bannerPngPath = path.join(PUBLIC_DIR, 'linkedin-banner.png')
const ogJpgPath = path.join(PUBLIC_DIR, 'og-image.jpg')
const faviconPath = path.join(PUBLIC_DIR, 'favicon.svg')

// Write SVGs
fs.writeFileSync(logoSvgPath, generateLogoSvg())
console.log('✓ Created', logoSvgPath)

fs.writeFileSync(bannerSvgPath, generateBannerSvg())
console.log('✓ Created', bannerSvgPath)

fs.writeFileSync(ogSvgPath, generateOgSvg())
console.log('✓ Created', ogSvgPath)

// Write Favicon as clean high-contrast SVG
const faviconSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="16" fill="#0B0F17"/>
  <rect width="64" height="64" rx="16" stroke="#38BDF8" stroke-width="2"/>
  <path d="M 14 46 L 14 18 L 25 36 L 36 18 L 36 46" stroke="#60A5FA" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M 42 46 L 42 18 L 50 18 C 56 18 58 23 58 27 C 58 32 55 35 49 35 L 42 35 M 48 35 L 58 46" stroke="#38BDF8" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`
fs.writeFileSync(faviconPath, faviconSvg)
console.log('✓ Created', faviconPath)

// Render PNGs via rsvg-convert
console.log('--- Rendering Raster Images with rsvg-convert ---')

execSync(`rsvg-convert -w 800 -h 800 "${logoSvgPath}" -o "${logoPngPath}"`)
console.log('✓ Rendered', logoPngPath, '(800x800 px)')

execSync(`rsvg-convert -w 1584 -h 396 "${bannerSvgPath}" -o "${bannerPngPath}"`)
console.log('✓ Rendered', bannerPngPath, '(1584x396 px)')

execSync(`rsvg-convert -w 1200 -h 630 "${ogSvgPath}" -o "${ogJpgPath}"`)
console.log('✓ Rendered', ogJpgPath, '(1200x630 px)')

console.log('All branding assets generated successfully!')
