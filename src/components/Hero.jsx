import { ArrowDown, ArrowDownToLine, ArrowRight, BookOpen, Leaf, PawPrint } from 'lucide-react'
import { motion } from 'framer-motion'
import { cvPath } from '../data/portfolioData'

export default function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <motion.p className="eyebrow hero-label" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }}>
          <span className="label-rule" /> ANIMAL SCIENCES <span className="label-dot">/</span> ANIMAL NUTRITION
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.12 }}>
          Advancing animal nutrition <em>through science &amp; knowledge.</em>
        </motion.h1>
        <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }}>
          I’m Amna Arshad, an Animal Sciences graduate currently pursuing an M.Phil. in Animal Nutrition. My academic interests focus on animal nutrition, feed formulation, poultry production, and livestock management.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.42 }}>
          <a className="button button-green" href="#about">Explore my profile <ArrowRight size={16} /></a>
          <a className="button button-outline" href={cvPath} download="Amna_Arshad_Professional_CV.pdf"><ArrowDownToLine size={16} /> Download my CV</a>
        </motion.div>
        <div className="hero-note"><span className="note-line" /> Curious by nature. Grounded in science.</div>
      </div>

      <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}>
        <div className="portrait-mat">
          <div className="portrait-shape portrait-shape-one" />
          <div className="portrait-shape portrait-shape-two" />
          <div className="portrait-placeholder" role="img" aria-label="Replaceable portrait placeholder for Amna Arshad">
            <span className="portrait-orbit orbit-one" />
            <span className="portrait-orbit orbit-two" />
            <div className="portrait-monogram">AA</div>
            <div className="portrait-placeholder-label"><span className="placeholder-line" /> PORTRAIT PLACEHOLDER</div>
          </div>
          <div className="portrait-stamp"><PawPrint size={24} strokeWidth={1.2} /><span>ANIMAL<br />NUTRITION</span></div>
          <div className="floating-study-card">
            <span className="study-icon"><BookOpen size={17} /></span>
            <span><strong>M.Phil. Animal Nutrition</strong><small>The Islamia University of Bahawalpur</small></span>
            <ArrowDown size={16} className="study-arrow" />
          </div>
          <div className="leaf-note"><Leaf size={17} strokeWidth={1.4} /> Learning in progress</div>
        </div>
        <div className="hero-visual-index"><span>01</span> / 09</div>
      </motion.div>
    </section>
  )
}
