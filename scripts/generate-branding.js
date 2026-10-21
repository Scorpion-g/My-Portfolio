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

  <!-- Bottom Brand Text -->
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

// 2. LINKEDIN BANNER SVG (1584x396) - ALIGNEMENTS MILIMÉTRÉS
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

  <!-- Left Bottom Avatar Protected Safe Zone -->
  <g opacity="0.12">
    <circle cx="170" cy="300" r="140" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="6 6"/>
    <circle cx="170" cy="300" r="170" stroke="#60A5FA" stroke-width="1"/>
  </g>

  <!-- ================= MIDDLE MAIN IDENTITY ================= -->
  <!-- Availability Badge (Top) : Largeur calibree a 478px pour un centrage parfait texte et puce -->
  <g transform="translate(360, 42)">
    <rect x="0" y="0" width="478" height="34" rx="17" fill="#064E3B" fill-opacity="0.5" stroke="url(#badgeBorder)" stroke-width="1.5"/>
    <circle cx="18" cy="17" r="4.5" fill="#34D399"/>
    <text x="32" y="17" 
          dominant-baseline="central"
          font-family="DejaVu Sans, sans-serif" 
          font-size="11.5" 
          font-weight="bold" 
          letter-spacing="0.6" 
          fill="#34D399">
      STAGE (18 SEM.) : 15 FÉV - 07 MAI &amp; 28 JUIN - 15 AOÛT 2027
    </text>
  </g>

  <!-- Name Header with mini MR badge (Aligned visually) -->
  <g transform="translate(360, 96)">
    <!-- Mini Logo Badge -->
    <rect x="0" y="2" width="48" height="48" rx="14" fill="#1E293B" stroke="url(#miniLogoGrad)" stroke-width="2"/>
    <path d="M 13 37 L 13 15 L 21 28 L 29 15 L 29 37" stroke="#60A5FA" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M 33 37 L 33 15 L 39 15 C 43 15 45 19 45 23 C 45 27 43 29 39 29 L 33 29 M 38 29 L 45 37" stroke="#38BDF8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

    <!-- Name text with robust font -->
    <text x="64" y="42" 
          font-family="DejaVu Sans, sans-serif" 
          font-size="46" 
          font-weight="bold" 
          letter-spacing="-0.5" 
          fill="url(#titleGrad)">
      Mattéo Rivière
    </text>
  </g>

  <!-- Role & Details -->
  <text x="360" y="186" 
        font-family="DejaVu Sans, sans-serif" 
        font-size="21" 
        font-weight="bold" 
        fill="#38BDF8">
    Développeur Web &amp; Logiciel
    <tspan fill="#64748B" font-weight="normal"> • 3e année BUT Informatique (Aubière)</tspan>
  </text>

  <!-- Tech Stack Pills Row (Largeurs calibrees au pixel pres, marges 14px de chaque cote, total 738px laissant 87px de marge avant le terminal) -->
  <g transform="translate(360, 222)">
    <!-- Pill 1: Vue.js (width: 81) -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="81" height="34" rx="11" fill="#1E293B" fill-opacity="0.85" stroke="#334155" stroke-width="1.2"/>
      <circle cx="14" cy="17" r="4" fill="#10B981"/>
      <text x="24" y="17" dominant-baseline="central" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="12" font-weight="bold" fill="#E2E8F0">Vue.js</text>
    </g>

    <!-- Pill 2: Node.js (width: 87) -->
    <g transform="translate(91, 0)">
      <rect x="0" y="0" width="87" height="34" rx="11" fill="#1E293B" fill-opacity="0.85" stroke="#334155" stroke-width="1.2"/>
      <circle cx="14" cy="17" r="4" fill="#059669"/>
      <text x="24" y="17" dominant-baseline="central" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="12" font-weight="bold" fill="#E2E8F0">Node.js</text>
    </g>

    <!-- Pill 3: Symfony (width: 88) -->
    <g transform="translate(188, 0)">
      <rect x="0" y="0" width="88" height="34" rx="11" fill="#1E293B" fill-opacity="0.85" stroke="#334155" stroke-width="1.2"/>
      <circle cx="14" cy="17" r="4" fill="#F8FAFC"/>
      <text x="24" y="17" dominant-baseline="central" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="12" font-weight="bold" fill="#E2E8F0">Symfony</text>
    </g>

    <!-- Pill 4: Playwright E2E (width: 138) -->
    <g transform="translate(286, 0)">
      <rect x="0" y="0" width="138" height="34" rx="11" fill="#0369A1" fill-opacity="0.4" stroke="#38BDF8" stroke-width="1.5"/>
      <circle cx="14" cy="17" r="4" fill="#38BDF8"/>
      <text x="24" y="17" dominant-baseline="central" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="12" font-weight="bold" fill="#38BDF8">Playwright E2E</text>
    </g>

    <!-- Pill 5: PostgreSQL (width: 109) -->
    <g transform="translate(434, 0)">
      <rect x="0" y="0" width="109" height="34" rx="11" fill="#1E293B" fill-opacity="0.85" stroke="#334155" stroke-width="1.2"/>
      <circle cx="14" cy="17" r="4" fill="#60A5FA"/>
      <text x="24" y="17" dominant-baseline="central" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="12" font-weight="bold" fill="#E2E8F0">PostgreSQL</text>
    </g>

    <!-- Pill 6: GitLab CI (width: 102) -->
    <g transform="translate(553, 0)">
      <rect x="0" y="0" width="102" height="34" rx="11" fill="#1E293B" fill-opacity="0.85" stroke="#334155" stroke-width="1.2"/>
      <circle cx="14" cy="17" r="4" fill="#F97316"/>
      <text x="24" y="17" dominant-baseline="central" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="12" font-weight="bold" fill="#E2E8F0">GitLab CI</text>
    </g>

    <!-- Pill 7: Linux (width: 73) -->
    <g transform="translate(665, 0)">
      <rect x="0" y="0" width="73" height="34" rx="11" fill="#1E293B" fill-opacity="0.85" stroke="#334155" stroke-width="1.2"/>
      <circle cx="14" cy="17" r="4" fill="#FBBF24"/>
      <text x="24" y="17" dominant-baseline="central" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="12" font-weight="bold" fill="#E2E8F0">Linux</text>
    </g>
  </g>

  <!-- Contact & Web Links Bar (Barre Dock en verre avec espacement rigoureusement equilibre) -->
  <g transform="translate(360, 305)">
    <rect x="0" y="0" width="792" height="40" rx="14" fill="#111C30" fill-opacity="0.75" stroke="#1E293B" stroke-width="1.5"/>

    <!-- Website -->
    <circle cx="20" cy="20" r="4.5" fill="#3B82F6"/>
    <text x="32" y="20" dominant-baseline="central" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="12.5" font-weight="bold" fill="#FFFFFF">matteoriviere.fr</text>

    <!-- Separator 1 -->
    <text x="170" y="20" dominant-baseline="central" fill="#475569" font-size="14">•</text>

    <!-- Email -->
    <circle cx="194" cy="20" r="4.5" fill="#38BDF8"/>
    <text x="206" y="20" dominant-baseline="central" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="12.5" font-weight="bold" fill="#93C5FD">contact@matteoriviere.fr</text>

    <!-- Separator 2 -->
    <text x="404" y="20" dominant-baseline="central" fill="#475569" font-size="14">•</text>

    <!-- Phone -->
    <circle cx="428" cy="20" r="4.5" fill="#34D399"/>
    <text x="440" y="20" dominant-baseline="central" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="12.5" font-weight="bold" fill="#E2E8F0">07 78 13 16 90</text>

    <!-- Separator 3 -->
    <text x="562" y="20" dominant-baseline="central" fill="#475569" font-size="14">•</text>

    <!-- Location -->
    <circle cx="586" cy="20" r="4.5" fill="#A855F7"/>
    <text x="598" y="20" dominant-baseline="central" font-family="DejaVu Sans, sans-serif" font-size="12" font-weight="bold" fill="#94A3B8">Clermont • Lyon • Hybride</text>
  </g>

  <!-- ================= RIGHT SIDE: CODE TERMINAL CARD ================= -->
  <g transform="translate(1185, 42)">
    <rect x="0" y="0" width="355" height="312" rx="16" fill="#0B1220" fill-opacity="0.92" stroke="url(#cardBorder)" stroke-width="1.5"/>

    <!-- Terminal Header (Centrage parfait du titre avec dominant-baseline="central") -->
    <path d="M 0 16 C 0 7 7 0 16 0 L 339 0 C 348 0 355 7 355 16 L 355 36 L 0 36 Z" fill="#0F172A"/>
    <circle cx="20" cy="18" r="5" fill="#EF4444"/>
    <circle cx="36" cy="18" r="5" fill="#F59E0B"/>
    <circle cx="52" cy="18" r="5" fill="#10B981"/>
    <text x="177" y="18" dominant-baseline="central" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="11" font-weight="bold" fill="#64748B" text-anchor="middle">engineer.config.ts</text>

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

  <!-- Tagline Top (width 405, dominant-baseline="central", marges symetriques 18px) -->
  <g transform="translate(235, 130)">
    <rect x="0" y="0" width="405" height="36" rx="18" fill="#064E3B" fill-opacity="0.5" stroke="#34D399" stroke-width="1.5"/>
    <circle cx="18" cy="18" r="4.5" fill="#34D399"/>
    <text x="32" y="18" dominant-baseline="central" font-family="DejaVu Sans, sans-serif" font-size="11.5" font-weight="bold" letter-spacing="0.6" fill="#34D399">
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

  <!-- Tech Badges (Centered text with dominant-baseline) -->
  <g transform="translate(100, 420)">
    <g transform="translate(0, 0)">
      <rect width="115" height="38" rx="12" fill="#1E293B" stroke="#334155" stroke-width="1.5"/>
      <text x="57" y="19" dominant-baseline="central" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="13.5" font-weight="bold" fill="#E2E8F0" text-anchor="middle">Vue.js 3</text>
    </g>
    <g transform="translate(127, 0)">
      <rect width="115" height="38" rx="12" fill="#1E293B" stroke="#334155" stroke-width="1.5"/>
      <text x="57" y="19" dominant-baseline="central" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="13.5" font-weight="bold" fill="#E2E8F0" text-anchor="middle">Node.js</text>
    </g>
    <g transform="translate(254, 0)">
      <rect width="115" height="38" rx="12" fill="#1E293B" stroke="#334155" stroke-width="1.5"/>
      <text x="57" y="19" dominant-baseline="central" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="13.5" font-weight="bold" fill="#E2E8F0" text-anchor="middle">Symfony</text>
    </g>
    <g transform="translate(381, 0)">
      <rect width="180" height="38" rx="12" fill="#0369A1" fill-opacity="0.35" stroke="#38BDF8" stroke-width="1.5"/>
      <text x="90" y="19" dominant-baseline="central" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="13.5" font-weight="bold" fill="#38BDF8" text-anchor="middle">Playwright E2E</text>
    </g>
    <g transform="translate(573, 0)">
      <rect width="135" height="38" rx="12" fill="#1E293B" stroke="#334155" stroke-width="1.5"/>
      <text x="67" y="19" dominant-baseline="central" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="13.5" font-weight="bold" fill="#E2E8F0" text-anchor="middle">PostgreSQL</text>
    </g>
    <g transform="translate(720, 0)">
      <rect width="135" height="38" rx="12" fill="#1E293B" stroke="#334155" stroke-width="1.5"/>
      <text x="67" y="19" dominant-baseline="central" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="13.5" font-weight="bold" fill="#E2E8F0" text-anchor="middle">GitLab CI</text>
    </g>
  </g>

  <!-- Footer Link Info Dock Bar -->
  <g transform="translate(100, 525)">
    <rect width="1000" height="52" rx="16" fill="#1E293B" fill-opacity="0.75" stroke="#334155" stroke-width="1.5"/>
    <circle cx="36" cy="26" r="5" fill="#3B82F6"/>
    <text x="50" y="26" dominant-baseline="central" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="15" font-weight="bold" fill="#FFFFFF">
      matteoriviere.fr
    </text>
    <text x="215" y="26" dominant-baseline="central" fill="#64748B">•</text>
    <circle cx="240" cy="26" r="5" fill="#38BDF8"/>
    <text x="254" y="26" dominant-baseline="central" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="15" font-weight="bold" fill="#93C5FD">
      contact@matteoriviere.fr
    </text>
    <text x="480" y="26" dominant-baseline="central" fill="#64748B">•</text>
    <circle cx="505" cy="26" r="5" fill="#34D399"/>
    <text x="519" y="26" dominant-baseline="central" font-family="JetBrains Mono, DejaVu Sans Mono, monospace" font-size="15" font-weight="bold" fill="#E2E8F0">
      07 78 13 16 90
    </text>
    <text x="655" y="26" dominant-baseline="central" fill="#64748B">•</text>
    <circle cx="680" cy="26" r="5" fill="#A855F7"/>
    <text x="694" y="26" dominant-baseline="central" font-family="DejaVu Sans, sans-serif" font-size="14.5" font-weight="bold" fill="#94A3B8">
      Clermont • Lyon • Hybride
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

console.log('All branding assets re-generated with perfect alignment!')
