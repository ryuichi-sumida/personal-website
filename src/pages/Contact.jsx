import PageTransition from '../components/PageTransition'
import './pages.css'

const links = [
  { label: 'Email', value: 'rui.sumida1@gmail.com', href: 'mailto:rui.sumida1@gmail.com' },
  { label: 'GitHub', value: 'github.com/rui-dataanalysis', href: 'https://github.com/rui-dataanalysis' },
  { label: 'Portfolio', value: 'rui-dataanalysis.github.io', href: 'https://rui-dataanalysis.github.io/#portfolio' },
  { label: 'X / Twitter', value: '@yourhandle', href: '#' },
  { label: 'LinkedIn', value: 'linkedin.com/in/yourhandle', href: '#' },
]

export default function Contact() {
  return (
    <PageTransition>
      <article className="page">
        <div className="kanji-watermark">連絡</div>
        <p className="subtitle">c · o · n · t · a · c · t</p>
        <h1>
          Get in <span className="accent">touch</span>
        </h1>
        <p className="hero-tag">
          Always happy to chat about research, collaborations, or where to snowboard in Japan.
        </p>

        <ul className="contact-list">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <span className="contact-label">{l.label}</span>
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
