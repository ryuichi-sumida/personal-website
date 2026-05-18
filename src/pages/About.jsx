import PageTransition from '../components/PageTransition'
import { useLanguage } from '../i18n.jsx'
import photoSingapore from '../assets/ryuichi.jpg'
import photoFuji from '../assets/fuji.jpg'
import './pages.css'

const sentences = (lines) =>
  lines.flatMap((s, j) => (j === 0 ? [s] : [<br key={j} />, s]))

export default function About() {
  const { t } = useLanguage()
  const a = t.about
  return (
    <PageTransition>
      <article className="page">
        <div className="kanji-watermark">紹介</div>
        {a.subtitle && <p className="subtitle">{a.subtitle}</p>}
        <h1>
          {a.h1a} <span className="accent">{a.h1b}</span>
        </h1>
        {a.tag && <p className="hero-tag">{a.tag}</p>}

        <div className="about-photos">
          <figure className="about-photo">
            <img src={photoSingapore} alt="Ryuichi in Singapore" />
            <figcaption>Marina Bay, Singapore</figcaption>
          </figure>
          <figure className="about-photo">
            <img src={photoFuji} alt="Ryuichi at the summit of Mount Fuji" />
            <figcaption>Mount Fuji summit</figcaption>
          </figure>
        </div>

        <h2>{a.researchHeading}</h2>
        <p>{sentences(a.research)}</p>

        <h2>{a.currentlyHeading}</h2>
        <ul className="bullets">
          {a.currently.map((item, i) => <li key={i}>{item}</li>)}
        </ul>

        <h2>{a.hobbiesHeading}</h2>
        <p>{sentences(a.hobbies)}</p>
      </article>
    </PageTransition>
  )
}
