import { useEffect, useRef } from 'react'

export default function SnowfallCanvas({ density = 90 }) {
  const canvasRef = useRef(null)
  const flakesRef = useRef([])
  const rafRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = 0
    let height = 0
    const dpr = window.devicePixelRatio || 1

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)
    }

    const seed = () => {
      flakesRef.current = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2.5 + 0.4,
        vy: Math.random() * 0.4 + 0.15,
        vx: (Math.random() - 0.5) * 0.25,
        sway: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.012 + 0.004,
        opacity: Math.random() * 0.6 + 0.2,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      for (const f of flakesRef.current) {
        f.sway += f.swaySpeed
        f.x += f.vx + Math.sin(f.sway) * 0.3
        f.y += f.vy
        if (f.y > height + 5) {
          f.y = -5
          f.x = Math.random() * width
        }
        if (f.x > width + 5) f.x = -5
        if (f.x < -5) f.x = width + 5

        ctx.beginPath()
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(248, 250, 252, ${f.opacity})`
        ctx.fill()
      }
      rafRef.current = requestAnimationFrame(draw)
    }

    resize()
    seed()
    draw()
    window.addEventListener('resize', () => {
      resize()
      seed()
    })

    return () => cancelAnimationFrame(rafRef.current)
  }, [density])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  )
}
