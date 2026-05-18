import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n.jsx'
import './Menu.css'

export default function Menu() {
  const { t, toggle, lang } = useLanguage()
  const items = t.menu.items
  const location = useLocation()
  const listRef = useRef(null)
  const [indicator, setIndicator] = useState({ top: 0, height: 0 })
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const list = listRef.current
    if (!list) return
    const active = list.querySelector('a.active')
    if (active) {
      const listRect = list.getBoundingClientRect()
      const rect = active.getBoundingClientRect()
      setIndicator({
        top: rect.top - listRect.top,
        height: rect.height,
      })
    }
  }, [location.pathname])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <>
      <button
        className={`menu-toggle ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      <aside className={`menu ${open ? 'open' : ''}`}>
        <div className="menu-brand">
          <div className="menu-brand-mark">
            <svg viewBox="0 0 64 64" width="40" height="40" aria-hidden>
              <path
                d="M8 50 L24 22 L34 36 L44 18 L56 50 Z"
                fill="none"
                stroke="var(--ice)"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <circle cx="48" cy="14" r="3" fill="var(--snow)" />
            </svg>
          </div>
          <div>
            <div className="menu-brand-name">Ryuichi Sumida</div>
            <div className="menu-brand-sub">{t.menu.brandSub}</div>
          </div>
        </div>

        <button
          type="button"
          className="menu-lang-toggle"
          onClick={toggle}
          aria-label="Toggle language"
        >
          <span className={lang === 'en' ? 'active' : ''}>EN</span>
          <span className="divider">/</span>
          <span className={lang === 'ja' ? 'active' : ''}>日本語</span>
        </button>

        <nav>
          <ul ref={listRef} className="menu-list">
            <motion.div
              className="menu-indicator"
              animate={{ top: indicator.top, height: indicator.height }}
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            />
            {items.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'}>
                  <span className="kanji">{item.kanji}</span>
                  <span className="content">
                    <span className="label">{item.label}</span>
                    <span className="romaji">{item.romaji}</span>
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="menu-foot">
          <div className="menu-foot-line" />
          <div className="menu-foot-text">
            <span>v0.1 · winter</span>
            <span>❄</span>
          </div>
        </div>
      </aside>
    </>
  )
}
