import PageTransition from '../components/PageTransition'
import { useLanguage } from '../i18n.jsx'
import photoUrl from '../assets/ryuichi.jpg'
import './pages.css'

export default function About() {
  const { t } = useLanguage()
  const a = t.about
  return (
    <PageTransition>
      <article className="page">
        <div className="kanji-watermark">紹介</div>
        <p className="subtitle">{a.subtitle}</p>
        <h1>
          {a.h1a} <span className="accent">{a.h1b}</span>
        </h1>
        <p className="hero-tag">{a.tag}</p>

        <figure className="about-photo">
          <img src={photoUrl} alt="Ryuichi Sumida" />
          <figcaption>Marina Bay, Singapore</figcaption>
        </figure>

        <h2>{a.aboutHeading}</h2>
        {a.bio.map((paragraph, i) => (
          <p key={i}>
            {paragraph.flatMap((sentence, j) =>
              j === 0 ? [sentence] : [<br key={j} />, sentence]
            )}
          </p>
        ))}

        <h2>{a.currentlyHeading}</h2>
        <ul className="bullets">
          {a.currently.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </article>
    </PageTransition>
  )
}
