import PageTransition from '../components/PageTransition'
import './pages.css'

export default function CV() {
  return (
    <PageTransition>
      <article className="page">
        <div className="kanji-watermark">履歴</div>
        <p className="subtitle">c · v</p>
        <h1>
          Curri<span className="accent">culum</span>
        </h1>
        <p className="hero-tag">Education, work, and a few side quests.</p>

        <h2>Education</h2>
        <ul className="cv-list">
          <li>
            <span className="cv-when">2020 – 2024</span>
            <span className="cv-what">B.Sc. — your university</span>
          </li>
          <li>
            <span className="cv-when">2024 – present</span>
            <span className="cv-what">M.Sc. / Ph.D. / role — your program</span>
          </li>
        </ul>

        <h2>Experience</h2>
        <ul className="cv-list">
          <li>
            <span className="cv-when">2025 – now</span>
            <span className="cv-what">AI Researcher — your lab/company</span>
          </li>
          <li>
            <span className="cv-when">2024</span>
            <span className="cv-what">Internship — somewhere cool</span>
          </li>
        </ul>

        <h2>Skills</h2>
        <div className="chips">
          {['Python', 'PyTorch', 'JAX', 'TensorFlow', 'Rust', 'TypeScript', 'D3.js', 'BigQuery', 'NLP', 'CV', 'RL'].map((s) => (
            <span key={s} className="chip">{s}</span>
          ))}
        </div>

        <h2>Languages</h2>
        <ul className="bullets">
          <li>日本語 — native</li>
          <li>English — professional</li>
        </ul>

        <p style={{ marginTop: 48 }}>
          <a className="link" href="#">Download full CV (PDF) →</a>
        </p>
      </article>
    </PageTransition>
  )
}
