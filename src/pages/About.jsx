import PageTransition from '../components/PageTransition'
import './pages.css'

export default function About() {
  return (
    <PageTransition>
      <article className="page">
        <div className="kanji-watermark">紹介</div>
        <p className="subtitle">a · b · o · u · t</p>
        <h1>
          Ryuichi <span className="accent">Sumida</span>
        </h1>
        <p className="hero-tag">
          AI researcher · 京都 Kyoto · snowboarder off-season.
        </p>

        <h2>About</h2>
        <p>
          I'm an AI researcher based in Kyoto, Japan. My work sits at the
          intersection of machine learning, applied analysis, and the kind
          of practical engineering that turns research into things people
          actually use.
        </p>
        <p>
          When I'm not in front of a terminal, I'm probably on a snowboard
          somewhere in Nagano, or wandering Kyoto's quieter neighborhoods
          looking for a good coffee shop.
        </p>

        <h2>Currently</h2>
        <ul className="bullets">
          <li>Researching <em>(your current research direction here)</em>.</li>
          <li>Building open-source tooling around data analysis and visualization.</li>
          <li>Producing short-form video content explaining AI &amp; data ideas.</li>
        </ul>

        <h2>Elsewhere</h2>
        <p>
          You can find more of my applied work on my{' '}
          <a className="link" href="https://rui-dataanalysis.github.io/#portfolio" target="_blank" rel="noreferrer">
            data analysis portfolio →
          </a>
        </p>
      </article>
    </PageTransition>
  )
}
