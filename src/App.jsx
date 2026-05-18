import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Menu from './components/Menu'
import SnowfallCanvas from './components/SnowfallCanvas'
import MountainBg from './components/MountainBg'
import About from './pages/About'
import Publications from './pages/Publications'
import CV from './pages/CV'
import Contact from './pages/Contact'

export default function App() {
  const location = useLocation()

  return (
    <div className="app">
      <Menu />
      <main style={{ position: 'relative' }}>
        <MountainBg />
        <SnowfallCanvas />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<About />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  )
}
