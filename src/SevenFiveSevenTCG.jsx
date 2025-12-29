import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Flame, Package, HelpCircle, Mail } from 'lucide-react'

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'black'
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.0, ease: 'linear' }}
        style={{
          width: 92, height: 92, borderRadius: 999,
          border: '10px solid var(--orange)',
          borderTopColor: 'white'
        }}
      />
    </motion.div>
  )
}

const SETS_2025 = [
  { name: 'Temporal Forces', rarity: 'rare' },
  { name: 'Twilight Masquerade', rarity: 'ultra' },
  { name: 'Shrouded Fable', rarity: 'rare' },
  { name: 'Stellar Crown', rarity: 'ultra' },
  { name: 'Surging Sparks', rarity: 'secret' },
]

export default function SevenFiveSevenTCG() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1700)
    return () => clearTimeout(t)
  }, [])

  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <div>
      {loading && <LoadingScreen />}

      <header className="header">
        <div className="container header-inner">
          <div className="brand">757TCG</div>
          <nav className="nav">
            <a href="#new">New</a>
            <a href="#sets">Sets</a>
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1 className="h1">
            Powering the Next Generation of <span>Collectors</span>
          </h1>
          <p className="sub">
            Singles. Bulk. Sealed product. Built by collectors — for collectors.
          </p>
          <button className="btn" onClick={() => document.getElementById('sets')?.scrollIntoView({ behavior: 'smooth' })}>
            View Products
          </button>
        </div>
      </section>

      <section id="new" className="section">
        <div className="container">
          <h2 className="section-title"><Flame size={22} color="var(--orange)" /> New & Upcoming</h2>
          <div className="grid">
            <div className="card r-ultra">
              <h3 style={{ marginTop: 0 }}>Ascended Heroes</h3>
              <p style={{ color: 'var(--muted)' }}>Sealed product arriving in 2026.</p>
              <button className="btn btn-outline" disabled>Notify Me (coming next)</button>
            </div>
            <div className="card r-rare">
              <h3 style={{ marginTop: 0 }}>Singles Inventory</h3>
              <p style={{ color: 'var(--muted)' }}>Thousands of cards for all collectors.</p>
              <button className="btn btn-outline" disabled>Browse (coming soon)</button>
            </div>
            <div className="card r-common">
              <h3 style={{ marginTop: 0 }}>Bulk Options</h3>
              <p style={{ color: 'var(--muted)' }}>Affordable entry points & resale lots.</p>
              <button className="btn btn-outline" disabled>View Options (coming soon)</button>
            </div>
          </div>
        </div>
      </section>

      <section id="sets" className="section">
        <div className="container">
          <h2 className="section-title"><Package size={22} color="var(--orange)" /> 2025 Pokémon Sets</h2>
          <div className="grid">
            {SETS_2025.map((s) => (
              <div key={s.name} className={`card r-${s.rarity}`}>
                <h3 style={{ marginTop: 0 }}>{s.name}</h3>
                <div className="badge">Status: <span className="soldout">Sold Out</span></div>
                <div style={{ height: 12 }} />
                <button className="btn" disabled style={{ width: '100%' }}>Unavailable</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section" style={{ background: '#070707' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 820 }}>
          <h2 className="section-title" style={{ justifyContent: 'center' }}>About 757TCG</h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.7 }}>
            Founded in 2025, 757TCG was created to give new and returning Pokémon collectors a better card-buying
            experience. From curated singles to bulk options and upcoming sealed releases, we focus on fair pricing,
            fast shipping, and community-first values.
          </p>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="container">
          <h2 className="section-title"><HelpCircle size={22} color="var(--orange)" /> FAQ (Admin Editable)</h2>
          <div style={{ display: 'grid', gap: 12, maxWidth: 900 }}>
            <details className="details">
              <summary>Are all cards authentic?</summary>
              <p>Yes — we only source authentic cards. (Answer will be editable via admin later.)</p>
            </details>
            <details className="details">
              <summary>How fast is shipping?</summary>
              <p>Fast turnaround with tracking. (Editable later.)</p>
            </details>
            <details className="details">
              <summary>Do you accept bulk buy-ins?</summary>
              <p>Yes — reach out in Contact for bulk inquiries. (Editable later.)</p>
            </details>
          </div>
        </div>
      </section>

      <section id="contact" className="section" style={{ background: '#070707' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 720 }}>
          <h2 className="section-title" style={{ justifyContent: 'center' }}><Mail size={22} color="var(--orange)" /> Contact</h2>
          <p style={{ color: 'var(--muted)' }}>Have a question or bulk inquiry? Reach out anytime.</p>
          <div style={{ height: 10 }} />
          <button className="btn" disabled>Contact Form (coming next)</button>
        </div>
      </section>

      <footer className="footer">© {year} 757TCG. All rights reserved.</footer>
    </div>
  )
}
