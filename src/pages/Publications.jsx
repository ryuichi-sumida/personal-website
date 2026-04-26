import PageTransition from '../components/PageTransition'
import './pages.css'

const pubs = [
  {
    year: '2026',
    title: 'Sample paper title — replace with your actual publication',
    venue: 'Conference / Journal',
    authors: 'R. Sumida, A. Author, B. Author',
    link: '#',
  },
  {
    year: '2025',
    title: 'Another sample publication',
    venue: 'Workshop on Something Interesting',
    authors: 'R. Sumida, C. Collaborator',
    link: '#',
  },
]

export default function Publications() {
  return (
    <PageTransition>
      <article className="page">
        <div className="kanji-watermark">論文</div>
        <p className="subtitle">p · u · b · l · i · c · a · t · i · o · n · s</p>
        <h1>
          Publi<span className="accent">cations</span>
        </h1>
        <p className="hero-tag">Selected papers, preprints, and writing.</p>

        <h2>Papers</h2>
        <ul className="pub-list">
          {pubs.map((p, i) => (
            <li key={i} className="pub-item">
              <div className="pub-year">{p.year}</div>
              <div className="pub-body">
                <a href={p.link} className="pub-title">{p.title}</a>
                <div className="pub-meta">
                  <span>{p.authors}</span>
                  <span className="pub-venue">{p.venue}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p style={{ marginTop: 32, color: 'var(--slate-soft)', fontSize: '0.85rem' }}>
          ※ Replace these with your real publications in <code>src/pages/Publications.jsx</code>.
        </p>
      </article>
    </PageTransition>
  )
}
