import PageTransition from '../components/PageTransition'
import './pages.css'

const projects = [
  {
    name: 'Data Analysis Portfolio',
    desc: 'Interactive data analysis projects and case studies.',
    tag: 'web · viz',
    href: 'https://rui-dataanalysis.github.io/#portfolio',
  },
  {
    name: 'YouTube Shorts — AI / 野球データ',
    desc: 'Short-form videos turning baseball data into accessible AI-flavored stories.',
    tag: 'video · ja',
    href: '#',
  },
  {
    name: 'Your Project Here',
    desc: 'Add another project — code, paper, or experiment.',
    tag: 'tag · here',
    href: '#',
  },
]

export default function Projects() {
  return (
    <PageTransition>
      <article className="page">
        <div className="kanji-watermark">作品</div>
        <p className="subtitle">p · r · o · j · e · c · t · s</p>
        <h1>
          Pro<span className="accent">jects</span>
        </h1>
        <p className="hero-tag">Things I've built, written, or shipped.</p>

        <div className="project-grid">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.href}
              target={p.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="project-card"
            >
              <div className="project-tag">{p.tag}</div>
              <div className="project-name">{p.name}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-arrow">→</div>
            </a>
          ))}
        </div>
      </article>
    </PageTransition>
  )
}
