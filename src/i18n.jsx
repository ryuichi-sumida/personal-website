import { createContext, useContext, useEffect, useState } from 'react'

const translations = {
  en: {
    menu: {
      brandSub: 'Kyoto, Japan',
      langToggle: '日本語',
      items: [
        { to: '/', label: 'About', kanji: '紹介', romaji: 'shōkai' },
        { to: '/publications', label: 'Publications', kanji: '論文', romaji: 'ronbun' },
        { to: '/cv', label: 'CV', kanji: '履歴', romaji: 'rireki' },
        { to: '/contact', label: 'Contact', kanji: '連絡', romaji: 'renraku' },
      ],
    },
    about: {
      subtitle: 'a · b · o · u · t',
      h1a: 'Ryuichi',
      h1b: 'Sumida',
      tag: 'AI researcher · Kyoto · snowboarder off-season.',
      aboutHeading: 'About',
      bio: [
        [
          "I'm a Ph.D. student at Kyoto University researching long-term memory for conversational AI — how chatbots should remember, forget, and grow with the people they talk to.",
          "My work draws on psychological models of memory importance and forgetting, retrieval-augmented generation, and on-device multimodal inference.",
        ],
        [
          'I play soccer through the snowboard off-season (April – October),',
          'and snowboard during the on-season (November – March).',
        ],
      ],
      currentlyHeading: 'Currently',
      currently: [
        <>Building <em>Luke</em> — a fully on-device AI life-companion for iPhone.</>,
        'Researching multimodal long-term memory for conversational AI.',
        'Collaborating with Equmenopolis on long-term memory for avatar-based English conversation.',
      ],
    },
    publications: {
      subtitle: 'p · u · b · l · i · c · a · t · i · o · n · s',
      h1a: 'Publi',
      h1b: 'cations',
      tag: 'Selected papers on long-term memory, RAG, and multimodal alignment.',
      papersHeading: 'Papers',
    },
    cv: {
      subtitle: 'c · v',
      h1a: 'Curri',
      h1b: 'culum',
      tag: 'Education, work, and a few side quests.',
      educationHeading: 'Education',
      education: [
        { when: 'Mar 2023', what: 'B.Sc. in Mathematics — The University of Tokyo' },
        { when: 'Mar 2025', what: 'M.Sc. — Kyoto University, Graduate School of Informatics' },
        { when: 'Apr 2025 – present', what: 'Ph.D. (in progress) — Kyoto University, Intelligence Science' },
      ],
      experienceHeading: 'Experience',
      experience: [
        { when: 'Sep 2025 – present', what: 'Equmenopolis Inc. — long-term memory architecture for avatar-based English conversation' },
        { when: 'Sep 2025 – present', what: 'National Institute of Informatics, Bono Lab — dialogue systems on AR/VR devices' },
        { when: 'Aug 2023 – Mar 2024', what: 'RIKEN, Guardian Robot Project — multimodal dialogue agents' },
      ],
      awardsHeading: 'Awards',
      awards: [
        { when: '2024', what: 'JSAI SIG Best Paper (人工知能学会 研究会優秀賞)' },
        { when: '2025', what: 'APSIPA ASC 3-Minute Thesis Competition — 2nd Place' },
      ],
      skillsHeading: 'Skills',
      languagesHeading: 'Languages',
      languages: ['日本語 — native', 'English — professional'],
    },
    contact: {
      subtitle: 'c · o · n · t · a · c · t',
      h1a: 'Get in',
      h1b: 'touch',
      tag: 'Always happy to chat about research, collaborations, or where to snowboard in Japan.',
    },
  },
  ja: {
    menu: {
      brandSub: '京都 / Kyoto',
      langToggle: 'English',
      items: [
        { to: '/', label: '紹介', kanji: '紹介', romaji: 'about' },
        { to: '/publications', label: '論文', kanji: '論文', romaji: 'publications' },
        { to: '/cv', label: '履歴', kanji: '履歴', romaji: 'cv' },
        { to: '/contact', label: '連絡', kanji: '連絡', romaji: 'contact' },
      ],
    },
    about: {
      subtitle: 'し · ょ · う · か · い',
      h1a: '住田',
      h1b: '龍宇一',
      tag: 'AI研究者 · 京都 · オフシーズンはスノーボード',
      aboutHeading: 'About',
      bio: [
        [
          '京都大学博士課程に在籍し、対話AIのための長期記憶を研究しています。',
          'チャットボットがどのように記憶し、忘れ、対話相手と共に成長していくべきか — 心理学に基づく記憶の重要度・忘却モデル、検索拡張生成（RAG）、オンデバイスでのマルチモーダル推論を軸に取り組んでいます。',
        ],
        [
          'スノーボードのオフシーズン（4月〜10月）はサッカーをしていて、',
          'オンシーズン（11月〜3月）はスノーボードに出かけています。',
        ],
      ],
      currentlyHeading: '現在',
      currently: [
        <>iPhone向け完全オンデバイスAIライフコンパニオン <em>Luke</em> を開発中。</>,
        '対話AIのためのマルチモーダル長期記憶を研究中。',
        '株式会社Equmenopolisと連携し、アバター英会話への長期記憶機能を実装中。',
      ],
    },
    publications: {
      subtitle: 'ろ · ん · ぶ · ん',
      h1a: '論',
      h1b: '文',
      tag: '長期記憶・RAG・マルチモーダルアライメントに関する選定論文。',
      papersHeading: '論文',
    },
    cv: {
      subtitle: 'り · れ · き',
      h1a: '履',
      h1b: '歴',
      tag: '学歴・職歴と、いくつかの寄り道。',
      educationHeading: '学歴',
      education: [
        { when: '2023年3月', what: '東京大学 理学部 数学科 卒業' },
        { when: '2025年3月', what: '京都大学大学院 情報学研究科 修士課程修了' },
        { when: '2025年4月 – 現在', what: '京都大学大学院 情報学研究科 知能情報学コース 博士後期課程' },
      ],
      experienceHeading: '職歴・研究歴',
      experience: [
        { when: '2025年9月 – 現在', what: '株式会社Equmenopolis — アバター英会話への長期記憶アーキテクチャ実装' },
        { when: '2025年9月 – 現在', what: '国立情報学研究所 坊農研究室 — AR/VRデバイス上の対話システム開発' },
        { when: '2023年8月 – 2024年3月', what: '理化学研究所 ガーディアンロボットプロジェクト — マルチモーダル対話エージェント' },
      ],
      awardsHeading: '受賞',
      awards: [
        { when: '2024', what: '人工知能学会 研究会優秀賞' },
        { when: '2025', what: 'APSIPA ASC 3-Minute Thesis Competition 2位' },
      ],
      skillsHeading: 'スキル',
      languagesHeading: '言語',
      languages: ['日本語 — ネイティブ', 'English — Professional'],
    },
    contact: {
      subtitle: 'れ · ん · ら · く',
      h1a: 'お問い',
      h1b: '合わせ',
      tag: '研究・共同研究・日本でのスノーボード談義など、お気軽にどうぞ。',
    },
  },
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en'
    return localStorage.getItem('lang') || 'en'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggle = () => setLang((l) => (l === 'en' ? 'ja' : 'en'))

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
