import { useEffect, useState } from 'react'

export default function MountainBg() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '60vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* Far moon glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '12%',
          width: 140,
          height: 140,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(186, 230, 253, 0.25), transparent 70%)',
          filter: 'blur(8px)',
          transform: `translateY(${scrollY * -0.05}px)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '24%',
          right: '15%',
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #f8fafc 0%, #e2e8f0 70%, transparent 100%)',
          opacity: 0.85,
          transform: `translateY(${scrollY * -0.05}px)`,
        }}
      />

      {/* Far mountains */}
      <svg
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '70%',
          opacity: 0.35,
          transform: `translateY(${scrollY * 0.08}px)`,
        }}
      >
        <defs>
          <linearGradient id="far" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0b1120" />
          </linearGradient>
        </defs>
        <path
          d="M0,400 L0,260 L90,200 L180,240 L260,180 L360,220 L460,160 L540,200 L640,140 L740,200 L840,160 L940,210 L1040,170 L1140,220 L1200,190 L1200,400 Z"
          fill="url(#far)"
        />
      </svg>

      {/* Mid mountains with snow caps */}
      <svg
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '85%',
          opacity: 0.65,
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      >
        <defs>
          <linearGradient id="mid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0f1a2e" />
          </linearGradient>
        </defs>
        <path
          d="M0,400 L0,300 L120,180 L210,280 L320,140 L420,260 L540,120 L640,250 L760,160 L880,280 L1000,180 L1100,260 L1200,200 L1200,400 Z"
          fill="url(#mid)"
        />
        {/* snow caps */}
        <path
          d="M120,180 L150,210 L180,200 L210,230 M320,140 L350,170 L380,160 L420,200 M540,120 L570,150 L600,145 L640,180 M760,160 L790,190 L820,185 L860,215 M1000,180 L1030,210 L1060,200 L1100,230"
          stroke="#f8fafc"
          strokeWidth="3"
          fill="none"
          opacity="0.55"
        />
      </svg>

      {/* Near mountains */}
      <svg
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '100%',
          transform: `translateY(${scrollY * 0.25}px)`,
        }}
      >
        <defs>
          <linearGradient id="near" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f1a2e" />
            <stop offset="100%" stopColor="#0b1120" />
          </linearGradient>
        </defs>
        <path
          d="M0,400 L0,350 L100,280 L220,340 L340,240 L460,330 L580,260 L700,340 L820,250 L940,330 L1060,270 L1200,330 L1200,400 Z"
          fill="url(#near)"
        />
      </svg>

      {/* Bottom snow line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px',
          background:
            'linear-gradient(180deg, transparent, rgba(248, 250, 252, 0.04))',
        }}
      />
    </div>
  )
}
