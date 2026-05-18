import PageTransition from '../components/PageTransition'
import { useLanguage } from '../i18n.jsx'
import './pages.css'

const links = [
  {
    label: { en: 'Email', ja: 'Email' },
    value: 'sumida.ryuichi.65m@st.kyoto-u.ac.jp',
    href: 'mailto:sumida.ryuichi.65m@st.kyoto-u.ac.jp',
  },
  {
    label: { en: 'GitHub', ja: 'GitHub' },
    value: 'github.com/ryuichi-sumida',
    href: 'https://github.com/ryuichi-sumida',
  },
]

const pick = (v, lang) => (v && typeof v === 'object' ? v[lang] : v)

export default function Contact() {
  const { t, lang } = useLanguage()
  const c = t.contact
  return (
    <PageTransition>
      <article className="page">
        <div className="kanji-watermark">連絡</div>
        <p className="subtitle">{c.subtitle}</p>
        <h1>
          {c.h1a} <span className="accent">{c.h1b}</span>
        </h1>
        <p className="hero-tag">{c.tag}</p>

        <ul className="contact-list">
          {links.map((l, i) => (
            <li key={i}>
              <a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <span className="contact-label">{pick(l.label, lang)}</span>
                <span className="contact-value">{l.value}</span>
                <span className="contact-arrow">→</span>
              </a>
            </li>
          ))}
        </ul>
      </article>
    </PageTransition>
  )
}
