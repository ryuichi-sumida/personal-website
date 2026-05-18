import PageTransition from '../components/PageTransition'
import { useLanguage } from '../i18n.jsx'
import './pages.css'

const skills = ['Python', 'Swift', 'PyTorch', 'CoreML', 'Metal', 'ARKit', 'llama.cpp', 'GGUF', 'NLP', 'RAG', 'Multimodal']

export default function CV() {
  const { t } = useLanguage()
  const c = t.cv
  return (
    <PageTransition>
      <article className="page">
        <div className="kanji-watermark">履歴</div>
        <p className="subtitle">{c.subtitle}</p>
        <h1>
          {c.h1a}<span className="accent">{c.h1b}</span>
        </h1>
        <p className="hero-tag">{c.tag}</p>

        <h2>{c.educationHeading}</h2>
        <ul className="cv-list">
          {c.education.map((e, i) => (
            <li key={i}>
              <span className="cv-when">{e.when}</span>
              <span className="cv-what">{e.what}</span>
            </li>
          ))}
        </ul>

        <h2>{c.experienceHeading}</h2>
        <ul className="cv-list">
          {c.experience.map((e, i) => (
            <li key={i}>
              <span className="cv-when">{e.when}</span>
              <span className="cv-what">{e.what}</span>
            </li>
          ))}
        </ul>

        <h2>{c.awardsHeading}</h2>
        <ul className="cv-list">
          {c.awards.map((e, i) => (
            <li key={i}>
              <span className="cv-when">{e.when}</span>
              <span className="cv-what">{e.what}</span>
            </li>
          ))}
        </ul>

        <h2>{c.skillsHeading}</h2>
        <div className="chips">
          {skills.map((s) => (
            <span key={s} className="chip">{s}</span>
          ))}
        </div>

        <h2>{c.languagesHeading}</h2>
        <ul className="bullets">
          {c.languages.map((l, i) => <li key={i}>{l}</li>)}
        </ul>
      </article>
    </PageTransition>
  )
}
