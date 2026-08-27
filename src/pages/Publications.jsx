import PageTransition from '../components/PageTransition'
import { useLanguage } from '../i18n.jsx'
import './pages.css'

const pubs = [
  {
    year: '2024',
    title: {
      en: 'Should a RAG Chatbot Forget Unimportant Conversations? Exploring Importance and Forgetting with Psychological Insights',
      ja: 'RAG チャットボットは重要でない会話を忘れるべきか？ — 心理学における発見を用いた重要度と忘却の探究',
    },
    venue: {
      en: 'JSAI SIG-SLUD (15th Dialogue System Symposium)',
      ja: '人工知能学会 SLUD研究会（第15回対話システムシンポジウム）',
    },
    authors: 'R. Sumida, K. Inoue, T. Kawahara',
    note: {
      en: '🏆 JSAI SIG Best Paper Award (2024)',
      ja: '🏆 2024年度 人工知能学会 研究会優秀賞',
    },
    award: true,
    link: 'https://doi.org/10.11517/jsaislud.102.0_28',
  },
  {
    year: '2025',
    title: {
      en: 'Enhancing Long-term RAG Chatbots with Psychological Models of Memory Importance and Forgetting',
      ja: '記憶の重要度と忘却に関する心理学モデルによる長期RAGチャットボットの拡張',
    },
    venue: {
      en: 'Dialogue & Discourse (journal)',
      ja: 'Dialogue & Discourse (ジャーナル)',
    },
    authors: 'R. Sumida, K. Inoue, T. Kawahara',
    link: 'https://aclanthology.org/2025.dnd-16.12/',
  },
  {
    year: '2026',
    title: {
      en: 'MMA-ASIA: A Multilingual and Multimodal Alignment Framework for Culturally-Grounded Evaluation',
      ja: 'MMA-ASIA: 文化的根拠に基づく評価のための多言語・マルチモーダルアライメントフレームワーク',
    },
    venue: { en: 'ACL 2026', ja: 'ACL 2026' },
    authors: { en: 'co-authored', ja: '共著' },
    link: 'https://arxiv.org/abs/2510.08608',
  },
  {
    year: '2026',
    title: {
      en: 'Memory-Driven Self-Disclosure and Relational Turning Points: A Longitudinal Multimodal Study of Human-AI Interaction',
      ja: '記憶に基づく自己開示と関係の転換点 — 人間-AIインタラクションの縦断的マルチモーダル研究',
    },
    venue: { en: 'ICMI 2026', ja: 'ICMI 2026' },
    authors: 'R. Sumida, M. Saeki, M. Eguchi, S. Yoshikawa, K. Inoue, T. Kawahara, Y. Matsuyama',
    link: 'https://arxiv.org/abs/2607.14593',
  },
  {
    year: '2026',
    title: {
      en: 'MemUse: Moving Memory Evaluation from Direct QA to Natural Integration in Long-Term Human-AI Conversation',
      ja: 'MemUse: 長期的な人間-AI対話における記憶評価の直接QAから自然な統合への転換',
    },
    venue: { en: 'EMNLP 2026 (Main Conference)', ja: 'EMNLP 2026（本会議）' },
    authors: 'R. Sumida, K. Inoue, T. Kawahara',
    link: 'https://arxiv.org/abs/2608.24189',
  },
]

const pick = (v, lang) => (v && typeof v === 'object' && !v.props ? v[lang] : v)

const byYear = pubs.reduce((acc, pub) => {
  ;(acc[pub.year] ??= []).unshift(pub)
  return acc
}, {})
const years = Object.keys(byYear).sort((a, b) => b - a)

export default function Publications() {
  const { t, lang } = useLanguage()
  const p = t.publications
  return (
    <PageTransition>
      <article className="page">
        <div className="kanji-watermark">論文</div>
        {p.subtitle && <p className="subtitle">{p.subtitle}</p>}
        <h1>
          {p.h1a}<span className="accent">{p.h1b}</span>
        </h1>
        <p className="hero-tag">{p.tag}</p>

        <h2>{p.papersHeading}</h2>
        {years.map((year) => (
        <section key={year} className="pub-group">
          <h3 className="pub-group-year">{year}</h3>
          <ul className="pub-list">
          {byYear[year].map((pub, i) => (
            <li key={i} className="pub-item">
              <div className="pub-body">
                <a
                  href={pub.link}
                  className="pub-title"
                  target={pub.link.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  {pick(pub.title, lang)}
                </a>
                <div className="pub-meta">
                  <span>{pick(pub.authors, lang)}</span>
                  <span className="pub-venue">{pick(pub.venue, lang)}</span>
                </div>
                {pub.note && (
                  <div
                    className="pub-meta"
                    style={{
                      marginTop: 4,
                      color: pub.award ? '#e8b08a' : 'var(--slate-soft)',
                      fontWeight: pub.award ? 600 : 400,
                    }}
                  >
                    {pick(pub.note, lang)}
                  </div>
                )}
              </div>
            </li>
          ))}
          </ul>
        </section>
        ))}
      </article>
    </PageTransition>
  )
}
